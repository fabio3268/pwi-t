z<?php
require __DIR__ . '/../frame/lpwphp.php';
LPWPHPClassName("05 - Estruturas de Controle");

/*
 * [ if ] https://php.net/manual/pt_BR/control-structures.if.php
 * [ elseif ] https://php.net/manual/pt_BR/control-structures.elseif.php
 * [ else ] https://php.net/manual/pt_BR/control-structures.else.php
 */
LPWClassSession("if, elseif, else", __LINE__);

// verificar se a idade pertence é de uma criança, de um adolescente ou de um adulto

$a = 3;
$a = $a * "3 Bananas" ;
$b = 2;
$b = $b + 2;
var_dump($b, $a);
if($a == $b){
    echo "<p>São Iguais</p>";
} else {
    echo "<p>São Diferentes</p>";
}

/*
 * [ isset ] https://php.net/manual/pt_BR/function.isset.php
 * [ empty] https://php.net/manual/pt_BR/function.empty.php
 */
LPWClassSession("isset, empty, !", __LINE__);

 $name = "Fábio";
if(!isset($name)){
    echo "<p>Não Existe!</p>";
}

if(empty($name)){
    echo "<p>Variável vazia!</p>";
}


/*
 * [ switch ] https://www.php.net/manual/pt_BR/control-structures.switch.php
 */
LPWClassSession("switch", __LINE__);


/*
 * [ match ] https://www.php.net/manual/pt_BR/control-structures.match.php
 * novidade do PHP 8
 */
LPWClassSession("match", __LINE__);

