<?php

    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "db_furniture_store";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
    ];

    $conn = new PDO(
        "mysql:host=$host;dbname=$database",
        $user,
        $password,
        $options
    );

    
