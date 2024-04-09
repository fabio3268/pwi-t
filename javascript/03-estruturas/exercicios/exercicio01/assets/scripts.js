
const numbers = [];

const divRow = document.createElement("div");
divRow.setAttribute("class","row");

document.querySelector("#insert").addEventListener("click", () => {
    const divRow = document.createElement("div");
    divRow.setAttribute("class","row");
    divRow.innerHTML = `<span>0</span><span>1</span>`;
    document.querySelector("body").appendChild(divRow);
});