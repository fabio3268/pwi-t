



const numbers = [1,2,3,4,30,29,289,292,276];

const divEven = document.querySelector("#even");
const divOdd = document.querySelector("#odd");

numbers.forEach((e) => {
    const divNumber = document.createElement("div");
    divNumber.textContent = e;
    if(e % 2 == 0) {
        divNumber.setAttribute("class","even");
        divEven.appendChild(divNumber);
    } else {
        divNumber.setAttribute("class","odd");
        divOdd.appendChild(divNumber);
    }
});

/*
for (let i = 0; i < numbers.length; i++){
    const divNumber = document.createElement("div");
    divNumber.textContent = numbers[i];
    if(numbers[i] % 2 == 0){
        divNumber.setAttribute("class","even");
        divEven.appendChild(divNumber);
    } else {
        divNumber.setAttribute("class","odd");
        divOdd.appendChild(divNumber);
    }
}*/


console.table(numbers);
numbers.forEach((e,i,arr) => {
    console.log(`${i} - ${e}`);
    arr[i] = arr[i] + 2;
});
console.table(numbers);
