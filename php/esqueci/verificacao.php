<?php

$hash = filter_input(INPUT_GET, "hash");
var_dump($hash);

// buscar no bd, se tiver o hash, mostrar o form de troca de senha
?>

<form action="gerencia.php">
    <input type="hidden" value="<?= $hash?>">
    Senha Nova: <input type="password">
    Confirmar Senha: <input type="password">
    <button type="submit">Enviar</button>
</form>
