import './Display.css'
import React from "react";

const Display = (props) => {
    return (
        <div className="display">
            <h2>{props.titulo}</h2>
            <p><a href={props.link} target="_blank">Clique aqui para visualizar o repositório</a></p>
        </div>
    )
}

export default Display