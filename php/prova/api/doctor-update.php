<?php

require "connection.php";

$doctor = $_POST ?? null;

/*echo json_encode($doctor, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
exit;*/

if(in_array("", $doctor)) {
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit;
}

$query = "UPDATE doctors 
          SET name = :name, crm = :crm, specialty_id = :specialty_id
          WHERE id = :id";

$stmt = $conn->prepare($query);
$stmt->bindParam(":name", $doctor["name"]);
$stmt->bindParam(":crm", $doctor["crm"]);
$stmt->bindParam(":specialty_id", $doctor["specialtyId"]);
$stmt->bindParam(":id", $doctor["id"]);

$stmt->execute();

if($stmt->rowCount() == 1) {
    $response = [
        "type" => "success",
        "message" => "Médico atualizado com sucesso"
    ];
} else {
    $response = [
        "type" => "error",
        "message" => "Erro ao atualizar médico"
    ];
}

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
