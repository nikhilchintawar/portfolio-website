(this["webpackJsonpnikhilchintawar.github.io"]=this["webpackJsonpnikhilchintawar.github.io"]||[]).push([[5],{44:function(e,n,t){"use strict";var a=t(1),r=t.n(a),i=t(88);t(45);n.a=function(e){var n=e.favicon,t=e.title,a=e.info,o=e.href,u=e.linkText;return r.a.createElement("div",{className:"card"},r.a.createElement("span",null,n),r.a.createElement("h3",null,t),a.map((function(e){return r.a.createElement("ul",{className:"infoContainer",key:Object(i.a)()},r.a.createElement("li",null,e))})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o},u))}},45:function(e,n,t){},61:function(e,n,t){},88:function(e,n,t){"use strict";var a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function i(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(e){return"string"===typeof e&&o.test(e)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var s=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(c[e[n+0]]+c[e[n+1]]+c[e[n+2]]+c[e[n+3]]+"-"+c[e[n+4]]+c[e[n+5]]+"-"+c[e[n+6]]+c[e[n+7]]+"-"+c[e[n+8]]+c[e[n+9]]+"-"+c[e[n+10]]+c[e[n+11]]+c[e[n+12]]+c[e[n+13]]+c[e[n+14]]+c[e[n+15]]).toLowerCase();if(!u(t))throw TypeError("Stringified UUID is invalid");return t};n.a=function(e,n,t){var a=(e=e||{}).random||(e.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n){t=t||0;for(var r=0;r<16;++r)n[t+r]=a[r];return n}return s(a)}},92:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(6),o=t(44),u=(t(61),["Secondary School, Zilla Parishad High School, Shahapur, T. Degloor, Dist. Nanded, 89/100%","Higher Secondary School, Yashwant Mahavidyalay, Nanaded, 84.23/100%","Now pursuing BTech in Computer Science from Shri Guru Gobind Singh Ji Institute of Engineering & Technology, Vishnupuri-431606, Nanded"]);n.default=function(e){var n=e.id;return r.a.createElement("div",{id:n},r.a.createElement("h2",null,"Background"),r.a.createElement("div",{className:"background"},r.a.createElement(o.a,{favicon:r.a.createElement(i.b,{size:60}),title:"Education",info:u})))}}}]);
//# sourceMappingURL=5.28d98fb0.chunk.js.map