import { crearAnimal, arrayAnimales } from "./crearAnimal.mjs";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases.mjs";

/* Inicializar variables que utilizaremos más adelante */
let dataAnimales;
let imagenAnimal;
let sonidoAnimal;

/* IIFE + consulta asíncrona del archivo json */
const modulo = (() => {
  const getData = async () => {
    try {
      const res = await fetch("./animales.json");
      const data = await res.json();
      const animals = data.animales;
      return animals;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getData: getData,
  };
})();
/* Llamar a función IIFE */
modulo.getData().then((data) => (dataAnimales = data));

/* Previsualización de la imagen del animal en el formulario HTML cuando cambie el valor de select */
$("#animal").on("change", function () {
  let animal = dataAnimales.find((element) => element.name === this.value);
  imagenAnimal = animal.imagen;
  sonidoAnimal = animal.sonido;
  $("#preview").css("background-image", `url(${animal.imagen})`);
});

/* Obtener datos del formulario*/
$("#btnRegistrar").on("click", () => {
  let nombreAnimal = $("#animal").val();
  let edadAnimal = $("#edad").val();
  let comentariosAnimal = $("#comentarios").val();
  /* Validar que el usuario haya ingresado todos los datos necesarios en el formulario */
  if (nombreAnimal != null && edadAnimal != null && comentariosAnimal != "") {
    /* Se envía datos a la función que crea instancia de animal */
    crearAnimal(
      nombreAnimal,
      edadAnimal,
      imagenAnimal,
      comentariosAnimal,
      sonidoAnimal
    );
    /* Limpiar datos del formulario */
    $("#animal").val(null);
    $("#edad").val(null);
    $("#comentarios").val("");
    $("#preview").css("background-image", "url(./assets/imgs/lion.svg)");
  } else {
    alert("debes completar todos los campos");
  }

  /* función para rellenar la tabla */
  let div = document.getElementById("Animales");
  let animalList = "";

  ///******************************************************************************** */
  /* AQUI COMIENZA EL PROBLEMA */
  arrayAnimales.forEach((animal, index) => {
    //let button = `<button> crear sonido </button>`;
    let card = `<div class="card" style="width: 12rem; height: 15rem">
                  <img class="card-img-top" style="height: 83%" src="${animal.img}" alt="Card image cap"/>
                  <div id="${index}"class="card-body bg-secondary" style="background-image: url(./assets/imgs/audio.svg);background-repeat: no-repeat;background-position: center;height: 17%;">
                  </div>
                </div>`;
    //let img = `<img class="card-img-top" style="height: 83%" src="${animal.imagen}" alt="Card image cap"/>`;
    //let body = `<div class="card-body bg-secondary" style="background-image: url(./assets/imgs/audio.svg);background-repeat: no-repeat;background-position: center;height: 17%;"></div>`;

    animalList += card;
    div.innerHTML = animalList;

    /* let indice = index;
    let sonido;

    if (animal instanceof Leon) {
      sonido = animal.rugir();
    } else if (animal instanceof Lobo) {
      sonido = animal.aullar();
    } else if (animal instanceof Oso) {
      sonido = animal.grunir();
    } else if (animal instanceof Serpiente) {
      sonido = animal.sisear();
    } else if (animal instanceof Aguila) {
      sonido = animal.chillar();
    } */

    /* console.log(indice);
    console.log(sonido); */
    let boton = document.getElementById(`${index}`);
    boton.addEventListener("click", () => {
      console.log(animal);
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
    /* if (boton) {
      console.log("boton existe");
      boton.addEventListener("click", () => {
        console.log(boton.length);
      });
    } else {
      console.log("boton no existe");
    } */
  });
});
