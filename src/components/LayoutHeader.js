import React, { useState, useEffect } from 'react';
import logo from '../img/logo.png'; // Asegúrate de que la ruta sea correcta

const LayoutHeader = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Inicio', page: 'inicio' },
    { name: 'Servicios', page: 'servicios' },
    { name: 'Experiencia', page: 'experiencia' },
    { name: 'Sobre Mí', page: 'sobreMi' },
    { name: 'Testimonios', page: 'testimonios' },
    { name: 'Contacto', page: 'contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-auto mr-3" />
          <div className="flex flex-col justify-center">
            <span className="text-xl font-bold text-[#FFD700]">Evelio Bustos Apache</span>
            <span className="text-sm text-white">Contador Público - Revisor Fiscal</span>
            <span className="text-xs text-gray-400">Ética, Calidad y Compromiso</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavLinkClick(item.page)}
              className={`font-medium transition-colors ${
                currentPage === item.page ? 'text-white border-b-2 border-[#FFD700]' : 'text-[#FFD700] hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#FFD700] focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-lg pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavLinkClick(item.page)}
                className={`font-medium transition-colors w-full py-2 ${
                  currentPage === item.page ? 'text-white border-l-4 border-[#FFD700]' : 'text-[#FFD700] hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default LayoutHeader;