import React, { useState } from 'react'
import data from '../../views/Level1/dataLevel1'
import ContainerCards from '../ContainerCards/ContainerCards'

export const DragAndDrop = () => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragging = (dragging) => setIsDragging(dragging);

    return (
        <div className="grid">
            <ContainerCards
                status={"Fruta"}
                items={data}
            />
        </div>
    )
}
