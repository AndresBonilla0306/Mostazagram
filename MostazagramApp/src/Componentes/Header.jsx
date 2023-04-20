import React from 'react'
import '../css/Estilos.css'
import ComponentePerfil from './ComponentesHeader/ComponentePerfil'
import Logo from '../assets/assets/img/Logito.png'


const Header = () => {
  return (
    <header>
      <div className='Logo'>
        <img src={Logo} className='LogoImg'></img>
      </div>
      <input type={Text} className='SearchBar'></input>
      <ComponentePerfil/>
    </header>
  )
}

export default Header