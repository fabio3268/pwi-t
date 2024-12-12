<?php

require "connection.php";

$doctorId = $_GET["id"] ?? null;

if(!$doctorId) {
    $response = [
        "type" => "error",
        "message" => "Informe o id do médico"
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

if(!is_numeric($doctorId)) {
    $response = [
        "type" => "error",
        "message" => "O id do médico deve ser um número"
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

$query = "SELECT * FROM doctors WHERE id = :id";
$stmt = $conn->prepare($query);
$stmt->bindParam(":id", $doctorId);
$stmt->execute();

$doctor = $stmt->fetch();

if(!$doctor) {
    $response = [
        "type" => "error",
        "message" => "Médico não encontrado"
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Médico encontrado",
    "data" => $doctor
];

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);