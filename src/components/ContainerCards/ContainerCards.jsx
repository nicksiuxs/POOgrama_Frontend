import React from 'react'

import CardItem from '../CardItem/CardItem';

import "./ContainerCards.css";

const ContainerCards = ({ title, items = [] }) => {
    return (
        <div className="layout-cards" >
            <p className='title'>{title}</p>
            {
                items.map(item => (
                    title === item.class &&
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