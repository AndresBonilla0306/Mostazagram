import React, { useState } from 'react'
import Header from '../Componentes/Header'
import Hover from '../Componentes/Hover'
import Stories from '../Componentes/Stories'
import ContenedorCardItemPerfil from '../Index/ContenedorCardItemPerfil'
import InChatContainer from '../Index/InChatContainer'
import { io } from 'socket.io-client'
import { useEffect } from 'react'

const socket = io('https://mostazagram-production-1a50.up.railway.app/');

const Messages = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [newMensaje, setNewMensaje] = useState('');
  const [mensaje, setMensaje] = useState([]);
  
  useEffect(() => {
    socket.on('connect', () => setIsConnected(true));

    socket.on('chat_message', (data) =>{
      console.log(data)
      setMensaje(mensaje => [...mensaje, data])
    })

    return ( )=>{
      socket.off('connect');
      socket.off('chat_message')
    }

  })

  const enviarMensaje =() =>{
    socket.emit('chat_message', {
      usuario: socket.id,
      mensajito: newMensaje
    })
  }

  const socketID = socket.id

  return (
    <div>
      <Header />
      <Hover />
      <ContenedorCardItemPerfil />
      <InChatContainer />
      <div className='SBChat'>
        <h2>{isConnected ? 'CONECTAO': 'NO CONECTAO'}</h2>
        <ul className='UlMensajes'>
          {mensaje.map(Mensajero=>{
            return  socketID === Mensajero.id ? 
              (<li className='LiMensaje'>{Mensajero.usuario}: {Mensajero.mensajito}</li>) 
              : (<li className='LiMensajeClient'>{Mensajero.usuario}: {Mensajero.mensajito}</li>)
          })}
        </ul>
        <input type='Text' className='BarChat' onChange={e=> setNewMensaje(e.target.value)}></input>
        <button onClick={enviarMensaje} className='SendBtn'>SEND</button>
      </div>
    </div>
  )
}

export default Messages