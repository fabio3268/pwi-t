const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

name.addEventListener('focus',() => {
    name.style.borderColor = "#4A5F6A";
});

email.addEventListener('blur',() => {
    name.style.borderColor = "#ccc";
});

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