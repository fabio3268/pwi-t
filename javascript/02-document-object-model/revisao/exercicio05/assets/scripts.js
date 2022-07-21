const item = document.querySelector("#item");
const btnInsert = document.querySelector("#btnInsert");
const btnShow = document.querySelector("#btnShow");
const list = document.querySelector("#list");
const vetItens = [];

btnInsert.addEventListener("click", () => {
    vetItens.push(item.value);
    console.log(vetItens);
});

btnShow.addEventListener("click", () => {
    vetItens.forEach(function (e,i) {
        //console.log(`${e} ${i}`);
        list.insertAdjacentHTML("afterbegin",`<li>${i} - ${e}</li>`);
    });
});