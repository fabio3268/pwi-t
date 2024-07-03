// Vetor de objetos para armazenar os usuários
let listUsers = []; // Array que irá armazenar os usuários cadastrados

// objeto para armazenar um usuário
let user =
    {
        name: "",
        email: "",
        password: ""
    };

function insertUserOnTable (user) {
    // agora inserir o novo usuário na tabela de usuários cadastrados crie um elemento <tr> com createElement
    const tr = document.createElement("tr");
    // insira os dados do usuário nesse <tr> com innerHTML não esqueça de user as crases (`) e interpolação ${}
    tr.innerHTML = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td><button id="removeUser" class="action-button">Remover</button></td>
                    </tr>`;
    // selecione o elemento <tbody> do HTML com querySelector depois insira o <tr> dentro do <tbody> com appendChild
    document.querySelector("tbody").appendChild(tr);
    // selecionar o botão de remover do usuário que acabou de ser cadastrado com querySelector
    const buttonRemove = tr.querySelector("#removeUser");
    console.log(buttonRemove);
    // adicionar um event listener para o evento de click do botão de remover
    buttonRemove.addEventListener("click", () => {
        // remover o usuário da tabela de usuários cadastrados
        tr.remove();
        // remover o usuário da listUsers utilizando o método splice
        listUsers.splice(listUsers.indexOf(user), 1);
        // atualizar a localStorage com setItem, não esqueça de converter o vetor listUsers para string com JSON.stringify
        localStorage.setItem("listUsers", JSON.stringify(listUsers));
    });
}

// aqui as informações da localStorage são atribuídas a listUsers
if (localStorage.getItem("listUsers") != null) {
    listUsers = JSON.parse(localStorage.getItem("listUsers"));
}

// aqui os usuários cadastrados, que estão na localStorage são inseridos na tabela
listUsers.forEach((user) => {
    insertUserOnTable(user);
});

// Selecione o elemento <form> do HTML com querySelector
const form = document.querySelector("form");

// Adicione um event listener para o evento de submit do <form> não esqueça do event.preventDefault();
form.addEventListener("submit", (event) =>  {
    event.preventDefault();

    // os dados do usuário são que está sendo cadastrado são armazenados no objeto user
    user =
        {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            password: document.querySelector("#password").value
        };

    // verificar se o email já está cadastrado
    if(listUsers.find((user) => user.email === document.querySelector("#email").value)) {
        alert("Email já cadastrado!");
        return;
    }

    // aqui o objeto user deve ser inserido no vetor listUsers com push
    listUsers.push(user);

    // limpar os campos do formulário
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";

    // aqui as informações da listUsers são armazenadas na localStorage
    localStorage.setItem("listUsers", JSON.stringify(listUsers));

    // aqui o usuário que está sendo cadastrado é inserido na tabela de usuários cadastrados evocando a função insertUserOnTable
    insertUserOnTable(user);

    // exibe uma mensagem de alerta informando que o usuário foi cadastrado com sucesso
    alert("Usuário cadastrado com sucesso!");

});
