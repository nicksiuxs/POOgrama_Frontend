import React from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
import './Level2.css'
// import ⁄logo from "../../assets/logo.png"
import exampleImage from "../../assets/example2.png"
import fruitClass from "../..//assets/fruitClass.png"
import onion from "../..//assets/onion.png"
import apple from "../..//assets/apple.png"
import pineapple from "../..//assets/pineapple.png"
import carrot from "../..//assets/carrot.png"
import watermelon from "../..//assets/watermelon.png"
import Button from '../../components/Button/Button';

const levelInformation = {
    title: "Objeto",
    definition: "Un objeto es un ente perteneciente a una clase, un elemento creado a partir de esa plantilla llamada clase. Los diferentes objetos existentes pueden tener diferentes características.",
    example: "Para brindarte una mejor ayuda, puedes observar el siguiente ejemplo.",
    imageExample: exampleImage,
    exampleDescription: "En el ejemplo vemos a la izquierda la clase fruta, la plantilla de la entidad. A la derecha observamos 3 entes u objetos creados a partir de esta clase.",
    activity: "Tienes tres clases, la clase Vehiculo, Animal y Persona. Arrastrar los objetos identificando a la clase a la que pertenecen."
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
                <Button title="Verificar respuesta" onClick={() => {}}/>
            </div>
        </main>
    )
}

export default Level2