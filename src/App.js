import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/MiOrg.js';
import Equipo from './components/Equipo/equipo.js';
import Footer from './components/footer/footer';


function App() {

  const [mostrarFormulario,actualizarFormulario] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([]); //deja explicito que es un arrreglo en el state

  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario)
  }

  //registrar Colaborador

  const registrarColaborador = (colaborador) => {
    //spread operator
    actualizarColaboradores([...colaboradores,colaborador]) //Duplica los valores ...
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
      colorPrimario: "#E06B69"
    },
    {
      titulo: "Ux y Diseño",
      colorSecundario: "#FAE9F5",
      colorPrimario: "#DB6EBF"
    }, {
      titulo: "Movil",
      colorSecundario: "#FFF5D9",
      colorPrimario: "#FFBA05"
    }, 
    {
      titulo: "Innovación y Gestión",
      colorSecundario:  "#FFEEDF",
      colorPrimario: "#FF8A29"
    },
]
  return (
    <div>
      <Header/>
      {
      mostrarFormulario === true ? <Formulario  //Ternario --> condicion ? seMuestra : noSeMuestra  //{mostrarFormulario && <Formulario/>}
      equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}/> : <div></div>
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((x) => 
        <Equipo 
        datos={x} 
        key={x.titulo}
        colaboradores=
        {colaboradores.filter(colaborador => 
        colaborador.equipo /* Este equipo viene del componente colaborador*/ === x.titulo)}
        />) //al trabajr con map siempre trabajr con key
      }
        <Footer/>

    </div>
  );
}

export default App;
