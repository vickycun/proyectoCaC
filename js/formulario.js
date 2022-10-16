

var formulario = document.getElementsByName('contacto')[0],   //[0] Primer elemento, el formulario en si mismo.
    elementos = formulario.elements,                            // Elementos del form, no lo usamos en este script.
    boton = document.getElementById('enviarconsulta')                       // El botón

// --------------------------------------------------------
// Realizamos validaciones
// --------------------------------------------------------
var validarNombre = function (e) {
    if (formulario.nombre.value == 0) {      // Si el campo id="nombre" del form está vacio...
        alert("Completa el campo Nombre");
        e.preventDefault();                 // Evita elcomportamiento por defecto
        //https://www.w3schools.com/jsref/event_preventdefault.asp
    }
};

var validarApellido = function (e) {
    if (formulario.apellido.value == 0) {      // Si el campo id="apellido" del form está vacio...
        alert("Completa el campo Apellido");
        e.preventDefault();                 // Evita elcomportamiento por defecto
        //https://www.w3schools.com/jsref/event_preventdefault.asp
    }
};

var validarEmail = function (e) {
    if (formulario.email.value == 0) {      // Si el campo id="email" del form está vacio...
        alert("Completa el campo E-mail");
        e.preventDefault();                 // Evita elcomportamiento por defecto
        //https://www.w3schools.com/jsref/event_preventdefault.asp
    }
};

var validarComentario = function (e) {
    if (formulario.comentario.value == 0) {      // Si el campo id="comentario" del form está vacio...
        alert("Completa el campo Comentario");
        e.preventDefault();                 // Evita elcomportamiento por defecto
        //https://www.w3schools.com/jsref/event_preventdefault.asp
    }
};


// --------------------------------------------------------
// Se ejecuta al presionar submit e invoca a las tres validaciones
// --------------------------------------------------------
var validar = function (e) {  // "e" es el evento recibido del form (https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault)
    validarNombre(e);
    validarApellido(e);
    validarEmail(e);
    validarComentario(e);
};

// --------------------------------------------------------
// Espera que se presione "enviar" y llama a "validar"
// submit es un evento DEL FORM, no del botón!
formulario.addEventListener("submit", validar);

