let num = 266219,
    newNum = num.toString().split('').reduce((accumulator, currentValue) =>
        accumulator * currentValue, 1) ** 3;

console.log(newNum.toString().slice(0, 2))