// src/pages/Home.jsx
import WorkPage from '../../Components/Work/Work-section';
import Testomony from '../../Components/Work/Testomony';
import HeroSection from '../../Components/Work/Hero-section';
import FaqSection from '../../Components/Work/Faq-section';



function HWorkPage() {
  return (
    <div>
      <HeroSection />
      <WorkPage />
      <Testomony />
     
      <FaqSection />
    </div>
  );
}

export default HWorkPage;
