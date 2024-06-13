<?php

$toDo = [
    [
        'giorno' => 'Lunedì',
        'compiti' => [
            [
                'descrizione' => 'fare i progetti',
                'completato' => true
            ],
            [
                'descrizione' => 'mangiare',
                'completato' => false
            ]
        ]
    ],
    [
        'giorno' => 'Martedì',
        'compiti' => [
            [
                'descrizione' => 'fare i progetti',
                'completato' => false
            ],
            [
                'descrizione' => 'dormire',
                'completato' => false
            ]
        ]
    ],
    [
        'giorno' => 'Mercoledì',
        'compiti' => [
            [
                'descrizione' => 'fare i progetti',
                'completato' => false
            ],
            [
                'descrizione' => 'cenare',
                'completato' => false
            ]
        ]
    ],
];

header('Content-Type: application/json');

// Trasforma $toDo in stringa, capibile anche per PHP
$jsonString = json_encode($toDo);
// Da chiedere, Output della stringa comprensibile per PHP, ma non dovrei usare un altro metodo per convertire la stringa in un array? su js si usava stringfy e un altro metodo
echo $jsonString;
