import {useState} from 'react'
import "./Campo.css"

const Campo = (props) => {

    const {type = "text"} = props

    const manejarValor = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label> {props.titulo} </label>
        <input
            placeholder= {props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={manejarValor}
            type={type}
        />
    </div>
    
}

export default Campo