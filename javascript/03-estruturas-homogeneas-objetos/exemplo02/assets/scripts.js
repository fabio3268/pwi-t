



const array = [1,2,3,4,30,29,289,292,276];

let i;
for(i = 0; i < array.length; i++){
    //console.log("i: " + i, "conteúdo: " + array[i]);
    // mostrar somente os elementos pares
    //if(array[i] % 2 == 0){
    //    console.log(array[i]);
    //}
    // mostrar somente os índices pares
    if(i % 2 == 0){
        console.log(i, array[i]);
    }
}
console.log("for in");
for (i in array){
    console.log(i, array[i]);
}

