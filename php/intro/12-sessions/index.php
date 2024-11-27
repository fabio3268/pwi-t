<?php

session_start();

$_SESSION["userAuth"] = [
    "id" => 23,
    "email" => "fabiosantos@gmail.com",
    "name" => "Fábio Santos"
];

var_dump($_SESSION);