


const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.querySelector("#email");
    const password = form.querySelector("#password");
    const message = document.querySelector("#message");

    if(email.value === "aluno@gmail.com" && password.value === "undererere123"){
        message.textContent = "Você é aluno, bem-vindo!";
        //return;
    } else if(email.value === "professor@gmail.com" && password.value === "admin789"){
        message.textContent = "Você é professor, bem-vindo!";
        //return;
    } else {
        message.textContent = "E-mail ou Senha incorretos!";
    }
});
