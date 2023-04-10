import { useState } from "react";

const useDragAndDrop = (initialState, handleSetFruits) => {
    const [isDragging, setIsDragging] = useState(false);
    const [listItems, setListItems] = useState(initialState);

    const handleUpdateList = (id) => {

        let card = listItems.find((item) => item.id === id);
        const newState = listItems.filter(item => item.id !== card.id)
        setListItems(newState);
        handleSetFruits(card)

    };

    const handleDragging = (dragging) => {
        setIsDragging(dragging)
    };

    const handleResetList = () => {
        setListItems(initialState);
    }

    return {
        isDragging,
        listItems,
        handleUpdateList,
        handleDragging,
        handleResetList
    }
};

export default useDragAndDrop;
