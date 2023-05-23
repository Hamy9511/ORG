import "./Listaopciones.css";
const Listaopciones = () => {
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
    return <div className="listaOpciones">
        <label>Equipos</label>
        <select>
        {equipos.map((equipo,index) =>{ //{equipos.map((equipo,index) => <option key={index}>{equipo}</option> )}
            return <option key={index}>{equipo}</option> 
        })} 
        </select>
    </div>
}
export default Listaopciones;