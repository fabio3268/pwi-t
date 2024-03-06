



const element = document.querySelector("#box #title");
console.log(element);
element.insertAdjacentHTML("beforebegin", "<span class='red'>Oi!</span>");
element.insertAdjacentHTML("afterbegin", "<span class='red'>Oi!</span>");
element.insertAdjacentHTML("beforeend", "<span class='red'>Oi!</span>");
//element.insertAdjacentHTML("afterend", "<span class='red'>Oi!</span>");


const newDiv = document.createElement("div");
newDiv.innerHTML = "Olá";
console.log(newDiv);
element.insertAdjacentElement("afterend", newDiv);