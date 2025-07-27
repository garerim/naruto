'use server'

import { z } from 'zod'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'

const loginSchema = z.object({
    pseudo: z.string().min(1),
})

export async function loginAction(formData: FormData) {
    const parsed = loginSchema.safeParse({
        pseudo: formData.get('pseudo')
    })
    if (!parsed.success) {
        console.error('Validation failed:', parsed.error.message)
        return { error: 'Pseudo invalide' }
    }
    const { pseudo } = parsed.data
    console.log(pseudo)
    
    let user = await prisma.user.findUnique({
        where: {
            pseudo: pseudo
        }
    })
    
    if (!user) {
        user = await prisma.user.create({
            data: {
                pseudo: pseudo
            }
        })
        console.log('New user created:', user)
    } else {
        console.log('User found:', user)
    }

    return { 
        success: true, 
        user: {
            id: user.id,
            pseudo: user.pseudo,
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString()
        }
    }
}