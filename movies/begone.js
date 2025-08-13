// ==UserScript==
// @name         movies3
// @namespace    http://tampermonkey.net/
// @version      2025-08-11
// @description  try to take over the world!
// @author       You
// @match        *://*.rophim.me/*
// @match        *://*.olevod.com/*
// @match        *://*.yfsp.tv/*
// @match        *://*.zhuimj.tv/*
// @match        *://*.zhuimj.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rophim.me
// @grant        none
// ==/UserScript==



class SiteClass {
    constructor(domain = 'generic', classes = [], ids = []) {
        this.domain = domain;
        this.classes = classes;
        this.ids = ids;
    }

    hide_classes() {
        for (const className of this.classes) {
            const classSearch = document.getElementsByClassName(className);
            if (classSearch.length) {
                for (let i = 0; i < classSearch.length; i++) {
                    if (classSearch[i]) {
                        classSearch[i].remove();
                        console.log(`[tampermonkey] :: [begone.js] :: ${ this.domain } :: removed :: class :: ${className}`);
                    }}}}}

    hide_ids() {
        for (const idName of this.ids) {
            const idSearch = document.getElementById(idName);
            if (idSearch) {
                idSearch.remove();
                console.log(`[tampermonkey] :: [begone.js] :: ${ this.domain } :: removed :: id :: ${idName}`);
            }}}

    hide() {
        this.hide_classes();
        this.hide_ids();
    }

}



(function() {
    'use strict';


    const olevod = new SiteClass(
        'olevod.com',
        [
            'pc-footers',
        ],
        [

        ]
    )


    const rophim = new SiteClass(
        'rophim.me',
        [
            'footer-elements',
            'fade v-modal d-modal sspp-modal modal show',
            'my-area',
            'sspp-area is-post',
        ],
        [

        ]
    )


    const yfsp = new SiteClass(
        'yfsp.tv',
        [
            'auth-label s',
            'bl ng-star-inserted',
            'ss-ctn',
            'container-p',
        ],
        [
            'commentBox',
        ]
    )


    const zhuimj = new SiteClass(
        'zhuimj.tv zhuimj.com',
        [
            'fed-foot-info fed-part-layout fed-back-whits',
        ],
        []
    )


    const movies = new SiteClass(
        'movies',
        [
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
        ],
        []
    )


    const sites = [
        movies,
        yfsp,
        rophim,
        olevod,
        zhuimj,
    ];


    // Periodically call hide() on each SiteClass instance
    setInterval(() => {
        for (const site of sites) {
            site.hide();
        }
    }, 250);

})();



