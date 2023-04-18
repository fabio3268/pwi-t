



const item = document.querySelector("#item");
const buttonInsert = document.querySelector("#myButtonInsert");
const myList = document.querySelector("#myList");

function insertItem (){
    console.log(item.value);
    const newItem = document.createElement("li");
    newItem.textContent = item.value;
    console.log(newItem);
    myList.insertAdjacentElement("afterbegin",newItem);
}

buttonInsert.addEventListener("click",insertItem);
