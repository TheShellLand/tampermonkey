// ==UserScript==
// @name         movies
// @namespace    http://tampermonkey.net/
// @version      2025-08-11
// @description  try to take over the world!
// @author       You
// @match        https://www.rophim.me/*
// @match        https://www.olevod.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rophim.me
// @grant        none
// ==/UserScript==


function hideStuff() {

    try {
        const className = 'is-image';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}

}

setInterval(hideStuff, 250);
