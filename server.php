<?php

$toDo = [
    [
        'giorno' => 'Lunedì',
        'compiti' => ['fare i progetti', 'mangiare']

    ],
    [
        'giorno' => 'Martedì',
        'compiti' => ['fare i progetti', 'dormire']
    ],
    [
        'giorno' => 'Mercoledì',
        'compiti' => ['fare i progetti', 'cenare']
    ],
];

header('Content-Type: application/json');

// Trasforma $toDo in stringa, capibile anche per PHP
$jsonString = json_encode($toDo);
// Da chiedere, Output della stringa comprensibile per PHP, ma non dovrei usare un altro metodo per convertire la stringa in un array? su js si usava stringfy e un altro metodo
echo $jsonString;
