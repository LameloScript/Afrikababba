import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo-afrika.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Bannière */}
      <div className="bg-green-500 text-black text-center py-2">
        <p className="text-xs md:text-xs">
          Devenez un transitaire en{" "}
          <Link
            to="/comment-devenir-un-transitaire"
            className="font-bold underline hover:text-gray-500"
          >
            Cliquant ici
          </Link>{" "}
          🚀
        </p>
      </div>

      {/* Header principal */}
      <header className="bg-black text-white py-4 px-4 md:px-0 lg:px-12 xl:px-6 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src={logo}
              alt="Afrikababba Logo"
              className="w-28 md:w-36 lg:w-40 xl:w-48 h-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10 text-sm lg:text-base xl:text-sm">
          <Link to="/" className="hover:text-green-300">
            Accueil
          </Link>
          <Link to="/how-it-works" className="hover:text-green-300">
            Comment ça marche
          </Link>
          <Link to="/comment-devenir-un-transitaire" className="hover:text-green-300">
            Comment devenir un transitaire ?
          </Link>
          <Link to="/about" className="hover:text-green-300">
            Qui sommes-nous ?
          </Link>
          <Link to="/contact" className="hover:text-green-300">
            Nous contacter
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex">
          <Link
            to="https://app.afrikababba.com"
            className="border border-green-500 text-green-500 px-3 py-1 lg:px-4 lg:py-1.5 xl:px-5 xl:py-2 rounded-full text-xs lg:text-sm xl:text-xs hover:bg-green-500 hover:text-black transition"
          >
            Se connecter - Fournisseur
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 md:hidden`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
          <nav className="flex flex-col items-start p-6 space-y-6 mt-12 text-sm">
            <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>
              Accueil
            </Link>
            <Link
              to="/how-it-works"
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Comment ça marche
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Qui sommes-nous ?
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Nous contacter
            </Link>
            <Link
              to="https://app.afrikababba.com"
              className="border border-green-500 text-green-500 w-full px-4 py-2 rounded-full hover:bg-green-500 hover:text-black transition mt-4"
              onClick={toggleMenu}
            >
              Se connecter
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;