import React from 'react'
import Header2 from '../Componentes/Header2'
import Yo2 from '../assets/assets/img/Yo2.jpeg'
import { useNavigate } from 'react-router-dom'
import { editUser } from '../services/post.services'
import { extractUser } from '../helpers/jwt'
import { getToken } from '../helpers/localStorage'
import { Ref } from 'react'

const EditPorfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [pass, setpass] = useState('');
  const [desc, setDesc] = useState('');

  const [photo, setPost] = useState('');
  const [loading, setloading] = useState('')
  const inputRef = useRef(null)
  
  const uploadImage = async (e)=>{
    const files = inputRef.current.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    setloading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/duimlfme0/profile/upload",
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
          <img src={Yo2} className='FoticoFoto'/><br/>
          <a>Nombre</a><br/>
          <input type='text'></input><br/>
          <a>Descripción</a><br/>
          <input type='text'></input><br/>
          <h1>Configuración de la cuenta</h1>
          <a>Usuario</a><br/>
          <input type='text'></input><br/>
          <a>Correo</a><br/>
          <input type='text'></input><br/>
          <a>Contraseña</a><br/>
          <input type='text'></input><br/>
        </div>
        <div className='EdBtn2'>
          <button onClick={handleClick}>Guardar</button>
        </div>
      </div>
    </div>
  )
}

export default EditPorfile