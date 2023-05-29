import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Header from '../Componentes/Header'
import Hover from '../Componentes/Hover'
import MonaLisa from '../assets/assets/img/Others/MonaLisa.jpg'
import { subirPost } from '../services/post.services'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { extractUser } from '../helpers/jwt'
import { getToken } from '../helpers/localStorage'
import { Ref } from 'react'
import { subirStory } from '../services/post.services'

export const PulbicarPublicacion = () => {

  const [user, setUser] = useState('');
  const [desc, setDesc] = useState('');
  const [post, setPost] = useState('');
  const [loading, setloading] = useState('')
  const inputRef = useRef(null)
  
  const uploadImage = async (e)=>{
    const files = inputRef.current.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    setloading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/duimlfme0/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const file = await res.json();
    setPost(file.secure_url)
    setloading(false)
    return file.secure_url
  }

  const handleUsernameChange = (event) => {
    setUser(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const resCloud = await uploadImage();
    try {
      const {uid} = await extractUser(getToken());
      const res = await subirPost(resCloud, desc, uid);
      toast.info('Update exitoso, disfruta')
      // navigate('/')
      console.log('Registro exitoso:', res.data);
    } catch (error) {
      console.error('Error al Update:', error.response.data);
      toast.error('Error al Update: ' + error.response.data.errors.msg);
    }
  };

  const updateStory = async (event) => {
    event.preventDefault()
    const resCloud = await uploadImage();
    try {
      const {uid} = await extractUser(getToken());
      const res = await subirStory(resCloud, uid);
      toast.info('Update exitoso, disfruta')
      // navigate('/')
      console.log('Registro exitoso:', res.data);;
    } catch (error) {
      console.error('Error al Update:', error.response.data);
      toast.error('Error al Update: ' + error.response.data.errors.msg);
    }
  }
  return (
    <div className='Publicar'>
      <Header/>
      <Hover/>
      <form className='CPublicar' onSubmit={handleSubmit}>
        <input type='file' ref={inputRef} className='FileP' />
        <br/> 
        <input type="text" value={desc} onChange={handleDescChange} className='BarP' placeholder='Descripción'/> <br/>
        <button className='BtnPublicar' >Publicar Post</button>
      </form>
      <form className='CPublicar' onSubmit={updateStory}>
          <button className='BtnPublicar' >Publicar Story</button>
      </form>
      
      <ToastContainer />
    </div>
    
  )
}
