import './ImageCard.css'
import React from "react";

const ImageCard = (props) => {
    return (
        <div className="imageCard">
            <img src={props.image} alt={props.alt} />
        </div>
    )
}

export default ImageCard