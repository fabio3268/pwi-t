const myDiv = document.querySelector("#area");
function clicou(){
    myDiv.innerHTML = "<strong>Clicou!</strong>";
}

function entrou(){
    myDiv.innerHTML = "<strong>Mouse entrou na DIV!</strong>";
}

function saiu(){
    myDiv.innerHTML = "<strong>Mouse saiu da DIV!</strong>";
}