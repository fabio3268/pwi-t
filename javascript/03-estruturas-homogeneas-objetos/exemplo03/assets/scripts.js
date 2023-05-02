



const array = [1,2,3,4,30,29];
console.table(array);
array.push(200);
console.table(array);
console.log(array.indexOf(300));
const value = Number(window.prompt("Digite um valor"));

const find = array.indexOf(value);
if(find == -1){
    console.log("Não existe");
} else {
    console.log(`O valor mora na casinha ${find}`);
}

