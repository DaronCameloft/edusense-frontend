// src/pages/DemoPanel.jsx
import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from '../components/demo/Sidebar';
import SensorCard from '../components/demo/SensorCard';
import './DemoPanel.css';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

const AULAS_DISPONIBLES = [
  { id: 'a-101', nombre: 'Aula A-101 (Principal)' },
  { id: 'b-205', nombre: 'Aula B-205 (Laboratorio)' },
  { id: 'c-301', nombre: 'Aula C-301 (Auditorio)' },
];


const AULA_CARD_CONFIG = {
  'a-101': [
    { id: 'temp', label: 'Temperatura', unit: '°C', type: 'dynamic' },
    { id: 'hum', label: 'Humedad', unit: '%', type: 'dynamic' },
    { id: 'co2', label: 'CO₂', unit: 'ppm', type: 'dynamic' },
    { id: 'ruido', label: 'Nivel de Ruido', unit: 'dB', type: 'dynamic' },
    { id: 'ilum', label: 'Iluminación', value: 'Buena', unit: '(700 lux)', type: 'static' },
    { id: 'estado', label: 'Estado', value: 'Óptimo', unit: '', type: 'static' },
  ],
  'b-205': [
    { id: 'temp', label: 'Temp. (Laboratorio)', unit: '°C', type: 'dynamic' },
    { id: 'hum', label: 'Humedad (Laboratorio)', unit: '%', type: 'dynamic' },
    { id: 'co2', label: 'CO₂', unit: 'ppm', type: 'dynamic' },
    { id: 'voltaje', label: 'Voltaje de Banco', value: '220.1', unit: 'V', type: 'static' },
    { id: 'gas', label: 'Detector de Gas', value: 'OK', unit: '', type: 'static' },
  ],
  'c-301': [
    { id: 'temp', label: 'Temp. (Auditorio)', unit: '°C', type: 'dynamic' },
    { id: 'co2', label: 'CO₂', unit: 'ppm', type: 'dynamic' },
    { id: 'ruido', label: 'Nivel de Ruido', unit: 'dB', type: 'dynamic' },
    { id: 'proyector', label: 'Proyector', value: 'Apagado', unit: '', type: 'static' },
    { id: 'puerta', label: 'Acceso Principal', value: 'Cerrado', unit: '', type: 'static' },
  ]
};
// ---------------------------------------------

function DemoPanel() {
  
  const [selectedAula, setSelectedAula] = useState(AULAS_DISPONIBLES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAulas = useMemo(() => 
    AULAS_DISPONIBLES.filter(aula =>
      aula.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]
  );

  const [sensorData, setSensorData] = useState({
    temp: 21,
    hum: 65,
    co2: 600,
    ruido: 55,
  });

  useEffect(() => {
    console.log(`Cargando datos para ${selectedAula.nombre}`);
    
    const interval = setInterval(() => {
      setSensorData({
        temp: parseFloat((Math.random() * (28 - 18) + 18).toFixed(1)),
        hum: Math.floor(Math.random() * (80 - 50) + 50),
        co2: Math.floor(Math.random() * (1800 - 400) + 400),
        ruido: Math.floor(Math.random() * (85 - 40) + 40),
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, [selectedAula]);

  const handleSelectAula = (aula) => {
    setSelectedAula(aula);
    setIsDropdownOpen(false);
    setSearchTerm('');
  };

  const currentCards = AULA_CARD_CONFIG[selectedAula.id] || [];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        
      
        <div className="status-light-container">
          <span className="status-light"></span>
          Aula Conectada
        </div>

       
        <div className="main-title-bar">
          <h1>{selectedAula.nombre}</h1>
          
          <div className="aula-selector">
            <button 
              className="selector-button" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Cambiar Aula</span>
              <FiChevronDown style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
            
            {isDropdownOpen && (
              <div className="aula-dropdown">
                <div className="aula-searchbar">
                  <FiSearch />
                  <input 
                    type="text" 
                    placeholder="Buscar aula..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <ul className="aula-list">
                  {filteredAulas.length > 0 ? (
                    filteredAulas.map(aula => (
                      <li key={aula.id} className="aula-item" onClick={() => handleSelectAula(aula)}>
                        {aula.nombre}
                      </li>
                    ))
                  ) : (
                    <li className="aula-item-none">No se encontraron aulas</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

   
        <div className="widgets-grid">
          
          {currentCards.map(card => (
            <SensorCard
              key={card.id}
              label={card.label}
             
              value={
                card.type === 'dynamic' 
                  ? (sensorData[card.id] || 0) 
                  : card.value
              }
              unit={card.unit}
            />
          ))}

        </div>
      </main>
    </div>
  );
}

export default DemoPanel;