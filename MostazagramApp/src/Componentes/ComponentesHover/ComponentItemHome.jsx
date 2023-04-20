import React from 'react'
import { useNavigate } from 'react-router-dom';
import Home1 from '../../assets/assets/img/buttons/Home1.png'

const ComponentItemHome = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src={Home1} className='LHome'></img>
      </button>
    </div>
  )
}

export default ComponentItemHome