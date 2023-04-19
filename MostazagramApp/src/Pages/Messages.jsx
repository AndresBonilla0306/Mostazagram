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
        <ContenedorCardItemPerfil/>
        <InChatContainer/>
        <div className='SBChat'>
          <input type='Text'></input>
        </div>
    </div>
  )
}

export default Messages