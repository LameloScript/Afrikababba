import img from "../../assets/hero-1.png";

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-[500px] md:h-[800px] bg-black text-white">
      {/* Lecture de la vidéo en arrière-plan */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={img}
      />

      {/* Overlay pour assombrir la vidéo */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Contenu de la section */}
      <div className="relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center justify-center  px-4">
        <h1 className="text-2xl md:text-7xl font-normal mb-4 leading-tight">
          Plateforme commerciale B2B <br />
          entre{" "}
          <span className="text-green-500 font-black">
            l&apos;Afrique et la Chine
          </span>
        </h1>

        {/* Barre de recherche */}
        <div className="mt-4 w-full flex justify-center px-4">
          <input
            type="text"
            placeholder="🔍 Recherche"
            className="w-full max-w-sm md:max-w-md p-3 rounded-md border border-gray-300 text-black placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Produits les plus recherchés */}
        <div className="mt-6 w-full text-gray-300 text-center">
          <p className="mb-3 md:mb-4">Produits les plus recherchés : </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              "Airpods",
              "Iphone 16 pro max",
              "Scooter",
              "Tablette Samsung",
            ].map((item, index) => (
              <button
                key={index}
                className="px-3 md:px-4 py-2 border border-gray-400 rounded-full text-white hover:bg-green-500 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
