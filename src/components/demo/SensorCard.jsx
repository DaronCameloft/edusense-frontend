// src/components/demo/SensorCard.jsx
import React, { useId, useRef, useEffect } from 'react'; // Asegúrate de importar useRef y useEffect
import './SensorCard.css';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const RANGOS_CO2 = { optimo: 1000, alerta: 1500 };
const RANGOS_TEMP = { optimo: 25, alerta: 28 };

function SensorCard({ label, value, unit }) {
  const cardId = useId(); 
  const valueRef = useRef(null);
  
  // --- 1. AÑADE ESTA LÍNEA ---
  const isNumeric = typeof value === 'number';

  // Determinar el estado
  let status = 'normal';
  if (label === 'CO₂' && value > RANGOS_CO2.alerta) status = 'peligro';
  else if (label === 'CO₂' && value > RANGOS_CO2.optimo) status = 'alerta';
  else if (label.includes('Temp') && value > RANGOS_TEMP.alerta) status = 'peligro';
  else if (label.includes('Temp') && value > RANGOS_TEMP.optimo) status = 'alerta';

  // Animación GSAP (modificada para manejar texto)
  useEffect(() => {
    if (valueRef.current) {
      if (isNumeric) {
        // Si es número, animar el contador
        gsap.to(valueRef.current, {
          duration: 1,
          textContent: value,
          ease: 'power2.out',
          snap: { textContent: 1 },
        });
      } else {
        // Si es texto (ej. "Apagado"), solo ponlo, sin animación de contador
        valueRef.current.textContent = value;
      }
    }
  }, [value, isNumeric]);

  return (
    // --- 2. MODIFICA ESTA LÍNEA ---
    // Añade la clase 'text-based' si NO es numérico
    <div className={`sensor-card-widget ${status} ${!isNumeric ? 'text-based' : ''}`} id={cardId}>
      <div className="card-header">
        <span className="card-label">{label}</span>
      </div>
      <div className="card-body">
        <span className="card-value" ref={valueRef}>
          {isNumeric ? 0 : value}
        </span>
        <span className="card-unit">{unit}</span>
      </div>
    </div>
  );
}

export default SensorCard;