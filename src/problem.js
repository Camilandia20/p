import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './problem.css';
import Terminal from './terminal';

const ProblemDescription = () => {
  const { id: evaluationId } = useParams();
  const [problemSet, setProblemSet] = useState(null);
  const [testCases, setTestCases] = useState({});
  const [sourceCode, setSourceCode] = useState('');
  const editorRefs = useRef({});

  const user = sessionStorage.getItem('userId');

  useEffect(() => {
    fetchProblemSet(evaluationId);
  }, [evaluationId]);

  useEffect(() => {
    if (problemSet && problemSet.problems) {
      problemSet.problems.forEach(problem => {
        fetchTestCases(problem.id);
      });
    }
  }, [problemSet]);

  const fetchProblemSet = async (setId) => {
    try {
      const response = await fetch(`http://localhost:8080/evaluations/${setId}`);
      const data = await response.json();
      setProblemSet(data);
    } catch (error) {
      console.error('Error fetching problem set:', error);
    }
  };

  const fetchTestCases = async (problemId) => {
    try {
      const response = await fetch(`http://localhost:8080/cases/problem/${problemId}`);
      const data = await response.json();
      setTestCases(prevTestCases => ({
        ...prevTestCases,
        [problemId]: data
      }));
    } catch (error) {
      console.error(`Error fetching test cases for problem ${problemId}:`, error);
    }
  };

  const handleFinishEvaluation = () => {
    // Aquí puedes agregar la lógica para finalizar la evaluación,
    // como redirigir a otra página o mostrar un mensaje de finalización.
    alert('Evaluación finalizada');
  };

  const handleEditorDidMount = (editor, monaco, problemId) => {
    editorRefs.current[problemId] = editor;
  };

  const handleSubmit = async (problem, evaluation) => {
    try {
      const sourceCode = editorRefs.current[problem].getValue();
      
      let test = JSON.stringify({
        sourceCode,
        user,
        problem,
        evaluation, 
      });
      console.log(test);
  
      const response = await fetch('http://localhost:8080/answers/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sourceCode,
          user,
          problem,
          evaluation, 
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar la solución');
      }
  
      const result = await response.json();
      console.log('Resultado de la submisión:', result.result);
      alert('Su solución ha pasado '+ result.result + ' casos de prueba');
    } catch (error) {
      console.error('Error al enviar la solución:', error);
      alert('Error al enviar la solución. Por favor, intenta de nuevo.');
    }
  };

  if (!problemSet) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="problem-set-description">
      <h2><center>{problemSet.name}</center></h2>
      {problemSet.problems.map((problem) => (
        <div key={problem.id} className="problem-description">
          <h3>Problema {problem.id}</h3>
          <p>Descripción: {problem.description}</p>
          
          <h4>Casos de Prueba:</h4>
          {testCases[problem.id] ? (
            <ul>
              {testCases[problem.id].map((testCase) => (
                <li key={testCase.id}>
                  <strong>Input:</strong> {testCase.input} | <strong>Output esperado:</strong> {testCase.output}
                </li>
              ))}
            </ul>
          ) : (
            <p>Cargando casos de prueba...</p>
          )}
          
          <Terminal onMount={(editor, monaco) => handleEditorDidMount(editor, monaco, problem.id)} />
          <button 
            className="submit-button" 
            onClick={() => handleSubmit(problem.id,evaluationId)}>
            Enviar Solución
          </button>        
          </div>
      ))}
      <button className="submit-button" onClick={handleFinishEvaluation}>Finalizar Evaluación</button>
    </div>
  );
};

export default ProblemDescription;
