import React from 'react'

import "./Button.css";

const Button = ({ title, onClick, disabled, classNames }) => {
    return (
        <button className={`button ${classNames}`} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    )
}

export default Button