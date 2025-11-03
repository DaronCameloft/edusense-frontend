// src/App.jsx
import React, { useEffect } from 'react' 
import { Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/common/CustomCursor';
import Lenis from '@studio-freight/lenis'
import LandingPage from './pages/LandingPage'
import DemoPanel from './pages/DemoPanel'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  
  useEffect(() => {
    
    
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
    });

    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []); 

  return (
    <> 
      <CustomCursor /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoPanel />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App