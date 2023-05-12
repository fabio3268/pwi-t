const arrayFruits = ['batata','laranja','morango','abacaxi'];
const inputFruit = document.querySelector('#fruit');
const btnSearchFruit = document.querySelector('button');
const spanResult = document.querySelector('.resultSearch');

/*function searchFruits (fruit, index, array) {
    console.log("oi " + fruit);
    if(fruit === inputFruit.value) {
        spanResult.innerHTML = 'Encontrado';
    }
}*/

function clickSearchFruits () {
    /*spanResult.innerHTML = 'Não encontrado';
    arrayFruits.forEach(searchFruits);*/
    if(arrayFruits.indexOf(inputFruit.value) !== -1) {
        spanResult.innerHTML = 'Fruta Encontrada!';
    } else {
        spanResult.innerHTML = 'Fruta Não Encontrada!';
    }
}

btnSearchFruit.addEventListener('click', clickSearchFruits);
