DESCRIZIONE
Dobbiamo creare una web-app che permetta di leggere una lista di Todo a partire da una WebApi.

STACK
Html, CSS, VueJS e Axios (importati tramite CDN), PHP

CONSIGLI
Nello svolgere l’esercizio seguite un approccio graduale.
Prima assicuratevi che la vostra pagina di frontend "index.html" riesca a comunicare correttamente con il vostro script PHP "api.php".
Richiamate i dati tramite axios e stampateli in pagina.

BONUS
Realizzare un pò di layout
Mostrare lo stato del task → se completato, barrare il testo
Prevedere dei metodi per cambiare lo stato di un task cliccandoci sopra (completato/incorso) e uno per aggiungere nuove task. Lo farete in locale, da Vue, sull'array nel data. Domani invece la stessa cosa verrà fatta comunicando di nuovo con il server.



Parte 2
DESCRIZIONE
Continuate lo sviluppo della web-app ma implementando la persistenza dei dati.
Vi consiglio di seguire le milestone.
MILESTONE 1
Ricalcate i passaggi visti in mattinata: spostate l'array da PHP ad un file JSON, adeguando la sintassi al nuovo formato.

Leggete il contenuto del file e restituitelo (con echo) quando arriva la chiamata che deve ottenere la lista dei risultati.
Rinominate questo file come list.php e aggiornate la chiamata axios di conseguenza.

MILESTONE 2
Creare un nuovo file create.php che sarà l'endpoint della vostra API da richiamare per aggiungere un ToDo.
Questo file dovrà controllare la presenza dei dati necessari nel $_POST e poi usarli per creare un nuovo ToDo.
A questo punto ricordate il giro:
    leggo il testo presente nel file JSON su disco
    lo converto da JSON ad Array PHP
    aggiungo il nuovo studente nell'array
    riconverto in JSON
    scrivo nuovamente su file
Completato il giro stampate il contenuto del file aggiornato.