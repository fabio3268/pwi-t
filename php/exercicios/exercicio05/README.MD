### Exercício 05

## Script `index.html` 
Contem o formulário de login

## Script `api/login.php` 
Contem a lógica de login

```php
$users = [
    ["name" => "João", "email" => "joao@gmail.com", "password" => "123456"],
    ["name" => "Maria", "email" => "maria@gmaikl.com", "password" => "123456"],
    ["name" => "José", "email" => "jose@gmail.com", "password" => "123456"]
];
```
Respostas:
```php
$response = [
    "type" => "error",
    "message" => "E-mail não cadastrado!"
];

$response = [
    "type" => "error",
    "message" => "Senha Inválida!"
];

$response = [
    "type" => "success",
    "message" => "Olá, Fulano! Bem-vindo(a)!",
    "data" => ["name" => "João", "email" => "joao@gmail.com", "password" => "123456"]
];

```

## Script `assets/login.js`

