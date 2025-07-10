import React from 'react';
import profile from '../img/profile.png'; // Asegúrate de que la ruta sea correcta

const AboutMeSection = () => {
  return (
  <section className="py-16 md:py-24 bg-black text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] text-center mb-12">Sobre Mí</h2>
    <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={profile} // imagen de perfil llamada profile.jpg
          alt="Evelio Bustos Apache"
          className="rounded-3xl shadow-2xl w-full h-auto object-cover transform transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="lg:w-1/2 text-gray-300 text-justify">
        <p className="text-lg leading-relaxed mb-6">
          Soy Evelio Bustos Apache, contador público con más de 15 años de experiencia brindando soluciones contables, fiscales y financieras de alta calidad a empresas y emprendedores. Me especializo en revisoría fiscal, contraloría y auditorías, con un enfoque en el cumplimiento normativo, la transparencia y el crecimiento sostenible de mis clientes.

          Entre los estudios que he realizado, soy Especialista en Revisoría Fiscal y Contraloría, Contador Público de la Corporación Universitaria Remington, Tengo un Diplomado en Contratación Pública, con la corporacion Delphy Colombia, soy Auditor Interno en Sistemas Integrados de Gestión con el SENA y Formación en Contratación Estatal, Control Interno e Inspector Militar, con el Ejército Nacional de Colombia.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Entre los estudios que he realizado, me especializo en Revisoría Fiscal y Contraloría, Contador Público de la Corporación Universitaria Remington, con un Diplomado en Contratación Pública de la Corporación Delphy Colombia. Además, soy Auditor Interno en Sistemas Integrados de Gestión con el SENA y cuento con formación en Contratación Estatal, Control Interno e Inspector Militar del Ejército Nacional de Colombia.
        </p>

        <h3 className="text-3xl font-semibold text-[#FFD700] mb-4">Nuestra Misión</h3>
        <p className="text-lg leading-relaxed mb-6">
          Ofrecer un servicio personalizado, eficiente y estratégico, generando tranquilidad y confianza en cada proceso contable. Me respaldo en una sólida formación académica y una trayectoria que incluye el sector público, privado y militar.
        </p>

        <h3 className="text-3xl font-semibold text-[#FFD700] mb-4">Nuestra Visión</h3>
        <p className="text-lg leading-relaxed">
          Ser el despacho contable de referencia en Colombia, reconocido por la excelencia en el servicio, la innovación en soluciones y el impacto positivo en la economía de sus clientes.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default AboutMeSection;