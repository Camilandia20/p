// src/components/AgendarExamen.js
import React, { useState } from 'react';
import './agendarExamen.css'; // Importa el archivo CSS para los estilos

const AgendarExamen = () => {
  const [fecha, setFecha] = useState('');
  const [nombre, setNombre] = useState('');
  const [problemas, setProblemas] = useState([]);

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleProblemasChange = (e) => {
    const selectedProblems = Array.from(e.target.selectedOptions, (option) => option.value);
    setProblemas(selectedProblems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar los datos del examen
    console.log('Fecha:', fecha);
    console.log('Nombre:', nombre);
    console.log('Problemas:', problemas);
    // Aquí podrías agregar una llamada a una función de API para enviar los datos a tu backend
  };

  return (
    <div className="agendar-examen-container">
      <h2 className="agendar-examen-title">Agendar Examen</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fecha">Fecha del Examen:</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={handleFechaChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre del test:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="problemas">Problemas a Evaluar:</label>
          <select
            id="problemas"
            multiple
            value={problemas}
            onChange={handleProblemasChange}
            required
          >
            <option value="dolor">Palindromos</option>
            <option value="fatiga">La copa del Rey</option>
            <option value="tos">N+1</option>
            <option value="mareos">Divide y vencerás</option>
            {/* Agrega más opciones según los problemas que desees permitir */}
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Agendar Examen</button>
        </div>
      </form>
    </div>
  );
};

export default AgendarExamen;
