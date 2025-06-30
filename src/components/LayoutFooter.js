import React from 'react';
import logo from '../img/logo.png'; // Asegúrate de que la ruta sea correcta

const LayoutFooter = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <img src={logo} alt="Logo" className="h-16 w-auto mx-auto md:mx-0 mb-4" />
          <p className="text-lg font-bold mb-2 text-[#FFD700]">Evelio Bustos Apache</p>
          <p className="text-sm text-gray-300">Contador Público - Revisor Fiscal</p>
          <p className="text-sm text-gray-300">Ética, Calidad y Compromiso.</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">Navegación</h3>
          <ul className="space-y-2">
            <li><button onClick={() => onNavigate('inicio')} className="hover:text-white transition-colors">Inicio</button></li>
            <li><button onClick={() => onNavigate('servicios')} className="hover:text-white transition-colors">Servicios</button></li>
            <li><button onClick={() => onNavigate('experiencia')} className="hover:text-white transition-colors">Experiencia</button></li>
            <li><button onClick={() => onNavigate('sobreMi')} className="hover:text-white transition-colors">Sobre Mí</button></li>
            <li><button onClick={() => onNavigate('testimonios')} className="hover:text-white transition-colors">Testimonios</button></li>
            <li><button onClick={() => onNavigate('contacto')} className="hover:text-white transition-colors">Contacto</button></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">Contacto</h3>
          <p className="mb-2">
            <a href="mailto:eveliobustos@gmail.com" className="flex items-center justify-center md:justify-start hover:text-white transition-colors group">
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0l-2 2m20-2l2 2"></path></svg>
              eveliobustos@gmail.com
            </a>
          </p>
          <p className="mb-2">
            <a href="tel:+573103704356" className="flex items-center justify-center md:justify-start hover:text-white transition-colors group">
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
              +57 310 3704356
            </a>
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="https://www.facebook.com/eveliobustosapache" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] transition-colors transform hover:scale-125">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.04C6.5 2.04 2 6.54 2 12.04c0 5.08 3.7 9.28 8.5 9.96v-7.04H8V12.04h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4V22c4.8-.7 8.5-4.9 8.5-9.96 0-5.5-4.5-10-10-10z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/eveliobustosapache" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] transition-colors transform hover:scale-125">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.951v5.662H9.59V9.218h3.413v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.933a2.48 2.48 0 01-2.48-2.48c0-1.37 1.11-2.48 2.48-2.48s2.48 1.11 2.48 2.48c0 1.37-1.11 2.48-2.48 2.48zm1.782 12.519H3.555V9.218h3.564v11.234z"></path></svg>
            </a>
            <a href="https://twitter.com/eveliobustosapache" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] transition-colors transform hover:scale-125">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.4 7.5 3.53 4.73c-.37.64-.58 1.39-.58 2.19 0 1.49.75 2.81 1.91 3.56-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.95 4.03 2.98-1.48 1.16-3.35 1.85-5.38 1.85-.35 0-.69-.02-1.03-.06C3.17 20.06 5.38 20.7 7.68 20.7c9.2 0 14.23-7.64 14.23-14.23 0-.19-.01-.38-.01-.56.97-.7 1.8-1.56 2.46-2.54z"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Evelio Bustos Apache. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default LayoutFooter;