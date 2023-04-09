import React from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';
import TotalStars from '../TotalStars/TotalStars';
import "./LevelNavigation.css"

const LevelNavigation = () => {
    return (
        <div className='level-navigation'>
            <NavigationButton />
            <TotalStars />
        </div>
    )
}

export default LevelNavigation