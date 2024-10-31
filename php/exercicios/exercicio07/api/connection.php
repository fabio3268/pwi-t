<?php

    $host = "mysql";
    $userConn = "root";
    $passwordConn = "asdf1234";
    $database = "db_furniture_store";
    $optionsConn = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
    ];

    $conn = new PDO(
        "mysql:host=$host;dbname=$database",
        $userConn,
        $passwordConn,
        $optionsConn
    );

    
