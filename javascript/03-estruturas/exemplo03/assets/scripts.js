

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tbody = document.querySelector("#tableBody");
numbers.forEach((value,i) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${i}</td><td>${value}</td>`;
    tbody.appendChild(row);
});

const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");
const message = document.querySelector(".message");

searchButton.addEventListener("click", () => {
    console.log("Vou buscar:" + searchInput.value);
    var searchValue = parseInt(searchInput.value);
    var result = numbers.indexOf(searchValue);
    if(result == -1){
        message.textContent = "Número não encontrado";
    } else {
        message.textContent = `Número encontrado na posição ${result}`;
    }
});

//console.log(numbers.indexOf(30));

