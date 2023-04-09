import { useState } from "react";

const useDragAndDrop = (initialState) => {
    const [isDragging, setIsDragging] = useState(false);
    const [listItems, setListItems] = useState(initialState);

    const handleUpdateList = (id, title) => {
        let card = listItems.find((item) => item.id === id);
        if (card && card.class !== title) {
            card.class = title;
            setListItems((prev) => [card, ...prev.filter((item) => item.id !== id)]);
        }
    };

    const handleDragging = (dragging) => {
        setIsDragging(dragging)
    };

    return {
        isDragging,
        listItems,
        handleUpdateList,
        handleDragging,
    }
};

export default useDragAndDrop;
