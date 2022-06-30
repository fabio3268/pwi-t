document.querySelector("#box #content").innerHTML =
   "<h1>Olá</h1>";
document.querySelector("#box #content").innerHTML =
    "<ul>" +
        "<li>Programação Web I</li>" +
        "<li>Programação Web II</li>" +
        "<li>Desenvolvimento de Aplicações</li>" +
    "</ul>";

const element = document.querySelector("#box #title");
console.log(element);
element.insertAdjacentHTML(
    'beforebegin',
    '<span class="red">Antes do elemento!</span>'
);
element.insertAdjacentHTML(
    'afterend',
    '<span class="red">Depois do elemento!</span>'
);

element.insertAdjacentHTML(
    'afterbegin',
    '<span class="red">Depois do início do elemento!</span>'
);

element.insertAdjacentHTML(
    'beforeend',
    '<span class="red">Antes do fim do elemento!</span>'
);