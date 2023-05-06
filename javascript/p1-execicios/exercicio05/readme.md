# Exercício 05

- considere que os dados dos usuários cadastrados em um sistema estão armazenados em um vetor de objetos chamado usersList, onde cada objeto representa um usuário e possui as propriedades/atributos name, email e password; 
- vincule um evento click ao botão loginBtn que chama a função login;
- a função login deve verificar se o e-mail e a senha correspondem aos de um usuário cadastrado;
- caso o email e a senha estejam corretos, a função deve retornar a mensagem "Olá, nome do usuário!", onde nome do usuário é o valor da propriedade/atributo name do objeto do usuário correspondente. A mensagem deve ser exibida na div messages e a ela deve ser atribuída a classe success;
- caso o email e/ou a senha estejam incorretos, a função deve retornar a mensagem "Usuário e/ou senha incorretos". A mensagem deve ser exibida na div messages e a ela deve ser atribuída a classe warning;
- caso o email fornecido não conste em nenhum objeto do vetor usersList, a função deve retornar a mensagem "Usuário não cadastrado". A mensagem deve ser exibida na div messages e a ela deve ser atribuída a classe error;
- a mensagem retornada pela função login deve ser impressa na div messages.
