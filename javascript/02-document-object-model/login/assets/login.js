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
    const arrayUser = [];
    if(localStorage.getItem("users")){
        const userLog = JSON.parse(localStorage.getItem("users"));
        userLog.forEach((e) => {
            arrayUser.push(e);
        });
    }

    arrayUser.forEach((e) => {
        console.log(e);
        if(e.email === email.value && e.password === password.value){
            console.log("achei email e senha");
        }
    });
});