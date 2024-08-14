


const usersList = JSON.parse(localStorage.getItem("usersList"));

const listUsersContainer = document.querySelector(".container");

usersList.forEach((user, index) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `
        <span class="name">${user.name}</span>
        <span class="email">${user.email}</span>
        <span class="remove"><button userIndex="${index}">X</button></span>
        `;
    listUsersContainer.appendChild(userDiv);
});

document.querySelectorAll(".remove").forEach((element) => {
    element.addEventListener("click", (event) => {
        console.log(`Remover: ${event.target.getAttribute("userIndex")}` );
        // remover uma posição específica da listUsers
        usersList.splice(event.target.getAttribute("userIndex"), 1);
        console.log(usersList);
    })
});