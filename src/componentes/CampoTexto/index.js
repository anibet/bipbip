import "./CampoTexto.css"

const CampoTexto = (props) => {
    console.log("Datos:", props.titulo)
    const placeholderModificador =  `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificador}/>
        
    </div>
}

export default CampoTexto 