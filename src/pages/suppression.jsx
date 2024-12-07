import HeroSection from "../Components/hero-suppression";


const PolitiqueSuppressionCompte = () => {
  return (
    <div className=" text-white text-lg md:text-xl h-full bg-black px-8 py-8 md:px-40 md:py-10">
    <HeroSection />
    <br />
    <br />
    <div className="text-left">

    
      <h1 className="font-bold text-3xl">Politique de Suppression de Compte - AfrikAbabba</h1>
      <br />
      <h2 className="font-bold text-2xl">Introduction</h2>
      <p>
        Chez AfrikAbabba, nous accordons une grande importance à la protection
        des données personnelles et à la transparence dans le traitement de
        celles-ci. Cette politique détaille les modalités et conséquences de la
        suppression des comptes utilisateurs sur notre plateforme.
      </p>
      <br />
      <h2 className="font-bold text-2xl">Demande de Suppression</h2>
      <h3 className="font-bold text-xl">1. Modalités de Demande</h3>
      <p>
        Les utilisateurs peuvent demander la suppression de leur compte à tout
        moment en suivant les étapes ci-dessous :
      </p>
      <ul className="list-decimal pl-5 space-y-2">
        <li>Se connecter à leur compte AfrikAbabba.</li>
        <li>Accéder aux Paramètres de leur compte.</li>
        <li>Cliquer sur l’option « Supprimer mon compte ».</li>
        <li>
          Confirmer la suppression en entrant leur mot de passe et en suivant
          les instructions affichées.
        </li>
      </ul>
      <p>
        Alternativement, les utilisateurs peuvent contacter le service client à
        l'adresse e-mail suivante :{" "}
        <a href="mailto:support@afrikababba.com" className="text-blue-500 underline">
          support@afrikababba.com
        </a>
        .
      </p>
      <br />
      <h3 className="font-bold text-xl">2. Délai de Traitement</h3>
      <p>Une fois la demande de suppression reçue :</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          La demande sera traitée dans un délai maximum de 15 jours ouvrés.
        </li>
        <li>
          Une notification sera envoyée à l'utilisateur pour confirmer la
          suppression ou demander des informations supplémentaires si
          nécessaire.
        </li>
      </ul>
      <br />
      <h2 className="font-bold text-2xl">Conséquences de la Suppression</h2>
      <h3 className="font-bold text-xl">1. Suppression des Données</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Toutes les données personnelles associées au compte seront supprimées
          de manière définitive, à l'exception des données nécessaires pour
          respecter des obligations légales ou comptables.
        </li>
        <li>
          Les historiques de commandes, factures et transactions seront
          conservés pendant la durée exigée par la réglementation en vigueur.
        </li>
      </ul>
      <h3 className="font-bold text-xl">2. Accès au Compte</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          L'utilisateur ne pourra plus accéder à son compte ni récupérer les
          données supprimées.
        </li>
        <li>
          Les avis ou commentaires laissés sur la plateforme resteront
          anonymisés.
        </li>
      </ul>
      <h3 className="font-bold text-xl">3. Paiements en Cours</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Si l'utilisateur a des paiements ou des commandes en cours, la
          suppression sera différée jusqu’à la résolution de ces éléments.
        </li>
      </ul>
      <br />
      <h2 className="font-bold text-2xl">Exceptions à la Suppression</h2>
      <p>
        AfrikAbabba peut être amené à conserver certaines données, même après
        la suppression du compte, pour :
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Se conformer aux obligations légales (comptabilité, fiscalité, etc.).
        </li>
        <li>Résoudre des litiges ou prévenir des fraudes.</li>
        <li>
          Maintenir l’historique des transactions pour des raisons
          administratives.
        </li>
      </ul>
      <br />
      <h2 className="font-bold text-2xl">Réactivation de Compte</h2>
      <p>
        Une fois un compte supprimé, il ne pourra pas être réactivé. L'utilisateur
        devra créer un nouveau compte pour utiliser de nouveau la plateforme
        AfrikAbabba.
      </p>
      <br />
      <h2 className="font-bold text-2xl">Contact</h2>
      <p>
        Pour toute question ou assistance concernant la suppression de compte,
        veuillez nous contacter :
      </p>
      <p>
        <strong>E-mail :</strong>{" "}
        <a href="mailto:support@afrikababba.com" className="text-blue-500 underline">
          support@afrikababba.com
        </a>
      </p>
      <p>
        <strong>Téléphone :</strong> +221 33 123 45 67
      </p>
      <p>
        Nous sommes disponibles pour vous accompagner à chaque étape de ce
        processus.
      </p>
      </div>
    </div>
  );
};

export default PolitiqueSuppressionCompte;
