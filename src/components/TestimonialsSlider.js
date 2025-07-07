import React, { useState, useEffect } from 'react';

import avatar1 from '../img/avatar1.jpg';
import avatar2 from '../img/avatar2.jpg';
import avatar3 from '../img/avatar3.jpg';
import avatar4 from '../img/avatar4.jpg';
import avatar5 from '../img/avatar5.jpg';
import avatar6 from '../img/avatar6.jpg';

const testimonials = [
  {
    quote: "El servicio de Evelio Bustos Apache ha sido excepcional. Su asesoría fiscal nos ha permitido optimizar nuestros recursos de manera significativa, lo que se ha traducido en un crecimiento notable para nuestra empresa. La claridad y el profesionalismo con los que manejan cada caso son dignos de admiración. ¡Definitivamente, un aliado estratégico indispensable para cualquier negocio que busque solidez financiera y cumplimiento normativo!",
    author: "Ana G. - Empresaria",
    avatar: avatar1
  },
  {
    quote: "Gracias a su equipo, la contabilidad de mi negocio es mucho más sencilla y transparente. Antes, el tema fiscal me generaba mucho estrés, pero ahora tengo la tranquilidad de que todo está en orden y bajo control. Siempre están disponibles para resolver cualquier duda, por pequeña que sea, y su paciencia y conocimiento son invaluables. ¡Recomiendo ampliamente sus servicios a todos los emprendedores!",
    author: "Carlos M. - Emprendedor",
    avatar: avatar2
  },
  {
    quote: "Profesionalismo y eficiencia definen su trabajo. Nos ayudaron a regularizar nuestra situación fiscal en tiempo récord, evitando multas y complicaciones futuras. Su enfoque proactivo y su capacidad para anticipar problemas nos han brindado una seguridad que no habíamos encontrado en otros despachos. Un gran aliado para cualquier empresa que valore la seriedad y la efectividad en la gestión contable.",
    author: "Sofía P. - Directora Financiera",
    avatar: avatar3
  },
  {
    quote: "La atención personalizada que recibimos de Evelio Bustos Apache es incomparable. Se toman el tiempo para entender nuestras necesidades específicas y nos ofrece soluciones a medida que realmente funcionan. Su equipo es sumamente competente y siempre están un paso adelante en las actualizaciones fiscales. Es un placer trabajar con profesionales de este calibre.",
    author: "Roberto L. - Gerente General",
    avatar: avatar4
  },
  {
    quote: "Desde que confiamos nuestra contabilidad a este despacho, hemos notado una mejora sustancial en la organización de nuestras finanzas. La comunicación es fluida y siempre nos mantienen informados de cualquier novedad. Su experiencia en revisoría fiscal nos ha dado una tranquilidad enorme. ¡Un servicio de primera que supera las expectativas!",
    author: "Laura V. - Dueña de PYME",
    avatar: avatar5
  },
  {
    quote: "Lo que más valoro de Evelio Bustos Apache es su compromiso con la ética y la transparencia. Nos han guiado en cada paso para asegurar que nuestras operaciones cumplan con todas las normativas, evitando cualquier riesgo. Su asesoría no solo es técnica, sino también estratégica, ayudándonos a tomar mejores decisiones financieras. ¡Un verdadero socio de negocios!",
    author: "Miguel A. - Inversionista",
    avatar: avatar6
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-12">Lo que Dicen Nuestros Clientes</h2>
        <div className="relative max-w-5xl mx-auto bg-black rounded-3xl shadow-xl p-8 md:p-12">
  {/* Contenedor que recorta lo visible */}
  <div className="overflow-hidden w-full">
    {/* Carrusel que se desliza horizontalmente */}
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{
        transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
        width: `${testimonials.length * 100}%`,
      }}
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full px-4 md:px-12"
          style={{ width: `${100 / testimonials.length}%` }}
        >
          <div className="flex flex-col items-center">
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              className="w-28 h-28 rounded-full object-cover mb-6 shadow-md border-4 border-[#FFD700]"
            />
            <p className="text-xl md:text-2xl italic text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              "{testimonial.quote}"
            </p>
            <p className="text-lg font-semibold text-[#FFD700]">- {testimonial.author}</p>
          </div>
        </div>
      ))}
    </div>
  </div>



          <button
            onClick={goToPrev}
            aria-label="Testimonio anterior"
            className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#FFD700] text-black p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={goToNext}
            aria-label="Testimonio siguiente"
            className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#FFD700] text-black p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir al testimonio ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === idx ? 'bg-[#FFD700]' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
