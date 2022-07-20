const myDiv = document.querySelector("#area");

myDiv.addEventListener("click",clicou => {
    myDiv.innerHTML = "<strong>Clicou!</strong>";
});
myDiv.addEventListener("mouseenter",entrou => {
    myDiv.innerHTML = "<strong>Mouse entrou na DIV!</strong>";
});
myDiv.addEventListener("mouseleave",saiu => {
    myDiv.innerHTML = "<strong>Mouse saiu da DIV!</strong>";
});

//function clicou(){

//}

//function entrou(){

//}

//function saiu(){

//}