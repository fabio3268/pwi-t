<?php

$categories = [
    ["id" => 1, "name" => "Sala"],
    ["id" => 2, "name" => "Cozinha"],
    ["id" => 3, "name" => "Quarto"],
    ["id" => 4, "name" => "Banheiro"],
    ["id" => 5, "name" => "Escritório"]
];

// Respostas possíveis

// retorna uma mensagem de erro se o vetor vazio, somente para exemplificar
$response = [
    "type" => "error",
    "message" => "Não há categorias cadastradas!"
];

// retorna o array de categorias
$response = [
    "type" => "success",
    "data" => $categories
];

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);