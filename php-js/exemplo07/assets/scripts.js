
const formUser = document.querySelector("#formUser");
formUser.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = "api/user-insert.php";
    const formData = new FormData(formUser);
    console.log(formData.get("name"));
    const options = {
        method : "post",
        body : formData
    };
    fetch(url, options).then((response) => {
        response.json().then(user => {
            console.log(user);
            const divHello = document.createElement("div");
            divHello.textContent = `Olá, ${user.name}`;
            document.querySelector("body").appendChild(divHello);
        });
    });
});
