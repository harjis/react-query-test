(this["webpackJsonpreact-query-test"]=this["webpackJsonpreact-query-test"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),i=n(19),s=n.n(i),u=(n(45),n(46),n(24)),a=n(11),o=n(15),d=n.n(o),j=n(23),l={"Content-Type":"application/json"},b=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/post",{method:"GET",headers:l});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/post",{method:"PATCH",headers:l,body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=n(34),x=n(4),v=function(){var e=Object(a.useQueryClient)(),t=Object(r.useState)(""),n=Object(p.a)(t,2),c=n[0],i=n[1],s=Object(a.useMutation)("updatePost",h,{onSuccess:function(){e.invalidateQueries("post")}});return Object(x.jsxs)("div",{children:[s.isLoading?Object(x.jsx)("div",{children:"Updating name..."}):null,s.isSuccess?Object(x.jsx)("div",{children:"Name Updated!"}):null,"Name:"," ",Object(x.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)}}),Object(x.jsx)("button",{onClick:function(){s.mutate({name:c})},children:"Update"})]})},O=function(){var e=Object(a.useQuery)("post",b),t=e.data;return e.isLoading?Object(x.jsxs)("div",{style:{height:500,width:500},children:[Object(x.jsx)(u.a,{height:"2rem"}),Object(x.jsx)("br",{}),Object(x.jsx)(u.a,{count:2})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:null===t||void 0===t?void 0:t.name}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(x.jsxs)("div",{children:["Id: ",null===t||void 0===t?void 0:t.id]}),Object(x.jsxs)("div",{children:["Published at: ",null===t||void 0===t?void 0:t.publishedAt]})]}),Object(x.jsx)("hr",{}),Object(x.jsx)(v,{})]})},f=new a.QueryClient;var y=function(){return Object(x.jsx)(a.QueryClientProvider,{client:f,children:Object(x.jsx)(O,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};n(49);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),g()}},[[50,1,2]]]);
//# sourceMappingURL=main.d47324cc.chunk.js.map