
const CookiesPage = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Politique de Cookies</h1>
      <p className="mb-4">
        <strong>Dernière mise à jour :</strong> [date]
      </p>

      <p className="mb-4">
        Nous utilisons des cookies pour améliorer votre expérience sur notre site. Cette politique
        explique comment et pourquoi nous utilisons les cookies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Qu'est-ce qu'un cookie ?</h2>
      <p className="mb-4">
        Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site
        web. Il nous permet de vous reconnaître lors de vos prochaines visites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Types de cookies que nous utilisons</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Cookies essentiels : nécessaires au bon fonctionnement du site.</li>
        <li>
          Cookies de performance : collectent des informations sur l'utilisation du site pour
          l'améliorer.
        </li>
        <li>Cookies de marketing : utilisés pour personnaliser les publicités.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Gestion des cookies</h2>
      <p className="mb-4">
        Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre
        navigateur. Notez que le blocage de certains cookies peut affecter le fonctionnement du
        site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact</h2>
      <p className="mb-4">
        Pour toute question concernant notre politique de cookies, contactez-nous à :{" "}
        <a href="mailto:contact@votresite.com" className="text-blue-500">
          contact@votresite.com
        </a>
        .
      </p>
    </div>
  );
};

export default CookiesPage;
