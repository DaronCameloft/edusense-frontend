// src/components/landing/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  const [temperature, setTemperature] = useState('22.4');
  const [humidity, setHumidity] = useState('--'); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = '1a53b722ae6a7ccbd897d56c8c01dbba'; // <--- KEYYYYYYY
        const city = 'Lima';
        const country = 'PE';
        
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`
        );
        
        if (response.ok) {
          const data = await response.json();
          const temp = data.main.temp.toFixed(1);
          const hum = data.main.humidity; 
          
          setTemperature(temp);
          setHumidity(hum); 
        } else {
          console.error('Error al obtener datos del clima:', response.statusText);
          
          setHumidity('--'); 
        }
      } catch (error) {
        console.error('Error de conexión:', error);
        
        setHumidity('--'); 
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    
    
    const interval = setInterval(fetchWeather, 43200000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      
      
      <div className="hero-content" data-aos="fade-up">
        <h1>
          Mejora el aprendizaje y bienestar en tu aula con 
          <span className="highlight"> EduSense.</span>
        </h1>
        <p>
          La solución IoT modular y asequible para monitorear el ambiente
          de aprendizaje en aulas peruanas.
        </p>
        <p>
          Gestiona el confort térmico, la calidad del aire y reduce
          interrupciones con datos en tiempo real.
        </p>
        <div className="hero-buttons">
          <a href="#solucion" className="btn-primary">Ver cómo funciona</a>
          <Link to="/demo" className="btn-secondary">Solicitar demo</Link>
        </div>
      </div>

      
      <div className="hero-visuals">
      
        <div className="sensor-card co2" data-aos="fade-left" data-aos-delay="200">
          <span className="label">CO₂</span>
          <span className="value">742 <span className="unit">ppm</span></span>
        </div>
        
        
        <div className="sensor-card temp" data-aos="fade-left" data-aos-delay="400">
          <span className="label">TEMPERATURA EN LIMA</span>
          <span className="value">
            {loading ? (
              <span className="loading-dot">●●●</span>
            ) : (
              temperature
            )}
            <span className="unit">°C</span>
          </span>
        </div>
        
       
        <div className="sensor-card humidity" data-aos="fade-left" data-aos-delay="600">
          <span className="label">HUMEDAD EN LIMA</span>
          <span className="value">
            {loading ? (
              <span className="loading-dot">●●●</span>
            ) : (
              humidity
            )}
            <span className="unit">%</span>
          </span>
        </div>
        
        
        <div className="bg-shape shape1"></div>
        <div className="bg-shape shape2"></div>
      </div>

      
      <a href="#problema" className="scroll-down-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.05020 8.22168L11.9999 13.1714Z"></path>
        </svg>
        <span>Desplaza para ver más</span>
      </a>
    </section>
  );
}

export default HeroSection;