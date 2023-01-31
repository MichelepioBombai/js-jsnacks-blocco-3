// Genera un numero a caso compreso tra 1-100. Chiedi all’utente un numero fino a quando non indovina quello generato casualmente. Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente. 

const randomNumber = Math.floor(Math.random() * 100) + 1;

let userNumber = 0;
let tentativi = 0;


console.log(randomNumber);
while (userNumber !== randomNumber){ 
    userNumber = parseInt(prompt("inserisci un numero"));
    tentativi++;


    if (randomNumber < userNumber) {
        console.log(`il numero selezionato è minore di ${userNumber}`);
    }  else if (randomNumber > userNumber){
        console.log(`il numero selezionato è maggiore di ${userNumber}`);
    } else{
        console.log(`hai indovinato il numero ${randomNumber}`);
        
    }
}


console.log("Hai indovinato in " + tentativi + " tentativi!");

