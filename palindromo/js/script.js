// chiedo la parola all'utente
const parola = prompt("Dammi una parola e ti diro se è palindroma");

// creo funzione check palindromo
function Palindrome(parola) {

    // creo una variabile len che mi rappresenta la lunghezza della parola / 2
    var len = (parola.length / 2);

    // creo un ciclo for in cui rimango al suo interno finchè i non sarò maggiore di len
    for (var i = 0; i < len; i++)

        // if in cui controllo se la lettera n[i] della parola (parola) è diversa lettera n[i] dell'altra metà della parola (-1 perchè gli array partono da 0)  
        if (parola[i] !== parola[parola.length - i - 1]) {

            // in caso fosse vero che la parola è diversa ritorno false perchè non è palindroma
            return false;
        }
    //se non sarà mai vera la condizione di sopra, vorrà dire che tutte le lettere saranno uguali e quindi la parola è palindroma e farrò un return di true
    return true;
}

//parte grafica in cui inserisco il risultato in base al true o false
if (Palindrome(parola) === true) {
    document.getElementById("result").innerHTML = "Si, è palindroma";
} else {
    document.getElementById("result").innerHTML = "No, non è palindroma";
}

