import React from "react";

import Projects from "./components/projects/Projects";
import Profile from './components/profile/Profile'
import Header from './components/header/Header'

const App = () => {

    return (
        <div>
            <Header titulo="Nicolly Vieira Santos Costa"></Header>
            <Profile></Profile>
            <Projects></Projects>
        </div>
    )
}

export default App