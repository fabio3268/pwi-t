<?php

session_start();

require "../connection.php";

if(!isset($_SESSION["userAuth"]) || !isset($_COOKIE["userAuth"])){
    $response = [
        "type" => "error",
        "message" => "Você não deveria estar aqui!"
    ];
    echo json_encode($response);
    exit;
}

$userId = $_SESSION["userAuth"]["id"];

$query = "UPDATE users SET name = :name, email = :email, address = :address 
          WHERE id = :id";
$stmt = $conn->prepare($query);
$stmt->bindParam("name", $_POST["name"]);
$stmt->bindParam("email", $_POST["email"]);
$stmt->bindParam("address", $_POST["address"]);
$stmt->bindParam("id", $userId);
$stmt->execute();

$response = [
    "type" => "success",
    "message" => "Dados atualizados com sucesso!"
];

echo json_encode($response);