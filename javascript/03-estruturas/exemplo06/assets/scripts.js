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
        divUser.innerHTML = `<span>${index}</span>
                             <span>${value.name}</span>
                             <span>${value.email}</span>
                             <span>${value.password}</span>
                             <span><button>Excluir</button></span>`;
        divUsers.appendChild(divUser);
    });

});

divUsers.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON"){
        // remover da lista de objetos
        event.target.parentElement.parentElement.remove();
    }
});