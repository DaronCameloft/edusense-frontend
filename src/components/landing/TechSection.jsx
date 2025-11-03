// src/components/landing/TechSection.jsx
import React, { useState } from 'react'; // <-- 1. Importa useState
import './TechSection.css';

// 2. Importa tus diagramas desde la carpeta 'assets'
// (Asegúrate de haber guardado las imágenes en src/assets/)
import diagramaSensores from '../../assets/Diagrama1.png';
import diagramaGateway from '../../assets/Diagrama2.png';

function TechSection() {
  
  // 3. Crea el estado para saber qué pestaña está activa
  const [activeStep, setActiveStep] = useState('step-aula'); // 'step-aula' es el valor por defecto

  return (
    <section id="tecnologia" className="section tech-section">
      <div className="container">

        <div className="section-header" data-aos="fade-up">
          <span className="tagline">¿Cómo Funciona?</span>
          <h2>Tecnología robusta, instalación simple.</h2>
          <p className="subtitle">
            Un sistema de dos partes que garantiza la recolección de datos sin interrupciones,
            diseñado para funcionar incluso con conectividad inestable.
          </p>
        </div>

        <div className="tech-layout">

          <div className="tech-sticky-nav" data-aos="fade-right">
            <h3>Arquitectura</h3>
            <ul className="step-list">
              
              {/* 4. Añade onClick para cambiar el estado y la clase 'active' dinámicamente */}
              <li 
                className={`step ${activeStep === 'step-aula' ? 'active' : ''}`}
                onClick={() => setActiveStep('step-aula')}
              >
                <a> {/* La 'a' ahora es solo para estilo, no para 'href' */}
                  <span>Paso 1</span>
                  <h4>En el Aula (Hardware)</h4>
                  <p>Sensores y actuadores que capturan los datos del ambiente.</p>
                </a>
              </li>
              
              <li 
                className={`step ${activeStep === 'step-gateway' ? 'active' : ''}`}
                onClick={() => setActiveStep('step-gateway')}
              >
                <a>
                  <span>Paso 2</span>
                  <h4>El Gateway Local</h4>
                  <p>El cerebro que procesa, almacena y envía los datos.</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="tech-scroll-content">
            
            {/* 5. Renderizado Condicional: Muestra solo la tarjeta activa */}
            {activeStep === 'step-aula' && (
              <div id="step-aula" className="tech-step-content" data-aos="fade-up">
                <h4>Hardware en el Aula</h4>
                <p>
                  Instalamos una red de sensores discretos y de bajo consumo.
                  Estos dispositivos son el corazón de EduSense.
                </p>
                <ul>
                  <li><strong>Sensores Sugeridos:</strong> CO₂, temperatura, humedad, PM₂.₅, ruido y luz.</li>
                  <li><strong>Microcontrolador:</strong> Un cerebro (p. ej., ESP32) que envía datos cifrados al gateway.</li>
                  <li><strong>Actuadores Opcionales:</strong> Relés o enchufes inteligentes para activar ventilación o extractores automáticamente.</li>
                </ul>
                
                {/* 6. Reemplaza el placeholder con la imagen real */}
                <div className="visual-diagram">
                  <img src={diagramaSensores} alt="Diagrama de Sensores y ESP32" />
                </div>
              </div>
            )}

            {activeStep === 'step-gateway' && (
              <div id="step-gateway" className="tech-step-content" data-aos="fade-up">
                <h4>Gateway Local (Buffer Offline)</h4>
                <p>
                  En lugar de depender 100% de la nube, un pequeño concentrador en
                  sitio (como una Raspberry Pi) actúa como buffer.
                </p>
                <ul>
                  <li><strong>Almacenamiento Local:</strong> Guarda datos si el internet se cae y los sincroniza al volver.</li>
                  <li><strong>Normalización:</strong> Limpia y formatea los datos antes de enviarlos.</li>
                  <li><strong>Conectividad Segura:</strong> Envía la información a la nube de forma cifrada cuando hay conectividad.</li>
                </ul>
                
                {/* 6. Reemplaza el placeholder con la imagen real */}
                <div className="visual-diagram">
                  <img src={diagramaGateway} alt="Diagrama de Gateway y Nube" />
                </div>
              </div>
            )}
            
            {/* La tarjeta de Packet Tracer siempre será visible al final */}
            <div className="tech-step-content packet-tracer-card" data-aos="fade-up" data-aos-delay="200">
              <h4>¡La Base de Todo!</h4>
              <p>
                Toda esta arquitectura de red fue simulada y validada usando <strong>Cisco Packet Tracer</strong>, probando su viabilidad.
              </p>
              <a href="#" className="btn-secondary">Ver Simulación (Demo)</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default TechSection;