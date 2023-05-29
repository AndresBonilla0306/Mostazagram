import React, { useState, useRef, useEffect } from 'react'
import Header2 from '../Componentes/Header2'
import { useNavigate } from 'react-router-dom'
import { editUser} from '../services/post.services'
import { extractUser } from '../helpers/jwt'
import { getToken } from '../helpers/localStorage'
import { ToastContainer, toast } from 'react-toastify';
import { getProfileId } from '../services/post.services'
import 'react-toastify/dist/ReactToastify.css';


const EditPorfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [desc, setDesc] = useState('');
  const [photo, setPhoto] = useState('');
  const [loading, setloading] = useState('')
  const inputRef = useRef(null)
  
  const uploadImage = async (e)=>{
    const files = inputRef.current.files;
    console.log(files)
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "profile");
    setloading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/duimlfme0/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const file = await res.json();
    setPhoto(file.secure_url)
    setloading(false)
    return file.secure_url
  }
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };
  const handleUserChange = (event) => {
    setUser(event.target.value);
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    const resCloud = await uploadImage();
    try {
      const {uid} = await extractUser(getToken());
      console.log(uid)
      console.log(name)
      console.log(desc)
      console.log(user)
      console.log(resCloud)
      const res = await editUser(uid, name, desc, user, resCloud);
      toast.info('Update exitoso')
      // navigate('/')
      console.log('Registro exitoso:', res.data);
    } catch (error) {
      console.error('Error al Update:', error.response.data);
      toast.error('Error al Update: ' + error.response.data.errors.msg);
    }
  };
  const handleClick = () => {
    navigate('/Profile');
  };
  return (
    <div>
      <Header2/>
      <div className='Profile2'>
        <div className='EdBtn1'>
          <button onClick={handleClick}>Cancelar</button>
        </div>
        <div className='EdInfo'>
          <img src={photo2} className='FoticoFoto'/><br/>
          <a>Nombre</a><br/>
          <input type='text' onChange={handleNameChange}></input><br/>
          <a>Descripción</a><br/>
          <input type='text' onChange={handleDescChange}></input><br/>
          <h1>Configuración de la cuenta</h1>
          <a>Usuario</a><br/>
          <input type='text' onChange={handleUserChange}></input><br/>
          <form className='' onSubmit={handleSubmit}>
            <input type='file' ref={inputRef} className='FileP' /><br/>
            <button className='BtnPublicar'>Guardar</button>
          </form>
        </div>
        {/* <div className='EdBtn2'>
          <button onClick={handleClick}>Guardar</button>
        </div> */}
      <ToastContainer />
      </div>
    </div>
  )
}

export default EditPorfile