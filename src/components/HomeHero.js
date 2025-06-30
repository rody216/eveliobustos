import React from 'react';

const HomeHero = ({ onNavigate }) => {
  return (
    <section className="relative bg-black text-white py-20 md:py-32 lg:py-48 flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(hero-image.jpg)' }}></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Evelio Bustos Apache
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 text-[#FFD700]">
          Contador Público - Revisor Fiscal
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
          Ética, Calidad y Compromiso: Tu socio estratégico en contaduría para el éxito financiero.
        </p>
        <button
          onClick={() => onNavigate('contacto')}
          className="bg-[#FFD700] text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400"
        >
          Agenda una Consulta
        </button>
      </div>
    </section>
  );
};

export default HomeHero;