const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
let messageError = document.getElementById('message-error');
let containerMessage = document.getElementById('message-container');
let containerCheck = document.getElementById('message-check');

const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "email":
            validarCampo(expresiones.correo, e.target, 'email')
    }
}

const campos = {
    correo: false
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        containerMessage.classList.remove('view-error');
        campos[campo] = true;
    } else {
        containerMessage.classList.add('view-error');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.correo = true) {
        formulario.reset();
        containerCheck.classList.add('view-check');
        setTimeout(() => {
            containerCheck.classList.remove('view-check');
        }, 3000);
    } else {
        messageError.value = "!Oops please add your email";
    }
});