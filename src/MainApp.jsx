import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import PulbicarPublicacion from './Pages/PulbicarPublicacion'
import Login from './Pages/Login'

export default function MainApp() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/Publicar' element={<PulbicarPublicacion />}/>
            <Route path='/Login' element={<Login />}/>  
        </Routes>
    </BrowserRouter>
  );
}

