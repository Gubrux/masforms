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
            setNameError("Name is required!");
        } else if(e.target.value.length < 3) {
            setNameError("Name must be 3 characters or longer!");
        } else {
            setNameError("");
        }
    }
    const handleApellido = (e) => {
        setApellido(e.target.value);
        if(e.target.value.length < 1) {
            setApellidoError("Surname is required!");
        } else if(e.target.value.length < 3) {
            setApellidoError("Surname must be 3 characters or longer!");
        } else {
            setApellidoError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email is required!");
        } else if(!e.target.value.includes("@") || !e.target.value.includes(".com") || e.target.value.length < 5 || e.target.value.includes(" ")) {
            setEmailError("Email must be valid!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    const handlePasswordConfirm = (e) => {
        if(e.target.value !== password) {
            setConfirmPasswordError("Passwords must match!");
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
                <label className='labell' htmlFor="confirmPassword">Confirm password</label>
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