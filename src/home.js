// src/components/Home.js
import './home.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory

const Home = () => {
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  // Lista de exámenes disponibles (ejemplo)
  const exams = [
    { id: 1, name: 'Matemáticas' },
    { id: 2, name: 'Historia' },
    { id: 3, name: 'Ciencias' },
  ];

  const [selectedExam, setSelectedExam] = useState(null);

  const handleStartExam = () => {
    if (selectedExam) {
      // Redirige a la página de agendar examen con el examen seleccionado
      navigate(`/agendar/${selectedExam.id}`); // Usa navigate para redirigir
    } else {
      alert('Selecciona un examen para comenzar.');
    }
  };

  return (
    <div className="home-container">
      <h2>Selecciona un Examen</h2>
      <div className="exams-list">
        {exams.map((exam) => (
          <div key={exam.id} className="exam-item">
            <input
              type="radio"
              id={exam.id}
              name="exam"
              value={exam.id}
              onChange={() => setSelectedExam(exam)}
            />
            <label htmlFor={exam.id}>{exam.name}</label>
          </div>
        ))}
      </div>
      <button className="start-button" onClick={handleStartExam}>
        Comenzar Examen
      </button>
    </div>
  );
};

export default Home;
