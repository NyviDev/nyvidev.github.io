import React from "react";

import About from "./About";
import ProfilePicture from "./ProfilePicture";

const Profile = () => {
    return (
        <div>
            <ProfilePicture
            image="https://avatars.githubusercontent.com/u/81114221?s=400&u=237fe121eb0b629bc343ee08b1a27170ceb7d28d&v=4"
            alt="Nicolly Vieira Santos Costa"/>

            <About
            conteudo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolore est error quia sunt hic, voluptatibus exercitationem illum nemo magni dignissimos iste. Sapiente dolores iure odit officiis, quo eius quas."/>
        </div>
    )
}

export default Profile