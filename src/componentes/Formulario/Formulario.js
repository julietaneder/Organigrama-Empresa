import {useState} from 'react';
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre,setNombre] = useState ("")
    const [puesto,setPuesto] = useState ("")
    const [foto,setFoto] = useState ("")
    const [equipo,setEquipo] = useState ("")
    const [titulo, setTitulo] = useState ("")
    const [color, setColor] = useState ("")

    const {registrarColaborador, registrarEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        registrarEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={setNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={setPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={setFoto}
            />
            <ListaOpciones
                required
                valor={equipo}
                actualizarValor={setEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para registrar un equipo.</h2>
            <Campo
                titulo="Título"
                placeholder="Ingresar título"
                required
                valor={titulo}
                actualizarValor={setTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                actualizarValor={setColor}
                type="color"
            />
            <Boton>
                Registrar
            </Boton>
        </form>    
    </section>
}

export default Formulario