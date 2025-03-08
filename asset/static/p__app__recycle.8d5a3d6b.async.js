"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1610],{80821:function(b,m,n){n.d(m,{Z:function(){return C}});var h=n(5574),r=n.n(h),d=n(24963),l=n(86738),o=n(28036),P=n(83062),g=n(67294),O=n(85893);function C(t){var A=(0,g.useState)(!1),f=r()(A,2),T=f[0],p=f[1],M=(0,g.useContext)(d.Z),D=M.lang,S=M.notice,v=M.message,s=function(){p(!0);var L=t.action();L instanceof Promise?L.then(function(c){if(p(!1),c){typeof t.onSuccess=="function"&&t.onSuccess(c);var _="";t.messageSuccess?typeof t.messageSuccess=="function"?_=t.messageSuccess(c):_=t.messageSuccess.indexOf("notification.")==0?D(t.messageSuccess):t.messageSuccess:_=D("notification.finish"),t.asynced?v.info(_):v.success(_)}}).catch(function(c){p(!1),typeof t.onError=="function"&&t.onError(c)}):p(!1)};return t.confirm?(0,O.jsx)(l.Z,{style:{width:500},title:t.confirmTitle?t.confirmTitle:D("notification.title.tip"),description:typeof t.confirm=="string"&&t.confirm.indexOf("notification.")==0?D(t.confirm):t.confirm,onConfirm:s,okText:"Yes",cancelText:"No",onOpenChange:t.confirmOnOpenChange,children:(0,O.jsx)(o.ZP,{block:t.block,disabled:t.disabled,icon:t.icon,loading:T,danger:t.danger,type:t.type,children:t.children})}):(0,O.jsx)(P.Z,{title:t.tips,children:(0,O.jsx)(o.ZP,{block:t.block,style:t.ghost?{padding:0,height:"auto"}:{},disabled:t.disabled,icon:t.icon,loading:T,onClick:s,danger:t.danger,type:t.type,children:t.children})})}},78451:function(b,m,n){n.d(m,{Z:function(){return d}});var h=n(67294),r=n(85893);function d(l){return(0,r.jsx)("span",{style:{width:l.width?l.width:"auto",wordBreak:"break-word"},children:l.content})}},24963:function(b,m,n){var h=n(67294),r=(0,h.createContext)({});m.Z=r},67108:function(b,m,n){n.r(m),n.d(m,{default:function(){return y}});var h=n(15009),r=n.n(h),d=n(99289),l=n.n(d),o=n(90078),P=n(78099),g=n(62597),O=n(28036),C=n(83062),t=n(42075),A=n(50136),f=n(82346),T=n(43425),p=n(67294),M=n(96974),D=n(80821),S=n(67255),v=n(78451),s=n(85893);function y(){var L=(0,M.UO)(),c=(0,p.useRef)();return(0,p.useEffect)(function(){var _;(_=c.current)===null||_===void 0||_.reload()},[L]),(0,s.jsx)(o._z,{header:{extra:[(0,s.jsx)(O.ZP,{type:"primary",children:(0,s.jsx)(f.Link,{to:"/app/create/image",children:"\u521B\u5EFA\u5BB9\u5668"})},"create")]},children:(0,s.jsx)(P.Z,{scroll:{x:"max-content"},actionRef:c,columns:[{title:"\u540D\u79F0",dataIndex:"siteTitle",width:200},{title:"\u6807\u8BC6",dataIndex:"siteName",width:200},{title:"\u6700\u540E\u9519\u8BEF",dataIndex:"message",search:!1,width:250,render:function(E,a,u,i,e){return(0,s.jsx)(v.Z,{content:a.message})}},{title:"\u5220\u9664\u65E5\u671F",ellipsis:!0,dataIndex:"deletedAt",search:!1,width:180,render:function(E,a,u,i,e){return new Date(a.deletedAt).toLocaleString()}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:100,fixed:"right",render:function(E,a,u,i){return[(0,s.jsx)(f.Link,{to:"/app/create/image?op=update&id="+a.id,type:"link",children:(0,s.jsx)(C.Z,{title:"\u518D\u6B21\u6784\u5EFA",children:(0,s.jsx)(T.Z,{})})},"rebuild")]}}],rowKey:"id",request:function(){var _=l()(r()().mark(function E(a,u,i){var e,B,I;return r()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,g.cl)({pageSize:(e=a.pageSize)!==null&&e!==void 0?e:10,page:(B=a.current)!==null&&B!==void 0?B:1,isDelete:!0,siteTitle:a.siteTitle,siteName:a.siteName});case 2:return I=R.sent,R.abrupt("return",{data:I.data.list,success:!0,total:I.data.total});case 4:case"end":return R.stop()}},E)}));return function(E,a,u){return _.apply(this,arguments)}}(),rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(E){var a=E.selectedRowKeys;return(0,s.jsx)(t.Z,{size:16,children:(0,s.jsx)(D.Z,{danger:!0,type:"primary",action:function(){return(0,g.xb)({id:a})},onSuccess:function(){var i,e;return!((i=c.current)===null||i===void 0)&&i.reloadAndRest&&((e=c.current)===null||e===void 0||e.reloadAndRest()),!0},onError:function(){var i,e;return!((i=c.current)===null||i===void 0)&&i.reset&&((e=c.current)===null||e===void 0||e.reset()),!0},confirm:"notification.confirm.title",children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,S.O)(),search:{collapsed:!1},tableExtraRender:function(){return(0,s.jsx)(A.Z,{mode:"horizontal",selectedKeys:["recycle"],items:[{label:(0,s.jsx)(f.Link,{to:"/app/list",replace:!0,children:"\u5BB9\u5668\u5217\u8868"}),key:"all"},{label:(0,s.jsx)(f.Link,{to:"/app/recycle",replace:!0,children:"\u56DE\u6536\u7AD9"}),key:"recycle"}]})}})})}},62597:function(b,m,n){n.d(m,{$G:function(){return P},Ct:function(){return S},Tb:function(){return A},XH:function(){return T},cl:function(){return C},fp:function(){return O},iE:function(){return M},xb:function(){return s},ze:function(){return _}});var h=n(15009),r=n.n(h),d=n(99289),l=n.n(d),o=n(82346);function P(a){return g.apply(this,arguments)}function g(){return g=l()(r()().mark(function a(u){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/site/create-by-image",{method:"POST",data:u}));case 1:case"end":return e.stop()}},a)})),g.apply(this,arguments)}var O={EnvValueRuleRequired:1,EnvValueRuleDisabled:2,EnvValueTypeNumber:1024,EnvValueTypeText:2048,EnvValueTypeSelect:4096};function C(a){return t.apply(this,arguments)}function t(){return t=l()(r()().mark(function a(u){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/site/get-list",{method:"POST",data:u}));case 1:case"end":return e.stop()}},a)})),t.apply(this,arguments)}function A(a){return f.apply(this,arguments)}function f(){return f=l()(r()().mark(function a(u){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u.download=!1,e.next=3,(0,o.request)("/api/app/log/run",{method:"POST",data:u});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},a)})),f.apply(this,arguments)}function T(a){return p.apply(this,arguments)}function p(){return p=l()(r()().mark(function a(u){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u.download=!0,e.next=3,(0,o.request)("/api/app/log/run",{method:"POST",data:u,responseType:"blob"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},a)})),p.apply(this,arguments)}function M(a){return D.apply(this,arguments)}function D(){return D=l()(r()().mark(function a(u){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)("/api/app/site/get-detail",{data:u,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},a)})),D.apply(this,arguments)}function S(a){return v.apply(this,arguments)}function v(){return v=l()(r()().mark(function a(u){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/container/delete",{method:"POST",data:u}));case 1:case"end":return e.stop()}},a)})),v.apply(this,arguments)}function s(a){return y.apply(this,arguments)}function y(){return y=l()(r()().mark(function a(u){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/site/delete",{method:"POST",data:u}));case 1:case"end":return e.stop()}},a)})),y.apply(this,arguments)}function L(a){return c.apply(this,arguments)}function c(){return c=_asyncToGenerator(_regeneratorRuntime().mark(function a(u){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,request("/api/app/site/update-title",{method:"POST",data:u});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},a)})),c.apply(this,arguments)}function _(a){return E.apply(this,arguments)}function E(){return E=l()(r()().mark(function a(u){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/container/ignore",{method:"POST",data:u}));case 1:case"end":return e.stop()}},a)})),E.apply(this,arguments)}},67255:function(b,m,n){n.d(m,{O:function(){return h},j:function(){return r}});function h(){var d=localStorage.getItem("dpanel-pagesize");return d=="all"?!1:{showSizeChanger:!0,defaultPageSize:parseInt(d!=null?d:"20")}}function r(d){var l="dpanel-table-column-".concat(d),o={};if(localStorage.getItem(l)){var P;o=JSON.parse((P=localStorage.getItem(l))!==null&&P!==void 0?P:"{}")}return{defaultValue:o,onChange:function(O){localStorage.setItem("dpanel-table-column-".concat(d),JSON.stringify(O))}}}}}]);
