const SupplierSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full bg-[#0F0F0F] text-white ">
      {/* Colonne de gauche (Image) */}
      <div className="w-full lg:w-1/2 flex md:flex md:items-center md:justify-center">
        <img
          src="https://images.unsplash.com/photo-1610473068872-908afb1a7317?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Remplacez par l'URL de votre image
          alt="Écosystème AfrikAbaba"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Colonne de droite (Contenu texte) */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center p-6 lg:p-12">
        <div className="text-left space-y-6">
          <h2 className="text-2xl font-extrabold text-white sm:text-5xl">
            {" "}
            AfrikAbaba vous invite à{" "}
            <strong className="block font-extrabold text-green-500">
              intégrer un écosystème unique{" "}
            </strong>{" "}
          </h2>
          <p className="text-lg text-gray-300">
            AfrikAbaba vous invite à intégrer un écosystème unique qui connecte
            les transitaires de confiance à des fournisseurs et des clients en
            Afrique. Faites partie d’une plateforme où la transparence,
            l’efficacité, et la collaboration sont au cœur de chaque
            interaction.
          </p>

          <h3 className="text-2xl font-semibold text-white">
            Pourquoi devenir transitaire sur AfrikAbaba ?
          </h3>

          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>
              <strong>Accès direct à une clientèle diversifiée :</strong>{" "}
              Collaborez avec des fournisseurs internationaux et des acheteurs
              locaux pour des livraisons efficaces.
            </li>
            <li>
              <strong>Gestion simplifiée des expéditions :</strong> Suivez et
              gérez facilement vos commandes grâce à nos outils de suivi et de
              gestion intégrés.
            </li>
            <li>
              <strong>Opportunités de croissance :</strong> Étendez vos
              activités à de nouveaux marchés tout en bénéficiant de notre
              assistance pour optimiser vos opérations.
            </li>
            <li>
              <strong>Paiements sécurisés :</strong> Recevez des paiements
              fiables pour vos services via notre solution HappyPay.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-white">
            Ce que nous offrons aux transitaires
          </h3>

          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>
              Une plateforme intuitive pour suivre les expéditions et gérer les
              commandes.
            </li>
            <li>
              Un réseau fiable de fournisseurs certifiés et d'acheteurs
              vérifiés.
            </li>
            <li>
              Un support dédié pour vous accompagner dans toutes vos démarches.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold text-white">
            Rejoignez-nous dès aujourd'hui !
          </h3>

          <ol className="list-decimal pl-5 text-gray-300 space-y-2">
            <li>Inscrivez-vous en quelques clics.</li>
            <li>
              Renseignez vos informations d’entreprise (pays de couverture,
              modes de transport, tarifs).
            </li>
            <li>
              Commencez à recevoir des demandes de livraison et développez votre
              activité avec AfrikAbaba.
            </li>
          </ol>

          <p className="text-lg text-gray-300">
            Transformez votre activité en collaborant avec AfrikAbaba, votre
            partenaire de confiance pour un commerce international fluide et
            sans frontières.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupplierSection;
