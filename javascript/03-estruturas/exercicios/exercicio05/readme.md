### Exercício 05

- Lançamento de um dado
- Crie um script que contenha um vetor chamado _dice_ com os valores 1, 2, 3, 4, 5 e 6 (representação das 6 faces de um dado). 
- Quando pressionado o botão faça um sorteio entre os índices do vetor com o objetivo de imprimir a face do dado correspondente ao índice sorteado. 
- Para sortear um índice do vetor _dice_, utilize

```javaScript
var nro = Math.floor(Math.random() * 6); // 6 faces do dado
document.write('<br>' + nro);

```