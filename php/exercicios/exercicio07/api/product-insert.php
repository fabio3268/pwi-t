<?php

require "connection.php";

$product = $_POST ?? null;

$query = "INSERT INTO products VALUES (NULL, :category_id, :name, :price)";

$stmt = $conn->prepare($query);
$stmt->bindParam("category_id", $product["category"]);
$stmt->bindParam("name",$product["name"]);
$stmt->bindParam("price",$product["price"]);
$stmt->execute();

if($stmt->rowCount() == 1) {
    $response = [
        "type" => "success",
        "message" => "Produto cadastrado com sucesso!"
    ];
    echo json_encode($response);
}




