let propertyList = [
    {
        description : "Casa",
        price : 100000
    },
    {
        description : "Apartamento",
        price : 300000
    }
];


const inputDescription = document.querySelector("#description");
const inputPrice = document.querySelector("#price");
const buttonInclude = document.querySelector("#btnInclude");
const divContainer = document.querySelector("#list-container");

function insertProperty () {
    console.log(inputDescription.value, inputPrice.value);
    let divProperty = document.createElement("div");
    divProperty.setAttribute("class","property-item");
    divProperty.textContent = `${inputDescription.value} - R$ ${ parseFloat(inputPrice.value)}`;
    divContainer.insertAdjacentElement("beforeend",divProperty);

    let newPropertyObj = {
        description : inputDescription.value,
        price : parseFloat(inputPrice.value)
    }
    propertyList.push(newPropertyObj);
    console.table(propertyList);
}

buttonInclude.addEventListener("click", insertProperty);

const btnAverage = document.querySelector("#btnAverage");
const btnExpensive = document.querySelector("#btnExpensive");
const result = document.querySelector("#result");

function averageCalc () {
    console.log("Média");
    let i;
    let sum = 0;
    for(i in propertyList){
        console.log(propertyList[i].price, i);
        sum = sum + parseFloat(propertyList[i].price);
    }
    i = parseInt(i)+1;
    console.log(sum,i, sum / i);
    result.textContent = "R$ " + parseFloat(sum / i);
}

function expensiveCalc () {
    console.log("Mais Caro");
}

btnAverage.addEventListener("click", averageCalc);

btnExpensive.addEventListener("click", expensiveCalc)
