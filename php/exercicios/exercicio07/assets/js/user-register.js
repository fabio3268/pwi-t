console.log("OI INSERT USER");

const formUserRegister = document.querySelector("#form-user-register");

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