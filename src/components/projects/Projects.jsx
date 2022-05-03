import './style/Projects.css'
import React from "react";

import TitleProjects from "./TitleProjects";
import CardProjects from "./Card/CardProjects";

const Projects = () => {
    return (
        <div className='bgProjects'>
            <TitleProjects titulo="Meus Projetos"></TitleProjects>
            <div className='flex'>
                <CardProjects></CardProjects>
                <CardProjects></CardProjects>
                <CardProjects></CardProjects>
                <CardProjects></CardProjects>
                <CardProjects></CardProjects>
            </div>

        </div>
    )
}

export default Projects