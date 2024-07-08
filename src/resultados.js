import React from 'react';
import './resultados.css'; // Importa los estilos CSS

const ExamResultsTable = () => {
  const examResults = [
    { studentName: 'Juan Pérez', examName: 'Matemáticas', grade: 95 },
    { studentName: 'María García', examName: 'Historia', grade: 85 },
    { studentName: 'Carlos López', examName: 'Ciencias', grade: 92 },
  ];

  return (
    <div className="exam-results-container">
      <h2>Resultados de los Test</h2>
      <table>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Test</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {examResults.map((result, index) => (
            <tr key={index}>
              <td>{result.studentName}</td>
              <td>{result.examName}</td>
              <td>{result.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamResultsTable;
