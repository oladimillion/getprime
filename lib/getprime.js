function primeNumber(num) {

    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function getPrime(num) {

    if (typeof num != "number")
        return "Enter an integer, please!";

    var primeNumArray = [];

    for (var i = 1; i <= num; i++) {
        if (primeNumber(i)) {
            primeNumArray.push(i);
        }
    }

    return primeNumArray;
}
console.log(getPrime(70));
//console.log(primeNumber(9));