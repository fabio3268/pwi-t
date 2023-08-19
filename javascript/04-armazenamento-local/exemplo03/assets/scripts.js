const body = document.querySelector("body");
const btnAdd = document.querySelector('#button-add');
const inputItem = document.querySelector('#input-item');
const ulItems = document.querySelector('#item-list');

ulItems.addEventListener("click", (event) => {
    console.log(event.target.value);
    if(event.target.tagName === "LI"){
        event.target.remove();
    }
    event.stopPropagation();
});

body.addEventListener('click', (event) => {
    console.log("Oi do Body");
});

inputItem.addEventListener("click", (event) => {
     console.log(event.target.value);
     event.stopPropagation();
});

btnAdd.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("Oi do Button");
});

document.querySelector("#div01").addEventListener("click", () => {
    console.log("Oi div 01");
});


