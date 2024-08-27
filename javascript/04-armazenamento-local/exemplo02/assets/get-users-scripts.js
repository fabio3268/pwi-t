


const usersList = JSON.parse(localStorage.getItem("usersList"));
const listUsersContainer = document.querySelector(".container");

function showListUsers () {
    listUsersContainer.innerHTML = "";
    usersList.forEach((user, index) => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.innerHTML = `
        <span class="name">${user.name}</span>
        <span class="email">${user.email}</span>
        <span class="remove"><button userIndex="${index}">X</button></span>
        <span class="update"><button class="update">A</button></span>
        `;
        listUsersContainer.appendChild(userDiv);
    });
}

function eventsUsers () {
    document.querySelectorAll("button").forEach((element) => {
        element.addEventListener("click", (event) => {
            console.log(`Remover: ${event.target.getAttribute("userIndex")}` );
            // remover uma posição específica da listUsers
            usersList.splice(event.target.getAttribute("userIndex"), 1);
            console.log(usersList);
            // Atualiza a lista na LocalStorage
            showListUsers();
            // Adiciona os eventos de click nos botões de remover,
            // a função chama ela mesma para atualizar os eventos
            eventsUsers();
        })
    });
}

// Lista os usuários que estão na lista vinda da LocalStorage
showListUsers();
// Adiciona os eventos de click nos botões de remover
eventsUsers();

document.querySelector(".close").addEventListener('click', () => {
    document.querySelector("#userModal").classList.toggle("modal");
});