window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let calc = require('./js/parts/calc.js'),
        timer = require('./js/parts/timer.js'),
        tabs = require('./js/parts/tabs.js'),
        slider = require('./js/parts/slider.js'),
        modal = require('./js/parts/modal.js'),
        form = require('./js/parts/form.js');

    calc();
    timer();
    tabs();
    slider();
    form();
    modal();
});