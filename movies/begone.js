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


const script_name = 'movies3.js';

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
                        console.log(`[tampermonkey] :: [${ script_name }] :: ${ this.domain } :: removed :: class :: ${className}`);
                    }}}}}

    hide_ids() {
        for (const idName of this.ids) {
            const idSearch = document.getElementById(idName);
            if (idSearch) {
                idSearch.remove();
                console.log(`[tampermonkey] :: [${ script_name }] :: ${ this.domain } :: removed :: id :: ${idName}`);
            }}}

    hide() {
        this.hide_classes();
        this.hide_ids();
    }

}



(function() {
    'use strict';
    const sites = [];

    // SITES

    sites.push(new SiteClass(
        'olevod.com',
        ['pc-footers','pc-sdier','right'],
        []
    ))


    sites.push(new SiteClass(
        'rophim.me',
        ['footer-elements','fade v-modal d-modal sspp-modal modal show','my-area','sspp-area is-post','app-download','denied-icon','item-v item-rate','item-v item-comment','v-line','v-rating','sspp-area is-3x2','fade modal-backdrop show','is-image',
        'quality-notice','discuss-wrap'],
        [
            'main_user',
            //'comment-area'
        ]
    ))


    sites.push(new SiteClass(
        'yfsp.tv',
        ['auth-label s','bl ng-star-inserted','ss-ctn','container-p','vg-bg','login_input_emoji','list icon_3','qrcode-box','user-login','user-item user-back user-news','gg-tips-text'],
        ['commentBox','sticky-block','commentsArea']
    ))


    sites.push(new SiteClass(
        'zhuimj.tv zhuimj.com',
        ['fed-foot-info fed-part-layout fed-back-whits',],
        []
    ))


    sites.push(new SiteClass(
        'movies',
        ['pc-content pc-ads','pc-home-swiper','pc-mask swiper-mask-circle','pc-home-swiper','inner position-relative w-100 h-100','inner position-relative w-100 h-100 ng-star-inserted','tab-live','vg-b','ads-mask-box',],
        []
    ))



    // Periodically call hide() on each SiteClass instance
    setInterval(() => {
        for (const site of sites) {
            site.hide();
        }
    }, 250);

})();



