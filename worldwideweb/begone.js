// ==UserScript==
// @name         the entire world wide web
// @namespace    http://tampermonkey.net/
// @version      2025-09-09
// @description  poof!
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
        'instagram.com',
        ['_ap3a _aaco _aacw _aacx _aad6 _aadb','_aart _aaru _ai7q',],
    ))

    sites.push(new SiteClass(
        'youtube.com',
        [],
    ))

    sites.push(new SiteClass(
        'reddit.com',
        ['promotedlink relative block'],
    ))

    sites.push(new SiteClass(
        'stackoverflow.com',
        ['js-freemium-cta ps-relative mt32 mb8',
        'onetrust-consent-sdk','ch-popover','notice-sidebar-popover','announcement-banner',]
    ))

    sites.push(new SiteClass(
        'msn.com',
        ['cookiescript_pre_header'],
    ))

    sites.push(new SiteClass(
        'cookies',
        ['top-banner msft-content-native-ad-preview label-fix sliver-style-tuning',
        'cookiescript_injected']
    ))

    sites.push(new SiteClass(
        'dumpster',
        ['top-banner msft-content-native-ad-preview label-fix sliver-style-tuning',
        'button button-medium button-outline-weak button button-medium button-outline-weak inline-block text-center max-w-full flex items-center button-promotion--icon-gradient button-promotion--full-gradient flex items-center gap-2',
        'flex flex-1 flex-nowrap text-left ml-0 navigation-link-header-group-link navigation-link-header-group-link--force-min-block-size items-start',
        'navigation-item w-full px-3 mb-0.5 navigation-link-header-group navigation-link-header-group--force-min-block-size navigation-link-header-group--expandable',
        'cookiescript_injected']
    ))



    // Periodically call hide() on each SiteClass instance
    setInterval(() => {
        for (const site of sites) {
            site.hide();
        }
    }, 1000);


})();
