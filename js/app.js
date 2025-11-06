const formulario = document.querySelector('.formulario');
const nombreInput = document.getElementById('nombre');

formulario.addEventListener('submit',function(evento){
evento.preventDefault();
console.log('¡Formulario detenido por JavaScript!');

const nombreUsuario = nombreInput.value.trim();

if(nombreUsuario.length < 3) {
    alert('Por Favor, Ingresa un nombre válido.');
} else {
    alert('¡Nombre Válido!');
}
})

