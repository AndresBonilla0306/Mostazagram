import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Yo from '../assets/assets/img/Yo2.jpeg'
import { useNavigate } from 'react-router-dom';
import X from '../assets/assets/img/buttons/X.png'

const CardStories = ({data}) => {

  const navegar =useNavigate();

  const handleClick = () =>{
    navegar('/Login')
  }

  return (
    <div className='ContainerStory'>
      <div>
        <img src={Yo}></img>
        <h1>Nombre</h1>
        <button onClick={handleClick}>
          <img src={X}/>
        </button>
      </div>
      <img src={data.photo} className='FotoP'></img>
    </div>
  )
}

export default CardStories
