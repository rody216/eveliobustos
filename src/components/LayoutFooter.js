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
  {/* Facebook */}
  <a href="https://www.facebook.com/eveliobustosapache" target="_blank" rel="noopener noreferrer"
     className="text-[#FFD700] hover:text-[#1877F2] transition-colors transform hover:scale-125">
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.04C6.5 2.04 2 6.54 2 12.04c0 5.08 3.7 9.28 8.5 9.96v-7.04H8V12.04h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4V22c4.8-.7 8.5-4.9 8.5-9.96 0-5.5-4.5-10-10-10z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/eveliobustosapache" target="_blank" rel="noopener noreferrer"
     className="text-[#FFD700] hover:text-[#0A66C2] transition-colors transform hover:scale-125">
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.951v5.662H9.59V9.218h3.413v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.933a2.48 2.48 0 01-2.48-2.48c0-1.37 1.11-2.48 2.48-2.48s2.48 1.11 2.48 2.48c0 1.37-1.11 2.48-2.48 2.48zm1.782 12.519H3.555V9.218h3.564v11.234z" />
    </svg>
  </a>

  {/* X */}
  <a href="https://x.com/eveliobustosapache" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:text-black transition-colors transform hover:scale-125" aria-label="X (Twitter)">
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.34 3H16.9l-4.5 5.72L7.75 3H3l6.9 9.06L3 21h3.44l4.88-6.2L16.3 21h4.66l-7.16-9.46L20.34 3z" />
  </svg>
</a>


  {/* WhatsApp */}
  <a href="https://wa.me/573103704356" target="_blank" rel="noopener noreferrer"
     className="text-[#FFD700] hover:text-[#25D366] transition-colors transform hover:scale-125">
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 32 32">
      <path d="M16.04 2.01C8.66 2.01 2.6 8.06 2.6 15.44c0 2.62.72 5.06 1.97 7.17L2 30l7.67-2.48a13.38 13.38 0 006.37 1.62h.01c7.37 0 13.42-6.06 13.42-13.42 0-7.38-6.05-13.43-13.42-13.43zm0 24.72c-2.16 0-4.21-.57-5.97-1.57l-.43-.25-4.55 1.47 1.5-4.42-.28-.45a10.79 10.79 0 01-1.72-5.89c0-5.98 4.87-10.86 10.85-10.86 5.98 0 10.86 4.88 10.86 10.86 0 5.98-4.88 10.86-10.86 10.86zm5.93-8.21c-.33-.17-1.95-.96-2.25-1.07-.3-.12-.52-.17-.73.17-.21.33-.84 1.07-1.03 1.3-.19.22-.38.25-.7.08-.33-.17-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.26-.19-.33-.02-.5.15-.66.16-.16.33-.37.5-.55.17-.18.22-.3.33-.5.11-.22.06-.41-.03-.58-.09-.17-.73-1.74-1-2.39-.26-.63-.52-.54-.73-.55l-.62-.01c-.21 0-.55.08-.84.37s-1.1 1.07-1.1 2.61 1.13 3.03 1.29 3.24c.16.22 2.21 3.37 5.37 4.72.75.32 1.33.51 1.78.65.75.24 1.44.21 1.98.13.6-.09 1.95-.8 2.23-1.57.28-.77.28-1.44.2-1.57-.08-.13-.3-.21-.63-.37z" />
    </svg>
  </a>

  {/* Instagram */}
  <a href="https://instagram.com/eveliobustosapache" target="_blank" rel="noopener noreferrer"
     className="text-[#FFD700] hover:text-[#E4405F] transition-colors transform hover:scale-125">
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3a3 3 0 010-6zm4.5-.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
    </svg>
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