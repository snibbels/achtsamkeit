(this.webpackJsonpachtsamkeit=this.webpackJsonpachtsamkeit||[]).push([[0],{16:function(e,t,n){e.exports=n(33)},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=n(1),u=n(3),l=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",className:"arrow"},r.a.createElement("path",{d:"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"}))},s=n(4),d=n(2),m=n(5),v=n(6),f=function(e){return function(t){var n=new Date(t);return n.setDate(n.getDate()+e),n.getTime()}},h=f(1),g=f(-1),p=function(e){return new Date(e).setHours(0,0,0,0)},b=function(e){var t,n,a=(t=[0,100],n=[240,360],function(e){var a=Object(v.a)(t,2),r=a[0],c=a[1],o=Object(v.a)(n,2),i=o[0];return(e-r)/c*(o[1]-i)+i})(e);return"hsl(".concat(a,", 100%, 75%)")},j=n(15),E=n(29).v4,k="todo/task_created",w="todo/task_deleted",O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=Object(d.a)(t,["type"]);switch(n){case k:return[].concat(Object(j.a)(e),[a.id]);case w:return e.filter((function(e){return e!==a.id}));default:return e}},y=Object(m.c)({entries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=Object(d.a)(t,["type"]);switch(n){case"journal/update":return Object(i.a)({},e,Object(s.a)({},a.timestamp,a.item));case k:case w:var r=e[a.timestamp]||{};return Object(i.a)({},e,Object(s.a)({},a.timestamp,Object(i.a)({},r,{todos:O(r.todos,Object(i.a)({type:n},a))})));default:return e}},current:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=Object(d.a)(t,["type"]);switch(n){case"journal/date_set":return a.date;default:return e}}}),N=Object(u.b)((function(e){return{date:e.journal.current}}),(function(e){return{setDate:function(t){return e(function(e){return{type:"journal/date_set",date:p(e)}}(t))}}}))((function(e){var t=e.date,n=e.setDate,c=void 0===n?function(e){return e}:n,o=function(){c(Date.now())};return Object(a.useEffect)(o,[]),r.a.createElement("div",{className:"date-selector"},r.a.createElement("div",{className:"left",onClick:function(){return c(g(t))}},r.a.createElement(l,null)),r.a.createElement("div",{onClick:o,className:"date"},new Date(t).toLocaleDateString()),r.a.createElement("div",{className:"right",onClick:function(){return c(h(t))}},r.a.createElement(l,null)))})),C=function(e){var t=e.value,n=e.setValue,a=void 0===n?function(e){return e}:n;return r.a.createElement("textarea",{value:t,onChange:function(e){return a(e.target.value)}})},D=function(e){return r.a.createElement("div",{className:"moment"},r.a.createElement("h2",null,"Glasmomente"),r.a.createElement(C,e))},S=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h2",null,"Notizen"),r.a.createElement(C,e))},x=function(e){var t=e.value,n=e.setValue,a=void 0===n?function(e){return e}:n;return r.a.createElement("input",{type:"range",className:"range-input",value:t,onChange:function(e){return a(e.target.value)}})},T=function(e){var t=e.value,n=void 0===t?50:t,a=Object(d.a)(e,["value"]);return r.a.createElement("div",{className:"productivity"},r.a.createElement("h2",null,"Produktivit\xe4t"),r.a.createElement("div",{style:{backgroundColor:b(n)}},r.a.createElement(x,Object.assign({value:n},a)),r.a.createElement("h3",null,n)))},V=(n(32),function(e){var t=e.props;return r.a.createElement("svg",Object.assign({},t,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}),r.a.createElement("path",{d:"M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"}))}),W=function(e){var t=e.value,n=e.setValue,a=void 0===n?function(e){return e}:n,c=Object(d.a)(e,["value","setValue"]);return r.a.createElement("input",Object.assign({},c,{type:"text",className:"text-input",value:t,onChange:function(e){return a(e.target.value)}}))},_=function(e){var t=e.id,n=e.content,c=e.done,o=void 0!==c&&c,i=e.setContent,u=void 0===i?function(e){return e}:i,l=e.onToggleDone,s=void 0===l?function(e){return e}:l,d=e.onDelete,m=void 0===d?function(e){return e}:d,f=Object(a.useState)(!1),h=Object(v.a)(f,2),g=h[0],p=h[1];return Object(a.useEffect)((function(){n||g||m(t)}),[n,g]),g?r.a.createElement("div",{className:"task edit"},r.a.createElement(W,{value:n,setValue:function(e){return u(t,e)}}),r.a.createElement("div",{onClick:function(){return p(!g)},className:"button"},r.a.createElement("div",{className:"checkmark"},"\xa0")),r.a.createElement("div",{onClick:function(){return m(t)},className:"delete button"},r.a.createElement(V,null))):r.a.createElement("div",{className:"task ".concat(o?"done":"")},r.a.createElement("div",{onClick:function(){return p(!g)}},n),r.a.createElement("div",{onClick:function(){return s(t,!o)},className:"button checkbox"},r.a.createElement("div",{className:"checkmark"},"\xa0")))},A=Object(u.b)((function(e){return Object(i.a)({},e.journal,{tasks:e.todos})}),(function(e){return{createTask:function(t,n){return e(function(e,t){return{type:k,timestamp:e,content:t,id:E(),done:!1}}(t,n))},onDelete:function(t){return function(n){return e(function(e,t){return{type:w,id:t,timestamp:e}}(t,n))}},toggleDone:function(t,n){return e(function(e,t){return{type:"todo/task_done",id:e,done:t}}(t,n))},editTask:function(t,n){return e(function(e,t){return{type:"todo/task_edited",id:e,content:t}}(t,n))}}}))((function(e){var t=e.current,n=e.entries,c=e.tasks,o=e.createTask,i=void 0===o?function(e){return e}:o,u=Object(d.a)(e,["current","entries","tasks","createTask"]),l=(n[t]||{}).todos||[],s=Object(a.useState)(),m=Object(v.a)(s,2),f=m[0],h=m[1];return r.a.createElement("div",{className:"todo-list"},r.a.createElement("h2",null,"Todo"),l.map((function(e){return r.a.createElement(_,Object.assign({onToggleDone:u.toggleDone,setContent:u.editTask,onDelete:u.onDelete(t)},c[e],{id:e,key:e}))})),l.length<5&&r.a.createElement("div",{className:"task"},r.a.createElement(W,{placeholder:"neue Aufgabe",setValue:h,value:f}),r.a.createElement("div",{className:"add button",onClick:function(){f&&i(t,f),h("")}},"+")))})),z=Object(u.b)((function(e){return{entry:e.journal.entries[e.journal.current],timestamp:e.journal.current}}),(function(e){return{updateFactory:function(t){return function(n){return e({type:"journal/update",timestamp:t,item:n})}}}}))((function(e){var t=e.timestamp,n=e.entry,a=void 0===n?{}:n,c=e.updateFactory,o=(void 0===c?function(e){return e}:c)(t);return r.a.createElement("div",{className:"app"},r.a.createElement(N,null),r.a.createElement(D,{value:a.moment||"",setValue:function(e){return o(Object(i.a)({},a,{moment:e}))}}),r.a.createElement(A,null),r.a.createElement(T,{value:a.productivity||"",setValue:function(e){return o(Object(i.a)({},a,{productivity:e}))}}),r.a.createElement(S,{value:a.note||"",setValue:function(e){return o(Object(i.a)({},a,{note:e}))}}))})),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var I=localStorage.getItem("achtsamkeit-data"),L=I?JSON.parse(I):void 0,P=Object(m.d)(Object(m.c)({journal:y,todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=Object(d.a)(t,["type"]);switch(n){case k:return Object(i.a)({},e,Object(s.a)({},a.id,a));case"todo/task_edited":case"todo/task_done":return Object(i.a)({},e,Object(s.a)({},a.id,Object(i.a)({},e[a.id],{},a)));case w:return delete e[a.id],e;default:return e}}}),L,Object(m.a)((function(e){return function(t){return function(n){var a=n.type,r=Object(d.a)(n,["type"]);console.log("dispatch",a,r),t(n),console.log("next state",e.getState())}}})));P.subscribe((function(){var e=JSON.stringify(P.getState());localStorage.setItem("achtsamkeit-data",e)})),window.store=P;var R=r.a.createElement(u.a,{store:P},r.a.createElement(z,null));o.a.render(R,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/achtsamkeit",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/achtsamkeit","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.487eb1c0.chunk.js.map