import React, { useState } from 'react';
import Formulario from './components/Formulario';

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
    </div>
  )
}

export default App;