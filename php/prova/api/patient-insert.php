<?php

require "connection.php";

$patient = $_POST ?? null;

if(in_array("", $patient)) {
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

$query = "INSERT INTO patients (name, age, medical_record) 
          VALUES (:name, :age, :medical_record)";

$stmt = $conn->prepare($query);
$stmt->bindParam(':name', $patient['name']);
$stmt->bindParam(':age', $patient['age']);
$stmt->bindParam(':medical_record', $patient['medicalRecord']);
$stmt->execute();

$response = [
    "type" => "success",
    "message" => "Paciente cadastrado com sucesso"
];

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);

