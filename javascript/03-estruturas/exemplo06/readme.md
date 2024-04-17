# Exemplo 06
## Descrição do Exercício
O exercício consiste em criar um formulário de inscrição de usuários, onde cada usuário tem um nome, email e senha. Os dados do usuário são armazenados em um objeto JavaScript e adicionados a uma lista de usuários.
````javascript
const usersList = [];

const user = {
        name : "",
        email : "",
        password : ""
    };
````
Ao lado de cada usuário deve aparecer um botão para exclusão, quando pressionado o usuário deve sumir tanto da tabela quanto da lista de objetos.