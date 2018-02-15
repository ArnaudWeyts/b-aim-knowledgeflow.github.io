"use strict";var precacheConfig=[["/index.html","f8999ab4afe1153144c91b56ab95af1c"],["/static/css/main.e2f50d25.css","3734f0f208df71b0e19f824cb88092b7"],["/static/js/main.4fecb33e.js","986d4dba66bbbb7899ef513b25e397f8"],["/static/media/arnaud.cb8dd4f1.pdf","cb8dd4f1f85377ecd18c6c4cd4effbee"],["/static/media/boy.7cc7a630.png","7cc7a630624d20f7797cb4c8e93c09c1"],["/static/media/girl.0f2d8a9c.png","0f2d8a9cff2a5e788aad5685b8afc6ba"],["/static/media/github-circle.39254c95.svg","39254c9537a48423f1d05d7ce24d9387"],["/static/media/jonas.20758e9c.pdf","20758e9cb1f0da7a2bf41cd18b9cab5b"],["/static/media/kat.041c1f9e.pdf","041c1f9eaff0f9b6fd1c787204bc7d59"],["/static/media/open-sans-latin-300.521d17bc.woff","521d17bc9f3526c690e8ada6eee55bec"],["/static/media/open-sans-latin-300.60c86674.woff2","60c866748ff15f5b347fdba64596b1b1"],["/static/media/open-sans-latin-300italic.06bbd318.woff2","06bbd3188b34820cd83a0e0b3d0a6f57"],["/static/media/open-sans-latin-300italic.8a648ff3.woff","8a648ff38ded89ea15916e84529d62d3"],["/static/media/open-sans-latin-400.bf2d0783.woff","bf2d0783515b7d75c35bde69e01b3135"],["/static/media/open-sans-latin-400.cffb686d.woff2","cffb686d7d2f4682df8342bd4d276e09"],["/static/media/open-sans-latin-400italic.987032ea.woff2","987032ea5d57c93d8da215678eae3b86"],["/static/media/open-sans-latin-400italic.db70d0b9.woff","db70d0b9cb27ada1a260a2b35e756b8b"],["/static/media/open-sans-latin-600.1cd5320f.woff","1cd5320f8937d337b61d5117cf9d7b28"],["/static/media/open-sans-latin-600.223a277b.woff2","223a277bd88d8a90c8cdf24cda0ad5f5"],["/static/media/open-sans-latin-600italic.318ea1ad.woff","318ea1ada4102c0704a0637228dcad03"],["/static/media/open-sans-latin-600italic.4950a720.woff2","4950a7205f0b5cefe41fc03ac346e236"],["/static/media/open-sans-latin-700.623e3205.woff","623e3205570002af47fc2b88f9335d19"],["/static/media/open-sans-latin-700.d08c09f2.woff2","d08c09f2f169f4a6edbcf8b8d1636cb4"],["/static/media/open-sans-latin-700italic.72e19cbb.woff","72e19cbb0e38c6773a7751156752cec4"],["/static/media/open-sans-latin-700italic.c02f5da6.woff2","c02f5da6e82e1efe0b45841bfd49ce37"],["/static/media/open-sans-latin-800.aaeffaf2.woff2","aaeffaf205b9bbb09920089a14dbe9e8"],["/static/media/open-sans-latin-800.c6aa0c4a.woff","c6aa0c4a601fb6ac66f8253fa594dff5"],["/static/media/open-sans-latin-800italic.6b3973ff.woff2","6b3973ffe02bb6a8be0f8453506ec032"],["/static/media/open-sans-latin-800italic.79b58175.woff","79b58175343190550489efe46a7f1138"],["/static/media/rita.6706fa81.pdf","6706fa81a0f3367a6acc756b6fdc9054"],["/static/media/team.f74c8ed9.png","f74c8ed96aa9ce11a191d15ff3bd9fc3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});