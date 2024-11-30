const BecomeSupplier = () => {
  return (
    <section className="relative bg-[url(https://www.am-mohab.com/wp-content/uploads/2024/06/transitaire-tunisie-fret-tunisie-600x377.jpeg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 sm:bg-gradient-to-r"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-white sm:text-3xl">
            {" "}
            Boostez votre activité logistique dès aujourd'hui{" "}
            <strong className="block font-extrabold text-green-500">
              grâce à notre réseau exclusif.{" "}
            </strong>{" "}
          </h2>

          <p className="mt-4 max-w-lg text-white sm:text-xl">
            Faites partie de la plateforme leader connectant les fournisseurs à
            des milliers d'acheteurs en Afrique. Augmentez votre visibilité,
            développez votre activité et gagnez la confiance de nouveaux
            clients.
          </p>

          <ul className="mt-6 list-disc list-inside text-white space-y-2 sm:text-lg">
            <li>
              <strong>Accès à un réseau de partenaires fiables :</strong>{" "}
              Collaborez avec transporteurs, agents douaniers et entreprises
              exportatrices/importatrices.
            </li>
            <li>
              <strong>Outils technologiques performants :</strong> Bénéficiez de
              plateformes pour le suivi en temps réel, la gestion simplifiée des
              documents et plus encore.
            </li>
           
            <li>
              <strong>Visibilité accrue :</strong> Profitez d’une promotion sur
              nos plateformes et campagnes marketing ciblées.
            </li>
            
           
          </ul>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/devenir-transitaire"
              className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            >
              Devenir un transitaire
            </a>

            <a
              href="/contact"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeSupplier;
