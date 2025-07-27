import React from 'react'
import { Separator } from '@/components/ui/separator'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 mt-20">Mentions Legales</h1>
        
        <div className="font-sans text-base leading-relaxed max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Informations générales</h2>
            <p className="mb-4">
              Le présent site web est édité par l&apos;équipe FMS, serveur Minecraft de jeu de rôle 
              basé sur l&apos;univers Naruto créé par Masashi Kishimoto.
            </p>
            <p className="mb-4">
              <strong>Nom du site :</strong> FMS<br />
              <strong>Type :</strong> Site web de présentation et serveur Minecraft de jeu de rôle<br />
              <strong>Activité :</strong> Vente de contenu in-game (skins, accessoires, avantages)<br />
              <strong>Hébergement :</strong> Vercel Inc.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Propriété intellectuelle</h2>
            <p className="mb-4">
              L&apos;univers Naruto, ses personnages, lieux et éléments sont la propriété 
              exclusive de Masashi Kishimoto et de ses ayants droit. FMS n&apos;est pas 
              affilié à Masashi Kishimoto, Studio Pierrot, ou toute autre entité 
              officielle liée à la franchise Naruto.
            </p>
            <p className="mb-4">
              Le contenu original créé par la communauté FMS (textes, créations, 
              modifications) reste la propriété de leurs auteurs respectifs.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Activité commerciale</h2>
            <p className="mb-4">
              FMS est un projet à but lucratif proposant un serveur Minecraft de jeu de rôle 
              basé sur l'univers Naruto. Le serveur génère des revenus par la vente de 
              contenu in-game (skins, accessoires, avantages) aux joueurs.
            </p>
            <p className="mb-4">
              Cette activité commerciale est exercée dans le respect des droits de 
              propriété intellectuelle de Masashi Kishimoto et de Mojang Studios.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Responsabilité</h2>
            <p className="mb-4">
              L&apos;équipe FMS s&apos;efforce de maintenir des informations exactes et à jour, 
              mais ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité du 
              contenu proposé.
            </p>
            <p className="mb-4">
              Les utilisateurs utilisent le site et participent aux activités du 
              serveur sous leur propre responsabilité.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
            <p className="mb-4">
              Pour toute question concernant ces mentions légales ou le site web, 
              vous pouvez nous contacter via :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Discord : <a href="https://discord.gg/fms" className="text-blue-600 hover:underline">https://discord.gg/fms</a></li>
              <li>Email : fmshippudenrp@gmail.com</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Modification des mentions légales</h2>
            <p className="mb-4">
              L&apos;équipe FMS se réserve le droit de modifier ces mentions légales 
              à tout moment. Les modifications prendront effet dès leur publication 
              sur le site.
            </p>
          </section>

          <div className="text-center text-sm text-gray-600 mt-12">
            <p>Dernière mise à jour : Juillet 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
} 