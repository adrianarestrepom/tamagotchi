const botonInicio = document.getElementById("botonInicio");
const botonDormir = document.getElementById("botonDormir");
const botonComer = document.getElementById("botonComer");
const botonEstirar = document.getElementById("botonEstirar");
const botonPensar = document.getElementById("botonPensar");
const imagen = document.getElementById("imagen");
const valorEnergia = document.getElementById("energia");
const estadoElemento = document.getElementById("estado");
const estado = "";
const energia = 100;

const tamagotchi = {
  estado: "Feliz",
  energia: 100,

  comer: function () {
    this.estado = "Satisfecho";
    this.energia += 10;
    actualizarEnergia();
    actualizarEstado();
    activarBotones();
  },
  dormir: function () {
    this.estado = "Descansando";
    this.energia += 20;
    actualizarEnergia();
    actualizarEstado();
    activarBotones();
  },
  ejercitarse: function () {
    this.estado = "Estirando";
    this.energia -= 15;
    actualizarEnergia();
    actualizarEstado();
  },
  pensar: function () {
    this.estado = "Programando";
    this.energia -= 5;
    actualizarEnergia();
    actualizarEstado();
  },
  morir: function () {
    this.estado = "Sin Energia";
    this.energia = 0;
    desactivarBotones();
    actualizarEstado();
  },
};

actualizarEstado(); // Actualiza el estado inicial
actualizarEnergia(); // Actualiza la energía inicial

botonInicio.addEventListener("click", function () {
  imagen.src = `./assests/Bienvenida.gif`;
});

botonDormir.addEventListener("click", function () {
  imagen.src = `./assests/poohDormido.gif`;
  tamagotchi.dormir();
});

botonComer.addEventListener("click", function () {
  imagen.src = `./assests/poohComiendo.gif`;
  tamagotchi.comer();
});
botonEstirar.addEventListener("click", function () {
  imagen.src = `./assests/poohEstirando.gif`;
  tamagotchi.ejercitarse();
});
botonPensar.addEventListener("click", function () {
  imagen.src = `./assests/poohPensando.gif`;
  tamagotchi.pensar();
});

function actualizarEstado() {
  estadoElemento.textContent = tamagotchi.estado;
}

function actualizarEnergia() {
  valorEnergia.textContent = tamagotchi.energia;
  if (tamagotchi.energia <= 0) {
    tamagotchi.morir();
  }
}

function desactivarBotones() {
  botonEstirar.disabled = true;
  botonPensar.disabled = true;
  botonComer.disabled = false;
  botonDormir.disabled = false;
}

function activarBotones() {
  botonEstirar.disabled = false;
  botonPensar.disabled = false;
}

setInterval(function () {
  imagen.src = `./assests/Bienvenida.gif`;

  if (tamagotchi.energia > 0) {
    tamagotchi.energia -= 10;
    actualizarEnergia();
  }
}, 5000);
