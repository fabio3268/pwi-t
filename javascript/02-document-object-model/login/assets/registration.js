const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");

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

document.querySelector("#form-registration").addEventListener("submit", async (e) => {
    e.preventDefault();
    message.innerHTML = "";
    const arrayUser = [];
    let find = false; // se achou ou não o e-mail...

    if(localStorage.getItem("users")){
        const userLog = JSON.parse(localStorage.getItem("users"));
        console.log(userLog);
        userLog.forEach((e) => {
            if(e.email === email.value){
                find = true; // flag
            }
            arrayUser.push(e);
        });
    }

    if(find){
        message.innerHTML = "Email já cadastrado!";
        return;
    }

    const user = {
        name: name.value,
        email: email.value,
        password: password.value
    };

    arrayUser.push(user);
    localStorage.setItem("users",JSON.stringify(arrayUser));
    //console.log(JSON.stringify(arrayUser));

});

document.querySelector("#show").addEventListener('click', ()=> {
    let user = localStorage.getItem('users');
    console.log(JSON.parse(user));
});

document.querySelector("#clear").addEventListener('click', ()=> {
    let user = localStorage.clear();
});

