import "./Listaopciones.css";
const Listaopciones = (props) => {
    //Metodo map --> arreglo.map((equipo,index) => {})
    //return <option></option>
    const equipos = [
        "Programación",
        "Front-End",
        "Data Science",
        "DevOps",
        "Ux y Diseño",
        "Movil",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value);
    }

    return <div className="listaOpciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
        {equipos.map((equipo,index) =>{ //{equipos.map((equipo,index) => <option key={index}>{equipo}</option> )}
            return <option key={index} value={equipo} >{equipo}</option> 
        })} 
        </select>
    </div>
}
export default Listaopciones;