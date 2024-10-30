<?php

require "connection.php";

$query = "SELECT * FROM categories";

$stmt = $conn->query($query);

if($stmt->rowCount() > 0){
    $response = [
        "type" => "success",
        "data" => $stmt->fetchAll()
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

$response = [
    "type" => "error",
    "message" => "Não há categorias cadastradas!"
];

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);