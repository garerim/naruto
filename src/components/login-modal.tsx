'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { Label } from './ui/label';
import { Input } from './ui/input';
import { loginAction } from '@/lib/actions';
import { useState } from 'react';
import { toast } from 'sonner';

export const LoginModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true)
        try {
            const result = await loginAction(formData)
            
            if (result.error) {
                toast.error(result.error)
            } else if (result.success && result.user) {
                // Enregistrer l'utilisateur en localStorage
                localStorage.setItem('user', JSON.stringify(result.user))
                toast.success(`Connecté en tant que ${result.user.pseudo}`)
                setIsOpen(false)
            }
        } catch (error) {
            toast.error('Une erreur est survenue')
            console.error('Login error:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (    
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className='bg-green-500 hover:bg-green-400 text-white hover:text-white dark:bg-green-500 dark:hover:bg-green-400 dark:text-white'>
                    <Image src="/steve.jpg" alt="steve" width={25} height={25} />
                    Se connecter
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Se connecter</DialogTitle>
                </DialogHeader>
                <form className='flex flex-col gap-4' action={handleSubmit}>
                    <Label htmlFor="pseudo">Pseudo</Label>
                    <Input 
                        id="pseudo" 
                        name="pseudo" 
                        type="text" 
                        placeholder="Pseudo" 
                        required 
                        disabled={isLoading}
                    />
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Connexion...' : 'Se connecter'}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
