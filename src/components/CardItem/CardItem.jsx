import React from 'react'
import "./CardItem.css";

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
            <img src={data.img} alt={data.name} />
        </div>
    )
}
export default CardItem