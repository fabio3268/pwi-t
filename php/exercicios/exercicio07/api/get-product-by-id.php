<?php

require "connection.php";

$productId = $_GET["product_id"] ?? NULL;

if(!$productId) {
    $response = [
        "type" => "error",
        "message" => "Informe um id"
    ];
    echo json_encode($response);
    exit;
}

$query = "SELECT * FROM products WHERE id = {$productId}";
$stmt = $conn->query($query);

$product = $stmt->fetch(); 

if($stmt->rowCount() == 1) {
    $response = [
        "type" => "success",
        "data" => $product
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "error",
    "message" => "Não há produto com o id informado!"
];
echo json_encode($response);
