import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll en haut de la page
  }, [pathname]); // Exécute à chaque changement de route

  return null; // Pas de rendu nécessaire
};

export default ScrollToTop;
