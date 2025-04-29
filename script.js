'use strict'
let lang = prompt("Введите 'ru' , или 'en' для вывода дней недели на соотвестующем языке.");
const languages = {
        ru: ['Понедельник', 'Вторник', 'Седа', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    namePerson = prompt("Введите 'Артем' или 'Александр' , или любое другое имя"),
    professions = ["Директор", "Преподаватель", "Студент"],
    result = namePerson == "Артем" ? console.log(professions[0]) :
    namePerson == "Александр" ? console.log(professions[1]) : console.log(professions[2]);

if (lang == "ru") {
    console.log(languages.ru);
} else if (lang == "en") {
    console.log(languages.en);
} else {
    console.log("Введите либо 'ru' , либо 'en'");
};