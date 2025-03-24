"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1180],{88484:function(X,R,e){e.d(R,{Z:function(){return h}});var j=e(87462),_=e(67294),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},A=I,T=e(84089),D=function(t,p){return _.createElement(T.Z,(0,j.Z)({},t,{ref:p,icon:A}))},O=_.forwardRef(D),h=O},52688:function(X,R,e){var j=e(1413),_=e(45987),I=e(67294),A=e(35510),T=e(85893),D=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],O=I.forwardRef(function(h,l){var t=h.fieldProps,p=h.unCheckedChildren,M=h.checkedChildren,F=h.proFieldProps,v=(0,_.Z)(h,D);return(0,T.jsx)(A.Z,(0,j.Z)({valueType:"switch",fieldProps:(0,j.Z)({unCheckedChildren:p,checkedChildren:M},t),ref:l,valuePropName:"checked",proFieldProps:F,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},v))});R.Z=O},5966:function(X,R,e){var j=e(97685),_=e(1413),I=e(45987),A=e(21770),T=e(72723),D=e(55241),O=e(97435),h=e(67294),l=e(35510),t=e(85893),p=["fieldProps","proFieldProps"],M=["fieldProps","proFieldProps"],F="text",v=function(E){var n=E.fieldProps,U=E.proFieldProps,P=(0,I.Z)(E,p);return(0,t.jsx)(l.Z,(0,_.Z)({valueType:F,fieldProps:n,filedConfig:{valueType:F},proFieldProps:U},P))},g=function(E){var n=(0,A.Z)(E.open||!1,{value:E.open,onChange:E.onOpenChange}),U=(0,j.Z)(n,2),P=U[0],b=U[1];return(0,t.jsx)(T.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(Q){var z,i=Q.getFieldValue(E.name||[]);return(0,t.jsx)(D.Z,(0,_.Z)((0,_.Z)({getPopupContainer:function(r){return r&&r.parentNode?r.parentNode:r},onOpenChange:function(r){return b(r)},content:(0,t.jsxs)("div",{style:{padding:"4px 0"},children:[(z=E.statusRender)===null||z===void 0?void 0:z.call(E,i),E.strengthText?(0,t.jsx)("div",{style:{marginTop:10},children:(0,t.jsx)("span",{children:E.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},E.popoverProps),{},{open:P,children:E.children}))}})},y=function(E){var n=E.fieldProps,U=E.proFieldProps,P=(0,I.Z)(E,M),b=(0,h.useState)(!1),H=(0,j.Z)(b,2),Q=H[0],z=H[1];return n!=null&&n.statusRender&&P.name?(0,t.jsx)(g,{name:P.name,statusRender:n==null?void 0:n.statusRender,popoverProps:n==null?void 0:n.popoverProps,strengthText:n==null?void 0:n.strengthText,open:Q,onOpenChange:z,children:(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,(0,_.Z)({valueType:"password",fieldProps:(0,_.Z)((0,_.Z)({},(0,O.Z)(n,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(c){var r;n==null||(r=n.onBlur)===null||r===void 0||r.call(n,c),z(!1)},onClick:function(c){var r;n==null||(r=n.onClick)===null||r===void 0||r.call(n,c),z(!0)}}),proFieldProps:U,filedConfig:{valueType:F}},P))})}):(0,t.jsx)(l.Z,(0,_.Z)({valueType:"password",fieldProps:n,proFieldProps:U,filedConfig:{valueType:F}},P))},f=v;f.Password=y,f.displayName="ProFormComponent",R.Z=f},1699:function(X,R,e){e.d(R,{u:function(){return O}});var j=e(97857),_=e.n(j),I=e(67294),A=e(82346),T=e(42075),D=e(85893),O=function(l){var t=(0,A.useAccess)(),p=Array.isArray(l.access)?l.access:[l.access];return l.space?(0,D.jsx)(T.Z,_()(_()({},l.space),{},{children:p.every(function(M){return t[M]})?l.children:l.fallback})):(0,D.jsx)(D.Fragment,{children:p.every(function(M){return t[M]})?l.children:l.fallback})}},80821:function(X,R,e){e.d(R,{Z:function(){return l}});var j=e(5574),_=e.n(j),I=e(24963),A=e(86738),T=e(28036),D=e(83062),O=e(67294),h=e(85893);function l(t){var p=(0,O.useState)(!1),M=_()(p,2),F=M[0],v=M[1],g=(0,O.useContext)(I.Z),y=g.lang,f=g.notice,L=g.message,E=function(){v(!0);var U=t.action();U instanceof Promise?U.then(function(P){if(v(!1),P){typeof t.onSuccess=="function"&&t.onSuccess(P);var b="";t.messageSuccess?typeof t.messageSuccess=="function"?b=t.messageSuccess(P):b=t.messageSuccess.indexOf("notification.")==0?y(t.messageSuccess):t.messageSuccess:b=y("notification.finish"),t.asynced?L.info(b):L.success(b)}}).catch(function(P){v(!1),typeof t.onError=="function"&&t.onError(P)}):v(!1)};return t.confirm?(0,h.jsx)(A.Z,{style:{width:500},title:t.confirmTitle?t.confirmTitle:y("notification.title.tip"),description:typeof t.confirm=="string"&&t.confirm.indexOf("notification.")==0?y(t.confirm):t.confirm,onConfirm:E,okText:"Yes",cancelText:"No",onOpenChange:t.confirmOnOpenChange,children:(0,h.jsx)(T.ZP,{block:t.block,disabled:t.disabled,icon:t.icon,loading:F,danger:t.danger,type:t.type,children:t.children})}):(0,h.jsx)(D.Z,{title:t.tips,children:(0,h.jsx)(T.ZP,{block:t.block,style:t.ghost?{padding:0,height:"auto",width:"auto"}:{},disabled:t.disabled,icon:t.icon,loading:F,onClick:E,danger:t.danger,type:t.type,children:t.children})})}},44349:function(X,R,e){var j=e(97857),_=e.n(j),I=e(17186),A=e(5966),T=e(86250),D=e(67294),O=e(85893),h=(0,D.forwardRef)(function(l,t){var p=(0,D.useRef)();(0,D.useImperativeHandle)(t,function(){return{addItem:function(v,g){var y,f=(y=p.current)===null||y===void 0?void 0:y.getList(),L=!1;if(f==null||f.map(function(n){if(n.name==v){L=!0;return}}),!L){var E;(E=p.current)===null||E===void 0||E.add({name:v,value:g})}},clear:function(){var v;(v=p.current)===null||v===void 0||(v=v.getList())===null||v===void 0||v.map(function(g,y){var f;(f=p.current)===null||f===void 0||f.remove(y)})}}});var M={};return l.hideCopyButton===!0&&(M.copyIconProps=!1),l.hideDeleteButton===!0&&(M.deleteIconProps=!1),(0,O.jsx)(I.u,_()(_()({initialValue:l.initialValue,label:l.label,name:l.name,actionRef:p,creatorButtonProps:l.showAddButton?{creatorButtonText:"\u6DFB\u52A0"+(l.label?l.label:l.name)}:!1,min:l.min?l.min:0},M),{},{children:function(v,g,y){return(0,O.jsx)(T.Z,{justify:l.justify,gap:l.gap,children:l.items.map(function(f){return f.render?(0,O.jsx)("div",{children:f.render&&f.render(v,g,y)},"".concat(l.name,"-").concat(f.name,"-").concat(v.key)):(0,O.jsx)(A.Z,{width:f.width,name:f.name,label:f.label,required:f.required,rules:[{required:f.required}],disabled:f.disabled,placeholder:f.placeholder},"".concat(l.name,"-").concat(f.name,"-").concat(v.key))})})}}))});R.Z=h},12491:function(X,R,e){e.d(R,{Z:function(){return h}});var j=e(24963),_=e(88484),I=e(62370),A=e(31418),T=e(28036),D=e(67294),O=e(85893);function h(l){var t=(0,D.useContext)(j.Z),p=t.message,M=t.notice,F=t.lang,v=(0,D.useRef)(null),g=A.Z.useApp(),y=function(){v.current&&(v.current.click(),v.current.onchange=function(L){if(!L||!L.target)return"";var E=new FileReader;E.onload=function(U){var P,b,H=(P=U.target)===null||P===void 0?void 0:P.result;if(l.onLoad)try{l.onLoad&&l.onLoad(H)}catch(Q){M.error(Q);return}typeof l.onImport=="function"&&(p.success("\u6210\u529F\u5BFC\u5165 ".concat(l.title)),l.onImport(H)),(b=v.current)!==null&&b!==void 0&&b.value&&(v.current.value="")};var n=L.target;if(n.files)try{E.readAsText(n.files[0])}catch(U){M.error("\u5BFC\u5165\u6587\u4EF6\u5FC5\u987B\u662F\u6587\u672C\u7C7B\u578B")}})};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(I.Z,{children:(0,O.jsx)(T.ZP,{icon:(0,O.jsx)(_.Z,{}),block:!0,onClick:y,children:l.title})}),(0,O.jsx)("input",{style:{display:"none"},type:"file",ref:v,name:"importFileInput"})]})}},8680:function(X,R,e){var j=e(15009),_=e.n(j),I=e(64599),A=e.n(I),T=e(99289),D=e.n(T),O=e(9783),h=e.n(O),l=e(5574),t=e.n(l),p=e(67294),M=e(184),F=e(38345),v=e(97269),g=e(97321),y=e(97462),f=e(64317),L=e(5966),E=e(86615),n=e(68602),U=e(28036),P=e(83403),b=e(24963),H=e(1699),Q=e(29177),z=e(45742),i=e(43425),c=e(44349),r=e(85893),C=(0,p.forwardRef)(function(x,se){var K=(0,p.useState)(!1),V=t()(K,2),Y=V[0],J=V[1],$=(0,p.useRef)(),te=(0,p.useContext)(b.Z),B=te.message,N=(0,p.useState)([]),re=t()(N,2),G=re[0],w=re[1],ne=h()(h()(h()(h()(h()({},P.W6.CONTAINER,"name"),P.W6.APPSTORE,"name"),P.W6.COMPOSE,"name"),P.W6.REGISTRY,"serverAddress"),P.W6.DOCKER_ENV,"name"),ae=h()(h()(h()(h()(h()({},P.W6.CONTAINER,"name"),P.W6.APPSTORE,"name"),P.W6.COMPOSE,"name"),P.W6.REGISTRY,"title"),P.W6.DOCKER_ENV,"title"),ee=ne[x.type],S=ae[x.type],u=x.selected.map(function(o){return o[ne[x.type]]});return p.useEffect(function(){Y&&((0,n.dP)({permission:{uri:x.type,key:ee,value:u}}).then(function(o){var s;(s=$.current)===null||s===void 0||s.setFieldValue("list",Object.keys(o.data.list).map(function(d){return{name:d,type:o.data.list[d].type,users:o.data.list[d].users}}))}),(0,n.lE)().then(function(o){var s,d=(s=o.data)===null||s===void 0||(s=s.list)===null||s===void 0?void 0:s.map(function(a){return{label:a.username,value:a.username}});w(d)}))},[Y]),(0,r.jsx)(H.u,{access:["canSeeEnableEe","canSeeFounder","canSeeManage"],children:(0,r.jsxs)(M.a,{name:"create",title:"\u6570\u636E\u6743\u9650\u8BBE\u7F6E",open:Y,onOpenChange:function(s){if(!s){var d;(d=$.current)===null||d===void 0||d.resetFields()}J(s)},drawerProps:{forceRender:!0},formRef:$,trigger:(0,r.jsx)(U.ZP,{icon:(0,r.jsx)(Q.Z,{}),children:"\u6570\u636E\u6743\u9650"}),onFinish:function(){var o=D()(_()().mark(function s(d){var a,m,W;return _()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:a=A()(d.list),Z.prev=1,a.s();case 3:if((m=a.n()).done){Z.next=9;break}return W=m.value,Z.next=7,(0,n.Db)({usernames:W.users,permissionType:W.type,permission:{uri:x.type,key:ee,showKey:S,value:[W.name]}});case 7:Z.next=3;break;case 9:Z.next=14;break;case 11:Z.prev=11,Z.t0=Z.catch(1),a.e(Z.t0);case 14:return Z.prev=14,a.f(),Z.finish(14);case 17:B.success("\u6743\u9650\u8BBE\u7F6E\u6210\u529F"),J(!1),x.onSuccess();case 20:case"end":return Z.stop()}},s,null,[[1,11,14,17]])}));return function(s){return o.apply(this,arguments)}}(),children:[(0,r.jsxs)(F.Z,{ghost:!0,title:(0,r.jsx)(z.Z,{}),subTitle:"\u6279\u91CF\u8BBE\u7F6E",children:[(0,r.jsx)(v.A.Item,{name:"type",style:{marginBottom:0},children:(0,r.jsxs)(g.Z.Group,{defaultValue:"admin",onChange:function(s){var d,a,m=(d=$.current)===null||d===void 0?void 0:d.getFieldValue("list");m.forEach(function(W){W.type=s,W.users=[]}),(a=$.current)===null||a===void 0||a.setFieldValue("list",m)},children:[(0,r.jsx)(g.Z,{style:{width:240},title:"\u7BA1\u7406\u5458",description:"\u4EC5\u7BA1\u7406\u5458\u53EF\u89C1",value:"admin"}),(0,r.jsx)(g.Z,{style:{width:240},title:"\u6307\u5B9A\u7528\u6237",description:"\u4EC5\u9009\u4E2D\u7528\u6237\u53EF\u89C1",value:"restricted"}),(0,r.jsx)(g.Z,{style:{width:240},title:"\u516C\u5171",description:"\u6240\u6709\u4EBA\u53EF\u89C1",value:"public"})]})}),(0,r.jsx)(y.Z,{name:["type"],children:function(s){var d=s.type;if(d==="restricted")return(0,r.jsx)(f.Z,{mode:"multiple",name:"usernames",label:"\u9009\u62E9\u7528\u6237",required:!0,onChange:function(m){var W,k,Z=(W=$.current)===null||W===void 0?void 0:W.getFieldValue("list");Z.forEach(function(q){q.users=m}),(k=$.current)===null||k===void 0||k.setFieldValue("list",Z)},rules:[{required:!0}],request:D()(_()().mark(function a(){var m,W,k;return _()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(!(G.length>0)){q.next=2;break}return q.abrupt("return",G);case 2:return q.next=4,(0,n.lE)();case 4:return W=q.sent,k=(m=W.data)===null||m===void 0||(m=m.list)===null||m===void 0?void 0:m.map(function(le){return{label:le.username,value:le.username}}),w(k),q.abrupt("return",k);case 8:case"end":return q.stop()}},a)}))})}})]}),(0,r.jsx)(F.Z,{ghost:!0,title:(0,r.jsx)(i.Z,{}),subTitle:"\u6570\u636E\u6743\u9650\u8BBE\u7F6E",children:(0,r.jsx)(c.Z,{name:"list",hideCopyButton:!0,gap:10,items:[{name:"name",label:"\u540D\u79F0",render:function(s,d,a){var m=a.getCurrentRowData();return(0,r.jsx)(L.Z,{disabled:!0,label:"\u540D\u79F0",width:"sm",name:"name"})}},{name:"type",label:"\u6743\u9650\u7C7B\u578B",render:function(s,d,a){var m=a.getCurrentRowData();return(0,r.jsx)(E.Z.Group,{label:"\u6743\u9650\u7C7B\u578B",name:"type",radioType:"button",options:[{label:"\u7BA1\u7406\u5458",value:"admin"},{label:"\u516C\u5171",value:"public"},{label:"\u6307\u5B9A\u7528\u6237",value:"restricted"}]})}},{name:"users",label:"\u5173\u8054\u7528\u6237",render:function(s,d,a){return(0,r.jsx)(y.Z,{name:["type"],children:function(W){var k=W.type;if(k=="restricted")return(0,r.jsx)(f.Z,{width:"sm",mode:"tags",name:"users",label:"\u5173\u8054\u7528\u6237",options:G})}})}}]})})]})})});R.Z=C},24963:function(X,R,e){var j=e(67294),_=(0,j.createContext)({});R.Z=_},53893:function(X,R,e){e.r(R),e.d(R,{default:function(){return se}});var j=e(15009),_=e.n(j),I=e(99289),A=e.n(I),T=e(5574),D=e.n(T),O=e(80821),h=e(184),l=e(5966),t=e(52688),p=e(97462),M=e(62370),F=e(28036),v=e(86250),g=e(67294),y=e(91845),f=e(87662),L=e(24963),E=e(12491),n=e(85893),U=(0,g.forwardRef)(function(K,V){var Y;(0,g.useImperativeHandle)(V,function(){return{edit:function(u){var o;(o=N.current)===null||o===void 0||o.setFieldsValue({name:u.name,title:u.title,address:u.address,enableTLS:u.enableTLS,tlsCa:u.tlsCa,tlsCert:u.tlsCert,tlsKey:u.tlsKey,enableComposePath:u.enableComposePath}),B(!0),ne(u.name)}}});var J=(0,g.useState)(!1),$=D()(J,2),te=$[0],B=$[1],N=(0,g.useRef)(),re=(0,g.useState)(""),G=D()(re,2),w=G[0],ne=G[1],ae=(0,g.useContext)(L.Z),ee=ae.lang;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(F.ZP,{onClick:function(){var u;ne(""),(u=N.current)===null||u===void 0||u.resetFields(),B(!0)},type:"primary",children:"\u6DFB\u52A0\u670D\u52A1\u7AEF"}),(0,n.jsxs)(h.a,{drawerProps:{forceRender:!0},onOpenChange:function(u){B(u)},open:te,width:800,formRef:N,title:(Y=N.current)!==null&&Y!==void 0&&Y.getFieldValue&&N.current.getFieldValue("name")=="local"?"\u914D\u7F6E\u9ED8\u8BA4Docker\u670D\u52A1\u7AEF":"\u6DFB\u52A0\u8FDC\u7A0BDocker\u670D\u52A1\u7AEF",onFinish:function(){var S=A()(_()().mark(function u(o){var s,d;return _()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return s={name:o.name,title:o.title,address:o.address,tlsCa:o.tlsCa,tlsCert:o.tlsCert,tlsKey:o.tlsKey,enableTLS:o.enableTLS,enableComposePath:o.enableComposePath,composePath:o.enableComposePath?o.composePath:""},m.next=3,(0,f.ad)(s);case 3:return d=m.sent,K.onFinish&&K.onFinish(),m.abrupt("return",!0);case 6:case"end":return m.stop()}},u)}));return function(u){return S.apply(this,arguments)}}(),children:[(0,n.jsx)(l.Z,{label:"\u540D\u79F0",name:"title",required:!0,rules:[{required:!0}],fieldProps:{onChange:function(u){var o="";if(u.target.value&&!w){var s,d=(0,y.N9)(u.target.value.trim(),{toneType:"none",type:"array"});o=d.join(""),(s=N.current)===null||s===void 0||s.setFieldValue("name",o)}}}}),(0,n.jsx)(l.Z,{label:"\u6807\u8BC6",name:"name",required:!0,disabled:w!="",rules:[{required:!0}],placeholder:"\u6807\u8BC6Docker\u73AF\u5883\uFF0C\u53EA\u5141\u8BB8\u4E3A\u82F1\u6587\u6216\u662F\u6570\u5B57"}),(0,n.jsx)(l.Z,{label:"Docker Api \u5730\u5740",name:"address",tooltip:"\u8FDE\u63A5\u8FDC\u7A0B Docker \u65F6\u8BF7\u5148\u5F00\u542F Api \u5730\u5740\u8BBF\u95EE\u3002",placeholder:"\u4F8B\u5982\uFF1Aunix:///var/run/docker.sock\u3001tcp://192.16.0.5:2375"}),(0,n.jsxs)(v.Z,{gap:80,children:[(0,n.jsx)(t.Z,{label:"\u542F\u7528TLS",name:"enableTLS",tooltip:"\u751F\u6210\u6559\u7A0B\u89C1\uFF1Ahttps://donknap.github.io/dpanel-docs/#/zh-cn/manual/remote"}),(0,n.jsx)(p.Z,{name:["enableComposePath","name"],children:function(u){var o=u.name;if(o!="local")return(0,n.jsx)(t.Z,{label:ee("system.env.createEnableComposePath"),name:"enableComposePath",tooltip:"\u5F00\u542F\u72EC\u7ACBcompose\u914D\u7F6E\u540E\uFF0C\u5207\u6362\u8FDC\u7A0B docker \u5BA2\u6237\u7AEF\u65F6\u5C06\u53EA\u4F1A\u8BFB\u53D6\u8BE5\u73AF\u5883\u4E13\u5C5E\u76EE\u5F55\u4E0B\u7684 compose \u4EFB\u52A1"})}})]}),(0,n.jsx)(p.Z,{name:["enableComposePath","name"],children:function(u){var o=u.enableComposePath,s=u.name;if(o)return(0,n.jsx)(l.Z,{label:ee("system.env.createComposePath"),name:"composePath",disabled:!0,fieldProps:{value:"/dpanel/compose/compose-".concat(s!=null?s:"")}})}}),(0,n.jsx)(p.Z,{name:["enableTLS"],children:function(u){var o=u.enableTLS;if(o)return(0,n.jsxs)(v.Z,{gap:20,justify:"start",children:[(0,n.jsx)(M.Z,{name:"tlsCa",label:"\u4E0A\u4F20\u5BA2\u6237\u7AEF\u8BC1\u4E66",children:(0,n.jsx)(E.Z,{title:"\u4E0A\u4F20CA\u8BC1\u4E66 ca.pem",onImport:function(d){var a;return(a=N.current)===null||a===void 0||a.setFieldValue("tlsCa",d),!0},onLoad:function(d){if(d.indexOf("CERTIFICATE")<0)throw new Error("\u5BFC\u5165ca.pem\u8BC1\u4E66\u9519\u8BEF");return!0}})}),(0,n.jsx)(M.Z,{name:"tlsCert",label:" ",children:(0,n.jsx)(E.Z,{title:"\u4E0A\u4F20\u8BC1\u4E66\u6587\u4EF6 cert.pem",onImport:function(d){var a;return(a=N.current)===null||a===void 0||a.setFieldValue("tlsCert",d),!0},onLoad:function(d){if(d.indexOf("CERTIFICATE")<0)throw new Error("\u5BFC\u5165cert.pem\u8BC1\u4E66\u9519\u8BEF");return!0}})}),(0,n.jsx)(M.Z,{label:" ",name:"tlsKey",children:(0,n.jsx)(E.Z,{title:"\u4E0A\u4F20\u5BC6\u94A5\u6587\u4EF6 key.pem",onImport:function(d){var a;return(a=N.current)===null||a===void 0||a.setFieldValue("tlsKey",d),!0},onLoad:function(d){if(d.indexOf("PRIVATE")<0)throw new Error("\u5BFC\u5165key.pem\u8BC1\u4E66\u9519\u8BEF");return!0}})})]})}})]})]})}),P=U,b=e(8680),H=e(83403),Q=e(86548),z=e(90078),i=e(78099),c=e(82346),r=e(42075),C=e(96074),x=e(25593);function se(){var K=(0,g.useRef)(),V=(0,g.useRef)(),Y=(0,c.useSearchParams)(),J=D()(Y,2),$=J[0],te=J[1],B=(0,c.useModel)("@@initialState"),N=B.initialState,re=B.loading,G=B.error,w=B.refresh,ne=B.setInitialState,ae=(0,g.useContext)(L.Z),ee=ae.message;return(0,n.jsx)(z._z,{header:{extra:[(0,n.jsx)(P,{ref:V,onFinish:A()(_()().mark(function S(){var u,o,s;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!$.get("id")){a.next=5;break}return a.next=3,(0,f.vC)({name:(s=$.get("id"))!==null&&s!==void 0?s:"local"});case 3:return te(""),a.abrupt("return");case 5:w(),!((u=K.current)===null||u===void 0)&&u.reloadAndRest&&((o=K.current)===null||o===void 0||o.reloadAndRest());case 7:case"end":return a.stop()}},S)}))},"dockerEnvCreate")]},children:(0,n.jsx)(i.Z,{rowKey:"name",columns:[{title:"\u6807\u8BC6",dataIndex:"name"},{title:"\u540D\u79F0",dataIndex:"title"},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(u,o,s,d,a){return(0,n.jsx)(r.Z,{split:(0,n.jsx)(C.Z,{type:"vertical"}),children:(0,n.jsx)(x.Z.Link,{onClick:function(){var W;(W=V.current)===null||W===void 0||W.edit(o)},children:(0,n.jsx)(Q.Z,{})},o.name)})}}],pagination:!1,request:A()(_()().mark(function S(){var u;return _()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,f.Kg)();case 2:return u=s.sent,$.get("id")&&u.data.list.map(function(d){if(d.name==$.get("id")){var a;(a=V.current)===null||a===void 0||a.edit(d)}}),s.abrupt("return",{data:u.data.list,total:u.data.list.length});case 5:case"end":return s.stop()}},S)})),search:!1,rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:K,tableAlertOptionRender:function(u){var o=u.selectedRows,s=u.selectedRowKeys;return(0,n.jsxs)(r.Z,{size:16,children:[(0,n.jsx)(b.Z,{type:H.W6.DOCKER_ENV,selected:o,onSuccess:function(){var a,m;return!((a=K.current)===null||a===void 0)&&a.reloadAndRest&&((m=K.current)===null||m===void 0||m.reloadAndRest()),!0}}),(0,n.jsx)(O.Z,{danger:!0,type:"primary",action:function(){return o.find(function(a){return a.default})?(ee.warning("\u9ED8\u8BA4\u73AF\u5883\u4E0D\u80FD\u5220\u9664"),!1):(0,f._g)({name:s})},onSuccess:function(){var a,m;return w(),!((a=K.current)===null||a===void 0)&&a.reloadAndRest&&((m=K.current)===null||m===void 0||m.reloadAndRest()),!0},onError:function(){var a,m;return!((a=K.current)===null||a===void 0)&&a.reset&&((m=K.current)===null||m===void 0||m.reset()),!0},confirm:"notification.confirm.title",children:"\u6279\u91CF\u5220\u9664"})]})}})})}},86250:function(X,R,e){e.d(R,{Z:function(){return z}});var j=e(67294),_=e(93967),I=e.n(_),A=e(98423),T=e(98065),D=e(53124),O=e(83559),h=e(83262);const l=["wrap","nowrap","wrap-reverse"],t=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],p=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],M=(i,c)=>{const r=c.wrap===!0?"wrap":c.wrap;return{[`${i}-wrap-${r}`]:r&&l.includes(r)}},F=(i,c)=>{const r={};return p.forEach(C=>{r[`${i}-align-${C}`]=c.align===C}),r[`${i}-align-stretch`]=!c.align&&!!c.vertical,r},v=(i,c)=>{const r={};return t.forEach(C=>{r[`${i}-justify-${C}`]=c.justify===C}),r};function g(i,c){return I()(Object.assign(Object.assign(Object.assign({},M(i,c)),F(i,c)),v(i,c)))}var y=g;const f=i=>{const{componentCls:c}=i;return{[c]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},L=i=>{const{componentCls:c}=i;return{[c]:{"&-gap-small":{gap:i.flexGapSM},"&-gap-middle":{gap:i.flexGap},"&-gap-large":{gap:i.flexGapLG}}}},E=i=>{const{componentCls:c}=i,r={};return l.forEach(C=>{r[`${c}-wrap-${C}`]={flexWrap:C}}),r},n=i=>{const{componentCls:c}=i,r={};return p.forEach(C=>{r[`${c}-align-${C}`]={alignItems:C}}),r},U=i=>{const{componentCls:c}=i,r={};return t.forEach(C=>{r[`${c}-justify-${C}`]={justifyContent:C}}),r},P=()=>({});var b=(0,O.I$)("Flex",i=>{const{paddingXS:c,padding:r,paddingLG:C}=i,x=(0,h.IX)(i,{flexGapSM:c,flexGap:r,flexGapLG:C});return[f(x),L(x),E(x),n(x),U(x)]},P,{resetStyle:!1}),H=function(i,c){var r={};for(var C in i)Object.prototype.hasOwnProperty.call(i,C)&&c.indexOf(C)<0&&(r[C]=i[C]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,C=Object.getOwnPropertySymbols(i);x<C.length;x++)c.indexOf(C[x])<0&&Object.prototype.propertyIsEnumerable.call(i,C[x])&&(r[C[x]]=i[C[x]]);return r},z=j.forwardRef((i,c)=>{const{prefixCls:r,rootClassName:C,className:x,style:se,flex:K,gap:V,children:Y,vertical:J=!1,component:$="div"}=i,te=H(i,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:B,direction:N,getPrefixCls:re}=j.useContext(D.E_),G=re("flex",r),[w,ne,ae]=b(G),ee=J!=null?J:B==null?void 0:B.vertical,S=I()(x,C,B==null?void 0:B.className,G,ne,ae,y(G,i),{[`${G}-rtl`]:N==="rtl",[`${G}-gap-${V}`]:(0,T.n)(V),[`${G}-vertical`]:ee}),u=Object.assign(Object.assign({},B==null?void 0:B.style),se);return K&&(u.flex=K),V&&!(0,T.n)(V)&&(u.gap=V),w(j.createElement($,Object.assign({ref:c,className:S,style:u},(0,A.Z)(te,["justify","wrap","align"])),Y))})}}]);
