"use strict";

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    nav: false,
    controls: false,
    fixedWidth: false
  });

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev')
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next')
});
