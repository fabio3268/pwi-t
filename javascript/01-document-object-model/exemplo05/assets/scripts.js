
document.querySelector("#title").textContent = "Fábio";
document.querySelector("#box #title").textContent = "Fábio Santos";

//var name =  window.prompt("Digite seu nome:");
//console.log({name});
//console.log(name);
//document.querySelector("#box #title").textContent = "Olá, " + name + "😁!";
//document.querySelector("#content").innerHTML = "<ul><li>PWI</li></ul>";

var limit = Number(window.prompt("Digite quantas disciplinas?"));

for(var i=0; i < limit; i++){
    var subject = window.prompt("Digite uma disciplina: ");
    console.log(subject);
    document.querySelector("#list").innerHTML += `<li>${subject}</li>`;
}
