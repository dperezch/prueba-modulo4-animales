import { crearAnimal, arrayAnimales } from "./crearAnimal.mjs";
import { reproducirSonidos } from "./reproducirSonidos.mjs";
import { abrirModal } from "./abrirModal.mjs";

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
  /* se actualiza las variables con las rutas de la imagen y el sonido del animal entregados por el archivo json*/
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
    /* Se envía datos a la función que crea la instancia de animal */
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
    /* si no se completaron los datos al presionar el botón, se envía una alerta */
    alert("debes completar todos los campos");
  }

  /* Rellenar la tabla y creación de tarjetas */
  let div = document.getElementById("Animales");
  let animalList = "";
  arrayAnimales.forEach((animal) => {
    let card = `<div class="card mx-3" style="width: 12rem; height: 15rem">
                  <img class="card-img-top" style="height: 83%" src="${animal.img}" alt="Card image cap"/>
                  <div  class="card-body bg-secondary" style="background-image: url(./assets/imgs/audio.svg);background-repeat: no-repeat;background-position: center;height: 17%;">
                  </div>
                </div>`;

    animalList += card;
    div.innerHTML = animalList;
  });

  /* una vez finalizado el relleno de la tabla, se procede a añadir la función de sonido y modal a cada tarjeta */
  reproducirSonidos(arrayAnimales);
  abrirModal(arrayAnimales);
});
