<?php

header('Content-Type: application/json');

$users = [
    ["name" => "João", "email" => "joao@gmail.com", "password" => "123456"],
    ["name" => "Maria", "email" => "maria@gmaikl.com", "password" => "123456"],
    ["name" => "José", "email" => "jose@gmail.com", "password" => "123456"]
];

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

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);