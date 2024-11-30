// src/pages/Home.jsx

import HeroSection from '../Components/transitaire/hero-section';
import  SupplierSection from '../Components/home/supplier';
import BecomeSupplier from '../Components/Work/supplier';


function TransitairePage() {
  return (
    <div>
      <HeroSection />
      <SupplierSection />
      <BecomeSupplier />
    </div>
  );
}

export default TransitairePage;