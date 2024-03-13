import React, { useState } from 'react';
import '../../src/index.css';

const Formulario = props => {
    const { inputs, setInputs } = props;
    const [username, setUsername] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [apellidoError, setApellidoError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleName = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1) {
            setNameError("¡El nombre es obligatorio!");
        } else if(e.target.value.length < 3) {
            setNameError("¡El nombre debe tener al menos 3 caracteres!");
        } else {
            setNameError("");
        }
    }

    const handleApellido = (e) => {
        setApellido(e.target.value);
        if(e.target.value.length < 1) {
            setApellidoError("¡El apellido es obligatorio!");
        } else if(e.target.value.length < 3) {
            setApellidoError("¡El apellido debe tener al menos 3 caracteres!");
        } else {
            setApellidoError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("¡El correo electrónico es obligatorio!");
        } else if(!e.target.value.includes("@") || !e.target.value.includes(".com") || e.target.value.length < 5 || e.target.value.includes(" ")) {
            setEmailError("¡El correo electrónico debe ser válido!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("¡La contraseña es obligatoria!");
        } else if(e.target.value.length < 8) {
            setPasswordError("¡La contraseña debe tener al menos 8 caracteres!");
        } else {
            setPasswordError("");
        }
    }

    const handlePasswordConfirm = (e) => {
        if(e.target.value !== password && e.target.value.length < 8) {
            setConfirmPasswordError("¡Contraseña invalida!");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <form className='Formular'>
            <div className='inputContainer'>
                <label className='labell' htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name='nombre'
                    onChange={(event) => {
                        handleInputs(event);
                        handleName(event);
                    }}
                />
                {nameError ? <p style={{color:'red'}}>{ nameError }</p> : ''}
            </div>
            <div className='inputContainer'>
                <label className='labell' htmlFor="apellido">Apellido</label>
                <input 
                    type="text"
                    name='apellido'
                    onChange={(event) => {
                        handleInputs(event);
                        handleApellido(event);
                    }}
                />
                {apellidoError ? <p style={{color:'red'}}>{ apellidoError }</p> : ''}
            </div>
            <div className='inputContainer'>
                <label className='labell' htmlFor="email">Email</label>
                <input 
                    type="email"
                    name='email'
                    onChange={(event) => {
                        handleInputs(event);
                        handleEmail(event);
                    }}
                />
                {emailError ? <p style={{color:'red'}}>{ emailError }</p> : ''}
            </div>
            <div className='inputContainer'>
                <label className='labell' htmlFor="password">Password</label>
                <input 
                    type="password"
                    name='password'
                    onChange={(event) => {
                        handleInputs(event);
                        handlePassword(event);
                    }}
                />
                {passwordError ? <p style={{color:'red'}}>{ passwordError }</p> : ''}
            </div>
            <div className='inputContainer'>
                <label className='labell' htmlFor="confirmPassword">Confirmar contraseña</label>
                <input 
                    type="password"
                    name='confirmPassword'
                    onChange={(event) =>{
                        handleInputs(event);
                        handlePasswordConfirm(event);
                    }}
                />
                {confirmPasswordError ? <p style={{color:'red'}}>{ confirmPasswordError }</p> : ''}
            </div>
            <input type="submit" value="submit" disabled={username.length < 3 || apellido.length < 3 || emailError || passwordError || !email.includes("@") || password.length < 8}/>

        </form>
    );
}

export default Formulario;