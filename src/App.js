import { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/MiOrg.js';
import Equipo from './components/Equipo/equipo.js';
import Footer from './components/footer/footer';


function App() {

  const [mostrarFormulario,actualizarFormulario] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Front-End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuidv4(),
    equipo: "Ux y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }]); //deja explicito que es un arrreglo en el state
  const [equipos,actualizarEquipos] = useState([
    
    {
      id: uuidv4(),
      titulo:  "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front-End",
      colorSecundario: "#E8F8FF",
      colorPrimario: "#82CFFA"
    },
    {
      id: uuidv4(),
      titulo: "Data-Science",
      colorSecundario: "#F0F8E2",
      colorPrimario: "#A6D157"
    },
    {
      id: uuidv4(),
      titulo: "DevOps",
      colorSecundario: "#FDE7E8",
      colorPrimario: "#E06B69"
    },
    {
      id: uuidv4(),
      titulo: "Ux y Diseño",
      colorSecundario: "#FAE9F5",
      colorPrimario: "#DB6EBF"
    }, 
    {
      id: uuidv4(),
      titulo: "Movil",
      colorSecundario: "#FFF5D9",
      colorPrimario: "#FFBA05"
    }, 
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorSecundario:  "#FFEEDF",
      colorPrimario: "#FF8A29"
    },
]);



  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario)
  }

  //registrar Colaborador

  const registrarColaborador = (colaborador) => {
    //spread operator
    actualizarColaboradores([...colaboradores,colaborador]) //Duplica los valores ...
  }

  //color Equipo
  const actualizarColor = (color,id) => {
    console.log("actualizar color",color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados);
  }

  //Elimnar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador",id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  //Crear Equipo
  const crearEquipo =(nuevoEquipo) => {
    console.log(crearEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id : uuidv4()}])
  }

  return (
    <div>
      <Header/>
      {
      mostrarFormulario === true ? <Formulario  //Ternario --> condicion ? seMuestra : noSeMuestra  //{mostrarFormulario && <Formulario/>}
      equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> : <div></div>
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map
        (
          (x) => 
        <Equipo 
        datos={x} 
        key={x.titulo}
        colaboradores=
        {colaboradores.filter(colaborador => 
        colaborador.equipo /* Este equipo viene del componente colaborador*/ === x.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        crearEquipo ={crearEquipo}
        />
        ) //al trabajr con map siempre trabajr con key
      }
        <Footer/>

    </div>
  );
}

export default App;
