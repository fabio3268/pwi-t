const arrayFruits = ['batata','laranja','morango','abacaxi'];

const inputFruit = document.querySelector("#fruit");
const button = document.querySelector("button");

function search (e) {
    console.log(e);
    if(inputFruit.value === e){
        document.querySelector(".resultSearch").textContent = "Encontrada";
    }
}

function searchFruit () {
    document.querySelector(".resultSearch").textContent = "Não Encontrada";
    arrayFruits.forEach(search);
}

button.addEventListener("click",searchFruit);

