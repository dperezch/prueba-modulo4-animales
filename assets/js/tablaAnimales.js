const tablaAnimales = (arrayAnimales) => {
  let tabla = $("#animales");
  arrayAnimales.forEach((element) => {
    let card = `<div class="card" style="width: 12rem; height: 15rem">
    <img
      class="card-img-top"
      style="height: 83%"
      src="${element.imagen}"
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
    ></div>
  </div>`;

    tabla.append(card);
  });
};

export { tablaAnimales };
