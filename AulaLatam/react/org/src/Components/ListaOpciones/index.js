import "./ListaOpciones.css"

const ListaOpciones = () =>{

    const equipos = [
        "Programación",
        "Front End", 
        "Data Science",
        "Devops",
        "Ux y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
    return <div className="listaOpciones">
        <label> Equipos</label>
        <select>
            {equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option>
            })}
            
            
        </select>
    </div>
}

export default ListaOpciones