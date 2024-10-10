
const formLogin = document.querySelector("form");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("api/users.php", {
        method: "POST",
        body: new FormData(formLogin)
    })
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(data);
                });
    });
});

