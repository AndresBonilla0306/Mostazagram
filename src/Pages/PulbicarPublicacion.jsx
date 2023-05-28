import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import ContenedorCardImagenP from '../Index/ContenedorCardImagenP'
import Header from '../Componentes/Header'
import Hover from '../Componentes/Hover'
import MonaLisa from '../assets/assets/img/Others/MonaLisa.jpg'
import { subirPost } from '../services/post.services'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { extractUser } from '../helpers/jwt'
import { getToken } from '../helpers/localStorage'
import { Ref } from 'react'

export const PulbicarPublicacion = () => {

  const [user, setUser] = useState('');
  const [desc, setDesc] = useState('');
  const [post, setPost] = useState('');
  const [loading, setloading] = useState('')
  const inputRef = useRef(null)
  
  const uploadImage = async (e)=>{
    console.log(inputRef.current.files)
    const files = inputRef.current.files;
    // const files = e.target.files;
    console.log(files)
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    setloading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/duimlfme0/image/upload",
      {
        method: "POST",
        body: data,
        // tranqui <3
      }
    )
    const file = await res.json();
    
    setPost(file.secure_url)
    console.log(file.secure_url);
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
      console.log(uid)
      console.log(resCloud)
      const res = await subirPost(resCloud, desc, uid);
      toast.info('Update exitoso, disfruta')
      // navigate('/')
      console.log('Registro exitoso:', res.data);;
    } catch (error) {
      console.error('Error al Update:', error.response.data);
      toast.error('Error al Update: ' + error.response.data.errors.msg);
    }
  };
  return (
    <div className='Publicar'>
      <Header/>
      <Hover/>
      <form className='CPublicar' onSubmit={handleSubmit}>
        <input type='file' name='file' placeholder='¡Sube tu foto aqui!' ref={inputRef} />
        {/* <img src={MonaLisa} className='FotoPubli'/> */}
        <br/> 
        <input type="text" value={desc} onChange={handleDescChange} /> 
        <button className='BtnPublicar' >Publicar</button>
      
      <ContenedorCardImagenP/>
      <ToastContainer />
      </form>
    </div>
    
  )
}
