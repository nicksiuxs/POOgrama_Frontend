/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSide from '../../components/LeftSide/LeftSide';
import './level5.css'
import Button from '../../components/Button/Button';
import { levelInformation, data, correctModal, incorrectModal } from "./dataLevel5";
import arrow from "../../assets/arrowRight.png";
import Modal from "../../components/Modal/Modal";
import useAppContext from "../../customHooks/useAppContext";
import TYPES from "../../reducers/types";
import LevelStars from "../../components/LevelStars/LevelStars";

const Level5 = () => {

    const [objects, setObjects] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [modal, setModal] = useState({ isShow: false, title: "", message: "", labelButton: "" })

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
    }, [])

    const handleWrongAnswer = () => {
        setObjects([]);
        setModal({ ...modal, isShow: false });
    }

    const handleRightAnswer = () => {
        setModal({ ...modal, isShow: false });
        dispatch({ type: TYPES.NEXT_LEVEL });
        navigate("/estadisticas")
    }

    const getAnswers = () => {
        const person = { class: "person", object: {} };
        const answer1 = document.getElementById("drop-zone-1").childNodes[0]?.id;
        person.object = data[answer1 - 1];

        const phone = { class: "phone", object: {} };
        const answer2 = document.getElementById("drop-zone-2").childNodes[0]?.id;
        phone.object = data[answer2 - 1];

        const auxAnswer = [person, phone].filter(answer => answer !== undefined);
        setObjects([answer1, answer2].filter(answer => answer !== undefined));
        setAnswers(auxAnswer)
    }

    const handleCheckAnswers = () => {
        const isCorrect = answers.every(answer => answer.object.class === answer.class);

        if (!isCorrect) {
            dispatch({ type: TYPES.ADD_ATTEMP });
            setModal({ ...incorrectModal, handleClick: handleWrongAnswer })
        } else {
            dispatch({ type: TYPES.ADD_STARS });
            setModal({ ...correctModal, handleClick: handleRightAnswer })
        }
    }

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
        const fromZone = document.getElementById(event.dataTransfer.getData("from"));

        if (dropZone.id !== "drop-zone-0") {
            let firstChild = dropZone.firstChild;
            if (firstChild !== null) {
                fromZone.appendChild(firstChild);
            }
        }
        dropZone.appendChild(draggedItem);
        getAnswers();
    }

    return (
        <main>
            <LeftSide {...levelInformation} />
            <div className="right-side">
                <LevelStars />
                <div className="containers cont-relation">
                    <div className="drop-zone drop-box drop-box-relation" id={`drop-zone-1`}></div>
                    <div>
                        <p>Usa un</p>
                        <img src={arrow} alt="arrowRight" />
                    </div>
                    <div className="drop-zone drop-box drop-box-relation" id={`drop-zone-2`}></div>
                </div>
                <div className="drop-zone drop-zone-0 drop-zone-relation" id="drop-zone-0">
                    {
                        data.map(
                            (item, i) => {
                                return (<img
                                    key={i}
                                    className="drag-item relation-images"
                                    draggable="true"
                                    id={item.id}
                                    src={item.img}
                                    alt={item.class} />
                                )
                            }
                        )
                    }
                </div>
                <Button title="Verificar respuesta" onClick={handleCheckAnswers} disabled={objects.length > 1 ? false : true} />
            </div>
            {modal.isShow ? <Modal {...modal} /> : null}
        </main>
    )
}

export default Level5