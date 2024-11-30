const FaqSection = () => {
  const faqData = [
    {
      question: "Dans quels pays la plateforme est-elle disponible ?",
      answer:
        'AfrikAbaba est disponible principalement au Sénégal, en Côte d’Ivoire et au Mali.',
      },
    {
      question: "Quels sont les modes de paiement acceptés sur Afrikababba ?",
      answer:
        "Les paiements peuvent être effectués via Mobile Money (Orange Money, Wave, Free Money) et d'autres options selon votre pays.",
    },
    {
      question:
        "Puis-je annuler une commande ?",
      answer:
        "Oui, tant que la commande n’a pas été expédiée. Veuillez consulter la section Mes commandes pour les options d'annulation.",
    },
    {
      question: "Comment rechercher un produit ou un fournisseur ?",
      answer:
        "Utilisez la barre de recherche en haut de la page pour rechercher des produits ou des fournisseurs par nom ou catégorie.",
    },
    {
      question:
        "Comment garantir la sécurité de mes transactions sur Afrikababba ?",
      answer:
        "Les paiements sont sécurisés via HappyPay, qui utilise des technologies de chiffrement de pointe.",
    },
    {
      question:
        "Comment puis-je suivre ma commande ?",
      answer:
        "Une fois votre commande passée, vous pouvez la suivre via la section Mes commandes de votre compte.",
    },
    {
      question:
        "Comment contacter un fournisseur ?",
      answer:
        "Une fonction de messagerie vous permet de discuter directement avec les fournisseurs pour toute question ou demande spécifique.",
    },
    {
      question:
        "Que faire si je reçois un produit endommagé ?",
      answer:
        "Vous pouvez signaler un problème via la section Support ou contacter directement le service client.",
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full text-green-500 text-sm mb-4">
          QUESTIONS & REPONSES
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl xl:text-5xl font-pj">
            Foire Aux{" "}
            <span className="text-green-500 font-bold">Questions</span>
          </h2>
        </div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center"></h2>
        <div className="divide-y divide-gray-700 rounded-xl border border-gray-700 bg-black">
          {faqData.map((item, index) => (
            <details
              key={index}
              className="group p-6 [&_summary::-webkit-details-marker]:hidden"
              open={index === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                <h3 className="text-lg font-medium">{item.question}</h3>

                <span className="relative w-5 h-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
