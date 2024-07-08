// src/components/CodeEditor.js
import './terminal.css'
import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; // Importa los estilos correctos de CodeMirror
import 'codemirror/theme/material.css'; // Importa el tema de CodeMirror que desees utilizar

const CodeEditor = ({ code, setCode }) => {
  const handleChange = (editor, data, value) => {
    setCode(value); // Actualiza el estado con el código modificado
  };

  return (
    <div className="code-editor">
      <ControlledEditor
        onBeforeChange={handleChange}
        value={code}
        options={{
          lineWrapping: true, // Envolver líneas automáticamente
          lint: true, // Habilitar el linting para detectar errores en tiempo real
          mode: 'javascript', // Modo de lenguaje (JavaScript en este ejemplo)
          theme: 'material', // Tema del editor
          lineNumbers: true, // Mostrar números de línea
        }}
      />
    </div>
  );
};

export default CodeEditor;
