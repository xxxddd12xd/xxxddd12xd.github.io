(this.webpackJsonpclickgame=this.webpackJsonpclickgame||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var r=c(6),i=c(7),s=c(9),a=c(8),l=c(1),n=c.n(l),o=c(12),d=c.n(o),u=(c(17),c(22)),h=c(23),j=c(21),p=c.p+"static/media/01.bf47ab8b.webm",b=c(0);function m(e){return Object(b.jsx)("div",{className:"h-100 d-inline-block",style:{width:"33%"},children:Object(b.jsxs)(u.a,{style:{width:"100%"},children:[Object(b.jsx)("video",{src:p,autoPlay:!0,muted:!0,loop:!0}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:e.title}),Object(b.jsx)(u.a.Text,{children:"\u9084\u6c92\u60f3\u5230"}),Object(b.jsx)(h.a,{variant:"primary",children:"Go somewhere"})]})]})})}function x(e){return Object(b.jsx)("div",{className:"h-100 d-inline-block",style:{width:"33%"},children:Object(b.jsxs)(u.a,{style:{width:"100%"},children:[Object(b.jsx)("iframe",{height:"315",src:"https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&controls=1&modestbranding=1&showinfo=0&enablejsapi=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:e.title}),Object(b.jsxs)(u.a.Text,{children:["\u4f60\u5df2\u7d93\u5c41\u4e86",e.text,"\u6b21,\u6bcf\u79d2\u81ea\u52d5\u5c41",e.auto,"\u6b21"]}),Object(b.jsx)(h.a,{variant:"primary",children:"Go somewhere"})]})]})})}var O=function(e){Object(s.a)(c,e);var t=Object(a.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(b.jsx)(u.a,{className:"upgrade_detail",style:{backgroundColor:"gray"},children:Object(b.jsx)("div",{className:"container",style:{height:"30px"},children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-sm",children:["\u6bcf\u79d2\u591a\u5c41",this.props.order,"\u6b21"]}),Object(b.jsxs)("div",{className:"col-sm cost",children:[this.props.detail,"\u03dd"]}),Object(b.jsx)("div",{className:"col-sm-2",children:Object(b.jsx)(h.a,{type:"button",className:"col p-1 btn-sm upgradeButton",variant:"primary",children:"Buy"})})]})})})}}]),c}(n.a.Component),y=function(e){Object(s.a)(c,e);var t=Object(a.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"h-100 d-inline-block",style:{width:"33%"},children:Object(b.jsxs)(u.a,{style:{width:"100%"},children:[Object(b.jsx)(u.a.Img,{variant:"top",src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b4e20590a%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b4e20590a%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22105.9765625%22%20y%3D%2297.003125%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:this.props.title}),Object(b.jsx)(u.a.Text,{children:"\u4e00\u4e9b\u5347\u7d1a\u8cc7\u8a0a"}),Object(b.jsxs)(j.a,{className:"upgradeContainer",children:[Object(b.jsx)(O,{order:this.props.autoPerSec[0],detail:this.props.detail[0]}),Object(b.jsx)(O,{order:this.props.autoPerSec[1],detail:this.props.detail[1]}),Object(b.jsx)(O,{order:this.props.autoPerSec[2],detail:this.props.detail[2]})]})]})]})})}}]),c}(n.a.Component);try{var v=JSON.parse(document.cookie)[0].clickAmount,g=JSON.parse(document.cookie)[0].autoClick,f=JSON.parse(document.cookie)[0].upgrade_status,C=JSON.parse(document.cookie)[0].costList}catch(k){v=0,g=0,f=0,C=[15,100,1100]}var w=function(e){Object(s.a)(c,e);var t=Object(a.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{title:"\u5de6\u908a"}),Object(b.jsx)(x,{title:"\u9ede\u64ca\u5340",text:v,auto:g}),Object(b.jsx)(y,{title:"\u53f3\u908a",autoPerSec:[1,2,8],detail:C})]})}}]),c}(n.a.Component);function S(){for(var e=0;e<C.length;e++)v<C[e]?document.querySelectorAll(".upgradeButton")[e].disabled=1:document.querySelectorAll(".upgradeButton")[e].disabled=0}d.a.render(Object(b.jsx)(w,{}),document.getElementById("root")),document.querySelectorAll(".card")[1].lastChild.lastChild.addEventListener("click",(function(){v=parseInt(v,10),v+=1,document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML="\u4f60\u5df2\u7d93\u5c41\u4e86"+v+"\u6b21,\u6bcf\u79d2\u81ea\u52d5\u5c41"+g+"\u6b21",S()})),document.querySelectorAll(".upgradeButton")[0].addEventListener("click",(function(){g+=1,f=1,v-=C[0],C[0]=Math.ceil(1.15*C[0]),document.querySelectorAll(".cost")[0].innerText=C[0]+"\u03dd",document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML="\u4f60\u5df2\u7d93\u5c41\u4e86"+v+"\u6b21,\u6bcf\u79d2\u81ea\u52d5\u5c41"+g+"\u6b21",S(),document.querySelectorAll(".upgrade_detail")[1].classList.remove("d-none")})),document.querySelectorAll(".upgradeButton")[1].addEventListener("click",(function(){g+=2,f=2,v-=C[1],C[1]=Math.ceil(1.15*C[1]),document.querySelectorAll(".cost")[1].innerText=C[1]+"\u03dd",document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML="\u4f60\u5df2\u7d93\u5c41\u4e86"+v+"\u6b21,\u6bcf\u79d2\u81ea\u52d5\u5c41"+g+"\u6b21",S(),document.querySelectorAll(".upgrade_detail")[2].classList.remove("d-none")}));setInterval((function(){v+=g,document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML="\u4f60\u5df2\u7d93\u5c41\u4e86"+v+"\u6b21,\u6bcf\u79d2\u81ea\u52d5\u5c41"+g+"\u6b21",S()}),1e3);setInterval((function(){var e=[{clickAmount:v,autoClick:g,upgrade_status:f,costList:C}],t=JSON.stringify(e);document.cookie=t+"; expires=Thu, 18 Dec 2022 12:00:00 GMT; path=/",console.log("saved!")}),6e3);S(),function(){for(var e=0;e<=f;e++)document.querySelector(".upgradeContainer").childNodes[e].classList.remove("d-none")}()}},[[19,1,2]]]);
//# sourceMappingURL=main.c888a01c.chunk.js.map