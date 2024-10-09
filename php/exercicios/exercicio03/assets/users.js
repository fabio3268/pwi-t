const button = document.querySelector("button");
const ulUsers = document.querySelector("ul");
button.addEventListener("click", async () => {
    console.log("OI");
    const response = await fetch("api/users.php");
    const users = await response.json();
    console.log(users);
    ulUsers.textContent = "";
    users.forEach((user) => {
        console.log(user.name, user.age);
        liUser = document.createElement("li");
        liUser.textContent = `${user.name} - ${user.age}`;
        console.log(liUser);
        ulUsers.appendChild(liUser);
    });
});