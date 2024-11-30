import logo from '../../assets/black-men.jpg';

const UsPage = () => {
  return (
    <div className="min-h-[500px] bg-black py-16">
      {/* Titre habituel */}

      <div className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        {/* Colonne de gauche - Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src={logo}
            alt="Collaboration entre l'Afrique et la Chine"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Colonne de droite - Contenu */}
        <div className="w-full md:w-1/2 space-y-8">
          <div className="inline-block px-4 py-1 justify-start bg-green-900/30 rounded-full text-green-500 text-sm mb-4">
            L'innovation au cœur de la plateforme
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl xl:text-5xl font-pj">
              Connecter les acheteurs africains <br />{" "}
              <span className="text-green-500 font-bold">
                aux fournisseurs chinois
              </span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg text-left">
              Afrikababba est une plateforme commerciale B2B conçue pour les
              Africains, avec un système de paiement innovant intégré qui vous
              permet de payer directement vos fournisseurs via mobile money,
              sans avoir besoin de carte bancaire.
            </p>
          </div>

          {/* Témoignage */}
          <div className="border-t border-gray-700 pt-6 mt-8">
            <blockquote className="text-gray-300 italic mb-4 text-left">
              "Afrikababba a transformé ma manière de faire des affaires. Le
              paiement via mobile money est tellement pratique !"
            </blockquote>

            <div className="flex items-center gap-3">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                alt="Koffi Kouadio"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-white">Koffi Kouadio</p>
                <p className="text-sm text-gray-400">Entrepreneur ivoirien</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsPage;
