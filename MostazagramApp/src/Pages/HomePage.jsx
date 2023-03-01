import React from 'react'
import Hover from '../Components/Hover'
import Header from '../Components/Header'
import Stories from '../Components/Stories'
import '../css/Estilos.css'

const HomePage = () => {
  return (
    <>
      <Header/>
      <Hover/>
      <Stories/>
      <h1>Mostazagram</h1>
    </>
  )
}

export default HomePage