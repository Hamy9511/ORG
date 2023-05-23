import "./CampoTexto.css";
const CampoTexto = (props) => { //Propiedades dde los componentes
    const placeholderModificado = `${props.placeholder}...`;
    return <div className= "Campo-Texto">
        <label>{props.titulo}</label>
        <input placeholder= {placeholderModificado} />
    </div>
}

export default CampoTexto;