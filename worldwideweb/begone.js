// ==UserScript==
// @name         the entire world wide web
// @namespace    http://tampermonkey.net/
// @version      2025-08-11
// @description  poof!
// @author       You
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rophim.me
// @grant        none
// ==/UserScript==



(function() {
    'use strict';

    const classes = [
        'top-banner msft-content-native-ad-preview label-fix sliver-style-tuning',
        'config_index_views_prg-apperror_topbanner_waterfall',
        'cookiescript_pre_header',
        'js-freemium-cta ps-relative mt32 mb8',
    ];
    const ids = [
        'cookiescript_injected',
        'tpbr_topbar',
        'onetrust-consent-sdk',
        'ch-popover',
    ];


    function hideStuff(classes, ids) {

        // delete id
        for (const idName of ids) {
            const idSearch = document.getElementById(idName);
            if (idSearch) {
                idSearch.remove();
                console.log(`[tampermonkey] :: [www.js] :: removed :: class :: ${ idName }`);
            };
        };


        // delete class
        for (const className of classes) {
            const classSearch = document.getElementsByClassName(className);
            if (classSearch.length) {
                for (let i = 0; i < classSearch.length; i++) {
                    if (classSearch[i]) {
                        classSearch[i].remove();
                        console.log(`[tampermonkey] :: [www.js] :: removed :: id :: ${ className }`);
                    }
                }
            }

        };


    };

    setInterval(() => hideStuff(classes, ids), 250);


})();
