import React, { useState } from 'react'
import Logo from '../assets/assets/img/Logito.png'
import facebook from '../assets/assets/img/buttons/BOTON_FACEBOOK_Mesa de trabajo 1.png'
import google from '../assets/assets/img/buttons/BOTON_GOOGLE_Mesa de trabajo 1.png'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  

  const navigate = useNavigate();

  const Register = () => {
    navigate('/Register');
  };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
  );
  const [userData, setUserData] = useState({
    usuario: "",
    password: "",
  });
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });

      } else {
        setIsSubmitted(true);
        navigate('/');
        
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    
    console.log("REGISTRADISIMO MI PAPA ")
    console.log("C VA AL LOGIN")
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  
  return (
    <div className='Login'>
      <div className='ContenedorLogo'>
        <img src={Logo}></img>
      </div>
      <form className='Form' onSubmit={handleSubmit}>
        <h1>Mostazagram</h1>
          <input
            type='text'
            placeholder="Usuario"
            // className="half-placeholder"
            name="uname"
          />
          {renderErrorMessage("uname")}<br/><br/>
          <input
            type="password"
            placeholder="Contraseña"
            // className="half-placeholder"
            name="pass"
          />
          {renderErrorMessage("pass")}<br/>
        <button className='ButtonsSN'>
          <img src={facebook}/>
        </button>
        <button className='ButtonsSN'>
          <img src={google}/>
        </button> 
        
        <br/>
        <button type="submit">Iniciar sesion</button><br/>
        
        <button onClick={Register}>¿No tienes una cuenta?</button>
      </form>
    </div>
    
  )
}

export default Login