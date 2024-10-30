<?php

$product = $_POST ?? null;

$query = "INSERT INTO products VALUES (NULL, 1, 'Cadeira', 1000)";

echo json_encode($product);


