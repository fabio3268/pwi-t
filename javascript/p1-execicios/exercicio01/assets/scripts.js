// 1) Selecionar os elementos
let vetSalary = [];
const inputSalary = document.querySelector("#salary");
const buttonAddSalary = document.querySelector("#btnAdd");

// 3) desenvolver a função responsável pela ação
function addSalary () {
    console.log(inputSalary.value);
    vetSalary.push(inputSalary.value);
    console.log(vetSalary);
}

// 2) descobrir o evento da ação e qual elemento o evento se vincula

buttonAddSalary.addEventListener("click",addSalary);

// 1) Selecionar os elementos
const buttonHigher = document.querySelector("#btnHigher");
const divHigher = document.querySelector("#higher");

// 3) desenvolver a função responsável pela ação
let rich = 0;
function maxSalary (e, i, array) {
    if(parseInt(e) > parseInt(rich)){
        rich = e;
        divHigher.textContent = `${i} - ${e}`;
    }
}
function showHigher () {
    vetSalary.forEach(maxSalary);
}

// 2) descobrir o evento da ação e qual elemento o evento se vincula
buttonHigher.addEventListener("click",showHigher);

// 1) Selecionar os elementos
const buttonShow = document.querySelector("#btnShow");
const listSalaries = document.querySelector("#show");

/*const li = document.createElement("li");
li.textContent = 2000;
listSalaries.insertAdjacentElement("beforeend",li);*/

function salaryIncludeList (e,i,array) {
    console.log(e);
    const li = document.createElement("li");
    li.textContent = e;
    listSalaries.insertAdjacentElement("beforeend",li);
}

function showSalaryList () {
    listSalaries.innerHTML = "";
    vetSalary.forEach(salaryIncludeList);
}

buttonShow.addEventListener("click",showSalaryList);



