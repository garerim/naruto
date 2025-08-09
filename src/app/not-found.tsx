'use client'

import { Button } from "@/components/ui/button"
import { Particles } from "@/components/magicui/particles"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particles background */}
      <Particles 
        className="absolute inset-0 w-full h-full -z-10" 
        color={theme === "dark" ? "#ffffff" : "#000000"} 
      />
      
      {/* Background pattern */}
      <div className="absolute inset-0 minecraft-pattern opacity-20 -z-5"></div>
      
      {/* Main content */}
      <div className="text-center z-10 px-4 max-w-2xl mx-auto">
        {/* 404 Title */}
        <div className="mb-8">
          <h1 className="naruto-title text-8xl md:text-9xl font-bold text-primary mb-4 float-animation">
            404
          </h1>
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/sharingan.png"
              alt="Sharingan"
              fill
              className="object-contain animate-spin"
              style={{ animationDuration: '8s' }}
            />
          </div>
        </div>

        {/* Error message */}
        <div className="mb-8 space-y-4">
          <h2 className="naruto-title text-2xl md:text-3xl font-bold text-foreground text-shadow">
            Page Introuvable !
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-shadow-light max-w-md mx-auto">
            Oups ! Il semblerait que cette page se soit perdue dans le village caché des feuilles...
          </p>
          <p className="text-base text-muted-foreground">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link href="/">
            <Button 
              size="lg" 
              className="btn-naruto px-8 py-3 text-lg font-bold hover-lift"
            >
              🏠 Retourner à l'accueil
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="px-8 py-3 text-lg font-semibold hover-lift"
          >
            ⬅️ Page précédente
          </Button>
        </div>

        {/* Fun ninja quote */}
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover-lift">
          <blockquote className="text-lg italic text-foreground/80 mb-2">
            "Un ninja ne doit jamais abandonner !"
          </blockquote>
          <cite className="text-sm text-muted-foreground">- Naruto Uzumaki</cite>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 opacity-30 hidden md:block">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain float-animation"
            style={{ animationDelay: '1s' }}
          />
        </div>
        <div className="absolute bottom-20 right-10 w-20 h-20 opacity-30 hidden md:block">
          <Image
            src="/madara.png"
            alt="Madara"
            fill
            className="object-contain float-animation"
            style={{ animationDelay: '2s' }}
          />
        </div>
      </div>

      {/* Additional background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-20"></div>
    </div>
  )
}
