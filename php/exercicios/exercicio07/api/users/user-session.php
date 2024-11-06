<?php

session_start();

$response = [
    "session" => $_SESSION["user"] ?? null,
    "cookie" => $_COOKIE["user"] ?? null
];

echo json_encode($response);