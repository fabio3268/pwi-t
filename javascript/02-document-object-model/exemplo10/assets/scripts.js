const myDiv = document.createElement('div');
//myDiv.innerHTML = "olá, minha DIV!";
console.log(myDiv);
myDiv.innerHTML = "<h1 id='title'>Disciplinas</h1>";
document.body.insertAdjacentElement('beforeend', myDiv);

const body = document.querySelector("body");
console.log(body);