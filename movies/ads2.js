// ==UserScript==
// @name         movies2
// @namespace    http://tampermonkey.net/
// @version      2025-08-11
// @description  try to take over the world!
// @author       You
// @match        https://www.rophim.me/*
// @match        https://www.olevod.com/*
// @match        https://www.yfsp.tv/*
// @match        https://www.zhuimj.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rophim.me
// @grant        none
// ==/UserScript==




(function() {
    'use strict';

    const classes = [
        'is-image',
        'pc-content pc-ads',
        'pc-home-swiper',
        'pc-mask swiper-mask-circle',
        'pc-home-swiper',
        'inner position-relative w-100 h-100',
        'inner position-relative w-100 h-100 ng-star-inserted',
        'tab-live',
        'vg-b',
        'ads-mask-box',
    ];
    const ids = [

    ];


    function hideStuff(classes, ids) {

        // delete id
        for (const idName of ids) {
            try {
                const idSearch = document.getElementById(idName);
                if (idSearch) {
                    idSearch.remove();
                    console.log(`[tampermonkey] :: [movies.js] :: removed :: ${ idName }`);
                };

            } catch (error) {
                console.error(`[tampermonkey] :: [movies.js] :: ERROR :: ${ idName }: ${error.message}`);
            };
        };


        // delete class
        for (const className of classes) {
            try {
                const classSearch = document.getElementsByClassName(className);
                if (classSearch.length) {
                    for (let i = 0; i < classSearch.length; i++) {
                        if (classSearch[i]) {
                            classSearch[i].remove();
                            console.log(`[tampermonkey] :: [movies.js] :: removed :: ${ className }`);
                        }
                    }
                }

            } catch (error) {
                console.error(`[tampermonkey] :: [movies.js] :: ERROR :: ${ className }: ${error.message}`);
            }

        };


    };

    setInterval(() => hideStuff(classes, ids), 250);
    //setInterval(hideStuff, 250);

})();



