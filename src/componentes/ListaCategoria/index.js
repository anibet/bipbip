import "./ListaCategoria.css"

const ListaCategoria = () => {

    const categoria = [ 
        "Entretenimiento",
        "Educacion",
        "Documentales",
        "Viajes",
        "Misterio",
        "Cultura",
        "Ocio",

    ]

    
    return <div className="lista-opciones">
        <label>Categoria</label>
        <select>
           {categoria.map( (categoria, index) => <option key={index}>{categoria}</option>) }
        </select>
    </div>
}

export default ListaCategoria