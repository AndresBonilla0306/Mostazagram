import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContenedorCardStories from '../Index/ContenedorCardStories'

const CardStories = () => {
  const [story, setStory] = useState('');
  useEffect(() => {
    async function obtenerPost() {
      const randomNum = Math.floor(Math.random() * 1000);
      const respuesta = await axios.get(`https://picsum.photos/200/200?random=${randomNum}`);
      setStory(respuesta.config.url);
    }
    obtenerPost();
  }, []);
  return (
    <div>
      <img src={story} className='FotoP'></img>
    </div>
  )
}

export default CardStories
