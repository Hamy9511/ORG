import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/MiOrg.js';
import Equipo from './components/Equipo/equipo.js';


function App() {

  const [mostrarFormulario,actualizarFormulario] = useState(false)

  //Ternario --> condicion ? seMuestra : noSeMuestra 
  //{mostrarFormulario && <Formulario/>}

  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario)
  }

  //Lista de equipos
  const equipos = [
    
    {
      titulo:  "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front-End",
      colorSecundario: "#E8F8FF",
      colorPrimario: "#82CFFA"
    },
    {
      titulo: "Data-Science",
      colorSecundario: "#F0F8E2",
      colorPrimario: "#A6D157"
    },
    {
      titulo: "DevOps",
      colorSecundario: "#FDE7E8",
      ColorPrimario: "E06B69"
    },
    {
      titulo: "Ux y Diseño",
      colorSecundario: "#FAE9F5",
      ColorPrimario: "#DB6EBF"
    }, {
      titulo: "Movil",
      colorSecundario: "#FFF5D9",
      ColorPrimario: "#FFBA05"
    }, 
    {
      titulo: "Innovación y Gestión",
      colorSecundario:  "#FFEEDF",
      ColorPrimario: "#FF8A29"
    },
]
  return (
    <div>
      <Header/>
      {mostrarFormulario === true ? <Formulario/> : <div></div>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo}/>) //al trabajr con map siempre trabajr con key
      }

    </div>
  );
}

export default App;
