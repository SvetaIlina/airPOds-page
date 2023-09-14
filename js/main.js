'use strict'

const chooseColorBtns = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content__item');
const backGround = document.querySelector('.header__content-img');



chooseColorBtns.forEach(item => item.addEventListener('click', changeColor));

function changeColor(e) {
    const target = e.currentTarget;
    chooseColorBtns.forEach(item => item.classList.remove('choose-color__btn--active'));
    target.classList.add('choose-color__btn--active');
    contentItem.forEach(item => {
        item.classList.remove('content__item--active');
        if (item.classList.contains(`${target.dataset.button}`)) {
            item.classList.add('content__item--active');
        };
    });
   
 };

