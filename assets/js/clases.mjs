class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;
  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  get nombre() {
    return this.#nombre;
  }

  get edad() {
    return this.#edad;
  }

  get img() {
    return this.#img;
  }

  set comentarios(nuevo_comentario) {
    this.#comentarios = nuevo_comentario;
  }

  get sonido() {
    return this.#sonido;
  }
}

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  rugir() {
    let audioEtiqueta = document.querySelector("#player");
    audioEtiqueta.setAttribute("src", `${this.sonido}`);
    audioEtiqueta.play();
    console.log(`Reproduciendo: ${audioEtiqueta.src}`);
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  aullar() {
    let audioEtiqueta = document.querySelector("#player");
    audioEtiqueta.setAttribute("src", `${this.sonido}`);
    audioEtiqueta.play();
    console.log(`Reproduciendo: ${audioEtiqueta.src}`);
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  grunir() {
    let audioEtiqueta = document.querySelector("#player");
    audioEtiqueta.setAttribute("src", `${this.sonido}`);
    audioEtiqueta.play();
    console.log(`Reproduciendo: ${audioEtiqueta.src}`);
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  sisear() {
    let audioEtiqueta = document.querySelector("#player");
    audioEtiqueta.setAttribute("src", `${this.sonido}`);
    audioEtiqueta.play();
    console.log(`Reproduciendo: ${audioEtiqueta.src}`);
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  chillar() {
    let audioEtiqueta = document.querySelector("#player");
    audioEtiqueta.setAttribute("src", `${this.sonido}`);
    audioEtiqueta.play();
    console.log(`Reproduciendo: ${audioEtiqueta.src}`);
  }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };
