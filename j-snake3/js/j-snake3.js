// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const userNumber = parseInt(prompt("inserisci un numero"))


for (let i = 0; i < userNumber; i++) {
    
    let myArray = [ ];
    for (let i = 0; i < 10; i++) {
        myArray.push(Math.floor(Math.random() * 100) + 1)
    }

    console.log(myArray);
}


