<?php

session_start();

$_SESSION["user"] = [
    "id" => 1,
    "name" => "Fábio Luís da Silva Santos",
    "email" => "fabiosantos@ifsul.edu.br"
];

setcookie("user", json_encode($_SESSION["user"]), time() + 3600, "/");

$response = [
    "session" => $_SESSION["user"],
    "cookie" => $_COOKIE["user"]
];

echo json_encode($response);

// password_verify();