(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a,n=c(11),s=c.n(n),r=c(10),o=c(19),i=c(8),l=c(16),d=c(17),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(4);!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(a||(a={}));var O=function(e){return{type:"filter/SET_QUERY",payload:e}},f=function(e){return{type:"filter/SET_STATUS",payload:e}},x=function(){return{type:"filter/SET_CLEAR"}},m={query:"",status:a.ALL},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/SET_STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});case"filter/SET_CLEAR":return Object(h.a)(Object(h.a)({},e),{},{query:""});default:return e}},v=c(7),y=function(e){return{type:"todos/SET_ADD",payload:e}},N=[],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return"todos/SET_ADD"===t.type?[].concat(Object(v.a)(t.payload),Object(v.a)(e)):Object(v.a)(e)},T=Object(i.combineReducers)({currentTodo:b,filter:p,todos:E}),g=Object(i.createStore)(T,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),S=c(12),k=c(3),C=c(6),w=c.n(C),L=c(0),A=(c(28),c(29),c(18)),_=c.n(A),D=r.b,M=r.c,R=c(1),q=function(e){var t=e.todos,c=e.errorMessage,a=D(),n=M((function(e){return e.currentTodo}));return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(R.jsx)("thead",{children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{children:"#"}),Object(R.jsx)("th",{children:Object(R.jsx)("span",{className:"icon",children:Object(R.jsx)("i",{className:"fas fa-check"})})}),Object(R.jsx)("th",{children:"Title"}),Object(R.jsx)("th",{children:" "})]})}),Object(R.jsx)("tbody",{children:c?Object(R.jsx)("td",{children:c}):t.map((function(e){return Object(R.jsxs)("tr",{"data-cy":"todo",children:[Object(R.jsx)("td",{className:"is-vcentered",children:e.id}),Object(R.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(R.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(R.jsx)("i",{className:"fas fa-check"})})}),Object(R.jsx)("td",{className:"is-vcentered is-expanded",children:Object(R.jsx)("p",{className:_()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(R.jsx)("td",{className:"has-text-right is-vcentered",children:Object(R.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){var c=t.find((function(t){return t.id===e}));c&&a(u(c))}(e.id)},children:Object(R.jsx)("span",{className:"icon",children:n&&n.id===e.id?Object(R.jsx)("i",{className:"far fa-eye-slash"}):Object(R.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})})},I=function(){var e=D(),t=M((function(e){return e.filter})),c=t.status,n=t.query;return Object(R.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(R.jsx)("p",{className:"control",children:Object(R.jsx)("span",{className:"select",children:Object(R.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(t){e(f(t.target.value))},children:[Object(R.jsx)("option",{value:a.ALL,children:"All"}),Object(R.jsx)("option",{value:a.ACTIVE,children:"Active"}),Object(R.jsx)("option",{value:a.COMPLETED,children:"Completed"})]})})}),Object(R.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(R.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(t){e(O(t.target.value))}}),Object(R.jsx)("span",{className:"icon is-left",children:Object(R.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(R.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:n&&Object(R.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(x())},"aria-label":"delete"})})]})]})};function U(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(31);var P=function(){return Object(R.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(R.jsx)("div",{className:"Loader__content"})})},V=function(){var e=D(),t=M((function(e){return e.currentTodo})),c=Object(L.useState)(null),a=Object(k.a)(c,2),n=a[0],s=a[1],r=Object(L.useState)("User not found"),o=Object(k.a)(r,2),i=o[0],l=o[1],d=Object(L.useState)(!0),u=Object(k.a)(d,2),b=u[0],h=u[1];Object(L.useEffect)((function(){var e=function(){var e=Object(S.a)(w.a.mark((function e(){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=7;break}return e.next=4,a=t.userId,U("/users/".concat(a));case 4:c=e.sent,s(c),h(!1);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0 instanceof Error&&l(e.t0.message),h(!1);case 13:case"end":return e.stop()}var a}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var O=t||{},f=O.id,x=O.title,m=O.completed,p=n||{},v=p.email,y=p.name;return Object(R.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(R.jsx)("div",{className:"modal-background"}),b?Object(R.jsx)(P,{}):Object(R.jsxs)("div",{className:"modal-card",children:[Object(R.jsxs)("header",{className:"modal-card-head",children:[Object(R.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(f)}),Object(R.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){e(j())},"aria-label":"delete"})]}),Object(R.jsxs)("div",{className:"modal-card-body",children:[Object(R.jsx)("p",{className:"block","data-cy":"modal-title",children:x}),"User not found"===i&&n?Object(R.jsx)("span",{children:Object(R.jsxs)("p",{className:"block","data-cy":"modal-user",children:[m?Object(R.jsx)("strong",{className:"has-text-success",children:"Done "}):Object(R.jsx)("strong",{className:"has-text-danger",children:"Planned "}),Object(R.jsx)("a",{href:"mailto:".concat(v),children:"by ".concat(y)})]})}):Object(R.jsx)("p",{children:i})]})]})]})},B=function(){var e=D(),t=M((function(e){return e.todos})),c=M((function(e){return e.filter})),n=M((function(e){return e.currentTodo})),s=Object(L.useState)(!0),r=Object(k.a)(s,2),o=r[0],i=r[1],l=Object(L.useState)(""),d=Object(k.a)(l,2),u=d[0],j=d[1];Object(L.useEffect)((function(){var t=function(){var t=Object(S.a)(w.a.mark((function t(){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U("/todos");case 3:c=t.sent,e(y(c)),i(!1),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0 instanceof Error&&j(t.t0.message),i(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var b=Object(L.useMemo)((function(){var e=Object(v.a)(t);switch(c.status){case a.ACTIVE:e=t.filter((function(e){return!e.completed}));break;case a.COMPLETED:e=t.filter((function(e){return e.completed}))}if(c.query){var n=c.query.toLowerCase();e=e.filter((function(e){return e.title.toLowerCase().includes(n)}))}return e}),[t,c]);return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{className:"section",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:"box",children:[Object(R.jsx)("h1",{className:"title",children:"Todos:"}),Object(R.jsx)("div",{className:"block",children:Object(R.jsx)(I,{})}),Object(R.jsxs)("div",{className:"block",children:[o&&Object(R.jsx)(P,{}),Object(R.jsx)(q,{errorMessage:u,todos:b})]})]})})}),n&&Object(R.jsx)(V,{})]})},F=function(){return Object(R.jsx)(r.a,{store:g,children:Object(R.jsx)(o.a,{children:Object(R.jsx)(B,{})})})};s.a.render(Object(R.jsx)(F,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1f78af73.chunk.js.map