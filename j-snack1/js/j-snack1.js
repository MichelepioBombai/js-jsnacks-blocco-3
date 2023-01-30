// Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.


const valoreMinimo = parseInt(prompt ("inserisci un valore minimo"))
const valoreMassimo = parseInt(prompt("inserisci un valore massimo"))

const numeroScelto = Math.floor(Math.random() * (valoreMassimo - valoreMinimo + 1)) + valoreMinimo ;

console.log("numero casuale generato: " + numeroScelto);