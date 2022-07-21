const name = document.querySelector("#name");
const sayHello = document.querySelector("#sayHello");
const result = document.querySelector("#result");

sayHello.addEventListener("click",() => {
    console.log (`Olá, ${name.value}!`);
    result.innerHTML = `Olá, <b>${name.value}!</b>`;
});