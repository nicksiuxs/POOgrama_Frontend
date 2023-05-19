import exampleImage from "../../assets/asociacionExample.png";
import girl from "../../assets/girl.png";
import tree from "../../assets/tree.png";
import phone from "../../assets/phone.png";

const levelInformation = {
    title: "Asociación",
    definition: "En cuanto a relaciones entre clases, tenemos la relación de asociación, la cual se da en el momento en el que dos clases totalmente independientes, se unen para funcionar en conjunto. Ten en cuenta que esta relación se representa por medio de una flecha y se puede leer como “usa un” ó “tiene un”. Veamos el siguiente ejemplo:",
    example: "",
    imageExample: exampleImage,
    exampleDescription: "Como observamos, la clase persona se relaciona con la clase auto, esto porque una persona puede tener un auto para transportarse, y el auto va a pertenecer a una persona, la flecha siempre indicando a la clase que es contenida o usada por otra. Siendo totalmente independientes, es decir, que no dependen la una de la otra para existir, son dos clases que se juntan para funcionar en conjunto.",
    activity: "En este ejercicio, debes arrastrar dos clases de las presentadas en la sección de la derecha, que consideres que trabajan en conjunto formando la relación de asociación.",
    reference: 
        "(Programación orientada a objetos, p. 39 'Relación de uso')"
}

const data = [
    { id: 1, name: "Persona", class: "person", img: girl },
    { id: 2, name: "Arbol", class: "tree", img: tree },
    { id: 3, name: "Celular", class: "phone", img: phone },
];

const incorrectModal = {
    isShow: true,
    title: "¡Incorrecto!",
    message: "Parece que las clases no conforman una relación de asociación entre ellas, revisalo de nuevo.",
    labelButton: "Reintentar"
}

const correctModal = {
    isShow: true,
    title: "¡Correcto!",
    message: "",
    labelButton: "Siguiente nivel"
}

export { levelInformation, data, correctModal, incorrectModal };
