import React from 'react';
import logo from "../../assets/logo.png"
import play from "../../assets/play.png"

import "./StartExperience.css"

const StartExperience = () => {

    return (
        <main class="start-experience">
            <section>
                <figure>
                    <img src={logo} alt="Poograma" />
                </figure>
            </section>
            <section>
                <button className='button-play'>
                    <img src={play} alt="play" />
                </button>
            </section>
        </main>
    )
}

export default StartExperience