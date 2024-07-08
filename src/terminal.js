import React from 'react';
import Editor from "@monaco-editor/react";

function Terminal() {
  const editorRef = React.useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function handleSubmit() {
    const code = editorRef.current.getValue();
    // Aquí implementarías la lógica para enviar el código al servidor
    console.log(code);
  }

  return (
    <div>
      <Editor
        height="500px"
        defaultLanguage="java"
        defaultValue="public String test(String text){}"
        theme="vs-dark"
        onMount={handleEditorDidMount}
      />
    </div>
  );
}

export default Terminal;