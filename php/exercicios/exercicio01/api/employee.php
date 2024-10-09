<?php
    $job = $_POST["job"] ?? null;
    $salary = $_POST["salary"] ?? null;
    echo "Oi Empregado, seu cargo é {$job} seu salario é {$salary}!";