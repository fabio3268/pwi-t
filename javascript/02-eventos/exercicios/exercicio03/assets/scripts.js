

const myList = document.querySelector("#myList");

myList.addEventListener("click", (element) => {
    console.log(element.target.tagName);
    if (element.target.tagName == "BUTTON"){
        console.log("Apaga o item");
        console.log(element.target.parentElement);
        element.target.parentElement.remove();
    }
});


const inputItem = document.querySelector("#item");

document.querySelector("#myButtonInsert").addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.innerHTML = `${inputItem.value}<button class="delete">Excluir</button>`;
    myList.appendChild(newItem);
});
