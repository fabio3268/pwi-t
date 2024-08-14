


const usersList = JSON.parse(localStorage.getItem("usersList"));

const listUsersContainer = document.querySelector(".container");

usersList.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `<span class="name">${user.name}</span>
        <span class="email">${user.email}</span>`;
    listUsersContainer.appendChild(userDiv);
});