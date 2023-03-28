import React from 'react';
import CardItem from "../CardItem/CardItem";

import "./ContainerCards.css"

const ContainerCards = ({ items = [], status }) => {

    return (
        <div className="layout-cards">
            <p className='title'>{status}</p>
            {
                items.map(item => (
                    <CardItem
                        data={item}
                        key={item.id}
                    />
                ))
            }
        </div>
    )
}

export default ContainerCards