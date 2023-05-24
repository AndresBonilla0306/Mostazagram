import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../assets/assets/img/Logito.png'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/post.services'

const SignupForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');


    const handleUsernameChange = (event) => {
        setUser(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Restablecer los campos del formulario después del envío
            const res = await createUser(name, email, user, pass)
            console.log(res)
            setUser('');
            setName('');
            setEmail('');
            setPassword('');

            // Hacer algo con la respuesta del servidor (por ejemplo, mostrar un mensaje de éxito)
            console.log('Registro exitoso:', res.data);
        } catch (error) {
            // Manejar los errores de validación o del servidor
            console.error('Error al registrarse:', error.response.data);
        }
    };

    return (
        <div className='Login2'>
            <div className='ContenedorLogo'>
                <img src={Logo}></img>
            </div>
            <form className='Form' onSubmit={handleSubmit}>
                <h1>Mostazagram</h1>
                <a>Name</a><br />
                <input type="text" value={name} onChange={handleNameChange} />
                <br />
                <a>Email</a><br />
                <input type="text" value={email} onChange={handleEmailChange} />
                <br />
                <a>Username</a><br />
                <input type="text" value={user} onChange={handleUsernameChange} />

                <br />
                <a>Password</a><br />
                <input type="text" value={pass} onChange={handlePasswordChange} />

                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
