import React, { useState } from 'react'
import Logo from '../assets/assets/img/Logo.png'


const Login = () => {
  
  const [userData, setUserData] = useState({
    usuario: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("REGISTRADISIMO MI PAPA ")
    console.log("*C VA AL LOGIN*")
  };
  
  return (
    <div className='Login'>
      <div className='ContenedorLogo'>
        <img src={Logo}></img>
      </div>
      <form className='Form' onSubmit={handleSubmit}>
        <a>Usuario</a><br/>
          <input
            type='text'
            name="usuario"
            value={userData.usuario}
            onChange={handleInputChange}
          /><br/>
        <a>Contraseña</a><br/>
          <input
            type='text'
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          /><br/>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}

export default Login