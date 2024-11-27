<?php

session_start();

if(isset($_SESSION["userAuth"])) {
    unset($_SESSION["userAuth"]);
    session_destroy();
}

if(isset($_COOKIE["userAuth"])) {
    unset($_COOKIE["userAuth"]);
    setcookie("userAuth", "", time() - 3600, "/");
}


$response = [
    "type" => "success",
    "message" => "Usuário deslogado com sucesso!"
];
echo json_encode($response);