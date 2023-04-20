import React, { useState, useEffect } from 'react';
import axios from 'axios';
import like from '../assets/assets/img/buttons/Like.png'
import comment from '../assets/assets/img/buttons/Comment.png'
import Share from '../assets/assets/img/buttons/Share.png'

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
        <button>
          <img src={like}/>
        </button><br></br>
        <button>
          <img src={comment}/>
        </button><br></br>
        <button>
          <img src={Share}/>
        </button>
      </div>
    </div>
  )
}

export default PublicacionCard;