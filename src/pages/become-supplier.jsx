import { useState } from "react";
import img from "../assets/supplier.png";

const SupplierForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    warehouseAddress: "",
    city: "",
    activityDomain: "",
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailData = {
      to: "inscription-transitaire@afrikababba.com",
      subject: "Nouvelle inscription transitaire Afrikababba",
      body: JSON.stringify(formData, null, 2),
    };
    console.log("Envoi des données:", emailData);
    setIsSubmitted(true);
  };

  const closePopup = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      companyName: "",
      email: "",
      phone: "",
      warehouseAddress: "",
      city: "",
      activityDomain: "",
    });
    setAcceptedTerms(false);
  };

  return (
    <div className="h-screen w-screen bg-gray-50">
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="rounded-lg bg-white p-8 shadow-2xl">
            <h2 className="text-lg font-bold text-gray-800">
              Votre inscription a été prise en compte
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Merci de rejoindre notre réseau Afrikababba. Nous vous
              contacterons sous peu.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={closePopup}
                className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/2 h-1/2 md:h-full">
          <img
            src={img}
            alt="Warehouse worker with headphones"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col text-start items-center justify-center">
          {currentStep === 1 ? (
            <>
              <div className="mb-8">
                <div className="text-sm text-gray-500 mb-2">
                  Devenez un transitaire
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Votre voyage de transitaire avec Afrikababba commence ici.
                </h1>
                <p className="text-gray-600">
                  Notre mission est de bâtir des partenariats solides et
                  durables avec nos transitaires, en mettant l’accent sur la
                  confiance, l’innovation et l’efficacité.
                </p>
              </div>

              <form onSubmit={handleNextStep} className="space-y-6 w-full">
                <div>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Nom de l'entreprise"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-mail"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Numéro de téléphone"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="warehouseAddress"
                    value={formData.warehouseAddress}
                    onChange={handleInputChange}
                    placeholder="Adresse de l'entrepôt en Chine"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-md transition-colors"
                >
                  Suivant
                </button>
              </form>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Ville"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="activityDomain"
                  value={formData.activityDomain}
                  onChange={handleInputChange}
                  placeholder="Domaine d'activité"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  En envoyant ce formulaire, vous acceptez{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    les Conditions d'Utilisation Afrikababba
                  </a>
                </label>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 rounded-md transition-colors"
                >
                  Retour
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-md transition-colors"
                  disabled={!acceptedTerms}
                >
                  Envoyer
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupplierForm;
