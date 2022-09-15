const email = document.querySelector("#email");
const password = document.querySelector("#password");

email.addEventListener('focus',() => {
    email.style.borderColor = "#4A5F6A";
});

email.addEventListener('blur',() => {
    email.style.borderColor = "#ccc";
});

password.addEventListener('focus',() => {
    password.style.borderColor = "#4A5F6A";
});

password.addEventListener('blur',() => {
    password.style.borderColor = "#ccc";
});

let button = document.querySelector("#button");

document.querySelector("#form-login").addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelector("#message").innerHTML = ``;
    let find = false;
    if(localStorage.getItem("users")){
        const users = JSON.parse(localStorage.getItem("users"));
        console.log(users);

        users.forEach((e) => {
            if(e.email === email.value && e.password === password.value){
                document.querySelector("#message").innerHTML = `Olá, ${e.name}!`;
                find = true;
                return;
            }
        });
    }

    if(!find){
        document.querySelector("#message").innerHTML = `Email e/ou Senha não cadastrados!`;
    }

});