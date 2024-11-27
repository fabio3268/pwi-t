<?php

if(!isset($_COOKIE["userAuth"])){
    echo "Você não deveria estar aqui";
    exit;
}
var_dump($_COOKIE["userAuth"]);