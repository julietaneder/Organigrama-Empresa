import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarForm, setMostrarForm] = useState(false)
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: 'Front End',
    foto: 'https://github.com/julietaneder.png',
    nombre: 'Julieta Neder',
    puesto: 'Front End Developer',
    fav: true
  }])
  const [equipos, setEquipos] = useState([

    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278"
    },

    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA"
    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157"
    },

    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69"
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF"
    },

    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05"
    },

    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29"
    }
  ])

  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }  

  //Registrar equipo
  const registrarEquipo =  (nuevoEquipo) => {
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  //Colaborador favorito
  const like = (id) => {
    const colaboradoresFav = colaboradores.map((colaborador) => {
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresFav)
  }

  return (

    <div>

      <Header/>

      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        mostrarForm && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}
          registrarEquipo = {registrarEquipo}
          />
      }

      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          /> 
        )
      }

      <Footer/>

    </div>

  );
}

export default App;
