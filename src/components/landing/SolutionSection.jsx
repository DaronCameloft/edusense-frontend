// src/components/landing/SolutionSection.jsx
import React from 'react';
import './SolutionSection.css'; // Crearemos este archivo

function SolutionSection() {
  return (
    <section id="solucion" className="section solution-section">
      <div className="container">
        
        {/* Encabezado de la Sección */}
        <div className="section-header" data-aos="fade-up">
          <span className="tagline">La Solución</span>
          <h2>De señales ambientales a acciones concretas.</h2>
          <p className="subtitle">
            EduSense es un sistema de monitoreo proactivo que convierte datos en alertas tempranas y recomendaciones accionables. Genera la evidencia que necesitas para la dirección académica y el mantenimiento.
          </p>
        </div>

        {/* Grid de Propuestas de Valor */}
        <div className="solution-grid">

          {/* Tarjeta 1 */}
          <div className="solution-card" data-aos="fade-up" data-aos-delay="100">
            <h4>Modular y Asequible</h4>
            <p>
              Arma el sistema por etapas, según tu presupuesto y prioridades.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="solution-card" data-aos="fade-up" data-aos-delay="200">
            <h4>Instalación Simple y Local</h4>
            <p>
              Sin obras complicadas. El gateway local funciona incluso con internet inestable.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="solution-card" data-aos="fade-up" data-aos-delay="300">
            <h4>Proactivo y Basado en Datos</h4>
            <p>
              Recibe alertas y recomendaciones accionables, no solo números.
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className="solution-card" data-aos="fade-up" data-aos-delay="400">
            <h4>Privacidad por Diseño</h4>
            <p>
              Monitoreamos el aula, no a las personas. Tus datos están seguros y bajo tu control.
            </p>
          </div>

          {/* Tarjeta 5 */}
          <div className="solution-card" data-aos="fade-up" data-aos-delay="500">
            <h4>Hecho para Perú</h4>
            <p>
              Soporte local, catálogos de sensores disponibles y una UX 100% en español.
            </p>
          </div>
          
          {/* (Puedes añadir una tarjeta más si quieres) */}
          <div className="solution-card extra-card" data-aos="fade-up" data-aos-delay="600">
            <h4>Soporte y Ecosistema</h4>
            <p>
              Integración con sistemas existentes y documentación clara para tu equipo de TI.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SolutionSection;