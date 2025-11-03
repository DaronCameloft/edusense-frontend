// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


import logoSrc from '../../assets/Logo_EduSense_blanco.png'; 

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
   
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="container">
        <div className="logo">
  
          <Link to="/">
            <img src={logoSrc} alt="Logo de EduSense" className="logo-img" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><a href="#solucion">Solución</a></li>
          <li><a href="#tecnologia">Tecnología</a></li>
          <li><a href="#casos-uso">Casos de Uso</a></li>
          
          <li><Link to="/demo" className="btn-nav-demo">Ver DEMO</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;