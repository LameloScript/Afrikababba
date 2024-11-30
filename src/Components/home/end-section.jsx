import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, AlertCircle } from "lucide-react";

const EndSection = () => {
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full bg-[#0F0F0F] text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Content */}
          <motion.div variants={scrollVariants} className="space-y-8 flex flex-col justify-center">
            <div>
              <div className="flex">
                <div className="inline-block md:justify-center justify-start px-4 bg-green-900/30 rounded-full text-green-500 text-sm mt-8">
                  RECLAMATIONS
                </div>
              </div>
              <h2 className="text-3xl font-normal leading-normal text-white text-left sm:text-4xl xl:text-5xl pt-8">
                Service de Réclamations &{" "}
                <span className="text-green-500 font-bold">
                  Assistance Client
                </span>
              </h2>

              <p className="text-gray-400 text-left pt-8">
                Pour un accompagnement aux problèmes liés aux motifs cités
                ci-dessus, nous vous recommandons d'effectuer toute opération
                dans la plateforme cela nous permettra de mieux situer le
                problème et apporter la solution adéquate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="bg-[#27272A] p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 border border-[#518F23]/20">
                <RefreshCw className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-left">
                  Politique de Retour
                </h3>
                <p className="text-gray-400 text-left">
                  Retournez vos produits dans les 30 jours suivant l'achat.
                </p>
              </div>
              <div className="bg-[#27272A] p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 border border-[#518F23]/20">
                <ShieldCheck className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-left">
                  Garantie Produit
                </h3>
                <p className="text-gray-400 text-left">
                  Protection contre les produits endommagés ou non conformes.
                </p>
              </div>
            </div>

            <div>
              <a href="/contact">
              <button className="px-6 py-3 rounded-full bg-green-500 text-black font-semibold hover:bg-[#3F6D1B] transition-colors duration-300 flex items-center">
                Déposer une réclamation
                <AlertCircle className="w-4 h-4 ml-2" />
              </button>
              </a>
              
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={scrollVariants} className="relative group flex items-stretch">
            <div className="absolute inset-0 bg-gradient-to-r from-[#518F23] to-[#3F6D1B] rounded-lg opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-2xl flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1530541263627-4314dd7a44c2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Service client"
                className="w-full h-2/2 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent opacity-60"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EndSection;
