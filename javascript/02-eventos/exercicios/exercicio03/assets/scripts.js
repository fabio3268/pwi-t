

const myList = document.querySelector("#myList");
const inputItem = document.querySelector("#item");

document.querySelector("#myButtonInsert").addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.innerHTML = `${inputItem.value}<button class="delete">Excluir</button>`;
    myList.appendChild(newItem);
});

myList.addEventListener("click", (event) => {
    console.log(event.target.tagName);
    if(event.target.tagName == "BUTTON"){
        console.log("Apagar um item");
        console.log();
        event.target.parentElement.remove();
    }
});


