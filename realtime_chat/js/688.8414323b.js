"use strict";(self["webpackChunktest_app"]=self["webpackChunktest_app"]||[]).push([[688],{6077:function(t,e,n){var r=n(614),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),h=n(111),l=n(2597),d=n(648),f=n(6330),p=n(8880),g=n(8052),m=n(7045),y=n(7976),v=n(9518),w=n(7674),_=n(5112),E=n(9711),I=n(9909),T=I.enforce,b=I.get,S=c.Int8Array,A=S&&S.prototype,C=c.Uint8ClampedArray,k=C&&C.prototype,N=S&&v(S),R=A&&v(A),D=Object.prototype,O=c.TypeError,P=_("toStringTag"),L=E("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",x=o&&!!w&&"Opera"!==d(c.opera),U=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!h(t))return!1;var e=d(t);return"DataView"===e||l(V,e)||l(F,e)},B=function(t){var e=v(t);if(h(e)){var n=b(e);return n&&l(n,M)?n[M]:B(e)}},q=function(t){if(!h(t))return!1;var e=d(t);return l(V,e)||l(F,e)},$=function(t){if(q(t))return t;throw O("Target is not a typed array")},z=function(t){if(u(t)&&(!w||y(N,t)))return t;throw O(f(t)+" is not a typed array constructor")},K=function(t,e,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&l(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}R[t]&&!n||g(R,t,n?e:x&&A[t]||e,r)}},H=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in V)if(i=c[r],i&&l(i,t))try{delete i[t]}catch(s){}if(N[t]&&!n)return;try{return g(N,t,n?e:x&&N[t]||e)}catch(s){}}for(r in V)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in V)i=c[r],s=i&&i.prototype,s?T(s)[M]=i:x=!1;for(r in F)i=c[r],s=i&&i.prototype,s&&(T(s)[M]=i);if((!x||!u(N)||N===Function.prototype)&&(N=function(){throw O("Incorrect invocation")},x))for(r in V)c[r]&&w(c[r],N);if((!x||!R||R===D)&&(R=N.prototype,x))for(r in V)c[r]&&w(c[r].prototype,R);if(x&&v(k)!==R&&w(k,R),a&&!l(R,P))for(r in U=!0,m(R,P,{configurable:!0,get:function(){return h(this)?this[L]:void 0}}),V)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:x,TYPED_ARRAY_TAG:U&&L,aTypedArray:$,aTypedArrayConstructor:z,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:H,getTypedArrayConstructor:B,isView:j,isTypedArray:q,TypedArray:N,TypedArrayPrototype:R}},7745:function(t,e,n){var r=n(6244);t.exports=function(t,e){var n=0,i=r(e),s=new t(i);while(i>n)s[n]=e[n++];return s}},1843:function(t,e,n){var r=n(6244);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},1572:function(t,e,n){var r=n(6244),i=n(9303),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var h=new e(a),l=0;l<a;l++)h[l]=l===u?o:t[l];return h}},648:function(t,e,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=c(t),a))?n:u?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},7045:function(t,e,n){var r=n(6339),i=n(3070);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:function(t,e,n){var r=n(1702),i=Error,s=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},5668:function(t,e,n){var r=n(1702),i=n(9662);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},4067:function(t,e,n){var r=n(648);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},9518:function(t,e,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,h=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?h:null}},7674:function(t,e,n){var r=n(5668),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},4599:function(t,e,n){var r=n(7593),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw i("Can't convert number to bigint");return BigInt(e)}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},1439:function(t,e,n){var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(t,e,n){var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,h=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(c(e),e);return h(n,t)}))},5315:function(t,e,n){var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,h=i.exportTypedArrayMethod,l=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();h("with",{with:function(t,e){var n=c(this),i=o(t),h=s(n)?a(e):+e;return r(n,u(n),i,h)}}["with"],!l)},2801:function(t,e,n){var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),h=n(9587),l=n(6277),d=n(3678),f=n(1060),p=n(9781),g=n(1913),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,_);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=y(e);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),h(r,this,w),r},_=w.prototype=v.prototype,E="stack"in y(m),I="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),b=!!T&&!(T.writable&&T.configurable),S=E&&!b&&!I;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?w:v});var A=s(m),C=A.prototype;if(C.constructor!==A)for(var k in g||a(C,"constructor",o(1,A)),d)if(c(d,k)){var N=d[k],R=N.s;c(A,R)||a(A,R,o(6,N.c))}},6229:function(t,e,n){var r=n(8052),i=n(1702),s=n(1340),o=n(8053),a=URLSearchParams,c=a.prototype,u=i(c.append),h=i(c["delete"]),l=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return h(this,t);var r=[];l(this,(function(t,e){d(r,{key:e,value:t})})),o(e,1);var i,a=s(t),c=s(n),f=0,p=0,g=!1,m=r.length;while(f<m)i=r[f++],g||i.key===a?(g=!0,h(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7330:function(t,e,n){var r=n(8052),i=n(1702),s=n(1340),o=n(8053),a=URLSearchParams,c=a.prototype,u=i(c.getAll),h=i(c.has),l=new a("a=1");!l.has("a",2)&&l.has("a",void 0)||r(c,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return h(this,t);var r=u(this,t);o(e,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(t,e,n){var r=n(9781),i=n(1702),s=n(7045),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},5688:function(t,e,n){n.r(e),n.d(e,{default:function(){return Uw}});var r=n(3396);const i={class:"home-page"};function s(t,e,n,s,o,a){const c=(0,r.up)("Chat");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(c)])}var o=n(7139),a=n(9242);const c={class:"chat-holder"},u={class:"user-info"},h={class:"avatar-holder"},l=["src","alt"],d={class:"user-name"},f=(0,r._)("span",null," Немає повідомлень ",-1),p={class:"chat-footer"},g={key:1,class:"login-holder"},m=(0,r._)("p",null,"Потрібно залогінитись щоб мати змогу писати повідомлення",-1);function y(t,e,n,i,s,y){const v=(0,r.up)("a-button"),w=(0,r.up)("a-empty"),_=(0,r.up)("a-avatar"),E=(0,r.up)("a-tooltip"),I=(0,r.up)("a-comment"),T=(0,r.up)("a-Input");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",u,[s.user?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r._)("div",h,[(0,r._)("img",{src:s.user.photoURL,alt:s.user.displayName},null,8,l)]),(0,r._)("h3",d,(0,o.zw)(s.user.displayName),1),(0,r.Wm)(v,{onClick:y.signOut,type:"primary"},{default:(0,r.w5)((()=>[(0,r.Uk)("Вийти")])),_:1},8,["onClick"])],64)):(0,r.kq)("",!0)]),(0,r._)("div",{class:(0,o.C_)(["messages-list",{empty:0===s.messages.length}]),ref:"messagesList"},[0===s.messages.length?((0,r.wg)(),(0,r.j4)(w,{key:0,image:t.simpleImage},{description:(0,r.w5)((()=>[f])),_:1},8,["image"])):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.messages,(t=>((0,r.wg)(),(0,r.j4)(I,{key:t},{author:(0,r.w5)((()=>[(0,r._)("a",null,(0,o.zw)(t.name),1)])),avatar:(0,r.w5)((()=>[(0,r.Wm)(_,{src:t.avatar_url,alt:t.name},null,8,["src","alt"])])),content:(0,r.w5)((()=>[(0,r._)("p",null,(0,o.zw)(t.message),1)])),datetime:(0,r.w5)((()=>[(0,r.Wm)(E,{title:"YYYY-MM-DD HH:mm:ss"},{default:(0,r.w5)((()=>[(0,r._)("span",null,(0,o.zw)(y.formatTimestampToTime(t.timestamp)),1)])),_:2},1024)])),_:2},1024)))),128))],2),(0,r._)("div",p,[s.user?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Wm)(T,{placeholder:"Текст повідомлення",value:s.message,"onUpdate:value":e[0]||(e[0]=t=>s.message=t),onKeypress:(0,a.D2)(y.sendMessage,["enter"])},null,8,["value","onKeypress"]),(0,r.Wm)(v,{onClick:y.sendMessage,type:"primary",loading:s.loading},{default:(0,r.w5)((()=>[(0,r.Uk)("Відправити")])),_:1},8,["onClick","loading"])],64)):((0,r.wg)(),(0,r.iD)("div",g,[m,(0,r.Wm)(v,{onClick:y.signInWithGooglePopup,type:"primary"},{default:(0,r.w5)((()=>[(0,r.Uk)("Залогінитись через гугл")])),_:1},8,["onClick"])]))])])}n(7658),n(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},w=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(v(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):w(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,h=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==h)throw new E;const l=e<<2|o>>4;if(r.push(l),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I=function(t){const e=v(t);return _.encodeByteArray(e,!0)},T=function(t){return I(t).replace(/\./g,"")},b=function(t){try{return _.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function S(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=()=>S().__FIREBASE_DEFAULTS__,C=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_API_URL:"https://jsonplaceholder.typicode.com/",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},k=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&b(t[1]);return e&&JSON.parse(e)},N=()=>{try{return A()||C()||k()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},R=t=>{var e,n;return null===(n=null===(e=N())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},D=t=>{const e=R(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},O=()=>{var t;return null===(t=N())||void 0===t?void 0:t.config},P=t=>{var e;return null===(e=N())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[T(JSON.stringify(n)),T(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function U(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(x())}function V(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function F(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function j(){const t=x();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function B(){try{return"object"===typeof indexedDB}catch(t){return!1}}function q(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $="FirebaseError";class z extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=$,Object.setPrototypeOf(this,z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,K.prototype.create)}}class K{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?H(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new z(r,o,n);return a}}function H(t,e){return t.replace(G,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const G=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Q(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(Y(n)&&Y(s)){if(!Q(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Y(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function X(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function Z(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,e){const n=new et(t,e);return n.subscribe.bind(n)}class et{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=nt(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=rt),void 0===r.error&&(r.error=rt),void 0===r.complete&&(r.complete=rt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function nt(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function rt(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function it(t){return t&&t._delegate?t._delegate:t}class st{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new L;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(ut(t))try{this.getOrInitializeService({instanceIdentifier:ot})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=ot){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=ot){return this.instances.has(t)}getOptions(t=ot){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ct(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=ot){return this.component?this.component.multipleInstances?t:ot:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function ct(t){return t===ot?void 0:t}function ut(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new at(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt=[];var dt;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(dt||(dt={}));const ft={debug:dt.DEBUG,verbose:dt.VERBOSE,info:dt.INFO,warn:dt.WARN,error:dt.ERROR,silent:dt.SILENT},pt=dt.INFO,gt={[dt.DEBUG]:"log",[dt.VERBOSE]:"log",[dt.INFO]:"info",[dt.WARN]:"warn",[dt.ERROR]:"error"},mt=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=gt[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class yt{constructor(t){this.name=t,this._logLevel=pt,this._logHandler=mt,this._userLogHandler=null,lt.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in dt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?ft[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,dt.DEBUG,...t),this._logHandler(this,dt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,dt.VERBOSE,...t),this._logHandler(this,dt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,dt.INFO,...t),this._logHandler(this,dt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,dt.WARN,...t),this._logHandler(this,dt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,dt.ERROR,...t),this._logHandler(this,dt.ERROR,...t)}}const vt=(t,e)=>e.some((e=>t instanceof e));let wt,_t;function Et(){return wt||(wt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function It(){return _t||(_t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tt=new WeakMap,bt=new WeakMap,St=new WeakMap,At=new WeakMap,Ct=new WeakMap;function kt(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(Lt(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&Tt.set(e,t)})).catch((()=>{})),Ct.set(e,t),e}function Nt(t){if(bt.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));bt.set(t,e)}let Rt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return bt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||St.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function Dt(t){Rt=t(Rt)}function Ot(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?It().includes(t)?function(...e){return t.apply(Mt(this),e),Lt(Tt.get(this))}:function(...e){return Lt(t.apply(Mt(this),e))}:function(e,...n){const r=t.call(Mt(this),e,...n);return St.set(r,e.sort?e.sort():[e]),Lt(r)}}function Pt(t){return"function"===typeof t?Ot(t):(t instanceof IDBTransaction&&Nt(t),vt(t,Et())?new Proxy(t,Rt):t)}function Lt(t){if(t instanceof IDBRequest)return kt(t);if(At.has(t))return At.get(t);const e=Pt(t);return e!==t&&(At.set(t,e),Ct.set(e,t)),e}const Mt=t=>Ct.get(t);function xt(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Lt(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(Lt(o.result),t.oldVersion,t.newVersion,Lt(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const Ut=["get","getKey","getAll","getAllKeys","count"],Vt=["put","add","delete","clear"],Ft=new Map;function jt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(Ft.get(e))return Ft.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Vt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ut.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return Ft.set(e,s),s}Dt((t=>({...t,get:(e,n,r)=>jt(e,n)||t.get(e,n,r),has:(e,n)=>!!jt(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(qt(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function qt(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const $t="@firebase/app",zt="0.9.17",Kt=new yt("@firebase/app"),Ht="@firebase/app-compat",Gt="@firebase/analytics-compat",Wt="@firebase/analytics",Qt="@firebase/app-check-compat",Yt="@firebase/app-check",Jt="@firebase/auth",Xt="@firebase/auth-compat",Zt="@firebase/database",te="@firebase/database-compat",ee="@firebase/functions",ne="@firebase/functions-compat",re="@firebase/installations",ie="@firebase/installations-compat",se="@firebase/messaging",oe="@firebase/messaging-compat",ae="@firebase/performance",ce="@firebase/performance-compat",ue="@firebase/remote-config",he="@firebase/remote-config-compat",le="@firebase/storage",de="@firebase/storage-compat",fe="@firebase/firestore",pe="@firebase/firestore-compat",ge="firebase",me="10.3.0",ye="[DEFAULT]",ve={[$t]:"fire-core",[Ht]:"fire-core-compat",[Wt]:"fire-analytics",[Gt]:"fire-analytics-compat",[Yt]:"fire-app-check",[Qt]:"fire-app-check-compat",[Jt]:"fire-auth",[Xt]:"fire-auth-compat",[Zt]:"fire-rtdb",[te]:"fire-rtdb-compat",[ee]:"fire-fn",[ne]:"fire-fn-compat",[re]:"fire-iid",[ie]:"fire-iid-compat",[se]:"fire-fcm",[oe]:"fire-fcm-compat",[ae]:"fire-perf",[ce]:"fire-perf-compat",[ue]:"fire-rc",[he]:"fire-rc-compat",[le]:"fire-gcs",[de]:"fire-gcs-compat",[fe]:"fire-fst",[pe]:"fire-fst-compat","fire-js":"fire-js",[ge]:"fire-js-all"},we=new Map,_e=new Map;function Ee(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ie(t){const e=t.name;if(_e.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;_e.set(e,t);for(const n of we.values())Ee(n,t);return!0}function Te(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Se=new K("app","Firebase",be);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new st("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Se.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=me;function ke(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:ye,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!==typeof i||!i)throw Se.create("bad-app-name",{appName:String(i)});if(n||(n=O()),!n)throw Se.create("no-options");const s=we.get(i);if(s){if(Q(n,s.options)&&Q(r,s.config))return s;throw Se.create("duplicate-app",{appName:i})}const o=new ht(i);for(const c of _e.values())o.addComponent(c);const a=new Ae(n,r,o);return we.set(i,a),a}function Ne(t=ye){const e=we.get(t);if(!e&&t===ye&&O())return ke();if(!e)throw Se.create("no-app",{appName:t});return e}function Re(t,e,n){var r;let i=null!==(r=ve[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Kt.warn(t.join(" "))}Ie(new st(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const De="firebase-heartbeat-database",Oe=1,Pe="firebase-heartbeat-store";let Le=null;function Me(){return Le||(Le=xt(De,Oe,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pe)}}}).catch((t=>{throw Se.create("idb-open",{originalErrorMessage:t.message})}))),Le}async function xe(t){try{const e=await Me(),n=await e.transaction(Pe).objectStore(Pe).get(Ve(t));return n}catch(e){if(e instanceof z)Kt.warn(e.message);else{const t=Se.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});Kt.warn(t.message)}}}async function Ue(t,e){try{const n=await Me(),r=n.transaction(Pe,"readwrite"),i=r.objectStore(Pe);await i.put(e,Ve(t)),await r.done}catch(n){if(n instanceof z)Kt.warn(n.message);else{const t=Se.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});Kt.warn(t.message)}}}function Ve(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=1024,je=2592e6;class Be{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ze(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=qe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=je})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=qe(),{heartbeatsToSend:e,unsentEntries:n}=$e(this._heartbeatsCache.heartbeats),r=T(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function qe(){const t=new Date;return t.toISOString().substring(0,10)}function $e(t,e=Fe){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ke(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ke(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ze{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!B()&&q().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await xe(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ue(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ue(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ke(t){return T(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){Ie(new st("platform-logger",(t=>new Bt(t)),"PRIVATE")),Ie(new st("heartbeat",(t=>new Be(t)),"PRIVATE")),Re($t,zt,t),Re($t,zt,"esm2017"),Re("fire-js","")}He("");var Ge="firebase",We="10.3.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Re(Ge,We,"app");n(1439),n(7585),n(5315);var Qe,Ye="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},Je={},Xe=Xe||{},Ze=Ye||self;function tn(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function en(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function nn(t){return Object.prototype.hasOwnProperty.call(t,rn)&&t[rn]||(t[rn]=++sn)}var rn="closure_uid_"+(1e9*Math.random()>>>0),sn=0;function on(t,e,n){return t.call.apply(t.bind,arguments)}function an(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function cn(t,e,n){return cn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?on:an,cn.apply(null,arguments)}function un(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function hn(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function ln(){this.s=this.s,this.o=this.o}var dn=0;ln.prototype.s=!1,ln.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==dn)||nn(this)},ln.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pn(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function gn(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(tn(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function mn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mn.prototype.h=function(){this.defaultPrevented=!0};var yn=function(){if(!Ze.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ze.addEventListener("test",(()=>{}),e),Ze.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function vn(t){return/^[\s\xa0]*$/.test(t)}function wn(){var t=Ze.navigator;return t&&(t=t.userAgent)?t:""}function _n(t){return-1!=wn().indexOf(t)}function En(t){return En[" "](t),t}function In(t,e){var n=co;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}En[" "]=function(){};var Tn,bn,Sn=_n("Opera"),An=_n("Trident")||_n("MSIE"),Cn=_n("Edge"),kn=Cn||An,Nn=_n("Gecko")&&!(-1!=wn().toLowerCase().indexOf("webkit")&&!_n("Edge"))&&!(_n("Trident")||_n("MSIE"))&&!_n("Edge"),Rn=-1!=wn().toLowerCase().indexOf("webkit")&&!_n("Edge");function Dn(){var t=Ze.document;return t?t.documentMode:void 0}t:{var On="",Pn=function(){var t=wn();return Nn?/rv:([^\);]+)(\)|;)/.exec(t):Cn?/Edge\/([\d\.]+)/.exec(t):An?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Rn?/WebKit\/(\S+)/.exec(t):Sn?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Pn&&(On=Pn?Pn[1]:""),An){var Ln=Dn();if(null!=Ln&&Ln>parseFloat(On)){Tn=String(Ln);break t}}Tn=On}if(Ze.document&&An){var Mn=Dn();bn=Mn||(parseInt(Tn,10)||void 0)}else bn=void 0;var xn=bn;function Un(t,e){if(mn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Nn){t:{try{En(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Vn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Un.$.h.call(this)}}hn(Un,mn);var Vn={2:"touch",3:"pen",4:"mouse"};Un.prototype.h=function(){Un.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fn="closure_listenable_"+(1e6*Math.random()|0),jn=0;function Bn(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++jn,this.fa=this.ia=!1}function qn(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $n(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function zn(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Kn(t){const e={};for(const n in t)e[n]=t[n];return e}const Hn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gn(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<Hn.length;e++)n=Hn[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Wn(t){this.src=t,this.g={},this.h=0}function Qn(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=fn(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(qn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Yn(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}Wn.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Yn(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Bn(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var Jn="closure_lm_"+(1e6*Math.random()|0),Xn={};function Zn(t,e,n,r,i){if(r&&r.once)return nr(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Zn(t,e[s],n,r,i);return null}return n=ur(n),t&&t[Fn]?t.O(e,n,en(r)?!!r.capture:!!r,i):tr(t,e,n,!1,r,i)}function tr(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=en(i)?!!i.capture:!!i,a=ar(t);if(a||(t[Jn]=a=new Wn(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=er(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)yn||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(sr(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function er(){function t(n){return e.call(t.src,t.listener,n)}const e=or;return t}function nr(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)nr(t,e[s],n,r,i);return null}return n=ur(n),t&&t[Fn]?t.P(e,n,en(r)?!!r.capture:!!r,i):tr(t,e,n,!0,r,i)}function rr(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)rr(t,e[s],n,r,i);else r=en(r)?!!r.capture:!!r,n=ur(n),t&&t[Fn]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Yn(s,n,r,i),-1<n&&(qn(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=ar(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Yn(e,n,r,i)),(n=-1<t?e[t]:null)&&ir(n))}function ir(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Fn])Qn(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sr(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ar(e))?(Qn(n,t),0==n.h&&(n.src=null,e[Jn]=null)):qn(t)}}}function sr(t){return t in Xn?Xn[t]:Xn[t]="on"+t}function or(t,e){if(t.fa)t=!0;else{e=new Un(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ir(t),t=n.call(r,e)}return t}function ar(t){return t=t[Jn],t instanceof Wn?t:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ur(t){return"function"===typeof t?t:(t[cr]||(t[cr]=function(e){return t.handleEvent(e)}),t[cr])}function hr(){ln.call(this),this.i=new Wn(this),this.S=this,this.J=null}function lr(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new mn(e,t);else if(e instanceof mn)e.target=e.target||t;else{var i=e;e=new mn(r,t),Gn(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=dr(o,r,!0,e)&&i}if(o=e.g=t,i=dr(o,r,!0,e)&&i,i=dr(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=dr(o,r,!1,e)&&i}function dr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Qn(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}hn(hr,ln),hr.prototype[Fn]=!0,hr.prototype.removeEventListener=function(t,e,n,r){rr(this,t,e,n,r)},hr.prototype.N=function(){if(hr.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)qn(n[r]);delete e.g[t],e.h--}}this.J=null},hr.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},hr.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var fr=Ze.JSON.stringify;class pr{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function gr(){var t=Tr;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mr{constructor(){this.h=this.g=null}add(t,e){const n=yr.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var yr=new pr((()=>new vr),(t=>t.reset()));class vr{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function wr(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _r(t){Ze.setTimeout((()=>{throw t}),0)}let Er,Ir=!1,Tr=new mr,br=()=>{const t=Ze.Promise.resolve(void 0);Er=()=>{t.then(Sr)}};var Sr=()=>{for(var t;t=gr();){try{t.h.call(t.g)}catch(n){_r(n)}var e=yr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ir=!1};function Ar(t,e){hr.call(this),this.h=t||1,this.g=e||Ze,this.j=cn(this.qb,this),this.l=Date.now()}function Cr(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function kr(t,e,n){if("function"===typeof t)n&&(t=cn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=cn(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ze.setTimeout(t,e||0)}function Nr(t){t.g=kr((()=>{t.g=null,t.i&&(t.i=!1,Nr(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}hn(Ar,hr),Qe=Ar.prototype,Qe.ga=!1,Qe.T=null,Qe.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),lr(this,"tick"),this.ga&&(Cr(this),this.start()))}},Qe.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Qe.N=function(){Ar.$.N.call(this),Cr(this),delete this.g};class Rr extends ln{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Nr(this)}N(){super.N(),this.g&&(Ze.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dr(t){ln.call(this),this.h=t,this.g={}}hn(Dr,ln);var Or=[];function Pr(t,e,n,r){Array.isArray(n)||(n&&(Or[0]=n.toString()),n=Or);for(var i=0;i<n.length;i++){var s=Zn(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Lr(t){$n(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ir(t)}),t),t.g={}}function Mr(){this.g=!0}function xr(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Ur(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Vr(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+jr(t,n)+(r?" "+r:"")}))}function Fr(t,e){t.info((function(){return"TIMEOUT: "+e}))}function jr(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return fr(n)}catch(a){return e}}Dr.prototype.N=function(){Dr.$.N.call(this),Lr(this)},Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Mr.prototype.Ea=function(){this.g=!1},Mr.prototype.info=function(){};var Br={},qr=null;function $r(){return qr=qr||new hr}function zr(t){mn.call(this,Br.Ta,t)}function Kr(t){const e=$r();lr(e,new zr(e))}function Hr(t,e){mn.call(this,Br.STAT_EVENT,t),this.stat=e}function Gr(t){const e=$r();lr(e,new Hr(e,t))}function Wr(t,e){mn.call(this,Br.Ua,t),this.size=e}function Qr(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return Ze.setTimeout((function(){t()}),e)}Br.Ta="serverreachability",hn(zr,mn),Br.STAT_EVENT="statevent",hn(Hr,mn),Br.Ua="timingevent",hn(Wr,mn);var Yr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Jr={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xr(){}function Zr(t){return t.h||(t.h=t.i())}function ti(){}Xr.prototype.h=null;var ei,ni={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ri(){mn.call(this,"d")}function ii(){mn.call(this,"c")}function si(){}function oi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Dr(this),this.P=ci,t=kn?125:void 0,this.V=new Ar(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ai}function ai(){this.i=null,this.g="",this.h=!1}hn(ri,mn),hn(ii,mn),hn(si,Xr),si.prototype.g=function(){return new XMLHttpRequest},si.prototype.i=function(){return{}},ei=new si;var ci=45e3,ui={},hi={};function li(t,e,n){t.L=1,t.v=Pi(ki(e)),t.s=n,t.S=!0,di(t,null)}function di(t,e){t.G=Date.now(),mi(t),t.A=ki(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Hi(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ai,t.g=Js(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Rr(cn(t.Pa,t,t.g),t.O)),Pr(t.U,t.g,"readystatechange",t.nb),e=t.I?Kn(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Kr(),xr(t.j,t.u,t.A,t.m,t.W,t.s)}function fi(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function pi(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=gi(t,n),r==hi){4==e&&(t.o=4,Gr(14),i=!1),Vr(t.j,t.m,null,"[Incomplete Response]");break}if(r==ui){t.o=4,Gr(15),Vr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Vr(t.j,t.m,r,null),Ei(t,r)}fi(t)&&r!=hi&&r!=ui&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Gr(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$s(e),e.M=!0,Gr(11))):(Vr(t.j,t.m,n,"[Invalid Chunked Response]"),_i(t),wi(t))}function gi(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?hi:(n=Number(e.substring(n,r)),isNaN(n)?ui:(r+=1,r+n>e.length?hi:(e=e.slice(r,r+n),t.C=r+n,e)))}function mi(t){t.Y=Date.now()+t.P,yi(t,t.P)}function yi(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Qr(cn(t.lb,t),e)}function vi(t){t.B&&(Ze.clearTimeout(t.B),t.B=null)}function wi(t){0==t.l.H||t.J||Hs(t.l,t)}function _i(t){vi(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Cr(t.V),Lr(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ei(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||ts(n.i,t)))if(!t.K&&ts(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Ks(n),Ls(n)}qs(n),Gr(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Qr(cn(n.ib,n),6e3));if(1>=Zi(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else Ws(n,11)}else if((t.K||n.g==t)&&Ks(n),!vn(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(es(s,s.h),s.h=null))}if(r.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,Oi(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Ys(r,r.J?r.pa:null,r.Y),o.K){ns(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(vi(a),mi(a)),r.g=o}else Bs(r);0<n.j.length&&xs(n)}else"stop"!=u[0]&&"close"!=u[0]||Ws(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ws(n,7):Ps(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}Kr(4)}catch(u){}}function Ii(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(tn(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ti(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(tn(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function bi(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(tn(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ti(t),r=Ii(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}Qe=oi.prototype,Qe.setTimeout=function(t){this.P=t},Qe.nb=function(t){t=t.target;const e=this.M;e&&3==As(t)?e.l():this.Pa(t)},Qe.Pa=function(t){try{if(t==this.g)t:{const h=As(this.g);var e=this.g.Ia();const l=this.g.da();if(!(3>h)&&(3!=h||kn||this.g&&(this.h.h||this.g.ja()||Cs(this.g)))){this.J||4!=h||7==e||Kr(8==e||0>=l?3:2),vi(this);var n=this.g.da();this.ca=n;e:if(fi(this)){var r=Cs(this.g);t="";var i=r.length,s=4==As(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){_i(this),wi(this);var o="";break e}this.h.i=new Ze.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Ur(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vn(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Gr(12),_i(this),wi(this);break t}Vr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ei(this,n)}this.S?(pi(this,h,o),kn&&this.i&&3==h&&(Pr(this.U,this.V,"tick",this.mb),this.V.start())):(Vr(this.j,this.m,o,null),Ei(this,o)),4==h&&_i(this),this.i&&!this.J&&(4==h?Hs(this.l,this):(this.i=!1,mi(this)))}else ks(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Gr(12)):(this.o=0,Gr(13)),_i(this),wi(this)}}}catch(h){}},Qe.mb=function(){if(this.g){var t=As(this.g),e=this.g.ja();this.C<e.length&&(vi(this),pi(this,t,e),this.i&&4!=t&&mi(this))}},Qe.cancel=function(){this.J=!0,_i(this)},Qe.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Fr(this.j,this.A),2!=this.L&&(Kr(),Gr(17)),_i(this),this.o=2,wi(this)):yi(this,this.Y-t)};var Si=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ai(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ci(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ci){this.h=t.h,Ni(this,t.j),this.s=t.s,this.g=t.g,Ri(this,t.m),this.l=t.l;var e=t.i,n=new qi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Di(this,n),this.o=t.o}else t&&(e=String(t).match(Si))?(this.h=!1,Ni(this,e[1]||"",!0),this.s=Li(e[2]||""),this.g=Li(e[3]||"",!0),Ri(this,e[4]),this.l=Li(e[5]||"",!0),Di(this,e[6]||"",!0),this.o=Li(e[7]||"")):(this.h=!1,this.i=new qi(null,this.h))}function ki(t){return new Ci(t)}function Ni(t,e,n){t.j=n?Li(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ri(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Di(t,e,n){e instanceof qi?(t.i=e,Wi(t.i,t.h)):(n||(e=Mi(e,ji)),t.i=new qi(e,t.h))}function Oi(t,e,n){t.i.set(e,n)}function Pi(t){return Oi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Li(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Mi(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,xi),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xi(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ci.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Mi(e,Ui,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Mi(e,Ui,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Mi(n,"/"==n.charAt(0)?Fi:Vi,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Mi(n,Bi)),t.join("")};var Ui=/[#\/\?@]/g,Vi=/[#\?:]/g,Fi=/[#\?]/g,ji=/[#\?@]/g,Bi=/#/g;function qi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $i(t){t.g||(t.g=new Map,t.h=0,t.i&&Ai(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function zi(t,e){$i(t),e=Gi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ki(t,e){return $i(t),e=Gi(t,e),t.g.has(e)}function Hi(t,e,n){zi(t,e),0<n.length&&(t.i=null,t.g.set(Gi(t,e),pn(n)),t.h+=n.length)}function Gi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Wi(t,e){e&&!t.j&&($i(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(zi(this,e),Hi(this,n,t))}),t)),t.j=e}Qe=qi.prototype,Qe.add=function(t,e){$i(this),this.i=null,t=Gi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Qe.forEach=function(t,e){$i(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},Qe.ta=function(){$i(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},Qe.Z=function(t){$i(this);let e=[];if("string"===typeof t)Ki(this,t)&&(e=e.concat(this.g.get(Gi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Qe.set=function(t,e){return $i(this),this.i=null,t=Gi(this,t),Ki(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Qe.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},Qe.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var Qi=class{constructor(t,e){this.g=t,this.map=e}};function Yi(t){this.l=t||Ji,Ze.PerformanceNavigationTiming?(t=Ze.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(Ze.g&&Ze.g.Ka&&Ze.g.Ka()&&Ze.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ji=10;function Xi(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Zi(t){return t.h?1:t.g?t.g.size:0}function ts(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function es(t,e){t.g?t.g.add(e):t.h=e}function ns(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function rs(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return pn(t.i)}Yi.prototype.cancel=function(){if(this.i=rs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var is=class{stringify(t){return Ze.JSON.stringify(t,void 0)}parse(t){return Ze.JSON.parse(t,void 0)}};function ss(){this.g=new is}function os(t,e,n){const r=n||"";try{bi(t,(function(t,n){let i=t;en(t)&&(i=fr(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function as(t,e){const n=new Mr;if(Ze.Image){const r=new Image;r.onload=un(cs,n,r,"TestLoadImage: loaded",!0,e),r.onerror=un(cs,n,r,"TestLoadImage: error",!1,e),r.onabort=un(cs,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=un(cs,n,r,"TestLoadImage: timeout",!1,e),Ze.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function cs(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function us(t){this.l=t.fc||null,this.j=t.ob||!1}function hs(t,e){hr.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ls,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn(us,Xr),us.prototype.g=function(){return new hs(this.l,this.j)},us.prototype.i=function(t){return function(){return t}}({}),hn(hs,hr);var ls=0;function ds(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function fs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ps(t)}function ps(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Qe=hs.prototype,Qe.open=function(t,e){if(this.readyState!=ls)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ps(this)},Qe.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Ze).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Qe.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,fs(this)),this.readyState=ls},Qe.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof Ze.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ds(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Qe.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fs(this):ps(this),3==this.readyState&&ds(this)}},Qe.Za=function(t){this.g&&(this.response=this.responseText=t,fs(this))},Qe.Ya=function(t){this.g&&(this.response=t,fs(this))},Qe.ka=function(){this.g&&fs(this)},Qe.setRequestHeader=function(t,e){this.v.append(t,e)},Qe.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Qe.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(hs.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var gs=Ze.JSON.parse;function ms(t){hr.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ys,this.L=this.M=!1}hn(ms,hr);var ys="",vs=/^https?$/i,ws=["POST","PUT"];function _s(t){return An&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Es(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Is(t),bs(t)}function Is(t){t.F||(t.F=!0,lr(t,"complete"),lr(t,"error"))}function Ts(t){if(t.h&&"undefined"!=typeof Xe&&(!t.C[1]||4!=As(t)||2!=t.da()))if(t.v&&4==As(t))kr(t.La,0,t);else if(lr(t,"readystatechange"),4==As(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(Si)[1]||null;!i&&Ze.self&&Ze.self.location&&(i=Ze.self.location.protocol.slice(0,-1)),r=!vs.test(i?i.toLowerCase():"")}n=r}if(n)lr(t,"complete"),lr(t,"success");else{t.m=6;try{var s=2<As(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",Is(t)}}finally{bs(t)}}}function bs(t,e){if(t.g){Ss(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||lr(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Ss(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Ze.clearTimeout(t.A),t.A=null)}function As(t){return t.g?t.g.readyState:0}function Cs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ys:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Fo){return null}}function ks(t){const e={};t=(t.g&&2<=As(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(vn(t[r]))continue;var n=wr(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}zn(e,(function(t){return t.join(", ")}))}function Ns(t){let e="";return $n(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Rs(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Ns(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Oi(t,e,n))}function Ds(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Os(t){this.Ga=0,this.j=[],this.l=new Mr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ds("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ds("baseRetryDelayMs",5e3,t),this.hb=Ds("retryDelaySeedMs",1e4,t),this.eb=Ds("forwardChannelMaxRetries",2,t),this.xa=Ds("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Yi(t&&t.concurrentRequestLimit),this.Ja=new ss,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Ps(t){if(Ms(t),3==t.H){var e=t.W++,n=ki(t.I);if(Oi(n,"SID",t.K),Oi(n,"RID",e),Oi(n,"TYPE","terminate"),Fs(t,n),e=new oi(t,t.l,e),e.L=2,e.v=Pi(ki(n)),n=!1,Ze.navigator&&Ze.navigator.sendBeacon)try{n=Ze.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&Ze.Image&&((new Image).src=e.v,n=!0),n||(e.g=Js(e.l,null),e.g.ha(e.v)),e.G=Date.now(),mi(e)}Qs(t)}function Ls(t){t.g&&($s(t),t.g.cancel(),t.g=null)}function Ms(t){Ls(t),t.u&&(Ze.clearTimeout(t.u),t.u=null),Ks(t),t.i.cancel(),t.m&&("number"===typeof t.m&&Ze.clearTimeout(t.m),t.m=null)}function xs(t){if(!Xi(t.i)&&!t.m){t.m=!0;var e=t.Na;Er||br(),Ir||(Er(),Ir=!0),Tr.add(e,t),t.C=0}}function Us(t,e){return!(Zi(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=Qr(cn(t.Na,t,e),Gs(t,t.C)),t.C++,!0))}function Vs(t,e){var n;n=e?e.m:t.W++;const r=ki(t.I);Oi(r,"SID",t.K),Oi(r,"RID",n),Oi(r,"AID",t.V),Fs(t,r),t.o&&t.s&&Rs(r,t.o,t.s),n=new oi(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=js(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),es(t.i,n),li(n,r,e)}function Fs(t,e){t.na&&$n(t.na,(function(t,n){Oi(e,n,t)})),t.h&&bi({},(function(t,n){Oi(e,n,t)}))}function js(t,e,n){n=Math.min(t.j.length,n);var r=t.h?cn(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{os(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Bs(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Er||br(),Ir||(Er(),Ir=!0),Tr.add(e,t),t.A=0}}function qs(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Qr(cn(t.Ma,t),Gs(t,t.A)),t.A++,!0)}function $s(t){null!=t.B&&(Ze.clearTimeout(t.B),t.B=null)}function zs(t){t.g=new oi(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=ki(t.wa);Oi(e,"RID","rpc"),Oi(e,"SID",t.K),Oi(e,"AID",t.V),Oi(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Oi(e,"TO",t.qa),Oi(e,"TYPE","xmlhttp"),Fs(t,e),t.o&&t.s&&Rs(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Pi(ki(e)),n.s=null,n.S=!0,di(n,t)}function Ks(t){null!=t.v&&(Ze.clearTimeout(t.v),t.v=null)}function Hs(t,e){var n=null;if(t.g==e){Ks(t),$s(t),t.g=null;var r=2}else{if(!ts(t.i,e))return;n=e.F,ns(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=$r(),lr(r,new Wr(r,n)),xs(t)}else Bs(t);else if(i=e.o,3==i||0==i&&0<e.ca||!(1==r&&Us(t,e)||2==r&&qs(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ws(t,5);break;case 4:Ws(t,10);break;case 3:Ws(t,6);break;default:Ws(t,2)}}function Gs(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ws(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=cn(t.pb,t);n||(n=new Ci("//www.google.com/images/cleardot.gif"),Ze.location&&"http"==Ze.location.protocol||Ni(n,"https"),Pi(n)),as(n.toString(),r)}else Gr(2);t.H=0,t.h&&t.h.za(e),Qs(t),Ms(t)}function Qs(t){if(t.H=0,t.ma=[],t.h){const e=rs(t.i);0==e.length&&0==t.j.length||(gn(t.ma,e),gn(t.ma,t.j),t.i.i.length=0,pn(t.j),t.j.length=0),t.h.ya()}}function Ys(t,e,n){var r=n instanceof Ci?ki(n):new Ci(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Ri(r,r.m);else{var i=Ze.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ci(null);r&&Ni(s,r),e&&(s.g=e),i&&Ri(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Oi(r,n,e),Oi(r,"VER",t.ra),Fs(t,r),r}function Js(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ms(new us({ob:!0})):new ms(t.va),e.Oa(t.J),e}function Xs(){}function Zs(){if(An&&!(10<=Number(xn)))throw Error("Environmental error: no available transport.")}function to(t,e){hr.call(this),this.g=new Os(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!vn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vn(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ro(this)}function eo(t){ri.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function no(){ii.call(this),this.status=1}function ro(t){this.g=t}function io(){this.blockSize=-1}function so(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function oo(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function ao(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}Qe=ms.prototype,Qe.Oa=function(t){this.M=t},Qe.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ei.g(),this.C=this.u?Zr(this.u):Zr(ei),this.g.onreadystatechange=cn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Es(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Ze.FormData&&t instanceof Ze.FormData,!(0<=fn(ws,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ss(this),0<this.B&&((this.L=_s(this.g))?(this.g.timeout=this.B,this.g.ontimeout=cn(this.ua,this)):this.A=kr(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Es(this,s)}},Qe.ua=function(){"undefined"!=typeof Xe&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lr(this,"timeout"),this.abort(8))},Qe.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lr(this,"complete"),lr(this,"abort"),bs(this))},Qe.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bs(this,!0)),ms.$.N.call(this)},Qe.La=function(){this.s||(this.G||this.v||this.l?Ts(this):this.kb())},Qe.kb=function(){Ts(this)},Qe.isActive=function(){return!!this.g},Qe.da=function(){try{return 2<As(this)?this.g.status:-1}catch(t){return-1}},Qe.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Qe.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),gs(e)}},Qe.Ia=function(){return this.m},Qe.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},Qe=Os.prototype,Qe.ra=8,Qe.H=1,Qe.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new oi(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Kn(s),Gn(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=js(this,i,e),n=ki(this.I),Oi(n,"RID",t),Oi(n,"CVER",22),this.F&&Oi(n,"X-HTTP-Session-Id",this.F),Fs(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Ns(s)))+"&"+e:this.o&&Rs(n,this.o,s)),es(this.i,i),this.bb&&Oi(n,"TYPE","init"),this.P?(Oi(n,"$req",e),Oi(n,"SID","null"),i.aa=!0,li(i,n,null)):li(i,n,e),this.H=2}}else 3==this.H&&(t?Vs(this,t):0==this.j.length||Xi(this.i)||Vs(this))},Qe.Ma=function(){if(this.u=null,zs(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Qr(cn(this.jb,this),t)}},Qe.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Gr(10),Ls(this),zs(this))},Qe.ib=function(){null!=this.v&&(this.v=null,Ls(this),qs(this),Gr(19))},Qe.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Gr(2)):(this.l.info("Failed to ping google.com"),Gr(1))},Qe.isActive=function(){return!!this.h&&this.h.isActive(this)},Qe=Xs.prototype,Qe.Ba=function(){},Qe.Aa=function(){},Qe.za=function(){},Qe.ya=function(){},Qe.isActive=function(){return!0},Qe.Va=function(){},Zs.prototype.g=function(t,e){return new to(t,e)},hn(to,hr),to.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Gr(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Ys(t,null,t.Y),xs(t)},to.prototype.close=function(){Ps(this.g)},to.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=fr(t),t=n);e.j.push(new Qi(e.fb++,t)),3==e.H&&xs(e)},to.prototype.N=function(){this.g.h=null,delete this.j,Ps(this.g),delete this.g,to.$.N.call(this)},hn(eo,ri),hn(no,ii),hn(ro,Xs),ro.prototype.Ba=function(){lr(this.g,"a")},ro.prototype.Aa=function(t){lr(this.g,new eo(t))},ro.prototype.za=function(t){lr(this.g,new no)},ro.prototype.ya=function(){lr(this.g,"b")},hn(so,io),so.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},so.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)oo(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){oo(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){oo(this,r),i=0;break}}this.h=i,this.i+=e},so.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var co={};function uo(t){return-128<=t&&128>t?In(t,(function(t){return new ao([0|t],0>t?-1:0)})):new ao([0|t],0>t?-1:0)}function ho(t){if(isNaN(t)||!isFinite(t))return po;if(0>t)return wo(ho(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=fo;return new ao(e,0)}function lo(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return wo(lo(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ho(Math.pow(e,8)),r=po,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=ho(Math.pow(e,s)),r=r.R(s).add(ho(o))):(r=r.R(n),r=r.add(ho(o)))}return r}var fo=4294967296,po=uo(0),go=uo(1),mo=uo(16777216);function yo(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function vo(t){return-1==t.h}function wo(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ao(n,~t.h).add(go)}function _o(t,e){return t.add(wo(e))}function Eo(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Io(t,e){this.g=t,this.h=e}function To(t,e){if(yo(e))throw Error("division by zero");if(yo(t))return new Io(po,po);if(vo(t))return e=To(wo(t),e),new Io(wo(e.g),wo(e.h));if(vo(e))return e=To(t,wo(e)),new Io(wo(e.g),e.h);if(30<t.g.length){if(vo(t)||vo(e))throw Error("slowDivide_ only works with positive integers.");for(var n=go,r=e;0>=r.X(t);)n=bo(n),r=bo(r);var i=So(n,1),s=So(r,1);for(r=So(r,2),n=So(n,2);!yo(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=So(r,1),n=So(n,1)}return e=_o(t,i.R(e)),new Io(i,e)}for(i=po;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ho(n),o=s.R(e);vo(o)||0<o.X(t);)n-=r,s=ho(n),o=s.R(e);yo(s)&&(s=go),i=i.add(s),t=_o(t,o)}return new Io(i,t)}function bo(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ao(n,t.h)}function So(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ao(i,t.h)}Qe=ao.prototype,Qe.ea=function(){if(vo(this))return-wo(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:fo+r)*e,e*=fo}return t},Qe.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(yo(this))return"0";if(vo(this))return"-"+wo(this).toString(t);for(var e=ho(Math.pow(t,6)),n=this,r="";;){var i=To(n,e).g;n=_o(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,yo(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},Qe.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Qe.X=function(t){return t=_o(this,t),vo(t)?-1:yo(t)?0:1},Qe.abs=function(){return vo(this)?wo(this):this},Qe.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ao(n,-2147483648&n[n.length-1]?-1:0)},Qe.R=function(t){if(yo(this)||yo(t))return po;if(vo(this))return vo(t)?wo(this).R(wo(t)):wo(wo(this).R(t));if(vo(t))return wo(this.R(wo(t)));if(0>this.X(mo)&&0>t.X(mo))return ho(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Eo(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Eo(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Eo(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Eo(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ao(n,0)},Qe.gb=function(t){return To(this,t).h},Qe.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ao(n,this.h&t.h)},Qe.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ao(n,this.h|t.h)},Qe.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ao(n,this.h^t.h)},Zs.prototype.createWebChannel=Zs.prototype.g,to.prototype.send=to.prototype.u,to.prototype.open=to.prototype.m,to.prototype.close=to.prototype.close,Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,Jr.COMPLETE="complete",ti.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",hr.prototype.listen=hr.prototype.O,ms.prototype.listenOnce=ms.prototype.P,ms.prototype.getLastError=ms.prototype.Sa,ms.prototype.getLastErrorCode=ms.prototype.Ia,ms.prototype.getStatus=ms.prototype.da,ms.prototype.getResponseJson=ms.prototype.Wa,ms.prototype.getResponseText=ms.prototype.ja,ms.prototype.send=ms.prototype.ha,ms.prototype.setWithCredentials=ms.prototype.Oa,so.prototype.digest=so.prototype.l,so.prototype.reset=so.prototype.reset,so.prototype.update=so.prototype.j,ao.prototype.add=ao.prototype.add,ao.prototype.multiply=ao.prototype.R,ao.prototype.modulo=ao.prototype.gb,ao.prototype.compare=ao.prototype.X,ao.prototype.toNumber=ao.prototype.ea,ao.prototype.toString=ao.prototype.toString,ao.prototype.getBits=ao.prototype.D,ao.fromNumber=ho,ao.fromString=lo;var Ao=Je.createWebChannelTransport=function(){return new Zs},Co=Je.getStatEventTarget=function(){return $r()},ko=Je.ErrorCode=Yr,No=Je.EventType=Jr,Ro=Je.Event=Br,Do=Je.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Oo=(Je.FetchXmlHttpFactory=us,Je.WebChannel=ti),Po=Je.XhrIo=ms,Lo=Je.Md5=so,Mo=Je.Integer=ao;const xo="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Uo.UNAUTHENTICATED=new Uo(null),Uo.GOOGLE_CREDENTIALS=new Uo("google-credentials-uid"),Uo.FIRST_PARTY=new Uo("first-party-uid"),Uo.MOCK_USER=new Uo("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Vo="10.3.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new yt("@firebase/firestore");function jo(){return Fo.logLevel}function Bo(t,...e){if(Fo.logLevel<=dt.DEBUG){const n=e.map(zo);Fo.debug(`Firestore (${Vo}): ${t}`,...n)}}function qo(t,...e){if(Fo.logLevel<=dt.ERROR){const n=e.map(zo);Fo.error(`Firestore (${Vo}): ${t}`,...n)}}function $o(t,...e){if(Fo.logLevel<=dt.WARN){const n=e.map(zo);Fo.warn(`Firestore (${Vo}): ${t}`,...n)}}function zo(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t="Unexpected state"){const e=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: `+t;throw qo(e),new Error(e)}function Ho(t,e){t||Ko()}function Go(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qo extends z{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Uo.UNAUTHENTICATED)))}shutdown(){}}class Zo{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ta{constructor(t){this.t=t,this.currentUser=Uo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Yo;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yo,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Bo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Bo("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yo)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Bo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ho("string"==typeof e.accessToken),new Jo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ho(null===t||"string"==typeof t),new Uo(t)}}class ea{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Uo.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class na{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new ea(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Uo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ra{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ia{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Bo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Bo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Bo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):Bo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ho("string"==typeof t.token),this.R=t.token,new ra(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sa(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=sa(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function aa(t,e){return t<e?-1:t>e?1:0}function ca(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Qo(Wo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Qo(Wo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Qo(Wo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Qo(Wo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ua.fromMillis(Date.now())}static fromDate(t){return ua.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ua(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?aa(this.nanoseconds,t.nanoseconds):aa(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ha(t)}static min(){return new ha(new ua(0,0))}static max(){return new ha(new ua(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ko(),void 0===n?n=t.length-e:n>t.length-e&&Ko(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===la.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof la?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class da extends la{construct(t,e,n){return new da(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Qo(Wo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new da(e)}static emptyPath(){return new da([])}}const fa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pa extends la{construct(t,e,n){return new pa(t,e,n)}static isValidIdentifier(t){return fa.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pa.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new pa(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Qo(Wo.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Qo(Wo.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Qo(Wo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Qo(Wo.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new pa(e)}static emptyPath(){return new pa([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t){this.path=t}static fromPath(t){return new ga(da.fromString(t))}static fromName(t){return new ga(da.fromString(t).popFirst(5))}static empty(){return new ga(da.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===da.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return da.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ga(new da(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ma.UNKNOWN_ID=-1;function ya(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ha.fromTimestamp(1e9===r?new ua(n+1,0):new ua(n,r));return new wa(i,ga.empty(),e)}function va(t){return new wa(t.readTime,t.key,-1)}class wa{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new wa(ha.min(),ga.empty(),-1)}static max(){return new wa(ha.max(),ga.empty(),-1)}}function _a(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ga.comparator(t.documentKey,e.documentKey),0!==n?n:aa(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ia{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(t){if(t.code!==Wo.FAILED_PRECONDITION||t.message!==Ea)throw t;Bo("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ko(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ba(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ba?e:ba.resolve(e)}catch(t){return ba.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ba.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ba.reject(e)}static resolve(t){return new ba(((e,n)=>{e(t)}))}static reject(t){return new ba(((e,n)=>{n(t)}))}static waitFor(t){return new ba(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=ba.resolve(!1);for(const n of t)e=e.next((t=>t?ba.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ba(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new ba(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Ca(t){return null==t}function ka(t){return 0===t&&1/t==-1/0}function Na(t){return"number"==typeof t&&Number.isInteger(t)&&!ka(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Aa.ae=-1;const Ra=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Da=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Oa=Da;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pa(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function La(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ma(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t,e){this.comparator=t,this.root=e||Va.EMPTY}insert(t,e){return new xa(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Va.BLACK,null,null))}remove(t){return new xa(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Va.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ua(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ua(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ua(this.root,t,this.comparator,!0)}}class Ua{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Va{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Va.RED,this.left=null!=r?r:Va.EMPTY,this.right=null!=i?i:Va.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Va(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Va.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Va.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Va.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Va.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ko();if(this.right.isRed())throw Ko();const t=this.left.check();if(t!==this.right.check())throw Ko();return t+(this.isRed()?0:1)}}Va.EMPTY=null,Va.RED=!0,Va.BLACK=!1,Va.EMPTY=new class{constructor(){this.size=0}get key(){throw Ko()}get value(){throw Ko()}get color(){throw Ko()}get left(){throw Ko()}get right(){throw Ko()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Va(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{constructor(t){this.comparator=t,this.data=new xa(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ja(this.data.getIterator())}getIteratorFrom(t){return new ja(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Fa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Fa(this.comparator);return e.data=t,e}}class ja{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(t){this.fields=t,t.sort(pa.comparator)}static empty(){return new Ba([])}unionWith(t){let e=new Fa(pa.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ba(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ca(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $a{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new qa("Invalid base64 string: "+t):t}}(t);return new $a(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new $a(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return aa(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$a.EMPTY_BYTE_STRING=new $a("");const za=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ka(t){if(Ho(!!t),"string"==typeof t){let e=0;const n=za.exec(t);if(Ho(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ha(t.seconds),nanos:Ha(t.nanos)}}function Ha(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ga(t){return"string"==typeof t?$a.fromBase64String(t):$a.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Qa(t){const e=t.mapValue.fields.__previous_value__;return Wa(e)?Qa(e):e}function Ya(t){const e=Ka(t.mapValue.fields.__local_write_time__.timestampValue);return new ua(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Xa{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Xa("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Xa&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function tc(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wa(t)?4:pc(t)?9007199254740991:10:Ko()}function ec(t,e){if(t===e)return!0;const n=tc(t);if(n!==tc(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ya(t).isEqual(Ya(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ka(t.timestampValue),r=Ka(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ga(t.bytesValue).isEqual(Ga(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ha(t.geoPointValue.latitude)===Ha(e.geoPointValue.latitude)&&Ha(t.geoPointValue.longitude)===Ha(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ha(t.integerValue)===Ha(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ha(t.doubleValue),r=Ha(e.doubleValue);return n===r?ka(n)===ka(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ca(t.arrayValue.values||[],e.arrayValue.values||[],ec);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Pa(n)!==Pa(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ec(n[i],r[i])))return!1;return!0}(t,e);default:return Ko()}}function nc(t,e){return void 0!==(t.values||[]).find((t=>ec(t,e)))}function rc(t,e){if(t===e)return 0;const n=tc(t),r=tc(e);if(n!==r)return aa(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return aa(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ha(t.integerValue||t.doubleValue),r=Ha(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ic(t.timestampValue,e.timestampValue);case 4:return ic(Ya(t),Ya(e));case 5:return aa(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ga(t),r=Ga(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=aa(n[i],r[i]);if(0!==t)return t}return aa(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=aa(Ha(t.latitude),Ha(e.latitude));return 0!==n?n:aa(Ha(t.longitude),Ha(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=rc(n[i],r[i]);if(t)return t}return aa(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Za.mapValue&&e===Za.mapValue)return 0;if(t===Za.mapValue)return 1;if(e===Za.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=aa(r[o],s[o]);if(0!==t)return t;const e=rc(n[r[o]],i[s[o]]);if(0!==e)return e}return aa(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Ko()}}function ic(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return aa(t,e);const n=Ka(t),r=Ka(e),i=aa(n.seconds,r.seconds);return 0!==i?i:aa(n.nanos,r.nanos)}function sc(t){return oc(t)}function oc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ka(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ga(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return ga.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=oc(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${oc(t.fields[i])}`;return n+"}"}(t.mapValue):Ko()}function ac(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cc(t){return!!t&&"integerValue"in t}function uc(t){return!!t&&"arrayValue"in t}function hc(t){return!!t&&"nullValue"in t}function lc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dc(t){return!!t&&"mapValue"in t}function fc(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return La(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=fc(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fc(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pc(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gc{constructor(t){this.value=t}static empty(){return new gc({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!dc(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=fc(e)}setAll(t){let e=pa.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=fc(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());dc(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ec(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];dc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){La(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new gc(fc(this.value))}}function mc(t){const e=[];return La(t.fields,((t,n)=>{const r=new pa([t]);if(dc(n)){const t=mc(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Ba(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yc{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new yc(t,0,ha.min(),ha.min(),ha.min(),gc.empty(),0)}static newFoundDocument(t,e,n,r){return new yc(t,1,e,ha.min(),n,r,0)}static newNoDocument(t,e){return new yc(t,2,e,ha.min(),ha.min(),gc.empty(),0)}static newUnknownDocument(t,e){return new yc(t,3,e,ha.min(),ha.min(),gc.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ha.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gc.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ha.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof yc&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e){this.position=t,this.inclusive=e}}function wc(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?ga.comparator(ga.fromName(o.referenceValue),n.key):rc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function _c(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ec(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ic(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{}class bc extends Tc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Oc(t,e,n):"array-contains"===e?new xc(t,n):"in"===e?new Uc(t,n):"not-in"===e?new Vc(t,n):"array-contains-any"===e?new Fc(t,n):new bc(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Pc(t,n):new Lc(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(rc(e,this.value)):null!==e&&tc(this.value)===tc(e)&&this.matchesComparison(rc(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ko()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Sc extends Tc{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Sc(t,e)}matches(t){return Ac(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Ac(t){return"and"===t.op}function Cc(t){return kc(t)&&Ac(t)}function kc(t){for(const e of t.filters)if(e instanceof Sc)return!1;return!0}function Nc(t){if(t instanceof bc)return t.field.canonicalString()+t.op.toString()+sc(t.value);if(Cc(t))return t.filters.map((t=>Nc(t))).join(",");{const e=t.filters.map((t=>Nc(t))).join(",");return`${t.op}(${e})`}}function Rc(t,e){return t instanceof bc?function(t,e){return e instanceof bc&&t.op===e.op&&t.field.isEqual(e.field)&&ec(t.value,e.value)}(t,e):t instanceof Sc?function(t,e){return e instanceof Sc&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Rc(n,e.filters[r])),!0)}(t,e):void Ko()}function Dc(t){return t instanceof bc?function(t){return`${t.field.canonicalString()} ${t.op} ${sc(t.value)}`}(t):t instanceof Sc?function(t){return t.op.toString()+" {"+t.getFilters().map(Dc).join(" ,")+"}"}(t):"Filter"}class Oc extends bc{constructor(t,e,n){super(t,e,n),this.key=ga.fromName(n.referenceValue)}matches(t){const e=ga.comparator(t.key,this.key);return this.matchesComparison(e)}}class Pc extends bc{constructor(t,e){super(t,"in",e),this.keys=Mc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Lc extends bc{constructor(t,e){super(t,"not-in",e),this.keys=Mc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Mc(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ga.fromName(t.referenceValue)))}class xc extends bc{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return uc(e)&&nc(e.arrayValue,this.value)}}class Uc extends bc{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&nc(this.value.arrayValue,e)}}class Vc extends bc{constructor(t,e){super(t,"not-in",e)}matches(t){if(nc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!nc(this.value.arrayValue,e)}}class Fc extends bc{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!uc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>nc(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function Bc(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jc(t,e,n,r,i,s,o)}function qc(t){const e=Go(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Nc(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ca(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>sc(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>sc(t))).join(",")),e.he=t}return e.he}function $c(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ic(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Rc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_c(t.startAt,e.startAt)&&_c(t.endAt,e.endAt)}function zc(t){return ga.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kc{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function Hc(t,e,n,r,i,s,o,a){return new Kc(t,e,n,r,i,s,o,a)}function Gc(t){return new Kc(t)}function Wc(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Qc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Yc(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Jc(t){return null!==t.collectionGroup}function Xc(t){const e=Go(t);if(null===e.Pe){e.Pe=[];const t=Yc(e),n=Qc(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new Ec(t)),e.Pe.push(new Ec(pa.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ec(pa.keyField(),t))}}}return e.Pe}function Zc(t){const e=Go(t);return e.Ie||(e.Ie=tu(e,Xc(t))),e.Ie}function tu(t,e){if("F"===t.limitType)return Bc(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Ec(t.field,e)}));const n=t.endAt?new vc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vc(t.startAt.position,t.startAt.inclusive):null;return Bc(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function eu(t,e){e.getFirstInequalityField(),Yc(t);const n=t.filters.concat([e]);return new Kc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nu(t,e,n){return new Kc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ru(t,e){return $c(Zc(t),Zc(e))&&t.limitType===e.limitType}function iu(t){return`${qc(Zc(t))}|lt:${t.limitType}`}function su(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Dc(t))).join(", ")}]`),Ca(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>sc(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>sc(t))).join(",")),`Target(${e})`}(Zc(t))}; limitType=${t.limitType})`}function ou(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ga.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Xc(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=wc(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Xc(t),e))&&!(t.endAt&&!function(t,e,n){const r=wc(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Xc(t),e))}(t,e)}function au(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cu(t){return(e,n)=>{let r=!1;for(const i of Xc(t)){const t=uu(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function uu(t,e,n){const r=t.field.isKeyField()?ga.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?rc(r,i):Ko()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ko()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){La(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Ma(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=new xa(ga.comparator);function du(){return lu}const fu=new xa(ga.comparator);function pu(...t){let e=fu;for(const n of t)e=e.insert(n.key,n);return e}function gu(t){let e=fu;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function mu(){return vu()}function yu(){return vu()}function vu(){return new hu((t=>t.toString()),((t,e)=>t.isEqual(e)))}const wu=new xa(ga.comparator),_u=new Fa(ga.comparator);function Eu(...t){let e=_u;for(const n of t)e=e.add(n);return e}const Iu=new Fa(aa);function Tu(){return Iu}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ka(e)?"-0":e}}function Su(t){return{integerValue:""+t}}function Au(t,e){return Na(e)?Su(e):bu(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this._=void 0}}function ku(t,e,n){return t instanceof Du?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Wa(e)&&(e=Qa(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ou?Pu(t,e):t instanceof Lu?Mu(t,e):function(t,e){const n=Ru(t,e),r=Uu(n)+Uu(t.Ee);return cc(n)&&cc(t.Ee)?Su(r):bu(t.serializer,r)}(t,e)}function Nu(t,e,n){return t instanceof Ou?Pu(t,e):t instanceof Lu?Mu(t,e):n}function Ru(t,e){return t instanceof xu?function(t){return cc(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Du extends Cu{}class Ou extends Cu{constructor(t){super(),this.elements=t}}function Pu(t,e){const n=Vu(e);for(const r of t.elements)n.some((t=>ec(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Lu extends Cu{constructor(t){super(),this.elements=t}}function Mu(t,e){let n=Vu(e);for(const r of t.elements)n=n.filter((t=>!ec(t,r)));return{arrayValue:{values:n}}}class xu extends Cu{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Uu(t){return Ha(t.integerValue||t.doubleValue)}function Vu(t){return uc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ou&&e instanceof Ou||t instanceof Lu&&e instanceof Lu?ca(t.elements,e.elements,ec):t instanceof xu&&e instanceof xu?ec(t.Ee,e.Ee):t instanceof Du&&e instanceof Du}(t.transform,e.transform)}class ju{constructor(t,e){this.version=t,this.transformResults=e}}class Bu{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Bu}static exists(t){return new Bu(void 0,t)}static updateTime(t){return new Bu(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qu(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class $u{}function zu(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new th(t.key,Bu.none()):new Qu(t.key,t.data,Bu.none());{const n=t.data,r=gc.empty();let i=new Fa(pa.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Yu(t.key,r,new Ba(i.toArray()),Bu.none())}}function Ku(t,e,n){t instanceof Qu?function(t,e,n){const r=t.value.clone(),i=Xu(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Yu?function(t,e,n){if(!qu(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Xu(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ju(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Hu(t,e,n,r){return t instanceof Qu?function(t,e,n,r){if(!qu(t.precondition,e))return n;const i=t.value.clone(),s=Zu(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yu?function(t,e,n,r){if(!qu(t.precondition,e))return n;const i=Zu(t.fieldTransforms,r,e),s=e.data;return s.setAll(Ju(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return qu(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Gu(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Ru(r.transform,t||null);null!=i&&(null===n&&(n=gc.empty()),n.set(r.field,i))}return n||null}function Wu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ca(t,e,((t,e)=>Fu(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qu extends $u{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Yu extends $u{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ju(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Xu(t,e,n){const r=new Map;Ho(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Nu(o,a,n[i]))}return r}function Zu(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ku(t,s,e))}return r}class th extends $u{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eh extends $u{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ku(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Hu(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Hu(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=yu();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=zu(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ha.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Eu())}isEqual(t){return this.batchId===t.batchId&&ca(this.mutations,t.mutations,((t,e)=>Wu(t,e)))&&ca(this.baseMutations,t.baseMutations,((t,e)=>Wu(t,e)))}}class rh{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Ho(t.mutations.length===n.length);let r=function(){return wu}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new rh(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sh{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oh,ah;function ch(t){switch(t){default:return Ko();case Wo.CANCELLED:case Wo.UNKNOWN:case Wo.DEADLINE_EXCEEDED:case Wo.RESOURCE_EXHAUSTED:case Wo.INTERNAL:case Wo.UNAVAILABLE:case Wo.UNAUTHENTICATED:return!1;case Wo.INVALID_ARGUMENT:case Wo.NOT_FOUND:case Wo.ALREADY_EXISTS:case Wo.PERMISSION_DENIED:case Wo.FAILED_PRECONDITION:case Wo.ABORTED:case Wo.OUT_OF_RANGE:case Wo.UNIMPLEMENTED:case Wo.DATA_LOSS:return!0}}function uh(t){if(void 0===t)return qo("GRPC error has no .code"),Wo.UNKNOWN;switch(t){case oh.OK:return Wo.OK;case oh.CANCELLED:return Wo.CANCELLED;case oh.UNKNOWN:return Wo.UNKNOWN;case oh.DEADLINE_EXCEEDED:return Wo.DEADLINE_EXCEEDED;case oh.RESOURCE_EXHAUSTED:return Wo.RESOURCE_EXHAUSTED;case oh.INTERNAL:return Wo.INTERNAL;case oh.UNAVAILABLE:return Wo.UNAVAILABLE;case oh.UNAUTHENTICATED:return Wo.UNAUTHENTICATED;case oh.INVALID_ARGUMENT:return Wo.INVALID_ARGUMENT;case oh.NOT_FOUND:return Wo.NOT_FOUND;case oh.ALREADY_EXISTS:return Wo.ALREADY_EXISTS;case oh.PERMISSION_DENIED:return Wo.PERMISSION_DENIED;case oh.FAILED_PRECONDITION:return Wo.FAILED_PRECONDITION;case oh.ABORTED:return Wo.ABORTED;case oh.OUT_OF_RANGE:return Wo.OUT_OF_RANGE;case oh.UNIMPLEMENTED:return Wo.UNIMPLEMENTED;case oh.DATA_LOSS:return Wo.DATA_LOSS;default:return Ko()}}(ah=oh||(oh={}))[ah.OK=0]="OK",ah[ah.CANCELLED=1]="CANCELLED",ah[ah.UNKNOWN=2]="UNKNOWN",ah[ah.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ah[ah.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ah[ah.NOT_FOUND=5]="NOT_FOUND",ah[ah.ALREADY_EXISTS=6]="ALREADY_EXISTS",ah[ah.PERMISSION_DENIED=7]="PERMISSION_DENIED",ah[ah.UNAUTHENTICATED=16]="UNAUTHENTICATED",ah[ah.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ah[ah.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ah[ah.ABORTED=10]="ABORTED",ah[ah.OUT_OF_RANGE=11]="OUT_OF_RANGE",ah[ah.UNIMPLEMENTED=12]="UNIMPLEMENTED",ah[ah.INTERNAL=13]="INTERNAL",ah[ah.UNAVAILABLE=14]="UNAVAILABLE",ah[ah.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let hh=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new Mo([4294967295,4294967295],0);function fh(t){const e=lh().encode(t),n=new Lo;return n.update(e),new Uint8Array(n.digest())}function ph(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mo([n,r],0),new Mo([i,s],0)]}class gh{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new mh(`Invalid padding: ${e}`);if(n<0)throw new mh(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new mh(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new mh(`Invalid padding when bitmap length is 0: ${e}`);this.Ae=8*t.length-e,this.Re=Mo.fromNumber(this.Ae)}Ve(t,e,n){let r=t.add(e.multiply(Mo.fromNumber(n)));return 1===r.compare(dh)&&(r=new Mo([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ae)return!1;const e=fh(t),[n,r]=ph(e);for(let i=0;i<this.hashCount;i++){const t=this.Ve(n,r,i);if(!this.me(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new gh(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Ae)return;const e=fh(t),[n,r]=ph(e);for(let i=0;i<this.hashCount;i++){const t=this.Ve(n,r,i);this.fe(t)}}fe(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class mh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,vh.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new yh(ha.min(),r,new xa(aa),du(),Eu())}}class vh{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new vh(n,e,Eu(),Eu(),Eu())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e,n,r){this.ge=t,this.removedTargetIds=e,this.key=n,this.pe=r}}class _h{constructor(t,e){this.targetId=t,this.ye=e}}class Eh{constructor(t,e,n=$a.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ih{constructor(){this.we=0,this.Se=Sh(),this.be=$a.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return 0!==this.we}get Fe(){return this.ve}Me(t){t.approximateByteSize()>0&&(this.ve=!0,this.be=t)}xe(){let t=Eu(),e=Eu(),n=Eu();return this.Se.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Ko()}})),new vh(this.be,this.De,t,e,n)}Oe(){this.ve=!1,this.Se=Sh()}Ne(t,e){this.ve=!0,this.Se=this.Se.insert(t,e)}Be(t){this.ve=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class Th{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=du(),this.Ue=bh(),this.We=new xa(aa)}Ge(t){for(const e of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(e,t.pe):this.je(e,t.key,t.pe);for(const e of t.removedTargetIds)this.je(e,t.key,t.pe)}He(t){this.forEachTarget(t,(e=>{const n=this.Je(e);switch(t.state){case 0:this.Ye(e)&&n.Me(t.resumeToken);break;case 1:n.ke(),n.Ce||n.Oe(),n.Me(t.resumeToken);break;case 2:n.ke(),n.Ce||this.removeTarget(e);break;case 3:this.Ye(e)&&(n.qe(),n.Me(t.resumeToken));break;case 4:this.Ye(e)&&(this.Ze(e),n.Me(t.resumeToken));break;default:Ko()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ke.forEach(((t,n)=>{this.Ye(n)&&e(n)}))}Xe(t){const e=t.targetId,n=t.ye.count,r=this.et(e);if(r){const i=r.target;if(zc(i))if(0===n){const t=new ga(i.path);this.je(e,t,yc.newNoDocument(t,ha.min()))}else Ho(1===n);else{const r=this.tt(e);if(r!==n){const n=this.nt(t),i=n?this.rt(n,t,r):1;if(0!==i){this.Ze(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(e,t)}null==hh||hh.it(function(t,e,n,r,i){var s,o,a,c,u,h;const l={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(l.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(h=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==h?h:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),l}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.ye,this.Qe.st(),n,i))}}}}nt(t){const e=t.ye.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=Ga(n).toUint8Array()}catch(t){if(t instanceof qa)return $o("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new gh(s,r,i)}catch(t){return $o(t instanceof mh?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ae?null:o}rt(t,e,n){return e.ye.count===n-this.ot(t,e.targetId)?0:2}ot(t,e){const n=this.Qe.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.je(e,n,null),r++)})),r}_t(t){const e=new Map;this.Ke.forEach(((n,r)=>{const i=this.et(r);if(i){if(n.current&&zc(i.target)){const e=new ga(i.target.path);null!==this.$e.get(e)||this.ut(r,e)||this.je(r,e,yc.newNoDocument(e,t))}n.Fe&&(e.set(r,n.xe()),n.Oe())}}));let n=Eu();this.Ue.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.et(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$e.forEach(((e,n)=>n.setReadTime(t)));const r=new yh(t,e,this.We,this.$e,n);return this.$e=du(),this.Ue=bh(),this.We=new xa(aa),r}ze(t,e){if(!this.Ye(t))return;const n=this.ut(t,e.key)?2:0;this.Je(t).Ne(e.key,n),this.$e=this.$e.insert(e.key,e),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}je(t,e,n){if(!this.Ye(t))return;const r=this.Je(t);this.ut(t,e)?r.Ne(e,1):r.Be(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),n&&(this.$e=this.$e.insert(e,n))}removeTarget(t){this.Ke.delete(t)}tt(t){const e=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let e=this.Ke.get(t);return e||(e=new Ih,this.Ke.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new Fa(aa),this.Ue=this.Ue.insert(t,e)),e}Ye(t){const e=null!==this.et(t);return e||Bo("WatchChangeAggregator","Detected inactive target",t),e}et(t){const e=this.Ke.get(t);return e&&e.Ce?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new Ih),this.Qe.getRemoteKeysForTarget(t).forEach((e=>{this.je(t,e,null)}))}ut(t,e){return this.Qe.getRemoteKeysForTarget(t).has(e)}}function bh(){return new xa(ga.comparator)}function Sh(){return new xa(ga.comparator)}const Ah=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Ch=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),kh=(()=>{const t={and:"AND",or:"OR"};return t})();class Nh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Rh(t,e){return t.useProto3Json||Ca(e)?e:{value:e}}function Dh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Oh(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ph(t,e){return Dh(t,e.toTimestamp())}function Lh(t){return Ho(!!t),ha.fromTimestamp(function(t){const e=Ka(t);return new ua(e.seconds,e.nanos)}(t))}function Mh(t,e){return function(t){return new da(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function xh(t){const e=da.fromString(t);return Ho(sl(e)),e}function Uh(t,e){return Mh(t.databaseId,e.path)}function Vh(t,e){const n=xh(e);if(n.get(1)!==t.databaseId.projectId)throw new Qo(Wo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Qo(Wo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ga(qh(n))}function Fh(t,e){return Mh(t.databaseId,e)}function jh(t){const e=xh(t);return 4===e.length?da.emptyPath():qh(e)}function Bh(t){return new da(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qh(t){return Ho(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function $h(t,e,n){return{name:Uh(t,e),fields:n.value.mapValue.fields}}function zh(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ko()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(Ho(void 0===e||"string"==typeof e),$a.fromBase64String(e||"")):(Ho(void 0===e||e instanceof Uint8Array),$a.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Wo.UNKNOWN:uh(t.code);return new Qo(e,t.message||"")}(o);n=new Eh(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vh(t,r.document.name),s=Lh(r.document.updateTime),o=r.document.createTime?Lh(r.document.createTime):ha.min(),a=new gc({mapValue:{fields:r.document.fields}}),c=yc.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new wh(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vh(t,r.document),s=r.readTime?Lh(r.readTime):ha.min(),o=yc.newNoDocument(i,s),a=r.removedTargetIds||[];n=new wh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vh(t,r.document),s=r.removedTargetIds||[];n=new wh([],s,i,null)}else{if(!("filter"in e))return Ko();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new sh(r,i),o=t.targetId;n=new _h(o,s)}}return n}function Kh(t,e){let n;if(e instanceof Qu)n={update:$h(t,e.key,e.value)};else if(e instanceof th)n={delete:Uh(t,e.key)};else if(e instanceof Yu)n={update:$h(t,e.key,e.data),updateMask:il(e.fieldMask)};else{if(!(e instanceof eh))return Ko();n={verify:Uh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Du)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ou)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Lu)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof xu)return{fieldPath:e.field.canonicalString(),increment:n.Ee};throw Ko()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ph(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ko()}(t,e.precondition)),n}function Hh(t,e){return t&&t.length>0?(Ho(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Lh(t.updateTime):Lh(e);return n.isEqual(ha.min())&&(n=Lh(e)),new ju(n,t.transformResults||[])}(t,e)))):[]}function Gh(t,e){return{documents:[Fh(t,e.path)]}}function Wh(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Fh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return rl(Sc.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:el(t.field),direction:Xh(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Rh(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Qh(t){let e=jh(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ho(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Jh(t);return e instanceof Sc&&Cc(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Ec(nl(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ca(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new vc(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new vc(n,e)}(n.endAt)),Hc(e,i,o,s,a,"F",c,u)}function Yh(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ko()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Jh(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=nl(t.unaryFilter.field);return bc.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=nl(t.unaryFilter.field);return bc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=nl(t.unaryFilter.field);return bc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=nl(t.unaryFilter.field);return bc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ko()}}(t):void 0!==t.fieldFilter?function(t){return bc.create(nl(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ko()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Sc.create(t.compositeFilter.filters.map((t=>Jh(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Ko()}}(t.compositeFilter.op))}(t):Ko()}function Xh(t){return Ah[t]}function Zh(t){return Ch[t]}function tl(t){return kh[t]}function el(t){return{fieldPath:t.canonicalString()}}function nl(t){return pa.fromServerFormat(t.fieldPath)}function rl(t){return t instanceof bc?function(t){if("=="===t.op){if(lc(t.value))return{unaryFilter:{field:el(t.field),op:"IS_NAN"}};if(hc(t.value))return{unaryFilter:{field:el(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(lc(t.value))return{unaryFilter:{field:el(t.field),op:"IS_NOT_NAN"}};if(hc(t.value))return{unaryFilter:{field:el(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:el(t.field),op:Zh(t.op),value:t.value}}}(t):t instanceof Sc?function(t){const e=t.getFilters().map((t=>rl(t)));return 1===e.length?e[0]:{compositeFilter:{op:tl(t.op),filters:e}}}(t):Ko()}function il(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function sl(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,e,n,r,i=ha.min(),s=ha.min(),o=$a.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new ol(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ol(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ol(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ol(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t){this.ht=t}}function cl(t){const e=Qh({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?nu(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){}Tt(t,e){this.Et(t,e),e.dt()}Et(t,e){if("nullValue"in t)this.At(e,5);else if("booleanValue"in t)this.At(e,10),e.Rt(t.booleanValue?1:0);else if("integerValue"in t)this.At(e,15),e.Rt(Ha(t.integerValue));else if("doubleValue"in t){const n=Ha(t.doubleValue);isNaN(n)?this.At(e,13):(this.At(e,15),ka(n)?e.Rt(0):e.Rt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.At(e,20),"string"==typeof n?e.Vt(n):(e.Vt(`${n.seconds||""}`),e.Rt(n.nanos||0))}else if("stringValue"in t)this.ft(t.stringValue,e),this.gt(e);else if("bytesValue"in t)this.At(e,30),e.yt(Ga(t.bytesValue)),this.gt(e);else if("referenceValue"in t)this.wt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.At(e,45),e.Rt(n.latitude||0),e.Rt(n.longitude||0)}else"mapValue"in t?pc(t)?this.At(e,Number.MAX_SAFE_INTEGER):(this.St(t.mapValue,e),this.gt(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.gt(e)):Ko()}ft(t,e){this.At(e,25),this.Dt(t,e)}Dt(t,e){e.Vt(t)}St(t,e){const n=t.fields||{};this.At(e,55);for(const r of Object.keys(n))this.ft(r,e),this.Et(n[r],e)}bt(t,e){const n=t.values||[];this.At(e,50);for(const r of n)this.Et(r,e)}wt(t,e){this.At(e,37),ga.fromName(t).path.forEach((t=>{this.At(e,60),this.Dt(t,e)}))}At(t,e){t.Rt(e)}gt(t){t.Rt(2)}}ul.vt=new ul;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl{constructor(){this._n=new ll}addToCollectionParentIndex(t,e){return this._n.add(e),ba.resolve()}getCollectionParents(t,e){return ba.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return ba.resolve()}deleteFieldIndex(t,e){return ba.resolve()}getDocumentsMatchingTarget(t,e){return ba.resolve(null)}getIndexType(t,e){return ba.resolve(0)}getFieldIndexes(t,e){return ba.resolve([])}getNextCollectionGroupToUpdate(t){return ba.resolve(null)}getMinOffset(t,e){return ba.resolve(wa.min())}getMinOffsetFromCollectionGroup(t,e){return ba.resolve(wa.min())}updateCollectionGroup(t,e,n){return ba.resolve()}updateIndexEntries(t,e){return ba.resolve()}}class ll{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Fa(da.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Fa(da.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class dl{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new dl(t,dl.DEFAULT_COLLECTION_PERCENTILE,dl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dl.DEFAULT_COLLECTION_PERCENTILE=10,dl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dl.DEFAULT=new dl(41943040,dl.DEFAULT_COLLECTION_PERCENTILE,dl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dl.DISABLED=new dl(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fl{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new fl(0)}static Bn(){return new fl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pl{constructor(){this.changes=new hu((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yc.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ba.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Hu(n.mutation,t,Ba.empty(),ua.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Eu()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Eu()){const r=mu();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=pu();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=mu();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Eu())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=du();const s=vu(),o=function(){return vu()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Yu)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Hu(o.mutation,e,o.mutation.getFieldMask(),ua.now())):s.set(e.key,Ba.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new gl(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=vu();let r=new xa(((t,e)=>t-e)),i=Eu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Ba.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Eu()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=yu();c.forEach((t=>{if(!i.has(t)){const r=zu(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return ba.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ga.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Jc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):ba.resolve(mu());let o=-1,a=i;return s.next((e=>ba.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?ba.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Eu()))).next((t=>({batchId:o,changes:gu(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ga(e)).next((t=>{let e=pu();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=pu();return this.indexManager.getCollectionParents(t,r).next((s=>ba.forEach(s,(s=>{const o=function(t,e){return new Kc(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,yc.newInvalidDocument(r)))}));let n=pu();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&Hu(s.mutation,i,Ba.empty(),ua.now()),ou(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return ba.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Lh(t.createTime)}}(e)),ba.resolve()}getNamedQuery(t,e){return ba.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(t){return{name:t.name,query:cl(t.bundledQuery),readTime:Lh(t.readTime)}}(e)),ba.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this.overlays=new xa(ga.comparator),this.hr=new Map}getOverlay(t,e){return ba.resolve(this.overlays.get(e))}getOverlays(t,e){const n=mu();return ba.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.It(t,e,r)})),ba.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.hr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.hr.delete(n)),ba.resolve()}getOverlaysForCollection(t,e,n){const r=mu(),i=e.length+1,s=new ga(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ba.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new xa(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=mu(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=mu(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return ba.resolve(o)}It(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ih(e,n));let i=this.hr.get(e);void 0===i&&(i=Eu(),this.hr.set(e,i)),this.hr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.Pr=new Fa(_l.Ir),this.Tr=new Fa(_l.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new _l(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ar(new _l(t,e))}Rr(t,e){t.forEach((t=>this.removeReference(t,e)))}Vr(t){const e=new ga(new da([])),n=new _l(e,t),r=new _l(e,t+1),i=[];return this.Tr.forEachInRange([n,r],(t=>{this.Ar(t),i.push(t.key)})),i}mr(){this.Pr.forEach((t=>this.Ar(t)))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new ga(new da([])),n=new _l(e,t),r=new _l(e,t+1);let i=Eu();return this.Tr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new _l(t,0),n=this.Pr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class _l{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return ga.comparator(t.key,e.key)||aa(t.pr,e.pr)}static Er(t,e){return aa(t.pr,e.pr)||ga.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Fa(_l.Ir)}checkEmpty(t){return ba.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new nh(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.wr=this.wr.add(new _l(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ba.resolve(s)}lookupMutationBatch(t,e){return ba.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.br(n),i=r<0?0:r;return ba.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ba.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(t){return ba.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new _l(e,0),r=new _l(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],(t=>{const e=this.Sr(t.pr);i.push(e)})),ba.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Fa(aa);return e.forEach((t=>{const e=new _l(t,0),r=new _l(t,Number.POSITIVE_INFINITY);this.wr.forEachInRange([e,r],(t=>{n=n.add(t.pr)}))})),ba.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;ga.isDocumentKey(i)||(i=i.child(""));const s=new _l(new ga(i),0);let o=new Fa(aa);return this.wr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.pr)),!0)}),s),ba.resolve(this.Dr(o))}Dr(t){const e=[];return t.forEach((t=>{const n=this.Sr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ho(0===this.vr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return ba.forEach(e.mutations,(r=>{const i=new _l(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.wr=n}))}Mn(t){}containsKey(t,e){const n=new _l(e,0),r=this.wr.firstAfterOrEqual(n);return ba.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ba.resolve()}vr(t,e){return this.br(t)}br(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t){this.Cr=t,this.docs=function(){return new xa(ga.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ba.resolve(n?n.document.mutableCopy():yc.newInvalidDocument(e))}getEntries(t,e){let n=du();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():yc.newInvalidDocument(t))})),ba.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=du();const s=e.path,o=new ga(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||_a(va(o),n)<=0||(r.has(o.key)||ou(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return ba.resolve(i)}getAllFromCollectionGroup(t,e,n,r){Ko()}Fr(t,e){return ba.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Tl(this)}getSize(t){return ba.resolve(this.size)}}class Tl extends pl{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.ar.addEntry(t,r)):this.ar.removeEntry(n)})),ba.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t){this.persistence=t,this.Mr=new hu((t=>qc(t)),$c),this.lastRemoteSnapshotVersion=ha.min(),this.highestTargetId=0,this.Or=0,this.Nr=new wl,this.targetCount=0,this.Br=fl.Nn()}forEachTarget(t,e){return this.Mr.forEach(((t,n)=>e(n))),ba.resolve()}getLastRemoteSnapshotVersion(t){return ba.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ba.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),ba.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),ba.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new fl(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,ba.resolve()}updateTargetData(t,e){return this.qn(e),ba.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,ba.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ba.waitFor(i).next((()=>r))}getTargetCount(t){return ba.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return ba.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),ba.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),ba.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),ba.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return ba.resolve(n)}containsKey(t,e){return ba.resolve(this.Nr.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e){this.Lr={},this.overlays={},this.kr=new Aa(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new bl(this),this.indexManager=new hl,this.remoteDocumentCache=function(t){return new Il(t)}((t=>this.referenceDelegate.Kr(t))),this.serializer=new al(e),this.$r=new yl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Lr[t.toKey()];return n||(n=new El(e,this.referenceDelegate),this.Lr[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){Bo("MemoryPersistence","Starting transaction:",t);const r=new Al(this.kr.next());return this.referenceDelegate.Ur(),n(r).next((t=>this.referenceDelegate.Wr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Gr(t,e){return ba.or(Object.values(this.Lr).map((n=>()=>n.containsKey(t,e))))}}class Al extends Ia{constructor(t){super(),this.currentSequenceNumber=t}}class Cl{constructor(t){this.persistence=t,this.zr=new wl,this.jr=null}static Hr(t){return new Cl(t)}get Jr(){if(this.jr)return this.jr;throw Ko()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),ba.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),ba.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),ba.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach((t=>this.Jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ba.forEach(this.Jr,(n=>{const r=ga.fromPath(n);return this.Yr(t,r).next((t=>{t||e.removeEntry(r,ha.min())}))})).next((()=>(this.jr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Yr(t,e).next((t=>{t?this.Jr.delete(e.toString()):this.Jr.add(e.toString())}))}Kr(t){return 0}Yr(t,e){return ba.or([()=>ba.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kl{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=r}static Ki(t,e){let n=Eu(),r=Eu();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new kl(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.$i=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Wi(t,e).next((i=>i||this.Gi(t,e,r,n))).next((n=>n||this.zi(t,e)))}Wi(t,e){if(Wc(e))return ba.resolve(null);let n=Zc(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=nu(e,null,"F"),n=Zc(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Eu(...r);return this.Ui.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.ji(e,r);return this.Hi(e,s,i,n.readTime)?this.Wi(t,nu(e,null,"F")):this.Ji(t,s,e,n)}))))})))))}Gi(t,e,n,r){return Wc(e)||r.isEqual(ha.min())?this.zi(t,e):this.Ui.getDocuments(t,n).next((i=>{const s=this.ji(e,i);return this.Hi(e,s,n,r)?this.zi(t,e):(jo()<=dt.DEBUG&&Bo("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),su(e)),this.Ji(t,s,e,ya(r,-1)))}))}ji(t,e){let n=new Fa(cu(t));return e.forEach(((e,r)=>{ou(t,r)&&(n=n.add(r))})),n}Hi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}zi(t,e){return jo()<=dt.DEBUG&&Bo("QueryEngine","Using full collection scan to execute query:",su(e)),this.Ui.getDocumentsMatchingQuery(t,e,wa.min())}Ji(t,e,n,r){return this.Ui.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e,n,r){this.persistence=t,this.Yi=e,this.serializer=r,this.Zi=new xa(aa),this.Xi=new hu((t=>qc(t)),$c),this.es=new Map,this.ts=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this.ns(n)}ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ml(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Zi)))}}function Dl(t,e,n,r){return new Rl(t,e,n,r)}async function Ol(t,e){const n=Go(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.ns(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Eu();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({rs:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Pl(t,e){const n=Go(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.ts.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=ba.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Ho(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Eu();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Ll(t){const e=Go(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}function Ml(t,e){const n=Go(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Qr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Qr.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken($a.EMPTY_BYTE_STRING,ha.min()).withLastLimboFreeSnapshotVersion(ha.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Qr.updateTargetData(t,u))}));let a=du(),c=Eu();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(xl(t,s,e.documentUpdates).next((t=>{a=t.ss,c=t.os}))),!r.isEqual(ha.min())){const e=n.Qr.getLastRemoteSnapshotVersion(t).next((e=>n.Qr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ba.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Zi=i,t)))}function xl(t,e,n){let r=Eu(),i=Eu();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=du();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ha.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Bo("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ss:r,os:i}}))}function Ul(t,e){const n=Go(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Vl(t,e){const n=Go(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Qr.getTargetData(t,e).next((i=>i?(r=i,ba.resolve(r)):n.Qr.allocateTargetId(t).next((i=>(r=new ol(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Qr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Zi.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(t.targetId,t),n.Xi.set(e,t.targetId)),t}))}async function Fl(t,e,n){const r=Go(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Sa(t))throw t;Bo("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function jl(t,e,n){const r=Go(t);let i=ha.min(),s=Eu();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Go(t),i=r.Xi.get(n);return void 0!==i?ba.resolve(r.Zi.get(i)):r.Qr.getTargetData(e,n)}(r,t,Zc(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Yi.getDocumentsMatchingQuery(t,e,n?i:ha.min(),n?s:Eu()))).next((t=>(Bl(r,au(e),t),{documents:t,_s:s})))))}function Bl(t,e,n){let r=t.es.get(e)||ha.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.es.set(e,r)}class ql{constructor(){this.activeTargetIds=Tu()}Is(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ts(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ps(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $l{constructor(){this.Ys=new ql,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Ys.Is(t),this.Zs[t]||"not-current"}updateQueryState(t,e,n){this.Zs[t]=e}removeLocalQueryTarget(t){this.Ys.Ts(t)}isLocalQueryTarget(t){return this.Ys.activeTargetIds.has(t)}clearQueryState(t){delete this.Zs[t]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(t){return this.Ys.activeTargetIds.has(t)}start(){return this.Ys=new ql,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{Xs(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){Bo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}io(){Bo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl=null;function Gl(){return null===Hl?Hl=function(){return 268435456+Math.round(2147483648*Math.random())}():Hl++,"0x"+Hl.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Wl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t){this._o=t._o,this.ao=t.ao}uo(t){this.co=t}lo(t){this.ho=t}onMessage(t){this.Po=t}close(){this.ao()}send(t){this._o(t)}Io(){this.co()}To(t){this.ho(t)}Eo(t){this.Po(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="WebChannelConnection";class Jl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ao=e+"://"+t.host,this.Ro=`projects/${n}/databases/${r}`,this.Vo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get mo(){return!1}fo(t,e,n,r,i){const s=Gl(),o=this.po(t,e);Bo("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(a,r,i),this.wo(t,o,a,n).then((e=>(Bo("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw $o("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}So(t,e,n,r,i,s){return this.fo(t,e,n,r,i)}yo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}po(t,e){const n=Wl[t];return`${this.Ao}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}wo(t,e,n,r){const i=Gl();return new Promise(((s,o)=>{const a=new Po;a.setWithCredentials(!0),a.listenOnce(No.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case ko.NO_ERROR:const e=a.getResponseJson();Bo(Yl,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case ko.TIMEOUT:Bo(Yl,`RPC '${t}' ${i} timed out`),o(new Qo(Wo.DEADLINE_EXCEEDED,"Request time out"));break;case ko.HTTP_ERROR:const n=a.getStatus();if(Bo(Yl,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Wo).indexOf(e)>=0?e:Wo.UNKNOWN}(e.status);o(new Qo(t,e.message))}else o(new Qo(Wo.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Qo(Wo.UNAVAILABLE,"Connection failed."));break;default:Ko()}}finally{Bo(Yl,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);Bo(Yl,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}bo(t,e,n){const r=Gl(),i=[this.Ao,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Ao(),o=Co(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.yo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Bo(Yl,`Creating RPC '${t}' stream ${r}: ${u}`,a);const h=s.createWebChannel(u,a);let l=!1,d=!1;const f=new Ql({_o:e=>{d?Bo(Yl,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(Bo(Yl,`Opening RPC '${t}' stream ${r} transport.`),h.open(),l=!0),Bo(Yl,`RPC '${t}' stream ${r} sending:`,e),h.send(e))},ao:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,Oo.EventType.OPEN,(()=>{d||Bo(Yl,`RPC '${t}' stream ${r} transport opened.`)})),p(h,Oo.EventType.CLOSE,(()=>{d||(d=!0,Bo(Yl,`RPC '${t}' stream ${r} transport closed`),f.To())})),p(h,Oo.EventType.ERROR,(e=>{d||(d=!0,$o(Yl,`RPC '${t}' stream ${r} transport errored:`,e),f.To(new Qo(Wo.UNAVAILABLE,"The operation could not be completed")))})),p(h,Oo.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];Ho(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Bo(Yl,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=oh[t];if(void 0!==e)return uh(e)}(e),i=o.message;void 0===n&&(n=Wo.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.To(new Qo(n,i)),h.close()}else Bo(Yl,`RPC '${t}' stream ${r} received:`,i),f.Eo(i)}})),p(o,Ro.STAT_EVENT,(e=>{e.stat===Do.PROXY?Bo(Yl,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Do.NOPROXY&&Bo(Yl,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Io()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){return new Nh(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e,n=1e3,r=1.5,i=6e4){this.oi=t,this.timerId=e,this.Do=n,this.vo=r,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(t){this.cancel();const e=Math.floor(this.Fo+this.Bo()),n=Math.max(0,Date.now()-this.xo),r=Math.max(0,e-n);r>0&&Bo("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Fo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.xo=Date.now(),t()))),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){null!==this.Mo&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){null!==this.Mo&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,e,n,r,i,s,o,a){this.oi=t,this.ko=n,this.qo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new td(t,e)}Wo(){return 1===this.state||5===this.state||this.Go()}Go(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&null===this.Ko&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,(()=>this.Jo())))}Yo(t){this.Zo(),this.stream.send(t)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(t,e){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,4!==t?this.Uo.reset():e&&e.code===Wo.RESOURCE_EXHAUSTED?(qo(e.toString()),qo("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):e&&e.code===Wo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.e_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.lo(e)}e_(){}auth(){this.state=1;const t=this.t_(this.Qo),e=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Qo===e&&this.n_(t,n)}),(e=>{t((()=>{const t=new Qo(Wo.UNKNOWN,"Fetching auth token failed: "+e.message);return this.r_(t)}))}))}n_(t,e){const n=this.t_(this.Qo);this.stream=this.i_(t,e),this.stream.uo((()=>{n((()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,(()=>(this.Go()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.lo((t=>{n((()=>this.r_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}zo(){this.state=5,this.Uo.No((async()=>{this.state=0,this.start()}))}r_(t){return Bo("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}t_(t){return e=>{this.oi.enqueueAndForget((()=>this.Qo===t?e():(Bo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nd extends ed{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}i_(t,e){return this.connection.bo("Listen",t,e)}onMessage(t){this.Uo.reset();const e=zh(this.serializer,t),n=function(t){if(!("targetChange"in t))return ha.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ha.min():e.readTime?Lh(e.readTime):ha.min()}(t);return this.listener.s_(e,n)}o_(t){const e={};e.database=Bh(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=zc(r)?{documents:Gh(t,r)}:{query:Wh(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Oh(t,e.resumeToken);const r=Rh(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(ha.min())>0){n.readTime=Dh(t,e.snapshotVersion.toTimestamp());const r=Rh(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Yh(this.serializer,t);n&&(e.labels=n),this.Yo(e)}__(t){const e={};e.database=Bh(this.serializer),e.removeTarget=t,this.Yo(e)}}class rd extends ed{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(t,e){return this.connection.bo("Write",t,e)}onMessage(t){if(Ho(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_){this.Uo.reset();const e=Hh(t.writeResults,t.commitTime),n=Lh(t.commitTime);return this.listener.l_(n,e)}return Ho(!t.writeResults||0===t.writeResults.length),this.a_=!0,this.listener.h_()}P_(){const t={};t.database=Bh(this.serializer),this.Yo(t)}c_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Kh(this.serializer,t)))};this.Yo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.I_=!1}T_(){if(this.I_)throw new Qo(Wo.FAILED_PRECONDITION,"The client has already been terminated.")}fo(t,e,n){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.fo(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Wo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qo(Wo.UNKNOWN,t.toString())}))}So(t,e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Wo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qo(Wo.UNKNOWN,t.toString())}))}terminate(){this.I_=!0}}class sd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){0===this.d_&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve()))))}g_(t){"Online"===this.state?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.m_("Offline")))}set(t){this.p_(),this.d_=0,"Online"===t&&(this.R_=!1),this.m_(t)}m_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}f_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(qo(e),this.R_=!1):Bo("OnlineStateTracker",e)}p_(){null!==this.A_&&(this.A_.cancel(),this.A_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs((t=>{n.enqueueAndForget((async()=>{gd(this)&&(Bo("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Go(t);e.S_.add(4),await cd(e),e.v_.set("Unknown"),e.S_.delete(4),await ad(e)}(this))}))})),this.v_=new sd(n,r)}}async function ad(t){if(gd(t))for(const e of t.b_)await e(!0)}async function cd(t){for(const e of t.b_)await e(!1)}function ud(t,e){const n=Go(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),pd(n)?fd(n):Pd(n).Go()&&ld(n,e))}function hd(t,e){const n=Go(t),r=Pd(n);n.w_.delete(e),r.Go()&&dd(n,e),0===n.w_.size&&(r.Go()?r.Ho():gd(n)&&n.v_.set("Unknown"))}function ld(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ha.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Pd(t).o_(e)}function dd(t,e){t.C_.Le(e),Pd(t).__(e)}function fd(t){t.C_=new Th({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Pd(t).start(),t.v_.V_()}function pd(t){return gd(t)&&!Pd(t).Wo()&&t.w_.size>0}function gd(t){return 0===Go(t).S_.size}function md(t){t.C_=void 0}async function yd(t){t.w_.forEach(((e,n)=>{ld(t,e)}))}async function vd(t,e){md(t),pd(t)?(t.v_.g_(e),fd(t)):t.v_.set("Unknown")}async function wd(t,e,n){if(t.v_.set("Online"),e instanceof Eh&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.w_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.w_.delete(r),t.C_.removeTarget(r))}(t,e)}catch(n){Bo("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await _d(t,n)}else if(e instanceof wh?t.C_.Ge(e):e instanceof _h?t.C_.Xe(e):t.C_.He(e),!n.isEqual(ha.min()))try{const e=await Ll(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.C_._t(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.w_.get(r);i&&t.w_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.w_.get(e);if(!r)return;t.w_.set(e,r.withResumeToken($a.EMPTY_BYTE_STRING,r.snapshotVersion)),dd(t,e);const i=new ol(r.target,e,n,r.sequenceNumber);ld(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Bo("RemoteStore","Failed to raise snapshot:",e),await _d(t,e)}}async function _d(t,e,n){if(!Sa(e))throw e;t.S_.add(1),await cd(t),t.v_.set("Offline"),n||(n=()=>Ll(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Bo("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await ad(t)}))}function Ed(t,e){return e().catch((n=>_d(t,n,e)))}async function Id(t){const e=Go(t),n=Ld(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;Td(e);)try{const t=await Ul(e.localStore,r);if(null===t){0===e.y_.length&&n.Ho();break}r=t.batchId,bd(e,t)}catch(t){await _d(e,t)}Sd(e)&&Ad(e)}function Td(t){return gd(t)&&t.y_.length<10}function bd(t,e){t.y_.push(e);const n=Ld(t);n.Go()&&n.u_&&n.c_(e.mutations)}function Sd(t){return gd(t)&&!Ld(t).Wo()&&t.y_.length>0}function Ad(t){Ld(t).start()}async function Cd(t){Ld(t).P_()}async function kd(t){const e=Ld(t);for(const n of t.y_)e.c_(n.mutations)}async function Nd(t,e,n){const r=t.y_.shift(),i=rh.from(r,e,n);await Ed(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Id(t)}async function Rd(t,e){e&&Ld(t).u_&&await async function(t,e){if(function(t){return ch(t)&&t!==Wo.ABORTED}(e.code)){const n=t.y_.shift();Ld(t).jo(),await Ed(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Id(t)}}(t,e),Sd(t)&&Ad(t)}async function Dd(t,e){const n=Go(t);n.asyncQueue.verifyOperationInProgress(),Bo("RemoteStore","RemoteStore received new credentials");const r=gd(n);n.S_.add(3),await cd(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await ad(n)}async function Od(t,e){const n=Go(t);e?(n.S_.delete(2),await ad(n)):e||(n.S_.add(2),await cd(n),n.v_.set("Unknown"))}function Pd(t){return t.F_||(t.F_=function(t,e,n){const r=Go(t);return r.T_(),new nd(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{uo:yd.bind(null,t),lo:vd.bind(null,t),s_:wd.bind(null,t)}),t.b_.push((async e=>{e?(t.F_.jo(),pd(t)?fd(t):t.v_.set("Unknown")):(await t.F_.stop(),md(t))}))),t.F_}function Ld(t){return t.M_||(t.M_=function(t,e,n){const r=Go(t);return r.T_(),new rd(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{uo:Cd.bind(null,t),lo:Rd.bind(null,t),h_:kd.bind(null,t),l_:Nd.bind(null,t)}),t.b_.push((async e=>{e?(t.M_.jo(),await Id(t)):(await t.M_.stop(),t.y_.length>0&&(Bo("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))}))),t.M_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Md{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Yo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Md(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Qo(Wo.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xd(t,e){if(qo("AsyncQueue",`${e}: ${t}`),Sa(t))return new Qo(Wo.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ga.comparator(e.key,n.key):(t,e)=>ga.comparator(t.key,e.key),this.keyedMap=pu(),this.sortedSet=new xa(this.comparator)}static emptySet(t){return new Ud(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ud))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ud;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.x_=new xa(ga.comparator)}track(t){const e=t.doc.key,n=this.x_.get(e);n?0!==t.type&&3===n.type?this.x_=this.x_.insert(e,t):3===t.type&&1!==n.type?this.x_=this.x_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.x_=this.x_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.x_=this.x_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.x_=this.x_.remove(e):1===t.type&&2===n.type?this.x_=this.x_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.x_=this.x_.insert(e,{type:2,doc:t.doc}):Ko():this.x_=this.x_.insert(e,t)}O_(){const t=[];return this.x_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Fd{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Fd(t,e,Ud.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ru(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.N_=void 0,this.listeners=[]}}class Bd{constructor(){this.queries=new hu((t=>iu(t)),ru),this.onlineState="Unknown",this.B_=new Set}}async function qd(t,e){const n=Go(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jd),i)try{s.N_=await n.onListen(r)}catch(t){const n=xd(t,`Initialization of query '${su(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&Hd(n)}async function $d(t,e){const n=Go(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zd(t,e){const n=Go(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.k_(i)&&(r=!0);e.N_=i}}r&&Hd(n)}function Kd(t,e,n){const r=Go(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Hd(t){t.B_.forEach((t=>{t.next()}))}class Gd{constructor(t,e,n){this.query=t,this.q_=e,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=n||{}}k_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Fd(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Q_?this.U_(t)&&(this.q_.next(t),e=!0):this.W_(t,this.onlineState)&&(this.G_(t),e=!0),this.K_=t,e}onError(t){this.q_.error(t)}L_(t){this.onlineState=t;let e=!1;return this.K_&&!this.Q_&&this.W_(this.K_,t)&&(this.G_(this.K_),e=!0),e}W_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.z_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}U_(t){if(t.docChanges.length>0)return!0;const e=this.K_&&this.K_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}G_(t){t=Fd.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Q_=!0,this.q_.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wd{constructor(t){this.key=t}}class Qd{constructor(t){this.key=t}}class Yd{constructor(t,e){this.query=t,this.ta=e,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=Eu(),this.mutatedKeys=Eu(),this.ia=cu(t),this.sa=new Ud(this.ia)}get oa(){return this.ta}_a(t,e){const n=e?e.aa:new Vd,r=e?e.sa:this.sa;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),h=ou(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.ua(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.ia(h,a)>0||c&&this.ia(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{sa:s,aa:n,Hi:o,mutatedKeys:i}}ua(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.sa;this.sa=t.sa,this.mutatedKeys=t.mutatedKeys;const i=t.aa.O_();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ko()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.ia(t.doc,e.doc))),this.ca(n);const s=e?this.la():[],o=0===this.ra.size&&this.current?1:0,a=o!==this.na;return this.na=o,0!==i.length||a?{snapshot:new Fd(this.query,t.sa,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),ha:s}:{ha:s}}L_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Vd,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(t){return!this.ta.has(t)&&!!this.sa.has(t)&&!this.sa.get(t).hasLocalMutations}ca(t){t&&(t.addedDocuments.forEach((t=>this.ta=this.ta.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.ta=this.ta.delete(t))),this.current=t.current)}la(){if(!this.current)return[];const t=this.ra;this.ra=Eu(),this.sa.forEach((t=>{this.Pa(t.key)&&(this.ra=this.ra.add(t.key))}));const e=[];return t.forEach((t=>{this.ra.has(t)||e.push(new Qd(t))})),this.ra.forEach((n=>{t.has(n)||e.push(new Wd(n))})),e}Ia(t){this.ta=t._s,this.ra=Eu();const e=this._a(t.documents);return this.applyChanges(e,!0)}Ta(){return Fd.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,0===this.na,this.hasCachedResults)}}class Jd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Xd{constructor(t){this.key=t,this.Ea=!1}}class Zd{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.da={},this.Aa=new hu((t=>iu(t)),ru),this.Ra=new Map,this.Va=new Set,this.ma=new xa(ga.comparator),this.fa=new Map,this.ga=new wl,this.pa={},this.ya=new Map,this.wa=fl.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return!0===this.Sa}}async function tf(t,e){const n=_f(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const t=await Vl(n.localStore,Zc(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await ef(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&ud(n.remoteStore,t)}return i}async function ef(t,e,n,r,i){t.ba=(e,n,r)=>async function(t,e,n,r){let i=e.view._a(n);i.Hi&&(i=await jl(t.localStore,e.query,!1).then((({documents:t})=>e.view._a(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return pf(t,e.targetId,o.ha),o.snapshot}(t,e,n,r);const s=await jl(t.localStore,e,!0),o=new Yd(e,s._s),a=o._a(s.documents),c=vh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);pf(t,n,u.ha);const h=new Jd(e,n,o);return t.Aa.set(e,h),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),u.snapshot}async function nf(t,e){const n=Go(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter((t=>!ru(t,e)))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),hd(n.remoteStore,r.targetId),df(n,r.targetId)})).catch(Ta)):(df(n,r.targetId),await Fl(n.localStore,r.targetId,!0))}async function rf(t,e,n){const r=Ef(t);try{const t=await function(t,e){const n=Go(t),r=ua.now(),i=e.reduce(((t,e)=>t.add(e.key)),Eu());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=du(),c=Eu();return n.ts.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Gu(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Yu(t.key,e,mc(e.value.mapValue),Bu.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:gu(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.pa[t.currentUser.toKey()];r||(r=new xa(aa)),r=r.insert(e,n),t.pa[t.currentUser.toKey()]=r}(r,t.batchId,n),await yf(r,t.changes),await Id(r.remoteStore)}catch(t){const e=xd(t,"Failed to persist write");n.reject(e)}}async function sf(t,e){const n=Go(t);try{const t=await Ml(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.fa.get(e);r&&(Ho(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ea=!0:t.modifiedDocuments.size>0?Ho(r.Ea):t.removedDocuments.size>0&&(Ho(r.Ea),r.Ea=!1))})),await yf(n,t,e)}catch(t){await Ta(t)}}function of(t,e,n){const r=Go(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Aa.forEach(((n,r)=>{const i=r.view.L_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Go(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.L_(e)&&(r=!0)})),r&&Hd(n)}(r.eventManager,e),t.length&&r.da.s_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function af(t,e,n){const r=Go(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let t=new xa(ga.comparator);t=t.insert(s,yc.newNoDocument(s,ha.min()));const n=Eu().add(s),i=new yh(ha.min(),new Map,new xa(aa),t,n);await sf(r,i),r.ma=r.ma.remove(s),r.fa.delete(e),mf(r)}else await Fl(r.localStore,e,!1).then((()=>df(r,e,n))).catch(Ta)}async function cf(t,e){const n=Go(t),r=e.batch.batchId;try{const t=await Pl(n.localStore,e);lf(n,r,null),hf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yf(n,t)}catch(t){await Ta(t)}}async function uf(t,e,n){const r=Go(t);try{const t=await function(t,e){const n=Go(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ho(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);lf(r,e,n),hf(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yf(r,t)}catch(n){await Ta(n)}}function hf(t,e){(t.ya.get(e)||[]).forEach((t=>{t.resolve()})),t.ya.delete(e)}function lf(t,e,n){const r=Go(t);let i=r.pa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.pa[r.currentUser.toKey()]=i}}function df(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach((e=>{t.ga.containsKey(e)||ff(t,e)}))}function ff(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);null!==n&&(hd(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),mf(t))}function pf(t,e,n){for(const r of n)r instanceof Wd?(t.ga.addReference(r.key,e),gf(t,r)):r instanceof Qd?(Bo("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||ff(t,r.key)):Ko()}function gf(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(Bo("SyncEngine","New document in limbo: "+n),t.Va.add(r),mf(t))}function mf(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new ga(da.fromString(e)),r=t.wa.next();t.fa.set(r,new Xd(n)),t.ma=t.ma.insert(n,r),ud(t.remoteStore,new ol(Zc(Gc(n.path)),r,"TargetPurposeLimboResolution",Aa.ae))}}async function yf(t,e,n){const r=Go(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach(((t,a)=>{o.push(r.ba(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=kl.Ki(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.da.s_(i),await async function(t,e){const n=Go(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ba.forEach(e,(e=>ba.forEach(e.qi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ba.forEach(e.Qi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Sa(t))throw t;Bo("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Zi.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Zi=n.Zi.insert(t,i)}}}(r.localStore,s))}async function vf(t,e){const n=Go(t);if(!n.currentUser.isEqual(e)){Bo("SyncEngine","User change. New user:",e.toKey());const t=await Ol(n.localStore,e);n.currentUser=e,function(t,e){t.ya.forEach((t=>{t.forEach((t=>{t.reject(new Qo(Wo.CANCELLED,e))}))})),t.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await yf(n,t.rs)}}function wf(t,e){const n=Go(t),r=n.fa.get(e);if(r&&r.Ea)return Eu().add(r.key);{let t=Eu();const r=n.Ra.get(e);if(!r)return t;for(const e of r){const r=n.Aa.get(e);t=t.unionWith(r.view.oa)}return t}}function _f(t){const e=Go(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=af.bind(null,e),e.da.s_=zd.bind(null,e.eventManager),e.da.Da=Kd.bind(null,e.eventManager),e}function Ef(t){const e=Go(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cf.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uf.bind(null,e),e}class If{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Zl(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Dl(this.persistence,new Nl,t.initialUser,this.serializer)}createPersistence(t){return new Sl(Cl.Hr,this.serializer)}createSharedClientState(t){return new $l}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>of(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=vf.bind(null,this.syncEngine),await Od(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Bd}()}createDatastore(t){const e=Zl(t.databaseInfo.databaseId),n=function(t){return new Jl(t)}(t.databaseInfo);return function(t,e,n,r){return new id(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new od(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>of(this.syncEngine,t,0)),function(){return Kl.v()?new Kl:new zl}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Zd(t,e,n,r,i,s);return o&&(a.Sa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Go(t);Bo("RemoteStore","RemoteStore shutting down."),e.S_.add(5),await cd(e),e.D_.shutdown(),e.v_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Fa(this.observer.next,t)}error(t){this.observer.error?this.Fa(this.observer.error,t):qo("Uncaught Error in snapshot listener:",t.toString())}Ma(){this.muted=!0}Fa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sf{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Uo.UNAUTHENTICATED,this.clientId=oa.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Bo("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Bo("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Qo(Wo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=xd(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Af(t,e){t.asyncQueue.verifyOperationInProgress(),Bo("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Ol(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Cf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Nf(t);Bo("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Dd(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Dd(e.remoteStore,n))),t._onlineComponents=e}function kf(t){return"FirebaseError"===t.name?t.code===Wo.FAILED_PRECONDITION||t.code===Wo.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Nf(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Bo("FirestoreClient","Using user provided OfflineComponentProvider");try{await Af(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!kf(n))throw n;$o("Error using user provided cache. Falling back to memory cache: "+n),await Af(t,new If)}}else Bo("FirestoreClient","Using default OfflineComponentProvider"),await Af(t,new If);return t._offlineComponents}async function Rf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Bo("FirestoreClient","Using user provided OnlineComponentProvider"),await Cf(t,t._uninitializedComponentsProvider._online)):(Bo("FirestoreClient","Using default OnlineComponentProvider"),await Cf(t,new Tf))),t._onlineComponents}function Df(t){return Rf(t).then((t=>t.syncEngine))}async function Of(t){const e=await Rf(t),n=e.eventManager;return n.onListen=tf.bind(null,e.syncEngine),n.onUnlisten=nf.bind(null,e.syncEngine),n}function Pf(t,e,n={}){const r=new Yo;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new bf({next:n=>{e.enqueueAndForget((()=>$d(t,o))),n.fromCache&&"server"===r.source?i.reject(new Qo(Wo.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Gd(n,s,{includeMetadataChanges:!0,z_:!0});return qd(t,o)}(await Of(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lf(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Mf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t,e,n){if(!n)throw new Qo(Wo.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Uf(t,e,n,r){if(!0===e&&!0===r)throw new Qo(Wo.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!ga.isDocumentKey(t))throw new Qo(Wo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ff(t){if(ga.isDocumentKey(t))throw new Qo(Wo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ko()}function Bf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Qo(Wo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jf(t);throw new Qo(Wo.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function qf(t,e){if(e<=0)throw new Qo(Wo.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Qo(Wo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Qo(Wo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Uf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lf(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Qo(Wo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Qo(Wo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Qo(Wo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class zf{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $f({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Qo(Wo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Qo(Wo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $f(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Xo;switch(t.type){case"firstParty":return new na(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Qo(Wo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Mf.get(t);e&&(Bo("ComponentProvider","Removing Datastore"),Mf.delete(t),e.terminate())}(this),Promise.resolve()}}function Kf(t,e,n,r={}){var i;const s=(t=Bf(t,zf))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&$o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Uo.MOCK_USER;else{e=M(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Qo(Wo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Uo(s)}t._authCredentials=new Zo(new Jo(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Hf(this.firestore,t,this._query)}}class Gf{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Gf(this.firestore,t,this._key)}}class Wf extends Hf{constructor(t,e,n){super(t,e,Gc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Gf(this.firestore,null,new ga(t))}withConverter(t){return new Wf(this.firestore,t,this._path)}}function Qf(t,e,...n){if(t=it(t),xf("collection","path",e),t instanceof zf){const r=da.fromString(e,...n);return Ff(r),new Wf(t,null,r)}{if(!(t instanceof Gf||t instanceof Wf))throw new Qo(Wo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(da.fromString(e,...n));return Ff(r),new Wf(t.firestore,null,r)}}function Yf(t,e,...n){if(t=it(t),1===arguments.length&&(e=oa.V()),xf("doc","path",e),t instanceof zf){const r=da.fromString(e,...n);return Vf(r),new Gf(t,null,new ga(r))}{if(!(t instanceof Gf||t instanceof Wf))throw new Qo(Wo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(da.fromString(e,...n));return Vf(r),new Gf(t.firestore,t instanceof Wf?t.converter:null,new ga(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jf{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new td(this,"async_queue_retry"),this.tu=()=>{const t=Xl();t&&Bo("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Uo.Lo()};const t=Xl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nu(),this.ru(t)}enterRestrictedMode(t){if(!this.Ha){this.Ha=!0,this.Xa=t||!1;const e=Xl();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.tu)}}enqueue(t){if(this.nu(),this.Ha)return new Promise((()=>{}));const e=new Yo;return this.ru((()=>this.Ha&&this.Xa?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.ja.push(t),this.iu())))}async iu(){if(0!==this.ja.length){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(t){if(!Sa(t))throw t;Bo("AsyncQueue","Operation failed with retryable error: "+t)}this.ja.length>0&&this.Uo.No((()=>this.iu()))}}ru(t){const e=this.za.then((()=>(this.Za=!0,t().catch((t=>{this.Ya=t,this.Za=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw qo("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Za=!1,t))))));return this.za=e,e}enqueueAfterDelay(t,e,n){this.nu(),this.eu.indexOf(t)>-1&&(e=0);const r=Md.createAndSchedule(this,t,e,n,(t=>this.su(t)));return this.Ja.push(r),r}nu(){this.Ya&&Ko()}verifyOperationInProgress(){}async ou(){let t;do{t=this.za,await t}while(t!==this.za)}_u(t){for(const e of this.Ja)if(e.timerId===t)return!0;return!1}au(t){return this.ou().then((()=>{this.Ja.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Ja)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ou()}))}uu(t){this.eu.push(t)}su(t){const e=this.Ja.indexOf(t);this.Ja.splice(e,1)}}class Xf extends zf{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new Jf}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ep(this),this._firestoreClient.terminate()}}function Zf(t,e){const n="object"==typeof t?t:Ne(),r="string"==typeof t?t:e||"(default)",i=Te(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=D("firestore");t&&Kf(i,...t)}return i}function tp(t){return t._firestoreClient||ep(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ep(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new Ja(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Lf(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Sf(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class np{constructor(t){this._byteString=t}static fromBase64String(t){try{return new np($a.fromBase64String(t))}catch(t){throw new Qo(Wo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new np($a.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Qo(Wo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pa(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ip{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Qo(Wo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Qo(Wo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return aa(this._lat,t._lat)||aa(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=/^__.*__$/;class ap{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Yu(t,this.data,this.fieldMask,e,this.fieldTransforms):new Qu(t,this.data,e,this.fieldTransforms)}}function cp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ko()}}class up{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(t){return new up(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.hu({path:n,Iu:!1});return r.Tu(t),r}Eu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.hu({path:n,Iu:!1});return r.cu(),r}du(t){return this.hu({path:void 0,Iu:!0})}Au(t){return Ep(t,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}cu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Tu(this.path.get(t))}Tu(t){if(0===t.length)throw this.Au("Document fields must not be empty");if(cp(this.lu)&&op.test(t))throw this.Au('Document fields cannot begin and end with "__"')}}class hp{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Zl(t)}mu(t,e,n,r=!1){return new up({lu:t,methodName:e,Vu:n,path:pa.emptyPath(),Iu:!1,Ru:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lp(t){const e=t._freezeSettings(),n=Zl(t._databaseId);return new hp(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dp(t,e,n,r,i,s={}){const o=t.mu(s.merge||s.mergeFields?2:0,e,n,i);yp("Data must be an object, but it was:",o,r);const a=gp(r,o);let c,u;if(s.merge)c=new Ba(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=vp(e,r,n);if(!o.contains(i))throw new Qo(Wo.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ip(t,i)||t.push(i)}c=new Ba(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new ap(new gc(a),c,u)}function fp(t,e,n,r=!1){return pp(n,t.mu(r?4:3,e))}function pp(t,e){if(mp(t=it(t)))return yp("Unsupported field value:",e,t),gp(t,e);if(t instanceof ip)return function(t,e){if(!cp(e.lu))throw e.Au(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Au(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&4!==e.lu)throw e.Au("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=pp(i,e.du(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=it(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Au(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ua.fromDate(t);return{timestampValue:Dh(e.serializer,n)}}if(t instanceof ua){const n=new ua(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Dh(e.serializer,n)}}if(t instanceof sp)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof np)return{bytesValue:Oh(e.serializer,t._byteString)};if(t instanceof Gf){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Au(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Mh(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Au(`Unsupported field value: ${jf(t)}`)}(t,e)}function gp(t,e){const n={};return Ma(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):La(t,((t,r)=>{const i=pp(r,e.Pu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function mp(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ua||t instanceof sp||t instanceof np||t instanceof Gf||t instanceof ip)}function yp(t,e,n){if(!mp(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=jf(n);throw"an object"===r?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function vp(t,e,n){if((e=it(e))instanceof rp)return e._internalPath;if("string"==typeof e)return _p(t,e);throw Ep("Field path arguments must be of type string or ",t,!1,void 0,n)}const wp=new RegExp("[~\\*/\\[\\]]");function _p(t,e,n){if(e.search(wp)>=0)throw Ep(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rp(...e.split("."))._internalPath}catch(hn){throw Ep(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ep(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Qo(Wo.INVALID_ARGUMENT,a+t+c)}function Ip(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Gf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new bp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Sp("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class bp extends Tp{data(){return super.data()}}function Sp(t,e){return"string"==typeof e?_p(t,e):e instanceof rp?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Qo(Wo.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cp{}class kp extends Cp{}function Np(t,e,...n){let r=[];e instanceof Cp&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof Dp)).length,n=t.filter((t=>t instanceof Rp)).length;if(e>1||e>0&&n>0)throw new Qo(Wo.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)t=i._apply(t);return t}class Rp extends kp{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Rp(t,e,n)}_apply(t){const e=this._parse(t);return Vp(t._query,e),new Hf(t.firestore,t.converter,eu(t._query,e))}_parse(t){const e=lp(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Qo(Wo.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Up(o,s);const e=[];for(const n of o)e.push(xp(r,t,n));a={arrayValue:{values:e}}}else a=xp(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Up(o,s),a=fp(n,e,o,"in"===s||"not-in"===s);return bc.create(i,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class Dp extends Cp{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Dp(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Sc.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)Vp(n,i),n=eu(n,i)}(t._query,e),new Hf(t.firestore,t.converter,eu(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Op extends kp{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Op(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Qo(Wo.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Qo(Wo.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Ec(e,n);return function(t,e){if(null===Qc(t)){const n=Yc(t);null!==n&&Fp(t,n,e.field)}}(t,r),r}(t._query,this._field,this._direction);return new Hf(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Kc(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Pp(t,e="asc"){const n=e,r=Sp("orderBy",t);return Op._create(r,n)}class Lp extends kp{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Lp(t,e,n)}_apply(t){return new Hf(t.firestore,t.converter,nu(t._query,this._limit,this._limitType))}}function Mp(t){return qf("limit",t),Lp._create("limit",t,"F")}function xp(t,e,n){if("string"==typeof(n=it(n))){if(""===n)throw new Qo(Wo.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jc(e)&&-1!==n.indexOf("/"))throw new Qo(Wo.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(da.fromString(n));if(!ga.isDocumentKey(r))throw new Qo(Wo.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ac(t,new ga(r))}if(n instanceof Gf)return ac(t,n._key);throw new Qo(Wo.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jf(n)}.`)}function Up(t,e){if(!Array.isArray(t)||0===t.length)throw new Qo(Wo.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Vp(t,e){if(e.isInequality()){const n=Yc(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new Qo(Wo.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Qc(t);null!==i&&Fp(t,r,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Qo(Wo.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Qo(Wo.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Fp(t,e,n){if(!n.isEqual(e))throw new Qo(Wo.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class jp{convertValue(t,e="none"){switch(tc(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ha(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ga(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ko()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return La(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new sp(Ha(t.latitude),Ha(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Qa(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ya(t));default:return null}}convertTimestamp(t){const e=Ka(t);return new ua(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=da.fromString(t);Ho(sl(n));const r=new Xa(n.get(1),n.get(3)),i=new ga(n.popFirst(5));return r.isEqual(e)||qo(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qp{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $p extends Tp{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new zp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Sp("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class zp extends $p{data(t={}){return super.data(t)}}class Kp{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new qp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new zp(this._firestore,this._userDataWriter,n.key,n,new qp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Qo(Wo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new zp(t._firestore,t._userDataWriter,n.doc.key,n.doc,new qp(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new zp(t._firestore,t._userDataWriter,e.doc.key,e.doc,new qp(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Hp(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Hp(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ko()}}class Gp extends jp{constructor(t){super(),this.firestore=t}convertBytes(t){return new np(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Gf(this.firestore,null,e)}}function Wp(t){t=Bf(t,Hf);const e=Bf(t.firestore,Xf),n=tp(e),r=new Gp(e);return Ap(t._query),Pf(n,t._query).then((n=>new Kp(e,r,t,n)))}function Qp(t,e){const n=Bf(t.firestore,Xf),r=Yf(t),i=Bp(t.converter,e);return Yp(n,[dp(lp(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Bu.exists(!1))]).then((()=>r))}function Yp(t,e){return function(t,e){const n=new Yo;return t.asyncQueue.enqueueAndForget((async()=>rf(await Df(t),e,n))),n.promise}(tp(t),e)}!function(t,e=!0){!function(t){Vo=t}(Ce),Ie(new st("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Xf(new ta(t.getProvider("auth-internal")),new ia(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Qo(Wo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xa(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Re(xo,"4.1.2",t),Re(xo,"4.1.2","esm2017")}();n(6229),n(7330),n(2062);function Jp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;function Xp(t){return void 0!==t&&void 0!==t.enterprise}class Zp{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eg=tg,ng=new K("auth","Firebase",tg()),rg=new yt("@firebase/auth");function ig(t,...e){rg.logLevel<=dt.WARN&&rg.warn(`Auth (${Ce}): ${t}`,...e)}function sg(t,...e){rg.logLevel<=dt.ERROR&&rg.error(`Auth (${Ce}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t,...e){throw hg(t,...e)}function ag(t,...e){return hg(t,...e)}function cg(t,e,n){const r=Object.assign(Object.assign({},eg()),{[e]:n}),i=new K("auth","Firebase",r);return i.create(e,{appName:t.name})}function ug(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&og(t,"argument-error"),cg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hg(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ng.create(t,...e)}function lg(t,e,...n){if(!t)throw hg(e,...n)}function dg(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sg(e),new Error(e)}function fg(t,e){t||dg(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function gg(){return"http:"===mg()||"https:"===mg()}function mg(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(gg()||V()||"connection"in navigator))||navigator.onLine}function vg(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t,e){this.shortDelay=t,this.longDelay=e,fg(e>t,"Short delay should be less than long delay!"),this.isMobile=U()||F()}get(){return yg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e){fg(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void dg("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void dg("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void dg("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},Tg=new wg(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sg(t,e,n,r,i={}){return Ag(t,i,(async()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=J(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Eg.fetch()(kg(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ag(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ig),e);try{const e=new Ng(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Rg(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Rg(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Rg(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw Rg(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw cg(t,a,o);og(t,a)}}catch(i){if(i instanceof z)throw i;og(t,"network-request-failed",{message:String(i)})}}async function Cg(t,e,n,r,i={}){const s=await Sg(t,e,n,r,i);return"mfaPendingCredential"in s&&og(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?_g(t.config,i):`${t.config.apiScheme}://${i}`}class Ng{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(ag(this.auth,"network-request-failed"))),Tg.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rg(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ag(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg(t,e){return Sg(t,"GET","/v2/recaptchaConfig",bg(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t,e){return Sg(t,"POST","/v1/accounts:delete",e)}async function Pg(t,e){return Sg(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(t,e=!1){const n=it(t),r=await n.getIdToken(e),i=Ug(r);lg(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:r,authTime:Lg(xg(i.auth_time)),issuedAtTime:Lg(xg(i.iat)),expirationTime:Lg(xg(i.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function xg(t){return 1e3*Number(t)}function Ug(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return sg("JWT malformed, contained fewer than 3 sections"),null;try{const t=b(n);return t?JSON.parse(t):(sg("Failed to decode base64 JWT payload"),null)}catch(i){return sg("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function Vg(t){const e=Ug(t);return lg(e,"internal-error"),lg("undefined"!==typeof e.exp,"internal-error"),lg("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof z&&jg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jg({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lg(this.lastLoginAt),this.creationTime=Lg(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fg(t,Pg(n,{idToken:r}));lg(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?Hg(s.providerUserInfo):[],a=Kg(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),h=!!c&&u,l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qg(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,l)}async function zg(t){const e=it(t);await $g(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kg(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function Hg(t){return t.map((t=>{var{providerId:e}=t,n=Jp(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gg(t,e){const n=await Ag(t,{},(async()=>{const n=J({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=kg(t,r,"/v1/token",`key=${i}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Eg.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){lg(t.idToken,"internal-error"),lg("undefined"!==typeof t.idToken,"internal-error"),lg("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Vg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return lg(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await Gg(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new Wg;return n&&(lg("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(lg("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(lg("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Wg,this.toJSON())}_performRefresh(){return dg("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e){lg("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class Yg{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Jp(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Fg(this,this.stsTokenManager.getToken(this.auth,t));return lg(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Mg(this,t)}reload(){return zg(this)}_assign(t){this!==t&&(lg(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Yg(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){lg(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await $g(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Fg(this,Og(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,l=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:I}=e;lg(v&&I,t,"internal-error");const T=Wg.fromJSON(this.name,I);lg("string"===typeof v,t,"internal-error"),Qg(h,t.name),Qg(l,t.name),lg("boolean"===typeof w,t,"internal-error"),lg("boolean"===typeof _,t,"internal-error"),Qg(d,t.name),Qg(f,t.name),Qg(p,t.name),Qg(g,t.name),Qg(m,t.name),Qg(y,t.name);const b=new Yg({uid:v,auth:t,email:l,emailVerified:w,displayName:h,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(b.providerData=E.map((t=>Object.assign({},t)))),g&&(b._redirectEventId=g),b}static async _fromIdTokenResponse(t,e,n=!1){const r=new Wg;r.updateFromServerResponse(e);const i=new Yg({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await $g(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=new Map;function Xg(t){fg(t instanceof Function,"Expected a class definition");let e=Jg.get(t);return e?(fg(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jg.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Zg.type="NONE";const tm=Zg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t,e,n){return`firebase:${t}:${e}:${n}`}class nm{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=em(this.userKey,r.apiKey,i),this.fullPersistenceKey=em("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Yg._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new nm(Xg(tm),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||Xg(tm);const s=em(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=Yg._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new nm(i,t,n)):new nm(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(am(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(im(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(um(e))return"Blackberry";if(hm(e))return"Webos";if(sm(e))return"Safari";if((e.includes("chrome/")||om(e))&&!e.includes("edge/"))return"Chrome";if(cm(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function im(t=x()){return/firefox\//i.test(t)}function sm(t=x()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function om(t=x()){return/crios\//i.test(t)}function am(t=x()){return/iemobile/i.test(t)}function cm(t=x()){return/android/i.test(t)}function um(t=x()){return/blackberry/i.test(t)}function hm(t=x()){return/webos/i.test(t)}function lm(t=x()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dm(t=x()){var e;return lm(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function fm(){return j()&&10===document.documentMode}function pm(t=x()){return lm(t)||cm(t)||hm(t)||um(t)||/windows phone/i.test(t)||am(t)}function gm(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t,e=[]){let n;switch(t){case"Browser":n=rm(x());break;case"Worker":n=`${rm(x())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ce}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(t,e={}){return Sg(t,"GET","/v2/passwordPolicy",bg(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=6;class _m{constructor(t){var e,n,r,i;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:wm,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=t.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tm(this),this.idTokenSubscription=new Tm(this),this.beforeStateQueue=new ym(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Xg(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await nm.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return lg(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await $g(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=vg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?it(t):null;return e&&lg(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&lg(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Xg(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await vm(this),e=new _m(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new K("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Xg(t)||this._popupRedirectResolver;lg(e,this,"argument-error"),this.redirectPersistenceManager=await nm.create(this,[Xg(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(lg(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof e){const i=t.addObserver(e,n,r);return()=>{s=!0,i()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return lg(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=mm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&ig(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Im(t){return it(t)}class Tm{constructor(t){this.auth=t,this.observer=null,this.addObserver=tt((t=>this.observer=t))}get next(){return lg(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Sm(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=ag("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",bm().appendChild(r)}))}function Am(t){return`__${t}${Math.floor(1e6*Math.random())}`}const Cm="https://www.google.com/recaptcha/enterprise.js?render=",km="recaptcha-enterprise",Nm="NO_RECAPTCHA";class Rm{constructor(t){this.type=km,this.auth=Im(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{Dg(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Zp(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;Xp(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Nm)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&Xp(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Sm(Cm+n).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Dm(t,e,n,r=!1){const i=new Rm(t);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Om(t,e){const n=Te(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if(Q(r,null!==e&&void 0!==e?e:{}))return t;og(t,"already-initialized")}const r=n.initialize({options:e});return r}function Pm(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xg);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Lm(t,e,n){const r=Im(t);lg(r._canInitEmulator,r,"emulator-config-failed"),lg(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Mm(e),{host:o,port:a}=xm(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Vm()}function Mm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xm(t){const e=Mm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Um(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Um(e)}}}function Um(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vm(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return dg("not implemented")}_getIdTokenResponse(t){return dg("not implemented")}_linkToIdToken(t,e){return dg("not implemented")}_getReauthenticationResolver(t){return dg("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jm(t,e){return Sg(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Bm(t,e){return Cg(t,"POST","/v1/accounts:signInWithPassword",bg(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qm(t,e){return Cg(t,"POST","/v1/accounts:signInWithEmailLink",bg(t,e))}async function $m(t,e){return Cg(t,"POST","/v1/accounts:signInWithEmailLink",bg(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm extends Fm{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new zm(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new zm(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await Dm(t,n,"signInWithPassword");return Bm(t,e)}return Bm(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Dm(t,n,"signInWithPassword");return Bm(t,e)}return Promise.reject(e)}));case"emailLink":return qm(t,{email:this._email,oobCode:this._password});default:og(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return jm(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $m(t,{idToken:e,email:this._email,oobCode:this._password});default:og(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km(t,e){return Cg(t,"POST","/v1/accounts:signInWithIdp",bg(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="http://localhost";class Gm extends Fm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Gm(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):og("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Jp(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Gm(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return Km(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Km(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Km(t,e)}buildRequest(){const t={requestUri:Hm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=J(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(t,e){return Sg(t,"POST","/v1/accounts:sendVerificationCode",bg(t,e))}async function Qm(t,e){return Cg(t,"POST","/v1/accounts:signInWithPhoneNumber",bg(t,e))}async function Ym(t,e){const n=await Cg(t,"POST","/v1/accounts:signInWithPhoneNumber",bg(t,e));if(n.temporaryProof)throw Rg(t,"account-exists-with-different-credential",n);return n}const Jm={["USER_NOT_FOUND"]:"user-not-found"};async function Xm(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Cg(t,"POST","/v1/accounts:signInWithPhoneNumber",bg(t,n),Jm)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm extends Fm{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Zm({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Zm({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Qm(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ym(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Xm(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Zm({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ey(t){const e=X(Z(t))["link"],n=e?X(Z(e))["deep_link_id"]:null,r=X(Z(t))["deep_link_id"],i=r?X(Z(r))["link"]:null;return i||r||n||e||t}class ny{constructor(t){var e,n,r,i,s,o;const a=X(Z(t)),c=null!==(e=a["apiKey"])&&void 0!==e?e:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,h=ty(null!==(r=a["mode"])&&void 0!==r?r:null);lg(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(i=a["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(t){const e=ey(t);try{return new ny(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ry{constructor(){this.providerId=ry.PROVIDER_ID}static credential(t,e){return zm._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ny.parseLink(e);return lg(n,"argument-error"),zm._fromEmailAndCode(t,n.code,n.tenantId)}}ry.PROVIDER_ID="password",ry.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ry.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy extends iy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oy extends sy{constructor(){super("facebook.com")}static credential(t){return Gm._fromParams({providerId:oy.PROVIDER_ID,signInMethod:oy.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return oy.credentialFromTaggedObject(t)}static credentialFromError(t){return oy.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return oy.credential(t.oauthAccessToken)}catch(e){return null}}}oy.FACEBOOK_SIGN_IN_METHOD="facebook.com",oy.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ay extends sy{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Gm._fromParams({providerId:ay.PROVIDER_ID,signInMethod:ay.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ay.credentialFromTaggedObject(t)}static credentialFromError(t){return ay.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ay.credential(e,n)}catch(r){return null}}}ay.GOOGLE_SIGN_IN_METHOD="google.com",ay.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cy extends sy{constructor(){super("github.com")}static credential(t){return Gm._fromParams({providerId:cy.PROVIDER_ID,signInMethod:cy.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cy.credentialFromTaggedObject(t)}static credentialFromError(t){return cy.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return cy.credential(t.oauthAccessToken)}catch(e){return null}}}cy.GITHUB_SIGN_IN_METHOD="github.com",cy.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uy extends sy{constructor(){super("twitter.com")}static credential(t,e){return Gm._fromParams({providerId:uy.PROVIDER_ID,signInMethod:uy.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return uy.credentialFromTaggedObject(t)}static credentialFromError(t){return uy.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return uy.credential(e,n)}catch(r){return null}}}uy.TWITTER_SIGN_IN_METHOD="twitter.com",uy.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hy{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await Yg._fromIdTokenResponse(t,n,r),s=ly(n),o=new hy({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ly(n);return new hy({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ly(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dy extends z{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,dy.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new dy(t,e,n,r)}}function fy(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw dy._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(t,e,n=!1){const r=await Fg(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hy._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gy(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Fg(t,fy(r,i,e,t),n);lg(s.idToken,r,"internal-error");const o=Ug(s.idToken);lg(o,r,"internal-error");const{sub:a}=o;return lg(t.uid===a,r,"user-mismatch"),hy._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&og(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function my(t,e,n=!1){const r="signIn",i=await fy(t,r,e),s=await hy._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function yy(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function vy(t,e,n){return it(t).beforeAuthStateChanged(e,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wy(t,e){return Sg(t,"POST","/v2/accounts/mfaEnrollment:start",bg(t,e))}function _y(t,e){return Sg(t,"POST","/v2/accounts/mfaEnrollment:finalize",bg(t,e))}function Ey(t,e){return Sg(t,"POST","/v2/accounts/mfaEnrollment:start",bg(t,e))}function Iy(t,e){return Sg(t,"POST","/v2/accounts/mfaEnrollment:finalize",bg(t,e))}new WeakMap;const Ty="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ty,"1"),this.storage.removeItem(Ty),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(){const t=x();return sm(t)||lm(t)}const Ay=1e3,Cy=10;class ky extends by{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sy()&&gm(),this.fallbackToPolling=pm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);fm()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Cy):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ky.type="LOCAL";const Ny=ky;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry extends by{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ry.type="SESSION";const Dy=Ry;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Py(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Oy(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ly(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Py.receivers=[];class My{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ly("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(){return window}function Uy(t){xy().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(){return"undefined"!==typeof xy()["WorkerGlobalScope"]&&"function"===typeof xy()["importScripts"]}async function Fy(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function jy(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function By(){return Vy()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="firebaseLocalStorageDb",$y=1,zy="firebaseLocalStorage",Ky="fbase_key";class Hy{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Gy(t,e){return t.transaction([zy],e?"readwrite":"readonly").objectStore(zy)}function Wy(){const t=indexedDB.deleteDatabase(qy);return new Hy(t).toPromise()}function Qy(){const t=indexedDB.open(qy,$y);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(zy,{keyPath:Ky})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(zy)?e(n):(n.close(),await Wy(),e(await Qy()))}))}))}async function Yy(t,e,n){const r=Gy(t,!0).put({[Ky]:e,value:n});return new Hy(r).toPromise()}async function Jy(t,e){const n=Gy(t,!1).get(e),r=await new Hy(n).toPromise();return void 0===r?null:r.value}function Xy(t,e){const n=Gy(t,!0).delete(e);return new Hy(n).toPromise()}const Zy=800,tv=3;class ev{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Qy()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>tv)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Py._getInstance(By()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Fy(),!this.activeServiceWorker)return;this.sender=new My(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&jy()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qy();return await Yy(t,Ty,"1"),await Xy(t,Ty),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Yy(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Jy(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Xy(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Gy(t,!1).getAll();return new Hy(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ev.type="LOCAL";const nv=ev;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t,e){return Sg(t,"POST","/v2/accounts/mfaSignIn:start",bg(t,e))}function iv(t,e){return Sg(t,"POST","/v2/accounts/mfaSignIn:finalize",bg(t,e))}function sv(t,e){return Sg(t,"POST","/v2/accounts/mfaSignIn:finalize",bg(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Am("rcb"),new wg(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ov="recaptcha";async function av(t,e,n){var r;const i=await n.verify();try{let s;if(lg("string"===typeof i,t,"argument-error"),lg(n.type===ov,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){lg("enroll"===e.type,t,"internal-error");const n=await wy(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{lg("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;lg(n,t,"missing-multi-factor-info");const o=await rv(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Wm(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cv{constructor(t){this.providerId=cv.PROVIDER_ID,this.auth=Im(t)}verifyPhoneNumber(t,e){return av(this.auth,t,it(e))}static credential(t,e){return Zm._fromVerification(t,e)}static credentialFromResult(t){const e=t;return cv.credentialFromTaggedObject(e)}static credentialFromError(t){return cv.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Zm._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uv(t,e){return e?Xg(e):(lg(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cv.PROVIDER_ID="phone",cv.PHONE_SIGN_IN_METHOD="phone";class hv extends Fm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Km(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Km(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Km(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function lv(t){return my(t.auth,new hv(t),t.bypassAuthState)}function dv(t){const{auth:e,user:n}=t;return lg(n,e,"internal-error"),gy(n,new hv(t),t.bypassAuthState)}async function fv(t){const{auth:e,user:n}=t;return lg(n,e,"internal-error"),py(n,new hv(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return lv;case"linkViaPopup":case"linkViaRedirect":return fv;case"reauthViaPopup":case"reauthViaRedirect":return dv;default:og(this.auth,"internal-error")}}resolve(t){fg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){fg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new wg(2e3,1e4);async function mv(t,e,n){const r=Im(t);ug(t,e,iy);const i=uv(r,n),s=new yv(r,"signInViaPopup",e,i);return s.executeNotNull()}class yv extends pv{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,yv.currentPopupAction&&yv.currentPopupAction.cancel(),yv.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return lg(t,this.auth,"internal-error"),t}async onExecution(){fg(1===this.filter.length,"Popup operations only handle one event");const t=Ly();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(ag(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(ag(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yv.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ag(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,gv.get())};t()}}yv.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vv="pendingRedirect",wv=new Map;class _v extends pv{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=wv.get(this.auth._key());if(!t){try{const e=await Ev(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}wv.set(this.auth._key(),t)}return this.bypassAuthState||wv.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ev(t,e){const n=bv(e),r=Tv(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Iv(t,e){wv.set(t._key(),e)}function Tv(t){return Xg(t._redirectPersistence)}function bv(t){return em(vv,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(t,e,n=!1){const r=Im(t),i=uv(r,e),s=new _v(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Av=6e5;class Cv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Rv(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Nv(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(ag(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Av&&this.cachedEventUids.clear(),this.cachedEventUids.has(kv(t))}saveEventToCache(t){this.cachedEventUids.add(kv(t)),this.lastProcessedEventTime=Date.now()}}function kv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Nv({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Rv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nv(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(t,e={}){return Sg(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pv=/^https?/;async function Lv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Dv(t);for(const r of e)try{if(Mv(r))return}catch(n){}og(t,"unauthorized-domain")}function Mv(t){const e=pg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Pv.test(n))return!1;if(Ov.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new wg(3e4,6e4);function Uv(){const t=xy().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Vv(t){return new Promise(((e,n)=>{var r,i,s;function o(){Uv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uv(),n(ag(t,"network-request-failed"))},timeout:xv.get()})}if(null===(i=null===(r=xy().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=xy().gapi)||void 0===s?void 0:s.load)){const e=Am("iframefcb");return xy()[e]=()=>{gapi.load?o():n(ag(t,"network-request-failed"))},Sm(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Fv=null,t}))}let Fv=null;function jv(t){return Fv=Fv||Vv(t),Fv}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=new wg(5e3,15e3),qv="__/auth/iframe",$v="emulator/auth/iframe",zv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hv(t){const e=t.config;lg(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_g(e,$v):`https://${t.config.authDomain}/${qv}`,r={apiKey:e.apiKey,appName:t.name,v:Ce},i=Kv.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${J(r).slice(1)}`}async function Gv(t){const e=await jv(t),n=xy().gapi;return lg(n,t,"internal-error"),e.open({where:document.body,url:Hv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zv,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=ag(t,"network-request-failed"),s=xy().setTimeout((()=>{r(i)}),Bv.get());function o(){xy().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qv=500,Yv=600,Jv="_blank",Xv="http://localhost";class Zv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function tw(t,e,n,r=Qv,i=Yv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Wv),{width:r.toString(),height:i.toString(),top:s,left:o}),u=x().toLowerCase();n&&(a=om(u)?Jv:n),im(u)&&(e=e||Xv,c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(dm(u)&&"_self"!==a)return ew(e||"",a),new Zv(null);const l=window.open(e||"",a,h);lg(l,t,"popup-blocked");try{l.focus()}catch(d){}return new Zv(l)}function ew(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="__/auth/handler",rw="emulator/auth/handler",iw=encodeURIComponent("fac");async function sw(t,e,n,r,i,s){lg(t.config.authDomain,t,"auth-domain-config-required"),lg(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ce,eventId:i};if(e instanceof iy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",W(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof sy){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))void 0===a[h]&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${iw}=${encodeURIComponent(c)}`:"";return`${ow(t)}?${J(a).slice(1)}${u}`}function ow({config:t}){return t.emulator?_g(t,rw):`https://${t.authDomain}/${nw}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="webStorageSupport";class cw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dy,this._completeRedirectFn=Sv,this._overrideRedirectResult=Iv}async _openPopup(t,e,n,r){var i;fg(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await sw(t,e,n,pg(),r);return tw(t,s,Ly())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await sw(t,e,n,pg(),r);return Uy(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(fg(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Gv(t),n=new Cv(t);return e.register("authEvent",(e=>{lg(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(aw,{type:aw},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[aw];void 0!==i&&e(!!i),og(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Lv(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return pm()||sm()||lm()}}const uw=cw;class hw{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return dg("unexpected MultiFactorSessionType")}}}class lw extends hw{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new lw(t)}_finalizeEnroll(t,e,n){return _y(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return iv(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class dw{constructor(){}static assertion(t){return lw._fromCredential(t)}}dw.FACTOR_ID="phone";class fw{static assertionForEnrollment(t,e){return pw._fromSecret(t,e)}static assertionForSignIn(t,e){return pw._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;lg("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const r=await Ey(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return gw._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}fw.FACTOR_ID="totp";class pw extends hw{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new pw(e,void 0,t)}static _fromEnrollmentId(t,e){return new pw(e,t)}async _finalizeEnroll(t,e,n){return lg("undefined"!==typeof this.secret,t,"argument-error"),Iy(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){lg(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return sv(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class gw{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new gw(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(mw(t)||mw(e))&&(r=!0),r&&(mw(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),mw(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function mw(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var yw="@firebase/auth",vw="1.3.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ww{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){lg(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ew(t){Ie(new st("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;lg(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mm(t)},u=new Em(r,i,s,c);return Pm(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),Ie(new st("auth-internal",(t=>{const e=Im(t.getProvider("auth").getImmediate());return(t=>new ww(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Re(yw,vw,_w(t)),Re(yw,vw,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=300,Tw=P("authIdTokenMaxAge")||Iw;let bw=null;const Sw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Tw)return;const i=null===n||void 0===n?void 0:n.token;bw!==i&&(bw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Aw(t=Ne()){const e=Te(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Om(t,{popupRedirectResolver:uw,persistence:[nv,Ny,Dy]}),r=P("authTokenSyncURL");if(r){const t=Sw(r);vy(n,t,(()=>t(n.currentUser))),yy(n,(e=>t(e)))}const i=R("auth");return i&&Lm(n,`http://${i}`),n}Ew("Browser");const Cw={apiKey:"AIzaSyDCIpWPMzdt2TAccWSlg-tpme_ydHy4qLA",authDomain:"chat-32033.firebaseapp.com",projectId:"chat-32033",storageBucket:"chat-32033.appspot.com",messagingSenderId:"728261182735",appId:"1:728261182735:web:6b66ab915b082b594dea7a",measurementId:"G-7KKBB1S54Q"},kw=ke(Cw),Nw=Zf(kw),Rw=Aw();var Dw={data(){return{message:"",messages:[],user:null,loading:!1}},methods:{async signInWithGooglePopup(){const t=new ay;try{const e=await mv(Rw,t),n=e.user;console.log("Користувач успішно увійшов через Google:",n),this.user=n,localStorage.setItem("user",JSON.stringify(n))}catch(e){console.error("Помилка входу через Google:",e.message)}},async signOut(){try{await Rw.signOut(),this.user=null,localStorage.removeItem("user")}catch(t){console.error("Помилка під час виходу:",t)}},async sendMessage(){this.loading=!0;try{await Qp(Qf(Nw,"messages"),{name:this.user.displayName,avatar_url:this.user.photoURL,message:this.message,timestamp:this.getCurrentTime()}),this.getMessages()}catch(t){console.error("Error adding document: ",t)}finally{this.message="",this.loading=!1}},async getMessages(){try{const t=Np(Qf(Nw,"messages"),Pp("timestamp"),Mp(100)),e=await Wp(t),n=[];e.forEach((t=>{const e=t.data();n.push(e)})),this.messages=n}catch(t){console.error("Error reading database",t)}finally{setTimeout((()=>{this.scrollToBottom()}),100)}},getCurrentTime(){const t=ua.now();return t},formatTimestampToTime(t){const e=t.toDate(),n=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],r=n[e.getMonth()],i=e.getDate().toString().padStart(2,"0"),s=e.getHours().toString().padStart(2,"0"),o=e.getMinutes().toString().padStart(2,"0");return`${i} ${r} в ${s}:${o}`},scrollToBottom(){const t=this.$refs.messagesList;t.scrollTop=t.scrollHeight}},mounted(){const t=localStorage.getItem("user");t&&(this.user=JSON.parse(t)),this.getMessages()}},Ow=n(89);const Pw=(0,Ow.Z)(Dw,[["render",y]]);var Lw=Pw,Mw={data(){return{}},components:{Chat:Lw},created(){},methods:{},computed:{}};const xw=(0,Ow.Z)(Mw,[["render",s],["__scopeId","data-v-3e9ef6b3"]]);var Uw=xw}}]);
//# sourceMappingURL=688.8414323b.js.map