import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./clases.mjs";

let arrayAnimales = [];
/* Se reciben los datos del formulario para crear la instancia del animal que corresponda según el nombre */
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
  /* Si el animal corresponde a una clase de Animal se añade a ArrayAnimales */
  if (animal instanceof Animal) {
    arrayAnimales.push(animal);
  }

  console.log(arrayAnimales);
};

export { crearAnimal, arrayAnimales };
