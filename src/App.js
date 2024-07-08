import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Registro from './Registro';
import AgendarExamen from './agendarExamen';
import ResultadosExamen from './resultados';
import Home from './home';
import ProblemDescription from './problem';
import { ReactTerminal } from "react-terminal";
import CodeEditor from './terminal';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/agendar" element={<AgendarExamen />} />
        <Route path="/resultados" element={<ResultadosExamen/>} />
        <Route path="/home" element={<Home />} />
        <Route path='/problem' element={<ProblemDescription/>} />
        <Route path='/terminal' element={<CodeEditor/>} />
      </Routes>
    </Router>
  );
}

export default App;
