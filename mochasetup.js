define([
    'jquery',
    'expect',
    'mocha/../mocha',
    'css!1000:mocha/../mocha.css'
], function($, expect, mocha) {
    $('<div id=mocha></div>').appendTo('body');
    window.mocha.setup('bdd');
    return window.mocha;
});
