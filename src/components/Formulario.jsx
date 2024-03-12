// creamos el componente formulario
import React from 'react';
import '../../src/index.css';
const Formulario = props => {
    const { inputs, setInputs } = props;
    const handleInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    return (
        <form className='Formular'>
        <div className='inputContainer'>
            <label className='labell' htmlFor="nombre">Nombre</label>
        <input
            type="text"
            onChange={handleInputs}
            name='nombre'
        />
        </div >
        <div className='inputContainer'>
            <label className='labell' htmlFor="apellido">Apellido</label>
        <input 
        type="text"
        onChange={handleInputs}
        name='apellido'
        />
        </div>
        <div className='inputContainer'>
            <label className='labell' htmlFor="email">Email</label>
        <input 
        type="email"
        onChange={handleInputs}
        name='email'
        />
        </div>
        <div className='inputContainer'>
            <label className='labell' htmlFor="password">Password</label>
        <input 
        type="password"
        onChange={handleInputs}
        name='password'
        />
        </div>
        <div className='inputContainer'>
            <label className='labell' htmlFor="confirmPassword">Confirm password</label>
        <input 
        type="password"
        onChange={handleInputs}
        name='confirmPassword'
        />
        </div>
        </form>
    );
    }
export default Formulario;