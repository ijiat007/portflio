(function(){"use strict";var e={7383:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var r=t(5772),o=t(3396);function i(e,n,t,r,i,u){var a=(0,o.up)("Header"),f=(0,o.up)("router-view"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a),(0,o.Wm)(f),(0,o.Wm)(c)],64)}var u=t(7139),a=function(e){return(0,o.dD)("data-v-40f9aed3"),e=e(),(0,o.Cn)(),e},f=a((function(){return(0,o._)("h1",null,[(0,o.Uk)("JUYOUNG SUNG "),(0,o._)("a",{href:"/SJY.pdf",download:""},"Resume")],-1)})),c={id:"nav"},l=(0,o.Uk)("Now"),d=(0,o.Uk)("Past");function s(e,n,t,r,i,a){var s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",{class:(0,u.C_)({fix:i.isFix})},[f,(0,o._)("nav",c,[(0,o.Wm)(s,{to:"/portflio/"},{default:(0,o.w5)((function(){return[l]})),_:1}),(0,o.Wm)(s,{to:"/portflio/prev"},{default:(0,o.w5)((function(){return[d]})),_:1})])],2)}var p={name:"Header",data:function(){return{isFix:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var e=this,n=window.scrollY,t=document.getElementById("nav"),r=t.offsetTop;setTimeout((function(){e.isFix=n>r}),100),console.log(r,n)}}},v=t(89);const m=(0,v.Z)(p,[["render",s],["__scopeId","data-v-40f9aed3"]]);var h=m;function g(e,n,t,r,i,u){return(0,o.wg)(),(0,o.iD)("footer",null,"© juyoung.sung. All Rights Reserved.")}var b={name:"Footer"};const y=(0,v.Z)(b,[["render",g],["__scopeId","data-v-8ac3a6b8"]]);var w=y,k={name:"App",components:{Header:h,Footer:w},data:function(){return{isFix:!1}},mounted:function(){},methods:{}};const O=(0,v.Z)(k,[["render",i]]);var _=O,C=(t(1539),t(8783),t(3948),t(678)),S=[{name:"Home",path:"/portflio/",component:function(){return t.e(127).then(t.bind(t,3127))}},{name:"Prev",path:"/portflio/prev",component:function(){return t.e(385).then(t.bind(t,8385))}}],j=(0,C.p7)({history:(0,C.PO)(),routes:S}),E=t(9499),A=(0,r.ri)(_);(0,E.registerScrollSpy)(A),A.use(j).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,f=0;f<r.length;f++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[f])}))?r.splice(f--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{127:"afb6f537",385:"b99c81e6"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="portflio:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,f;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(f=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var s=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),f&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/portflio/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,f=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=u,f.request=a,o.parentNode.removeChild(o),r(f)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={127:1,385:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,f=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,f,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],f=r[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(f)var l=f(t)}for(n&&n(r);c<u.length;c++)i=u[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkportflio"]=self["webpackChunkportflio"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7383)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.8ed87ffe.js.map