import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Globe2, ShieldCheck, Smartphone } from "lucide-react";
import PropTypes from "prop-types";

// Composant pour chaque carte de fonctionnalité
const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-zinc-900 rounded-lg p-6 flex flex-col gap-4 hover:bg-zinc-800 transition-colors"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center">
      <Icon className="w-6 h-6 text-green-500" />
    </div>
    <h3 className="text-white text-xl font-medium">{title}</h3>
    <p className="text-gray-400 text-base">{description}</p>
  </motion.div>
);

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Composant principal de la section
const DiscoverSection = () => {
  const features = [
    {
      icon: Globe2,
      title: "Plateforme B2B Internationale",
      description:
        "Connexion directe entre les acheteurs africains et les fournisseurs chinois, facilitant le commerce international B2B.",
    },
    {
      icon: Smartphone,
      title: "Paiement Mobile Money",
      description:
        "Système de paiement innovant permettant de régler vos fournisseurs directement via mobile money, sans nécessité de carte bancaire.",
    },
    {
      icon: ShieldCheck,
      title: "Sécurité Garantie",
      description:
        "Plateforme sécurisée conçue spécifiquement pour les besoins des entrepreneurs africains, avec des transactions protégées.",
    },
    {
      icon: CreditCard,
      title: "Transactions Simplifiées",
      description:
        "Solution de paiement intégrée qui élimine les obstacles traditionnels du commerce international pour les entrepreneurs africains.",
    },
  ];

  // Référence pour le titre et les cartes
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className="bg-black py-16 " ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Titre avec animation */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full text-green-500 text-sm mb-4">
            UNIQUE
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl xl:text-5xl font-pj">
              Découvrez ce qui rend{" "}
              <span className="text-green-500 font-bold   ">
                Afrikababba unique
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Cartes avec animation au scroll */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DiscoverSection;
