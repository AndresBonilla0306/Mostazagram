import React from 'react'
import Header from '../Components/Header'
import Hover from '../Components/Hover'
import Stories from '../Components/Stories'
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