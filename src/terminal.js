// src/components/CodeEditor.js
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

const Terminal =()=>{
  return (
    <div className="code-editor">
     <CodeMirror
  value='<h1>I ♥ react-codemirror2</h1>'
  options={{
    mode: 'xml',
    theme: 'material',
    lineNumbers: true
  }}
  onChange={(editor, data, value) => {
  }}
/>
    </div>
  );


}

 
export default Terminal;
