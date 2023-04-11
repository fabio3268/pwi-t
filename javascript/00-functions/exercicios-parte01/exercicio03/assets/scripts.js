





var min = 10;
var max = 15;
var number = Math.floor(Math.random() * (max - min) + min);
console.log(number);
//number = Math.floor(Math.random() * max);
//console.log(number);

function randonNumber (min, max){
    //console.log(min, max);
    return Math.floor(Math.random() * (max - min) + min);
}
var test = randonNumber(10,20);
console.log(test);
