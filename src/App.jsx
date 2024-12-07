// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import HWorkPage from './pages/how-it-works/howItWorks';
import AboutPage from './pages/About';
import Header from './Components/header';
import Footer from './Components/footer';
import PolitiquePage from './Components/politique';
import IntellectuelPage from './pages/intellectuel';
import CookiesPage from './Components/cookies';
import CguPage from './Components/cgu';  
import SupplierForm from './pages/become-supplier';
import TransitairePage from './pages/transitaire';
import ScrollToTop from "./components/scrooltop";
import PolitiqueSuppressionCompte from "./pages/suppression";
import './App.css';

function AppContent() {
  const location = useLocation();

  // Liste des chemins où le header et le footer ne doivent pas être affichés
  const noHeaderFooterPaths = ['/devenir-transitaire'];

  const shouldShowHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <div className="App">
      {/* Configuration de Helmet pour le SEO */}
      <Helmet>
        <title>Afrikababba - Plateforme B2B pour l'Afrique et la Chine</title>
        <meta
          name="description"
          content="Afrikababba - La plateforme qui relie les acheteurs africains aux fournisseurs chinois. Payez facilement via mobile money sans carte bancaire."
        />
        <meta property="og:title" content="Afrikababba - Plateforme de Commerce B2B" />
        <meta
          property="og:description"
          content="Accédez aux fournisseurs chinois et payez directement avec mobile money sans carte bancaire."
        />
        <meta property="og:image" content="URL_de_votre_image_de_partage" />
        <meta property="og:url" content="https://afrikababba.com" />
      </Helmet>

      {/* Affichage conditionnel du Header */}
      {shouldShowHeaderFooter && <Header />}

      {/* Contenu principal avec les routes */}
      <main className='bg-black'>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/how-it-works" element={<HWorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/devenir-transitaire" element={<SupplierForm />} />
          <Route path="/politique-de-confidentialite" element={<PolitiquePage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/Propriete-intectuelle" element={<IntellectuelPage />} />
          <Route path="/conditions-générales-utilisation" element={<CguPage />} />
          <Route path="/comment-devenir-un-transitaire" element={<TransitairePage />} />
          <Route path="/politique-de-suppression" element={<PolitiqueSuppressionCompte />} />
        </Routes>
      </main>

      {/* Affichage conditionnel du Footer */}
      {shouldShowHeaderFooter && <Footer />} 

    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
