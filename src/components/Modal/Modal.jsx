import React from 'react'
import "./Modal.css";

const Modal = ({ title, message, handleClick, labelButton }) => {
    return (
        <div className='modal'>
            <div className='modal-container'>
                <h3>{title}</h3>
                <p>{message}</p>
                <button onClick={handleClick}>{labelButton}</button>
            </div>
        </div>
    )
}

export default Modal