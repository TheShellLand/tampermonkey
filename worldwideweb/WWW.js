// ==UserScript==
// @name         clean the entire world wide web
// @description  we need a cleaner internet. here is the start.
// @namespace    http://tampermonkey.net/
// @version      2026.02.27
// @author       https://github.com/TheShellLand/tampermonkey
// @match        https://*/*
// @match        http://*/*
// @icon         https://www.google.com/s2/favicons
// @grant        none
// ==/UserScript==


var DEBUG = 1;
var AGGRESSION = 12;



// SITES

// Adding a new site
//sites.push(new SiteClass('domain', true/false, ['class, id, data-name, element.attribute.value, element.text']) )
//sites.push(new SiteClass('', true, ['']) )

const sites = [];

function main (log, level = 0) {

    sites.push(new SiteClass('agoda.com', true, ['full-funnel-banner-container','footer-copyright-section','footer-links-section',]) )
    sites.push(new SiteClass('booking.com', true, ['footer-lists']) )
    sites.push(new SiteClass('delta.com', true, ['Preference banner']) )
    sites.push(new SiteClass('deviantart.com', true, ['PXXBK','D-m7S','_1YQoK','f-14-reg','dreamup','offers-assets','Support and get access to my work','Browse My Shop','_1B1O9','_2AI4s','DealerAdIframe','_3i9c9','_3272G _3U8hI v0vmd _2Ee-T','_1LNZO XN05V _2Och2 _2HvYQ _1rFXc _3Cbmi','core-membership','Core Membership','Treat yourself','Join the world']) )
    sites.push(new SiteClass('grok.com', true, ['w-full flex justify-center','imagine-banner.png','upsell-small']) )
    sites.push(new SiteClass('instagram.com', true, []) )
    sites.push(new SiteClass('ipostal1.com', true, ['offcanvas-footer']) )
    sites.push(new SiteClass('lazada', true, ['popup-dialog-couponPackage','banner-container-inner','pc-banner-slider-container','pc-channel-component','banner-wrapper','card-platform-campaign-banner-container','card-countdown','pc-download-module','banner-image','card-bottom-banner','topActionSell','topActionDownload','footer-first','footer-second','footer-third','footer-fourth','lzd-header-banner','lzd-menu-labels','hotBorder','module_inner_link']) )
    sites.push(new SiteClass('malaysiaairlines.com', true, ['HeaderNotification','global-header-notification','headerNotificationHeight']) )
    sites.push(new SiteClass('msn.com', true, ['cookiescript_pre_header']) )
    sites.push(new SiteClass('music.youtube.com', true, ['ytmusic-guide-signin-promo-renderer']) )
    sites.push(new SiteClass('openvpn.com', true, ['dns-log-promotion','log-streaming-promotion','location-context-promotion','widgetOnLoad','portal-notification','billing-banner']) )
    sites.push(new SiteClass('perplexity.ai', true, ['gap-sm mb-md p-md md:gap-md relative flex w-full flex-col items-center rounded-md md:flex-row rounded-xl shadow-xl ring-1 border-subtlest ring-subtlest divide-subtlest bg-superBG','-mt-md col-span-full inline-flex flex-wrap items-center justify-center opacity-100 border-subtlest ring-subtlest divide-subtlest bg-transparent','p-sm m-md ring-offsetPlus bg-base gap-md fixed bottom-0 right-0 hidden max-w-[320px] grid-cols-1 rounded-xl shadow-md ring-1 md:grid','gap-sm mb-md p-md md:gap-md md:gap-sm relative flex w-full flex-col items-center rounded-md md:flex-row rounded-xl shadow-xl ring-1 border-subtlest ring-subtlest divide-subtlest bg-superBG']) )
    sites.push(new SiteClass('reddit.com', true, ['promoted-label','promotedlink','advertise-button','legal-links','full-comments-page-ad-link','promotedlink relative block']) )
    sites.push(new SiteClass('rottentomatoes.com', true, ['trending-bar','masthead:app-link','header:link-critics-home','header:link-whats-tmeter','footer container','ad-unit-manager']) )
    sites.push(new SiteClass('stackoverflow.com', true, ['js-freemium-cta ps-relative mt32 mb8','onetrust-consent-sdk','ch-popover','notice-sidebar-popover','announcement-banner']) )
    sites.push(new SiteClass('sourceforge.net', true, ['trunc-eligible','newsletter-floating','utm_campaign']) )
    sites.push(new SiteClass('trip.com', true, ['dialog-mask','adc_contain','new-tcp-online-adc','online-cross-sale','extChrome_Card_id','mc-hd__mobile','u-cross-rentcar-x','u-cross-pickup-x','u-cross-customtrip-x','extNps_Card_id','contentinfo','CrossHotelBanner_div_iddata-ig-check','faq_Card_idnotHidden',]) )
    sites.push(new SiteClass('twitch.tv', true, ['upsell','tw-root--theme-light','prime-offers-icon','top-nav-get-bits-button','side-nav','subscribe-button']) )
    sites.push(new SiteClass('vietjetair.com', true, ['prime','slick-slider','banner1-1723791781611.jpg','aip-chat-box-subpanel','aip-chat-window','aip-chat-box','cw_hello_message','Have you know about Vietjet SkyJoy','bannertrangdangnhaptaikhoanskyjoy']) )
    sites.push(new SiteClass('youtube.com', true, ['footer','ytd-guide-signin-promo-renderer']) )

    // shopping
    sites.push(new SiteClass('temu.com', true, ['Get the Temu App','Up to 90 days','Refund for any issues','Delivery guarantee','Sell on Temu','Join Now','commimg.kwcdn.com','Excludes local items','Free shipping','Never overpay with our Price Match Guarantee','Free shipping excludes local items','Temu homepage','whychoosetemu','Shop now, pay later with','f614261b3eb5','ff667db68fdf','1bc8121f544c','Be wary of messages about delivery issues claiming to be from USPS.','background-color:#0A8800','border-color:#0A8800','border-color: rgb(10, 136, 0)','033fab1b4df9','_3odMaoGt _1m796N1L _3bBSIqrV','_2uO7I21g _2mDQH_RN w5tD6JnU','_33LMUpZn O2CLuy7l','_1uiHHk__']) )

    // movie sites
    sites.push(new SiteClass('zhuimj.com', true, ['fed-side-code fed-text-right fed-padding','更多美劇','你可能喜歡的同類美劇','fed-goto-info']) )
    sites.push(new SiteClass('bilibili.com', true, ['palette-button','recommended-swipe','ad-report','fixed-sidenav-storage','act-now','bpx-player-toast-wrap','commentapp','bpx-player-video-inputbar','plp-r','comment-module','bg-container','download-client-trigger','nav-tool-container','right-entry','navTools_floatNavExp','recommend_wrap','login-tip']) )
    sites.push(new SiteClass('olevod.com', true, ['You might like','play_box_right','pannel clearfix','img_bg','el-tabs__nav-scroll','randRnak','title wes','pc-sdier','pc-home-swiper','color: #e9bd6c;','pinglun','vodlist vodlist_sh','foot foot_nav','comm_list_box','wbalist_thumb','pc-home-swiper','detailsRnak','ads-all','login_input_emoji','qrcode-box','pc-ranking','pc-section-content','pc-ads','el-row pc-container pd0','nav-user df','pc-footers']) )
    sites.push(new SiteClass('iyf.tv', true, ['ps pggf','app-sidebar-related-videos','page-right ng-star-inserted','commentsArea','app-footer','footer','purchase-required','purchase-success','container-p','Welfare','uploadtable','user-block','sign-in-ctn','box justify-content-end','sticky-block']) )
    sites.push(new SiteClass('rophim', true, ['close-it','vpromolink','sspp-area','child-suggest','child-actors','child-top','fade modal-backdrop show','footer-elements','fade v-modal d-modal sspp-modal modal show','my-area','sspp-area is-post','app-download','denied-icon','item-v item-rate','item-v item-comment','v-line','v-rating','sspp-area is-3x2','fade modal-backdrop show','is-image','quality-notice','discuss-wrap','main_user','comment-area'],true))
    sites.push(new SiteClass('yfsp.tv', true, ['auth-label a ng-star-inserted','vg-pause-f','vg-vvk-p ng-star-inserted','vg-tips-text','vg-learn-more','vg-pause-close-font','footer-ctn d-flex','item input','report-icon','iconlixianhuancun1','page-right ng-star-inserted','video-publisher-container','box justify-content-end','auth-label s','bl ng-star-inserted','ss-ctn','container-p','vg-bg','login_input_emoji','list icon_3','qrcode-box','user-login','user-item user-back user-news','gg-tips-text','commentBox','sticky-block','commentsArea']) )
    sites.push(new SiteClass('zhuimj', true, ['fed-navs-record','fed-foot-info','fed-foot-info fed-part-layout fed-back-whits']) )
    sites.push(new SiteClass('0123movie.net', true, ['list-title','list-rel','container-fluid text-bg-dark mt-5']) )
    sites.push(new SiteClass('iq.com', true, ['pca_win_download','vip-tag','footer-box']) )
    sites.push(new SiteClass('projectfreetv.lol', true, ['z-index: 2147483647','fcmpbox','Advert1','advert1']) )
    sites.push(new SiteClass('myflixerz.to', true, ['search-home-title','btn-imdb','block-rating','server-notice text-center','detail-tags mb-3','user-slot','footer','film_comments','film_related file_realted-list','alert mb-3','ChmaorrCfozdgenziMrattShzzyrtarnedpoomrzPteonSitfreidnzgtzcseljibcOezzerlebpalraucgeizfznfoocrzEwaocdhnziaWptpnleytzngoectzzdclriehaCtdenTeepxptaNzoldmetzhRzeegvEoxmpezraztdolbizhXCGtIs','z-index: 2147483647','sysmeasuring.net','Advert1']) )

    // very general wiper
    sites.push(new SiteClass('remove cookie popups', false, ['cookie consent','cookieMsgCls','a46d1b942-78b2-4070-bfb4-0aac57c89202','gdpr','top-banner msft-content-native-ad-preview label-fix sliver-style-tuning','cookiescript_injected']) )
    sites.push(new SiteClass('remove info popups', false, ['SFA_NV_POP_ZW']) )
    sites.push(new SiteClass('remove ads', false, ['pc-home-swiper','pc-mask swiper-mask-circle','pc-home-swiper','inner position-relative w-100 h-100','inner position-relative w-100 h-100 ng-star-inserted','vg-b','button button-medium button-outline-weak button button-medium button-outline-weak inline-block text-center max-w-full flex items-center button-promotion--icon-gradient button-promotion--full-gradient flex items-center gap-2','flex flex-1 flex-nowrap text-left ml-0 navigation-link-header-group-link navigation-link-header-group-link--force-min-block-size items-start','navigation-item w-full px-3 mb-0.5 navigation-link-header-group navigation-link-header-group--force-min-block-size navigation-link-header-group--expandable','pc-content pc-ads','ads-mask-box','top-banner msft-content-native-ad-preview label-fix sliver-style-tuning',]) )
    sites.push(new SiteClass('remove ads chinese', false, ['app-viplive','ad_content_bottom','ad_44099','vip-class','SFA-724-bottom-bar',]) )

}




