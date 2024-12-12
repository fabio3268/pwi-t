<?php

require "connection.php";

$specialtyId = $_GET["id"] ?? null;

if(!$specialtyId) {
    $response = [
        "type" => "error",
        "message" => "Informe o id da especialidade"
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

if(!is_numeric($specialtyId)) {
    $response = [
        "type" => "error",
        "message" => "O id da especialidade deve ser um número"
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

$query = "SELECT doctors.id, doctors.name, doctors.crm, specialities.name as specialty 
          FROM doctors
          JOIN specialities ON doctors.specialty_id = specialities.id
          WHERE specialty_id = :specialty_id";

$stmt = $conn->prepare($query);
$stmt->bindParam(":specialty_id", $specialtyId);
$stmt->execute();

$doctors = $stmt->fetchAll();

if(!$doctors) {
    $response = [
        "type" => "error",
        "message" => "Nenhum médico encontrado"
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Médicos encontrados",
    "data" => $doctors
];

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);