<?php

require "connection.php";

$query = "SELECT * FROM authors";
$stmt = $conn->query($query);

echo json_encode($stmt->fetchAll());
