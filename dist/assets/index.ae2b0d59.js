(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();function yr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qe={exports:{}},ve={exports:{}},Ye=function(r,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return r.apply(t,n)}},xr=Ye,be=Object.prototype.toString,Ee=function(e){return function(r){var t=be.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function O(e){return e=e.toLowerCase(),function(t){return Ee(t)===e}}function ye(e){return Array.isArray(e)}function V(e){return typeof e>"u"}function wr(e){return e!==null&&!V(e)&&e.constructor!==null&&!V(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Ge=O("ArrayBuffer");function Cr(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Ge(e.buffer),r}function Rr(e){return typeof e=="string"}function Sr(e){return typeof e=="number"}function Ze(e){return e!==null&&typeof e=="object"}function W(e){if(Ee(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var Or=O("Date"),Lr=O("File"),Ar=O("Blob"),gr=O("FileList");function xe(e){return be.call(e)==="[object Function]"}function Tr(e){return Ze(e)&&xe(e.pipe)}function Pr(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||be.call(e)===r||xe(e.toString)&&e.toString()===r)}var Nr=O("URLSearchParams");function qr(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function _r(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function we(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ye(e))for(var t=0,i=e.length;t<i;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function me(){var e={};function r(n,s){W(e[s])&&W(n)?e[s]=me(e[s],n):W(n)?e[s]=me({},n):ye(n)?e[s]=n.slice():e[s]=n}for(var t=0,i=arguments.length;t<i;t++)we(arguments[t],r);return e}function Dr(e,r,t){return we(r,function(n,s){t&&typeof n=="function"?e[s]=xr(n,t):e[s]=n}),e}function Ur(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function kr(e,r,t,i){e.prototype=Object.create(r.prototype,i),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function Br(e,r,t){var i,n,s,a={};r=r||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)s=i[n],a[s]||(r[s]=e[s],a[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function Fr(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var i=e.indexOf(r,t);return i!==-1&&i===t}function Ir(e){if(!e)return null;var r=e.length;if(V(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var $r=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),m={isArray:ye,isArrayBuffer:Ge,isBuffer:wr,isFormData:Pr,isArrayBufferView:Cr,isString:Rr,isNumber:Sr,isObject:Ze,isPlainObject:W,isUndefined:V,isDate:Or,isFile:Lr,isBlob:Ar,isFunction:xe,isStream:Tr,isURLSearchParams:Nr,isStandardBrowserEnv:_r,forEach:we,merge:me,extend:Dr,trim:qr,stripBOM:Ur,inherits:kr,toFlatObject:Br,kindOf:Ee,kindOfTest:O,endsWith:Fr,toArray:Ir,isTypedArray:$r,isFileList:gr},T=m;function Ae(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var er=function(r,t,i){if(!t)return r;var n;if(i)n=i(t);else if(T.isURLSearchParams(t))n=t.toString();else{var s=[];T.forEach(t,function(u,c){u===null||typeof u>"u"||(T.isArray(u)?c=c+"[]":u=[u],T.forEach(u,function(h){T.isDate(h)?h=h.toISOString():T.isObject(h)&&(h=JSON.stringify(h)),s.push(Ae(c)+"="+Ae(h))}))}),n=s.join("&")}if(n){var a=r.indexOf("#");a!==-1&&(r=r.slice(0,a)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},jr=m;function z(){this.handlers=[]}z.prototype.use=function(r,t,i){return this.handlers.push({fulfilled:r,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};z.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};z.prototype.forEach=function(r){jr.forEach(this.handlers,function(i){i!==null&&r(i)})};var Mr=z,Hr=m,Wr=function(r,t){Hr.forEach(r,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[s])})},rr=m;function N(e,r,t,i,n){Error.call(this),this.message=e,this.name="AxiosError",r&&(this.code=r),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}rr.inherits(N,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var tr=N.prototype,nr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){nr[e]={value:e}});Object.defineProperties(N,nr);Object.defineProperty(tr,"isAxiosError",{value:!0});N.from=function(e,r,t,i,n,s){var a=Object.create(tr);return rr.toFlatObject(e,a,function(u){return u!==Error.prototype}),N.call(a,e.message,r,t,i,n),a.name=e.name,s&&Object.assign(a,s),a};var _=N,ir={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},x=m;function Jr(e,r){r=r||new FormData;var t=[];function i(s){return s===null?"":x.isDate(s)?s.toISOString():x.isArrayBuffer(s)||x.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,a){if(x.isPlainObject(s)||x.isArray(s)){if(t.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);t.push(s),x.forEach(s,function(u,c){if(!x.isUndefined(u)){var f=a?a+"."+c:c,h;if(u&&!a&&typeof u=="object"){if(x.endsWith(c,"{}"))u=JSON.stringify(u);else if(x.endsWith(c,"[]")&&(h=x.toArray(u))){h.forEach(function(l){!x.isUndefined(l)&&r.append(f,i(l))});return}}n(u,f)}}),t.pop()}else r.append(a,i(s))}return n(e),r}var sr=Jr,ee,ge;function Vr(){if(ge)return ee;ge=1;var e=_;return ee=function(t,i,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},ee}var re,Te;function zr(){if(Te)return re;Te=1;var e=m;return re=e.isStandardBrowserEnv()?function(){return{write:function(i,n,s,a,o,u){var c=[];c.push(i+"="+encodeURIComponent(n)),e.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),e.isString(a)&&c.push("path="+a),e.isString(o)&&c.push("domain="+o),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),re}var Xr=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},Kr=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},Qr=Xr,Yr=Kr,ar=function(r,t){return r&&!Qr(t)?Yr(r,t):t},te,Pe;function Gr(){if(Pe)return te;Pe=1;var e=m,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return te=function(i){var n={},s,a,o;return i&&e.forEach(i.split(`
`),function(c){if(o=c.indexOf(":"),s=e.trim(c.substr(0,o)).toLowerCase(),a=e.trim(c.substr(o+1)),s){if(n[s]&&r.indexOf(s)>=0)return;s==="set-cookie"?n[s]=(n[s]?n[s]:[]).concat([a]):n[s]=n[s]?n[s]+", "+a:a}}),n},te}var ne,Ne;function Zr(){if(Ne)return ne;Ne=1;var e=m;return ne=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function s(a){var o=a;return t&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=s(window.location.href),function(o){var u=e.isString(o)?s(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),ne}var ie,qe;function X(){if(qe)return ie;qe=1;var e=_,r=m;function t(i){e.call(this,i==null?"canceled":i,e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),ie=t,ie}var se,_e;function et(){return _e||(_e=1,se=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),se}var ae,De;function Ue(){if(De)return ae;De=1;var e=m,r=Vr(),t=zr(),i=er,n=ar,s=Gr(),a=Zr(),o=ir,u=_,c=X(),f=et();return ae=function(l){return new Promise(function(mr,L){var D=l.data,U=l.headers,k=l.responseType,A;function Se(){l.cancelToken&&l.cancelToken.unsubscribe(A),l.signal&&l.signal.removeEventListener("abort",A)}e.isFormData(D)&&e.isStandardBrowserEnv()&&delete U["Content-Type"];var d=new XMLHttpRequest;if(l.auth){var vr=l.auth.username||"",br=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";U.Authorization="Basic "+btoa(vr+":"+br)}var Y=n(l.baseURL,l.url);d.open(l.method.toUpperCase(),i(Y,l.params,l.paramsSerializer),!0),d.timeout=l.timeout;function Oe(){if(!!d){var y="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,g=!k||k==="text"||k==="json"?d.responseText:d.response,S={data:g,status:d.status,statusText:d.statusText,headers:y,config:l,request:d};r(function(Z){mr(Z),Se()},function(Z){L(Z),Se()},S),d=null}}if("onloadend"in d?d.onloadend=Oe:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(Oe)},d.onabort=function(){!d||(L(new u("Request aborted",u.ECONNABORTED,l,d)),d=null)},d.onerror=function(){L(new u("Network Error",u.ERR_NETWORK,l,d,d)),d=null},d.ontimeout=function(){var g=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded",S=l.transitional||o;l.timeoutErrorMessage&&(g=l.timeoutErrorMessage),L(new u(g,S.clarifyTimeoutError?u.ETIMEDOUT:u.ECONNABORTED,l,d)),d=null},e.isStandardBrowserEnv()){var Le=(l.withCredentials||a(Y))&&l.xsrfCookieName?t.read(l.xsrfCookieName):void 0;Le&&(U[l.xsrfHeaderName]=Le)}"setRequestHeader"in d&&e.forEach(U,function(g,S){typeof D>"u"&&S.toLowerCase()==="content-type"?delete U[S]:d.setRequestHeader(S,g)}),e.isUndefined(l.withCredentials)||(d.withCredentials=!!l.withCredentials),k&&k!=="json"&&(d.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&d.addEventListener("progress",l.onDownloadProgress),typeof l.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",l.onUploadProgress),(l.cancelToken||l.signal)&&(A=function(y){!d||(L(!y||y&&y.type?new c:y),d.abort(),d=null)},l.cancelToken&&l.cancelToken.subscribe(A),l.signal&&(l.signal.aborted?A():l.signal.addEventListener("abort",A))),D||(D=null);var G=f(Y);if(G&&["http","https","file"].indexOf(G)===-1){L(new u("Unsupported protocol "+G+":",u.ERR_BAD_REQUEST,l));return}d.send(D)})},ae}var oe,ke;function rt(){return ke||(ke=1,oe=null),oe}var p=m,Be=Wr,Fe=_,tt=ir,nt=sr,it={"Content-Type":"application/x-www-form-urlencoded"};function Ie(e,r){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function st(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Ue()),e}function at(e,r,t){if(p.isString(e))try{return(r||JSON.parse)(e),p.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(e)}var K={transitional:tt,adapter:st(),transformRequest:[function(r,t){if(Be(t,"Accept"),Be(t,"Content-Type"),p.isFormData(r)||p.isArrayBuffer(r)||p.isBuffer(r)||p.isStream(r)||p.isFile(r)||p.isBlob(r))return r;if(p.isArrayBufferView(r))return r.buffer;if(p.isURLSearchParams(r))return Ie(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var i=p.isObject(r),n=t&&t["Content-Type"],s;if((s=p.isFileList(r))||i&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return nt(s?{"files[]":r}:r,a&&new a)}else if(i||n==="application/json")return Ie(t,"application/json"),at(r);return r}],transformResponse:[function(r){var t=this.transitional||K.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&p.isString(r)&&r.length)try{return JSON.parse(r)}catch(a){if(s)throw a.name==="SyntaxError"?Fe.from(a,Fe.ERR_BAD_RESPONSE,this,null,this.response):a}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rt()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(r){K.headers[r]={}});p.forEach(["post","put","patch"],function(r){K.headers[r]=p.merge(it)});var Ce=K,ot=m,ut=Ce,lt=function(r,t,i){var n=this||ut;return ot.forEach(i,function(a){r=a.call(n,r,t)}),r},ue,$e;function or(){return $e||($e=1,ue=function(r){return!!(r&&r.__CANCEL__)}),ue}var je=m,le=lt,dt=or(),ct=Ce,ft=X();function de(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ft}var ht=function(r){de(r),r.headers=r.headers||{},r.data=le.call(r,r.data,r.headers,r.transformRequest),r.headers=je.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),je.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||ct.adapter;return t(r).then(function(n){return de(r),n.data=le.call(r,n.data,n.headers,r.transformResponse),n},function(n){return dt(n)||(de(r),n&&n.response&&(n.response.data=le.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},b=m,ur=function(r,t){t=t||{};var i={};function n(f,h){return b.isPlainObject(f)&&b.isPlainObject(h)?b.merge(f,h):b.isPlainObject(h)?b.merge({},h):b.isArray(h)?h.slice():h}function s(f){if(b.isUndefined(t[f])){if(!b.isUndefined(r[f]))return n(void 0,r[f])}else return n(r[f],t[f])}function a(f){if(!b.isUndefined(t[f]))return n(void 0,t[f])}function o(f){if(b.isUndefined(t[f])){if(!b.isUndefined(r[f]))return n(void 0,r[f])}else return n(void 0,t[f])}function u(f){if(f in t)return n(r[f],t[f]);if(f in r)return n(void 0,r[f])}var c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u};return b.forEach(Object.keys(r).concat(Object.keys(t)),function(h){var l=c[h]||s,E=l(h);b.isUndefined(E)&&l!==u||(i[h]=E)}),i},ce,Me;function lr(){return Me||(Me=1,ce={version:"0.27.2"}),ce}var pt=lr().version,R=_,Re={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){Re[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var He={};Re.transitional=function(r,t,i){function n(s,a){return"[Axios v"+pt+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,o){if(r===!1)throw new R(n(a," has been removed"+(t?" in "+t:"")),R.ERR_DEPRECATED);return t&&!He[a]&&(He[a]=!0,console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(s,a,o):!0}};function mt(e,r,t){if(typeof e!="object")throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var s=i[n],a=r[s];if(a){var o=e[s],u=o===void 0||a(o,s,e);if(u!==!0)throw new R("option "+s+" must be "+u,R.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new R("Unknown option "+s,R.ERR_BAD_OPTION)}}var vt={assertOptions:mt,validators:Re},dr=m,bt=er,We=Mr,Je=ht,Q=ur,Et=ar,cr=vt,P=cr.validators;function q(e){this.defaults=e,this.interceptors={request:new We,response:new We}}q.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=Q(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&cr.assertOptions(i,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(t)===!1||(s=s&&E.synchronous,n.unshift(E.fulfilled,E.rejected))});var a=[];this.interceptors.response.forEach(function(E){a.push(E.fulfilled,E.rejected)});var o;if(!s){var u=[Je,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(a),o=Promise.resolve(t);u.length;)o=o.then(u.shift(),u.shift());return o}for(var c=t;n.length;){var f=n.shift(),h=n.shift();try{c=f(c)}catch(l){h(l);break}}try{o=Je(c)}catch(l){return Promise.reject(l)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};q.prototype.getUri=function(r){r=Q(this.defaults,r);var t=Et(r.baseURL,r.url);return bt(t,r.params,r.paramsSerializer)};dr.forEach(["delete","get","head","options"],function(r){q.prototype[r]=function(t,i){return this.request(Q(i||{},{method:r,url:t,data:(i||{}).data}))}});dr.forEach(["post","put","patch"],function(r){function t(i){return function(s,a,o){return this.request(Q(o||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}q.prototype[r]=t(),q.prototype[r+"Form"]=t(!0)});var yt=q,fe,Ve;function xt(){if(Ve)return fe;Ve=1;var e=X();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(a){i=a});var n=this;this.promise.then(function(s){if(!!n._listeners){var a,o=n._listeners.length;for(a=0;a<o;a++)n._listeners[a](s);n._listeners=null}}),this.promise.then=function(s){var a,o=new Promise(function(u){n.subscribe(u),a=u}).then(s);return o.cancel=function(){n.unsubscribe(a)},o},t(function(a){n.reason||(n.reason=new e(a),i(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(!!this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var i,n=new r(function(a){i=a});return{token:n,cancel:i}},fe=r,fe}var he,ze;function wt(){return ze||(ze=1,he=function(r){return function(i){return r.apply(null,i)}}),he}var pe,Xe;function Ct(){if(Xe)return pe;Xe=1;var e=m;return pe=function(t){return e.isObject(t)&&t.isAxiosError===!0},pe}var Ke=m,Rt=Ye,J=yt,St=ur,Ot=Ce;function fr(e){var r=new J(e),t=Rt(J.prototype.request,r);return Ke.extend(t,J.prototype,r),Ke.extend(t,r),t.create=function(n){return fr(St(e,n))},t}var v=fr(Ot);v.Axios=J;v.CanceledError=X();v.CancelToken=xt();v.isCancel=or();v.VERSION=lr().version;v.toFormData=sr;v.AxiosError=_;v.Cancel=v.CanceledError;v.all=function(r){return Promise.all(r)};v.spread=wt();v.isAxiosError=Ct();ve.exports=v;ve.exports.default=v;(function(e){e.exports=ve.exports})(Qe);const Lt=yr(Qe.exports),At=fetch("./assets/API-MCU.json"),hr=document.querySelector("div.cards"),C=document.querySelector("div.sideTitle"),pr=document.querySelector("div.titles"),I=document.querySelector("div.navFilms"),$=document.querySelector("div.navAll"),j=document.querySelector("div.navShows"),M=document.querySelector("div.navShorts"),H=document.querySelector("div.navWeb"),gt=document.querySelector("li.listFilms"),Tt=document.querySelector("li.listAll"),Pt=document.querySelector("li.listShows"),Nt=document.querySelector("li.listShorts"),qt=document.querySelector("li.listWeb");Lt.get(At).then(e=>{w(e.data.shows,0),$.addEventListener("click",function(r){w(e.data.shows,0)}),Tt.addEventListener("click",function(r){w(e.data.shows,0)}),I.addEventListener("click",function(r){console.log("CIAUUU"),w(e.data.shows,1)}),gt.addEventListener("click",function(r){w(e.data.shows,1)}),j.addEventListener("click",function(r){w(e.data.shows,2)}),Pt.addEventListener("click",function(r){w(e.data.shows,2)}),M.addEventListener("click",function(r){w(e.data.shows,3)}),Nt.addEventListener("click",function(r){w(e.data.shows,3)}),H.addEventListener("click",function(r){w(e.data.shows,4)}),qt.addEventListener("click",function(r){w(e.data.shows,4)})});function w(e,r){let t=document.createElement("span");$.classList.remove("text-red-600","border-b-4","border-red-600"),$.classList.add("hover:text-red-600","hover:border-b-2","hover:border-red-600"),I.classList.remove("text-red-600","border-b-4","border-red-600"),I.classList.add("hover:text-red-600","hover:border-b-2","hover:border-red-600"),M.classList.remove("text-red-600","border-b-4","border-red-600"),M.classList.add("hover:text-red-600","hover:border-b-2","hover:border-red-600"),j.classList.remove("text-red-600","border-b-4","border-red-600"),j.classList.add("hover:text-red-600","hover:border-b-2","hover:border-red-600"),H.classList.remove("text-red-600","border-b-4","border-red-600"),H.classList.add("hover:text-red-600","hover:border-b-2","hover:border-red-600"),hr.innerHTML="",pr.innerHTML="";let i=document.createElement("ul");switch(i.classList.add("text-center"),r){case 0:t.textContent="Titoli MCU",C.innerHTML="",C.appendChild(t),$.classList.remove("hover:text-red-600","hover:border-b-2","hover:border-red-600"),$.classList.add("text-red-600","border-b-4","border-red-600");break;case 1:t.textContent="Film",C.innerHTML="",C.appendChild(t),I.classList.remove("hover:text-red-600","hover:border-b-2","hover:border-red-600"),I.classList.add("text-red-600","border-b-4","border-red-600");break;case 2:t.textContent="Serie TV",C.innerHTML="",C.appendChild(t),j.classList.remove("hover:text-red-600","hover:border-b-2","hover:border-red-600"),j.classList.add("text-red-600","border-b-4","border-red-600");break;case 3:t.textContent="Cortometraggi",C.innerHTML="",C.appendChild(t),M.classList.remove("hover:text-red-600","hover:border-b-2","hover:border-red-600"),M.classList.add("text-red-600","border-b-4","border-red-600");break;case 4:t.textContent="Web Serie",C.innerHTML="",C.appendChild(t),H.classList.remove("hover:text-red-600","hover:border-b-2","hover:border-red-600"),H.classList.add("text-red-600","border-b-4","border-red-600");break}e.forEach(n=>{let s=JSON.parse(JSON.stringify(n));switch(r){case 0:B(s,r),F(s.name,i);break;case 1:s.type=="Film"&&(B(s,r),F(s.name,i));break;case 2:s.type=="Serie TV"&&(B(s,r),F(s.name,i));break;case 3:s.type=="Cortometraggio"&&(B(s,r),F(s.name,i));break;case 4:s.type=="Web Serie"&&(B(s,r),F(s.name,i));break}})}function B(e,r){let t=document.createElement("div");t.setAttribute("id",e.name),t.classList.add("grid","grid-flow-row","auto-rows-max","lg:max-w-sm","overflow-hidden","pt-6");let i=document.createElement("div");i.classList.add("flex","justify-center","h-52");let n=document.createElement("img");n.setAttribute("src","./img/"+e.img),n.setAttribute("alt","Copertina di "+e.name),n.classList.add("w-40"),i.appendChild(n);let s=document.createElement("div");s.classList.add("h-28","lg:h-20","px-6","pt-4","pb-10");let a=document.createElement("div");a.classList.add("font-bold","text-xl","text-black","text-center"),a.textContent=e.name,s.appendChild(a);let o=document.createElement("div");if(o.classList.add("flex","justify-center","h-14","px-6","pt-1","pb-2"),r==0){let u=document.createElement("span");u.classList.add("inline-block","bg-gray-200","rounded-full","px-3","py-1","text-center","text-sm","font-semibold","text-gray-700","mr-2","mb-2"),u.textContent=e.type,o.appendChild(u)}if(r!=3&&r!=4&&e.phase!="Nessuna"){let u=document.createElement("span");u.classList.add("inline-block","bg-gray-200","rounded-full","px-3","py-1","text-center","text-sm","font-semibold","text-gray-700","mr-2","mb-2"),u.textContent="Fase "+e.phase,o.appendChild(u)}if(r==2||r==4){let u=e.episodes[e.episodes.length-1].season,c=document.createElement("span");c.classList.add("inline-block","bg-gray-200","rounded-full","px-3","py-1","text-center","text-sm","font-semibold","text-gray-700","mr-2","mb-2"),u==1?c.textContent=u+" stagione":c.textContent=u+" stagioni",o.appendChild(c)}if(r!=2&&r!=4&&(e.type=="Film"||e.type=="Cortometraggio")){let u=document.createElement("span"),c=e.releaseDate[0]+"/"+e.releaseDate[1]+"/"+e.releaseDate[2];u.classList.add("inline-block","bg-gray-200","rounded-full","px-3","py-1","text-center","text-sm","font-semibold","text-gray-700","mr-2","mb-2"),u.textContent=c,o.appendChild(u)}else{let u=e.episodes[0].releaseDate[2],c=e.episodes[e.episodes.length-1].releaseDate[2],f=document.createElement("span"),h;u!=c?h=u+"-"+c:h=u,f.classList.add("inline-block","bg-gray-200","rounded-full","px-3","py-1","text-center","text-sm","font-semibold","text-gray-700","mr-2","mb-2"),f.textContent=h,o.appendChild(f)}t.appendChild(i),t.appendChild(s),t.appendChild(o),hr.appendChild(t)}function F(e,r){let t=document.createElement("li");t.classList.add("px-2","mb-2");let i=document.createElement("a");i.setAttribute("href","#"+e),i.classList.add("cursor-pointer","hover:font-bold","hover:text-red-600"),i.textContent=e,t.appendChild(i),r.appendChild(t),pr.appendChild(r)}
