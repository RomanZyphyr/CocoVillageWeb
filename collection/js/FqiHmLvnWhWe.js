var ConvertRootLoader;(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);const o="convert-bundle-loader",n="revenue-addon-bundle",r="g_cvt_id",i="rev_id";var d;[{name:"rev-script-bundle",url:`${(d=function(){let e;const t=document.getElementsByTagName("script");for(let d=0;d<t.length;d++){const s=t[d].getAttribute("src"),a=t[d].getAttribute("id");if(s&&(s.includes(`${r}=`)||s.includes(`${i}=`)||[o,n].includes(a))){if(e=s.split("/").slice(0,3).join("/"),!window.REVENUE_ADDON_ID){const e=new URLSearchParams(s.split("?")[1]);[r,i].forEach((t=>{const o=e.get(t);o&&(window.REVENUE_ADDON_ID=o)}))}break}}return{baseUrl:window.REVENUE_ADDON_CDN||e||"https://bundle.dyn-rev.app",revision:window.REVENUE_ADDON_REVISION||"1d8f2fbc",id:window.REVENUE_ADDON_ID||null}}()).baseUrl}/script.js?rev=${d.revision}`}].map((e=>{const t=document.createElement("script");t.src=e.url,t.id=e.name;const o=()=>document.body.appendChild(t);"loading"===document.readyState?document.addEventListener("DOMContentLoaded",o):o()})),function(){if(window.GorgiasBridge)return;const e={get(e,t){if("init"!=t&&"resolve"!=t&&"_isMockFunction"!=t)throw new Error(`You are trying to use the Gorgias Bridge API before its initialization (property or function \\"${t}\\")! Please use \`GorgiasBridge.init()\`. Refer to our documentation https://developers.gorgias.com/docs/how-to-attach-gorgias-tracking-data-to-shopify-cart-and-checkout-attributes for more info.`);const o=e[t];return"function"==typeof o?o.bind(e):o}};window.GorgiasBridge=new Proxy({},e);const t=new Promise((function(e,t){window.GorgiasBridge.resolve=e}));window.GorgiasBridge.init=function(){return t}}(),ConvertRootLoader=t})();