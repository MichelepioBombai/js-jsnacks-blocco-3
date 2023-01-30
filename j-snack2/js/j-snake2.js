// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const array = []

// const userNumber = parseInt(prompt("scrivi un numero che vorresti aggiungere"))

let sum = 0


while (sum < 50){
    numero = parseInt(prompt("scrivi un numero che vorresti aggiungere"))
    array.push(numero);
    sum += numero
}

console.log(sum);
console.log(array);

