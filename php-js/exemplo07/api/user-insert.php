<?php
//var_dump($_POST);
$name = filter_input(INPUT_POST, "name");
$email = filter_input(INPUT_POST, "email");
$password = filter_input(INPUT_POST, "password");
//echo "Olá, {$name} - seu email é {$email} sue senha é {$password}";

$response = [
    "name" => $name,
    "email" => $email
];

echo json_encode($response);
