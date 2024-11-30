import { useState, useRef, useEffect } from "react";
import { FiSearch, FiShoppingBag, FiCreditCard, FiTruck } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import img1 from "../../assets/web-1.png";
import img2 from "../../assets/web-2.png";
import img3 from "../../assets/web-3.png";
import img4 from "../../assets/web-4.png";

const WorkPage = () => {
  const features = [
    {
      icon: <FiSearch />,
      title: "Recherchez, filtrez parmi les millions de produits",
      description:
        "Produits mis à votre disposition pour trouver votre coup de cœur.",
      image: img1,
    },
    {
      icon: <FiShoppingBag />,
      title: "Commandez plus facilement vos produits",
      description:
        "Grâce aux notes et avis sur chaque produit pour garantir la qualité.",
      image: img3,
    },
    {
      icon: <FiCreditCard />,
      title: "Après avoir mis votre produit dans le panier",
      description: "Vous pouvez facilement payer avec votre compte mobile money.",
      image: img2,
    },
    {
      icon: <FiTruck />,
      title: "Ne vous paniquez plus pour le transport et la livraison",
      description:
        "Nous offrons un service de livraison rapide de la Chine vers l'Afrique, directement à votre porte.",
      image: img4,
    },
  ];

  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const headerRef = useRef(null);
  const isInView = useInView(headerRef);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.innerWidth >= 1024) {
      const handleWheel = (e) => {
        let shouldPreventDefault = true;

        if (e.deltaY > 0 && activeFeature >= features.length - 1) {
          shouldPreventDefault = false;
        } else if (e.deltaY < 0 && activeFeature <= 0) {
          shouldPreventDefault = false;
        }

        if (shouldPreventDefault) {
          e.preventDefault();
          if (isScrolling) return;
          setIsScrolling(true);

          if (e.deltaY > 0 && activeFeature < features.length - 1) {
            setActiveFeature((prev) => prev + 1);
          } else if (e.deltaY < 0 && activeFeature > 0) {
            setActiveFeature((prev) => prev - 1);
          }

          setTimeout(() => setIsScrolling(false), 500);
        }
      };

      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [activeFeature, features.length, isScrolling]);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white relative lg:overflow-hidden mt-10"
    >
      <div className="p-8 h-full">
        <motion.div
          ref={headerRef}
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full text-green-500 text-sm mb-4">
            L'innovation au cœur de la plateforme
          </div>
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl xl:text-5xl font-pj">
            Recherche, commande, paiement et livraison :{" "}
            <span className="text-green-500 font-bold">tout en un</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
          <div className="space-y-16 py-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`cursor-pointer flex items-start gap-4 transition-all duration-500 transform ${
                  activeFeature === index
                    ? "text-white scale-105 translate-x-4"
                    : "text-gray-100 scale-95 opacity-50"
                }`}
              >
                <div
                  className={`p-2 rounded-full border transition-colors duration-500 ${
                    activeFeature === index ? "border-white" : "border-gray-600"
                  }`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div className="text-left">
                  <h3 className="font-medium mb-2 text-lg md:text-xl lg:text-2xl">
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm md:text-base transition-colors duration-500 ${
                      activeFeature === index
                        ? "text-gray-200"
                        : "text-gray-500"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-full hidden lg:flex items-center">
            <div className="absolute w-full h-full flex items-center justify-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 transform ${
                    activeFeature === index
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={`Illustration ${index + 1}`}
                    className="rounded-lg w-full h-96 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
