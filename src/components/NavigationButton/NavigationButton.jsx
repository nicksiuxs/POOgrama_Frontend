import React, { useEffect } from 'react';
import useAppContext from '../../customHooks/useAppContext';
import "./NavigationButton.css";
import TYPES from '../../reducers/types';
import { useNavigate } from 'react-router-dom';

const NavigationButton = () => {
    const { state: { navigation }, dispatch } = useAppContext();
    const { current, total } = navigation;
    const navigate = useNavigate();

    const handleNextLevel = () => {
        dispatch({ type: TYPES.NEXT_LEVEL });
    }

    const handlePreviousLevel = () => {
        dispatch({ type: TYPES.PREVIOUS_LEVEL });
    }

    useEffect(() => {
        navigate("/nivel/" + current)
    }, [current, navigate])


    return (
        <div className='navigation-button'>
            <button className="" onClick={handlePreviousLevel} >&lt;</button>
            <div>Nivel {current} de {total}</div>
            <button className="" onClick={handleNextLevel}>&gt;</button>
        </div>
    )
}

export default NavigationButton