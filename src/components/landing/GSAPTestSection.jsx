// src/components/landing/GSAPTestSection.jsx
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './GSAPTestSection.css'; // Estilos para esta prueba

function GSAPTestSection() {
  
  // 1. Creamos las 'refs' para que GSAP sepa qué animar
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  
  // 2. Usamos useLayoutEffect para animar
  useLayoutEffect(() => {
    
    // El 'context' de GSAP es para limpieza (buena práctica en React)
    const ctx = gsap.context(() => {
      
      // Seleccionamos todas las cajas dentro de nuestro grid
      const boxes = gsap.utils.toArray(gridRef.current.children);
      
      // La animación
      gsap.from(boxes, {
        opacity: 0,   // Empezar invisibles
        scale: 0.1,   // Empezar muy pequeñas (efecto "centro")
        duration: 1,  // Duración
        ease: 'power2.out',
        stagger: 0.2, // 0.2s entre cada caja
        
        // 3. ¡El ScrollTrigger!
        scrollTrigger: {
          trigger: sectionRef.current, // La sección entera dispara la anim.
          start: 'top 60%',   // Empieza cuando la parte alta de la sección esté al 60% de la pantalla
          end: 'bottom 80%', // Termina cuando la parte baja esté al 80%
          
          // ¡ESTA ES LA MAGIA!
          // scrub: true -> Vincula la animación 1:1 con el scroll.
          // Mueve la rueda del mouse y la anim. avanzará o retrocederá.
          scrub: true,
          
          // 'markers: true' -> DESCOMENTA ESTO para ver las guías
          // markers: true, 
        }
      });
      
    }, sectionRef); // Asocia el 'context' a la sección
    
    return () => ctx.revert(); // Limpieza al salir
    
  }, []); // Se ejecuta 1 sola vez

  return (
    // 4. Asignamos la ref a la sección
    <section className="section gsap-test-section" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header">
          <h2>Prueba de Animación GSAP (con "Scrub")</h2>
          <p>
            Mueve el scroll lentamente hacia arriba y abajo en esta sección.
            Las cajas deberían animarse en ambas direcciones.
          </p>
        </div>

        {/* 4. Asignamos la ref al grid */}
        <div className="test-grid" ref={gridRef}>
          <div className="test-box">1</div>
          <div className="test-box">2</div>
          <div className="test-box">3</div>
        </div>

      </div>
    </section>
  );
}

export default GSAPTestSection;