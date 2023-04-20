import React, { useState } from 'react'
import Logo from '../assets/assets/img/Logo.png'


const Login = () => {

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
        <a>Usuario</a><br/>
          <input
            type='text'
            name="uname"
          />
          {renderErrorMessage("uname")}<br/>
        <a>Contraseña</a><br/>
          <input
            type='text'
            name="pass"
          />
          {renderErrorMessage("pass")}<br/>
        <button type="submit">Registrarse</button>
      </form>
    </div>
    
  )
}

export default Login