const button = document.querySelector("button");
const usersList = [];
const divUsers = document.querySelector(".list-users");

button.addEventListener("click", () => {
    divUsers.innerHTML = "";
    const user = {
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value
    };
    usersList.push(user);

    usersList.forEach((value,index) => {
        const divUser = document.createElement("div");
        divUser.classList.add("user");
        console.log(index, value.name,value.email,value.password);
        divUser.innerHTML = `<span>1</span>
                             <span>Nome</span>
                             <span>Email</span>
                             <span>Senha</span>
                             <span><button>Excluir</button></span>`;
        divUsers.appendChild(divUser);
    });

});

divUsers.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON"){
        event.target.parentElement.parentElement.remove();
    }
});