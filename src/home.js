import './home.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from './consumer';

const Home = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const data = await getData("https://cdb1-191-107-254-86.ngrok-free.app/evaluations");
        setExams(data);
      } catch (error) {
        console.error("Error fetching exams:", error);
        // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario
      }
    };

    fetchExams();
  }, []);

  const handleStartExam = () => {
    if (selectedExam) {
      navigate(`/agendar/${selectedExam.id}`);
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
            <label htmlFor={exam.id}>
              <strong>{exam.name}</strong> - Fecha: {new Date(exam.date).toLocaleString()}
            </label>
            <div className="problems-list">
              <strong>Problemas:</strong>
              <ul>
                {exam.problems.map((problem) => (
                  <li key={problem.id}>
                    {problem.description} (ID: {problem.id})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button className="start-button" onClick={handleStartExam} disabled={!selectedExam}>
        Comenzar Examen
      </button>
    </div>
  );
};

export default Home;