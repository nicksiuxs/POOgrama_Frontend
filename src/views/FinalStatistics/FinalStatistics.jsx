import React from 'react'
import logo from "../../assets/logo.png";
import TotalStars from '../../components/TotalStars/TotalStars';
import "./FinalStatistics.css";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

import Start from "../../assets/starfinal.png";

const FinalStatistics = () => {

    const navigate = useNavigate()
    const handleDownload = () => {
        console.log("descargando contenido")
    }

    const hanldeBack = () => {
        navigate("/")
    }
    return (
        <main className='final-statistics'>
            <figure>
                <img src={logo} alt="Poograma" />
            </figure>
            <h2>Has conseguido:</h2>
            <TotalStars starImg={Start} />
            <div className='buttons-container'>
                <Button title="Descargar resultados" onClick={handleDownload} />
                <Button title="Volver al inicio" onClick={hanldeBack} />
            </div>
        </main>
    )
}

export default FinalStatistics