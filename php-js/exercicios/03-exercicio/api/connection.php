<?php

$host = "localhost";
$user = "root";
$password = "12345";
$database = "db_company_3at";
$port = 3306;
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

$conn = new PDO(
    "mysql:host=$host;port=$port;dbname=$database",
    $user,
    $password,
    $options
);

//var_dump($conn);

//$query = "SELECT * FROM categories";
//$stmt = $conn->query($query);

//var_dump($stmt->fetchAll());

///echo json_encode($stmt->fetchAll(), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

