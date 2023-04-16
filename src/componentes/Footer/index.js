import "./Footer.css"
import CampoTexto from "../CampoTexto"

const Footer = () => {
    return <section className="footer">
        <form>
            <h2> Rellena Formulario</h2>
            <CampoTexto />
            <CampoTexto />
        </form>
    </section>
}

export default Footer