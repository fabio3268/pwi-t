<?php
require __DIR__ . '/../frame/lpwphp.php';
LPWPHPClassName("04 - Vetores");

/**
 * [ arrays ] https://php.net/manual/pt_BR/language.types.array.php
 */
LPWClassSession("index array", __LINE__);

$vetor[]="Fábio"; // mesmo que $vetor[0] = "Fábio";
$vetor[]="Santos"; // mesmo que $vetor[1] = "Santos";
$vetor[] = 3;

var_dump($vetor);

/**
 * [ associative array ] "key" => "value"
 */
LPWClassSession("associative array", __LINE__);

$user = [
    "name" => "Fábio",
    "email" => "fabiosantos@gmail.com"
];

var_dump($user);

/**
 * [ multidimensional array ] "key" => ["key" => "value"]
 */
LPWClassSession("multidimensional array", __LINE__);


/**
 * [ array access ] foreach(array as item) || foreach(array as key => value)
 */
LPWClassSession("array access", __LINE__);