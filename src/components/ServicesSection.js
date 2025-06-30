import React from 'react';

const services = [
  {
    title: "Asesoría Fiscal",
    description: "Optimización de impuestos y cumplimiento de obligaciones fiscales para personas físicas y morales, garantizando la máxima eficiencia y legalidad.",
    icon: (
      <svg className="w-12 h-12 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    )
  },
  {
    title: "Contabilidad General",
    description: "Registro y control de operaciones financieras, elaboración de estados financieros y reportes contables precisos para una toma de decisiones informada.",
    icon: (
      <svg className="w-12 h-12 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
      </svg>
    )
  },
  {
    title: "Nóminas y Seguridad Social",
    description: "Cálculo y procesamiento de nóminas, así como altas y bajas ante IMSS e INFONAVIT, asegurando el cumplimiento de la normativa laboral.",
    icon: (
      <svg className="w-12 h-12 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-2a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v11a2 2 0 01-2 2zM9 20H7a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v11a2 2 0 01-2 2z"></path>
      </svg>
    )
  },
  {
    title: "Auditorías",
    description: "Revisión exhaustiva de estados financieros para asegurar la transparencia, el cumplimiento normativo y la detección de áreas de mejora.",
    icon: (
      <svg className="w-12 h-12 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
      </svg>
    )
  },
  {
    title: "Revisoría Fiscal",
    description: "Evaluación independiente de los sistemas de control interno y el cumplimiento de las normas contables y fiscales.",
    icon: (
      <svg className="w-12 h-12 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h3m0 0l-3-3m3 3l3-3m-3 3v-6m0-2V7"></path>
      </svg>
    )
  },
  {
    title: "Constitución de Empresas",
    description: "Asesoría y gestión en el proceso de creación de nuevas empresas, desde la elección del tipo societario hasta el registro legal.",
    icon: (
      <svg className="w-12 h-12 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 10h.01M15 10h.01M12 15h.01M12 12h.01M9 15h.01M15 15h.01M12 18h.01M9 18h.01M15 18h.01M12 21v-3"></path>
      </svg>
    )
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-6 p-4 rounded-full bg-[#333333]">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;