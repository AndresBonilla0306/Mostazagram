import React from 'react'
import Header2 from '../Componentes/Header2'
import Hover from '../Componentes/Hover'
import Yo2 from '../assets/assets/img/Yo2.jpeg'
import ContenedorCardImagenP from '../Index/ContenedorCardImagenP'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Edit');
  };
  return (
    <div>
      <Header2/>
      <Hover/>
      <div className='Profile'>
      <div className='InfoProfile'>
          <a className='Numbers'>25 </a>
          <a className='Text'>Seguidores</a><br/>
          <a className='Numbers'>60000000 </a>
          <a className='Text'>Seguidores</a><br/>
          <a className='Numbers'>69 </a>
          <a className='Text'>Publicaciones</a>
        </div> 
        <div className='Fotico'>
          <img src={Yo2} className='FoticoFoto'/><br/>
          <a>Roncancio Laureles</a><br/>
          <a>@Chichonsito13</a><br/>
          <a>Riyadh, Saudi Arabi</a>
        </div>
        <div className='BtnPerfil'>
          <button onClick={handleClick}>Editar Perfil</button>
        </div>
      </div>
      <div className='More'>
        <ContenedorCardImagenP/>
      </div>
    </div>
  )
}

export default Profile