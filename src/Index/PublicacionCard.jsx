import React, { useState, useEffect } from 'react';
import axios from 'axios';
import like from '../assets/assets/img/buttons/Like.png'
import comment from '../assets/assets/img/buttons/Comment.png'
import Share from '../assets/assets/img/buttons/Share.png'
import ContendorCardComment from './ContendorCardComment';
import CardComment from './CardComment';


const PublicacionCard = ({data}) => {
  
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  
  return (
    <div className='Publication'>
      <div className='FotoPD'>
        <img src={data.photo} className='FotoP'></img>
      </div>
      <div className='ButtonsMelos'>
        <button>
          <img src={like}/>
        </button><br></br>
        <button onClick={toggleComments}>
          <img src={comment}/>
        </button><br></br>
        <button>
          <img src={Share}/>
        </button>
      </div>
      <div className='Comentarios'>
        {showComments && <ContendorCardComment fetchComment={CardComment} />} 
        <br />
        {showComments && <ContendorCardComment fetchComment={CardComment} />}
        <br />
        {showComments && <ContendorCardComment fetchComment={CardComment} />}
      </div>
    </div>
  )
}

export default PublicacionCard;
