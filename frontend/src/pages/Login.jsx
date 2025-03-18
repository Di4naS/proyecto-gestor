import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Correo electrónico" required />
        
        <label>Contraseña:</label>
        <input type="password" placeholder="Contraseña" required />
        
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
