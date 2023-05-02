




const myArray = [1,2,3,4,30,29];
console.table(myArray);
function show (e, i, array){
    //console.log("Olá, Mundo!");
    console.log(i, e);
    console.table(array);
}
//show();
myArray.forEach(show);
