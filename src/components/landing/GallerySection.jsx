// src/components/landing/GallerySection.jsx
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './GallerySection.css';

import img1 from '../../assets/gallery/image_gallery1_v2.png';
import img2 from '../../assets/gallery/image_gallery2_v2.png';
import img3 from '../../assets/gallery/image_gallery3_v2.png';
import img4 from '../../assets/gallery/image_gallery4_v2.png';
import img5 from '../../assets/gallery/image_gallery5_v2.png';
import img6 from '../../assets/gallery/image_gallery6_v2.png';

const images = [img1, img2, img3, img4, img5, img6];

// Posiciones intermedias (cuando están dispersas)
const finalPositions = [
  { x: -450 + 100, y: -180 + 30, rotation: -12, scale: 1.20 },
  { x: 250 + 100, y: -120 + 30, rotation: 10, scale: 1.20 },
  { x: -430 + 100, y: 160 + 80, rotation: 8, scale: 1.20 },
  { x: 230 + 100, y: 180 + 80, rotation: -8, scale: 1.20 },
  { x: -100 + 100, y: -220 + 30, rotation: 3, scale: 1.20 },
  { x: -80 + 100, y: 220 + 80, rotation: -5, scale: 1.20 }
];

// Posiciones finales de dispersión (más alejadas y pequeñas)
const dispersionPositions = [
  { x: -800, y: -400, rotation: -45, scale: 0.2 },  // img1: se aleja hacia arriba-izquierda
  { x: 800, y: -350, rotation: 50, scale: 0.2 },    // img2: se aleja hacia arriba-derecha
  { x: -750, y: 400, rotation: 30, scale: 0.2 },    // img3: se aleja hacia abajo-izquierda
  { x: 750, y: 450, rotation: -40, scale: 0.2 },    // img4: se aleja hacia abajo-derecha
  { x: -600, y: -500, rotation: 20, scale: 0.2 },   // img5: se aleja hacia arriba
  { x: -550, y: 500, rotation: -25, scale: 0.2 }    // img6: se aleja hacia abajo
];

function GallerySection() {
  
  const sectionRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  
  useLayoutEffect(() => {
    
    const ctx = gsap.context(() => {
      
      const galleryImages = gsap.utils.toArray('.gallery-image');
      
      // Estado inicial: todas las imágenes centradas
      gsap.set(galleryImages, {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 0.7,
        transformOrigin:'50% 50%'
      });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true
          // markers: true,
        }
      });

      // FASE 1: Animación del primer texto (desaparece)
      tl.to(text1Ref.current, {
        opacity: 0,
        scale: 0.8,
        y: -50,
        duration: 0.3,
        ease: 'power1.in'
      }, 0)

      // FASE 2: Animación del segundo texto (aparece)
      .to(text2Ref.current, {
        opacity: 1,
        scale: 1,
        y: '0%',
        duration: 0.3,
        ease: 'power1.out'
      }, 0.2)

      // FASE 3: Las imágenes se expanden a sus posiciones
      .to(galleryImages, {
        x: (i) => finalPositions[i].x,
        y: (i) => finalPositions[i].y,
        rotation: (i) => finalPositions[i].rotation,
        scale: (i) => finalPositions[i].scale,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power2.out'
      }, 0.15)

      /*
      // FASE 4: El segundo texto desaparece
      .to(text2Ref.current, {
        opacity: 0,
        scale: 0.8,
        y: -30,
        duration: 0.3,
        ease: 'power1.in'
      }, 0.9)
      */

      // FASE 5: Las imágenes se dispersan y achican (el efecto final)
      .to(galleryImages, {
        x: (i) => dispersionPositions[i].x,
        y: (i) => dispersionPositions[i].y,
        rotation: (i) => dispersionPositions[i].rotation,
        scale: (i) => dispersionPositions[i].scale,
        opacity: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: 'power2.in'
      }, 1.0);

      
    }, sectionRef);
    
    return () => ctx.revert();
    
  }, []);

  return (
    <section className="section gallery-section" ref={sectionRef}>
      <div className="gallery-container">
        
        <h2 className="gallery-title">
          <span className="text-1" ref={text1Ref}>Vive el presente.</span><br />
          <span className="text-2" ref={text2Ref}>Disfruta de EduSense.</span>
        </h2>
        
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagen de galería ${index + 1}`}
            className="gallery-image"
          />
        ))}
        
      </div>
    </section>
  );
}

export default GallerySection;