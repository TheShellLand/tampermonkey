// ==UserScript==
// @name         the entire world wide web
// @namespace    http://tampermonkey.net/
// @version      2025-08-11
// @description  poof!
// @author       You
// @match        https://*.*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rophim.me
// @grant        none
// ==/UserScript==


function hideStuff() {

    try {
        const className = '';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}
}

setInterval(hideStuff, 250);
