import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublicacionCard = () => {
  const [post, setPost] = useState('');
  useEffect(() => {
    async function obtenerPost() {
      const randomNum = Math.floor(Math.random() * 1000);
      const respuesta = await axios.get(`https://picsum.photos/200?random=${randomNum}`);
      setPost(respuesta.config.url);
    }
    obtenerPost();
  }, []);
  return (
    <div className='Publication'>
      <img src={post} className='FotoP'></img>
      <div className='ButtonsMelos'>
        <button>Chat</button><br></br>
        <button>Comment</button><br></br>
        <button>Share</button>
      </div>
    </div>
  )
}

export default PublicacionCard;