//alert("Olá");
var i;
for(i = 5; i <= 50; i += 5){
    //console.log(i);
}

var et = document.createElement("div");
et.textContent = "👽";
var et02 = document.createElement("div");
et02.textContent = "👽";
var acum = 0;
var myDiv;
var body = document.querySelector("body");
body.insertAdjacentElement("beforebegin",et);

for(i = 0; i < 10; i++ ){
    acum += 5;
    myDiv = document.createElement("div");
    myDiv.textContent = acum;
    myDiv.setAttribute("id","box");
    body.insertAdjacentElement("beforebegin",myDiv);
}

body.insertAdjacentElement("beforeend",et02);

