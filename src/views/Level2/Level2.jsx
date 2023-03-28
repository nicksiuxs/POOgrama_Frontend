import React from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
import './Level2.css'
// import ⁄logo from "../../assets/logo.png"
import exampleImage from "../../assets/atributoExample.png"
import fruitClass from "../..//assets/fruitClass.png"
import onion from "../..//assets/onion.png"
import apple from "../..//assets/apple.png"
import pineapple from "../..//assets/pineapple.png"
import carrot from "../..//assets/carrot.png"
import watermelon from "../..//assets/watermelon.png"
import Button from '../../components/Button/Button';

const levelInformation = {
    title: "Atributo",
    definition: "En una clase, un atributo es una característica de la entidad que se está representando. Una clase se compone de un conjunto de atributos que lo definen. Usemos el ejemplo anterior de la clase persona para entender mejor.",
    example: "Para brindarte una mejor ayuda, puedes observar el siguiente ejemplo.",
    imageExample: exampleImage,
    exampleDescription: "Como observamos, la clase persona se compone de unas características, para este ejemplo usamos algunas más conocidas y fáciles de identificar. Toda persona tiene nombre, edad, peso y género.",
    activity: "A continuación, debes arrastrar a la clase Auto en la sección de la derecha, los atributos correctos que consideres que definen a esta clase, estos atributos los puedes encontrar en la sección inferior de la derecha."
}

const Level2 = () => {
    return (
        <main>
            <LeftSide {...levelInformation} />
            <div>
                <figure className="left-side-image">
                    <img src={fruitClass} alt="example" />
                </figure>
                <div className="fruits-container">
                    <div>
                        <figure className="apple">
                            <img src={apple} alt="example" />
                        </figure>
                        <figure className="pineapple">
                            <img src={pineapple} alt="example" />
                        </figure>
                        <figure className="fruit">
                            <img src={onion} alt="example" />
                        </figure>
                    </div>
                    <div>
                        <figure className="carrot">
                            <img src={carrot} alt="example" />
                        </figure>
                        <figure className="fruit">
                            <img src={watermelon} alt="example" />
                        </figure>
                    </div>
                </div>
                <Button title="Verificar respuesta" onClick={() => { }} />
            </div>
        </main>
    )
}

export default Level2