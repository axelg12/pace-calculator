(this["webpackJsonppace-calculator"]=this["webpackJsonppace-calculator"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),l=n(6),s=n.n(l),u=(n(12),n(2)),o=n(3),i=n(4);n(13);var b=function(e){var t=e.value,n=e.label,a=e.onChange,r=e.placeholder;return Object(c.jsxs)("div",{className:"Input",children:[Object(c.jsx)("label",{htmlFor:n,children:n}),Object(c.jsx)("input",{placeholder:r,name:n,onChange:function(e){return a(e.target.value)},type:"text",value:t})]})};n(14);var h=function(){var e=Object(a.useState)({h:0,m:0,s:0}),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)({h:0,m:0,s:0}),s=Object(i.a)(l,2),h=s[0],j=s[1],m=Object(a.useState)(0),d=Object(i.a)(m,2),O=d[0],p=d[1],f=Object(a.useState)("meters"),v=Object(i.a)(f,2),x=v[0],g=v[1],C=function(e,t){r(Object(o.a)(Object(o.a)({},n),Object(u.a)({},t,e)))},N=function(e,t){j(Object(o.a)(Object(o.a)({},n),Object(u.a)({},t,e)))},M=function(){return"meters"===x?Number(O)/1e3:1.60934*Number(O)};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h2",{children:"Time"}),Object(c.jsxs)("div",{className:"App__section",children:[Object(c.jsx)(b,{placeholder:"Hours",label:"Hours",onChange:function(e){return C(e,"h")},value:n.h}),Object(c.jsx)(b,{placeholder:"Minutes",label:"Minutes",onChange:function(e){return C(e,"m")},value:n.m}),Object(c.jsx)(b,{placeholder:"Seconds",label:"Seconds",onChange:function(e){return C(e,"s")},value:n.s})]}),Object(c.jsx)("h2",{children:"Distance"}),Object(c.jsxs)("div",{className:"App__section",children:[Object(c.jsx)(b,{placeholder:"Distance in ".concat(x),label:"Distance",onChange:function(e){return p(e)},value:O}),Object(c.jsx)("input",{type:"radio",id:"meters",name:"unit",value:"meters",onChange:function(e){return g(e.target.value)},checked:"meters"===x}),Object(c.jsx)("label",{htmlFor:"meters",children:"Meters"}),Object(c.jsx)("input",{type:"radio",id:"miles",name:"unit",value:"miles",onChange:function(e){return g(e.target.value)},checked:"miles"===x}),Object(c.jsx)("label",{htmlFor:"miles",children:"Miles"})]}),Object(c.jsx)("h2",{children:"Pace"}),Object(c.jsxs)("div",{className:"App__section",children:[Object(c.jsx)(b,{placeholder:"Hours",label:"Hours",onChange:function(e){return N(e,"h")},value:h.h}),Object(c.jsx)(b,{placeholder:"Minutes",label:"Minutes",onChange:function(e){return N(e,"m")},value:h.m}),Object(c.jsx)(b,{placeholder:"Seconds",label:"Seconds",onChange:function(e){return N(e,"s")},value:h.s})]}),Object(c.jsxs)("div",{className:"App__section",children:[Object(c.jsx)("button",{onClick:function(){var e=h.s/60+h.m+60*h.h,t=M()*e,n=Math.floor(t/60),c=Math.round(t%1*60);r({h:n,m:Math.floor(t-60*n),s:c})},children:"Calculate time"}),Object(c.jsx)("button",{onClick:function(){var e=(Number(n.s)/60+Number(n.m)+60*Number(n.h))/(Number(h.s)/60+Number(h.m)+60*Number(h.h))*("meters"===x?1e3:1/1.60934);p(Math.round(100*(e+Number.EPSILON))/100)},children:"Calculate distance"}),Object(c.jsx)("button",{onClick:function(){var e=Number(n.s)/60/60+Number(n.m)/60+Number(n.h),t=60/(M()/e),c=Math.floor(t/60),a=Math.round(t%1*60);j({h:0,m:Math.floor(t-60*c),s:a})},children:"Calculate pace"})]})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),r(e),l(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.48cf3d8d.chunk.js.map