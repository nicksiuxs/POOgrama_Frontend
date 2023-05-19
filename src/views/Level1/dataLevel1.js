import exampleImage from "../../assets/level-01.png";
import Apple from "../../assets/apple.png";
import Pineaple from "../../assets/pineapple.png";
import Onion from "../../assets/onion.png";
import Carrot from "../../assets/carrot.png";
import Watermelon from "../../assets/watermelon.png";

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
    reference: 
        "(Programación orientada a objetos, pp. 7-8)"
};

const containers = [
    { title: "Fruta", isABox: true },
    { title: "Ejercicio", isABox: false },
];

const data = [
    { id: 1, name: "Manzana", class: "Fruta", img: Apple },
    { id: 2, name: "Piña", class: "Fruta", img: Pineaple },
    { id: 3, name: "Cebolla", class: "Vegetal", img: Onion },
    { id: 4, name: "Zanahoria", class: "Vegetal", img: Carrot },
    { id: 5, name: "Sandía", class: "Fruta", img: Watermelon },
];

const incorrectModal = {
    isShow: true,
    title: "¡Incorrecto!",
    message: "Vuelve a revisar los objetos seleccionados, revisa las notas e intenta nuevamente.",
    labelButton: "Reintentar"
}

const correctModal = {
    isShow: true,
    title: "¡Correcto!",
    message: "",
    labelButton: "Siguiente nivel"
}

export { levelInformation, containers, data, correctModal, incorrectModal };
