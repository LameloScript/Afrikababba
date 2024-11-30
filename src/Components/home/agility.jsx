import { useEffect } from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { number: "+500", label: "Fournisseurs" },
    { number: "+150M", label: "De produits" },
    { number: "+5,500", label: "Catégories produits" },
    { number: "20", label: "Pays africains desservis" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-30");
          entry.target.classList.add("opacity-100");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".stat-item").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white px-8 md:px-48 py-10 w-full">
      <div className="flex md:justify-start justify-center mb-6">
        <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full text-green-500 text-sm">
          DÉCOUVREZ
        </div>
      </div>

      {/* Main Container Block */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-12">
        {/* Left Block */}
        <div className="flex-1 flex items-start mb-12 md:mb-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-white font-pj">
              Connectez-vous à{" "} <br />
              <span className="text-green-500 font-bold">
                l&apos;écosystème B2B africain
              </span>
            </h2>
          </div>
        </div>

        {/* Right Block */}
        <div className="flex-1 flex md:justify-end">
          <div className="flex flex-col  md:gap-8 lg:gap-4">
            {/* First Row: Fournisseurs and Produits */}
            <div className="flex flex-row gap-10 md:gap-28 lg:gap-32 justify-between md:justify-end items-center">
              {[stats[0], stats[1]].map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item flex flex-col items-center opacity-30 transition-opacity duration-700 ease-in-out w-auto text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <div className="flex flex-col gap-2 text-right">
                    <span className="text-5xl md:text-6xl font-bold">
                      {stat.number}
                    </span>
                    <span className="text-gray-400 text-base md:text-lg">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row: Catégories produits and Pays africains desservis */}
            <div className="flex flex-row gap-10 md:gap-28 lg:gap-32 justify-center items-center">
              {[stats[2], stats[3]].map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item flex flex-col items-center opacity-30 transition-opacity duration-700 ease-in-out w-auto text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <div className="flex flex-col gap-2 text-right">
                    <span className="text-5xl md:text-6xl font-bold">
                      {stat.number}
                    </span>
                    <span className="text-gray-400 text-base md:text-lg">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
