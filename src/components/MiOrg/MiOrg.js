import "./MiOrg.css";

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState()
    //const [nombreVar,funcionActualiza] = useState (valorInicial)
    //const [mostrar,actualizarMostrar] = useState(true);

    //const manejarClick = () =>{

     //actualizarMostrar("Hola");

   // }

    return <section className = "orgSection">
            <h3 className = "title">Mi Organización</h3>
            <img src="/img/d.png" alt="add" onClick = {props.cambiarMostrar}/>
    </section>

}

export default MiOrg;