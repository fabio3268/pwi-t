let value = Number(prompt('Informe seu nome:'));
document.querySelector('#box #content').innerHTML =
    `Bem-vindo, ${value}!`;
document.querySelector("#title").innerHTML =
    `O resultado é: ${4 + 4 + value}`;