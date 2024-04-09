

const myList = document.querySelector("#myList");




const inputItem = document.querySelector("#item");

document.querySelector("#myButtonInsert").addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.innerHTML = `${inputItem.value}<button class="delete">Excluir</button>`;
    myList.appendChild(newItem);
});
