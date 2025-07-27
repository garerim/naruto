import React from 'react'
import { Separator } from '@/components/ui/separator'

export default function ConditionsGenerales() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 mt-20">Conditions Generales d'Utilisation</h1>
        
        <div className="font-sans text-base leading-relaxed max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Objet et champ d'application</h2>
            <p className="mb-4">
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès 
              et l'utilisation du site web FMS ainsi que la participation au serveur 
              Minecraft de jeu de rôle associé.
            </p>
            <p className="mb-4">
              En accédant au site, en rejoignant le serveur ou en effectuant des achats 
              de contenu in-game, vous acceptez sans réserve les présentes CGU.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Définitions</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>FMS :</strong> Serveur Minecraft de jeu de rôle basé sur l'univers Naruto</li>
              <li><strong>Utilisateur :</strong> Toute personne accédant au site, participant au serveur ou effectuant des achats</li>
              <li><strong>Serveur :</strong> Le serveur Minecraft de jeu de rôle FMS</li>
              <li><strong>Staff :</strong> L'équipe de modération et d'administration de FMS</li>
              <li><strong>Contenu in-game :</strong> Skins, accessoires, avantages et autres éléments virtuels vendus</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Conditions d'accès</h2>
            <p className="mb-4">
              <strong>Âge minimum :</strong> L'accès au serveur FMS est autorisé aux personnes 
              âgées de 13 ans minimum. Les mineurs doivent avoir l'autorisation parentale.
            </p>
            <p className="mb-4">
              <strong>Inscription :</strong> L'accès au serveur Minecraft est gratuit et nécessite 
              un compte Minecraft valide (Java Edition).
            </p>
            <p className="mb-4">
              <strong>Achats :</strong> Les achats de contenu in-game sont optionnels et 
              s'effectuent via notre boutique en ligne sécurisée.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Règles de conduite</h2>
            <h3 className="text-xl font-semibold mb-3">4.1 Comportement général</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Respecter tous les membres de la communauté</li>
              <li>Adopter un langage approprié et respectueux</li>
              <li>Éviter le spam, flood et messages hors-sujet</li>
              <li>Respecter les décisions du Staff</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.2 Contenu interdit</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Contenu pornographique, violent ou choquant</li>
              <li>Propos discriminatoires, racistes ou haineux</li>
              <li>Harcèlement sous toutes ses formes</li>
              <li>Publicité non autorisée</li>
              <li>Partage d'informations personnelles d'autrui</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.3 Règles de jeu de rôle</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Respecter l'univers Naruto et sa cohérence</li>
              <li>Éviter le Meta-gaming et le God-modding</li>
              <li>Respecter les autres joueurs et leurs personnages</li>
              <li>Suivre les règles spécifiques au jeu établies par le Staff</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Sanctions</h2>
            <p className="mb-4">
              En cas de non-respect des présentes CGU, les sanctions suivantes 
              peuvent être appliquées :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Avertissement</li>
              <li>Exclusion temporaire (mute, kick)</li>
              <li>Exclusion définitive (ban)</li>
            </ul>
            <p className="mb-4">
              Le Staff se réserve le droit d'appliquer les sanctions qu'il juge 
              appropriées selon la gravité des faits.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Conditions d'achat</h2>
            <h3 className="text-xl font-semibold mb-3">6.1 Contenu in-game</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Les achats de contenu in-game sont définitifs</li>
              <li>Le contenu acheté est lié à votre compte utilisateur</li>
              <li>Les prix sont indiqués en euros TTC</li>
              <li>Le paiement s'effectue via des moyens sécurisés (PayPal, Stripe)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">6.2 Remboursements</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Les remboursements ne sont accordés qu'en cas de dysfonctionnement technique</li>
              <li>Aucun remboursement pour changement d'avis ou ban du serveur</li>
              <li>Les demandes de remboursement doivent être formulées dans les 48h</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'univers Naruto appartient à Masashi Kishimoto. Minecraft appartient 
              à Mojang Studios. FMS respecte leurs droits de propriété intellectuelle 
              et utilise ces univers dans le cadre d'un serveur de jeu privé.
            </p>
            <p className="mb-4">
              Les créations originales des membres (personnages, histoires, artworks) 
              restent la propriété de leurs auteurs.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Responsabilité</h2>
            <p className="mb-4">
              FMS ne peut être tenu responsable des :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Interactions entre utilisateurs</li>
              <li>Contenus publiés par les utilisateurs</li>
              <li>Dommages résultant de l'utilisation du service</li>
              <li>Interruptions temporaires du service</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Données personnelles</h2>
            <p className="mb-4">
              FMS s'engage à respecter votre vie privée. Les données collectées 
              sont utilisées uniquement pour le fonctionnement du serveur et ne 
              sont pas transmises à des tiers.
            </p>
            <p className="mb-4">
              Pour plus d'informations, consultez notre 
              <a href="/legal/privacy" className="text-blue-600 hover:underline"> Politique de confidentialité</a>.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Modification des CGU</h2>
            <p className="mb-4">
              FMS se réserve le droit de modifier les présentes CGU à tout moment. 
              Les utilisateurs seront informés des modifications importantes.
            </p>
            <p className="mb-4">
              La poursuite de l'utilisation du service après modification vaut 
              acceptation des nouvelles conditions.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
            <p className="mb-4">
              Pour toute question concernant ces CGU, contactez-nous :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Discord : <a href="https://discord.gg/fms" className="text-blue-600 hover:underline">https://discord.gg/fms</a></li>
              <li>Email : fmshippudenrp@gmail.com</li>
            </ul>
          </section>

          <div className="text-center text-sm text-gray-600 mt-12">
            <p>Dernière mise à jour : Juillet 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
} 