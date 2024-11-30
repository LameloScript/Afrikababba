const SupplierSection = () => {
  return (
    <section className="flex flex-col lg:flex-row  w-full bg-[#0F0F0F] text-white">
      {/* Colonne de gauche (Image) */}
      <div className="w-full lg:w-1/2 h-2/3 p-4 lg:p-8 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1610473068872-908afb1a7317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Remplacez par l'URL de votre image
          alt="Personne souriante"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Colonne de droite (Contenu texte) */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center p-0 lg:p-12">
        <div className="text-left px-6 lg:px-12 pb-12">
          <h2 className="text-3xl font-normal leading-normal text-white sm:text-4xl xl:text-5xl pt-8 ">
            Rejoignez notre réseau{" "} <br />
            <span className="text-green-500 font-bold ">de transitaires</span>
          </h2>
          <p className="text-lg mb-6 text-gray-300 pt-12">
            Afrikababba est une plateforme B2B conçue pour les transitaires
            africains, leur permettant de se connecter efficacement avec des
            clients à travers toute l'Afrique. Dotée d’un système de paiement
            innovant, elle simplifie les transactions en permettant des
            paiements via mobile money, sans nécessité de carte bancaire.{" "}
          </p>
          <p className="text-lg mb-6 text-gray-300">
            Rejoignez notre réseau de transitaires et bénéficiez de nombreux
            avantages :
          </p>
          <ul className="list-disc pl-5 mb-6 text-gray-300">
            <li>
              Accédez à des millions de clients potentiels cherchant des
              services de logistique fiables.
            </li>
            <li>
              Simplifiez vos processus grâce à nos solutions de gestion des
              paiements et des transactions.
            </li>
            <li>
              Bénéficiez d’un support personnalisé pour optimiser la gestion de
              vos commandes et le suivi logistique.
            </li>
          </ul>
          
        </div>
      </div>
    </section>
  );
};

export default SupplierSection;
