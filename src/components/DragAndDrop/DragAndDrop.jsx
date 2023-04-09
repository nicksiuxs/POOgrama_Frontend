import React from 'react'
import ContainerCards from '../ContainerCards/ContainerCards'

const DragAndDrop = ({ containers, items }) => {
    return (
        <div className="grid">
            {
                containers.map(container => (
                    <ContainerCards
                        title={container.title}
                        items={items}
                        key={container.title}
                    />
                ))
            }
        </div>
    )
}

export default DragAndDrop