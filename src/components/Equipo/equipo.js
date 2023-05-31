import "./equipo.css";
import Colaborador from "../colaborador/colaborador.js";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructiracion
    const {titulo, colorPrimario, id} =  props.datos; //abreviar codigo --> const colorPrimario = props.datos.colorPrimario
        //Si trabajas con estilos como este los guiones no existen y tiene que iniciar la segunda palabra con mayuscula
    const {colaboradores, eliminarColaborador, actualizarColor} = props;
    const fondo = {
        backgroundColor: hexToRgba(colorPrimario,0.5)
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <> {colaboradores.length > 0 &&
        <section className="equipo" style={fondo}> 
        <input type="color" value={colorPrimario} onChange={(event) =>{
            actualizarColor(event.target.value,id)
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