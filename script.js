'use strict'

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const today = new Date().getDay();
const output = document.querySelector('.wrapper');

week.forEach((day, index) => {
    let line = day;
    if (index === today) {
        line = `<b>${line}</b>`;
    }

    if (index === 5 || index === 6) {
        line = `<i>${line}</i>`;
    }

    output.innerHTML += line + '<br>';

    console.log(day, index)
});