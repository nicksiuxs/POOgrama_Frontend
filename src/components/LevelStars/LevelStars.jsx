import React from 'react';
import Star from "../../assets/star2.png"
import StarDisabled from "../../assets/startdisabled.png"
import useAppContext from '../../customHooks/useAppContext';
import "./LevelStars.css";

const LevelStars = () => {

    const { state: { navigation, score } } = useAppContext();
    const currentScore = score[navigation.current].attemps;

    if (currentScore <= 1) {
        return (
            <div className="level-stars">
                <img src={Star} alt="start" />
                <img src={Star} alt="start" />
                <img src={Star} alt="start" />
            </div>
        )
    } else if (currentScore > 1 && currentScore <= 2) {
        return <div className="level-stars">
            <img src={Star} alt="start" />
            <img src={Star} alt="start" />
            <img src={StarDisabled} alt="start disabled" />
        </div>
    } else {
        return <div className="level-stars">
            <img src={Star} alt="start" />
            <img src={StarDisabled} alt="start" />
            <img src={StarDisabled} alt="start" />
        </div>
    }

}

export default LevelStars