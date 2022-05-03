import './style/About.css'
import React from "react";

const About = (props) => {
    return (
        <div className="bgAbout">
            <p>{props.conteudo}</p>
        </div>
    )
}

export default About