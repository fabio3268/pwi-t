console.log("OI");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("api/employee.php", {
        method: "post",
        body: new FormData (form)
    }).then((response) => {
        response.text().then((message) => {
            //console.log(message);
            document.querySelector("#message").textContent = message;
        });
    });
});

