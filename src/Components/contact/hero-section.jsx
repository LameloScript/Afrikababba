import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import logo from "../../assets/woman.png";

const HeroSection = () => {
  return (
    <div className="w-full min-h-[300px] relative bg-[#0F0F0F]">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${logo})`, // Utilisation correcte de l'interpolation
        }}
      ></div>

      {/* Superposition pour l'obscurcissement */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Titre principal */}
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Nous contacter
        </h1>

        {/* Fil d'Ariane */}
        <nav className="flex items-center justify-center space-x-2 text-sm md:text-lg mt-16 mb-6">
          <Link
            to="/"
            className="text-white hover:text-gray-400 transition-colors"
          >
            Accueil
          </Link>
          <MdKeyboardArrowRight className="w-4 h-4 text-gray-400" />
          <span className="text-[#30b862]">Nous contacter</span>
        </nav>

        {/* Effets de flou en arrière-plan */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default HeroSection;
