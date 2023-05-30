import React, { useState } from 'react'
import Logo from '../assets/assets/img/Logito.png'
import facebook from '../assets/assets/img/buttons/BOTON_FACEBOOK_Mesa de trabajo 1.png'
import google from '../assets/assets/img/buttons/BOTON_GOOGLE_Mesa de trabajo 1.png'
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from '../services/post.services'
import { ToastContainer, toast } from 'react-toastify';
import { auth, app } from '../services/firebase.config';
import { FacebookAuthProvider, signInWithPopup, GoogleAuthProvider,getAuth} from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  
  const [user, setUser] = useState('');
  const [pass, setPassword] = useState('');
  const navigate = useNavigate();

  const [userSg, setUserSg] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passSg, setPassSg] = useState('');

  const Register = () => {
    navigate('/Register');
  };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleUsernameChange = (event) => {
    setUser(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Restablecer los campos del formulario después del envío
      const res = await loginUsuario(user, pass)
      console.log(res.token)
      setUser('');
      setPassword('');
      
      console.log('Login exitoso:', res.data);
      toast.info('Registro exitoso, disfruta')
      localStorage.setItem( "token", JSON.stringify(res.token) )
      
      
      navigate('/Login');
    } catch (error) {
      console.error('Error al login:', error.response.data);
      toast.error('Error al registrarse: ' + error.response.data.msg);
    
    }
  };
  
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const user = result.user;
            const accessToken = credential.accessToken;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
        });
};

const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
          .then((result) => {
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              const user = result.user;

              setName(user.displayName)
              setUserSg(user.displayName)
              setEmail(user.email)
              setPassSg(user.uid)

              console.log(user);
          })
          .catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
          });

  };

  return (
    <div >
      <div className='Login'>
        <div className='ContenedorLogo'>
          <img src={Logo}></img>
        </div>
        <form className='Form' onSubmit={handleSubmit}>
          <h1>Mostazagram</h1>
            <input
              type='text'
              placeholder="User"
              value={user}
              onChange={handleUsernameChange}
              name="uname"
            />
            <br/>
            <input
              type="password"
              placeholder="Password"
              value={pass} 
              onChange={handlePasswordChange}
              name="pass"
            />
            <br/>
          
          
          <br/>
          <button type="submit">Iniciar sesion</button><br/>
          
          <button onClick={Register}>¿No tienes una cuenta?</button>
        </form>
      </div>
      <div className='LB'>
        <button className='ButtonsSN' onClick={signInWithFacebook}>
          <img src={facebook}/>
        </button>
        <button className='ButtonsSN' onClick={signInWithGoogle}>
          <img src={google}/>
        </button> 
      </div>
      <ToastContainer />
    </div>
    
  )
}

export default Login