<?php

$name = $_POST["name"] ?? "";
$email = $_POST["email"] ?? "";

$response = [
    "message" =>"Olá, {$name} seu e-mail é {$email}...."
];

//echo json_encode($response);
echo "Olá, {$name} seu e-mail é {$email}....";
