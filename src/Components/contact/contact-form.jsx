import React, { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { BiPhone } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire ici
    console.log('Formulaire soumis:', formData);
  };

  return (
    <div className="p-8 md:px-60 md:py-40 bg-black">
      {/* Options de contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Option Chat */}
        <div className="border border-gray-700 rounded-lg p-8">
          <BsChatDots className="text-green-600 text-2xl mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-white">Discutez avec nous</h3>
          <p className="text-gray-300 text-sm">
            Nous sommes disponibles pour vous aider du lundi au vendredi de 9h à 17h GMT.
          </p>
        </div>

        {/* Option Appel */}
        <div className="border border-gray-700 rounded-lg p-8">
          <BiPhone className="text-green-600 text-2xl mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-white">Appelez-nous</h3>
          <p className="text-gray-300 text-sm">
            Appelez-nous au (+225) 07 20 14 04 68.
          </p>
        </div>

        {/* Option Email */}
        <div className="border border-gray-700 rounded-lg p-8">
          <HiOutlineMail className="text-green-600 text-2xl mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-white">Envoyez-nous un email</h3>
          <p className="text-gray-300 text-sm">
            Envoyez-nous un email à <a href="mailto:contact@afrikababba.com" className="text-green-500 hover:underline"> Contact@afrikababba.com</a> et vous recevrez une réponse sous 24 heures.
          </p>
        </div>
      </div>

      {/* Section du formulaire de contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Colonne de gauche - Texte et Icônes de réseaux sociaux */}
        <div className='flex flex-col justify-center'>
          <h2 className="text-xl md:text-4xl font-bold text-white mb-4 text-left">
            Remplissez ce formulaire, <br /> nous vous répondrons rapidement
          </h2>
          <p className="text-gray-300 mb-8 text-left text-lg">
            Nous sommes là pour vous aider ! Dites-nous comment nous <br /> pouvons vous assister et nous vous contacterons sous 24 heures.
          </p>
          {/* Icônes de réseaux sociaux */}
          <div className="flex space-x-4 mt-4">
            <a href="https://twitter.com/votrecompte" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com/votrecompte" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com/votrecompte" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com/in/votrecompte" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Colonne de droite - Formulaire */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                Votre nom
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Entrez votre nom complet"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                Adresse email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Entrez votre email"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2 text-left">
                Écrivez votre message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Écrivez votre question ici..."
                rows="4"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
