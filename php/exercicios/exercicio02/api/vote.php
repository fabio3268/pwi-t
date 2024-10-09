<?php

$name = $_POST["name"] ?? null;
$age = $_POST["age"] ?? null;

/*if($age < 16) {
    echo "{$name} você não pode votar!";
} else if($age >= 18 && $age <= 70){
    echo "{$name} você é obrigado a votar!";
} else if(($age >= 16 && $age < 18) || $age > 70) {
    echo "{$name} seu voto é facultativo!";
}*/

if($age < 16) {
    echo "{$name} você não pode votar!";
    exit();
}

if($age >= 18 && $age <= 70){
    echo "{$name} você é obrigado a votar!";
    exit();
}

if(($age >= 16 && $age < 18) || $age > 70) {
    echo "{$name} seu voto é facultativo!";
    exit();
}