var myDiv = document.createElement("div");
console.log(myDiv);
myDiv.textContent = "Programação Web I";
myDiv.setAttribute("id","box");

document.querySelector("body").insertAdjacentElement(
    "afterbegin",
    myDiv
);
