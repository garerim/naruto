import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-accent py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section Logo et Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="FMS Logo"
                width={96}
                height={96}
                className="mr-3"
              />
              <h3 className="text-xl">FMS</h3>
            </div>
            <p className="text-sm mb-2">
              <span className="text-lg">FMS © 2025</span>
            </p>
            <p className="text-xs opacity-75 mt-2">
              FMS est un serveur Minecraft de jeu de rôle base sur l&apos;univers Naruto.
            </p>
          </div>

          {/* Section Voir plus */}
          <div>
            <h4 className="text-lg mb-4">Voir plus</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline transition-colors hover:text-blue-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/play" className="hover:underline transition-colors hover:text-blue-200">
                  Jouer
                </Link>
              </li>
              <li>
                <Link href="/vote" className="hover:underline transition-colors hover:text-blue-200">
                  Vote
                </Link>
              </li>
              <li>
                <Link href="/wiki" className="hover:underline transition-colors hover:text-blue-200">
                  Wiki
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Suivez-nous */}
          <div>
            <h4 className="text-lg mb-4">Suivez-nous !</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://discord.gg/fms" className="flex items-center hover:underline transition-colors hover:text-blue-200">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.606 4.4c-3.239 4.83-4.124 9.537-3.685 14.173a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://www.tiktok.com/@fmsrp" className="flex items-center hover:underline transition-colors hover:text-blue-200">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005.76 20.5a6.34 6.34 0 0010.86-4.43V7.56a8.16 8.16 0 004.77 1.17V6.69z"/>
                  </svg>
                  TikTok
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@FMSRP" className="flex items-center hover:underline transition-colors hover:text-blue-200">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Documents legaux */}
          <div>
            <h4 className="text-lg mb-4">Documents legaux</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/mentions" className="hover:underline transition-colors hover:text-blue-200">
                  Mentions legales
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:underline transition-colors hover:text-blue-200">
                  Conditions generales d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:underline transition-colors hover:text-blue-200">
                  Politique de confidentialite
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary" />

        <div className="text-center text-sm opacity-75">
          <p>© 2025 FMS. Tous droits reserves.</p>
        </div>
      </div>
    </footer>
  )
}
