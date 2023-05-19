const input = document.querySelector('input');
let span = document.querySelector('span');
/*
const classes = ['fraca', 'media', 'forte'];
const messages = ['Senha fraca', 'Senha moderada', 'Senha forte'];
*/

function verifyPassword () {

    if(input.value.length <= 5) {
        span.textContent = 'Senha fraca';
        span.setAttribute("class", "fraca");
    } else if(input.value.length > 5 && input.value.length <= 8) {
        span.textContent = 'Senha moderada';
        span.setAttribute("class", "media");
    } else if(input.value.length > 8){
        span.textContent = 'Senha Forte';
        span.setAttribute("class", "forte");
    }

}

input.addEventListener('input', verifyPassword);
