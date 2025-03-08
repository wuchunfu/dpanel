"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5585],{28307:function(L,b,r){var y=r(15009),a=r.n(y),B=r(99289),_=r.n(B),i=r(5574),M=r.n(i),E=r(38345),R=r(97269),P=r(62370),d=r(5966),C=r(64317),v=r(28036),D=r(85265),p=r(42075),o=r(67294),c=r(3393),n=r(97961),O=r(92754),f=r(82346),l=r(96042),s=r(85893),K=(0,o.forwardRef)(function(j,w){var U=(0,o.useState)(!1),t=M()(U,2),h=t[0],u=t[1],e=(0,o.useRef)(),I=(0,o.useRef)(),N=(0,o.useState)(!1),Z=M()(N,2),G=Z[0],x=Z[1];return(0,o.useImperativeHandle)(w,function(){return{upgradeImage:function(m){var g;return u(!0),(g=e.current)===null||g===void 0||g.setFieldValue("imageUrl",m),(0,c.Gb)({tag:m,type:"pull"})},setImageName:function(m){var g;u(!0),(g=e.current)===null||g===void 0||g.setFieldValue("imageUrl",m)}}}),[(0,s.jsx)(v.ZP,{type:j.buttonType?j.buttonType:"default",onClick:function(){var m,g;j.onClick&&j.onClick(),u(!0),(m=e.current)===null||m===void 0||m.resetFields(),(g=I.current)===null||g===void 0||g.setStart("")},children:"\u62C9\u53D6\u955C\u50CF"},"remoteBtn"),(0,s.jsxs)(D.Z,{forceRender:!0,open:h,title:"\u62C9\u53D6\u8FDC\u7A0B\u955C\u50CF",width:800,onClose:function(){var m;u(!1),(m=I.current)===null||m===void 0||m.close()},footer:!1,children:[(0,s.jsx)(E.Z,{children:(0,s.jsxs)(p.Z,{direction:"vertical",size:"middle",children:[(0,s.jsxs)("div",{children:["1\u3001\u955C\u50CF\u540D\u79F0\u4E2D\u4E0D\u5305\u542B\u4ED3\u5E93\u5730\u5740\u65F6\uFF0C \u9ED8\u8BA4\u4ECE ",(0,s.jsx)("a",{href:"https://hub.docker.com/",target:"_blank",children:"docker hub"})," \u4E2D\u4E0B\u8F7D\uFF0C \u4F60\u53EF\u4EE5\u5728\u4E0A\u9762",(0,s.jsx)("a",{href:"https://hub.docker.com/search?q=",target:"_blank",children:"\u3010\u67E5\u627E\u3011"}),"\u9700\u8981\u7684\u955C\u50CF"]}),(0,s.jsxs)("div",{children:["2\u3001\u955C\u50CF\u4E2D\u5305\u542B\u4ED3\u5E93\u5730\u5740\u65F6\uFF0C\u8BF7\u786E",(0,s.jsx)(f.Link,{to:"/image/registry",children:"\u3010\u6DFB\u52A0\u3011"}),"\u8FC7\u8BE5\u4ED3\u5E93\uFF0C\u5E76\u6709 Pull \u6743\u9650"]}),(0,s.jsxs)("div",{children:["3\u3001\u53EF\u5728",(0,s.jsx)(f.Link,{to:"/image/registry",children:"\u3010\u4ED3\u5E93\u7BA1\u7406\u3011"}),"\u4E2D\u914D\u7F6E\u955C\u50CF\u7684\u52A0\u901F\u5730\u5740"]})]})}),(0,s.jsx)(E.Z,{title:"\u62C9\u53D6\u955C\u50CF",headerBordered:!0,children:(0,s.jsxs)(R.A,{formRef:e,submitter:!1,isKeyPressSubmit:!0,onFinish:function(){var T=_()(a()().mark(function m(g){var W,S,k,$,F,H;return a()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return F=(W=g.imageUrl)!==null&&W!==void 0?W:"",g.registry&&(F=g.registry.serverAddress+"/"+F),x(!0),(S=I.current)===null||S===void 0||S.setStart(F),A.next=6,(0,c.Gb)({tag:F,type:"pull",platform:(k=g.platform)!==null&&k!==void 0?k:""}).finally(function(){x(!1)});case 6:return H=A.sent,($=I.current)===null||$===void 0||$.setFinish(),u(!1),j.onFinish&&j.onFinish(H.data.tag),A.abrupt("return",!0);case 11:case"end":return A.stop()}},m)}));return function(m){return T.apply(this,arguments)}}(),children:[(0,s.jsxs)(p.Z.Compact,{children:[(0,s.jsx)(P.Z,{name:"registry",children:(0,s.jsx)(l.Z,{width:"150px"})}),(0,s.jsx)(d.Z,{disabled:G,width:300,name:"imageUrl",placeholder:"\u8BF7\u8F93\u5165\u955C\u50CF\u5730\u5740",required:!0,rules:[{required:!0}]}),(0,s.jsx)(C.Z,{name:"platform",style:{width:100},placeholder:"\u9ED8\u8BA4\u5F53\u524D\u67B6\u6784",options:n.ii.map(function(T){return{label:T.name,value:T.name}})}),(0,s.jsx)(v.ZP,{loading:G,onClick:_()(a()().mark(function T(){var m;return a()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:(m=e.current)===null||m===void 0||m.submit();case 1:case"end":return W.stop()}},T)})),children:"\u62C9\u53D6\u955C\u50CF"}),(0,s.jsx)(v.ZP,{danger:!0,onClick:function(){var m;(m=I.current)===null||m===void 0||m.close()},children:"\u4E2D\u6B62\u6267\u884C"})]}),(0,s.jsx)(P.Z,{label:"\u62C9\u53D6\u8FDB\u5EA6",children:(0,s.jsx)(O.Z,{ref:I})})]})})]},"remoteDrawer")]});b.Z=K},96042:function(L,b,r){r.d(b,{Z:function(){return P}});var y=r(97857),a=r.n(y),B=r(5574),_=r.n(B),i=r(75870),M=r(34041),E=r(67294),R=r(85893);function P(d){var C=(0,E.useState)([]),v=_()(C,2),D=v[0],p=v[1];(0,E.useEffect)(function(){(0,i.Ot)().then(function(c){c&&p(c.data.list)})},[]);var o={};return d.multiple&&(o.mode="multiple"),d.top&&(o.placement="topLeft"),(0,R.jsx)(M.Z,a()({popupMatchSelectWidth:!d.width,style:d.width?{width:d.width}:{},onChange:function(n){if(Array.isArray(n)){var O=n.map(function(f){return D[f]});d.onChangeList&&d.onChangeList(O)}else d.onChange&&d.onChange(D[n])},placeholder:"\u9009\u62E9\u955C\u50CF\u4ED3\u5E93\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u4ED3\u5E93",options:D.map(function(c,n){return{value:n,label:c.title+"("+c.serverAddress+")"}}),allowClear:!0},o))}},24963:function(L,b,r){var y=r(67294),a=(0,y.createContext)({});b.Z=a},97961:function(L,b,r){r.d(b,{GH:function(){return C},MF:function(){return o},_2:function(){return D},fN:function(){return E},ii:function(){return M},vC:function(){return P}});var y=r(15009),a=r.n(y),B=r(99289),_=r.n(B),i=r(82346),M=[{name:"linux/amd64",arch:"amd64",search:["amd64","x86_64","86_64"]},{name:"linux/arm64",arch:"arm64",search:["arm64","arrch64"]},{name:"linux/i386",arch:"386",search:[]},{name:"linux/arm/v6",arch:"arm",search:[]},{name:"linux/arm/v7",arch:"arm",search:[]},{name:"linux/arm/v8",arch:"arm64",search:[]},{name:"linux/ppc64le",arch:"ppc64le",search:[]},{name:"linux/riscv64",arch:"riscv64",search:[]}];function E(n){return R.apply(this,arguments)}function R(){return R=_()(a()().mark(function n(O){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,i.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:O}));case 1:case"end":return l.stop()}},n)})),R.apply(this,arguments)}function P(n){return d.apply(this,arguments)}function d(){return d=_()(a()().mark(function n(O){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,i.request)("/api/app/image/import-by-container-tar",{method:"POST",data:O}));case 1:case"end":return l.stop()}},n)})),d.apply(this,arguments)}function C(n){return v.apply(this,arguments)}function v(){return v=_()(a()().mark(function n(O){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,i.request)("/api/app/image/import-by-image-tar",{method:"POST",data:O}));case 1:case"end":return l.stop()}},n)})),v.apply(this,arguments)}function D(n){return p.apply(this,arguments)}function p(){return p=_()(a()().mark(function n(O){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,i.request)("/api/common/attach/delete",{method:"POST",data:O});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},n)})),p.apply(this,arguments)}function o(){return c.apply(this,arguments)}function c(){return c=_()(a()().mark(function n(){return a()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,i.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return f.stop()}},n)})),c.apply(this,arguments)}},18148:function(L,b,r){r.d(b,{$q:function(){return p},Fj:function(){return K},KG:function(){return M},KX:function(){return w},T8:function(){return v},Xn:function(){return d},ao:function(){return c},c5:function(){return l},c7:function(){return O}});var y=r(15009),a=r.n(y),B=r(99289),_=r.n(B),i=r(82346);function M(t){return E.apply(this,arguments)}function E(){return E=_()(a()().mark(function t(h){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/app/image/get-list",{method:"POST",data:h}));case 1:case"end":return e.stop()}},t)})),E.apply(this,arguments)}function R(t){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function t(h){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,request("/api/app/log/image-build",{method:"POST",data:h});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),P.apply(this,arguments)}function d(t){return C.apply(this,arguments)}function C(){return C=_()(a()().mark(function t(h){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/app/image/get-list-build",{method:"POST",data:h}));case 1:case"end":return e.stop()}},t)})),C.apply(this,arguments)}function v(t){return D.apply(this,arguments)}function D(){return D=_()(a()().mark(function t(h){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.request)("/api/app/image/get-build-task",{method:"POST",data:h});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),D.apply(this,arguments)}function p(t){return o.apply(this,arguments)}function o(){return o=_()(a()().mark(function t(h){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.request)("/api/app/image/delete-build-task",{method:"POST",data:h});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),o.apply(this,arguments)}function c(t){return n.apply(this,arguments)}function n(){return n=_()(a()().mark(function t(h){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.request)("/api/app/image/image-delete",{method:"POST",data:h});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),n.apply(this,arguments)}function O(){return f.apply(this,arguments)}function f(){return f=_()(a()().mark(function t(){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,i.request)("/api/app/image/image-prune",{method:"POST"});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},t)})),f.apply(this,arguments)}function l(){return s.apply(this,arguments)}function s(){return s=_()(a()().mark(function t(){return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,i.request)("/api/app/image/build-prune",{method:"POST"});case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},t)})),s.apply(this,arguments)}function K(t){return j.apply(this,arguments)}function j(){return j=_()(a()().mark(function t(h){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.request)("/api/app/image/update-title",{method:"POST",data:h});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),j.apply(this,arguments)}function w(t){return U.apply(this,arguments)}function U(){return U=_()(a()().mark(function t(h){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/app/image/tag-sync",{method:"POST",data:h}));case 1:case"end":return e.stop()}},t)})),U.apply(this,arguments)}},75870:function(L,b,r){r.d(b,{Ot:function(){return M},ZH:function(){return R},ix:function(){return d},t1:function(){return v}});var y=r(15009),a=r.n(y),B=r(99289),_=r.n(B),i=r(82346);function M(p){return E.apply(this,arguments)}function E(){return E=_()(a()().mark(function p(o){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("/api/common/registry/get-list",{method:"POST",data:o}));case 1:case"end":return n.stop()}},p)})),E.apply(this,arguments)}function R(p){return P.apply(this,arguments)}function P(){return P=_()(a()().mark(function p(o){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("/api/common/registry/create",{method:"POST",data:o}));case 1:case"end":return n.stop()}},p)})),P.apply(this,arguments)}function d(p){return C.apply(this,arguments)}function C(){return C=_()(a()().mark(function p(o){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("/api/common/registry/delete",{method:"POST",data:o}));case 1:case"end":return n.stop()}},p)})),C.apply(this,arguments)}function v(p){return D.apply(this,arguments)}function D(){return D=_()(a()().mark(function p(o){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("/api/common/registry/get-detail",{method:"POST",data:o}));case 1:case"end":return n.stop()}},p)})),D.apply(this,arguments)}}}]);
