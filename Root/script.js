
const botonDormir = document.getElementById('botonDormir');
const botonComer = document.getElementById('botonComer');
const botonEstirar = document.getElementById('botonEstirar');
const botonPensar = document.getElementById('botonPensar');
const botonInicio = document.getElementById('botonInicio');
const imagen = document.getElementById('imagen');


// Agrega manejadores de eventos a los botones
botonInicio.addEventListener('click', function() {
    imagen.src = `./assests/Bienvenida.gif`; // Cambia la ruta por la ruta real de tu imagen
});

botonDormir.addEventListener('click', function() {
    imagen.src = `./assests/poohDormido.gif`; // Cambia la ruta por la ruta real de tu imagen
});

botonComer.addEventListener('click', function() {
    imagen.src = `./assests/poohComiendo.gif`; // Cambia la ruta por la ruta real de tu imagen
});

botonEstirar.addEventListener('click', function() {
    imagen.src = `./assests/poohEstirando.gif`; // Cambia la ruta por la ruta real de tu imagen
});

botonPensar.addEventListener('click', function() {
    imagen.src = `./assests/poohPensando.gif`; // Cambia la ruta por la ruta real de tu imagen
});


