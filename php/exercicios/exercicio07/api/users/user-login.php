<?php

session_start();

$user = $_POST ?? null;

if(in_array("", $user)) {
    $response = [
        "type" => "error",
        "message" => "Insira todos os dados"
    ];
    echo json_encode($response);
    exit;
}

if(!filter_var($user["email"], FILTER_VALIDATE_EMAIL)){
    $response = [
        "type" => "error",
        "message" => "Digite um e-mail válido"
    ];
    echo json_encode($response);
    exit;
}

require "../connection.php";

$query = "SELECT * FROM users WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("email", $user["email"]);
$stmt->execute();

if($stmt->rowCount() == 0) {
    $response = [
        "type" => "error",
        "message" => "E-mail não cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$userAuth = $stmt->fetch();
if(!password_verify($user["password"], $userAuth->password)){
    $response = [
        "type" => "error",
        "message" => "Senha inválida!"
    ];
    echo json_encode($response);
    exit;
}

// cria a sessão
$_SESSION["userAuth"] = [
    "id" => $userAuth->id,
    "name" => $userAuth->name
];

// cria o cookie
setcookie("userAuth", 1, time() + 60 * 60, "/");

unset($userAuth->password);
unset($userAuth->photo);
$response = [
    "type" => "success",
    "message" => "Usuário autenticado!",
    "data" => $userAuth
];

echo json_encode($response);
