<?php

require "connection.php";

$name = filter_input(INPUT_GET, 'name');

$query = "SELECT * FROM products WHERE name LIKE '%{$name}%'";

//var_dump($query);

$stmt = $conn->query($query);

echo json_encode($stmt->fetchAll());


