"use strict";

function primeNumber(num) {
    //checks whether num is a prime number
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function getPrime(num) {

    if (typeof num != "number" || num <= 0) {
        //ensures num is type Number and is greater than zero
        return "Invalid input";
    }

    let primeNumArray = []; //to store array of prime numbers

    for (let i = 1; i <= num; i++) {
        if (primeNumber(i)) {
            primeNumArray.push(i);
        }
    }

    return primeNumArray;
}
module.exports = getPrime;