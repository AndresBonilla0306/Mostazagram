import React from 'react'
import { useNavigate } from 'react-router-dom';
import LogOut from '../../assets/assets/img/buttons/Logout3.png'

const ComponenteItemLogOut = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login');
  };
  return (
    <div>
      <button onClick={handleClick}>
        <img src={LogOut} className='Llogout'/>
      </button>
    </div>
  )
}

export default ComponenteItemLogOut