class SiteClass {
    constructor(domain = 'generic', strict_domain_match = true, fuzzy = []) {
        this.domain = domain;
        this.strict_domain_match = strict_domain_match;
        this.fuzzy = fuzzy;
    }

    async hide_fuzzy() {

        function attributesContainsString(tag, string) {
            // check the element.attributes if it contains the string //

            var attributes = tag.attributes;
            if (attributes === undefined) {return false;}

            var attrList = Array.from(attributes);
            for (var attrItem in attrList) {

                var attr = attrList[attrItem];
                var value = attr.value;
                debug(`[tampermonkey] :: hide_fuzzy :: attributesContainsString :: value :: ${tag.attributes} :: ${value}`, 4);

                if (typeof(value) === undefined) {continue;}

                if (value.includes(string)) {
                    debug(`[tampermonkey] :: hide_fuzzy :: attributesContainsString :: FOUND :: ${string} :: ${value}`, 3);
                    return true;}}

            return false;}


        function textContainsString(tag, string) {
            // check the element.text if it contains the string //

            var check_text = tag.text;
            var check_innerText = tag.innerText;
            var check_textContent = tag.textContent;
            var check_simpleText = tag.simpleText;

            let textCheck = [
                check_text,
                check_simpleText,
                check_textContent,
                check_innerText,
            ]

            var foundText = undefined;
            for (var check of textCheck) {
                if (check !== undefined) {
                    foundText = check;
                    break;
                }
            }

            if (foundText === undefined) {return false;}

            if (foundText === string) {
                debug(`[tampermonkey] :: hide_fuzzy :: textContainsString :: FOUND :: ${string} :: ${foundText}`, 3);
                return true;}

            return false;}


        function styleContainsString(tag, string) {
            // check the element.style if it contains the string //

            var check_cssText = tag.style.cssText;

            if (check_cssText === "") {return false;}

            if (typeof(check_cssText) === 'string') {
                if (check_cssText.includes(string)) {
                    debug(`[tampermonkey] :: hide_fuzzy :: styleContainsString :: FOUND :: ${string} :: ${check_cssText}`, 3);
                    return true;}
            }

            return false;}

       function clearEventListeners(tag) {
            // Create a deep copy that is clean of addEventListener bindings
            const cleanClone = tag.cloneNode(true);
            // Replace the old element in the DOM with the new, clean one
            tag.parentNode.replaceChild(cleanClone, tag);

            debug(`[tampermonkey] :: hide_fuzzy :: clearEventListeners :: cleared :: ${tag.localName}`, 4);
            return cleanClone;
       }


        // this does the removing //
        if (this.fuzzy.length > 0) {
            const allTags = Array.from(document.body.getElementsByTagName("*"));
            const checkPromises = [];

            for (const tag of allTags) {

                //    We wrap the inner loop logic here
                const tagCheckOperation = async () => {

                    //const tagClean = clearEventListeners(tag);
                    const tagClean = tag;

                    for (const fuzzyName of this.fuzzy) {
                        if (attributesContainsString(tagClean, fuzzyName) || textContainsString(tagClean, fuzzyName) || styleContainsString(tagClean, fuzzyName)) {
                            debug(`[tampermonkey] :: ${ this.domain } :: removed :: ${tagClean.localName} :: ${fuzzyName}`, 1);
                            tagClean.remove();
                            // Optional: Break the inner loop as soon as we find a match for this tag
                            break;
                        }
                    }
                };

                checkPromises.push(tagCheckOperation());
            }

            await Promise.all(checkPromises);
        }

    }


