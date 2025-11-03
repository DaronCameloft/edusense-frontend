// src/components/landing/ProblemSection.jsx
import React from 'react';
import './ProblemSection.css'; 

function ProblemSection() {
  return (
    <section id="problema" className="section problem-section">
      <div className="container problem-layout">
        
     
        <div className="problem-content" data-aos="fade-right">
          <span className="tagline">El Problema</span>
          <h2>
            ¿Sientes que "algo va mal" en el aula, pero no puedes demostrarlo?
          </h2>
          <p className="subtitle">
            Mala ventilación, altas concentraciones de CO₂, ruido excesivo y temperaturas fuera de rango afectan directamente la atención y el rendimiento de los estudiantes.
          </p>
          <p className="hook">
            Existe una brecha entre "saber que algo falla" y "actuar a tiempo". 
            <strong> EduSense cierra esa brecha.</strong>
          </p>
        </div>

       
        <div className="problem-visual" data-aos="fade-left" data-aos-delay="200">
          <div className="problem-card">
            <div className="card-header">
              <span className="light warning"></span>
              <span>Aula 101 - [ Alerta Activa ]</span>
            </div>
            <div className="card-body">
              <div className="metric">
                <span className="label">CALIDAD DE AIRE</span>
                <span className="value danger">1950 <span className="unit">ppm</span></span>
              </div>
              <div className="metric">
                <span className="label">CONFORT TÉRMICO</span>
                <span className="value warning">29.5 <span className="unit">°C</span></span>
              </div>
            </div>
            <div className="card-footer">
              <span>Recomendación: Ventilación Manual Urgente</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProblemSection;