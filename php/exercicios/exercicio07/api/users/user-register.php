<?php

// password_hash("rasmuslerdorf", PASSWORD_DEFAULT);
// password_hash('rasmuslerdorf', PASSWORD_ARGON2I);

$user = $_POST ?? null;

echo json_encode($user);
