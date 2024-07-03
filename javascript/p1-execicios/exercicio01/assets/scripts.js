


let vetSalary = [];
// 1) Selecionar os elementos
const inputSalary = document.querySelector("#salary");
const btnAdd = document.querySelector("#btnAdd");

// 3) desenvolver a função responsável pela ação
function addSalary (){
    //console.log("Oi");
    vetSalary.push(inputSalary.value);
    //console.log(vetSalary);
}

// 2) descobrir o evento da ação e qual elemento o evento se vincula
btnAdd.addEventListener("click",addSalary);

// 1) Selecionar os elemento
const btnHigher = document.querySelector("#btnHigher");
const divhigher = document.querySelector("#higher");

// 3) desenvolver a função responsável pela ação
var max = 0;
function maxSalary(e,i,array){
    if(parseInt(e) > parseInt(max)){
        max = e;
        divhigher.textContent = `${i} - ${max}`;
    }
    //console.log(e , max);
}
function higherSalary () {
    //console.log("Oi");
    vetSalary.forEach(maxSalary);
}

// 2) descobrir o evento da ação e qual elemento o evento se vincula
btnHigher.addEventListener("click",higherSalary);

// 1) Selecionar os elemento
const btnShow = document.querySelector("#btnShow");
const ul = document.querySelector("#show");

function showline (e,i,array){
    const li = document.createElement("li");
    li.textContent = e;
    ul.insertAdjacentElement("beforeend",li);
}

function showSalaries (){
    //console.log("Oi");
    ul.innerHTML = "";
    vetSalary.forEach(showline);
}

btnShow.addEventListener("click",showSalaries);
