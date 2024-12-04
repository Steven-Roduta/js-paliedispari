/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


// Crea la funzione di parole

function isPalindrome(word) {
    // ho messo i metodi di array per riuscire a confrontare le parole invertite
    let reversedWord = word.toLowerCase().split('').reverse().join('');
    return word.toLowerCase() === reversedWord;
}

// Chiedere all'utente di inserire una parola
let userWord = prompt("Inserisci una parola😁");

// VERIFICA SE E' PALINDROMA UGUALE SE NON E' PALINDROMA
if (isPalindrome(userWord)) {
    console.log(`La parola "${userWord}" è palindroma😊`);
 
} else {
    console.log(`La parola "${userWord}" non è palindroma🥲.`);
}
