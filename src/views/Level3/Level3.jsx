import React, { useState } from 'react'
import LeftSide from '../../components/LeftSide/LeftSide'
import LevelStars from '../../components/LevelStars/LevelStars'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import { levelInformation } from './dataLevel3'

const Level3 = () => {

    const [modal, setModal] = useState({ isShow: false, title: "", message: "", labelButton: "" });

    const handleCheckAnswers = () => {
        console.log("confirmando")
        setModal({ isShow: false, title: "", message: "", labelButton: "" })
    }
    return (
        <main>
            <LeftSide {...levelInformation} />
            <div className="right-side">
                <LevelStars />
                <div className="car-section">
                    <p>En desarrollo</p>
                </div>

                <Button title="Verificar respuesta" onClick={handleCheckAnswers} disabled />
            </div>
            {modal.isShow ? <Modal {...modal} /> : null}
        </main>
    )
}

export default Level3