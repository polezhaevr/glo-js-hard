let num = 266219,
    newNum = num.toString().split('').reduce((accumulator, currentValue) =>
        accumulator * currentValue, 1) ** 3;

let sliceNewNum = newNum.toString().slice(0, 2);
console.log(Number(sliceNewNum));