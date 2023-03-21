import React from 'react';
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png"
import play from "../../assets/play.png"

import "./StartExperience.css"

const StartExperience = () => {
    const navigate = useNavigate();

    return (
        <main class="start-experience">
            <section>
                <figure>
                    <img src={logo} alt="Poograma" />
                </figure>
            </section>
            <section>
                <button className='button-play' onClick={() => navigate("/login")}>
                    <img src={play} alt="play" />
                </button>
            </section>
        </main>
    )
}

export default StartExperience