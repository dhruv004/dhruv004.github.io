webpackJsonp([70144966829960],{384:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return l.default.createElement("a",(0,c.default)({},t,{onClick:function(e){var a=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(a=!1),t.target&&"_self"!==t.target.toLowerCase()&&(a=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:t.href,transport:a?"beacon":"",hitCallback:function(){a&&(document.location=t.href)}}):a&&(document.location=t.href),!1}}))}e.__esModule=!0,e.OutboundLink=void 0;var u=a(171),c=n(u),o=a(1),l=n(o),d=a(7),i=n(d);r.propTypes={href:i.default.string,target:i.default.string},e.OutboundLink=r},342:function(t,e){},247:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){if(null==t)throw new TypeError("Cannot destructure undefined")}e.__esModule=!0;var u=a(1),c=n(u);a(342);var o=a(384),l="https://www.facebook.com/dhruv.datt",d="https://github.com/dhruv004",i="https://www.linkedin.com/in/dhruvdatt/",f="https://twitter.com/ddatt04",s="https://stackoverflow.com/users/6002933/dhrdatt?tab=profile";e.default=function(t){return r(t),c.default.createElement("div",{className:"contact-app-container"},c.default.createElement("div",{style:{textAlign:"center"}},c.default.createElement("h2",null,"Hit me up!")),c.default.createElement("div",null,c.default.createElement("div",{className:"contact-container border-bottom"},c.default.createElement(o.OutboundLink,{className:"fa contact-app border-right fa-facebook-square fb",href:l,target:"_blank"}),c.default.createElement(o.OutboundLink,{className:"fa contact-app border-right fa-twitter-square twitter",href:f,target:"_blank"}),c.default.createElement(o.OutboundLink,{className:"fa contact-app stackO",href:s,target:"_blank"})),c.default.createElement("div",{className:"contact-container"},c.default.createElement(o.OutboundLink,{className:"fa contact-app border-right fa-linkedin-square linkedIn",href:i,target:"_blank"}),c.default.createElement(o.OutboundLink,{className:"fa contact-app fa-github-square github",href:d,target:"_blank"}))))},t.exports=e.default}});
//# sourceMappingURL=component---src-pages-contact-js-3052e2a7ee7f8b27b3ab.js.map