import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Resultados from './components/Resultados';

function App() {
  const [state, setState] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  return(
    <div>
      <Formulario inputs={state} setInputs={setState}/>
      <Resultados data={state}/>
    </div>
  )
}

export default App;