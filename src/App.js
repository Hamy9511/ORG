import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/MiOrg.js';
function App() {

  const [mostrarFormulario,actualizarFormulario] = useState(true)

  //Ternario --> condicion ? seMuestra : noSeMuestra 
  //{mostrarFormulario && <Formulario/>}

  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario)
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario === true ? <Formulario/> : <div></div>}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
