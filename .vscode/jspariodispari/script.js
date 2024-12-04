/** L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// chiedi all'utente di scegliere un numero da 1 a 5
const user = Number (prompt('Scegli un numero tra 1 a 5'));
const userNumber = Math.floor(Math.random() * 5) + 1;

// genera un numero random da 1 a 5 per il computer

const computerNumber = getRandomNumber ();

function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// fai la somma dei due numeri

const sum = user + computerNumber;

console.log(`Il numero scelto dall'utente: ${user}`);
console.log(`Il numero generato dal computer: ${computerNumber}`);
console.log(`La somma dei due numeri è: ${sum}`);

// verifica se la somma dei due numeri e pari o dispari

if ( sum % 2 === 0){
    console.log(`La somma dei due numeri è pari: ${sum}`);
} else {
    console.log (`La somma dei due numeri è dispari: ${sum}`)
}
// fai una verifica di chi ha vinto