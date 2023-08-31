<?php
header("Content-Type: text/html; charset=utf-8");

echo "<link rel='stylesheet' href='../frame/lpwphp.css'/>",
"<link rel='icon' href='../frame/favicon.ico'/>",
"<img class='logophp' src='../frame/php.png'/>";

/**
 * [ Title Function ] Cria o título do arquivo para o browser
 */
function LPWPHPClassName($className)
{
    echo "<title>{$className} | Linguagem de Programação WEB</title>";
}

/**
 * [ Debug session ] Cria uma linha de sessão para exemplos
 * @var $color = red | green | yellow | blue
 * @var line = __LINE__
 */
function LPWClassSession($session, $line, $color = null)
{
    $line = (!empty($line) ? " <span class='line-session'>| Linha {$line}</span>" : "");
    $session = (!empty($session) ? "[ {$session}{$line} ]" : "");
    $color = (!empty($color) ? "var(--{$color})" : "");
    echo "<div class='code line' style='background-color: {$color}'>{$session}</div>";
}