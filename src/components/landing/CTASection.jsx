// src/components/landing/CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css'; // Crearemos este archivo

function CTASection() {
  return (
    <section id="contacto" className="section cta-section">
      <div className="container" data-aos="fade-up">
        
        <span className="tagline">¿Listo para empezar?</span>
        <h2>Transforma tus aulas con decisiones basadas en datos.</h2>
        <p>
          Deja de adivinar. Empieza a medir. Descubre cómo EduSense puede
          mejorar el rendimiento y bienestar en tu institución.
        </p>
        
        <div className="cta-buttons">
          {/* Este botón usará el estilo primario (verde) */}
          <a href="mailto:contacto@arcadiadevs.com" className="btn-primary">
            Solicitar un Demo
          </a>
          
          {/* Este botón (estilo secundario) te lleva al panel de React */}
          <Link to="/demo" className="btn-secondary">
            Ver Panel Interactivo
          </Link>
        </div>

      </div>
    </section>
  );
}

export default CTASection;