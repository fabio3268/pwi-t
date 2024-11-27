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

//var_dump($_SESSION["userAuth"]["id"]);

$userId = $_SESSION["userAuth"]["id"];

$query = "SELECT * FROM users WHERE id = :id";

$stmt = $conn->prepare($query);
$stmt->bindParam("id", $userId);
$stmt->execute();

$user = $stmt->fetch();

$response = [
    "type" => "success",
    "data" => $user
];
echo json_encode($response);
exit;