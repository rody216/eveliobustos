import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeHero from './components/HomeHero';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import AboutMeSection from './components/AboutMeSection';
import TestimonialsSlider from './components/TestimonialsSlider';
import ContactForm from './components/ContactForm';
import LayoutFooter from './components/LayoutFooter';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      <LayoutHeader onNavigate={handleNavigate} currentPage={currentPage} />

      <main>
        {currentPage === 'inicio' && (
          <>
            <HomeHero onNavigate={handleNavigate} />
            <ServicesSection />
            <ExperienceSection />
            <AboutMeSection />
            <TestimonialsSlider />
            <ContactForm />
          </>
        )}
        {currentPage === 'servicios' && <ServicesSection />}
        {currentPage === 'experiencia' && <ExperienceSection />}
        {currentPage === 'sobreMi' && <AboutMeSection />}
        {currentPage === 'testimonios' && <TestimonialsSlider />}
        {currentPage === 'contacto' && <ContactForm />}
      </main>

      <LayoutFooter onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

// DONE