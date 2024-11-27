<?php

session_start();

if(!isset($_SESSION["userAuth"])){
    exit ("Você não deveria estar aqui...");
}

echo "Olá, " . $_SESSION["userAuth"]["name"] . "!";
//var_dump($_SESSION["userAuth"]["email"]);
