const input = document.querySelector('input');
let span = document.querySelector('div');

function verifyPassword () {

    const password = document.querySelector("span");

    console.log(input.value.length);
    if(input.value.length <= 5){
        password.textContent = "Senha fraca";
        password.setAttribute("class","fraca")
    }

    if(input.value.length > 5 && input.value.length <= 8){
        password.textContent = "Senha moderada";
        password.setAttribute("class","media");
    }

    if(input.value.length >= 12) {
        password.textContent = "Senha forte";
        password.setAttribute("class","forte");
    }


    // --- trecho 1 ---
    /*
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

     */
}

input.addEventListener('input', verifyPassword);
