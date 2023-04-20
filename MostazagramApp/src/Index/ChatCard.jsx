import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import chats from '../assets/assets/scripts/chats.json'


const ChatCard = () => {
  const [foto, setFoto] = useState('');
  const [chats, setChats] = useState([]);

  useEffect(() => {
    async function obtenerPost() {
      const randomNumF = Math.floor(Math.random() * 1000);
      const respuestaFoto = await axios.get(`https://picsum.photos/200/200?random=${randomNumF}`);
      setFoto(respuestaFoto.config.url);
    }

    obtenerPost();

    // Carga los datos del archivo JSON
    fetch('/chats.json')
      .then(response => response.json())
      .then(data => setChats(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='BtnChat'>
      {chats.map(chat => (
        <button key={chat.id} className='BtnChatsito'>
          <img src={foto}></img>
          <hr />
          {chat.nombre}
        </button>
      ))}
    </div>
  )
}

export default ChatCard;