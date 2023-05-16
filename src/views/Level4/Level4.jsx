import React, { useEffect, useState } from "react";
import LeftSide from "../../components/LeftSide/LeftSide";
import LevelStars from "../../components/LevelStars/LevelStars";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import {
    levelInformation,
    data,
    correctAnswers,
    containers,
    incorrectModal,
    correctModal,
} from "./dataLevel4";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../customHooks/useAppContext";
import TYPES from "../../reducers/types";
import Car from "../../assets/car.png";

const Level4 = () => {
    const [attributes, setAttributes] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [modal, setModal] = useState({
        isShow: false,
        title: "",
        message: "",
        labelButton: "",
    });

    const navigate = useNavigate();
    const { dispatch } = useAppContext();

    useEffect(() => {
        const dragitems = document.querySelectorAll(".drag-item");
        dragitems.forEach((dragitem) => {
            dragitem.addEventListener("dragstart", dragStart);
        });

        let dropzones = document.querySelectorAll(".drop-zone");
        dropzones.forEach(function (dropzone) {
            dropzone.addEventListener("dragover", handleDragOver, false);
            dropzone.addEventListener("drop", handleDrop, false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleWrongAnswer = () => {
        setAttributes([]);
        setModal({ ...modal, isShow: false });
    };

    const handleRightAnswer = () => {
        setModal({ ...modal, isShow: false });
        dispatch({ type: TYPES.NEXT_LEVEL });
        navigate("/nivel/5");
    };

    const getAnswers = () => {
        const answer1 =
            document.getElementById("drop-zone-1").childNodes[0]?.textContent;
        const answer2 =
            document.getElementById("drop-zone-2").childNodes[0]?.textContent;
        const answer3 =
            document.getElementById("drop-zone-3").childNodes[0]?.textContent;
        const answer4 =
            document.getElementById("drop-zone-4").childNodes[0]?.textContent;
        const auxAnswer = [answer1, answer2, answer3, answer4].filter(
            (answer) => answer !== undefined
        );
        setAnswers(auxAnswer);
    };

    const handleCheckAnswers = () => {
        const isCorrect = answers.every((answer) =>
            correctAnswers.includes(answer)
        );

        if (!isCorrect) {
            dispatch({ type: TYPES.ADD_ATTEMP });
            setModal({ ...incorrectModal, handleClick: handleWrongAnswer });
        } else {
            dispatch({ type: TYPES.ADD_STARS });
            setModal({ ...correctModal, handleClick: handleRightAnswer });
        }
    };

    function dragStart(event) {
        event.dataTransfer.setData("from", event.target.parentElement.id);
        event.dataTransfer.setData("draggedItem", event.target.id);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        const draggedItemId = event.dataTransfer.getData("draggedItem");
        const draggedItem = document.getElementById(draggedItemId);
        const dropZone = this;
        const fromZone = document.getElementById(
            event.dataTransfer.getData("from")
        );
        const element = data[draggedItemId];

        if (dropZone.id !== "drop-zone-0") {
            if (!attributes.some((e) => e.id === element.id)) {
                setAttributes([...attributes, element]);
            }
            let firstChild = dropZone.firstChild;
            if (firstChild !== null) {
                fromZone.appendChild(firstChild);
            }
        } else {
            setAttributes(
                attributes.filter((e) => {
                    return e.id !== element.id;
                })
            );
        }
        dropZone.appendChild(draggedItem);
        getAnswers();
    }

    return (
        <main>
            <LeftSide {...levelInformation} />
            <div className="right-side">
                <LevelStars />
                <div className="car-section">
                    <img src={Car} alt="ejercicio carro" />
                    {containers.map((_, i) => {
                        return (
                            <div
                                key={i}
                                className="drop-zone drop-box"
                                id={`drop-zone-${i + 1}`}
                            ></div>
                        );
                    })}
                </div>
                <div className="drop-zone drop-zone-0" id="drop-zone-0">
                    {data.map((item, i) => {
                        return (
                            <div key={i} className="drag-item" draggable="true" id={i}>
                                {item.name}
                            </div>
                        );
                    })}
                </div>

                <Button
                    title="Verificar respuesta"
                    onClick={handleCheckAnswers}
                    disabled={answers.length > 3 ? false : true}
                />
            </div>
            {modal.isShow ? <Modal {...modal} /> : null}
        </main>
    );
};

export default Level4;
