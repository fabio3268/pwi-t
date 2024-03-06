


var times = Number(window.prompt("Informe quantos itens: "));
console.log(times);

for(let i = 1; i <= times; i++) {
    //document.querySelector("#list").innerHTML =
    //    document.querySelector("#list").innerHTML + `<li>Item ${i}</li>`;
    document.querySelector("#list").innerHTML += `<li>Item ${i}</li>`;
    console.log(`<li>Item ${i}</li>`);
}
