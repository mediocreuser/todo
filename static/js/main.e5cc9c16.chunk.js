(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{96:function(t,n,e){"use strict";e.r(n);var r,i=e(0),a=e.n(i),c=e(16),o=e.n(c),s=e(4),d=e(3),l=e(57),u=e(61);e.n(u).a.load({google:{families:["Roboto","Share Tech Mono","Material Icons","Material Icons Round"]}});var b=Object(d.b)(r||(r=Object(s.a)(["\n  ","\n  \n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n  \n  html {\n    width:100vw;\n    overflow-x:hidden;\n  }\n  \n  body {\n    margin: 0;\n    padding: 0;\n    \n    height: 100vh;\n    \n    text-align: center;\n    \n    font-family: 'Roboto', sans-serif;\n    color: ",";\n    word-break: break-word;\n    \n    background: ",";\n  }\n  \n  ul,\n  li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n  \n  input {\n  \tfont-family: inherit;\n    font-size: inherit;\n    color: inherit;\n  \n    background: none;\n    border: none;\n    \n    &:focus {\n\t\t  outline: none;\n\t  }\n  }\n  \n  button {\n    background: none;\n    border: none;\n    padding: 0;\n    cursor: pointer;\n        font-family: inherit;\n    font-size: inherit;\n    color: inherit;\n\t}\n  \n  .btn {\n    user-select: none;\n    transition: opacity 0.1s;\n    color: ",";\n    \n    &:hover,\n    &:active {\n      &.btn-delete {\n      color: ",";\n      }\n\n      &.btn-edit {\n      color: ",";\n      }\n    }\n    \n    &-done {\n      color: ",";\n      \n      @media (min-width: 768px) {\n        color: ",";\n    \n        &:hover {\n          color: ",";\n        }\n      }\n    }\n\n    &-close {\n      color: ",";\n      \n      @media (min-width: 768px) {\n            color: ",";\n      \n      &:hover {\n        color: ",";\n      }\n      }\n    }\n  }\n  \n  @keyframes scaleIn {\n\t\tfrom {\n\t\t\tmax-height: 106px;\n\t\t\topacity: 1;\n\t\t}\n\t\tto {\n\t\t\tmax-height: 0;\n\t\t\topacity: 0;\n\t\t}\n\t}\n\n\t@keyframes scaleOut {\n\t\tfrom {\n\t\t\tmax-height: 0;\n\t\t\topacity: 0;\n\t\t}\n\t\tto {\n\t\t\tmax-height: 106px;\n\t\t\topacity: 1;\n\t\t}\n\t}\n"])),l.a,(function(t){return t.theme.text}),(function(t){return t.theme.body}),(function(t){return t.theme.taskGray}),(function(t){return t.theme.lightRed}),(function(t){return t.theme.yellow}),(function(t){return t.theme.lightGreen}),(function(t){return t.theme.green}),(function(t){return t.theme.lightGreen}),(function(t){return t.theme.lightRed}),(function(t){return t.theme.red}),(function(t){return t.theme.lightRed})),h={green:"#bbecc9",lightGreen:"#34d058",transparentLightGreen:"rgba(52,208,88,0.5)",red:"#92242e",lightRed:"#dc3545",yellow:"#fbbc04",body:"#ffffff",nav:"#24292e",text:"#24292e",translucentText:"rgba(36,41,46,0.3)",logo:"#cdd9e5",border:"#e1e4e8",arrow:"#e1e4e8",task:"transparent",taskGray:"#768390"},j={green:"#2d543c",lightGreen:"#3fb950",transparentLightGreen:"rgba(63,185,80,0.5)",red:"#92242e",lightRed:"#dc3545",yellow:"#ffc107",body:"#22272e",nav:"#2d333b",text:"#cdd9e5",translucentText:"rgba(205,217,229,0.5)",logo:"#cdd9e5",border:"#2d333b",arrow:"#586069",task:"#2d333b",taskGray:"#586069"};function f(){return(f=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function m(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var p=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",transform:"scale(64)"});function x(t,n){var e=t.title,r=t.titleId,a=m(t,["title","titleId"]);return i.createElement("svg",f({width:1024,height:1024,viewBox:"0 0 1024 1024",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),e?i.createElement("title",{id:r},e):null,p)}var g,O,v,y,k,w,C,S,N,T,G,I,M,E,R,A,J,D,_,z,L,P,Y,B,F,U,$,K,V,W=i.forwardRef(x),X=(e.p,e(11)),Z=e(7),q=e(45),H=e(25),Q={getTasks:function(){return JSON.parse(sessionStorage.getItem("tasks"))||[]},getCount:function(){return JSON.parse(sessionStorage.getItem("count"))||0},getTheme:function(){return JSON.parse(sessionStorage.getItem("theme"))||"dark"},getTab:function(){return JSON.parse(sessionStorage.getItem("tab"))||"All"},setTheme:function(t){return sessionStorage.setItem("theme",JSON.stringify(t))},setTab:function(t){return sessionStorage.setItem("tab",JSON.stringify(t))},setTasks:function(t){return sessionStorage.setItem("tasks",JSON.stringify(t))},setCount:function(t){return sessionStorage.setItem("count",JSON.stringify(t))}},tt=e(110),nt=Object(H.b)({name:"task",initialState:Q.getTasks(),reducers:{create:{reducer:function(t,n){var e=n.payload;return t.push(e),Q.setTasks(t),t},prepare:function(t){return{payload:{text:t.trim(),date:"added ".concat((new Date).toLocaleString("default",{month:"short",day:"numeric",year:"numeric"})),done:!1,modified:!1,id:Object(tt.a)()}}}},change:function(t,n){var e=n.payload,r=e.id,i=e.value,a=t.find((function(t){return t.id===r}));a&&a.text!==i.trim()&&(a.text=i,a.date="modified ".concat((new Date).toLocaleString("default",{month:"short",day:"numeric",year:"numeric"})),a.modified=!0,Q.setTasks(t))},changeStatus:function(t,n){var e=n.payload.id,r=t.find((function(t){return t.id===e}));r&&(r.done=!r.done,Q.setTasks(t))},remove:function(t,n){var e=n.payload.id,r=t.findIndex((function(t){return t.id===e}));-1!==r&&(t.splice(r,1),Q.setTasks(t))},reverse:function(t){t.reverse()}}}),et=Object(H.b)({name:"count",initialState:Q.getCount(),extraReducers:(g={},Object(q.a)(g,nt.actions.create,(function(t){return t+=1,Q.setCount(t),t})),Object(q.a)(g,nt.actions.remove,(function(t){return t-=1,Q.setCount(t),t})),g)}),rt=Object(H.b)({name:"theme",initialState:Q.getTheme(),reducers:{toggle:function(t,n){var e=n.payload;return t=e,Q.setTheme(e),t}}}),it=Object(H.b)({name:"tub",initialState:Q.getTab(),reducers:{change:function(t,n){return t=n.payload,Q.setTab(t),t}}}),at=nt.actions,ct=at.create,ot=at.change,st=at.changeStatus,dt=at.remove,lt=at.reverse,ut=rt.actions.toggle,bt=it.actions.change,ht=Object(H.a)({reducer:{tasks:nt.reducer,count:et.reducer,tab:it.reducer,theme:rt.reducer}}),jt=e(62),ft=e.n(jt),mt=e(109),pt=e(1),xt=Object(d.d)((function(t){var n=t.className,e=Object(Z.b)(),r=Object(Z.c)((function(t){return t.theme})),i=a.a.useState("dark"===r),c=Object(X.a)(i,2),o=c[0],s=c[1];return Object(pt.jsxs)("div",{className:n,children:[Object(pt.jsx)("span",{className:"material-icons-round",children:"light_mode"}),Object(pt.jsx)(gt,{checked:o,onChange:function(t){s(t.target.checked),e(ut(o?"light":"dark"))},inputProps:{"aria-label":"primary checkbox"}}),Object(pt.jsx)("span",{className:"material-icons-round",children:"nightlight_round"})]})}))(O||(O=Object(s.a)(["\n\tposition: absolute;\n\tright: 0;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\n\tdisplay: flex;\n\talign-items: center;\n\tcolor: #cdd9e5;\n\n\tspan {\n\t\tfont-size: 22px;\n\t}\n"]))),gt=ft()({switchBase:{color:"#cdd9e5","&$checked":{color:"#3fb950","&:hover":{backgroundColor:"rgba(63,185,80,0.05)"}},"&$checked + $track":{backgroundColor:"#3fb950"}},checked:{},track:{}})(mt.a),Ot=Object(d.d)((function(t){var n=t.className;return Object(pt.jsx)("div",{className:n,children:Object(pt.jsxs)(vt,{children:[Object(pt.jsx)(yt,{href:"https://github.com/mediocreuser/todo",target:"_blank",rel:"noreferrer",children:Object(pt.jsx)(W,{})}),Object(pt.jsx)(xt,{})]})})}))(v||(v=Object(s.a)(["\n\twidth: 100%;\n\tpadding: 15px;\n\tbackground: ",";\n"])),(function(t){return t.theme.nav})),vt=d.d.div(y||(y=Object(s.a)(["\n\tposition: relative;\n\n\tmargin: 0 auto;\n\tmax-width: 535px;\n"]))),yt=d.d.a(k||(k=Object(s.a)(["\n\tdisplay: inline-block;\n\n\tsvg {\n\t\tfill: ",";\n\t\twidth: 40px;\n\t\theight: 40px;\n\t}\n\n\t&:hover svg {\n\t\topacity: 70%;\n\t}\n"])),(function(t){return t.theme.logo})),kt=e(38),wt=e.n(kt),Ct=Object(d.d)((function(t){var n=t.className,e=Object(Z.c)((function(t){return t.count}));return Object(pt.jsxs)("div",{className:wt()(n,{haveTasks:!e,noTasks:e}),children:[Object(pt.jsx)(St,{children:"Todo App"}),Object(pt.jsxs)("div",{children:["Write, review and manage your ",Object(pt.jsx)(Nt,{children:"tasks"}),"."]})]})}))(w||(w=Object(s.a)(["\n\toverflow: hidden;\n\n\t&.haveTasks {\n\t\tanimation: scaleOut 0.5s ease-out forwards;\n\t}\n\n\t&.noTasks {\n\t\tanimation: scaleIn 0.5s ease-out forwards;\n\t}\n"]))),St=d.d.h1(C||(C=Object(s.a)(["\n\tpadding: 20px;\n\n\tfont-family: 'Share Tech Mono', sans-serif;\n\tfont-size: 50px;\n"]))),Nt=d.d.span(S||(S=Object(s.a)(["\n\tcolor: ",";\n"])),(function(t){return t.theme.lightGreen})),Tt=Object(d.d)((function(t){var n=t.count,e=t.className;return Object(pt.jsx)("div",{className:e,children:0===n?Object(pt.jsx)("div",{children:"You don't have tasks yet."}):1===n?Object(pt.jsxs)("div",{children:["You have ",Object(pt.jsx)(Gt,{children:n})," task"]}):Object(pt.jsxs)("div",{children:["You have ",Object(pt.jsx)(Gt,{children:n})," tasks"]})})}))(N||(N=Object(s.a)(["\n\tposition: relative;\n\tpadding: 20px 0;\n\n\t&:after {\n\t\tcontent: '';\n\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\n\t\theight: 1px;\n\t\twidth: 90%;\n\n\t\tbackground: ",";\n\t\tbackground: linear-gradient(\n\t\t\t90deg,\n\t\t\ttransparent 0%,\n\t\t\t"," 50%,\n\t\t\ttransparent 100%\n\t\t);\n\n\t\t@media (min-width: 576px) {\n\t\t\twidth: 100%;\n\t\t\tmax-width: 90%;\n\t\t}\n\n\t\t@media (min-width: 768px) {\n\t\t\twidth: 100%;\n\t\t\tmax-width: 535px;\n\t\t}\n\t}\n"])),(function(t){return t.theme.border}),(function(t){return t.theme.border})),Gt=d.d.span(T||(T=Object(s.a)(["\n\tcolor: ",";\n"])),(function(t){return t.theme.lightGreen})),It=Object(d.d)((function(t){var n=t.count,e=t.provideCurrentValue,r=t.className,a=Object(Z.b)(),c=Object(i.useState)(""),o=Object(X.a)(c,2),s=o[0],d=o[1],l=Object(i.useState)(!0),u=Object(X.a)(l,2),b=u[0],h=u[1];return Object(pt.jsx)("div",{className:r,children:Object(pt.jsxs)(Mt,{onSubmit:function(t){t.preventDefault(),a(ct(s)),e(""),d(""),h(!0)},children:[Object(pt.jsx)(Et,{value:s,onChange:function(t){var n=t.target.value;e(n),h(!n.trim().length),d(n)},placeholder:n?"Add new task or filter":"Write your first task"}),Object(pt.jsx)(Rt,{disabled:b,children:Object(pt.jsx)("span",{className:"material-icons-round",children:"arrow_right_alt"})})]})})}))(G||(G=Object(s.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding-top: 30px;\n"]))),Mt=d.d.form(I||(I=Object(s.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tborder: 1px solid ",";\n\tborder-radius: 10px;\n\tbackground: none;\n\n\twidth: 100%;\n\tmax-width: 300px;\n"])),(function(t){return t.theme.border})),Et=d.d.input.attrs({type:"text"})(M||(M=Object(s.a)(["\n\twidth: 100%;\n\tpadding: 10px 0 10px 14px;\n"]))),Rt=d.d.button(E||(E=Object(s.a)(["\n\tpadding: 0 10px 0 0;\n\n\t&:disabled span {\n\t\tcolor: ",";\n\t}\n\n\tspan {\n\t\tcolor: ",";\n\t\ttransition: color 0.5s;\n\t}\n"])),(function(t){return t.theme.arrow}),(function(t){return t.theme.lightGreen})),At=Object(d.d)((function(t){var n=t.activeTab,e=t.setActiveTab,r=t.className,i=Object(Z.b)(),a=function(t){e(t.target.textContent),i(bt(t.target.textContent))};return Object(pt.jsxs)("div",{className:r,children:[Object(pt.jsx)(Jt,{onClick:a,className:"All"===n?"active":null,children:"All"}),Object(pt.jsx)(Jt,{onClick:a,className:"Done"===n?"active":null,children:"Done"}),Object(pt.jsx)(Jt,{onClick:a,className:"Actual"===n?"active":null,children:"Actual"}),Object(pt.jsx)(Dt,{onClick:function(){return i(lt())},children:Object(pt.jsx)("span",{className:"material-icons-round btn btn-reverse",children:"import_export"})})]})}))(R||(R=Object(s.a)(["\n\tposition: relative;\n\n\tmargin: 0 auto;\n\tpadding-top: 20px;\n\n\twidth: 100%;\n\tmax-width: 250px;\n"]))),Jt=d.d.button(A||(A=Object(s.a)(["\n\tpadding: 0 10px;\n\n\t&:active > span {\n\t\tcolor: ",";\n\t}\n\n\t@media (min-width: 768px) {\n\t\t&:hover,\n\t\t&:hover > span {\n\t\t\tcolor: ",";\n\t\t}\n\n\t\t&:active,\n\t\t&:active > span {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n\n\t&.active,\n\t&.active:hover {\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.theme.lightGreen}),(function(t){return t.theme.transparentLightGreen}),(function(t){return t.theme.lightGreen}),(function(t){return t.theme.lightGreen})),Dt=Object(d.d)(Jt)(J||(J=Object(s.a)(["\n\tposition: absolute;\n\tbottom: -50%;\n\ttransform: translateY(-50%);\n\tright: 0;\n"]))),_t=d.d.div(D||(D=Object(s.a)(["\n\tpadding-right: 15px;\n\n\tlabel {\n\t\tdisplay: block;\n\t\tposition: relative;\n\n\t\twidth: 20px;\n\t\theight: 20px;\n\n\t\tborder: 3px solid ",";\n\t\tborder-radius: 7px;\n\t\tcursor: pointer;\n\t\tbackground-color: ",";\n\n\t\ttransition: border-color 0.1s, background-color 0.1s;\n\n\t\t&.active {\n\t\t\tborder-color: ",";\n\t\t\tbackground-color: ",";\n\n\t\t\t.btn {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\n\t\t.btn {\n\t\t\tfont-size: 20px;\n\t\t\topacity: 0;\n\t\t\tcolor: white;\n\t\t\tposition: absolute;\n\t\t\tleft: 50%;\n\t\t\ttop: 50%;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t}\n\n\t\t@media (min-width: 768px) {\n\t\t\t&:hover {\n\t\t\t\tborder-color: ",";\n\t\t\t\tbackground-color: transparent;\n\t\t\t}\n\n\t\t\t&.active:hover {\n\t\t\t\tborder-color: ",";\n\t\t\t\tbackground-color: ",";\n\t\t\t}\n\t\t}\n\n\t\tinput {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"])),(function(t){return t.theme.green}),(function(t){return t.theme.green}),(function(t){return t.theme.lightGreen}),(function(t){return t.theme.lightGreen}),(function(t){return t.theme.lightGreen}),(function(t){return t.theme.green}),(function(t){return t.theme.green})),zt=function(t){var n=t.id,e=t.completed,r=Object(Z.b)();return Object(pt.jsx)(_t,{children:Object(pt.jsxs)("label",{className:e?"active":null,tabIndex:"0",onKeyPress:function(t){"Space"!==t.code&&"Enter"!==t.code||r(st({id:n}))},children:[Object(pt.jsx)("span",{className:"material-icons-round btn btn-done",children:"done"}),Object(pt.jsx)("input",{type:"checkbox",checked:e,onChange:function(){return r(st({id:n}))}})]})})},Lt=Object(d.d)((function(t){var n=t.setEditMode,e=t.id,r=t.text,a=t.className,c=Object(Z.b)(),o=Object(i.useState)(r),s=Object(X.a)(o,2),d=s[0],l=s[1],u=Object(i.useState)(!1),b=Object(X.a)(u,2),h=b[0],j=b[1];return Object(pt.jsxs)("div",{className:a,children:[Object(pt.jsxs)(Pt,{onSubmit:function(t){t.preventDefault(),d.trim().length&&(c(ot(d,e)),n(!1))},children:[Object(pt.jsx)(Yt,{value:d,onChange:function(t){var n=t.target.value;j(!n.trim().length),l(n)},onKeyUp:function(t){return n("Escape"!==t.code)},onBlur:function(t){var r=t.target.value;0!==r.length&&(c(ot({value:d,id:e})),l(r)),n(!1)}}),Object(pt.jsx)("button",{disabled:h,children:Object(pt.jsx)("span",{className:"material-icons-round btn btn-done",children:"done"})})]}),Object(pt.jsx)("button",{onClick:function(){l(d),n(!1),j(!1)},title:"Esc",children:Object(pt.jsx)("span",{className:"material-icons-round btn btn-close",children:"close"})})]})}))(_||(_=Object(s.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n\theight: 20px;\n\n\tbutton:disabled .btn-done {\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.theme.taskGray})),Pt=d.d.form(z||(z=Object(s.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tflex: 1;\n"]))),Yt=d.d.input.attrs({type:"text",autoFocus:!0})(L||(L=Object(s.a)(["\n\twidth: 100%;\n\tmargin-left: 33px;\n"]))),Bt=d.d.div(P||(P=Object(s.a)(["\n\t.btn-edit {\n\t\tcolor: ",";\n\t}\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\n\theight: 100%;\n\n\tposition: absolute;\n\ttop: 50%;\n\tright: -9%;\n\ttransform: translateY(-50%);\n\n\t@media (min-width: 768px) {\n\t\tright: -35px;\n\t}\n"])),(function(t){var n=t.editMode,e=t.theme;return n&&e.yellow})),Ft=function(t){var n=t.setEditMode,e=t.id,r=t.editMode,i=Object(Z.b)();return Object(pt.jsxs)(Bt,{editMode:r,children:[Object(pt.jsx)("button",{onClick:function(){return n(!0)},children:Object(pt.jsx)("span",{className:"material-icons btn btn-edit",children:"edit_note"})}),Object(pt.jsx)("button",{onClick:function(){return i(dt({id:e}))},children:Object(pt.jsx)("span",{className:"material-icons btn btn-delete",children:"delete_outline"})})]})},Ut=d.d.div(Y||(Y=Object(s.a)(["\n\tpadding: 5px 0 0 35px;\n\n\tfont-size: 12px;\n\tcolor: ",";\n\ttext-align: left;\n"])),(function(t){return t.theme.taskGray})),$t=function(t){var n=t.date;return Object(pt.jsx)(Ut,{className:"date",children:n})},Kt=a.a.memo((function(t){var n=t.task,e=t.className,r=Object(i.useState)(!1),a=Object(X.a)(r,2),c=a[0],o=a[1];return Object(pt.jsxs)("li",{className:wt()(e,{done:n.done}),children:[Object(pt.jsxs)(Wt,{editMode:c,children:[Object(pt.jsxs)(Xt,{children:[!c&&Object(pt.jsxs)(Zt,{children:[Object(pt.jsx)(zt,{id:n.id,completed:n.done}),Object(pt.jsx)("div",{children:n.text})]}),c&&Object(pt.jsx)(Lt,{setEditMode:o,id:n.id,text:n.text})]}),Object(pt.jsx)($t,{date:n.date})]}),Object(pt.jsx)(Ft,{editMode:c,setEditMode:o,id:n.id})]})})),Vt=Object(d.d)(Kt)(B||(B=Object(s.a)(["\n\tposition: relative;\n\n\tdisplay: flex;\n\tmargin-bottom: 30px;\n\n\twidth: 90%;\n\n\t@media (min-width: 576px) {\n\t\twidth: 100%;\n\t\tmax-width: 90%;\n\t}\n\n\t@media (min-width: 768px) {\n\t\twidth: 100%;\n\t\tmax-width: 535px;\n\t}\n\n\t&.done {\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.theme.translucentText})),Wt=d.d.div(F||(F=Object(s.a)(["\n\tmargin: 0 auto;\n\twidth: 100%;\n\tpadding: 20px;\n\n\tborder-radius: 10px;\n\n\tbackground-color: ",";\n\n\tborder: 1px solid\n\t\t",";\n"])),(function(t){return t.editMode?"transparent":function(t){return t.theme.task}}),(function(t){return t.editMode?function(t){return t.theme.yellow}:function(t){return t.theme.border}})),Xt=d.d.div(U||(U=Object(s.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\n\tmin-height: 20px;\n"]))),Zt=d.d.div($||($=Object(s.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\ttext-align: left;\n"]))),qt=d.d.ul(K||(K=Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\n\tpadding-top: 30px;\n\n\t@media (min-width: 768px) {\n\t\talign-items: center;\n\t}\n"]))),Ht=function(t){var n=t.tasks,e=t.value,r=Object(Z.c)((function(t){return t.tab})),a=Object(i.useState)(r),c=Object(X.a)(a,2),o=c[0],s=c[1];return Object(pt.jsxs)("div",{children:[Object(pt.jsx)(At,{activeTab:o,setActiveTab:s}),Object(pt.jsx)(qt,{children:n.filter((function(t){return t.text.toUpperCase().includes(e.toUpperCase())})).filter((function(t){switch(o){case"Done":return!0===t.done;case"Actual":return!1===t.done;default:return t}})).map((function(t){return Object(pt.jsx)(Vt,{task:t},t.id)}))})]})},Qt=function(){var t=Object(Z.c)((function(t){return t.count})),n=Object(Z.c)((function(t){return t.tasks})),e=Object(i.useState)(""),r=Object(X.a)(e,2),a=r[0],c=r[1];return Object(pt.jsxs)("main",{children:[Object(pt.jsx)(It,{count:t,provideCurrentValue:function(t){return c(t)}}),Object(pt.jsx)(Tt,{count:t}),!!t&&Object(pt.jsx)(Ht,{tasks:n,value:a})]})};var tn=d.d.div(V||(V=Object(s.a)(["\n\twidth: 100%;\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\tpadding: 0 15px;\n"]))),nn=function(){var t=Object(Z.c)((function(t){return t.theme}));return Object(pt.jsxs)(d.a,{theme:"light"===t?h:j,children:[Object(pt.jsx)(b,{}),Object(pt.jsxs)("div",{children:[Object(pt.jsx)(Ot,{}),Object(pt.jsxs)(tn,{children:[Object(pt.jsx)(Ct,{}),Object(pt.jsx)(Qt,{})]})]})]})},en=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,111)).then((function(n){var e=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;e(t),r(t),i(t),a(t),c(t)}))};o.a.render(Object(pt.jsx)(a.a.StrictMode,{children:Object(pt.jsx)(Z.a,{store:ht,children:Object(pt.jsx)(nn,{})})}),document.getElementById("root")),en()}},[[96,1,2]]]);
//# sourceMappingURL=main.e5cc9c16.chunk.js.map