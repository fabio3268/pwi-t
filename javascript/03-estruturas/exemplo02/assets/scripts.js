



const numbers = [1,2,3,4,30,29,289,292,276];

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        const divEven = document.querySelector("#even");
        const numberEven = document.createElement("div");
        // setar a clas de numberEven para even
        numberEven.setAttribute("class","even");
        // inserir o conteúdo na div
        numberEven.textContent = numbers[i];
        // inserir o elemento numberEven em divEven antes do final
        divEven.insertAdjacentElement("beforeend",numberEven);
    } else {


    }
}