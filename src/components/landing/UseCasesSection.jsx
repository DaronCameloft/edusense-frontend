// src/components/landing/UseCasesSection.jsx
import React, { useState } from 'react';
import './UseCasesSection.css'; // Crearemos este archivo

function UseCasesSection() {
  // --- ¡Nuestro primer Hook! ---
  // 'activeTab' guardará el nombre de la pestaña activa ('docentes', 'directores', etc.)
  // 'setActiveTab' es la función que usamos para cambiar ese valor.
  // Por defecto, mostramos 'docentes'.
  const [activeTab, setActiveTab] = useState('docentes');

  return (
    <section id="casos-uso" className="section use-cases-section">
      <div className="container">
        
        {/* Encabezado de la Sección */}
        <div className="section-header" data-aos="fade-up">
          <span className="tagline">¿Para Quién es?</span>
          <h2>Una herramienta para cada rol en la institución.</h2>
        </div>

        {/* --- Contenedor de Pestañas --- */}
        <div className="tabs-container" data-aos="fade-up" data-aos-delay="100">
          
          {/* 1. Cabecera de Pestañas (Botones) */}
          <div className="tab-header">
            <button
              className={`tab-button ${activeTab === 'docentes' ? 'active' : ''}`}
              onClick={() => setActiveTab('docentes')}
            >
              Docentes
            </button>
            <button
              className={`tab-button ${activeTab === 'directores' ? 'active' : ''}`}
              onClick={() => setActiveTab('directores')}
            >
              Directores
            </button>
            <button
              className={`tab-button ${activeTab === 'mantenimiento' ? 'active' : ''}`}
              onClick={() => setActiveTab('mantenimiento')}
            >
              Mantenimiento
            </button>
          </div>

          {/* 2. Área de Contenido de Pestañas */}
          <div className="tab-content-area">
            
            {/* Contenido 1: Docentes */}
            <div className={`tab-content ${activeTab === 'docentes' ? 'active' : ''}`}>
              <h4>Beneficios para Docentes:</h4>
              <p>Recibe información clara y accionable sin interrumpir tu clase.</p>
              <ul>
                <li>Ver un "semáforo" de confort en tiempo real en tu panel.</li>
                <li>Recibir alertas directas: "Abrir ventanas" o "Encender ventilación".</li>
                <li>Registrar incidencias de infraestructura con un solo clic.</li>
              </ul>
            </div>

            {/* Contenido 2: Directores */}
            <div className={`tab-content ${activeTab === 'directores' ? 'active' : ''}`}>
              <h4>Beneficios para Directores y Coordinadores:</h4>
              <p>Toma decisiones estratégicas basadas en evidencia, no en anécdotas.</p>
              <ul>
                <li>Acceder a un tablero con KPIs (indicadores) por sede o aula.</li>
                <li>Generar evidencia real para priorizar mantenimiento o inversión.</li>
                <li>Monitorear el cumplimiento de los estándares de confort ambiental.</li>
              </ul>
            </div>

            {/* Contenido 3: Mantenimiento */}
            <div className={`tab-content ${activeTab === 'mantenimiento' ? 'active' : ''}`}>
              <h4>Beneficios para Mantenimiento:</h4>
              <p>Optimiza tus recursos y anticípate a los problemas.</p>
              <ul>
                <li>Seguimiento de alertas y tendencias por equipo (ej. aire acondicionado).</li>
                <li>Gestión de tickets de reparación más eficiente.</li>
                <li>Identificar patrones de falla antes de que ocurran.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection;