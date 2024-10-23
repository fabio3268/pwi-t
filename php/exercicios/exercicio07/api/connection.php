<?php

    //$host = "mysql"; // Docker
    $host = "localhost";
    $user = "root";
    //$password = "asdf1234"; // Docker
    $password = "";
    $database = "db_furniture_store";

    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
    ];

try {
    $conn = new PDO(
        "mysql:host=$host;dbname=$database",
        $user,
        $password,
        $options
    );
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
