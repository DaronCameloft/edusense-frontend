// src/pages/LandingPage.jsx
import React from 'react';


import Header from '../components/common/Header';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionSection from '../components/landing/SolutionSection';
import TechSection from '../components/landing/TechSection';
import UseCasesSection from '../components/landing/UseCasesSection';
import CTASection from '../components/landing/CTASection'; 
import Footer from '../components/common/Footer';
import GallerySection from '../components/landing/GallerySection'; 

function LandingPage() {
  return (
    <div>
      <Header />
      
      <main>
        <HeroSection />
        <GallerySection />
        <ProblemSection />
        <SolutionSection />
        <TechSection />
        <UseCasesSection />
        <CTASection />
        
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;