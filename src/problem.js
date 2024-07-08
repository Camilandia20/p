import React from 'react';
import './problem.css';
import Terminal from './terminal';

const ProblemDescription = () => {
  const problem = {
    description: 'Aquí va la descripción detallada del problema que el estudiante debe resolver.',
    inputExample: 'Ejemplo de entrada para el problema.',
    outputExample: 'Ejemplo de salida esperada para el problema.',
    // Puedes agregar más propiedades según sea necesario para el problema
  };
  return (
    <div className="problem-description">
      <h2>Descripción del Problema</h2>
      <p>{problem.description}</p>

      <h3>Ejemplo de Entrada</h3>
      <pre>{problem.inputExample}</pre>

      <h3>Ejemplo de Salida</h3>
      <pre>{problem.outputExample}</pre>

      {/* Aquí podrías agregar más detalles del problema si es necesario */}

      <h2>Solución</h2>
      {/* Aquí se debe agregar el componente donde el estudiante codificará la solución */}

      {/* Ejemplo básico de área de código (puedes usar un editor de código como CodeMirror o Ace Editor para una experiencia más avanzada) */}

      <Terminal></Terminal>
      <button className="submit-button">Enviar Solución</button>
    </div>

  );

};

export default ProblemDescription;
