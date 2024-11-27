<?php

session_start();

require "../connection.php";

if(!isset($_SESSION["userAuth"]) || !isset($_COOKIE["userAuth"])){
    $response = [
        "type" => "error",
        "message" => "Você não deveria estar aqui!"
    ];
    echo json_encode($response);
    exit;
}

$userId = $_SESSION["userAuth"]["id"];

if (isset($_POST["submit"])) {
    echo json_encode([
        "message" => "Escolha um arquivo.",
        "type" => "error"
    ]);
    exit;
}

// check for UPLOAD_ERR_INI_SIZE
if ($_FILES["photo"]["error"] == UPLOAD_ERR_INI_SIZE) {
    echo json_encode([
        "message" => "O arquivo enviado excede o limite definido na diretiva upload_max_filesize do php.ini.",
        "type" => "error"
    ]);
    exit;
}

if ($_FILES["photo"]["size"] > 5000000) {
    echo json_encode([
        "message" => "O arquivo enviado excede o limite de tamanho de 5MB.",
        "type" => "error"
    ]);
    exit;
}

$file = $_FILES["photo"]["name"];
$fileExtension = strtolower(pathinfo($file, PATHINFO_EXTENSION));

$allowedFileTypes = ["jpg", "png", "jpeg", "gif"];
if (!in_array($fileExtension, $allowedFileTypes)) {
    echo json_encode([
        "message" => "Apenas arquivos JPG, JPEG, PNG e GIF são permitidos.",
        "type" => "error"
    ]);
    exit;
}

$tmpFile = $_FILES["photo"]["tmp_name"];
$photoName = md5(microtime()) . "." . $fileExtension;
$targetFile = "../../storage/" . $photoName;
if (move_uploaded_file($tmpFile, $targetFile)) {
    // Atualizar o banco de dados com a foto do usuário
    $query = "UPDATE users SET photo = :photo WHERE id = :id";
    $stmt = $conn->prepare($query);
    $stmt->bindParam("photo", $photoName);
    $stmt->bindParam("id", $userId);
    $stmt->execute();
    echo json_encode([
        "message" => "O arquivo ". basename($file). " foi enviado com sucesso.",
        "photo" => $photoName,
        "type" => "success"
    ]);
} else {
    echo json_encode([
        "message" => "Ocorreu um erro ao enviar o arquivo.",
        "type" => "error"
    ]);
}

?>