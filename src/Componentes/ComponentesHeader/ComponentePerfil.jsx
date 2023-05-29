import React from 'react'
import { useNavigate} from 'react-router-dom'
import { useState, useEffect} from 'react';
import { extractUser } from '../../helpers/jwt'
import { getToken } from '../../helpers/localStorage'
import { getProfileId } from '../../services/post.services'

const ComponentePerfil = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Profile');
  };
  const [photo2, setPhoto2] = useState('')
  const getDataDB = async ()=>{
    const {uid} = await extractUser(getToken());
    const res = await getProfileId(uid)
    console.log(res)
    setPhoto2(res.photo)
  }
  useEffect(()=>{
    getDataDB()
  },[])

  return (
    <div className='perfil'>
      <button onClick={handleClick}>
        <img src={photo2} className='FotoPerfil'></img>
      </button>
    </div>
  )
}

export default ComponentePerfil