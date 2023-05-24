import "./Formulario.css";
import CampoTexto from "../CampoTexto/Campotexto.js";
import Listaopciones from "../ListaOpciones/index.js";
import Boton from "../boton/boton.js";
const Formulario = () => {
    const manejarEnvio = (e) =>{
        e.preventDefault();
    }
    return <section className = "formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required = {true}/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
            <Listaopciones/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario;