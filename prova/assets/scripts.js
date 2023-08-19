// array de objetos para armazenar os usuários
let listUsers = [];

// objeto para armazenar um usuário
let user =
    {
        name: "",
        email: "",
        password: ""
    };

function insertUserOnTable (user) {
    // agora inserir o novo usuário na tabela de usuários cadastrados crie um elemento <tr> com createElement

    // insira os dados do usuário nesse <tr> com innerHTML não esqueça de user as crases (`) e interpolação ${}

    // selecione o elemento <tbody> do HTML com querySelector depois insira o <tr> dentro do <tbody> com appendChild

    // selecionar o botão de remover do usuário que acabou de ser cadastrado com querySelector

    // adicionar um eventListener para o evento de click do botão de remover para remoção da tr onde o botão está, é preciso remover o usuário da listUsers também. Dica 4
}

// aqui as informações da localStorage são atribuídas a listUsers
if (localStorage.getItem("listUsers") != null) {
    listUsers = JSON.parse(localStorage.getItem("listUsers"));
}

// aqui os usuários cadastrados, que estão na listUsers são inseridos na tabela
listUsers.forEach((user) => {
    insertUserOnTable(user);
});

// Selecione o elemento <form> do HTML com querySelector
const form = document.querySelector("form");

// Adicione um event listener para o evento de submit do <form> não esqueça do event.preventDefault();
form.addEventListener("submit", (event) =>  {
    event.preventDefault();

    // os dados do usuário são que está sendo cadastrado são armazenados no objeto user

    // verificar se o e-mail já está cadastrado, se estiver exibir uma mensagem de alerta informando que o email já está cadastrado e retornar da função com return

    // aqui o objeto user deve ser inserido no vetor listUsers com push

    // limpar os campos do formulário

    // aqui as informações da listUsers são armazenadas na localStorage

    // aqui o usuário que está sendo cadastrado é inserido na tabela de usuários cadastrados evocando a função insertUserOnTable

    // exibe uma mensagem de alerta informando que o usuário foi cadastrado com sucesso

});
