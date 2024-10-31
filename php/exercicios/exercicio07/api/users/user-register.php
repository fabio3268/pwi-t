<?php

// password_hash("rasmuslerdorf", PASSWORD_DEFAULT);
// password_hash('rasmuslerdorf', PASSWORD_ARGON2I);

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

if($stmt->rowCount() == 1){
    $response = [
        "type" => "error",
        "message" => "E-mail já cadastrado"
    ];
    echo json_encode($response);
    exit;
}
// se quiser pode ser feita verificação de tamanho e formato de senha

$query = "INSERT INTO users (name, email, password) 
          VALUES (:name,:email,:password)";
$stmt = $conn->prepare($query);
$stmt->bindParam("name", $user["name"]);
$stmt->bindParam("email", $user["email"]);
$stmt->bindParam("password", $user["password"]);
$stmt->execute();

$response = [
    "type" => "success",
    "message" => "Usuário cadastrado com SUCESSO!",
    "data" => $user
];

echo json_encode($response);