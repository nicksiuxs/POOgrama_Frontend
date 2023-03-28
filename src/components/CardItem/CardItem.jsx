import React from 'react'

const CardItem = ({ data, handleDragging }) => {
    return (
        <div className='card-container'>
            <p>{data.content}</p>
        </div>
    )
}

export default CardItem