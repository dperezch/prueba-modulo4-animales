import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases.mjs";
/* se recibe el array de animales como parámetro*/
const reproducirSonidos = (arrayAnimales) => {
  /* querySelectorAll nos entrega una lista de nodos en un arreglo, en este caso será un arreglo de todos los div(botones de sonido)
    de las diferentes tarjetas creadas dentro del div#Animales*/
  let botonCards = document.querySelectorAll("#Animales>div>div");
  //console.log(botonCards);
  arrayAnimales.forEach((animal, index) => {
    /* como el array botonCards está directamente relacionado al arrayAnimales, utilizaremos el index de este último para vincular
    la función de sonido a la tarjeta correspondiente */
    botonCards[index].addEventListener("click", () => {
      if (animal instanceof Leon) {
        animal.rugir();
      } else if (animal instanceof Lobo) {
        animal.aullar();
      } else if (animal instanceof Oso) {
        animal.grunir();
      } else if (animal instanceof Serpiente) {
        animal.sisear();
      } else if (animal instanceof Aguila) {
        animal.chillar();
      }
    });
  });
};

export { reproducirSonidos };
