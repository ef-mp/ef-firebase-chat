(this["webpackJsonpfirebase-chat"]=this["webpackJsonpfirebase-chat"]||[]).push([[0],{15:function(e,t,a){e.exports=a(29)},20:function(e,t,a){},21:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),c=a.n(i),o=(a(20),a(2)),s=(a(21),a(1)),u=a.n(s),l=(a(22),a(26),a(13)),m=a(7),d=a(8),f=a.n(d),p=a(14),h=function(e){var t=e.text,a=e.uid===window.auth.currentUser.uid?"sent":"received";return r.a.createElement("div",{className:"message ".concat(a)},r.a.createElement("p",{className:"chat-message"},t))},b=function(){var e=window.firestore.collection("messages"),t=e.orderBy("createdAt").limit(25),a=Object(m.a)(t,{idField:"id"}),i=Object(o.a)(a,1)[0],c=Object(n.useState)(""),s=Object(o.a)(c,2),u=s[0],l=s[1],d=Object(n.useRef)(),b=function(){var t=Object(p.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),u){t.next=3;break}return t.abrupt("return");case 3:return n=window.auth.currentUser.uid,t.next=6,e.add({text:u,createdAt:window.firebase.firestore.FieldValue.serverTimestamp(),uid:n});case 6:l("");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){d.current.scrollIntoView({behavior:"smooth"})}),[i]),r.a.createElement("div",{className:"chat-room"},r.a.createElement("main",null,r.a.createElement("div",{className:"messages"},i&&i.map((function(e){return r.a.createElement(h,{key:e.id,uid:e.uid,text:e.text})}))),r.a.createElement("span",{ref:d})),r.a.createElement("form",{onSubmit:b,action:""},r.a.createElement("input",{type:"text",value:u,onChange:function(e){var t=e.target;l(t.value)}}),r.a.createElement("button",{type:"submit"},"send message")))},w=function(){return r.a.createElement("button",{className:"sign-in",onClick:function(){var e=new u.a.auth.GoogleAuthProvider;window.auth.signInWithPopup(e)}},"SignIn")},v=function(){return r.a.createElement("button",{className:"sign-out",onClick:function(){return window.auth.signOut()}},"Sign Out")};window.firebase=u.a,u.a.initializeApp({apiKey:"AIzaSyDdVnvj1i5VgUlL3hptGg1G4arMHuTym_E",authDomain:"ef-firebase-chat.firebaseapp.com",databaseURL:"https://ef-firebase-chat.firebaseio.com",projectId:"ef-firebase-chat",storageBucket:"ef-firebase-chat.appspot.com",messagingSenderId:"745352694641",appId:"1:745352694641:web:d679749f42efb1013dc4d0"});var g=window.auth=u.a.auth();window.firestore=u.a.firestore();var E=function(){var e=Object(l.a)(g),t=Object(o.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,t&&r.a.createElement(v,null)),r.a.createElement("section",null,t?r.a.createElement(b,null):r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.93c93549.chunk.js.map