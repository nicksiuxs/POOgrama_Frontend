import exampleImage from "../../assets/methodExample.png";

const levelInformation = {
    title: "Método",
    definition: "En una clase, un método es una acción que la entidad que se está representando puede ejecutar. Una clase puede tener una o más acciones o métodos que pueda ejecutar. Usemos el ejemplo de la clase persona.",
    example: "Para brindarte una mejor ayuda, puedes observar el siguiente ejemplo",
    imageExample: exampleImage,
    exampleDescription: "Como observamos, la clase persona tiene bastantes métodos, para este ejemplo usamos las acciones normales que hace una persona. Toda persona puede caminar, correr, hablar y saltar.",
    activity: "A continuación, debes arrastrar a la clase Auto en la sección de la derecha, los métodos correctos que consideres que esta clase puede ejecutar, estos atributos los puedes encontrar en la sección inferior de la derecha.",
    reference: 
        "(Programación orientada a objetos, p. 8)"
}

const containers = [
    { title: "método1", child: {} },
    { title: "método2", child: {} },
    { title: "método3", child: {} },
    { title: "método4", child: {} },
];

const data = [
    { id: 1, name: "caminar()", class: "método", img: null },
    { id: 2, name: "encenderMotor()", class: "método", img: null },
    { id: 3, name: "frenar()", class: "método", img: null },
    { id: 4, name: "color", class: "atributo", img: null },
    { id: 5, name: "apagarMotor()", class: "método", img: null },
    { id: 6, name: "pasajeros", class: "atributo", img: null },
    { id: 7, name: "acelerar()", class: "método", img: null },
    { id: 8, name: "modelo", class: "atributo", img: null },
];

const correctAnswers = ["frenar()", "encenderMotor()", "apagarMotor()", "acelerar()"];

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

export { levelInformation, data, correctAnswers, containers, incorrectModal, correctModal };
