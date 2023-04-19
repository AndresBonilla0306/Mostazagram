import React from 'react'
import Logo from '../assets/assets/img/Logo.png'

const Login = () => {
  return (
    <div className='Login'>
      <div className='ContenedorLogo'>
        <img src={Logo}></img>
      </div>
      <div className='Form'>
        <h1>Mostazagram</h1>
        <a>Usuario</a><br/>
        <input type='text'></input><br/>
        <a>Constraseña</a><br/>
        <input type='text'></input><br/>
        <button>Iniciar sesion</button><br/>
        <button>¿No tienes cuenta?</button>
      </div>
    </div>
  )
}

export default Login