import React from 'react'
import Header from '../Componentes/Header'
import Hover from '../Componentes/Hover'
import Stories from '../Componentes/Stories'
import ContenedorCardItemPerfil from '../Index/ContenedorCardItemPerfil'
import InChatContainer from '../Index/InChatContainer'

const Messages = () => {
  return (
    <div>
        <Header/>
        <Hover/>
        <Stories/>
        <ContenedorCardItemPerfil/>
        <InChatContainer/>
        Messages
    </div>
  )
}

export default Messages