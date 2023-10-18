<?php

require "connection.php";

$post = filter_input_array(INPUT_POST);

if(in_array("",$post)){
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
    echo json_encode($response);
    exit;
}

$query = "UPDATE products 
          SET name = :name, price = :price, category_id = :category_id
          WHERE id = :id";
$stmt = $conn->prepare($query);
$stmt->bindParam("name", $post["name"]);
$stmt->bindParam("price",$post["price"]);
$stmt->bindParam("category_id",$post["category_id"]);
$stmt->bindParam("id",$post["id"]);
$stmt->execute();

if($stmt->rowCount() != 1){
    $response = [
        "type" => "error",
        "message" => "Produto não cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
   "type" => "success",
   "message" => "Produto alterado com sucesso!"
];

echo json_encode($response);
