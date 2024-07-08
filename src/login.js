import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Importa el archivo CSS para los estilos

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    
    try {
      const response = await fetch('http://localhost:8080/auth/login?username='+username+'&password='+password, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Guarda el ID en sessionStorage
      sessionStorage.setItem('userId', data.id);
      
      // Aquí puedes manejar la respuesta del servidor, por ejemplo, redirigir al usuario, etc.
    } catch (error) {
      console.error('Error during login:', error);
      // Aquí puedes manejar errores, como mostrar un mensaje al usuario
    }
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
      <p className="register-link">
        ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
      </p>
    </div>
  );
};

export default Login;
