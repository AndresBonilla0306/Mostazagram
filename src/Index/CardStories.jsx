import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Yo from '../assets/assets/img/Yo2.jpeg'
import { useNavigate } from 'react-router-dom';
import X from '../assets/assets/img/buttons/X.png'

const CardStories = () => {

  const navegar =useNavigate();

  const handleClick = () =>{
    navegar('/')
  }

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
    <div className='ContainerStory'>
      <div>
        <img src={Yo}></img>
        <h1>Nombre</h1>
        <button onClick={handleClick}>
          <img src={X}/>
        </button>
      </div>
      <img src={story} className='FotoP'></img>
    </div>
  )
}

export default CardStories
