import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases.mjs";

let arrayAnimales = [];

const crearAnimal = (
  nombreAnimal,
  edadAnimal,
  imagenAnimal,
  comentariosAnimal,
  sonidoAnimal
) => {
  let animal;
  switch (nombreAnimal) {
    case "Leon":
      animal = new Leon(
        nombreAnimal,
        edadAnimal,
        imagenAnimal,
        comentariosAnimal,
        sonidoAnimal
      );
      break;
    case "Lobo":
      animal = new Lobo(
        nombreAnimal,
        edadAnimal,
        imagenAnimal,
        comentariosAnimal,
        sonidoAnimal
      );
      break;
    case "Oso":
      animal = new Oso(
        nombreAnimal,
        edadAnimal,
        imagenAnimal,
        comentariosAnimal,
        sonidoAnimal
      );
      break;
    case "Serpiente":
      animal = new Serpiente(
        nombreAnimal,
        edadAnimal,
        imagenAnimal,
        comentariosAnimal,
        sonidoAnimal
      );
      break;
    case "Aguila":
      animal = new Aguila(
        nombreAnimal,
        edadAnimal,
        imagenAnimal,
        comentariosAnimal,
        sonidoAnimal
      );
      break;

    default:
      break;
  }

  if (animal) {
    arrayAnimales.push(animal);

    /* let animalList = "";
    const sonar = (element) => {
      if (element.nombre === "Lobo") {
        element.aullar();
      } else if (element.nombre === "Aguila") {
        element.chillar();
      } else if (element.nombre === "Oso") {
        element.grunir();
      } else if (element.nombre === "Leon") {
        element.rugir();
      } else if (element.nombre === "Serpiente") {
        element.sisear();
      }
    };
    arrayAnimales.forEach((element) => {
      let card = `<div class="card" style="width: 12rem; height: 15rem">
      <img
        class="card-img-top"
        style="height: 83%"
        src="${element.img}"
        alt="Card image cap"
      />
      <div
        class="card-body bg-secondary"
        style="
          background-image: url(./assets/imgs/audio.svg);
          background-repeat: no-repeat;
          background-position: center;
          height: 17%;
        "
        id="activar"
      > <button onClick="${sonar(element)}">activar</button> </div>
    </div>`;
      animalList += card;

      document.getElementById("Animales").innerHTML = animalList;
    }); */
  }

  console.log(arrayAnimales);
};

export { crearAnimal, arrayAnimales };
