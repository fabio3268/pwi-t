let randonNumber = [];
let numbers = [];
const num = Math.round(Math.random() * 100);

for (let i = 0; i < 100; i++){
    randonNumber.push(Math.round(Math.random() * 100));
}
//console.table(randonNumber);
// randonNumber = randonNumber.slice(5,95);
numbers = randonNumber.slice(5,95);
numbers.sort((a,b) => a-b);
console.table(numbers);
const myTable = document.querySelector("table");


let cont = 0;
for(let i = 0; i < 9; i++ ){
    let tr = document.createElement("tr");
    myTable.insertAdjacentElement("beforeend",tr);
    for (let j = 0; j < 10; j++){
        let td = document.createElement("td");
        td.textContent = numbers[cont++];
        tr.insertAdjacentElement("beforeend",td);
    }
}

console.log(myTable);






