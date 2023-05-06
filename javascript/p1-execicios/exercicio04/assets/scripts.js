const input = document.querySelector('input');
let span = document.querySelector('div');
const classes = ['fraca', 'media', 'forte'];
const messages = ['Senha fraca', 'Senha moderada', 'Senha forte'];

function verifyPassword () {
    // --- trecho 1 ---
    let item = 0;
    console.log(input.value);
    if (input.value.length >= 10){
        item = 2;
        // --- trecho 2 ---
    }
    else if (input.value.length >= 6){
        item = 1;
        // --- trecho 2 ---
    }
}

input.addEventListener('input', verifyPassword);
