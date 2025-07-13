// Nuevo archivo: TestimonialForm.js
import React, { useState } from 'react';

const TestimonialForm = ({ onSubmitted }) => {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('comentario', comentario);
    if (imagen) formData.append('imagen', imagen);

    const response = await fetch('http://localhost/api/agregar_testimonio.php', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Testimonio enviado correctamente');
      setNombre('');
      setComentario('');
      setImagen(null);
      onSubmitted();
    } else {
      alert('Error al enviar el testimonio');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-white rounded-2xl p-6 border border-[#FFD700] max-w-xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Agregar Testimonio</h3>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre"
        required
        className="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-600"
      />
      <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Tu comentario"
        required
        rows={4}
        className="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-600"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImagen(e.target.files[0])}
        className="mb-4"
      />
      <button
        type="submit"
        className="bg-[#FFD700] hover:bg-white text-black px-4 py-2 rounded font-bold"
      >
        Enviar Testimonio
      </button>
    </form>
  );
};

export default TestimonialForm;
