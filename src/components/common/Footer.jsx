// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoSrc from '../../assets/Logo_EduSense_blanco.png';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-top">
          
          <div className="footer-column footer-brand">
            <Link to="/" className="footer-logo-link">
              <img src={logoSrc} alt="EduSense Logo" className="footer-logo" />
            </Link>
            <p className="footer-description">
              Transformando aulas en espacios inteligentes para un mejor aprendizaje.
              Monitoreo en tiempo real de condiciones ambientales óptimas.
            </p>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiTwitter />
              </a>
            </div>
          </div>

         
          <div className="footer-column">
            <h3 className="footer-title">Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#solucion">Solución</a></li>
              <li><a href="#tecnologia">Tecnoligia</a></li>
              <li><a href="#casos-uso">Casos de Uso</a></li>
              <li><Link to="/demo">Ver Demo</Link></li>
            </ul>
          </div>

         
          <div className="footer-column">
            <h3 className="footer-title">Producto</h3>
            <ul className="footer-links">
              <li><Link to="/demo">Dashboard</Link></li>
              <li><Link to="/reportes">Reportes</Link></li>
              <li><Link to="/alertas">Configuracion</Link></li>
             
            </ul>
          </div>

          
          <div className="footer-column">
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-contact">
              <li>
                <FiMail className="contact-icon" />
                <a href="mailto:info@edusense.com">daroncameloftdev@gmail.com</a>
              </li>
              <li>
                <FiPhone className="contact-icon" />
                <a href="tel:+51987654321">+51 933 855 712</a>
              </li>
              <li>
                <FiMapPin className="contact-icon" />
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} EduSense. Todos los derechos reservados.
            </p>
            <div className="footer-legal">
              <Link to="/privacidad">Política de Privacidad</Link>
              <span className="separator">•</span>
              <Link to="/terminos">Términos de Servicio</Link>
              <span className="separator">•</span>
              <Link to="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </div>

     
      <div className="footer-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
      </div>
    </footer>
  );
}

export default Footer;