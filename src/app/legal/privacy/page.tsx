import React from 'react'
import { Separator } from '@/components/ui/separator'

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 mt-20">Politique de Confidentialite</h1>
        
        <div className="font-sans text-base leading-relaxed max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              FMS s'engage à protéger la vie privée de ses utilisateurs. Cette politique 
              de confidentialité explique comment nous collectons, utilisons et protégeons 
              vos données personnelles sur notre serveur Minecraft et notre boutique en ligne.
            </p>
            <p className="mb-4">
              En utilisant nos services, vous acceptez les pratiques décrites dans 
              cette politique.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Données collectées</h2>
            <h3 className="text-xl font-semibold mb-3">2.1 Données d'identification</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Nom d'utilisateur Minecraft (UUID)</li>
              <li>Nom d'utilisateur Discord (pour le support)</li>
              <li>Adresse email (pour les achats et communications)</li>
              <li>Informations de facturation (pour les achats)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Données d'utilisation</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Activité de jeu sur le serveur Minecraft</li>
              <li>Statistiques de jeu et progression</li>
              <li>Historique des achats et transactions</li>
              <li>Logs de connexion et actions in-game</li>
              <li>Historique des sanctions (si applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.3 Données techniques</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Adresse IP de connexion au serveur</li>
              <li>Informations de connexion Minecraft</li>
              <li>Données de navigation sur le site web</li>
              <li>Informations de paiement (via PayPal/Stripe)</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Finalités de collecte</h2>
            <p className="mb-4">
              Nous collectons et utilisons vos données pour :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fournir et améliorer nos services de jeu</li>
              <li>Gérer votre compte et votre participation au serveur</li>
              <li>Traiter vos achats et transactions</li>
              <li>Assurer la modération et la sécurité du serveur</li>
              <li>Communiquer avec vous sur les activités et promotions</li>
              <li>Respecter nos obligations légales et fiscales</li>
              <li>Prévenir les abus, fraudes et violations des règles</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Base légale du traitement</h2>
            <p className="mb-4">
              Le traitement de vos données repose sur :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Consentement :</strong> Participation volontaire au serveur</li>
              <li><strong>Intérêt légitime :</strong> Sécurité et modération du serveur</li>
              <li><strong>Exécution d'un contrat :</strong> Traitement des achats et livraison du contenu</li>
              <li><strong>Obligation légale :</strong> Conformité fiscale et comptable</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Partage des données</h2>
            <p className="mb-4">
              Nous ne vendons ni ne louons vos données personnelles. Vos données 
              peuvent être partagées uniquement dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Avec l'équipe de modération FMS (accès restreint)</li>
              <li>En cas d'obligation légale (sur demande des autorités)</li>
              <li>Pour protéger nos droits et la sécurité des utilisateurs</li>
              <li>Avec des prestataires techniques (Mojang, hébergement)</li>
              <li>Avec des prestataires de paiement (PayPal, Stripe)</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Conservation des données</h2>
            <p className="mb-4">
              Nous conservons vos données aussi longtemps que nécessaire pour :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Votre participation active au serveur</li>
              <li>Respecter nos obligations légales et fiscales</li>
              <li>Résoudre des litiges commerciaux</li>
              <li>Prévenir les abus et fraudes</li>
              <li>Conserver les données de facturation (10 ans minimum)</li>
            </ul>
            <p className="mb-4">
              Les données d'utilisateurs inactifs depuis plus de 2 ans peuvent être 
              supprimées, sauf en cas d'obligation légale de conservation.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Sécurité des données</h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger 
              vos données contre :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>L'accès non autorisé</li>
              <li>La modification ou la suppression</li>
              <li>La divulgation accidentelle</li>
              <li>La perte de données</li>
            </ul>
            <p className="mb-4">
              Cependant, aucune transmission sur Internet n'est totalement sécurisée.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Vos droits</h2>
            <p className="mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Supprimer vos données (sous conditions)</li>
              <li><strong>Droit à la limitation :</strong> Limiter le traitement</li>
              <li><strong>Droit à la portabilité :</strong> Récupérer vos données</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer au traitement</li>
            </ul>
            <p className="mb-4">
              Pour exercer ces droits, contactez-nous via Discord ou email.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Cookies et technologies similaires</h2>
            <p className="mb-4">
              Notre site web utilise des cookies pour :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Améliorer votre expérience de navigation</li>
              <li>Analyser l'utilisation du site</li>
              <li>Retenir vos préférences</li>
            </ul>
            <p className="mb-4">
              Vous pouvez gérer les cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Transferts internationaux</h2>
            <p className="mb-4">
              Vos données peuvent être transférées vers des pays hors de l'Union 
              européenne, notamment vers les États-Unis (Mojang, PayPal, Stripe, Vercel).
            </p>
            <p className="mb-4">
              Ces transferts sont effectués avec des garanties appropriées pour 
              protéger vos données.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Modifications de la politique</h2>
            <p className="mb-4">
              Cette politique peut être modifiée pour refléter les changements 
              dans nos pratiques ou la législation.
            </p>
            <p className="mb-4">
              Les modifications importantes seront communiquées aux utilisateurs 
              via le serveur Minecraft et Discord.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
            <p className="mb-4">
              Pour toute question concernant cette politique de confidentialité 
              ou vos données personnelles :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Discord : <a href="https://discord.gg/fms" className="text-blue-600 hover:underline">https://discord.gg/fms</a></li>
              <li>Email : fmshippudenrp@gmail.com</li>
            </ul>
            <p className="mb-4">
              Vous pouvez également contacter l'autorité de contrôle compétente 
              (CNIL en France) si vous estimez que vos droits ne sont pas respectés.
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