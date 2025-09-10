// ==UserScript==
// @name         clean the entire world wide web
// @description  we need a cleaner internet. here is the start.
// @namespace    http://tampermonkey.net/
// @version      1.6
// @author       https://github.com/TheShellLand/tampermonkey
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons
// @grant        none
// ==/UserScript==


const DEBUG = 2;


class SiteClass {
    constructor(domain = 'generic', strict_domain_match = true, fuzzy = []) {
        this.domain = domain;
        this.strict_domain_match = strict_domain_match;
        this.fuzzy = fuzzy;
    }

    async hide_fuzzy() {

        function attributesContainsString(tag, string) {
            // check the element.attributes if it contains the string

            debug(`[tampermonkey] :: hide_fuzzy :: attributesContainsString :: tag :: ${tag} :: string :: ${string}`, 4);

            var attributes = tag.attributes;
            if (attributes === undefined) {return false;}

            var attrList = Array.from(attributes);
            for (var attrItem in attrList) {

                var attr = attrList[attrItem];
                var value = attr.value;
                debug(`[tampermonkey] :: hide_fuzzy :: attributesContainsString :: value :: ${value}`, 4);

                if (typeof(value) === undefined) {continue;}

                if (value.includes(string)) {
                    debug(`[tampermonkey] :: hide_fuzzy :: attributesContainsString :: FOUND :: ${attr}`, 3);
                    return true;}}

            return false;}


        function textContainsString(tag, string) {
            // check the element.text if it contains the string

            debug(`[tampermonkey] :: hide_fuzzy :: textContainsString :: tag :: ${tag} :: string :: ${string}`, 4);

            var check_text = tag.text;
            var check_innerText = tag.innerText;
            var check_textContent = tag.textContent;
            var check_simpleText = tag.simpleText;

            let textCheck = [
                check_text,
                check_simpleText,
                check_textContent,
                //check_innerText,
            ]

            var foundText = undefined;
            for (var check of textCheck) {
                if (check !== undefined) {
                    foundText = check;
                    break;
                }
            }

            if (foundText === undefined) {return false;}

            if (foundText.includes(string)) {
                debug(`[tampermonkey] :: hide_fuzzy :: textContainsString :: FOUND :: ${foundText}`, 3);
                return true;}

            return false;}


        // does the removing
        if (this.fuzzy.length > 0) {
            const allTags = Array.from(document.body.getElementsByTagName("*"));

            // Create one promise for each fuzzy term
            const fuzzyPromises = this.fuzzy.map(fuzzyName => {
                return Promise.all(allTags.map(async tag => {
                    if (attributesContainsString(tag, fuzzyName) || textContainsString(tag, fuzzyName)) {
                        debug(`[tampermonkey] :: ${ this.domain } :: removed :: ${tag.localName} :: ${fuzzyName}`, 1);
                        tag.remove();
                    }
                }));
            });

            // Wait for all fuzzy promises (and thus, all tag removals)
            await Promise.all(fuzzyPromises);
        }
    }


    hide() {

        if (this.strict_domain_match) {
            if (! document.domain.includes(this.domain)) {
                return;}
        }

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

    // Adding a new site
    //sites.push(new SiteClass('domain', true/false, ['class, id, data-name, element.attribute.value, element.text']) )

    sites.push(new SiteClass('instagram.com', true, ['xvbhtw8 x78zum5 xdt5ytf x5yr21d x1n2onr6','x1azxncr','contentinfo','_ap3a _aaco _aacw _aacx _aad6 _aadb','_aart _aaru _ai7q',]) )
    sites.push(new SiteClass('grok.com', true, ['upsell-small']) )
    sites.push(new SiteClass('lazada', true, ['banner-container-inner','pc-banner-slider-container','pc-channel-component','banner-wrapper','card-platform-campaign-banner-container','card-countdown','pc-download-module','banner-image','card-bottom-banner','topActionSell','topActionDownload','footer-first','footer-second','footer-third','footer-fourth','lzd-header-banner','lzd-menu-labels','hotBorder','module_inner_link']) )
    sites.push(new SiteClass('msn.com', true, ['cookiescript_pre_header']) )
    sites.push(new SiteClass('music.youtube.com', true, ['ytmusic-guide-signin-promo-renderer']) )
    sites.push(new SiteClass('openvpn.com', true, ['billing-banner']) )
    sites.push(new SiteClass('reddit.com', true, ['promotedlink relative block']) )
    sites.push(new SiteClass('stackoverflow.com', true, ['js-freemium-cta ps-relative mt32 mb8','onetrust-consent-sdk','ch-popover','notice-sidebar-popover','announcement-banner']) )
    sites.push(new SiteClass('youtube.com', true, ['footer','ytd-guide-signin-promo-renderer']) )

    sites.push(new SiteClass('olevod.com', true, ['detailsRnak','ads-all','login_input_emoji','qrcode-box','pc-ranking','pc-section-content','pc-ads','el-row pc-container pd0','nav-user df','pc-footers','pc-sdier','right']) )
    sites.push(new SiteClass('rophim.me', true, ['fade modal-backdrop show','footer-elements','fade v-modal d-modal sspp-modal modal show','my-area','sspp-area is-post','app-download','denied-icon','item-v item-rate','item-v item-comment','v-line','v-rating','sspp-area is-3x2','fade modal-backdrop show','is-image','quality-notice','discuss-wrap','main_user','comment-area'],true))
    sites.push(new SiteClass('yfsp.tv', true, ['video-publisher-container','box justify-content-end','auth-label s','bl ng-star-inserted','ss-ctn','container-p','vg-bg','login_input_emoji','list icon_3','qrcode-box','user-login','user-item user-back user-news','gg-tips-text','commentBox','sticky-block','commentsArea']) )
    sites.push(new SiteClass('zhuimj', true, ['fed-foot-info fed-part-layout fed-back-whits']) )

    // very general blanket
    sites.push(new SiteClass('remove cookie popups', false, ['top-banner msft-content-native-ad-preview label-fix sliver-style-tuning','cookiescript_injected']) )
    sites.push(new SiteClass('big dumpster fire', false, ['pc-content pc-ads','pc-home-swiper','pc-mask swiper-mask-circle','pc-home-swiper','inner position-relative w-100 h-100','inner position-relative w-100 h-100 ng-star-inserted','tab-live','vg-b','ads-mask-box','top-banner msft-content-native-ad-preview label-fix sliver-style-tuning','button button-medium button-outline-weak button button-medium button-outline-weak inline-block text-center max-w-full flex items-center button-promotion--icon-gradient button-promotion--full-gradient flex items-center gap-2','flex flex-1 flex-nowrap text-left ml-0 navigation-link-header-group-link navigation-link-header-group-link--force-min-block-size items-start','navigation-item w-full px-3 mb-0.5 navigation-link-header-group navigation-link-header-group--force-min-block-size navigation-link-header-group--expandable']) )



    // Periodically call hide() on each SiteClass instance
    async function hideAllSites(sites) {
        await Promise.all(sites.map(site => site.hide()));
    }

//    hideAllSites(sites).catch(console.error);

    const intervalId = setInterval(() => {
        hideAllSites(sites).catch(console.error);
    }, 2000);
    setTimeout(() => {
        clearInterval(intervalId);
    }, 10000);



})();
