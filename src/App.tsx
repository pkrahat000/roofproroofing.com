/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhoWeAre from './components/WhoWeAre';
import WhyChooseUs from './components/WhyChooseUs';
import Expertise from './components/Expertise';
import GalleryAndAwards from './components/GalleryAndAwards';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CalculatorModal from './components/CalculatorModal';
import { OfficeLocation } from './types';

// Centralised locations array satisfying all phone, address, and service area rules exactly
const FL_LOCATIONS: OfficeLocation[] = [
  {
    name: "Destin",
    phone: "850-332-3330",
    email: "info@roofproroofing.com",
    address: "175 Main St Unit 5672, Destin, FL 32541",
    mapQuery: "Destin Florida Showcase",
    coordinates: { lat: 30.3935, lng: -86.4958 },
    serviceAreas: [
      "Crestview", "Mary Esther", "Navarre", "Pace", "Shalimar", 
      "Destin", "Gulf Breeze", "Miramar Beach", "Ocean City", 
      "Pensacola Beach", "Fort Walton Beach", "Milton", "Niceville", 
      "Pensacola", "Valparaiso"
    ]
  },
  {
    name: "Santa Rosa Beach",
    phone: "850-332-3330",
    email: "info@roofproroofing.com",
    address: "70 Riverbirch Loop, Santa Rosa Beach, FL 32459",
    mapQuery: "Santa Rosa Beach Florida Showcase",
    coordinates: { lat: 30.3444, lng: -86.1147 },
    serviceAreas: [
      "Santa Rosa Beach", "Blue Mountain Beach", "Defuniak Springs", 
      "Freeport", "Grayton Beach", "Laguna Beach", "Lynn Haven", 
      "Miramar Beach", "Panama City Beach", "Panama City", "Watercolor", 
      "Point Washington", "Rosemary Beach", "Sandestin", "Alys Beach", 
      "Seaside", "Seagrove Beach"
    ]
  },
  {
    name: "North Port",
    phone: "(941) 456-4496",
    email: "info@roofproroofing.com",
    address: "1647 Squaw Ln, North Port, FL 34286",
    mapQuery: "North Port Florida Showcase",
    coordinates: { lat: 27.0442, lng: -82.2031 },
    serviceAreas: [
      "North Port", "Arcadia", "Manasota Key", "Placida", "Punta Gorda", 
      "Nokomis", "Osprey", "Port Charlotte", "Rotonda West", "Venice", 
      "El Jobean", "Sarasota", "Bradenton", "Englewood"
    ]
  },
  {
    name: "Fort Lauderdale",
    phone: "(754) 400-0074",
    email: "info@roofproroofing.com",
    address: "2380 SW 15th St, Fort Lauderdale, FL 33312",
    mapQuery: "Fort Lauderdale Florida Showcase",
    coordinates: { lat: 26.1224, lng: -80.1373 },
    serviceAreas: [
      "Fort Lauderdale", "Boca Raton", "Miramar", "Parkland", 
      "Coconut Creek", "Sunrise", "Delray Beach", "Greenacres", 
      "Southwest Ranches", "Wellington", "Pembroke Pines", 
      "Pompano Beach", "Weston", "Plantation", "Coral Springs", 
      "Deerfield Beach", "Boynton Beach", "Davie", "West Palm Beach"
    ]
  }
];

export default function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  
  // Shared state to populate Calculator dynamic results into Hero form
  const [calculatorInput, setCalculatorInput] = useState<{ material: string; notes: string } | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollDirectToForm = () => {
    const el = document.getElementById('free-estimate-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleApplyCalculatorValues = (material: string, notes: string) => {
    setCalculatorInput({ material, notes });
    // Auto focus the estimate box to see values applied
    setTimeout(() => {
      scrollDirectToForm();
    }, 350);
  };

  return (
    <div className="font-sans antialiased bg-slate-50 min-h-screen text-slate-800 selection:bg-cyan-500 selection:text-white">
      
      {/* 1. Header Navigation elements */}
      <Navbar 
        locations={FL_LOCATIONS} 
        onNavigate={handleNavigate}
        openCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* 2. Hero slider + multi-step estimate seeker block */}
      <Hero 
        locations={FL_LOCATIONS} 
        prefilledData={calculatorInput}
        clearPrefilled={() => setCalculatorInput(null)}
      />

      {/* 3. Services layout with toggle controls */}
      <Services onScrollToForm={scrollDirectToForm} />

      {/* 4. Who We Are certification & values card deck */}
      <WhoWeAre />

      {/* 5. Why Choose Us grid + GAF & Fortified detailed cards */}
      <WhyChooseUs />

      {/* 6. Accordion lists block */}
      <Expertise 
        locations={FL_LOCATIONS}
        onScrollToForm={scrollDirectToForm}
      />

      {/* 7. Portfolio image matrix with Lightbox player */}
      <GalleryAndAwards />

      {/* 8. Google Review Voices Board with slider */}
      <Testimonials />

      {/* 9. Interactive Map tabs serving Florida */}
      <Locations 
        locations={FL_LOCATIONS}
        onScrollToForm={scrollDirectToForm}
      />

      {/* 10. Frequently Asked Questions accordion */}
      <FAQ />

      {/* 11. Custom Dark Footer branding */}
      <Footer 
        onNavigate={handleNavigate}
        openCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* 12. Floating Roofing Calculator Modal Overlay */}
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onApplyData={handleApplyCalculatorValues}
      />

    </div>
  );
}
