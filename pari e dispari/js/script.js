
const userChoice = prompt("Scegli se PARI o DISPARI");
const nUser = parseInt(prompt("Gerry è tornato. Ti punta il ferro e ti urla di dargli un numero da 1 a 5!"));

if (userChoice === "PARI") {
    if (sumEvenOrOdd() === "pari") {
        document.getElementById("result").innerHTML = "Hai vinto! La somma del tuo numero più quella del computer è pari!";
    } else {
        document.getElementById("result").innerHTML = "Hai perso! La somma del tuo numero più quella del computer è dispari! Gerry ti spara.";
        console.log("perso pari")
    }

} else if (userChoice === "DISPARI") {
    if (sumEvenOrOdd() === "dispari") {
        document.getElementById("result").innerHTML = "Hai vinto! La somma del tuo numero più quella del computer è dispari!";
    } else {
        document.getElementById("result").innerHTML = "Hai perso! La somma del tuo numero più quella del computer è pari";
    }
}



//funzioni

// funzione numero random


function randomNumber() {

    return Math.floor(Math.random() * 5 + 1);
}

function sumEvenOrOdd() {
    let nSum = nUser + randomNumber();
    console.log("valore nSum", nSum);
    let pari = "pari";
    let dispari = "dispari";

    if (nSum % 2 === 0) {
        // console.log("somma pari", pari);
        return pari;
    } else {
        // console.log("somma dispari", dispari);
        return dispari;
    }
}
