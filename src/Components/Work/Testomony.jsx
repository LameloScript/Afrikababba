import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaStar } from "react-icons/fa"; // Import de l'icône étoile
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; // Import des icônes flèche si nécessaire

const Testomony = () => {
  const testimonials = [
    {
      name: "Koffi Kouadio",
      title: "Une plateforme révolutionnaire",
      quote:
        "Afrikababba a transformé ma manière de faire des affaires. Le paiement via mobile money est tellement pratique !",
      rating: 5,
    },
    {
      name: "Amina Traoré",
      title: "Facilité d'utilisation exceptionnelle",
      quote:
        "J'ai pu accéder à des fournisseurs chinois de qualité sans quitter mon bureau à Abidjan. Je recommande vivement Afrikababba.",
      rating: 5,
    },
    {
      name: "Ousmane Diop",
      title: "Un gain de temps considérable",
      quote:
        "Grâce à Afrikababba, j'ai pu élargir mon réseau de clients à travers l'Afrique. Le système est simple et efficace.",
      rating: 4,
    },
    {
      name: "Fatoumata Koné",
      title: "Support client impeccable",
      quote:
        "L'équipe d'Afrikababba m'a accompagné tout au long de mes transactions. Je me sens en confiance avec cette plateforme.",
      rating: 5,
    },
    {
      name: "Samuel Nkrumah",
      title: "Transactions sécurisées",
      quote:
        "Le paiement via mobile money sans carte bancaire est un véritable atout. Afrikababba assure une sécurité optimale.",
      rating: 5,
    },
    // Vous pouvez ajouter d'autres témoignages si nécessaire
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 1.5,
          spacing: 32,
        },
      },
    },
  });

  return (
    <section className="bg-[#0F0F0F]">
      <div className="mx-auto max-w-full py-20 px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full text-green-500 text-sm mb-4">
              TEMOIGNAGES
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl xl:text-5xl font-pj">
                Ne vous fiez pas seulement{" "}
                <span className="text-green-500 font-bold">
                  à notre parole...
                </span>
              </h2>
            </div>
            <p className="mt-4 text-white">
              Découvrez ce que nos clients disent de nos services.
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Slide précédent"
                onClick={() => instanceRef.current?.prev()}
                className="rounded-full border border-green-600 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
              >
                {/* Utilisation de l'icône de flèche gauche */}
                <FiArrowLeft className="w-5 h-5" />
              </button>

              <button
                aria-label="Slide suivant"
                onClick={() => instanceRef.current?.next()}
                className="rounded-full border border-green-600 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
              >
                {/* Utilisation de l'icône de flèche droite */}
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between p-8 rounded-lg bg-black shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="w-5 h-5" />
                        ))}
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-green-600 sm:text-3xl">
                          {testimonial.title}
                        </p>

                        <p className="mt-4 leading-relaxed text-white">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-white sm:mt-6">
                      &mdash; {testimonial.name}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Slide précédent"
            onClick={() => instanceRef.current?.prev()}
            className="rounded-full border border-green-600 p-4 text-green-600 transition hover:bg-green-600 hover:text-white"
          >
            {/* Icône de flèche gauche pour mobile */}
            <FiArrowLeft className="w-5 h-5" />
          </button>

          <button
            aria-label="Slide suivant"
            onClick={() => instanceRef.current?.next()}
            className="rounded-full border border-green-600 p-4 text-green-600 transition hover:bg-green-600 hover:text-white"
          >
            {/* Icône de flèche droite pour mobile */}
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testomony;
