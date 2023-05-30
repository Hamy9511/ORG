import "./equipo.css";
import Colaborador from "../colaborador/colaborador.js";

const Equipo = (props) => {
    //Destructiracion
    const {titulo, colorPrimario, colorSecundario} =  props.datos; //abreviar codigo --> const colorPrimario = props.datos.colorPrimario
        //Si trabajas con estilos como este los guiones no existen y tiene que iniciar la segunda palabra con mayuscula
    const {colaboradores, eliminarColaborador} = props;
    const fondo = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <> {colaboradores.length > 0 &&
        <section className="equipo" style={fondo}> 
        <input type="color" value={colorSecundario} onChange={(event) =>{
            console.log(event.target.value)
        }}>
        </input>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className ="colaboradores">
            {
                colaboradores.map((colaborador,index)=> 
                <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}/>)
            }
            
        </div>
            
    </section>
}</>
}

export default Equipo;