export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Politique de confidentialité
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          
          <h2>Introduction</h2>
          <p>
            La protection de vos données personnelles est une priorité pour Hervé De Quélen. 
            Cette politique explique comment vos données sont collectées, utilisées et protégées.
          </p>

          <h2>Données collectées</h2>
          <p>
            Lorsque vous utilisez le formulaire de contact, nous collectons :
          </p>
          <ul>
            <li>Votre nom</li>
            <li>Votre adresse email</li>
            <li>Votre numéro de téléphone (optionnel)</li>
            <li>Le message que vous nous adressez</li>
          </ul>

          <h2>Utilisation des données</h2>
          <p>
            Vos données sont utilisées uniquement pour :
          </p>
          <ul>
            <li>Répondre à vos demandes de contact</li>
            <li>Vous fournir les informations demandées</li>
            <li>Établir un devis ou une proposition commerciale</li>
          </ul>

          <h2>Conservation des données</h2>
          <p>
            Vos données sont conservées pendant la durée nécessaire à la gestion de votre 
            demande, puis archivées conformément aux obligations légales.
          </p>

          <h2>Partage des données</h2>
          <p>
            Vos données personnelles ne sont jamais vendues, louées ou partagées avec des tiers 
            à des fins commerciales.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul>
            <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
          </ul>

          <h2>Exercer vos droits</h2>
          <p>
            Pour exercer l'un de ces droits, contactez-nous à :<br />
            <strong>contact@hervedequelen.fr</strong>
          </p>
          <p>
            Nous nous engageons à répondre dans un délai maximum de 30 jours.
          </p>

          <h2>Sécurité</h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
            nécessaires pour protéger vos données contre tout accès, modification, 
            divulgation ou destruction non autorisés.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site n'utilise pas de cookies de suivi, d'analyse ou de publicité. 
            Aucune donnée de navigation n'est collectée.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité :<br />
            Email : <strong>contact@hervedequelen.fr</strong>
          </p>

          <p className="text-sm text-gray-600 mt-8">
            Dernière mise à jour : 17 novembre 2025
          </p>

        </div>
      </section>
    </div>
  );
}
