import React from 'react'
import { useNavigate } from "react-router-dom"
import Publicar1 from "../../assets/assets/img/buttons/Publicar3.png"  

const ComponenteItemPublish = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Publicar');
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src={Publicar1}></img>
      </button>
    </div>
  )
}

export default ComponenteItemPublish