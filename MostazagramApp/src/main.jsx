import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import { PulbicarPublicacion } from './Pages/PulbicarPublicacion'
import Login from './Pages/Login'
import CerrarSesion from './Pages/CerrarSesion'
import EditProfile from './Pages/EditPorfile'
import Messages from './Pages/Messages'
import Profile from './Pages/Profile'
import Register from './Pages/Register'
import Story from './Pages/Story'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Publicar' element={<PulbicarPublicacion />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/LogOut' element={<CerrarSesion/>}/>
          <Route path='/Edit' element={<EditProfile/>}/>
          <Route path='/Chat' element={<Messages/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Story' element={<Story/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
