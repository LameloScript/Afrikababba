import {
    HeartPulse,
    Dumbbell,
    Baby,
    WashingMachine,
    Gamepad2,
    Smartphone,
  } from "lucide-react";
  
  const UserCentricSection = () => {
    return (
      <section className=" bg-black sm:py-16 lg:py-2">
        <div className="flex justify-center">
          <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full text-green-500 text-sm mb-8 mt-8">
            CATÉGORIES
          </div>
        </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-20">
          <div className="text-center">
            <h2 className="text-3xl font-normal leading-tight text-white sm:text-4xl xl:text-5xl font-pj">
              Explorez Nos Catégories{" "}
              <span className="text-green-500 font-bold">Populaires</span>
            </h2>
          </div>  
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 mt-10 text-center sm:mt-16 md:grid-cols-3 md:gap-x-12 lg:gap-0 xl:mt-24">
            <div className=" md:border-l md:p-8 lg:p-14">
              <HeartPulse className="mx-auto text-white text-6xl" />
              <h3 className="mt-6 text-xl font-bold text-white font-pj">
                Santé et Beauté
              </h3>
            </div>
  
            <div className="border-l md:p-8 lg:p-14 md:border-l md:border-gray-600">
              <Dumbbell className="mx-auto text-white text-6xl" />
              <h3 className="mt-6 text-xl font-bold text-white font-pj">
                Articles Sports
              </h3>
            </div>
  
            <div className="border-l md:p-8 lg:p-14 md:border-l md:border-gray-600">
              <Baby className="mx-auto text-white text-6xl" />
              <h3 className="mt-6 text-xl font-bold text-white font-pj">
                Pour Bébé
              </h3>
            </div>
  
            <div className="border-l md:p-8 lg:p-14 md:border-t md:border-gray-600">
              <WashingMachine className="mx-auto text-white text-6xl" />
              <h3 className="mt-6 text-xl font-bold text-white font-pj">
                Électroménager
              </h3>
            </div>
  
            <div className="border-l md:p-8 lg:p-14 md:border-l md:border-gray-600 md:border-t">
              <Gamepad2 className="mx-auto text-white text-6xl" />
              <h3 className="mt-6 text-xl font-bold text-white font-pj">
                Jeux et Consoles
              </h3>
            </div>
  
            <div className="border-l md:p-8 lg:p-14 md:border-l md:border-gray-600 md:border-t">
              <Smartphone className="mx-auto text-white text-6xl" />
              <h3 className="mt-6 text-xl font-bold text-white font-pj">
                Smartphones
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default UserCentricSection;
  