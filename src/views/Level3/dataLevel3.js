import exampleImage from "../../assets/objectExample.png";
import boy from "../../assets/boy.png";
import girl from "../../assets/girl.png";
import cat from "../../assets/cat.png";
import dog from "../../assets/dog.png";
import car from "../../assets/whiteCar.png";
import motorbike from "../../assets/motorbike.png";

const levelInformation = {
    title: "Objeto",
    definition: "Un objeto es un ente perteneciente a una clase, un elemento creado a partir de esa plantilla llamada clase. Los diferentes objetos existentes pueden tener diferentes características.",
    example: "Para brindarte una mejor ayuda, puedes observar el siguiente ejemplo",
    imageExample: exampleImage,
    exampleDescription: "En el ejemplo vemos a la izquierda la clase Fruta, la plantilla de la entidad. A la derecha observamos 3 entes u objetos creados a partir de esta clase.",
    activity: "Tienes tres clases, la clase Vehiculo, Animal y Persona. Arrastra los objetos identificando a la clase a la que pertenecen."
}

const containers = [
    { title: "Vehículo", class: "vehicle", child: {} },
    { title: "Animal", class: "animal", child: {} },
    { title: "Persona", class: "person", child: {} },
];

const data = [
    { id: 1, name: "motorbike", class: "vehicle", img: motorbike },
    { id: 2, name: "boy", class: "person", img: boy },
    { id: 3, name: "dog", class: "animal", img: dog },
    { id: 4, name: "girl", class: "person", img: girl },
    { id: 5, name: "cat", class: "animal", img: cat },
    { id: 6, name: "car", class: "vehicle", img: car },
];



export { levelInformation, containers, data };
