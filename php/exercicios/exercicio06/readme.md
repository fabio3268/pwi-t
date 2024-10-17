### Exercício 06

- O script `get-product-by-id.php` receberá um parâmetro `id` via método GET e deverá retornar um produto com o id correspondente. O retorno deverá ser um JSON com o produto correspondente ao id informado. Possiveis retornos em JSON:

```PHP
    // quando o ID estiver vazio
    $response = [
    "type" => "error",
    "message" => "Informe um id"
    ];
    
    $response = [
      "type" => "error",
      "message" => "Não há produto com o id informado!"
    ]; 

    $response = [
      "type" => "success",
      "data" => $product
    ]; 
    
```
- para consumir a informação do script acima, crie uma modal que se abrirá com as informações detalhadas do produto que for clicado.

- O script `get-product-by-name.php` receberá um parâmetro `name` via método GET e deverá retornar um produto com o nome correspondente. O retorno deverá ser um JSON com o produto correspondente ao nome informado. Possiveis retornos em JSON:

```PHP
    // quando o nome estiver vazio
    $response = [
    "type" => "error",
    "message" => "Informe um nome"
    ];
    
    $response = [
      "type" => "error",
      "message" => "Não há produto com o nome informado!"
    ]; 

    $response = [
      "type" => "success",
      "data" => $product
    ]; 
    
```

- para consumir as informações do script acima, utilize o input com o buscador de produtos.

