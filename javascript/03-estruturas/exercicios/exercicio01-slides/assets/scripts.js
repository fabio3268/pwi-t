let arrayNumbers = [];
let randonNumber;
let arrayNumber = [];

for(let i = 0; i <= 99; i++){
    randonNumber = Math.floor((Math.random() * 100));
    arrayNumbers.push(randonNumber);
}
console.table(arrayNumbers);
//console.table(arrayNumbers.slice(5,95));
arrayNumber = arrayNumbers.slice(5,95);
console.table(arrayNumber);
const myTable = document.querySelector("#myTable");
//let tr = document.createElement("tr");
//let td = document.createElement("td");
//td.textContent = 1;
//tr.insertAdjacentElement("beforeend",td);
//td = document.createElement("td");
//td.textContent = 2;
//tr.insertAdjacentElement("beforeend",td);
arrayNumber.sort((a,b) => a - b);
let tr;
let td;
let cont = 0;
for (let i = 0; i <= 8; i++){
    tr = document.createElement("tr");
    for (let j = 0; j <= 9; j++){
        td = document.createElement("td");
        td.textContent = arrayNumber[cont++];
        tr.insertAdjacentElement("beforeend",td);
    }
    myTable.insertAdjacentElement("beforeend",tr);
}

