// src/pages/Home.jsx
import HeroSection from '../Components/home/hero-section-home';
import DiscoverSection from '../Components/home/home-section2';
import StatsSection  from '../Components/home/agility';
import  UserCentricSection from '../Components/home/home-categorie';

import EndSection from '../Components/home/end-section';
import DownloadCTA from '../Components/home/cta';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <DiscoverSection />
      <DownloadCTA />
      <StatsSection />
      
      <UserCentricSection />
      <EndSection />
    </div>
  );
}

export default HomePage;
