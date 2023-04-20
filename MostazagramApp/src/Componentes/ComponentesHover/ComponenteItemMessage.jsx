import React from 'react'
import { useNavigate } from 'react-router-dom';
import Chat from '../../assets/assets/img/buttons/Chat1.png'

const ComponenteItemMessage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Chat');
  };
  return (
    <div>
      <button onClick={handleClick}>
        <img src={Chat} className='LChat'></img>
      </button>
    </div>
  )
}

export default ComponenteItemMessage