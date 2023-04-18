import "./Footer.css"
import CampoTexto from "../CampoTexto"
import ListaCategoria from "../ListaCategoria"
import Boton from "../Boton"

const Footer = () => {

    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejer el envio", event)
    }

    return <section className="footer">
        <form onSubmit={manejarEnvio} >
            <h2> Rellena Formulario</h2>
            <CampoTexto titulo="" placeholder="Ingresar Titulo" />
            <ListaCategoria titulo="" placeholder="Escoja una categoria"/>
            <ListaCategoria titulo="" placeholder="Escoja un color"/>
            <CampoTexto titulo="" placeholder="Ingresar Descripcion"/>
            <Boton>
                Guardar
            </Boton>
        </form>
    </section>
}

export default Footer