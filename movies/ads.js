// ==UserScript==
// @name         movies
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


function hideStuff() {

    try {
        const className = 'is-image';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}

    try {
        const className = 'pc-content pc-ads';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}

    try {
        const className = 'pc-home-swiper';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}

    try {
        const className = 'pc-mask swiper-mask-circle';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}

    try {
        const className = 'pc-home-swiper';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}

    try {
        const className = 'inner position-relative w-100 h-100';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}

    try {
        const className = 'inner position-relative w-100 h-100 ng-star-inserted';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}

    try {
        const className = 'tab-live';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}

    try {
        const className = 'vg-b';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}

    try {
        const className = 'ads-mask-box';
        if (document.getElementsByClassName(className)[0]) {document.getElementsByClassName(className)[0].remove()}; console.log(`[main] :: removed :: ${ className }`)} catch (error) {}


}

setInterval(hideStuff, 250);
