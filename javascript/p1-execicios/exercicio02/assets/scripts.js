let vetNames = [];
const inputName = document.querySelector("#name");
const inputSearchName = document.querySelector("#searchName")
const buttonAdd = document.querySelector("#btnAdd");
const buttonSearch = document.querySelector("#btnSearch");

function addName () {
    vetNames.push(inputName.value);
    console.log(vetNames);
}

buttonAdd.addEventListener("click",addName);

function searchName (){
    console.log(vetNames.indexOf(inputSearchName.value));
    const divResult = document.querySelector("#result");
    divResult.innerHTML = "";
    if(vetNames.indexOf(inputSearchName.value) === -1){
        divResult.textContent = "Não encontrado!";
    } else {
        divResult.textContent = `Encontrado na pos ${vetNames.indexOf(inputSearchName.value)}`;
    }
}

buttonSearch.addEventListener("click",searchName);
