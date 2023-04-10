import React, { useState } from "react";
import LeftSide from "../../components/LeftSide/LeftSide";
import DragAndDrop from "../../components/DragAndDrop/DragAndDrop";
import { levelInformation, containers, data, correctModal, incorrectModal } from "./dataLevel1";
import useDragAndDrop from "../../customHooks/useDragAndDrop";
import ContainerCards from "../../components/ContainerCards/ContainerCards";
import Button from "../../components/Button/Button";
import "./Level1.css";
import Modal from "../../components/Modal/Modal";
import useAppContext from "../../customHooks/useAppContext";
import TYPES from "../../reducers/types";
import LevelStars from "../../components/LevelStars/LevelStars";

const Level1 = () => {
    const [fruits, setFruits] = useState([]);
    const [modal, setModal] = useState({ isShow: false, title: "", message: "", labelButton: "" })

    const { dispatch } = useAppContext();

    const handleSetFruits = (element) => {
        setFruits([...fruits, element])
    }

    const { isDragging, listItems, handleDragging, handleUpdateList, handleResetList } = useDragAndDrop(data, handleSetFruits);

    const handleWrongAnswer = () => {
        setFruits([]);
        handleResetList();
        setModal({ ...modal, isShow: false });
    }

    const handleRightAnswer = () => {
        setModal({ ...modal, isShow: false });
        dispatch({ type: TYPES.NEXT_LEVEL });
    }

    const handleCheckAnswers = () => {
        const isCorrect = fruits.every(fruit => fruit.class === "Fruta");
        if (!isCorrect) {
            setModal({ ...incorrectModal, handleClick: handleWrongAnswer })
        } else {
            if (fruits.length === 3) {
                setModal({ ...correctModal, handleClick: handleRightAnswer })
            }
        }
    }


    return (
        <main className="level">
            <LeftSide {...levelInformation} />
            <div className="right-side">
                <LevelStars />
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
                <Button title="Verificar respuesta" onClick={handleCheckAnswers} disabled={fruits.length > 0 ? false : true} />
            </div>
            {modal.isShow ? <Modal {...modal} /> : null}
        </main>
    );
};

export default Level1;
