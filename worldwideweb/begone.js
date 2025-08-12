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


    // SITES
    const instagram = new SiteClass(
        'instagram.com',
        [
            '_ap3a _aaco _aacw _aacx _aad6 _aadb',
            '_aart _aaru _ai7q',
        ],
        []
    )

    const youtube = new SiteClass(
        'youtube.com',
        [],
        []
    )

    const reddit = new SiteClass(
        'reddit.com',
        [
            'promotedlink relative block'
        ],
        []
    )

    const stackoverflow = new SiteClass(
        'stackoverflow.com',
        [
            'js-freemium-cta ps-relative mt32 mb8',
        ],
        [
            'onetrust-consent-sdk',
            'ch-popover',
            'notice-sidebar-popover',
            'announcement-banner',
        ]
    )

    const msn = new SiteClass(
        'msn.com',
        ['cookiescript_pre_header'],
        []
    )

    const cookies = new SiteClass(
        'cookies',
        ['top-banner msft-content-native-ad-preview label-fix sliver-style-tuning'],
        ['cookiescript_injected']
    )

    const misc = new SiteClass(
        'misc',
        ['top-banner msft-content-native-ad-preview label-fix sliver-style-tuning'],
        ['cookiescript_injected']
    )


    const sites = [
        instagram,
        youtube,
        reddit,
        stackoverflow,
        msn,
        cookies,
        misc
    ];


    // Periodically call hide() on each SiteClass instance
    setInterval(() => {
        for (const site of sites) {
            site.hide();
        }
    }, 250);


})();
