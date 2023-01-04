(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap);"]),s.push([e.id,"body {\n  font-family: 'Atkinson Hyperlegible', sans-serif;\n}\n\n.score-board {\n  border: 1px solid #333;\n}\n\n.score-form {\n  max-width: 30em;\n}\n",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],u=r.base?i[0]+r.base:i[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=n(l),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:m,references:1})}s.push(l)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=n(a[s]);t[c].references--}for(var i=r(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e="https://us-central1-js-capstone-backend.cloudfunctions.net/api",t="et4ov2RI0XYJEMEKJk6n";var r=n(379),o=n.n(r),a=n(795),s=n.n(a),c=n(569),i=n.n(c),u=n(565),d=n.n(u),l=n(216),p=n.n(l),f=n(589),m=n.n(f),v=n(28),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=p(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const y=document.querySelector(".refresh-btn"),b=document.querySelector(".score-board"),g=document.querySelector(".score-form");y.addEventListener("click",(async()=>{b.replaceChildren();const{result:n}=await(async()=>{const n=`${e}/games/${t}/scores/`;return(await fetch(n)).json()})();if(!n)return;const r=document.createElement("tbody");n.forEach((({user:e,score:t})=>{const n=document.createElement("tr");n.innerHTML=`<td>${e}</td><td>${t}</td>`,r.appendChild(n)})),b.appendChild(r)})),g.addEventListener("submit",(async n=>{n.preventDefault();const r=new FormData(g),o=r.get("user"),a=r.get("score"),s=await(async(n,r)=>{const o=`${e}/games/${t}/scores/`;return(await fetch(o,{method:"POST",body:JSON.stringify({user:n,score:r}),headers:{"Content-Type":"application/json"}})).ok})(o,a);s&&g.reset()}))})()})();