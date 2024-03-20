


const prodValue01 = document.querySelector("#n1");
const prodValue02 = document.querySelector("#n2");
const prodResult = document.querySelector("#result");

function mult ()  {
    var result = 0;
    result = parseInt(prodValue01.value) * parseInt(prodValue02.value);
    if(isNaN(result)){
        prodResult.textContent = "Erro";
    } else {
        prodResult.textContent = result;
    }

}

prodValue01.addEventListener("input", mult);
prodValue02.addEventListener("input", mult);

