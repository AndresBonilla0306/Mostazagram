import React from 'react'
import Hover from '../Componentes/Hover'
import Header from '../Componentes/Header'
import Stories from '../Componentes/Stories'
import ContenedorPublicacionCard from '../Index/ContenedorPublicacionCard'
import '../css/Estilos.css'


const HomePage = () => {
  return (
    <>
      <Header/>
      <Hover/>
      <Stories/>
      <ContenedorPublicacionCard/>
    </>
  )
}

export default HomePage