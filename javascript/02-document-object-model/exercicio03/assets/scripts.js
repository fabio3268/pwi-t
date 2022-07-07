const myH1 = document.createElement("h1");
myH1.innerHTML = "Disciplinas";
myH1.id = "title";

const myDiv = document.createElement("div");
//myDiv.innerHTML = "Teste";
myDiv.id = "box";

const mySpan = document.createElement("span");
mySpan.innerHTML = "Informática";
mySpan.id = "title";

const mySpan02 = document.createElement("span");
mySpan02.innerHTML = "Lista";
mySpan02.id = "content";

document.body.insertAdjacentElement('beforeend', myH1);
myH1.insertAdjacentElement("afterend", myDiv);
myDiv.insertAdjacentElement("beforeend",mySpan);
mySpan.insertAdjacentElement("afterend",mySpan02);

console.log(mySpan);