const body = document.querySelector("body");
const btnAdd = document.querySelector('#button-add');
const inputItem = document.querySelector('#input-item');
const ulItems = document.querySelector('#item-list');

body.addEventListener('click', (event) => {
    console.log("Oi do Body");
});

/*inputItem.addEventListener("click", (event) => {

});*/

btnAdd.addEventListener('click', (event) => {
    console.log("Oi do Button");
});

document.querySelector("#div01").addEventListener("click", () => {
    console.log("Oi div 01");
});
