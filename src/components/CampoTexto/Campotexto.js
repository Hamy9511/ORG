import "./CampoTexto.css";
const CampoTexto = (props) => { //Propiedades dde los componentes
    const placeholderModificado = `${props.placeholder}...`;
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className= "Campo-Texto">
        <label>{props.titulo}</label>
        <input 
        placeholder= {placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto;