if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-4c15227d"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fumen-for-mobile"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"main.bundle.js",revision:"78591c559fb69e415566bba4c161fbea"},{url:"vendor.bundle.js",revision:"fa397746b477a3fd9e3d272b96eeb0a6"},{url:"vendor.bundle.js.LICENSE.txt",revision:"596f62f005ab771450a45985410c8645"}],{}),e.registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/materialize\/.+\.(js|css)$/,new e.CacheFirst({cacheName:"fumen-for-mobile-materialize-cache",plugins:[new e.ExpirationPlugin({maxAgeSeconds:1209600})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/icon\?family=Material\+Icons$/,new e.CacheFirst({cacheName:"fumen-for-mobile-materialize-font-cache",plugins:[new e.ExpirationPlugin({maxAgeSeconds:1209600})]}),"GET"),e.initialize({})}));
