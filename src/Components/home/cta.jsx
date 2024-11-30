const DownloadCTA = () => {
    return (
      <div className="bg-[#1c1c1c] text-white py-8 px-6 md:px-20 text-center rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Téléchargez l'application Afrikababba
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Accédez à AfrikAbaba directement depuis votre smartphone pour une
          expérience fluide et rapide.
        </p>
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://apps.apple.com" // Remplacez avec le lien réel
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Download_on_the_App_Store_Badge_FRCA_RGB_blk.svg/127px-Download_on_the_App_Store_Badge_FRCA_RGB_blk.svg.png"
              alt="Télécharger sur l'App Store"
              className="h-12 md:h-12"
            />
          </a>
          <a
            href="https://play.google.com/store" // Remplacez avec le lien réel
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://camo.githubusercontent.com/dd79a1ecd880fbf02fa8021e4ff85350788821a40d40a22d96541051d6f1997d/68747470733a2f2f63646e2e7261776769742e636f6d2f73746576657269636865792f676f6f676c652d706c61792d62616467652d7376672f6d61737465722f696d672f66725f6765742e737667"
              alt="Télécharger sur Google Play"
              className="h-12 md:h-16"
            />
          </a>
        </div>
        
      </div>
    );
  };
  
  export default DownloadCTA;
