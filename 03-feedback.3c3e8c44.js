var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var r,i,o,a,f,u,l=0,c=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,f=setTimeout(O,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||m&&e-l>=o}function O(){var e=v();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-u);return m?d(n,o-(e-l)):n}(e))}function T(e){return f=void 0,b&&r?y(e):(r=i=void 0,a)}function w(){var e=v(),n=j(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return h(u);if(m)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,o=(m="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=i=f=void 0},w.flush=function(){return void 0===f?a:T(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),y={};(()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null===e)return;for(const t in e)b.elements[t].value=e[t]}catch(e){console.log(e)}})();b.addEventListener("input",t((e=>{const{target:t}=e,n=t.name,r=t.value;y[n]=r,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),b.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value)return alert("Please fill in all the fields!");y.email=t.value,y.message=n.value,console.log(y),Object.keys(y).forEach((e=>{delete y[e]})),b.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.3c3e8c44.js.map
