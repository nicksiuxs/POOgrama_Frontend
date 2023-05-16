import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LeftSide from '../../components/LeftSide/LeftSide'
import LevelStars from '../../components/LevelStars/LevelStars'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import { levelInformation, containers, data, incorrectModal, correctModal } from './dataLevel3'
import useAppContext from "../../customHooks/useAppContext";
import TYPES from "../../reducers/types";
import './level3.css'

const Level3 = () => {

    const [modal, setModal] = useState({ isShow: false, title: "", message: "", labelButton: "" });
    const [answers, setAnswers] = useState([]);
    const [allAnswers, setAllAnswers] = useState([]);

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
        setAnswers([]);
        setAllAnswers([]);
        setModal({ ...modal, isShow: false });
    }

    const handleRightAnswer = () => {
        setModal({ ...modal, isShow: false });
        dispatch({ type: TYPES.NEXT_LEVEL });
        navigate("/nivel/3")
    }

    const getAnswers = () => {
        const auxAllAnswers = [];
        const vehicle = {class: "vehicle", objects: []};
        for(const element of document.getElementById("drop-zone-1").children){
            vehicle.objects.push(data.find( el => el.id === element.id));
            auxAllAnswers.push(element.id);
        };

        const animal = {class: "animal", objects: []};
        for(const element of document.getElementById("drop-zone-2").children){
            animal.objects.push(data.find( el => el.id === element.id));
            auxAllAnswers.push(element.id);
        };

        const person = {class: "person", objects: []};
        for(const element of document.getElementById("drop-zone-3").children){
            person.objects.push(data.find( el => el.id === element.id));
            auxAllAnswers.push(element.id);
        };

        const auxAnswer = [vehicle, animal, person];
        setAllAnswers(auxAllAnswers);
        setAnswers(auxAnswer);
    }

    const handleCheckAnswers = () => {
        const isCorrect = answers.every( answer => answer.objects.every( el => el.class === answer.class ));
        if (!isCorrect) {
            dispatch({ type: TYPES.ADD_ATTEMP });
            console.log("attemp");
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

        if (dropZone.id !== "drop-zone-0") {
            if (dropZone.childElementCount < 2) {
                dropZone.appendChild(draggedItem);
            }
        } else {
            dropZone.appendChild(draggedItem);
        }
        getAnswers();
    }

    return (
        <main>
            <LeftSide {...levelInformation} />
            <div className="right-side">
                <LevelStars />
                <div className="containers objects-container">
                    <div className='objects-titles'>
                        <article className='object-title'>
                            <p>Vehículo</p>
                        </article>
                        <article className='object-title'>
                            <p>Animal</p>
                        </article>
                        <article className='object-title'>
                            <p>Persona</p>
                        </article>
                    </div>
                    {
                        containers.map((_, i) => {
                            return <div key={i} className="drop-zone drop-box drop-box-object" id={`drop-zone-${i + 1}`}></div>
                        })
                    }
                </div>
                <div className="drop-zone drop-zone-0 drop-zone-object" id="drop-zone-0">
                    {
                        data.map(
                            (item, i) => {
                                return (<img
                                    key={i}
                                    className="drag-item object-images"
                                    draggable="true"
                                    id={item.id} 
                                    src={item.img} 
                                    alt={item.class} />
                                )
                            }
                        )
                    }
                </div>
                <Button title="Verificar respuesta" onClick={handleCheckAnswers} disabled={ allAnswers.length > 5 ? false : true }/>
            </div>
            {modal.isShow ? <Modal {...modal} /> : null}
        </main>
    )
}

export default Level3