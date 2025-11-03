// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

function NotFoundPage() {
  return (
    <div className="not-found-container">
    
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="not-found-content">
   
        <div className="illustration">
          <svg viewBox="0 0 400 300" className="error-svg">
         
            <g className="robot">
          
              <rect x="150" y="120" width="100" height="100" rx="10" fill="#1e2a4a" stroke="#00ffa3" strokeWidth="3"/>
              
           
              <rect x="165" y="80" width="70" height="60" rx="8" fill="#1e2a4a" stroke="#00ffa3" strokeWidth="3"/>
              
              
              <line x1="200" y1="80" x2="200" y2="50" stroke="#00ffa3" strokeWidth="3"/>
              <circle cx="200" cy="45" r="8" fill="#00ffa3" className="antenna-light"/>
              
              
              <circle cx="180" cy="105" r="8" fill="#00ffa3" className="eye left-eye"/>
              <circle cx="220" cy="105" r="8" fill="#00ffa3" className="eye right-eye"/>
              
              
              <path d="M 175 125 Q 200 115 225 125" stroke="#00ffa3" strokeWidth="3" fill="none"/>
              
             
              <rect x="120" y="140" width="30" height="15" rx="7" fill="#1e2a4a" stroke="#00ffa3" strokeWidth="2"/>
              <rect x="250" y="140" width="30" height="15" rx="7" fill="#1e2a4a" stroke="#00ffa3" strokeWidth="2"/>
              
              
              <rect x="165" y="220" width="25" height="40" rx="5" fill="#1e2a4a" stroke="#00ffa3" strokeWidth="2"/>
              <rect x="210" y="220" width="25" height="40" rx="5" fill="#1e2a4a" stroke="#00ffa3" strokeWidth="2"/>
              
              
              <circle cx="200" cy="160" r="15" fill="none" stroke="#00ffa3" strokeWidth="2"/>
              <circle cx="200" cy="160" r="10" fill="none" stroke="#00ffa3" strokeWidth="1"/>
            </g>

            
            <text x="290" y="100" className="floating-icon icon-1" fill="#00ffa3" fontSize="30" fontWeight="bold">?</text>
            <text x="80" y="150" className="floating-icon icon-2" fill="#00ffa3" fontSize="25" fontWeight="bold">?</text>
            <text x="310" y="200" className="floating-icon icon-3" fill="#00ffa3" fontSize="20" fontWeight="bold">?</text>
          </svg>
        </div>

       
        <div className="error-text">
          <h1 className="error-code">202 Accepted</h1>
          <h2 className="error-title">Ups... Nos pillaste</h2>
          <p className="error-description">
            El equipo de <b>EduSense</b> Todavia sta trabajando
            en esta pagina, espera al TF :D
          </p>
        </div>

        
        <div className="action-buttons">
          <Link to="/" className="btn-404 btn-primary">
            <FiHome />
            <span>Ir al Inicio</span>
          </Link>
          <button onClick={() => window.history.back()} className="btn-404 btn-secondary">
            <FiArrowLeft />
            <span>Volver Atrás</span>
          </button>
        </div>

       
        <div className="suggestions">
          <p className="suggestions-title">¿Qué puedes hacer?</p>
          <div className="suggestions-grid">
            <Link to="/" className="suggestion-card">
              
              <span className="suggestion-text">Volver al inicio</span>
            </Link>
            <Link to="/demo" className="suggestion-card">
              
              <span className="suggestion-text">Ver Dashboard</span>
            </Link>
            <a href="mailto:soporte@edusense.com" className="suggestion-card">
              
              <span className="suggestion-text">Contactar soporte</span>
            </a>
          </div>
        </div>

        <div className="daroncredits">
          <span> @DaronCameloft </span>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;