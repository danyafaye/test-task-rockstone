(this["webpackJsonptest-task-rockstone-react"]=this["webpackJsonptest-task-rockstone-react"]||[]).push([[0],{23:function(e,n,t){},24:function(e,n,t){},30:function(e,n,t){},32:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(10),s=t.n(i),u=(t(23),t(11)),l=(t(24),t(6)),c=(t(30),t(1));String.prototype.replaceAt=function(e,n){return this.substr(0,e)+n+this.substr(e+n.length)};var r=function(e,n){var t=e;return{finalVarsArr:n.sort((function(e,n){return n.quantities-e.quantities})).map((function(e){var n=e.nominalValues,a=e.quantities,i=Math.floor(t/n),s=i>=a?a:i;return t-=s*n,{key:n,value:s}})),remains:t}},o=function(e){var n=Object(l.c)((function(e){return e.nominalVars.variant}));if(""===e.valOut)return null;var t=e.valOut,a=t.indexOf(","),i=Math.trunc(t.replaceAt(a,".")),s=r(t,n),u=r(i,n);if(t.includes(",")){if("0"===t)return Object(c.jsx)("div",{className:"app-output-form",children:Object(c.jsx)("p",{className:"app-output-sum",children:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. "})});var o=t.slice(a+1);return Object(c.jsxs)("div",{className:"app-output-form",children:[Object(c.jsxs)("p",{className:"app-output-sum",children:["\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430: ",i," \u0440\u0443\u0431., ",o," \u043a\u043e\u043f. "]}),Object(c.jsxs)("p",{className:"app-output-remains",children:["\u041e\u0441\u0442\u0430\u0442\u043e\u043a: ",u.remains,"\u0440. ",o," \u043a\u043e\u043f\u0435\u0435\u043a"]}),Object(c.jsxs)("p",{className:"app-final-output",children:["\u0412\u044b\u0432\u043e\u0434:",u.finalVarsArr.map((function(e){return Object(c.jsxs)("p",{children:["\u041a\u0443\u043f\u044e\u0440\u0430 \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u043e\u043c \u0432 ",e.key,"\u0440. \u0432 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 ",e.value," "]},e.key)}))]})]})}return"0"===t?Object(c.jsx)("div",{className:"app-output-form",children:Object(c.jsx)("p",{className:"app-output-sum",children:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. "})}):Object(c.jsxs)("div",{className:"app-output-form",children:[Object(c.jsxs)("p",{className:"app-output-sum",children:["\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430: ",t," \u0440\u0443\u0431."]}),Object(c.jsxs)("p",{className:"app-output-remains",children:["\u041e\u0441\u0442\u0430\u0442\u043e\u043a: ",s.remains,"\u0440."]}),Object(c.jsxs)("p",{className:"app-final-output",children:["\u0412\u044b\u0432\u043e\u0434:",s.finalVarsArr.map((function(e){return Object(c.jsxs)("p",{children:["\u041a\u0443\u043f\u044e\u0440\u0430 \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u043e\u043c \u0432 ",e.key,"\u0440. \u0432 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 ",e.value," "]},e.key)}))," "]})]})},j=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],i=n[1],s=Object(a.useState)(t),l=Object(u.a)(s,2),r=l[0],j=l[1],p=Object(a.useState)(""),m=Object(u.a)(p,2),b=m[0],d=m[1],O=function(e){var n=e.target.value;d(b+n),i(b+n)};return Object(c.jsxs)("div",{className:"app-input-output-form",children:[Object(c.jsx)("input",{type:"text",className:"app-input",value:b,onChange:function(e){var n=e.target.value.replace(/[^0-9\,]/g,"");d(n),i(n)},onKeyDown:function(e){"Enter"!==e.key&&"NumpadEnter"!==e.key||(e.preventDefault(),e.stopPropagation(),j(t),d(""))}}),Object(c.jsx)("button",{className:"app-input-to-output",onClick:function(){j(t),d("")},children:"\u0412\u042b\u0414\u0410\u0427\u0410"}),Object(c.jsxs)("div",{className:"app-numpad",children:[Object(c.jsxs)("div",{className:"app-numpad-first-block",children:[Object(c.jsx)("button",{value:1,onClick:O,children:"1"}),Object(c.jsx)("button",{value:2,onClick:O,children:"2"}),Object(c.jsx)("button",{value:3,onClick:O,children:"3"})]}),Object(c.jsxs)("div",{className:"app-numpad-second-block",children:[Object(c.jsx)("button",{value:4,onClick:O,children:"4"}),Object(c.jsx)("button",{value:5,onClick:O,children:"5"}),Object(c.jsx)("button",{value:6,onClick:O,children:"6"})]}),Object(c.jsxs)("div",{className:"app-numpad-third-block",children:[Object(c.jsx)("button",{value:7,onClick:O,children:"7"}),Object(c.jsx)("button",{value:8,onClick:O,children:"8"}),Object(c.jsx)("button",{value:9,onClick:O,children:"9"})]}),Object(c.jsxs)("div",{className:"app-numpad-last-block",children:[Object(c.jsx)("button",{value:0,onClick:O,children:"0"}),Object(c.jsx)("button",{value:",",onClick:O,children:","})]})]}),Object(c.jsx)(o,{valOut:r,setInputVal:d})]})},p=(t(32),t(7)),m=function(){return Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)(p.b,{to:"/vars",className:"app-nominalo",activeClassName:"app-active",children:"\u0412\u0410\u0420\u0418\u0410\u041d\u0422\u042b \u041d\u0410\u0411\u041e\u0420\u0410 \u041a\u0423\u041f\u042e\u0420"}),Object(c.jsx)(p.b,{to:"/note",className:"app-note",activeClassName:"app-active",children:"\u0412\u042b\u0417\u041e\u0412 \u0421\u041f\u0420\u0410\u0412\u041a\u0418"}),Object(c.jsx)(p.b,{to:"/app-input",className:"app-input-navi",activeClassName:"app-active",children:"\u0413\u041b\u0410\u0412\u041d\u0410\u042f \u0421\u0422\u0420\u0410\u041d\u0418\u0426\u0410"})]})},b=(t(37),function(){return Object(c.jsx)("footer",{className:"App-footer",children:Object(c.jsx)("p",{children:"Virtual ATM-Machine 2021"})})}),d=t(2),O=(t(38),"APP/VARS"),h={variant:[{nominalValues:5e3,quantities:100},{nominalValues:2e3,quantities:400},{nominalValues:1e3,quantities:1e3},{nominalValues:500,quantities:3e3},{nominalValues:200,quantities:5e3},{nominalValues:100,quantities:8e3},{nominalValues:50,quantities:1e4}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;if(n.type===O){var t=n.newArray;return{variant:t}}return e},v=[{nominalValues:5e3,quantities:100},{nominalValues:2e3,quantities:400},{nominalValues:1e3,quantities:1e3},{nominalValues:500,quantities:3e3},{nominalValues:200,quantities:5e3},{nominalValues:100,quantities:8e3},{nominalValues:50,quantities:1e4}],V=[{nominalValues:5e3,quantities:476},{nominalValues:2e3,quantities:345},{nominalValues:1e3,quantities:6741},{nominalValues:500,quantities:4362},{nominalValues:200,quantities:234},{nominalValues:100,quantities:1643},{nominalValues:50,quantities:3450}],f=[{nominalValues:5e3,quantities:234},{nominalValues:2e3,quantities:678},{nominalValues:1e3,quantities:845},{nominalValues:500,quantities:2451},{nominalValues:200,quantities:9654},{nominalValues:100,quantities:2345},{nominalValues:50,quantities:234}],q=[{nominalValues:5e3,quantities:546},{nominalValues:2e3,quantities:562},{nominalValues:1e3,quantities:2543},{nominalValues:500,quantities:4365},{nominalValues:200,quantities:2154},{nominalValues:100,quantities:124},{nominalValues:50,quantities:342}],k=[{nominalValues:5e3,quantities:2732},{nominalValues:2e3,quantities:347},{nominalValues:1e3,quantities:479},{nominalValues:500,quantities:7556},{nominalValues:200,quantities:3296},{nominalValues:100,quantities:1257},{nominalValues:50,quantities:3854}],N=[{nominalValues:5e3,quantities:73},{nominalValues:2e3,quantities:147},{nominalValues:1e3,quantities:279},{nominalValues:500,quantities:356},{nominalValues:200,quantities:696},{nominalValues:100,quantities:857},{nominalValues:50,quantities:854}],C=function(){var e=Object(l.b)(),n=function(n){e({type:"APP/VARS",newArray:n})};return Object(c.jsxs)("div",{className:"var-buttons",children:[Object(c.jsx)("button",{onClick:function(){return n(v)},children:"1. \u041a\u0443\u043f\u044e\u0440\u044b 5000 = 100; 2000 = 400; 1000 = 1000; 500 = 3000; 200 = 5000; 100 = 8000; 50 = 10000"}),Object(c.jsx)("button",{onClick:function(){return n(V)},children:"2. \u041a\u0443\u043f\u044e\u0440\u044b 5000 = 476; 2000 = 345; 1000 = 6741; 500 = 4362; 200 = 234; 100 = 1643; 50 = 3450"}),Object(c.jsx)("button",{onClick:function(){return n(f)},children:"3. \u041a\u0443\u043f\u044e\u0440\u044b 5000 = 234; 2000 = 678; 1000 = 845; 500 = 2451; 200 = 9654; 100 = 2345; 50 = 234"}),Object(c.jsx)("button",{onClick:function(){return n(q)},children:"4. \u041a\u0443\u043f\u044e\u0440\u044b 5000 = 546; 2000 = 562; 1000 = 2543; 500 = 4365; 200 = 2154; 100 = 124; 50 = 342"}),Object(c.jsx)("button",{onClick:function(){return n(k)},children:"5. \u041a\u0443\u043f\u044e\u0440\u044b 5000 = 2732; 2000 = 347; 1000 = 479; 500 = 7556; 200 = 3296; 100 = 1257; 50 = 3854"}),Object(c.jsx)("button",{onClick:function(){return n(N)},children:"6. \u041a\u0443\u043f\u044e\u0440\u044b 5000 = 73; 2000 = 147; 1000 = 279; 500 = 356; 200 = 696; 100 = 857; 50 = 854"})]})},A=(t(39),function(){var e=Object(l.c)((function(e){return e.nominalVars.variant}));return Object(c.jsx)("p",{className:"note-text",children:e.map((function(e){return Object(c.jsxs)("p",{children:["\u041a\u0443\u043f\u044e\u0440\u0430 \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u043e\u043c \u0432 ",e.nominalValues,"\u0440. \u0432 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435: ",e.quantities,"\u0448\u0442."]})}))})}),y=function(){return Object(c.jsxs)("div",{className:"App-wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsxs)("div",{className:"App-content",children:[Object(c.jsx)(d.a,{exact:!0,from:"/",to:"/app-input"}),Object(c.jsx)(d.b,{path:"/app-input",render:function(){return Object(c.jsx)(j,{})}}),Object(c.jsx)(d.b,{path:"/vars",render:function(){return Object(c.jsx)(C,{})}}),Object(c.jsx)(d.b,{path:"/note",render:function(){return Object(c.jsx)(A,{})}})]}),Object(c.jsx)(b,{})]})},g=t(16),w=Object(g.a)({nominalVars:x}),S=Object(g.b)(w);s.a.render(Object(c.jsx)(p.a,{children:Object(c.jsx)(l.a,{store:S,children:Object(c.jsx)(y,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.80becbcf.chunk.js.map