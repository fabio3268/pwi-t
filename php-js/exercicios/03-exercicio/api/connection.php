<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "db_company_2at";
$port = 3306;
/*$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];*/

$conn = new PDO(
    "mysql:host=$host;port=$port;dbname=$database",
    $user,
    $password
);
