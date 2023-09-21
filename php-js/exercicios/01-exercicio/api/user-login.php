<?php

    $users = [
        ['id' => 1, 'name' => 'John Doe', 'email' => 'john@gmail.com', 'password' => '123456'],
        ['id' => 2, 'name' => 'Mary Doe', 'email' => 'mary@gmail.com', 'password' => '123456'],
        ['id' => 3, 'name' => 'Peter Doe', 'email' => 'peter@gmail.com', 'password' => '123456'],
        ['id' => 4, 'name' => 'Jane Doe', 'email' => 'jane@gmail.com', 'password' => '123456']
    ];

    $email = filter_input(INPUT_POST,"email");
    $password = filter_input(INPUT_POST,"password");

    $find = false;
    foreach ($users as $user){
        if($user["email"] == $email && $user["password"] == $password){
            $find = true;
            break;
        }
    }

    if($find){
        echo json_encode($user);
    } else {
        $user = ["error" => "Usário ou senha Inválido"];
        echo json_encode($user);
    }
