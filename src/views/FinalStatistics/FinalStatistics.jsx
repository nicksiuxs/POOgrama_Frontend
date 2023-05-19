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
import TYPES from '../../reducers/types';

const FinalStatistics = () => {

    const { state: { user, score }, dispatch } = useAppContext();

    const navigate = useNavigate()


    const handleBack = () => {
        dispatch({ type: TYPES.RESET_NAVIGATION })
        navigate("/video")
    }

    const handelLogout = () => {
        dispatch({ type: TYPES.LOGOUT })
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
                    document={<Results user={user} scores={score} />}
                    fileName={`Resultados_${user.name}.pdf`}
                >
                    <Button title="Descargar resultados" />
                </PDFDownloadLink>
                <Button title="Volver al inicio" onClick={handleBack} />
                <Button title="Cerrar sesión" onClick={handelLogout} />
            </div>
        </main>
    )
}

export default FinalStatistics