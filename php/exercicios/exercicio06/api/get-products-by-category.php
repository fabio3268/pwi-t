<?php

$category_id = $_GET["category_id"] ?? null;

//var_dump($category_id);

require "products.php";

$productsResult = [];
foreach ($products as $product){
    if($product["category_id"] == $category_id){
        $productsResult[] = $product;
    }
}

if(count($productsResult) == 0) {
    $response = [
        "type" => "error",
        "message" => "Não há produtos cadastrados com a categoria informada!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "data" => $productsResult
];

echo json_encode($response);
