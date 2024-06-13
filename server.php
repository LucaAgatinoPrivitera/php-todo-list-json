<?php

$toDo = [
    [
        'name',
        'last_name'
    ],
    [
        'name' => 'Giovanna',
        'last_name' => 'Bianchi'
    ],
    [
        'name' => 'Giuseppe',
        'last_name' => 'Verdi'
    ],
];

header('Content-Type: application/json');

// Trasforma $toDo in stringa, capibile anche per PHP
$jsonString = json_encode($toDo);
// Da chiedere, Output della stringa comprensibile per PHP, ma non dovrei usare un altro metodo per convertire la stringa in un array? su js si usava stringfy e un altro metodo
echo $jsonString;