    hide() {
        debug(`[tampermonkey] :: hide :: started`, 4);

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

    main();

    // Periodically call hide() on each SiteClass instance
    async function hideAllSites(sites) {
        await Promise.all(sites.map(site => site.hide()));
    }

    if (AGGRESSION === 1) {
        hideAllSites(sites).catch(console.error);
    }

    if (AGGRESSION === 2) {
        window.navigation.addEventListener("navigate", () => {
            hideAllSites(sites).catch(console.error);
        });

        window.addEventListener('scroll', function() {
            hideAllSites(sites).catch(console.error);
        });
    }

    if (AGGRESSION === 5) {
        const intervalId = setInterval(() => {
            hideAllSites(sites).catch(console.error);
        }, 2000);
        setTimeout(() => {
            clearInterval(intervalId);
            debug(`[tampermonkey] :: done`)
        }, 8000);
    }

    if (AGGRESSION === 6) {

        window.addEventListener('scroll', function() {
            hideAllSites(sites).catch(console.error);
        });

        window.navigation.addEventListener("navigate", () => {
            hideAllSites(sites).catch(console.error);
        });

        const intervalId = setInterval(() => {
            hideAllSites(sites).catch(console.error);
        }, 2000);
        setTimeout(() => {
            clearInterval(intervalId);
            debug(`[tampermonkey] :: done`)
        }, 4000);
    }

    if (AGGRESSION === 7) {
        setInterval(() => {
            hideAllSites(sites).catch(console.error);
            debug(`[tampermonkey] :: done`)
        }, 5000);
    }

    if (AGGRESSION === 8) {
        setInterval(() => {
            hideAllSites(sites).catch(console.error);
            debug(`[tampermonkey] :: done`)
        }, 1000);
    }

    if (AGGRESSION === 10) {
        const observer = new MutationObserver(function(mutationsList, observer) {
            hideAllSites(sites).catch(console.error);
            debug(`[tampermonkey] :: done`)
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    if (AGGRESSION === 11) {
        setInterval(() => {
            hideAllSites(sites).catch(console.error);
        }, 250);
    }

    if (AGGRESSION === 12) {
        const intervalId = setInterval(() => {
            hideAllSites(sites).catch(console.error);
        }, 250);
        setTimeout(() => {
            clearInterval(intervalId);
            debug(`[tampermonkey] :: done`)
        }, 8000);
    }

})();

