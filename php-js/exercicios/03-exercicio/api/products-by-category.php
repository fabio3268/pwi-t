<?php

require "connection.php";

$idCategory = filter_input(INPUT_GET, "categoryId");

$query = "SELECT * FROM products WHERE category_id = {$idCategory}";
$stmt = $conn->query($query);

echo json_encode($stmt->fetchAll());
