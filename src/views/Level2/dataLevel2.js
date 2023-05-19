import exampleImage from "../../assets/atributoExample.png";

const levelInformation = {
    title: "Atributo",
    definition: "En una clase, un atributo es una característica de la entidad que se está representando. Una clase se compone de un conjunto de atributos que lo definen. Usemos el ejemplo anterior de la clase persona para entender mejor.",
    example: "Para brindarte una mejor ayuda, puedes observar el siguiente ejemplo.",
    imageExample: exampleImage,
    exampleDescription: "Como observamos, la clase persona se compone de unas características, para este ejemplo usamos algunas más conocidas y fáciles de identificar. Toda persona tiene nombre, edad, peso y género.",
    activity: "A continuación, debes arrastrar a la clase Auto en la sección de la derecha, todos los atributos correctos que consideres que definen a esta clase, estos atributos los puedes encontrar en la sección inferior de la derecha.",
    reference: 
        "(Programación orientada a objetos, p. 8)"
}

const containers = [
    { title: "atributo1", child: {} },
    { title: "atributo2", child: {} },
    { title: "atributo3", child: {} },
    { title: "atributo4", child: {} },
];

const data = [
    { id: 1, name: "raza", class: "noAtributo", img: null },
    { id: 2, name: "marca", class: "atributo", img: null },
    { id: 3, name: "género", class: "noAtributo", img: null },
    { id: 4, name: "pasajeros", class: "atributo", img: null },
    { id: 5, name: "frenar()", class: "noAtributo", img: null },
    { id: 6, name: "acelerar()", class: "noAtributo", img: null },
    { id: 7, name: "color", class: "atributo", img: null },
    { id: 8, name: "modelo", class: "atributo", img: null },
];

const correctAnswers = ["color", "modelo", "pasajeros", "marca"];

const incorrectModal = {
    isShow: true,
    title: "¡Incorrecto!",
    message: "Revisa nuevamente los atributos que pertenecen a la clase Auto. Inténtalo de nuevo.",
    labelButton: "Reintentar"
}

const correctModal = {
    isShow: true,
    title: "¡Correcto!",
    message: "",
    labelButton: "Siguiente nivel"
}

export { levelInformation, containers, data, correctModal, incorrectModal, correctAnswers };
