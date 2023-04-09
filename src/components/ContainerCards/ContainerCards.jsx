import React from "react";

import CardItem from "../CardItem/CardItem";

import "./ContainerCards.css";

const ContainerCards = ({
    title,
    items = [],
    handleDragging,
    handleUpdateList,
}) => {
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const id = +e.dataTransfer.getData("text");
        handleUpdateList(id, title);
        handleDragging(false);
    };
    return (
        <div
            className="layout-cards"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <p className="title">{title}</p>
            {items.map(
                (item) =>
                    title === item.class && (
                        <CardItem
                            data={item}
                            key={item.id}
                            handleDragging={handleDragging}
                        />
                    )
            )}
        </div>
    );
};

export default ContainerCards;
