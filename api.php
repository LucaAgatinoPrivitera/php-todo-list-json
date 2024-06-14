<?php

//leggo il file json dal disco
$fileContent = file_get_contents("dati.json");


//se ho i dati per aggiungere uno studente...
if (isset($_POST["compiti"])) {

    //converto il json in un array associativo php
    $toDo = json_decode($fileContent, true);

    //creo un nuovo studente
    $newTask = $_POST["compiti"];


    //pusho lo studente appena creato nel mio array
    $toDo[0]["compiti"][] = $newTask;
    // Da chiedere come posso togliere questo 0

    //converto tutto l'array in un json
    $fileContent = json_encode($toDo);

    //scrivo il json su disco
    file_put_contents("dati.json", $fileContent);
}


header('Content-Type: application/json');

echo $fileContent;
