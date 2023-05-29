import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardImagenP = ({data}) => {
 
  return (
    <div>
      <img src={data.photo} className='FotoAgregada'/>
    </div>
  )
}

export default CardImagenP