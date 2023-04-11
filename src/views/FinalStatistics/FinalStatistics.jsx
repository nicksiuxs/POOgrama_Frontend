import React from 'react'
import logo from "../../assets/logo.png";
import TotalStars from '../../components/TotalStars/TotalStars';
import useAppContext from '../../customHooks/useAppContext';
import "./FinalStatistics.css";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Results from '../Results/Results';

import Start from "../../assets/starfinal.png";

const FinalStatistics = () => {

    const { state: { user } } = useAppContext();
    const { state: { score } } = useAppContext();

    const navigate = useNavigate()
    /* const handleDownload = () => {
        console.log(user);
        console.log("descargando contenido")
    } */

    const handleBack = () => {
        console.log(score);
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
                <PDFDownloadLink
                    document={<Results user={user} scores={score}/>}
                    fileName={`Resultados_${user.name}.pdf`}
                >
                    <Button title="Descargar resultados"/>
                </PDFDownloadLink>
                <Button title="Volver al inicio" onClick={handleBack} />
            </div>
        </main>
    )
}

export default FinalStatistics