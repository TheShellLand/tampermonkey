// ==UserScript==
// @name         movies3
// @namespace    http://tampermonkey.net/
// @version      2025-08-11
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rophim.me
// @grant        none
// ==/UserScript==


const DEBUG = 2;


class SiteClass {
    constructor(domain = 'generic', fuzzy = [], strict_domain_match = false) {
        this.domain = domain;
        this.fuzzy = fuzzy;
        this.strict_domain_match = strict_domain_match;
    }

    hide_classes() {
        for (const className of this.classes) {
            const classSearch = document.getElementsByClassName(className);
            if (classSearch.length) {
                for (let i = 0; i < classSearch.length; i++) {
                    if (classSearch[i]) {
                        classSearch[i].remove();
                        console.log(`[tampermonkey]:: ${ this.domain } :: removed :: class :: ${className}`);
                    }}}}}

    hide_ids() {
        for (const idName of this.ids) {
            const idSearch = document.getElementById(idName);
            if (idSearch) {
                idSearch.remove();
                console.log(`[tampermonkey] :: ${ this.domain } :: removed :: id :: ${idName}`);
            }}}

    hide_tags() {
        for (const tagName of this.tags) {
            const tagSearch = document.getElementsByTagName(tagName);
            if (tagSearch.length) {
                for (let i = 0; i < tagSearch.length; i++) {
                    if (tagSearch[i]) {
                        tagSearch[i].remove();
                        console.log(`[tampermonkey] :: ${ this.domain } :: removed :: tag :: ${tagName}`);
                    }}}}}

    hide_names() {
        for (const nameName of this.names) {
            const nameSearch = document.getElementsByName(nameName);
            if (nameSearch.length) {
                for (let i = 0; i < nameSearch.length; i++) {
                    if (nameSearch[i]) {
                        nameSearch[i].remove();
                        console.log(`[tampermonkey] :: ${ this.domain } :: removed :: name :: ${nameName}`);
                    }}}}}

    hide_fuzzy() {

        // check if string is anywhere in the element
        function elementContainsString(tag, string) {
            debug(`[tampermonkey] :: hide_fuzzy :: elementContainsString :: tag :: ${tag} :: string :: ${string}`, 4);

            if (tag.attributes === undefined) {return false;}

            var attrList = Array.from(tag.attributes);
            for (var attrItem in attrList) {

                var attr = attrList[attrItem];
                debug(`[tampermonkey] :: hide_fuzzy :: elementContainsString :: attr :: ${attr.value}`, 4);

                if (typeof(attr.value) === undefined) {continue;}

                if (attr.value.includes(string)) {
                    debug(`[tampermonkey] :: hide_fuzzy :: elementContainsString :: FOUND :: ${attr}`, 3);
                    return true;}}

            return false;}


        if (this.fuzzy.length > 0) {

            var allTags = document.getElementsByTagName("*");
            //var allTags = document.body.getElementsByTagName("div");

            for (var tag of allTags) {
                debug(`[tampermonkey] :: ${ this.domain } :: hide_fuzzy :: tag :: ${tag}`, 4);

                for (var fuzzyName of this.fuzzy) {
                    debug(`[tampermonkey] :: ${ this.domain } :: hide_fuzzy :: fuzzyName :: ${fuzzyName}`, 4);
                    if (elementContainsString(tag, fuzzyName)) {
                        tag.remove();
                        debug(`[tampermonkey] :: ${ this.domain } :: removed :: ${tag.localName} :: ${fuzzyName}`, 1);
                    }}}
        }}

    hide() {

        if (this.strict_domain_match) {
            if (! document.domain.includes(this.domain)) {
                return;}
        }

        //this.hide_classes();
        //this.hide_ids();
        //this.hide_tags();
        //this.hide_names();
        this.hide_fuzzy();
    }

}



function debug (log, level = 0) {
    if (level <= DEBUG) {
        console.log(`${log}`)}}


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
        ['footer-elements','fade v-modal d-modal sspp-modal modal show','my-area','sspp-area is-post','app-download',
        'denied-icon','item-v item-rate','item-v item-comment','v-line','v-rating','sspp-area is-3x2',
        'fade modal-backdrop show','is-image',
        'quality-notice','discuss-wrap',
        'main_user','comment-area'],
        true
    ))


    sites.push(new SiteClass(
        'yfsp.tv',
        ['auth-label s','bl ng-star-inserted','ss-ctn','container-p','vg-bg','login_input_emoji','list icon_3',
        'qrcode-box','user-login','user-item user-back user-news','gg-tips-text',
        'commentBox','sticky-block','commentsArea']
    ))


    sites.push(new SiteClass(
        'zhuimj.tv zhuimj.com',
        ['fed-foot-info fed-part-layout fed-back-whits'],
    ))


    sites.push(new SiteClass(
        'dumpster',
        ['pc-content pc-ads','pc-home-swiper','pc-mask swiper-mask-circle','pc-home-swiper',
        'inner position-relative w-100 h-100','inner position-relative w-100 h-100 ng-star-inserted','tab-live','vg-b','ads-mask-box',],
    ))



    // Periodically call hide() on each SiteClass instance
    setInterval(() => {
        for (const site of sites) {
            site.hide();
        }
    }, 1000);


})();
