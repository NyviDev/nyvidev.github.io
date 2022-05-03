import './CardProjects.css'
import React from "react";

import Display from './Display';
import ImageCard from "./ImageCard";

const CardProjects = () => {
    return (
        <div className='card'>
            <ImageCard 
            image="..\img\python-icon.png"
            alt="Logo Python"/>
            <Display
            titulo="Pedido de Pizza"
            link="https://github.com/NyviDev/pedido-de-pizza"/>
        </div>
    )
}

export default CardProjects