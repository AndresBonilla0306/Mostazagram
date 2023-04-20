import React from 'react'
import '../css/Estilos.css'
import Logo from '../assets/assets/img/Logito.png'

const Header2 = () => {
  return (
    <header>
      <div className='Logo'>
        <img src={Logo} className='LogoImg'></img>
      </div>
      <h1 className='Titulo'>Mostazagram</h1>
    </header>
  )
}

export default Header2