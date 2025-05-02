'use strict'

let arr = [...new Array(7)].map(() => Math.round(Math.random() * 100)).map(String)

console.log(arr)

for (let i = 0; i < 7; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

const isPrimeNumber = function(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return num !== 1
}

const getPrimeNUmber = function(numMax) {
    for (let i = 2; i <= numMax; i++) {
        if (isPrimeNumber(i)) console.log("Простое число:", i, "делители этого числа:", 1, "и", i);
    }
}

getPrimeNUmber(500);