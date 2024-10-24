<?php

require "connection.php";

$categoryId = $_GET["category_id"] ?? NULL;

if(!$categoryId) {
    $response = [
        "type" => "error",
        "message" => "Informe o id da categoria!"
    ];
    
    echo json_encode($response);
    exit;
}

if(!filter_var($categoryId, FILTER_VALIDATE_INT)) {
    $response = [
        "type" => "error",
        "message" => "Informe um número inteiro para a id da categoria!"
    ];
    
    echo json_encode($response);
    exit;
}
// Montar a query 
$query = "SELECT * 
          FROM products 
          WHERE category_id = :category_id";

$stmt = $conn->prepare($query);
// Parametrização
$stmt->bindParam("category_id", $categoryId);
// Envio para o BD
$stmt->execute();
// Recebemos e tratamos o retorno (resultado da query)
if($stmt->rowCount() > 0) {
    $response = [
        "type" => "success",
        "data" => $stmt->fetchAll()
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "error",
    "message" => "Não há produto com o id da categoria informado!"
];

echo json_encode($response);


