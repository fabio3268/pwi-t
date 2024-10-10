<?php

header('Content-Type: application/json');

$email = $_POST["email"] ?? null;
$password = $_POST["password"] ?? null;

$users = [
    ["name" => "João", "email" => "joao@gmail.com", "password" => "123456"],
    ["name" => "Maria", "email" => "maria@gmaikl.com", "password" => "123456"],
    ["name" => "José", "email" => "jose@gmail.com", "password" => "123456"]
];

$find = false;
foreach ($users as $user) {
    if($user["email"] == $email) {
        if($user["password"] != $password) {
            $response = [
                "type" => "error",
                "message" => "Senha Inválida!"
            ];
            echo json_encode($response);
            exit;
        }
        $find = true;
        break;
    }
}
if(!$find){
    $response = [
        "type" => "error",
        "message" => "E-mail não cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Olá, {$user["name"]}! Bem-vindo(a)!",
    "data" => $user
];

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
