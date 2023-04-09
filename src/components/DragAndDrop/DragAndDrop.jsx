import React from 'react'
import ContainerCards from '../ContainerCards/ContainerCards'
import useDragAndDrop from '../../customHooks/useDragAndDrop'

const DragAndDrop = ({ containers, items }) => {
    const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(items)

    return (
        <div className="grid">
            {
                containers.map(container => (
                    <ContainerCards
                        title={container.title}
                        items={listItems}
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