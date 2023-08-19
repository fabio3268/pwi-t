# Cadastro de Usuários

## Descrição do Projeto

O projeto consiste em um formulário de cadastro de usuários, onde o usuário pode cadastrar seu nome, e-mail e senha. Logo abaixo é exibida uma tabela com todos os cadastrados (nome e e-mail são exibidos, a senha não). Ao lado de cadas um exibe-se um botão, através do qual é possível excluir um usuário da tabela. As informações dos usuários são armazenadas no localStorage do navegador.

## Funcionalidades

1. sempre que um usuário é cadastrado ou excluído, a tabela e as informações armazenadas no localStorage são atualizadas;
2. não pode ser permitida a inserção de um usuário com e-mail já cadastrado, caso isso ocorra, informe o usuário através de um alert com a mensagem "E-mail já cadastrado!";
3. quando um usuário for inserido com sucesso, limpe os campos do formulário e informe o usuário através de um alert com a mensagem "Usuário cadastrado com sucesso!"

## Dicas

Dica 1: crie uma função que insere um usuário na tabela (utilize innerHTML), a função pode receber um objeto user, a mesma poderá ser utilizada quando o usuário for inserido via formulário e quando a listUsers for percorrida.

Dica 2: nessa função, quando o botão de remoção for criado, já adicione o evento e a funcionalidade de remoção da linha da tabela e do informação do localStorage. 

Dica 3: para verificar se um e-mail já está cadastrado, utilize o método find do array listUsers, da seguinte forma:

```javascript

    if(listUsers.find((user) => user.email === document.querySelector("#email").value)) {
        alert("Email já cadastrado!");
        return;
    }

```
Dica 4: para retirar um usuário da listUsers utilize o método splice, da seguinte forma:

```javascript

     listUsers.splice(listUsers.indexOf(user), 1);

```
Dica 5: utilize muitos console.log() para verificar o que está acontecendo no seu código.
