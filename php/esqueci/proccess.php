<?php

$email = filter_input(INPUT_POST, "email");

//var_dump($email);

$host = "mysql";
$user = "root";
$password = "asdf1234"; // trocar a senha
$database = "db_book_store_tarde";
$port = 3306;
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $conn = new PDO("mysql:host=$host;port=$port;dbname=$database", $user, $password, $options);
} catch (PDOException $e) {
    echo "Erro de conexão: " . $e->getMessage();
}

$query = "SELECT * FROM users WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam(":email", $email);
$stmt->execute();

if($stmt->rowCount() == 0) {
    echo "E-mail não encontrado";
    exit;
}

//$user = $stmt->fetch();
//var_dump($user);

$hash = uniqid(md5(proccess . phptime() . $email) );
var_dump($hash);

$query = "UPDATE users SET forget = :hash WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("hash", $hash);
$stmt->bindParam("email", $email);
$stmt->execute();

if($stmt->rowCount() == 1){
    echo "E-mail enviado com sucesso";
    echo "<div>Olá, blá, blá</div>
          <div><a href=\"verificacao.php?hash={$hash}\">Clique aqui!</a></div>";
    exit;
}
?>
