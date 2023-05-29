import "./equipo.css";
import Colaborador from "../colaborador/colaborador.js";

const Equipo = (props) => {
    //Destructiracion
    const {titulo, colorPrimario, colorSecundario} =  props.datos; //abreviar codigo --> const colorPrimario = props.datos.colorPrimario
        //Si trabajas con estilos como este los guiones no existen y tiene que iniciar la segunda palabra con mayuscula
    
    const fondo = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <section className="equipo" style={fondo}> 
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className ="colaboradores">
            <Colaborador/>
            
        </div>
            
    </section>
}

export default Equipo;