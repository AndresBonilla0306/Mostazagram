import React from 'react'
import ContenedorCardImagenP from '../Index/ContenedorCardImagenP'
import Header from '../Componentes/Header'
import Hover from '../Componentes/Hover'
import MonaLisa from '../assets/assets/img/Others/MonaLisa.jpg'

export const PulbicarPublicacion = () => {
  return (
    <div className='Publicar'>
      <Header/>
      <Hover/>
      <div className='CPublicar'>
        <img src={MonaLisa} className='FotoPubli'/><br/>  
        <button className='BtnPublicar'>Publicar</button>
      </div>
      <ContenedorCardImagenP/>
    </div>
  )
}
