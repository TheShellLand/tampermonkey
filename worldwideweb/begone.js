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

const script_name = 'begone.js';

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
        'instagram.com',
        ['_ap3a _aaco _aacw _aacx _aad6 _aadb','_aart _aaru _ai7q',],
        []
    ))

    sites.push(new SiteClass(
        'youtube.com',
        [],
        []
    ))

    sites.push(new SiteClass(
        'reddit.com',
        ['promotedlink relative block'],
        []
    ))

    sites.push(new SiteClass(
        'stackoverflow.com',
        ['js-freemium-cta ps-relative mt32 mb8'],
        ['onetrust-consent-sdk','ch-popover','notice-sidebar-popover','announcement-banner',]
    ))

    sites.push(new SiteClass(
        'msn.com',
        ['cookiescript_pre_header'],
        []
    ))

    sites.push(new SiteClass(
        'cookies',
        ['top-banner msft-content-native-ad-preview label-fix sliver-style-tuning'],
        ['cookiescript_injected']
    ))

    sites.push(new SiteClass(
        'misc',
        [
            'top-banner msft-content-native-ad-preview label-fix sliver-style-tuning',
            'button button-medium button-outline-weak button button-medium button-outline-weak inline-block text-center max-w-full flex items-center button-promotion--icon-gradient button-promotion--full-gradient flex items-center gap-2',
            'flex flex-1 flex-nowrap text-left ml-0 navigation-link-header-group-link navigation-link-header-group-link--force-min-block-size items-start',
            'navigation-item w-full px-3 mb-0.5 navigation-link-header-group navigation-link-header-group--force-min-block-size navigation-link-header-group--expandable',
        ],
        ['cookiescript_injected']
    ))



    // Periodically call hide() on each SiteClass instance
    setInterval(() => {
        for (const site of sites) {
            site.hide();
        }
    }, 250);


})();
