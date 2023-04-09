import React from 'react'

const CardItem = ({ data, handleDragging }) => {


    const handleDragStart = (e) => {
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }

    const handleDragEnd = () => {
        handleDragging(false);
    }

    return (
        <div className='card-container'
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <p>{data.name}</p>
        </div>
    )
}
export default CardItem