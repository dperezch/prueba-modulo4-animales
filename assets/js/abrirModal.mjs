/* Recibe como parámetro el array de animales */
const abrirModal = (arrayAnimales) => {
  /* querySelectorAll no estrega una lista de nodos en un arreglo, en este caso las imágenes <img/>
    de todas las tarjetas existentes en el contenedor #Animales */
  let imagenCards = document.querySelectorAll("#Animales>div>img");
  //console.log(imagenCards);
  arrayAnimales.forEach((animal, index) => {
    let modalBody = document.querySelector(".modal-body");
    /* como el array imagenCards está directamente relacionado al arrayAnimales, utilizaremos el index de este último para capturar
    la información necesaria del animal y con esta crear y activar el modal*/
    imagenCards[index].addEventListener("click", () => {
      let body = `<img src="${animal.img}" style="width: 100%;" />
                    <div class="text-white text-center mt-2"><strong> ${animal.edad}</strong> </div>
                    <div class="text-white text-center"><strong> Comentarios:</strong> </div>
                    <div class="text-white text-center my-3"> ${animal.comentarios} </div>`;

      modalBody.innerHTML = body;
      $("#exampleModal").modal("show");
    });
  });
};

export { abrirModal };
