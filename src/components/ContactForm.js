import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const servicesOptions = [
    "Asesoría Fiscal",
    "Contabilidad General",
    "Nóminas y Seguridad Social",
    "Auditorías",
    "Revisoría Fiscal",
    "Constitución de Empresas"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Enviando...');

  const formElement = e.target;
  const formDataToSend = new FormData(formElement);

  try {
    const response = await fetch("/sendmail.php", {
      method: "POST",
      body: formDataToSend
    });

    const text = await response.text();

    if (response.ok && text.trim() === "success") {
      // ✅ Redirigir a la página de agradecimiento
      window.location.href = "/thanks.html";
    } else {
      setStatus(`Error: ${text}`);
    }
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    setStatus('Error al enviar el mensaje. Intenta de nuevo.');
  }
};


  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] text-center mb-12">Contáctanos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Columna izquierda: Información de Contacto */}
          <div className="bg-[#1a1a1a] rounded-3xl shadow-xl p-8 md:p-12 grid gap-10">
            <div>
              <h3 className="text-3xl font-semibold text-[#FFD700] mb-6">Información de Contacto</h3>
              <div className="space-y-4 text-gray-300">
                <p className="mb-2">
                  <a
                    href="tel:+573103704356"
                    className="flex items-center justify-center md:justify-start text-white hover:text-[#FFD700] transition-colors group"
                  >
                    <svg
                      className="w-6 h-6 mr-3 text-[#FFD700] group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                      />
                    </svg>
                    +57 310 3704356
                  </a>
                </p>

                <p className="mb-2">
                  <a
                    href="mailto:eveliobustos@gmail.com"
                    className="flex items-center justify-center md:justify-start text-white hover:text-[#FFD700] transition-colors group"
                  >
                    <svg
                      className="w-6 h-6 mr-3 text-[#FFD700] group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0l-2 2m20-2l2 2"
                      />
                    </svg>
                    eveliobustos@gmail.com
                  </a>
                </p>

                <p className="mb-2">
  <a
    href="https://www.google.com/maps/place/Cra.+74+%23163-40,+Bogot%C3%A1,+Colombia"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center md:justify-start text-white hover:text-[#FFD700] transition-colors group"
  >
    <svg
      className="w-6 h-6 mr-3 text-[#FFD700] mt-1 group-hover:scale-110 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
    Cra. 74 Nr 163 - 40, Suba - Bogotá, Colombia
  </a>
</p>

              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">Horarios de Atención</h3>
                <p className="text-lg text-gray-300">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p className="text-lg text-gray-300">Sábados: 9:00 AM - 1:00 PM</p>
              </div>

              <div>
  <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">Síguenos</h3>
  <div className="flex space-x-4">
    {/* Facebook */}
    <a href="https://www.facebook.com/bustosapache" className="text-[#FFD700] hover:text-[#1877F2] transition-colors transform hover:scale-125" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H8.08v-2.91h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62.72 0 1.67.13 1.67.13v1.86h-.94c-.93 0-1.22.58-1.22 1.17v1.4h2.08l-.33 2.91h-1.75v7.02C18.34 21.25 22 17.09 22 12.07z" />
      </svg>
    </a>

    {/* Instagram */}
    <a href="https://www.instagram.com/eveliobustosapache" className="text-[#FFD700] hover:text-[#E4405F] transition-colors transform hover:scale-125" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3a3 3 0 010-6zm4.5-.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </svg>
    </a>

    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/evelio-bustos-apache-270878373/" className="text-[#FFD700] hover:text-[#0A66C2] transition-colors transform hover:scale-125" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.34 19H5.67V9h2.67v10zM7 7.5C6.17 7.5 5.5 6.83 5.5 6S6.17 4.5 7 4.5 8.5 5.17 8.5 6 7.83 7.5 7 7.5zM19 19h-2.67v-5.33c0-1.27-.02-2.9-1.76-2.9s-2.03 1.38-2.03 2.8V19H10v-10h2.56v1.36h.04c.36-.68 1.24-1.4 2.56-1.4 2.73 0 3.23 1.8 3.23 4.13V19z" />
      </svg>
    </a>

   {/* WhatsApp */}
<a
  href="https://wa.me/573103704356?text=%C2%A1Hola!%20Gracias%20por%20contactarte%20con%20Evelio%20Bustos%20Apache.%20%C2%BFEn%20qu%C3%A9%20puedo%20ayudarte%20hoy%3F%20*%C2%A1%C3%89tica%2C%20Calidad%20y%20Compromiso!*"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="text-[#FFD700] hover:text-[#25D366] transition-colors transform hover:scale-125"
>
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 32 32">
    <path d="M16.04 2.01C8.66 2.01 2.6 8.06 2.6 15.44c0 2.62.72 5.06 1.97 7.17L2 30l7.67-2.48a13.38 13.38 0 006.37 1.62h.01c7.37 0 13.42-6.06 13.42-13.42 0-7.38-6.05-13.43-13.42-13.43zm0 24.72c-2.16 0-4.21-.57-5.97-1.57l-.43-.25-4.55 1.47 1.5-4.42-.28-.45a10.79 10.79 0 01-1.72-5.89c0-5.98 4.87-10.86 10.85-10.86 5.98 0 10.86 4.88 10.86 10.86 0 5.98-4.88 10.86-10.86 10.86zm5.93-8.21c-.33-.17-1.95-.96-2.25-1.07-.3-.12-.52-.17-.73.17-.21.33-.84 1.07-1.03 1.3-.19.22-.38.25-.7.08-.33-.17-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.26-.19-.33-.02-.5.15-.66.16-.16.33-.37.5-.55.17-.18.22-.3.33-.5.11-.22.06-.41-.03-.58-.09-.17-.73-1.74-1-2.39-.26-.63-.52-.54-.73-.55l-.62-.01c-.21 0-.55.08-.84.37s-1.1 1.07-1.1 2.61 1.13 3.03 1.29 3.24c.16.22 2.21 3.37 5.37 4.72.75.32 1.33.51 1.78.65.75.24 1.44.21 1.98.13.6-.09 1.95-.8 2.23-1.57.28-.77.28-1.44.2-1.57-.08-.13-.3-.21-.63-.37z" />
  </svg>
</a>



    {/* X (Twitter) */}
    <a href="https://x.com/eveliobustosapache" className="text-[#FFD700] hover:text-black transition-colors transform hover:scale-125" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.34 3H16.9l-4.5 5.72L7.75 3H3l6.9 9.06L3 21h3.44l4.88-6.2L16.3 21h4.66l-7.16-9.46L20.34 3z" />
      </svg>
    </a>
  </div>
</div>


            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <div className="bg-[#1a1a1a] rounded-3xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_next" value="https://eveliobustosapache.com/thanks.html" />

              
              <h3 className="text-3xl font-semibold text-[#FFD700] mb-6 -mt-4">Solicitar una Consulta.</h3>

              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required className="w-full px-5 py-3 border border-gray-700 rounded-xl bg-gray-800 text-white focus:ring-2 focus:ring-[#FFD700]" />

              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tu.correo@ejemplo.com" required className="w-full px-5 py-3 border border-gray-700 rounded-xl bg-gray-800 text-white focus:ring-2 focus:ring-[#FFD700]" />
             
              <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-5 py-3 border border-gray-700 rounded-xl bg-gray-800 text-white focus:ring-2 focus:ring-[#FFD700]">
                <option value="" disabled>Seleccione un servicio</option>
                {servicesOptions.map((s, i) => <option key={i} value={s}>{s}</option>)}
              </select>

              <textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Escribe tu mensaje aquí..." required className="w-full px-5 py-3 border border-gray-700 rounded-xl bg-gray-800 text-white focus:ring-2 focus:ring-[#FFD700] resize-y" />

              <button type="submit" className="w-full bg-[#FFD700] text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105">
                {status === 'Enviando...' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {status && status !== 'Enviando...' && (
                <p className={`mt-4 text-center text-lg ${status.includes('éxito') ? 'text-green-400' : 'text-red-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
