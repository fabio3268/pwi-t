<?php

require "connection.php";

$query = "SELECT * FROM specialities";

$stmt = $conn->query($query);

$specialties = $stmt->fetchAll();

$response = [
    "type" => "success",
    "message" => "Especialidades encontradas",
    "data" => $specialties
];

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);