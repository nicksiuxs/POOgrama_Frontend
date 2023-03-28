import React from 'react';
import useAppContext from '../../customHooks/useAppContext';
import "./NavigationButton.css"

const NavigationButton = () => {
    const { state: { navigation } } = useAppContext();
    const { actual, total } = navigation;

    const handleNextLevel = () => {
        console.log("siguiente")
    }

    const handlePreviousLevel = () => {
        console.log("anterior")
    }

    return (
        <div className='navigation-button'>
            <button className="" onClick={handlePreviousLevel} >&lt;</button>
            <div>Nivel {actual} de {total}</div>
            <button className="" onClick={handleNextLevel}>&gt;</button>
        </div>
    )
}

export default NavigationButton