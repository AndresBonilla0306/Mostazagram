import React, { useState, useEffect } from 'react';
import axios from 'axios';
import like from '../assets/assets/img/buttons/Like.png'
import comment from '../assets/assets/img/buttons/Comment.png'
import Share from '../assets/assets/img/buttons/Share.png'
import ContendorCardComment from './ContendorCardComment';
import { getProfileId } from '../services/post.services';
import CardComment from './CardComment';


const PublicacionCard = ({data}) => {
  
  // const [user, setUser] = useState('')

  // useEffect(()=>{
  //   console.log(data.user)
  //   setUser(getProfileId(data.user))
  //   console.log(user.name)
  // },[])
  const [showComments, setShowComments] = useState(false);
  // console.log(data.comment)
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  
  return (
    <div className='Publication'>
      <h1 className='Desc'>{data.desc}</h1>
      <div className='FotoPD'>
        <img src={data.photo} className='FotoP'></img>
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
      </div>
      <div className='Comentarios'>
        {showComments && <ContendorCardComment data={data}/>}
        <br />
      </div>
    </div>
  )
}

export default PublicacionCard;
