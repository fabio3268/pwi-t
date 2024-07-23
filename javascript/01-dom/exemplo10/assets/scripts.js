

/*const div = document.querySelector("div");
div.textContent = " - " + div.textContent;
console.log(div);*/

const divList = document.querySelectorAll("div");
console.log(divList);
divList.forEach((element,index) => {
    element.textContent = " - " + element.textContent;
    //console.log(element.id);
});