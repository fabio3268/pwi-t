//alert("Olá, Mundo!");





let name = window.prompt("Informe seu nome:");
let age = Number(window.prompt("Informe sua idade:"));
console.log(name);
//document.querySelector("#content").innerHTML =
// "Olá, " + name + "! Seja Bem-vindo";
document.querySelector("#content").innerHTML =
    `Olá, ${name}! Seja Bem-vindo! Sua idade é ${age + 5}...`;