(this["webpackJsonpbank-app-redux-2nd"]=this["webpackJsonpbank-app-redux-2nd"]||[]).push([[0],{14:function(t,a,e){},15:function(t,a,e){},18:function(t,a,e){"use strict";e.r(a);var n=e(0),o=e.n(n),c=e(4),r=e.n(c),s=(e(14),e(5)),l=e.n(s),u=e(6),m=e.n(u),i=(e(15),e(7)),p=e(2),d=function(t,a){switch(a.type){case"WITHDRAW":return Object(p.a)(Object(p.a)({},t),{},{totalAmount:t.totalAmount-a.payload});default:return t}},A=Object(i.a)(d,{username:"Sarah",totalAmount:2500750}),f=function(){var t=A.getState(),a=t.totalAmount,e=t.username,n=function(t){var a=t.target.dataset.amount;A.dispatch(function(t){return{type:"WITHDRAW",payload:t}}(a))};return o.a.createElement("div",{className:"App"},o.a.createElement("img",{className:"App__userpic",src:m.a,alt:"user"}),o.a.createElement("p",{className:"App__username"},"Hello, ",e,"! "),o.a.createElement("div",{className:"App__amount"},l()({prefix:"$"})(a),o.a.createElement("p",{className:"App__amount--info"},"Total Amount ")),o.a.createElement("section",{className:"App__buttons"},o.a.createElement("button",{"data-amount":"10000",onClick:n},"WITHDRAW $10,000"),o.a.createElement("button",{"data-amount":"5000",onClick:n},"WITHDRAW $5,000")),o.a.createElement("p",{className:"App__giveaway"},"Give away all your cash to charity"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=document.getElementById("root"),b=function(){return r.a.render(o.a.createElement(f,null),h)};b(),A.subscribe(b)},6:function(t,a,e){t.exports=e.p+"static/media/girl.789f86e4.png"},9:function(t,a,e){t.exports=e(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.c90d9eaa.chunk.js.map