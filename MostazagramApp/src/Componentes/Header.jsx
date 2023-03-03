import React from 'react'
import '../css/Estilos.css'
import ComponentePerfil from './ComponentesHeader'
import ComponenteSearchBar from './ComponentesHeader'

const Header = () => {
  return (
    <header>
      <div className='Logo'>
        <ComponentePerfil/>
        <ComponenteSearchBar/>
        <img src='https://cdn-icons-png.flaticon.com/512/736/736922.png' className='LogoImg'></img>
        <h1 className='Titulo'>Mostazagram</h1>
      </div>
      <input type={Text} className='LogoInput'></input>
    </header>
  )
}

export default Header