console.log("OI INSERT USER");

const formUserRegister = document.querySelector("#form-user-register");
const formUserLogin = document.querySelector("#form-user-login");

formUserRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("api/users/user-register.php", {
        method: "post",
        body: new FormData(formUserRegister)
    })
        .then((response) => {
            response.json()
                .then((user) => {
                    console.log(user);
                });
        });
});

formUserLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("api/users/user-login.php", {
        method: "post",
        body: new FormData(formUserLogin)
    })
        .then((response) => {
            response.json()
                .then((user) => {
                    console.log(user);
                });
        });
});

document.querySelector("#get-session").addEventListener("click", () => {
    console.log("GET SESSION");
    fetch("api/users/user-session.php")
        .then((response) => {
            response.json()
                .then((user) => {
                    console.log(user);
                });
        });
});