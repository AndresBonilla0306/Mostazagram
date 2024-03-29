import React from 'react'
import Header2 from '../Componentes/Header2'
import Hover from '../Componentes/Hover'
import Yo2 from '../assets/assets/img/Yo2.jpeg'
import ContenedorCardImagenP from '../Index/ContenedorCardImagenP'
import { useNavigate } from 'react-router-dom'
import { getProfileId } from '../services/post.services'
import { useEffect, useState } from 'react'
import { extractUser } from '../helpers/jwt'
import { getToken } from '../helpers/localStorage'

const Profile = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [pass, setpass] = useState('');
  const [desc, setDesc] = useState('');
  const [photo, setPhoto] = useState('');


  const handleClick = () => {
    navigate('/Edit');
  };
  
  const getDataDB = async ()=>{
    const {uid} = await extractUser(getToken());
    console.log(uid)
    const res = await getProfileId(uid)
    console.log(res)
    // console.log(res)
    setName(res.name)
    setEmail(res.email)
    setUser(res.user)
    setDesc(res.desc)
    setPhoto(res.photo)
    setPosts(res.post)
    // console.log(posts)
    // setPosts(res)
  }
  useEffect(()=>{
    getDataDB()
  },[])
  return (
    <div>
      <Header2/>
      <Hover/>
      <div className='Profile'>
      <div className='InfoProfile'>
          <a className='PInfo'>25 </a>
          <a className='PInfo'>Seguidores</a><br/>
          <a className='PInfo'>60000000 </a>
          <a className='PInfo'>Seguidores</a><br/>
          <a className='PInfo'>69 </a>
          <a className='PInfo'>Publicaciones</a>
        </div> 
        <div className='Fotico'>
          <img src={photo} className='FoticoFoto'/><br/>
          <a>{name}</a><br/>
          <a>@{user}</a><br/>
          <a>{desc}</a>
        </div>
        <div className='BtnPerfil'>
          <button onClick={handleClick}>Editar Perfil</button>
        </div>
      </div>
      <div className='More'>
        <ContenedorCardImagenP data={posts}/>
      </div>
    </div>
  )
}

export default Profile