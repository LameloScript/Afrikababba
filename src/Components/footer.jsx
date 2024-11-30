import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  
} from "react-icons/fa";
import logo from "../assets/logo-afrika.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Grow Logo" className="w-60 h-18" />{" "}
          {/* Remplacez par le chemin de votre logo */}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
         
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-8 space-y-6 md:space-y-0">
        {/* Navigation Links */}
        <nav className="md:flex items-center space-x-8 flex-row">
          
          <Link to="/politique-de-confidentialite" className="hover:text-green-300 hover:underline">
            Politique de confidentialité
          </Link>
          
          <Link to="/conditions-générales-utilisation" className="hover:text-green-300 hover:underline">
            Conditions générales d'utilisation
          </Link>
          <Link to="/Propriete-intectuelle" className="hover:text-green-300 hover:underline">
            Propriété intellectuelle
          </Link>
        </nav>

        {/* Subscription Form */}
        <form className="flex  space-x-2 flex-col md:flex-row w-full md:w-80 justify-end gap-4 md:gap-0">
          <input
            type="email"
            placeholder="Entrez votre email"
            className="py-2 px-4 rounded-md border border-gray-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-white text-black rounded-md hover:bg-gray-200"
          >
            Soumettre
          </button>
        </form>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8">
        <p>Copyright © 2024 Innovatelq</p>
      </div>
    </footer>
  );
};

export default Footer;
