import React from "react";

import CardItem from "../CardItem/CardItem";

import "./ContainerCards.css";

const ContainerCards = ({
    container,
    items = [],
    handleDragging,
    handleUpdateList,
}) => {
    const { title, isABox } = container;
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
            className={`layout-cards ${isABox ? "" : " layout-cards-no-border"}`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {isABox ? <p className="title">{title}</p> : null}
            <div className="elements-containers">
                {
                    items.map(
                        (item) => {
                            return (<CardItem
                                data={item}
                                key={item.id}
                                handleDragging={handleDragging}
                            />)
                        }
                    )
                }
            </div>
        </div>
    );
};

export default ContainerCards;
