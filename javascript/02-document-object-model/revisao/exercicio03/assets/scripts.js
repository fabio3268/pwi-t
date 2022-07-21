const name = document.querySelector("#name");
const sayHello = document.querySelector("#sayHello");
const yearBorn = document.querySelector("#yearBorn");
const result = document.querySelector("#result");

sayHello.addEventListener("click",() => {
    const age = 2022 -  Number(yearBorn.value);
    console.log (`Olá, ${name.value}! Você tem ${age}.`);
    result.innerHTML = `Olá, ${name.value}! Você tem ${age}.`;
});