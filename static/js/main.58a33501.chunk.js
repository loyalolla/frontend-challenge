(this["webpackJsonpfrontend-challenge-kitty-app"]=this["webpackJsonpfrontend-challenge-kitty-app"]||[]).push([[0],{11:function(e,t,n){e.exports={header:"App_header__3MgOT",link:"App_link__LYvb9",linkActive:"App_linkActive__2eob8"}},15:function(e,t,n){e.exports={imgContainer:"Card_imgContainer__3-iPs",like:"Card_like__bd_kp",img:"Card_img__1qgJC",likeClicked:"Card_likeClicked__2HjLY"}},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(22),r=n.n(i),s=(n(32),n(11)),o=n.n(s),l=n(10),j=n(2),u=n(14),d=n(8),b=n(23),f=n(24),h=n.n(f),g={search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"/v1/images/search?size=full&mime_types=jpg&limit=20&page=".concat(e)}},m=n(25),O=n(26),v=new(function(){function e(){Object(m.a)(this,e),this.prefix="__kitty_app"}return Object(O.a)(e,[{key:"get",value:function(e){if(!e)return null;var t=localStorage.getItem("".concat(this.prefix,"_").concat(e));if("string"===typeof t)try{return JSON.parse(t)}catch(n){return null}return null}},{key:"set",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!e||!t)return null;var n="".concat(this.prefix,"_").concat(e);return localStorage.setItem(n,JSON.stringify(t)),t}}]),e}()),_=n(15),x=n.n(_),p=n(1);function k(e){var t=e.id,n=e.url,a=Object(c.useState)(!1),i=Object(d.a)(a,2),r=i[0],s=i[1];return Object(c.useEffect)((function(){(v.get("fav")||[]).includes(t)&&s(!0)}),[]),Object(p.jsxs)("div",{className:x.a.imgContainer,children:[Object(p.jsx)("img",{className:x.a.img,src:n,alt:"img",loading:"lazy"}),Object(p.jsx)("div",{className:h()(x.a.like,Object(b.a)({},x.a.likeClicked,r)),onClick:function(e){s(!r);var t,n=v.get("fav")||[];t=n.includes(e)?n.filter((function(t){return t!==e})):[].concat(Object(u.a)(n),[e]),v.set("fav",t)}.bind(null,t)})]})}var C=n(7),N=n.n(C);function y(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),r=Object(d.a)(i,2),s=r[0],o=r[1],l=Object(c.useState)(!1),j=Object(d.a)(l,2),b=j[0],f=j[1],h=function(e){f(!0),function(e,t){if(e){var n=g[e];"function"===typeof n&&(n=n(t));var c="".concat("https://api.thecatapi.com").concat(n);return fetch(c,{headers:{"x-api-key":"b3304643-e553-4440-bcd9-2616c2d95c1f"}}).then((function(e){return e.json()}))}}("search",e).then((function(e){f(!1),a([].concat(Object(u.a)(n),Object(u.a)(e)))}))};Object(c.useEffect)((function(){h(s)}),[]);return Object(p.jsxs)("div",{className:N.a.container,children:[Object(p.jsx)("div",{className:N.a.imagesContainer,children:n.map((function(e,t){return Object(p.jsx)("div",{className:N.a.cardContainer,children:Object(p.jsx)(k,{id:e.id,url:e.url})},e.id+t)}))}),Object(p.jsx)("div",{className:N.a.buttonContainer,children:b?Object(p.jsx)("div",{className:N.a.loadingText,children:"... \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0435\u0449\u0435 \u043a\u043e\u0442\u0438\u043a\u043e\u0432 ..."}):Object(p.jsxs)("div",{className:N.a.button,children:[" ",Object(p.jsx)("button",{onClick:function(){var e=s+1;o(e),h(e)},children:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435 \u043a\u043e\u0442\u0438\u043a\u043e\u0432"})," "]})})]})}function S(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=v.get("fav")||[];a(e)}),[]),Object(p.jsxs)("div",{className:N.a.container,children:[Object(p.jsx)("div",{className:N.a.emptyText,children:!n.length&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u043b\u044e\u0431\u0438\u043c\u044b\u0445 \u043a\u043e\u0442\u0438\u043a\u043e\u0432 \ud83d\ude3f"}),Object(p.jsx)(l.b,{to:"/",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u043a\u043e\u0442\u0438\u043a\u043e\u0432"})]})}),Object(p.jsx)("div",{className:N.a.imagesContainer,children:n.length>0&&n.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(k,{id:e,url:"https://cdn2.thecatapi.com/images/".concat(e,".jpg")})},e)}))})]})}function P(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(l.a,{basename:"/frontend-challenge",children:[Object(p.jsxs)("header",{className:o.a.header,children:[Object(p.jsx)(l.c,{exact:!0,activeClassName:o.a.linkActive,className:o.a.link,to:"/",children:"\u0412\u0441\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"}),Object(p.jsx)(l.c,{exact:!0,activeClassName:o.a.linkActive,className:o.a.link,to:"/favourites",children:"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"})]}),Object(p.jsx)("main",{children:Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"/",exact:!0,component:y}),Object(p.jsx)(j.a,{path:"/favourites",exact:!0,component:S})]})})]})})}var T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root")),T()},7:function(e,t,n){e.exports={container:"HomePage_container__1sdME",imagesContainer:"HomePage_imagesContainer__2IWIK",buttonContainer:"HomePage_buttonContainer__12_1-",button:"HomePage_button__1ggw_",loadingText:"HomePage_loadingText__2WQM0",emptyText:"HomePage_emptyText__3gAtV"}}},[[39,1,2]]]);
//# sourceMappingURL=main.58a33501.chunk.js.map