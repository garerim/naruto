"use client"

import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import Image from 'next/image'
import { motion } from 'motion/react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { LoginModal } from './login-modal'
import { useEffect, useState } from 'react'
import { User } from '@prisma/client'
import UserMenu from './user-menu'

export default function Header() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
    }, [])

    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault()
        const element = document.getElementById(targetId)
        if (element) {
            const elementRect = element.getBoundingClientRect()
            const elementTop = elementRect.top + window.scrollY
            const elementHeight = elementRect.height
            const windowHeight = window.innerHeight
            
            // Calculate position to center the element on screen
            const targetPosition = elementTop - (windowHeight / 2) + (elementHeight / 2)
            
            window.scrollTo({
                top: targetPosition,
                left: 0,
                behavior: 'smooth'
            })
        }
    }

    return (
        <>
            <motion.header className='hidden lg:flex justify-between items-center p-4 bg-background/50 backdrop-blur-sm fixed top-7 left-0 right-0 z-50 max-w-4/5 mx-auto border-2 rounded-lg select-none' initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                <nav className='flex gap-8'>
                    <Link className='text-xl' href="/">Accueil</Link>
                    <a 
                        className='text-xl cursor-pointer hover:text-primary transition-colors' 
                        onClick={(e) => handleSmoothScroll(e, 'play')}
                    >
                        Jouer
                    </a>
                    <Link className='text-xl' href="/">Vote</Link>
                    <Link className='text-xl' href={`${process.env.NEXT_PUBLIC_WIKI_URL}`}>Wiki</Link>
                </nav>
                <div className='flex gap-4'>
                    <ThemeToggle />
                    <Link href="https://discord.gg/fms">
                        <Button variant="secondary" size="icon" className='bg-blue-500 hover:bg-blue-600 text-white'>
                            <Image src="/discord.svg" alt="discord" width={25} height={25} />
                        </Button>
                    </Link>
                    <Button variant="outline" className='bg-yellow-500 hover:bg-yellow-400 text-white hover:text-white dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:text-white'>
                        Boutique
                    </Button>
                    {user ? <UserMenu user={user} handleLogout={handleLogout} /> : <LoginModal />}
                </div>
            </motion.header>


            <div className='flex lg:hidden justify-center items-center p-0 fixed top-7 right-7 z-50 mx-auto border-2 rounded-lg select-none'>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="secondary">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                        </SheetHeader>
                        <div className="grid flex-1 auto-rows-min gap-6 px-4 py-6">
                            <nav className='grid gap-4'>
                                <SheetClose asChild>
                                    <Link className='text-xl p-2 hover:bg-muted rounded-lg transition-colors' href="/">Accueil</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <a 
                                        className='text-xl p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer' 
                                        onClick={(e) => handleSmoothScroll(e, 'play')}
                                    >
                                        Jouer
                                    </a>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link className='text-xl p-2 hover:bg-muted rounded-lg transition-colors' href="/vote">Vote</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link className='text-xl p-2 hover:bg-muted rounded-lg transition-colors' href={`${process.env.NEXT_PUBLIC_WIKI_URL}`}>Wiki</Link>
                                </SheetClose>
                            </nav>
                            <div className='grid gap-4'>
                                <div className='flex items-center justify-between'>
                                    <span className='text-sm font-medium'>Theme</span>
                                    <ThemeToggle />
                                </div>
                                <Link href="https://discord.gg/fms">
                                    <Button variant="secondary" size="default" className='bg-blue-500 hover:bg-blue-600 text-white w-full'>
                                        <Image src="/discord.svg" alt="discord" width={25} height={25} />
                                        Discord
                                    </Button>
                                </Link>
                                <Button variant="outline" className='bg-yellow-500 hover:bg-yellow-400 text-white hover:text-white dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:text-white w-full'>
                                    Boutique
                                </Button>
                                {user ? <UserMenu user={user} handleLogout={handleLogout} /> : <LoginModal />}
                            </div>
                        </div>
                        <SheetFooter>
                            <Image src="/logo.png" alt="logo" width={200} height={200} className='mx-auto' />
                            <SheetClose asChild>
                                <Button variant="outline" className='w-full'>Fermer</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}
