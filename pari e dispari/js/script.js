
const userChoice = prompt("Scegli se PARI o DISPARI");
const nUser = prompt("Gerry è tornato. Ti punta il ferro e ti urla di dargli un numero da 1 a 5!");
console.log(nUser);
console.log(userChoice);

const nComputer = randomNumber()
console.log(nComputer);
console.log(sumEvenOrOdd())

if (userChoice === PARI) {
    if (sumEvenOrOdd === "pari") {
        document
    }
}



//funzioni

function sumEvenOrOdd() {
    let nSum = nUser + randomNumber()
    let pari = "pari"
    let dispari = "dispari"

    if (nSum % 2 === 0) {
        return pari
    } else {
        return dispari
    }
}

// funzione numero random
function randomNumber() {
    return Math.floor(Math.random() * 5 + 1)
}

