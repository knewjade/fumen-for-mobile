define("./workbox-c7b084bf.js",["exports"],(function(t){"use strict";try{self["workbox:core:6.2.4"]&&_()}catch(t){}const e=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=t=>[n.prefix,t,n.suffix].filter((t=>t&&t.length>0)).join("-"),i=t=>{(t=>{for(const e of Object.keys(n))t(e)})((e=>{"string"==typeof t[e]&&(n[e]=t[e])}))},a=t=>t||r(n.googleAnalytics),o=t=>t||r(n.precache),c=t=>t||r(n.runtime);try{self["workbox:routing:6.2.4"]&&_()}catch(t){}const h=t=>t&&"object"==typeof t?t:{handle:t};class u{constructor(t,e,s="GET"){this.handler=h(e),this.match=t,this.method=s}setCatchHandler(t){this.catchHandler=h(t)}}class l extends u{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class f{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:r,route:i}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=i&&i.handler;const o=t.method;if(!a&&this.i.has(o)&&(a=this.i.get(o)),!a)return;let c;try{c=a.handle({url:s,request:t,event:e,params:r})}catch(t){c=Promise.reject(t)}const h=i&&i.catchHandler;return c instanceof Promise&&(this.o||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:r})}catch(t){t instanceof Error&&(n=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),c}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const r=this.t.get(s.method)||[];for(const i of r){let r;const a=i.match({url:t,sameOrigin:e,request:s,event:n});if(a)return r=a,(Array.isArray(r)&&0===r.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(r=void 0),{route:i,params:r}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,h(t))}setCatchHandler(t){this.o=h(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e>-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let w;function d(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.2.4"]&&_()}catch(t){}function y(t){if(!t)throw new s("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const r=new URL(n,location.href),i=new URL(n,location.href);return r.searchParams.set("__WB_REVISION__",e),{cacheKey:r.href,url:i.href}}class p{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class g{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=(null==e?void 0:e.cacheKey)||this.h.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this.h=t}}let m;async function R(t,e){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new s("cross-origin-copy-response",{origin:n});const r=t.clone(),i={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},a=e?e(i):i,o=function(){if(void 0===m){const t=new Response("");if("body"in t)try{new Response(t.body),m=!0}catch(t){m=!1}m=!1}return m}()?r.body:await r.blob();return new Response(o,a)}function q(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class b{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}const v=new Set;function E(t){return new Promise((e=>setTimeout(e,t)))}try{self["workbox:strategies:6.2.4"]&&_()}catch(t){}function D(t){return"string"==typeof t?new Request(t):t}class U{constructor(t,e){this.u={},Object.assign(this,e),this.event=e.event,this.l=t,this.p=new b,this.g=[],this.m=[...t.plugins],this.R=new Map;for(const t of this.m)this.R.set(t,{});this.event.waitUntil(this.p.promise)}async fetch(t){const{event:e}=this;let n=D(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(t){if(t instanceof Error)throw new s("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const i=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.l.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))t=await s({event:e,request:i,response:t});return t}catch(t){throw r&&await this.runCallbacks("fetchDidFail",{error:t,event:e,originalRequest:r.clone(),request:i.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=D(t);let s;const{cacheName:n,matchOptions:r}=this.l,i=await this.getCacheKey(e,"read"),a=Object.assign(Object.assign({},r),{cacheName:n});s=await caches.match(i,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:r,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(t,e){const n=D(t);await E(0);const r=await this.getCacheKey(n,"write");if(!e)throw new s("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const a=await this.q(e);if(!a)return!1;const{cacheName:o,matchOptions:c}=this.l,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),l=u?await async function(t,e,s,n){const r=q(e.url,s);if(e.url===r)return t.match(e,n);const i=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await t.keys(e,i);for(const e of a)if(r===q(e.url,s))return t.match(e,n)}(h,r.clone(),["__WB_REVISION__"],c):null;try{await h.put(r,u?a.clone():a)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of v)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:o,oldResponse:l,newResponse:a.clone(),request:r,event:this.event});return!0}async getCacheKey(t,e){if(!this.u[e]){let s=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))s=D(await t({mode:e,request:s,event:this.event,params:this.params}));this.u[e]=s}return this.u[e]}hasCallback(t){for(const e of this.l.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.l.plugins)if("function"==typeof e[t]){const s=this.R.get(e),n=n=>{const r=Object.assign(Object.assign({},n),{state:s});return e[t](r)};yield n}}waitUntil(t){return this.g.push(t),t}async doneWaiting(){let t;for(;t=this.g.shift();)await t}destroy(){this.p.resolve(null)}async q(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class I{constructor(t={}){this.cacheName=c(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,r=new U(this,{event:e,request:s,params:n}),i=this.v(r,s,e);return[i,this.D(i,r,s,e)]}async v(t,e,n){let r;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(r=await this.U(e,t),!r||"error"===r.type)throw new s("no-response",{url:e.url})}catch(s){if(s instanceof Error)for(const i of t.iterateCallbacks("handlerDidError"))if(r=await i({error:s,event:n,request:e}),r)break;if(!r)throw s}for(const s of t.iterateCallbacks("handlerWillRespond"))r=await s({event:n,request:e,response:r});return r}async D(t,e,s,n){let r,i;try{r=await t}catch(i){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:r}),await e.doneWaiting()}catch(t){t instanceof Error&&(i=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:r,error:i}),e.destroy(),i)throw i}}class x extends I{constructor(t={}){t.cacheName=o(t.cacheName),super(t),this.I=!1!==t.fallbackToNetwork,this.plugins.push(x.copyRedirectedCacheableResponsesPlugin)}async U(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this._(t,e):await this.L(t,e))}async L(t,e){let n;const r=e.params||{};if(!this.I)throw new s("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const s=r.integrity,i=t.integrity,a=!i||i===s;n=await e.fetch(new Request(t,{integrity:i||s})),s&&a&&(this.O(),await e.cachePut(t,n.clone()))}return n}async _(t,e){this.O();const n=await e.fetch(t);if(!await e.cachePut(t,n.clone()))throw new s("bad-precaching-response",{url:t.url,status:n.status});return n}O(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==x.copyRedirectedCacheableResponsesPlugin&&(n===x.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(x.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}x.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},x.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await R(t):t};class L{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.T=new Map,this.k=new Map,this.B=new Map,this.l=new x({cacheName:o(t),plugins:[...e,new g({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.l}precache(t){this.addToCacheList(t),this.N||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.N=!0)}addToCacheList(t){const e=[];for(const n of t){"string"==typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:r}=y(n),i="string"!=typeof n&&n.revision?"reload":"default";if(this.T.has(r)&&this.T.get(r)!==t)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this.T.get(r),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.B.has(t)&&this.B.get(t)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:r});this.B.set(t,n.integrity)}if(this.T.set(r,t),this.k.set(r,i),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return d(t,(async()=>{const e=new p;this.strategy.plugins.push(e);for(const[e,s]of this.T){const n=this.B.get(s),r=this.k.get(e),i=new Request(e,{integrity:n,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return d(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.T.values()),n=[];for(const r of e)s.has(r.url)||(await t.delete(r),n.push(r.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.T}getCachedURLs(){return[...this.T.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.T.get(e.href)}getIntegrityForCacheKey(t){return this.B.get(t)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new s("non-precached-url",{url:t});return s=>(s.request=new Request(t),s.params=Object.assign({cacheKey:e},s.params),this.strategy.handle(s))}}let O;const T=()=>(O||(O=new L),O);class k extends u{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const r of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:r}={}){const i=new URL(t,location.href);i.hash="",yield i.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(i,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(r){const t=r({url:i});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(r);if(e){return{cacheKey:e,integrity:t.getIntegrityForCacheKey(e)}}}}),t.strategy)}}function B(t){const e=T();!function(t,e,n){let r;if("string"==typeof t){const s=new URL(t,location.href);r=new u((({url:t})=>t.href===s.href),e,n)}else if(t instanceof RegExp)r=new l(t,e,n);else if("function"==typeof t)r=new u(t,e,n);else{if(!(t instanceof u))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=t}(w||(w=new f,w.addFetchListener(),w.addCacheListener()),w).registerRoute(r)}(new k(e,t))}try{self["workbox:background-sync:6.2.4"]&&_()}catch(t){}function N(){return(N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}let C,j;const P=new WeakMap,S=new WeakMap,W=new WeakMap,M=new WeakMap,K=new WeakMap;let A={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return S.get(t);if("objectStoreNames"===e)return t.objectStoreNames||W.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return G(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function F(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(j||(j=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(H(this),e),G(P.get(this))}:function(...e){return G(t.apply(H(this),e))}:function(e,...s){const n=t.call(H(this),e,...s);return W.set(n,e.sort?e.sort():[e]),G(n)}}function $(t){return"function"==typeof t?F(t):(t instanceof IDBTransaction&&function(t){if(S.has(t))return;const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),n()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));S.set(t,e)}(t),e=t,(C||(C=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,A):t);var e}function G(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(G(t.result)),n()},i=()=>{s(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&P.set(e,t)})).catch((()=>{})),K.set(e,t),e}(t);if(M.has(t))return M.get(t);const e=$(t);return e!==t&&(M.set(t,e),K.set(e,t)),e}const H=t=>K.get(t);const Q=["get","getKey","getAll","getAllKeys","count"],V=["put","add","delete","clear"],J=new Map;function z(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(J.get(e))return J.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,r=V.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!Q.includes(s))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let a=i.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[s](...e),r&&i.done]))[0]};return J.set(e,i),i}A=(t=>N({},t,{get:(e,s,n)=>z(e,s)||t.get(e,s,n),has:(e,s)=>!!z(e,s)||t.has(e,s)}))(A);const X="requests",Y="queueName";class Z{constructor(){this.C=null}async addEntry(t){const e=(await this.getDb()).transaction(X,"readwrite",{durability:"relaxed"});await e.store.add(t),await e.done}async getFirstEntryId(){const t=await this.getDb(),e=await t.transaction(X).store.openCursor();return null==e?void 0:e.value.id}async getAllEntriesByQueueName(t){const e=await this.getDb(),s=await e.getAllFromIndex(X,Y,IDBKeyRange.only(t));return s||new Array}async deleteEntry(t){const e=await this.getDb();await e.delete(X,t)}async getFirstEntryByQueueName(t){return await this.getEndEntryFromIndex(IDBKeyRange.only(t),"next")}async getLastEntryByQueueName(t){return await this.getEndEntryFromIndex(IDBKeyRange.only(t),"prev")}async getEndEntryFromIndex(t,e){const s=await this.getDb(),n=await s.transaction(X).store.index(Y).openCursor(t,e);return null==n?void 0:n.value}async getDb(){return this.C||(this.C=await function(t,e,{blocked:s,upgrade:n,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),o=G(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(G(a.result),t.oldVersion,t.newVersion,G(a.transaction))})),s&&a.addEventListener("blocked",(()=>s())),o.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),o}("workbox-background-sync",3,{upgrade:this.j})),this.C}j(t,e){e>0&&e<3&&t.objectStoreNames.contains(X)&&t.deleteObjectStore(X);t.createObjectStore(X,{autoIncrement:!0,keyPath:"id"}).createIndex(Y,Y,{unique:!1})}}class tt{constructor(t){this.P=t,this.S=new Z}async pushEntry(t){delete t.id,t.queueName=this.P,await this.S.addEntry(t)}async unshiftEntry(t){const e=await this.S.getFirstEntryId();e?t.id=e-1:delete t.id,t.queueName=this.P,await this.S.addEntry(t)}async popEntry(){return this.W(await this.S.getLastEntryByQueueName(this.P))}async shiftEntry(){return this.W(await this.S.getFirstEntryByQueueName(this.P))}async getAll(){return await this.S.getAllEntriesByQueueName(this.P)}async deleteEntry(t){await this.S.deleteEntry(t)}async W(t){return t&&await this.deleteEntry(t.id),t}}const et=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class st{constructor(t){"navigate"===t.mode&&(t.mode="same-origin"),this.M=t}static async fromRequest(t){const e={url:t.url,headers:{}};"GET"!==t.method&&(e.body=await t.clone().arrayBuffer());for(const[s,n]of t.headers.entries())e.headers[s]=n;for(const s of et)void 0!==t[s]&&(e[s]=t[s]);return new st(e)}toObject(){const t=Object.assign({},this.M);return t.headers=Object.assign({},this.M.headers),t.body&&(t.body=t.body.slice(0)),t}toRequest(){return new Request(this.M.url,this.M)}clone(){return new st(this.toObject())}}const nt="workbox-background-sync",rt=new Set,it=t=>{const e={request:new st(t.requestData).toRequest(),timestamp:t.timestamp};return t.metadata&&(e.metadata=t.metadata),e};class at{constructor(t,{onSync:e,maxRetentionTime:n}={}){if(this.K=!1,this.A=!1,rt.has(t))throw new s("duplicate-queue-name",{name:t});rt.add(t),this.F=t,this.$=e||this.replayRequests,this.G=n||10080,this.H=new tt(this.F),this.V()}get name(){return this.F}async pushRequest(t){await this.J(t,"push")}async unshiftRequest(t){await this.J(t,"unshift")}async popRequest(){return this.X("pop")}async shiftRequest(){return this.X("shift")}async getAll(){const t=await this.H.getAll(),e=Date.now(),s=[];for(const n of t){const t=60*this.G*1e3;e-n.timestamp>t?await this.H.deleteEntry(n.id):s.push(it(n))}return s}async J({request:t,metadata:e,timestamp:s=Date.now()},n){const r={requestData:(await st.fromRequest(t.clone())).toObject(),timestamp:s};e&&(r.metadata=e),await this.H[`${n}Entry`](r),this.K?this.A=!0:await this.registerSync()}async X(t){const e=Date.now(),s=await this.H[`${t}Entry`]();if(s){const n=60*this.G*1e3;return e-s.timestamp>n?this.X(t):it(s)}}async replayRequests(){let t;for(;t=await this.shiftRequest();)try{await fetch(t.request.clone())}catch(e){throw await this.unshiftRequest(t),new s("queue-replay-failed",{name:this.F})}}async registerSync(){if("sync"in self.registration)try{await self.registration.sync.register(`${nt}:${this.F}`)}catch(t){}}V(){"sync"in self.registration?self.addEventListener("sync",(t=>{if(t.tag===`${nt}:${this.F}`){const e=async()=>{let e;this.K=!0;try{await this.$({queue:this})}catch(t){if(t instanceof Error)throw e=t,e}finally{!this.A||e&&!t.lastChance||await this.registerSync(),this.K=!1,this.A=!1}};t.waitUntil(e())}})):this.$({queue:this})}static get Y(){return rt}}class ot{constructor(t,e){this.fetchDidFail=async({request:t})=>{await this.Z.pushRequest({request:t})},this.Z=new at(t,e)}}const ct={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};class ht extends I{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(ct),this.tt=t.networkTimeoutSeconds||0}async U(t,e){const n=[],r=[];let i;if(this.tt){const{id:s,promise:a}=this.et({request:t,logs:n,handler:e});i=s,r.push(a)}const a=this.st({timeoutId:i,request:t,logs:n,handler:e});r.push(a);const o=await e.waitUntil((async()=>await e.waitUntil(Promise.race(r))||await a)());if(!o)throw new s("no-response",{url:t.url});return o}et({request:t,logs:e,handler:s}){let n;return{promise:new Promise((e=>{n=setTimeout((async()=>{e(await s.cacheMatch(t))}),1e3*this.tt)})),id:n}}async st({timeoutId:t,request:e,logs:s,handler:n}){let r,i;try{i=await n.fetchAndCachePut(e)}catch(t){t instanceof Error&&(r=t)}return t&&clearTimeout(t),!r&&i||(i=await n.cacheMatch(e)),i}}class ut extends I{constructor(t={}){super(t),this.tt=t.networkTimeoutSeconds||0}async U(t,e){let n,r;try{const s=[e.fetch(t)];if(this.tt){const t=E(1e3*this.tt);s.push(t)}if(r=await Promise.race(s),!r)throw new Error(`Timed out the network response after ${this.tt} seconds.`)}catch(t){t instanceof Error&&(n=t)}if(!r)throw new s("no-response",{url:t.url,error:n});return r}}try{self["workbox:google-analytics:6.2.4"]&&_()}catch(t){}const lt="www.google-analytics.com",ft="www.googletagmanager.com",wt=/^\/(\w+\/)?collect/,dt=t=>{const e=({url:t})=>t.hostname===lt&&wt.test(t.pathname),s=new ut({plugins:[t]});return[new u(e,s,"GET"),new u(e,s,"POST")]},yt=t=>{const e=new ht({cacheName:t});return new u((({url:t})=>t.hostname===lt&&"/analytics.js"===t.pathname),e,"GET")},pt=t=>{const e=new ht({cacheName:t});return new u((({url:t})=>t.hostname===ft&&"/gtag/js"===t.pathname),e,"GET")},gt=t=>{const e=new ht({cacheName:t});return new u((({url:t})=>t.hostname===ft&&"/gtm.js"===t.pathname),e,"GET")};t.clientsClaim=function(){self.addEventListener("activate",(()=>self.clients.claim()))},t.initialize=(t={})=>{const e=a(t.cacheName),s=new ot("workbox-google-analytics",{maxRetentionTime:2880,onSync:(n=t,async({queue:t})=>{let e;for(;e=await t.shiftRequest();){const{request:s,timestamp:r}=e,i=new URL(s.url);try{const t="POST"===s.method?new URLSearchParams(await s.clone().text()):i.searchParams,e=r-(Number(t.get("qt"))||0),a=Date.now()-e;if(t.set("qt",String(a)),n.parameterOverrides)for(const e of Object.keys(n.parameterOverrides)){const s=n.parameterOverrides[e];t.set(e,s)}"function"==typeof n.hitFilter&&n.hitFilter.call(null,t),await fetch(new Request(i.origin+i.pathname,{body:t.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}}))}catch(s){throw await t.unshiftRequest(e),s}}})});var n;const r=[gt(e),yt(e),pt(e),...dt(s)],i=new f;for(const t of r)i.registerRoute(t);i.addFetchListener()},t.precacheAndRoute=function(t,e){!function(t){T().precache(t)}(t),B(e)},t.setCacheNameDetails=function(t){i(t)}}));
