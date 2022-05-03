import './style/ProfilePicture.css'
import React from "react";

const ProfilePicture = (props) => {
    return (
        <img src= {props.image} alt={props.alt} className="imgProfile"/>
    )
}

export default ProfilePicture