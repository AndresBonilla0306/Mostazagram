import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardImagenP = () => {
  const [image, setImage] = useState('');
  useEffect(() => {
    async function obtenerImage() {
      const randomNum = Math.floor(Math.random() * 1000);
      const respuesta = await axios.get(`https://picsum.photos/200/200?random=${randomNum}`);
      setImage(respuesta.config.url);
    }
    obtenerImage();
  }, []);
  return (
    <div>
      <img src={image} className='FotoAgregada'/>
    </div>
  )
}

export default CardImagenP