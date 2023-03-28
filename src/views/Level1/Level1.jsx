import React from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
// import ⁄logo from "../../assets/logo.png"
import exampleImage from "../../assets/level-01.png"
import { DragAndDrop } from '../../components/DragAndDrop/DragAndDrop';

const levelInformation = {
    title: "Clase",
    definition: "En esta sección veremos el concepto de clase. Las clases son la plantilla de una entidad, es el modelo que nos ayuda a partir de esa plantilla, a crear nuestros objetos de esa clase.",
    example: "Para brindarte una mejor ayuda, puedes observar el siguiente ejemplo.",
    imageExample: exampleImage,
    exampleDescription: "En el ejemplo vemos a la izquierda la clase persona, la plantilla de la entidad. A la derecha observamos 3 entes u objetos creados a partir de esta clase.",
    activity: "Para esta primera actividad, deberás arrastrar los objetos que pertenezcan a la clase dada dentro del recuadro marcado."
}

const Level1 = () => {
    return (
        <main className="level">
            <LeftSide {...levelInformation} />
            <div>
                <DragAndDrop />
            </div>
        </main>
    )
}

export default Level1