<?php

require "connection.php";

$query = "INSERT INTO patients (name, age, medical_record) 
          VALUES (:name, :age, :medical_record)";