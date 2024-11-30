const StatCard = ({ value, label, isPercentage = false }) => (
  <div className="flex flex-col space-y-1">
    <div className="text-4xl font-bold text-white">
      {value}
      {isPercentage && "%"}
    </div>
    <div className="text-green-500 text-sm">{label}</div>
  </div>
);

const Stats = () => {
  return (
    <div className=" flex flex-col justify-center md:flex-row mx-auto gap-20 bg-[#0F0F0F] p-8 md:p-20">
      {/* Section d'en-tête */}
      <div className="max-w-2xl text-left mb-12 mr-0 md:mr-8">
        <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full text-green-500 text-sm mb-4">
          Connection
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-normal leading-tight text-white text-left pb-4 sm:text-4xl xl:text-5xl font-pj">
            Connecter l'Afrique et la Chine{" "}
            <span className="text-green-500 font-bold">
              pour une croissance mutuelle
            </span>
          </h2>
        </div>
        <p className="text-gray-300 mb-6">
          Avec des milliers de transactions réussies, Afrikababba est votre
          passerelle vers des opportunités commerciales sans précédent. Nous
          nous soucions des détails pour que vous puissiez vous concentrer sur
          votre croissance. En travaillant avec nous, vous êtes assuré que vos
          transactions sont sécurisées et efficaces.
        </p>
        <a
          href="mailto:contact@afrikababba.com"
          className="bg-green-600 hover:bg-green-700 text-white hover:text-black px-6 py-3 rounded-full font-medium transition-colors"
        >
          Contactez-nous
        </a>
      </div>

      {/* Grille des statistiques */}
      <div className="grid grid-rows-2 md:grid-cols-2 gap-8 md:gap-12 md:grid-rows-2  ">
        <StatCard value="10K+" label="Clients satisfaits" />
        <StatCard
          value="95"
          label="Transactions sécurisées"
          isPercentage={true}
        />
        <StatCard value="500K+" label="Produits disponibles" />
        <StatCard value="24/7" label="Support client" />
      </div>
    </div>
  );
};

export default Stats;
