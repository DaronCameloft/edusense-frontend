// src/components/demo/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import logoSrc from '../../assets/Logo_EduSense_blanco.png';
import { RxDashboard } from 'react-icons/rx';
import { FiBarChart, FiSettings, FiLogOut } from 'react-icons/fi';

function Sidebar() {
  const location = useLocation();
  
  // Función para determinar si el enlace está activo
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link to="/">
          <img src={logoSrc} alt="EduSense Logo" className="sidebar-logo" />
        </Link>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className={`nav-item ${isActive('/demo') ? 'active' : ''}`}>
            <Link to="/demo">
              <RxDashboard />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`nav-item ${isActive('/reportes') ? 'active' : ''}`}>
            <Link to="/reportes">
              <FiBarChart />
              <span>Reportes</span>
            </Link>
          </li>
          <li className={`nav-item ${isActive('/ajustes') ? 'active' : ''}`}>
            <Link to="/ajustes">
              <FiSettings />
              <span>Ajustes</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <Link to="/" className="nav-item logout-link">
          <FiLogOut />
          <span> Volver a Landing</span>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;