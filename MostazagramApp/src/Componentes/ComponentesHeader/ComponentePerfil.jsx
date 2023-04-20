import React from 'react'
import yo from '../../assets/assets/img/Yo2.jpeg'
import { useNavigate } from 'react-router-dom'

const ComponentePerfil = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Profile');
  };
  return (
    <div className='perfil'>
      <button onClick={handleClick}>
        <img src={yo} className='FotoPerfil'></img>
      </button>
    </div>
  )
}

export default ComponentePerfil