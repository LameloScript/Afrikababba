// src/pages/Home.jsx

import HeroSection from '../Components/about/hero-section';
import UsPage from '../Components/about/us-page';
// import Team from '../Components/about/team';
import Stats from '../Components/about/stats';



function AboutPage() {
  return (
    <div>
      <HeroSection />
      <UsPage />
      <Stats />
      {/* <Team /> */}
    </div>
  );
}

export default AboutPage;
