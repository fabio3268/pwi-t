
const button = document.querySelector("button");
button.addEventListener("click", async () => {
    console.log("OI");
    const response = await fetch("api/users.php");
    const users = await response.json();
    console.log(users);
    users.forEach((user) => {
        console.log(user);
    });
});