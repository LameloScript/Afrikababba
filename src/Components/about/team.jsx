import { FaTwitter as Twitter, FaFacebookF as Facebook, FaInstagram as Instagram, FaLinkedinIn as Linkedin } from 'react-icons/fa';

const TeamMember = ({ name, role, image, socialLinks = {} }) => (
  <div className="flex flex-col items-center space-y-3">
    <img 
      src={image} 
      alt={name}
      className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    />
    <div className="text-center">
      <h3 className="font-medium text-white">{name}</h3>
      <p className="text-green-500 text-sm">{role}</p>
    </div>
    <div className="flex space-x-3">
      {socialLinks.twitter && (
        <a href={socialLinks.twitter} className="text-gray-400 hover:text-green-500 transition-colors">
          <Twitter size={18} />
        </a>
      )}
      {socialLinks.facebook && (
        <a href={socialLinks.facebook} className="text-gray-400 hover:text-green-500 transition-colors">
          <Facebook size={18} />
        </a>
      )}
      {socialLinks.instagram && (
        <a href={socialLinks.instagram} className="text-gray-400 hover:text-green-500 transition-colors">
          <Instagram size={18} />
        </a>
      )}
      {socialLinks.linkedin && (
        <a href={socialLinks.linkedin} className="text-gray-400 hover:text-green-500 transition-colors">
          <Linkedin size={18} />
        </a>
      )}
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Abdoulaye Diallo",
      role: "Fondateur & CEO",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      socialLinks: {
        twitter: "https://twitter.com/abdoulaye",
        facebook: "https://facebook.com/abdoulaye",
        instagram: "https://instagram.com/abdoulaye",
        linkedin: "https://linkedin.com/in/abdoulaye"
      }
    },
    {
      name: "Fatou Diop",
      role: "Directrice des Opérations",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      socialLinks: {
        twitter: "https://twitter.com/fatou",
        facebook: "https://facebook.com/fatou",
        instagram: "https://instagram.com/fatou",
        linkedin: "https://linkedin.com/in/fatou"
      }
    },
    {
      name: "Mamadou Traoré",
      role: "Responsable Logistique",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      socialLinks: {
        twitter: "https://twitter.com/mamadou",
        facebook: "https://facebook.com/mamadou",
        instagram: "https://instagram.com/mamadou",
        linkedin: "https://linkedin.com/in/mamadou"
      }
    },
    {
      name: "Aïssatou Koné",
      role: "Chef de Projet IT",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      // socialLinks est manquant ici, donc socialLinks sera défini à {}
    }
  ];

  return (
    <div className="py-16 px-8 md:py-24 md:px-16 bg-black">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full text-green-500 text-sm mb-4">
          L'innovation au cœur de la plateforme
        </div>
        <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl xl:text-5xl font-pj">
          L'équipe incroyable derrière{" "}
          <span className="text-green-500 font-bold">Afrikababba</span>
        </h2>
        <p className="text-gray-300 mt-4">
          Notre équipe dévouée travaille sans relâche pour connecter les acheteurs africains aux fournisseurs chinois.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
