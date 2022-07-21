const insertName = document.querySelector("#insertName");
const insertBtn = document.querySelector("#insertBtn");
const searchName = document.querySelector("#searchName");
const searchBtn = document.querySelector("#searchBtn");
const vetNames = [];
const result = document.querySelector("#result");

insertBtn.addEventListener("click", () => {
    vetNames.push(insertName.value);
    console.log(vetNames);
});

searchBtn.addEventListener("click", () => {
    if(vetNames.indexOf(searchName.value) === -1){
        result.innerHTML = "Nome não encontrado!";
    } else {
        result.innerHTML = "Nome encontrado!";
    }
})