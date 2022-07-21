const item = document.querySelector("#item");
const buttonInsert = document.querySelector("button");
const list = document.querySelector("#list");

buttonInsert.addEventListener("click", () => {
    console.log(item.value);
    const itemLi = document.createElement("li");
    itemLi.innerHTML = item.value;
    list.insertAdjacentElement("afterbegin",itemLi);
})