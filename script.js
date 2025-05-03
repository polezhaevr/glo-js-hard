'use strict'
const getRandomNumber = function() {
    return [...new Array(1)].map(() => Math.round(Math.random() * 100)).join('');
}
const getsNumber = function() {
    let currentCount = 3;
    const num = getRandomNumber();
    console.log('Загаданное число:', num);

    const isNumber = function(num) {
        if (num === null) return null;
        const trimmed = num.trim();
        if (!trimmed) return NaN;
        const number = Number(trimmed);
        return isNaN(number) ? NaN : number;
    }

    const getQuestion = function(str) {
        const question = confirm(str);
        if (question) {
            currentCount = 3;
            getsNumber();
            return;
        } else {
            alert('До свидания!')
        }
    }

    const gameBot = function() {

        if (currentCount <= 0) {
            getQuestion("Попытки закончились, хотите сыграть еще?");
            return;
        }

        let secretNumber = prompt("Угадай число от 1 до 100");

        if (secretNumber === null) {
            alert('Вы отказались от ввода , до свидания!!!');
        } else if (!isNumber(secretNumber)) {
            alert('Введи число!');
            return gameBot();
        } else if (secretNumber < num) {
            alert('Загаданное число больше , осталось попыток ' + currentCount--);
            return gameBot();
        } else if (secretNumber > num) {
            alert('Загаданное число меньше , осталось попыток ' + currentCount--);
            return gameBot();
        } else if (secretNumber == num) {
            getQuestion("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
        }
        console.dir(gameBot);

    }
    gameBot();
}

getsNumber()