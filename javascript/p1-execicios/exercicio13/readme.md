# Exercício 13

Considerando o vetor de objetos tasksList:

1. percorra o vetor para exibir seu conteúdo no div id="task-list", ao lado de cada tarefa inclua um botão para excluir a tarefa, conforme o exemplo no index.html;
2. o botão de exclusão deve ser criado com document.createElement;
3. a todo o botão criado adicione um evento click para excluir a respectiva tarefa (aqui utilize parentElement para remover o elemento pai do botão que é o div que contem a tarefa a ser removida); 
```html
<div id="divFather">
    <button>Excluir</button>
</div>
```
```javascript
const button = document.querySelector('button');
console.log(button.parentElement); // <div id="divFather">...</div>
button.parentElement.remove(); // Remove o div pai
```
4. adicione um evento click ao botão id="add-task-btn" para adicionar uma nova tarefa ao vetor tasksList e exibir a nova tarefa na div id="task-list";
