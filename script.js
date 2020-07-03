// создаем обработчик событий, который начнет выполнять скрипт только после загрузки всего DOM
window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    /* получаем нужные нам элементы со страницы,
       а именно кнопки, родитель кнопок, чтобы далее сделать делигирование
       и сам контент, который при нажатии на кнопку должен появляться, а все остальное скрываться
    */
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    // пишем функцию которая скрывает не нужный нам контент, параметр а нам нужен чтобы не скрывали нужный нам контент
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    // указываем в технический параметр а 1, чтобы не скрывался нужный нам контент
    hideTabContent(1);

    // данная функция позволяет сделать скрытый контент вновь видимым
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');

        }
    }

    // делаем делигирование события, чтобы не назначть каждой функции свою кнопку
    info.addEventListener('click', function(event) {
        // переносим в переменную target event.target, чтобы знать куда мы тыкнули
        let target = event.target;
        // прописываем условие, чтобы узнать туда ли тыкнул пользователь куда нам нужно
        if (target && target.classList.contains('info-header-tab')) {
            // если он тыкнул правильно, то нужно скрыть ненужный контент и открыть тот на который он тыкнул
            for (let i = 0; i < tab.length; i++) {
                // с помощью цикла перебираем все tab-ы и когда находим нужный, скрываем все и оставляем нужный
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timet

    // задаем конечную дату
    let deadlain = '2020-08-12';

    // находим разницу между конечной датой и настоящей датой
    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = ((t/1000) % 60).toFixed(),
            minutes = Math.floor(((t/1000/60) % 60)),
            hours = ((t/1000/60/60) % 24).toFixed(),
            days = (t/1000/60/60/24).toFixed();

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds,
                'days' : days
            };

    }

    //

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);

            if (seconds.textContent === '11' && minutes.textContent === '20' && hours.textContent === '18') {
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            } else {
                seconds.textContent = t.seconds;
                if (seconds.textContent.length != 2) {
                    seconds.textContent = '0' + t.seconds;
                } else if (seconds.textContent === '59') {
                    minutes.textContent = t.minutes; 
                }
                if (minutes.textContent.length != 2) {
                    minutes.textContent = '0' + t.minutes;
                } else if (minutes.textContent === '59') {
                    hours.textContent = t.hours;
                }
                if (hours.textContent.length != 2) {
                    hours.textContent = '0' + t.hours;
                }
            }
        }
    }

    setClock('timer', deadlain);





});