



var report = [
    [9,7,6.5],
    [9.8,9,8.5]
];

console.log(report);

//report[0][0] = 10;
console.log(report[0][0]); // L C
//report[0][1] = 10;
console.log(report[0][1]);

console.table(report);


//report[1][2] = 10;

//console.log(report[1][2]);
//console.table(report);

/*for(let c = 0; c <= 2; c++){
    console.log(report[0][c]);
}

for(let c = 0; c <= 2; c++){
    console.log(report[1][c]);
}*/


const trFirst = document.querySelector("#first");
const trSecond = document.querySelector("#second");

for(let l = 0; l <= 1; l++){
    for(let c = 0; c <= 2; c++){
        console.log(report[l][c]);
        const td = document.createElement("td");
        td.textContent = report[l][c];
        console.log(td);
        if(l == 0) {
            trFirst.appendChild(td);
        } else {
            trSecond.appendChild(td);
        }
    }
}