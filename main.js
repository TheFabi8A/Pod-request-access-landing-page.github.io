const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
let messageError = document.getElementById('message-error');
let containerMessage = document.getElementById('message-container');
let containerCheck = document.getElementById('message-check');
let containerAdd = document.getElementById('container-add');
let btnSubmit = document.getElementById('btn-submit');

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
        messageError.setAttribute('value', '!Oops please check your email');
        campos[campo] = true;
    } else {
        containerMessage.classList.add('view-error');
        messageError.setAttribute('value', '!Oops please check your email');
        campos[campo] = false;
    }

    if (input.value.length == 0) {
        containerMessage.classList.remove('view-error');
    }

    btnSubmit.addEventListener('click', () => {
        if (input.value.length == 0) {
            containerMessage.classList.add('view-error');
            messageError.setAttribute('value', '!Oops please add your email');
        }
    });
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
        }, 5000);
    } else {
    }
});