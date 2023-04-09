import React, { useState } from 'react'
import ContainerCards from '../ContainerCards/ContainerCards'

const DragAndDrop = ({ containers, items }) => {
    const [isDragging, setIsDragging] = useState(false)
    const handleDragging = (dragging) => setIsDragging(dragging);

    const [listItems, setListItems] = useState(items);

    const handleUpdateList = (id, title) => {
        let card = listItems.find(item => item.id === id)
        if (card && card.class !== title) {
            card.class = title;
            setListItems(prev => ([
                card,
                ...prev.filter(item => item.id !== id)
            ]))
        }
    }

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
                        handleUpdateList={handleUpdateList}
                    />
                ))
            }
        </div>
    )
}

export default DragAndDrop