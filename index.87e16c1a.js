!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r.register("eLZ82",(function(e,t){var n=r("6Sco9");r("dCfNN");const o=document.querySelector("form"),a=(document.querySelector(".modal-form-btn"),document.querySelectorAll(".input-radio"),document.querySelectorAll(".input-wrap p"),document.querySelector(".file__preview")),i=document.querySelector(".input-img"),s=document.querySelector("#success__load"),c={};(()=>{const e=n.default.load("userData");if(void 0!==e)for(const t in e)o.elements[t]===i?o.elements[t].files[0]=e[t]:o.elements[t].value=e[t]})();function u(e){alert("Your request has been sent!"),e.classList.remove("hidden"),a.innerHTML="",e.reset(),setInterval((()=>location.reload()),3e3)}function l(){document.getElementById("loader").classList.toggle("hidden")}o.addEventListener("change",(e=>{const{target:t}=e;let r=t.value,o=t.name;"file"===o&&(r=i.files[0].name),c[o]=r,n.default.save("userData",c)})),o.addEventListener("submit",(async function(e){e.preventDefault();const t=o.elements,n=new FormData,r=[...t.radio].find((e=>e.checked));n.append("position_id",r.value),n.append("name",t.name.value),n.append("email",t.email.value),n.append("phone",t.tel.value),n.append("photo",i.files[0]),console.log(Array.from(n.entries())),l();const{status:a,error:c}=await async function(e){const{token:t}=await async function(){return await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token").then((e=>e.json()))}();return console.log(t),await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"post",headers:{Token:t},body:e})}(n);switch(a){case 200:case 201:u(e.target);break;case 409:alert("A user with this data is already registered!"),location.reload();break;default:!function(e){alert(e)}(c),location.reload()}l(),u(e.target),s.classList.add("success__load__js")})),s.addEventListener("click",(()=>{s.classList.remove("success__load__js")}))})),r.register("6Sco9",(function(e,t){var n,r,o,a;n=e.exports,r="default",o=function(){return i},Object.defineProperty(n,r,{get:o,set:a,enumerable:!0,configurable:!0});var i={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}}})),r.register("dCfNN",(function(t,n){var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,f=u||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,m=Math.min,v=function(){return f.Date.now()};function g(e,t,n){var o,a,i,s,c,u,l=0,f=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=a;return o=a=void 0,l=t,s=e.apply(r,n)}function w(e){return l=e,c=setTimeout(_,t),f?b(e):s}function S(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-l>=i}function _(){var e=v();if(S(e))return j(e);c=setTimeout(_,function(e){var n=t-(e-u);return d?m(n,i-(e-l)):n}(e))}function j(e){return c=void 0,g&&o?b(e):(o=a=void 0,s)}function x(){var e=v(),n=S(e);if(o=arguments,a=this,u=e,n){if(void 0===c)return w(u);if(d)return c=setTimeout(_,t),b(u)}return void 0===c&&(c=setTimeout(_,t)),s}return t=h(t)||0,y(n)&&(f=!!n.leading,i=(d="maxWait"in n)?p(h(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=u=a=c=void 0},x.flush=function(){return void 0===c?s:j(v())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}t.exports=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),g(e,t,{leading:o,maxWait:t,trailing:a})}})),r("eLZ82")}();
//# sourceMappingURL=index.87e16c1a.js.map
