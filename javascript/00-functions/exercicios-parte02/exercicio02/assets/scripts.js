





function sumValues (value){
    let sum = 0;
    for(let i = 1; i <= value; i++){
       sum = sum + i;
    }
    return sum;
}

console.log(sumValues(2));
console.log(sumValues(3));
console.log(sumValues(46));
console.log(sumValues(10000));
