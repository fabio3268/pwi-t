const usersList = [
    {
        name : "Fabio Santos",
        email : "fabio@example.com",
        password : "12345"
    },
    {
        name: "Maria Oliveira",
        email: "maria@example.com",
        password: "12345"
    },
    {
        name: "Carlos Ferreira",
        email: "carlos@example.com",
        password: "12345"
    },
    {
        name: "Joao da Silva",
            email: "joao@example.com",
        password: "12345"
    }
];

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const button = document.querySelector("button");
const divMessages = document.querySelector("#messages");

let indexFind = -1;

function verify(user, i) {
    if(inputEmail.value === user.email && inputPassword.value === user.password){
        console.log("Email encontrado");
        indexFind = i;
        return;
    }
    else {
        console.log("Email não encontrado");
    }
}

function searchUser (){
   indexFind = -1;
   usersList.forEach(verify);
   if(indexFind != -1) {
      divMessages.textContent = `Olá, ${usersList[indexFind].name}!`;
   } else {
      divMessages.textContent = "Usuário e/ou senha incorretos";
   }
}

button.addEventListener("click", searchUser )



