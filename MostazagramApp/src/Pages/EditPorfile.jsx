import React from 'react'
import Header2 from '../Componentes/Header2'
import Yo2 from '../assets/assets/img/Yo2.jpeg'
import { useNavigate } from 'react-router-dom'

const EditPorfile = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Profile');
  };
  return (
    <div>
      <Header2/>
      <div className='Profile2'>
        <div className='EdBtn1'>
          <button onClick={handleClick}>Cancelar</button>
        </div>
        <div className='EdInfo'>
          <img src={Yo2} className='FoticoFoto'/><br/>
          <a>Nombre</a><br/>
          <input type='text'></input><br/>
          <a>Descripción</a><br/>
          <input type='text'></input><br/>
          <h1>Configuración de la cuenta</h1>
          <a>Usuario</a><br/>
          <input type='text'></input><br/>
          <a>Correo</a><br/>
          <input type='text'></input><br/>
          <a>Contraseña</a><br/>
          <input type='text'></input><br/>
        </div>
        <div className='EdBtn2'>
          <button onClick={handleClick}>Guardar</button>
        </div>
      </div>
    </div>
  )
}

export default EditPorfile