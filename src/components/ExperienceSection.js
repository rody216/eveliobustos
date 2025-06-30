import React, { useEffect, useRef, useState } from 'react';

const ExperienceSection = () => {
  const stats = [
    { label: "Años de Experiencia", value: 15, suffix: "+" },
    { label: "Clientes Satisfechos", value: 500, suffix: "+" },
    { label: "Proyectos Completados", value: 1200, suffix: "+" },
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, index) => {
              let start = 0;
              const end = stat.value;
              const duration = 2000; // milliseconds
              let startTime = null;

              const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = (currentTime - startTime) / duration;
                const currentValue = Math.min(progress, 1) * end;
                setAnimatedValues(prev => {
                  const newValues = [...prev];
                  newValues[index] = Math.floor(currentValue);
                  return newValues;
                });

                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              requestAnimationFrame(animate);
            });
            observer.disconnect(); // Stop observing once animation starts
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-12">Nuestra Trayectoria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-6xl font-extrabold text-[#FFD700] mb-4">
                {animatedValues[index]}{stat.suffix}
              </div>
              <h3 className="text-2xl font-semibold text-white">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;