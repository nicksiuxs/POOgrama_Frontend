import React, { useState } from "react";
import LeftSide from "../../components/LeftSide/LeftSide";
import exampleImage from "../../assets/level-01.png";
import DragAndDrop from "../../components/DragAndDrop/DragAndDrop";

const levelInformation = {
    title: "Clase",
    definition:
        "En esta sección veremos el concepto de clase. Las clases son la plantilla de una entidad, es el modelo que nos ayuda a partir de esa plantilla, a crear nuestros objetos de esa clase.",
    example:
        "Para brindarte una mejor ayuda, puedes observar el siguiente ejemplo.",
    imageExample: exampleImage,
    exampleDescription:
        "En el ejemplo vemos a la izquierda la clase persona, la plantilla de la entidad. A la derecha observamos 3 entes u objetos creados a partir de esta clase.",
    activity:
        "Para esta primera actividad, deberás arrastrar los objetos que pertenezcan a la clase dada dentro del recuadro marcado.",
};

const Level1 = () => {
    const containers = [
        { title: "Fruta", show: true },
        { title: "Ejercicio", show: false },
    ];
    const items = [
        { id: 1, name: "Manzana", class: "Fruta", img: "" },
        { id: 2, name: "Piña", class: "Fruta", img: "" },
        { id: 3, name: "Cebolla", class: "Vegetal", img: "" },
        { id: 4, name: "Zanahoria", class: "Vegetal", img: "" },
        { id: 5, name: "Sandía", class: "Fruta", img: "" }
    ];

    return (
        <main className="level">
            <LeftSide {...levelInformation} />
            <div>
                <DragAndDrop containers={containers} items={items} />
            </div>
        </main>
    );
};

export default Level1;
