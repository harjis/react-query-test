(this["webpackJsonpreact-query-test"]=this["webpackJsonpreact-query-test"]||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),i=n(39),s=n.n(i),a=(n(73),n(74),n(51)),u=n(21),o=n(5),d=n.n(o),j=n(31),l={"Content-Type":"application/json"},b=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/post",{method:"GET",headers:l});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/post",{method:"PATCH",headers:l,body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=n(8),O=n(7),v=function(){var e=Object(u.useQueryClient)(),t=Object(r.useState)(""),n=Object(p.a)(t,2),c=n[0],i=n[1],s=Object(u.useMutation)("updatePost",h,{onSuccess:function(){e.invalidateQueries("post")}});return Object(O.jsxs)("div",{children:[s.isLoading?Object(O.jsx)("div",{children:"Updating name..."}):null,s.isSuccess?Object(O.jsx)("div",{children:"Name Updated!"}):null,"Name:"," ",Object(O.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)}}),Object(O.jsx)("button",{onClick:function(){s.mutate({name:c})},children:"Update"})]})},f=function(){var e=Object(u.useQuery)("post",b),t=e.data;return e.isLoading?Object(O.jsxs)("div",{style:{height:500,width:500},children:[Object(O.jsx)(a.a,{height:"2rem"}),Object(O.jsx)("br",{}),Object(O.jsx)(a.a,{count:2})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:null===t||void 0===t?void 0:t.name}),Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(O.jsxs)("div",{children:["Id: ",null===t||void 0===t?void 0:t.id]}),Object(O.jsxs)("div",{children:["Published at: ",null===t||void 0===t?void 0:t.publishedAt]})]}),Object(O.jsx)("hr",{}),Object(O.jsx)(v,{})]})},x=new u.QueryClient;var y=function(){return Object(O.jsx)(u.QueryClientProvider,{client:x,children:Object(O.jsx)(f,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))},m=n(22),C=n(50),w=n(16),P=n(12),S={id:1,name:"First post",publishedAt:"2000-01-01T10:00:00Z"},T=[P.c.get("/post",(function(e,t,n){return t(n.delay(1e3),n.json(S))})),P.c.patch("/post",(function(e,t,n){var r=e.body;return S=Object(w.a)(Object(w.a)({},S),r),t(n.delay(1e3),n.json(S))}))];C.a.apply(void 0,Object(m.a)(T)),n(86);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),g()}},[[87,1,2]]]);
//# sourceMappingURL=main.46c9de4e.chunk.js.map