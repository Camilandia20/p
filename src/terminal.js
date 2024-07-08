import React from 'react';
import Editor from "@monaco-editor/react";

function Terminal({ onMount }) {
  function handleEditorDidMount(editor, monaco) {
    if (onMount) {
      onMount(editor, monaco);
    }
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