<?php

require "products.php";

$productId = $_GET["product_id"] ?? NULL;

if(!$productId) {
    $response = [
        "type" => "error",
        "message" => "Informe um id"
    ];
    echo json_encode($response);
    exit;
}

foreach ($products as $product){
    if($product["id"] == $productId){
        //var_dump($product, $productId);
        $response = [
            "type" => "success",
            "data" => $product
        ];
        echo json_encode($response);
        exit;
    }
}

$response = [
    "type" => "error",
    "message" => "Não há produto com o id informado!"
];

echo json_encode($response);

