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


});