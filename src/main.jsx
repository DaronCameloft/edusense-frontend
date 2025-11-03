// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css' // Tus estilos globales

// --- Añade estas 2 líneas para AOS ---
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos';
// -------------------------------------

// --- AÑADES ESTAS 3 LÍNEAS NUEVAS ---
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// ------------------------------------

AOS.init({
  duration: 1000, // Duración de la animación en ms
  once: false      // Si la animación debe ocurrir solo una vez
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)