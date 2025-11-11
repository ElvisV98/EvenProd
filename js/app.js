
// Contenedor de seguridad: Espera a que todo el HTML esté listo
document.addEventListener('DOMContentLoaded', function() {

// constantes para llamar los campos del formulario.

const formulario = document.querySelector('.formulario'); /// cuando tiene el punto al inicio indica la clase "class = formulario"
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const tipoeventoInput = document.getElementById ('tipo-evento');
const mensajeInput = document.getElementById ('mensaje');



// Constantes para el menú
const botonMenu = document.getElementById('menu-hamburguesa');
const menuNavegacion = document.getElementById('menu-navegacion');
const menuLinks = document.querySelectorAll('.menu-navegacion a'); ///querySelectorAll es un selector que, a diferencia de getElementById, puede "agarrar" múltiples elementos a la vez.



if (formulario) { // (Nos aseguramos de que el formulario exista antes de escucharlo)
    formulario.addEventListener('submit',function(evento){
    evento.preventDefault(); /// con esto detiene el envio del formulario
    console.log('¡Formulario detenido por JavaScript!');


    // Obtenemos los valores
    const nombreUsuario = nombreInput.value.trim(); /// trim es un limpiador de espacios
    const emailUsuario = emailInput.value.trim();
    const telefonoUsuario = telefonoInput.value.trim();
    const tipoEventoUsuario = tipoeventoInput.value.trim();
    const mensajeUsuario = mensajeInput.value.trim();



    // VALIDACION 1 : NOMBRE 

    if(nombreUsuario.length < 3) { ///nombreUsuario.length comprueba cuántos caracteres tiene el nombre.
        alert('Por Favor, Ingresa un nombre válido.');
    } 



    // VALIDACION 2 : EMAIL
    else if (emailUsuario === '') {
        alert('El campo de email no puede estar vacio.'); // validamos primero que el campo email no este vacio    
    }

    else if (!esEmailValido(emailUsuario)) { // Usamos '!' para decir que no es un email valido, el '!' significa NO
        alert ('El formato del email no es valido')

    }


    //VALIDACION 3 : NUMERO TELEFONICO

    else if (telefonoUsuario.length > 0 && isNaN(telefonoUsuario)) { //Si el usuario escribió algo (largo > 0) Y ADEMÁS no es un número.
        alert(' El teléfono solo debe contener números.');//&&: Este operador significa "Y ADEMÁS". Ambas condiciones deben ser verdaderas.
    }

    else if (telefonoUsuario.length > 0 && telefonoUsuario.length <8) { // Si el usuario escribió algo (largo > 0) Y ADEMÁS es muy corto.
        alert('El telefono debe tener al menos 8 dígitos'); //&&: Este operador significa "Y ADEMÁS". Ambas condiciones deben ser verdaderas.
    }


    // VALIDACION 4 : TIPO DE EVENTO 

    else if (tipoEventoUsuario === '') {
        alert (' Por favor, Selecciona un tipo de evento');
    }

    // VALIDACION 5 : MENSAJE
    
    else if (mensajeUsuario.length < 10) {
        alert(' Por favor, Escribe un mensaje más detallado');

    }

    //DECISION FINAL
    else{
        alert('¡Gracias! Tu formulario ha sido enviado.');
    
        formulario.submit();// ¡LE DAMOS PERMISO MANUALMENTE PARA SEGUIR!    
        formulario.reset();//Limpiamos todos los campos del formulario.
        }
    });
} // --- LISTENER PARA EL FORMULARIO (FIN) ---



///////////////////////////////////////////////////////////////////////////////////


if (botonMenu && menuNavegacion){ // LISTENER PARA EL MENÚ HAMBURGUESA (INICIO) ---
    botonMenu.addEventListener('click', function(){
        console.log('¡Clic en la hamburguesa'); //depuramos
        menuNavegacion.classList.toggle('visible');
    });

}// --- LISTENER PARA EL MENÚ HAMBURGUESA (FIN) ---


if (menuLinks.length > 0) {

    menuLinks.forEach(function(link){
        link.addEventListener('click',function(){
            console.log ('Clic en un enlace del menu, cerrando...');
            menuNavegacion.classList.remove('visible');
        });
    });
}


}); // --- CIERRE DEL 'DOMContentLoaded'



// CON ESTA FUNCION COMPROBAMOS SI EL CAMPO EMAIL ES UN CORREO VALIDO
function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /// funcion regex generica para validar si es un email
    return regex.test(email);
}



