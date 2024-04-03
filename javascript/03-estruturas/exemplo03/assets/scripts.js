

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const tbody = document.querySelector("#tableBody");
numbers.forEach((value,i) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${i}</td><td>${value}</td>`;
    tbody.appendChild(row);
});

const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");
const message = document.querySelector(".message");
searchButton.addEventListener("click",() => {
    let resultSearch = numbers.indexOf(parseInt(searchInput.value))
    if(resultSearch == -1) {
        message.innerHTML = "Número não encontrado";
    } else {
        message.innerHTML = `Número encontrado na posição ${resultSearch}`;
    }
});



