let nro = Number(prompt("Informe número de itens"));
console.log(nro);
let i = 0;
for (i = 1; i <= nro; i++){
    document.querySelector("#content").innerHTML += `<li>Item ${i}</li>`;
}