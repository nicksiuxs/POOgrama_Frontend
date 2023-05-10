import React, { useState, useEffect } from 'react'
import LeftSide from '../../components/LeftSide/LeftSide'
import LevelStars from '../../components/LevelStars/LevelStars'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import { levelInformation, containers, data } from './dataLevel3'
import './level3.css'

const Level3 = () => {

    const [modal, setModal] = useState({ isShow: false, title: "", message: "", labelButton: "" });

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

    const handleCheckAnswers = () => {
        console.log("confirmando")
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
        const element = data[draggedItemId]

        if (dropZone.id !== "drop-zone-0") {
            if (!attributes.some(e => e.id === element.id)) {
                setAttributes([...attributes, element])
            }
            let firstChild = dropZone.firstChild;
            if (firstChild !== null) {
                fromZone.appendChild(firstChild);
            }
        } else {
            setAttributes(attributes.filter(e => { return e.id !== element.id }))
        }
        dropZone.appendChild(draggedItem);
        getAnswers();
    }

    return (
        <main>
            <LeftSide {...levelInformation} />
            <div className="right-side">
                <LevelStars />
                <div className="containers">
                    {
                        containers.map((_, i) => {
                            return <div key={i} className="drop-zone drop-box" id={`drop-zone-${i + 1}`}></div>
                        })
                    }
                </div>
                <div className="drop-zone drop-zone-0" id="drop-zone-0">
                    {
                        data.map(
                            (item, i) => {
                                return (<div
                                    key={i}
                                    className="drag-item"
                                    draggable="true"
                                    id={i}>
                                    {item.name}
                                </div>
                                )
                            }
                        )
                    }
                </div>
                <Button title="Verificar respuesta" onClick={handleCheckAnswers} disabled />
            </div>
            {modal.isShow ? <Modal {...modal} /> : null}
        </main>
    )
}

export default Level3