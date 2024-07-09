## Prova 01 - Simulada

### Questão 01

No script `script-products.js` leia o vetor de objetos products e preencha as informações dos ar-condicionados no `products.html`.

```javascript
let products = [
    {
        name: "Ar Condicionado Modelo 1",
        image: "assets/images/image01.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 2",
        image: "assets/images/image02.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 3",
        image: "assets/images/image03.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 4",
        image: "assets/images/image04.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 5",
        image: "assets/images/image05.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 6",
        image: "assets/images/image06.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 7",
        image: "assets/images/image07.jpeg",
    },
    {
        name: "Ar Condicionado Modelo 8",
        image: "assets/images/image08.jpeg",
    }
];
```

### Questão 02

Implemente a funcionalidade de cadastro de usuários no arquivo `register.html`. O usuário deve informar Nome, Email e Senha e, ao pressionar o botão "Cadastrar", o nome e o email do usuário serão incluídos na lista de usuários exibida na mesma página. Além disso, cada entrada na lista deve conter um botão "Remover" que, ao ser pressionado, remove o usuário específico da lista.

### Questão 03

Implemente uma funcionalidade de pesquisa de produtos no arquivo `products.html`. O usuário deve ser capaz de digitar o nome de um produto em um campo de pesquisa e, ao pressionar o botão "Pesquisar", apenas os produtos cujos nomes correspondam ao termo de pesquisa devem ser exibidos na página. Se nenhum produto corresponder ao termo de pesquisa, exiba uma mensagem indicando que nenhum produto foi encontrado.

### Questão 04

Implemente uma seção de "Perguntas Frequentes" (FAQ) na página about.html. Esta seção deve conter uma lista de perguntas comuns sobre o site ou a empresa. Ao clicar em uma pergunta, a resposta correspondente deve ser exibida abaixo dela. Se a pergunta estiver aberta e for clicada novamente, sua resposta deve ser ocultada.

#### Dicas

A propriedade `nextElementSibling` de um elemento HTML retorna o próximo elemento irmão do elemento especificado no DOM, por exemplo, se uma div é selecionada, o próximo elemento div no DOM é retornado.

O `Element.classList` é uma propriedade somente leitura que retorna uma coleção DOMTokenList ativa dos atributos de classe do elemento.

```javascript

const div = document.querySelector('.faq-question');

if(div.classList.value == 'faq-question') {
    // 
}

```