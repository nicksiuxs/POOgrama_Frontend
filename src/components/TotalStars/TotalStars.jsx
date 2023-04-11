import React from 'react'
import useAppContext from '../../customHooks/useAppContext';
import Star from "../../assets/star.png";
import "./TotalStars.css";

const TotalStars = ({ starImg }) => {
    const { state: { total } } = useAppContext();

    return (
        <div className='total-stars'>
            <img src={starImg ? starImg : Star} alt="star" />
            X {total.totalStars}
        </div>
    )
}

export default TotalStars