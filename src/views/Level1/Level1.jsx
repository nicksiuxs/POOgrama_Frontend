import React, { useState } from "react";
import LeftSide from "../../components/LeftSide/LeftSide";
import DragAndDrop from "../../components/DragAndDrop/DragAndDrop";
import { levelInformation, containers, data } from "./dataLevel1";
import useDragAndDrop from "../../customHooks/useDragAndDrop";
import ContainerCards from "../../components/ContainerCards/ContainerCards";
import Button from "../../components/Button/Button";

const Level1 = () => {
    const [fruits, setFruits] = useState([]);

    const handleSetFruits = (element) => {
        setFruits([...fruits, element])
    }
    const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data, handleSetFruits);

    return (
        <main className="level">
            <LeftSide {...levelInformation} />
            <div>
                <DragAndDrop>
                    <ContainerCards
                        container={containers[0]}
                        items={fruits}
                        key={containers[0].title}
                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                    <ContainerCards
                        container={containers[1]}
                        items={listItems}
                        key={containers[1].title}
                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                </DragAndDrop>
                <Button title="Verificar respuesta" onClick={() => { }} />
            </div>
        </main>
    );
};

export default Level1;
