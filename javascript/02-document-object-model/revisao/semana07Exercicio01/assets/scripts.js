const vet =[];
botao = document.querySelector("button");
botao.addEventListener("click", () => {
    if(Number(valor1.value) % 2 === 0) {
        vet.push(valor1.value);
        vet.push(valor2.value);
        console.table(vet);
    }
});
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");