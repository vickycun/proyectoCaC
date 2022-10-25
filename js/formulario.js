var formulario = document.getElementsByName('contacto')[0],   //[0] Primer elemento, el formulario en si mismo.
    elementos = formulario.elements,                            // Elementos del form, no lo usamos en este script.
    boton = document.getElementById('enviarconsulta')                       // El botón

// --------------------------------------------------------
// Realizamos validaciones
// --------------------------------------------------------
var validarNombre = function (e) {
    // /^[a-zA-ZÀ-ÿ\s]{1,40}$/  - Letras y espacios, pueden llevar acentos. debetener entre 1 y 40 caracteres
    let expReg= /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let FormatoValido=expReg.test(formulario.nombre.value);
    if (formulario.nombre.value == 0 || /^\s+$/.test(formulario.nombre.value) || !(FormatoValido)) {      // Si el campo id="nombre" del form está vacio...
        alert("Completa el campo Nombre correctamente.");
        e.preventDefault();                 // Evita elcomportamiento por defecto
        //https://www.w3schools.com/jsref/event_preventdefault.asp
    }
};

var validarApellido = function (e) {
    // /^[a-zA-ZÀ-ÿ\s]{1,40}$/  - Letras y espacios, pueden llevar acentos.
    let expReg= /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let FormatoValido=expReg.test(formulario.apellido.value);
    if (formulario.apellido.value == 0 || /^\s+$/.test(formulario.apellido.value) || !(FormatoValido)) {      // Si el campo id="apellido" del form está vacio...
        alert("Completa el campo Apellido");
        e.preventDefault();                 // Evita elcomportamiento por defecto
        //https://www.w3schools.com/jsref/event_preventdefault.asp
    }
};

var validarEmail = function (e) {
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var FormatoValido=expReg.test(formulario.email.value);
    if (formulario.email.value == 0 || /^\s+$/.test(formulario.email.value) || !(FormatoValido)) {      // Si el campo id="email" del form está vacio o lleno de espacios en blanco...
        alert("Completa el campo E-mail correctamente.");
        e.preventDefault();                 // Evita elcomportamiento por defecto
        //https://www.w3schools.com/jsref/event_preventdefault.asp
    }
};

var validarComentario = function (e) {
    // ^[0-9A-Za-zñáéíóúÑÁÉÍÓÚüÜ;\.:'\s\-,]+$
    let expReg= /^[0-9a-zA-ZÀ-ÿ;,\.:'\¡\!\¿\?\(\)\-\"\s]{1,400}$/;
    let FormatoValido=expReg.test(formulario.comentario.value);
    if (formulario.comentario.value == 0 || /^\s+$/.test(formulario.comentario.value) || !(FormatoValido)) {      // Si el campo id="comentario" del form está vacio o con espacios en blanco
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

