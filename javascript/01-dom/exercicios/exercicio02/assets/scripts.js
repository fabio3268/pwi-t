

const body = document.querySelector("body");

const h1Title = document.createElement("h1");
h1Title.textContent = "Disciplinas";
h1Title.setAttribute("id","title");
console.log(h1Title);
//body.insertAdjacentElement("afterbegin",h1Title);
body.appendChild(h1Title);

const divBox = document.createElement("div");
divBox.setAttribute("id","box");
const spanTitle = document.createElement("span");
spanTitle.setAttribute("id","title");
spanTitle.textContent = "Informática";
const spanContent = document.createElement("span");

divBox.insertAdjacentElement("afterbegin",spanTitle);
console.log(divBox);

//body.insertAdjacentElement("beforeend",divBox);
body.appendChild(divBox);
