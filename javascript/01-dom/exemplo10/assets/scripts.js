

/*const div = document.querySelector("div");
div.textContent = " - " + div.textContent;
console.log(div);*/

const divList = document.querySelectorAll("div");
console.log(divList);
divList.forEach((element,index) => {
    element.textContent = " - " + element.textContent;
    //console.log(element.id);
});

document.querySelector("#buttonBlue").addEventListener("click", () => {
    divList.forEach((element) => {
        console.log(element);
        element.classList = "blue";
    });
});

document.querySelector("#buttonRed").addEventListener("click", () => {
    divList.forEach((element) => {
        console.log(element);
        element.classList = "red";
    });
});