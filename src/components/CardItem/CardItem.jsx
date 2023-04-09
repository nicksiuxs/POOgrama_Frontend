import React from 'react'

const CardItem = ({ data, handleDragging }) => {
    return (
        <div className='card-container'>
            <p>{data.name}</p>
        </div>
    )
}
export default CardItem