





function isPrime (value){
    for(i = 2; i < value; i++){
        if(value % i == 0){
            return "Não primo";
        }
    }
    return "É primo";
}

console.log(isPrime(13));
