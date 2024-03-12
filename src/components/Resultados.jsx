import React from "react";
const Resultados = props => {
    const { nombre, apellido, email, password, confirmPassword } = props.data;
    return (
        <div className="resultados">
        <h1>Your form Data</h1>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default Resultados;
