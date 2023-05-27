import React from 'react'
import { useState } from 'react'
import ContenedorCardImagenP from '../Index/ContenedorCardImagenP'
import Header from '../Componentes/Header'
import Hover from '../Componentes/Hover'
import MonaLisa from '../assets/assets/img/Others/MonaLisa.jpg'
import { subirPost } from '../services/post.services'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PulbicarPublicacion = () => {

  const [user, setUser] = useState('');
  const [desc, setDesc] = useState('');
  const [post, setPost] = useState('');
  const handleUsernameChange = (event) => {
    setUser(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await createUser(user, desc, post);
      setUser('');
      setDesc('');
      setPost('');
      
      toast.info('Update exitoso, disfruta')
      console.log('Update exitoso:', res.data);
      
      navigate('/');
    } catch (error) {
      console.error('Error al Update:', error.response.data);
      // toast.error('Error al Update: ' + error.response.data.errors.msg);
    }
  };
  return (
    <div className='Publicar'>
      <Header/>
      <Hover/>
      <div className='CPublicar'>
        <img src={MonaLisa} className='FotoPubli'/><br/>  
        <button className='BtnPublicar'>Publicar</button>
      </div>
      <ContenedorCardImagenP/>
    </div>
  )
}
