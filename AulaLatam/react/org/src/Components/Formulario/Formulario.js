import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
const Formulario = () => {

    const[nombre, actualizarNombre] = useState("")
    const[puesto, actualizarPuesto] = useState("")
    const[foto, actualizarFoto] = useState("")
    



    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log("Manejar el Envio", evento)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo ="Nombre" placeholder="Ingrese Nombre" required="Campo Requerido" valor={nombre} actualizarNombre/>
            <CampoTexto titulo ="Puesto" placeholder="Ingrese Puesto" required="Campo Requerido"/>
            <CampoTexto titulo ="Foto" placeholder="Ingrese Foto"/>
            <ListaOpciones titulo = "Lista Opciones"/>
            <Boton texto="Crear"/>
        
        </form>
    </section>
}

export default Formulario