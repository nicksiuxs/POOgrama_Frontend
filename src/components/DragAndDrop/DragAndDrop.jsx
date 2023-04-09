import React, { useState } from 'react'
import ContainerCards from '../ContainerCards/ContainerCards'

const DragAndDrop = ({ containers, items }) => {
    const [isDragging, setIsDragging] = useState(false)

    const handleDragging = (dragging) => setIsDragging(dragging);

    return (
        <div className="grid">
            {
                containers.map(container => (
                    <ContainerCards
                        title={container.title}
                        items={items}
                        key={container.title}
                        isDragging={isDragging}
                        handleDragging={handleDragging}
                    />
                ))
            }
        </div>
    )
}

export default DragAndDrop