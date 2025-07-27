import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { User } from '@prisma/client'
import Image from 'next/image'
import { Button } from './ui/button'

interface UserMenuProps {
    user: User
    handleLogout: () => void
}

export default function UserMenu({ user, handleLogout }: UserMenuProps) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className='bg-green-500 hover:bg-green-400 text-white hover:text-white dark:bg-green-500 dark:hover:bg-green-400 dark:text-white'>
                    <Image src="/steve.jpg" alt="steve" width={25} height={25} />
                    {user.pseudo}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    Mon profil
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <button onClick={handleLogout}>
                        Déconnexion
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
