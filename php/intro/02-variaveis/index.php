<?php

require __DIR__ . '/../frame/lpwphp.php';

LPWPHPClassName("02 - Variáveis");

/**
 * [tipos de dados] https://php.net/manual/pt_BR/language.types.php
 * [ variáveis ] https://php.net/manual/pt_BR/language.variables.php
 */
LPWClassSession("variáveis", __LINE__);

$firstName = "Fábio";
$lastName = "Santos";
$age = 48;

var_dump($firstName, $lastName, $age);

echo "<p>O usário {$firstName} {$lastName} tem {$age} anos!</p>";

$varA = 10;
$varB = 20;
$varB = &$varA; // ponteiro...
$varB = 150;

var_dump( [
    "a" => $varA,
    "b" => $varB
]);


/**
 * [ tipo boleano ] true | false
 */
LPWClassSession("tipo boleano", __LINE__);

/**
 * [ outros tipos ] string | array | objeto | numérico | null
 */
LPWClassSession("outros tipos", __LINE__);


$string = "Olá, Mundo!";
$array = [10 => "a", 20 => 3, 200 => 1.7, 500 => true];
$int = 3;
$float = 1.8;

var_dump(
    $string,
    $array,
    $int,
    $float
);
