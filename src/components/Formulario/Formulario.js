import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/Campotexto.js";
import Listaopciones from "../ListaOpciones/index.js";
import Boton from "../boton/boton.js";
const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo,actualizarEquipo] = useState("");

    const {registrarColaborador}  = props;

    const manejarEnvio = (e) =>{
        e.preventDefault();
        let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }
    return <section className = "formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
            titulo="Nombre" 
            placeholder="Ingresar nombre"
            required = {true} 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresar puesto"
            required
            valor = {puesto}
            actualizarValor={actualizarPuesto}
            />
            
            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto}
            actualizarValor={actualizarFoto}
            />
            <Listaopciones 
            valor={equipo} 
            actualizarEquipo={actualizarEquipo}
            y={props.equipos}/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario;