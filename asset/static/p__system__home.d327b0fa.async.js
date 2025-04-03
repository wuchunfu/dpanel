"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2548],{1699:function(q,C,n){n.d(C,{u:function(){return I}});var F=n(9783),s=n.n(F),A=n(97857),_=n.n(A),g=n(67294),b=n(82346),x=n(42075),M=n(85893),I=function(f){var c=(0,b.useAccess)(),j=Array.isArray(f.access)?f.access:[f.access],u;return typeof f.children=="function"?u=f.children(j.reduce(function(d,e){return _()(_()({},d),{},s()({},e,c[e]))},{})):j.every(function(d){return c[d]})?u=f.children:u=f.fallback,f.space?(0,M.jsx)(x.Z,_()(_()({},f.space),{},{children:u})):u}},80821:function(q,C,n){n.d(C,{Z:function(){return I}});var F=n(5574),s=n.n(F),A=n(24963),_=n(86738),g=n(28036),b=n(83062),x=n(67294),M=n(85893);function I(i){var f=(0,x.useState)(!1),c=s()(f,2),j=c[0],u=c[1],d=(0,x.useContext)(A.Z),e=d.lang,G=d.notice,H=d.message,L=function(){u(!0);var V=i.action();V instanceof Promise?V.then(function(N){if(u(!1),N){typeof i.onSuccess=="function"&&i.onSuccess(N);var K="";i.messageSuccess?typeof i.messageSuccess=="function"?K=i.messageSuccess(N):K=i.messageSuccess.indexOf("notification.")==0?e(i.messageSuccess):i.messageSuccess:K=e("notification.finish"),i.asynced?H.info(K):H.success(K)}}).catch(function(N){u(!1),typeof i.onError=="function"&&i.onError(N)}):u(!1)};return i.confirm?(0,M.jsx)(_.Z,{style:{width:500},title:i.confirmTitle?i.confirmTitle:e("notification.title.tip"),description:typeof i.confirm=="string"&&i.confirm.indexOf("notification.")==0?e(i.confirm):i.confirm,onConfirm:L,okText:"Yes",cancelText:"No",onOpenChange:i.confirmOnOpenChange,children:(0,M.jsx)(g.ZP,{block:i.block,disabled:i.disabled,icon:!i.children&&j?void 0:i.icon,loading:j,danger:i.danger,type:i.type,children:i.children})}):(0,M.jsx)(b.Z,{title:i.tips,children:(0,M.jsx)(g.ZP,{block:i.block,style:i.ghost?{padding:0,height:"auto",width:"auto"}:{},disabled:i.disabled,icon:!i.children&&j?void 0:i.icon,loading:j,onClick:L,danger:i.danger,type:i.type,children:i.children})})}},27619:function(q,C,n){n.d(C,{Z:function(){return f}});var F=n(97857),s=n.n(F),A=n(19632),_=n.n(A),g=n(5574),b=n.n(g),x=n(64183),M=n(82346),I=n(67294),i=n(85893);function f(c){var j,u=(0,I.useState)("academy"),d=b()(u,2),e=d[0],G=d[1],H=Math.max.apply(Math,_()(c.data.map(function(m){var E;return(E=m[c.yField])!==null&&E!==void 0?E:0}))),L=(0,M.useModel)("@@initialState"),z=L.initialState,V=L.loading,N=L.error,K=L.refresh,ae=L.setInitialState,Y={xField:c.xField,yField:c.yField,height:200,axis:{y:{line:!0},x:{line:!0,grid:{visable:!0},labelAutoRotate:!0}},style:{opacity:.4},tooltip:{channel:"y",valueFormatter:c.yLabelFormatter},scale:{y:{domainMin:(j=c.yDomainMin)!==null&&j!==void 0?j:0,domainMax:c.yDomainMax?c.yDomainMax:c.yDomainMaxCallback?c.yDomainMaxCallback(H):H}},data:c.data};return c.yLabelFormatter&&(Y.axis.y.labelFormatter=c.yLabelFormatter),c.colorField&&(Y.colorField=c.colorField),(0,I.useEffect)(function(){(z==null?void 0:z.theme.algorithm)=="dark"?G("classicDark"):G("academy")},[z]),(0,i.jsx)(x.Z,s()({theme:e},Y))}},24963:function(q,C,n){var F=n(67294),s=(0,F.createContext)({});C.Z=s},76214:function(q,C,n){n.r(C),n.d(C,{default:function(){return He}});var F=n(15009),s=n.n(F),A=n(99289),_=n.n(A),g=n(5574),b=n.n(g),x=n(19632),M=n.n(x),I=n(1699),i=n(80821),f=n(27619),c=n(97857),j=n.n(c),u=n(28413),d=n(67294),e=n(85893),G=(0,d.forwardRef)(function(T,ee){(0,d.useImperativeHandle)(ee,function(){return{zoomIn:function(){$<=0||$-5<=0?J(1):J($-5)},zoomOut:function(){$>T.data.length||$+5>T.data.length?J(T.data.length):J($+5)}}});var ne=(0,d.useState)(20),X=b()(ne,2),$=X[0],J=X[1],se={colorField:"value",valueField:"value",scale:{color:{range:["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]}},legend:!1},ie=function(){return T.data.length<=$?T.data:T.data.slice(0,$)};return(0,d.useEffect)(function(){},[]),T.data?(0,e.jsx)(u.Z,j()(j()({},se),{},{height:500,data:{name:"root",children:ie()}})):(0,e.jsx)(e.Fragment,{})}),H=G,L=n(55241),z=n(71230),V=n(15746),N=n(38703),K=(0,d.forwardRef)(function(T,ee){return(0,d.useImperativeHandle)(ee,function(){return{}}),(0,e.jsxs)(L.Z,{placement:"left",children:[(0,e.jsx)(z.Z,{justify:"center",children:(0,e.jsx)(V.Z,{children:(0,e.jsx)(N.Z,{percent:T.showPercent,type:"dashboard",format:function(X,$){return"".concat(X,"%")},size:150,status:T.showPercent>=100?"exception":"normal"})})}),(0,e.jsx)(z.Z,{justify:"center",children:(0,e.jsxs)(V.Z,{style:{marginTop:"10px"},children:[T.showLabel,": ",T.showUse," / ",T.showTotal]})})]})}),ae=K,Y=n(24963),m=n(87662),E=n(2831),P=n(18148),a=n(89075),U=n(5251),$e=n(45605),ke=n(1210),le=n(12122),Ke=n(35598),we=n(15668),S=n(38345),Ie=n(184),R=n(88273),w=n(82346),re=n(42075),de=n(28036),W=n(26412),be=n(83062),ze=n(40411),Oe=n(25593),Te=n(60940),Ve=n(86250),Ne=n(96074),Ge=n(93162);function He(){var T,ee,ne,X,$,J,se,ie,te,ce,me,_e,he,fe,ve,ge,pe,je,Ee,ye,Ye=function(o,l){switch(l.type){case"update":var O=new Date().toLocaleTimeString(),h=0,p=0,ue=0,oe=0,k=0,D=0;l.payload.map(function(B){h+=B.cpu,p+=B.memory.in,ue+=B.networkIO.in,oe+=B.networkIO.out,k+=B.blockIO.in,D+=B.blockIO.out});var Q={list:l.payload,cpu:h,memory:p,network:[].concat(M()(o.network.slice(0,20)),[{date:O,usage:oe,type:"\u4E0A\u884C",source:{usage:oe}},{date:O,type:"\u4E0B\u884C",usage:ue,source:{usage:ue}}]),io:[].concat(M()(o.io.slice(0,20)),[{date:O,usage:D,type:"\u8BFB\u53D6",source:{usage:D}},{date:O,type:"\u5199\u5165",usage:k,source:{usage:k}}])};return Q}},Ce=(0,w.useAccess)(),De=(0,d.useRef)(),Qe=(0,d.useState)(),Me=b()(Qe,2),Pe=Me[0],Xe=Me[1],Je=(0,d.useState)(),Se=b()(Je,2),t=Se[0],qe=Se[1],en=(0,d.useState)(),Fe=b()(en,2),y=Fe[0],nn=Fe[1],tn=(0,d.useState)(),Ue=b()(tn,2),r=Ue[0],an=Ue[1],rn=(0,d.useState)(),Ze=b()(rn,2),xe=Ze[0],sn=Ze[1],un=(0,d.useReducer)(Ye,{cpu:0,memory:0,network:[],io:[],list:[]}),Le=b()(un,2),Z=Le[0],Re=Le[1],ln=(0,d.useContext)(Y.Z),Be=ln.loading,Ae=(0,w.useModel)("subscriber");Ae.addDataHandler("container:stat",function(v){Re({type:"update",payload:v.data})});var We=function(){var v=_()(s()().mark(function o(){var l,O,h,p,ue;return s()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return Be.show(),k.next=3,(0,E.aF)().finally(function(){Be.destroy()});case 3:return l=k.sent,qe(l.data),k.next=7,(0,E.Ll)();case 7:return O=k.sent,an(O.data),h={total:0,container:0,volume:0,image:0,cache:0,item:[],updatedAt:""},p=O.data.diskUsage,p.usage.Containers&&p.usage.Containers.map(function(D){var Q,B;h.container+=D.SizeRootFs+((Q=D.SizeRw)!==null&&Q!==void 0?Q:0),h.item.push({name:D.Names[0],value:parseFloat(((D.SizeRootFs+((B=D.SizeRw)!==null&&B!==void 0?B:0))/1024/1024).toFixed(2))})}),p.usage.Volumes&&p.usage.Volumes.map(function(D){h.volume+=D.UsageData.Size,h.item.push({name:D.Name,value:parseFloat((D.UsageData.Size/1024/1024).toFixed(2))})}),p.usage.Images&&p.usage.Images.map(function(D){var Q,B;h.image+=D.Size-((Q=D.Sharedsize)!==null&&Q!==void 0?Q:0),h.item.push({name:D.RepoTags&&D.RepoTags.length>0?D.RepoTags[0]:D.Id,value:parseFloat(((D.Size-((B=D.Sharedsize)!==null&&B!==void 0?B:0))/1024/1024).toFixed(2))})}),p.usage.BuildCache&&p.usage.BuildCache.map(function(D){h.cache+=D.Size}),!p.usage.Containers&&!p.usage.Images&&!p.usage.Volumes?h.item.push({name:"\u6B63\u5728\u83B7\u53D6\u8BA1\u7B97,\u4E2A\u522B\u7CFB\u7EDF\u4F1A\u6BD4\u8F83\u8017\u65F6.",value:100}):h.updatedAt=new Date(p.updatedAt).toLocaleString(),h.total=p.usage.LayersSize,nn(h),k.next=20,(0,m.Cz)({follow:!0});case 20:ue=k.sent,Re({type:"update",payload:[]});case 22:case"end":return k.stop()}},o)}));return function(){return v.apply(this,arguments)}}();return(0,d.useEffect)(function(){return We(),!Ce.canSeeEnableCe&&(0,a.YQ)().then(function(v){Xe(v.data)}),(0,E.u5)().then(function(v){sn(v.data)}),function(){Ae.progress.close("container:stat")}},[]),(0,e.jsxs)(S.Z,{direction:"column",gutter:[0,10],ghost:!0,children:[(0,e.jsxs)(S.Z,{bordered:!0,split:"vertical",children:[(0,e.jsx)(S.Z,{style:{height:"570px"},colSpan:"40%",headerBordered:!0,title:(0,e.jsx)($e.Z,{}),subTitle:"\u57FA\u7840\u4FE1\u606F",extra:(0,e.jsx)(re.Z,{children:Ce.canSeeEnableCe?(0,e.jsx)("a",{href:"https://dpanel.cc/#/zh-cn/manual/pro",target:"_blank",children:"Pro \u7248"},"proLink"):Pe&&Pe.expireTime?(0,e.jsxs)("span",{children:["\u8FC7\u671F\u65F6\u95F4: ",new Date(Pe.expireTime).toLocaleString()]},"expireTime"):(0,e.jsx)(de.ZP,{type:"link",onClick:_()(s()().mark(function v(){var o,l;return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,a.$w)();case 2:o=h.sent,l=new Blob([o.data.code],{type:"text/plain"}),(0,Ge.saveAs)(l,"dpanel.code");case 5:case"end":return h.stop()}},v)})),children:"\u6388\u6743\u7801"},"downloadCode")}),children:(0,e.jsxs)(W.Z,{column:1,labelStyle:{width:100,justifyContent:"flex-end"},children:[(0,e.jsx)(W.Z.Item,{label:"\u9762\u677F\u4FE1\u606F",children:(0,e.jsxs)(re.Z,{direction:"horizontal",children:["DPanel - ",t==null?void 0:t.dpanel.version," - ",t==null?void 0:t.dpanel.env," - ",t==null?void 0:t.dpanel.family,(0,e.jsx)(be.Z,{title:"\u5347\u7EA7\u65E5\u5FD7",children:(0,e.jsx)("a",{target:"_blank",href:"https://github.com/donknap/dpanel/releases",children:(0,e.jsx)(ke.Z,{})})}),xe&&xe.newVersion!=""&&(0,e.jsx)(w.Link,{to:"/system/upgrade",children:(0,e.jsx)(ze.Z,{count:xe.newVersion,size:"small"})})]})}),(0,e.jsxs)(W.Z.Item,{label:"Docker Host",children:[t==null?void 0:t.info.Name," ",(0,e.jsx)(e.Fragment,{children:(t==null?void 0:t.info.ID)==""&&(0,e.jsx)(w.Link,{to:"/system/env?id=local",children:"\u914D\u7F6E\u9ED8\u8BA4 Docker \u5BA2\u6237\u7AEF"})})]}),(0,e.jsx)(W.Z.Item,{label:"Docker \u7248\u672C",children:"".concat(t==null?void 0:t.info.OperatingSystem," - ").concat(t==null?void 0:t.info.ServerVersion," - ").concat(t==null?void 0:t.sdkVersion)}),(0,e.jsx)(W.Z.Item,{label:"\u6587\u4EF6\u5B58\u50A8\u9A71\u52A8",children:"".concat(t==null?void 0:t.info.Driver)}),(0,e.jsx)(W.Z.Item,{label:"\u65E5\u5FD7\u9A71\u52A8",children:"".concat(t==null?void 0:t.info.LoggingDriver)}),(0,e.jsx)(W.Z.Item,{label:"\u7CFB\u7EDF\u67B6\u6784",children:"".concat(t==null?void 0:t.info.KernelVersion," - ").concat(t==null?void 0:t.info.Architecture)}),(0,e.jsxs)(W.Z.Item,{label:"Cpu",children:[t==null?void 0:t.info.NCPU," \u6838"]}),(0,e.jsx)(W.Z.Item,{label:"Memory",children:(0,U.FI)((T=t==null?void 0:t.info.MemTotal)!==null&&T!==void 0?T:0)}),(0,e.jsx)(W.Z.Item,{label:"\u6839\u76EE\u5F55",children:t==null?void 0:t.info.DockerRootDir}),(0,e.jsx)(W.Z.Item,{label:"\u5B58\u50A8\u5377\u63D2\u4EF6",children:(0,e.jsx)(re.Z,{children:t==null?void 0:t.info.Plugins.Volume})}),(0,e.jsx)(W.Z.Item,{label:"\u7F51\u7EDC\u63D2\u4EF6",children:(0,e.jsx)(re.Z,{children:t==null?void 0:t.info.Plugins.Network})}),(0,e.jsx)(W.Z.Item,{label:"\u7CFB\u7EDF\u65F6\u95F4",children:new Date((ee=t==null?void 0:t.info.SystemTime)!==null&&ee!==void 0?ee:"").toLocaleString()})]})}),(0,e.jsxs)(S.Z,{headerBordered:!0,title:(0,e.jsx)(le.Z,{}),subTitle:"\u5BB9\u5668\u8FD0\u884C\u7EDF\u8BA1",split:"horizontal",extra:(0,e.jsx)(Ie.a,{title:"\u5BB9\u5668\u72B6\u6001\u6570\u636E",submitter:!1,trigger:(0,e.jsx)(Oe.Z.Link,{children:"\u8BE6\u60C5\u6570\u636E"}),children:(0,e.jsx)(Te.Z,{pagination:!1,dataSource:Z.list,rowKey:"name",columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"name"},{title:"Cpu",dataIndex:"cpu",sorter:function(o,l){return o.cpu-l.cpu},render:function(o,l,O){return"".concat(l.cpu.toFixed(2),"%")}},{title:"\u5185\u5B58",dataIndex:"memory",sorter:function(o,l){return o.memory.in-l.memory.in},render:function(o,l,O){var h,p;return"".concat((0,U.FI)((h=l==null?void 0:l.memory.in)!==null&&h!==void 0?h:0)," / ").concat((0,U.FI)((p=l==null?void 0:l.memory.out)!==null&&p!==void 0?p:0))}},{title:"\u7F51\u7EDC I/O",dataIndex:"networkIO",render:function(o,l,O){return"".concat((0,U.FI)(l.networkIO.in)," / ").concat((0,U.FI)(l.networkIO.out))}},{title:"\u78C1\u76D8 I/O",dataIndex:"blockIO",render:function(o,l,O){return"".concat((0,U.FI)(l.blockIO.in)," / ").concat((0,U.FI)(l.blockIO.out))}}]})}),children:[(0,e.jsx)(S.Z,{children:(0,e.jsxs)(Ve.Z,{gap:50,align:"center",justify:"space-evenly",children:[(0,e.jsx)(ae,{showPercent:parseFloat((((ne=Z==null?void 0:Z.cpu)!==null&&ne!==void 0?ne:0)/((X=t==null?void 0:t.info.NCPU)!==null&&X!==void 0?X:0)).toFixed(2)),showLabel:"Cpu",showUse:"".concat((($=Z==null?void 0:Z.cpu)!==null&&$!==void 0?$:0).toFixed(2)),showTotal:"".concat((J=t==null?void 0:t.info.NCPU)!==null&&J!==void 0?J:0," \u6838")}),(0,e.jsx)(ae,{showPercent:parseFloat((((se=Z==null?void 0:Z.memory)!==null&&se!==void 0?se:0)/((ie=t==null?void 0:t.info.MemTotal)!==null&&ie!==void 0?ie:0)*100).toFixed(2)),showLabel:"\u5185\u5B58",showUse:(0,U.FI)((te=Z==null?void 0:Z.memory)!==null&&te!==void 0?te:0),showTotal:"".concat((0,U.FI)((ce=t==null?void 0:t.info.MemTotal)!==null&&ce!==void 0?ce:0))})]})}),(0,e.jsxs)(S.Z,{split:"vertical",wrap:!0,children:[(0,e.jsx)(S.Z,{colSpan:12,title:(0,e.jsx)(le.Z,{}),subTitle:"\u7F51\u7EDC",headerBordered:!0,children:(0,e.jsx)(f.Z,{yField:"usage",xField:"date",colorField:"type",data:Z.network,yLabelFormatter:function(o){return(0,U.FI)(parseFloat(o))},yDomainMaxCallback:function(o){return o*1.5}})}),(0,e.jsx)(S.Z,{colSpan:12,title:(0,e.jsx)(le.Z,{}),subTitle:"\u78C1\u76D8",headerBordered:!0,children:(0,e.jsx)(f.Z,{yField:"usage",xField:"date",colorField:"type",data:Z.io,yLabelFormatter:function(o){return(0,U.FI)(parseFloat(o))},yDomainMaxCallback:function(o){return o*1.5}})})]})]})]}),(0,e.jsxs)(S.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(le.Z,{}),subTitle:"\u7528\u91CF\u7EDF\u8BA1",extra:(0,e.jsxs)(re.Z,{children:[(0,e.jsx)(de.ZP,{icon:(0,e.jsx)(Ke.Z,{}),onClick:function(){var o;(o=De.current)===null||o===void 0||o.zoomIn()},shape:"circle"}),(0,e.jsx)(de.ZP,{icon:(0,e.jsx)(we.Z,{}),onClick:function(){var o;(o=De.current)===null||o===void 0||o.zoomOut()},shape:"circle"}),(0,e.jsx)(Ne.Z,{type:"vertical"}),(0,e.jsx)("span",{children:y&&y.updatedAt?"\u6570\u636E\u6700\u540E\u66F4\u65B0: ".concat(y.updatedAt):""},"lastUpdate")]},"size"),children:[(0,e.jsx)(S.Z,{colSpan:"50%",ghost:!0,children:(y==null?void 0:y.item)&&(y==null?void 0:y.item.length)>0&&(0,e.jsx)(H,{ref:De,data:(me=y==null?void 0:y.item)!==null&&me!==void 0?me:[]})}),(0,e.jsxs)(S.Z,{split:"horizontal",ghost:!0,children:[(0,e.jsx)(R.Z,{statistic:{title:"\u5BB9\u5668",value:(0,U.FI)((_e=y==null?void 0:y.container)!==null&&_e!==void 0?_e:0),description:"\u5BB9\u5668\u5360\u7528\u53CA\u8FD0\u884C\u5199\u5165\u6570\u636E"}}),(0,e.jsx)(R.Z,{statistic:{title:"\u955C\u50CF",value:(0,U.FI)((he=y==null?void 0:y.image)!==null&&he!==void 0?he:0),description:"\u5305\u542B\u4E2D\u95F4\u955C\u50CF"}}),(0,e.jsx)(R.Z,{statistic:{title:"\u5B58\u50A8",value:(0,U.FI)((fe=y==null?void 0:y.volume)!==null&&fe!==void 0?fe:0),description:"\u53EA\u5305\u542B\u5B58\u50A8\u5377,\u4E0D\u5305\u542B\u6302\u8F7D\u76EE\u5F55"}}),(0,e.jsx)(R.Z,{statistic:{title:"\u6784\u5EFA\u7F13\u5B58",value:(0,U.FI)((ve=y==null?void 0:y.cache)!==null&&ve!==void 0?ve:0),description:(0,e.jsx)(I.u,{access:"canSeeHomeOverviewClear",children:(0,e.jsx)(i.Z,{action:function(){return(0,P.c5)()},type:"link",onSuccess:function(){We()},ghost:!0,children:"\u6E05\u9664"})})}})]}),(0,e.jsxs)(S.Z,{ghost:!0,split:"horizontal",children:[(0,e.jsx)(S.Z,{ghost:!0,children:(0,e.jsxs)(R.Z.Group,{children:[(0,e.jsx)(R.Z,{statistic:{title:"\u5BB9\u5668",value:(ge=t==null?void 0:t.info.Containers)!==null&&ge!==void 0?ge:0,description:(0,e.jsx)(w.Link,{to:"/app/list",children:"\u67E5\u770B"})}}),(0,e.jsx)(R.Z,{statistic:{title:"\u9884\u8B66",status:"error",valueRender:function(o){var l,O,h,p=0;return r&&r.total&&r.total.containerRunning.stop&&(p+=r.total.containerRunning.stop),r&&r.total&&r.total.containerRunning.pause&&(p+=r.total.containerRunning.pause),r&&r.total&&r.total.containerRunning.unhealthy&&(p+=r.total.containerRunning.unhealthy),(0,e.jsx)(be.Z,{title:"\u505C\u6B62\uFF1A".concat((l=r==null?void 0:r.total.containerRunning.stop)!==null&&l!==void 0?l:0,"\uFF0C\u6682\u505C\uFF1A").concat((O=r==null?void 0:r.total.containerRunning.pause)!==null&&O!==void 0?O:0,"\uFF0C\u4E0D\u5065\u5EB7\uFF1A").concat((h=r==null?void 0:r.total.containerRunning.unhealthy)!==null&&h!==void 0?h:0),children:p})}}}),(0,e.jsx)(R.Z,{statistic:{title:"\u56DE\u6536\u7AD9",value:(pe=r==null?void 0:r.total.containerTask)!==null&&pe!==void 0?pe:0,description:(0,e.jsx)(w.Link,{to:"/app/list/recycle",children:"\u67E5\u770B"})}})]})}),(0,e.jsxs)(S.Z,{ghost:!0,children:[(0,e.jsx)(R.Z,{statistic:{title:"\u955C\u50CF",value:"".concat((je=(r==null?void 0:r.diskUsage.usage.Images)&&(r==null?void 0:r.diskUsage.usage.Images.length))!==null&&je!==void 0?je:0),description:(0,e.jsx)(w.Link,{to:"/image/list",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(R.Z,{statistic:{title:"\u4EFB\u52A1",value:(Ee=r==null?void 0:r.total.imageTask)!==null&&Ee!==void 0?Ee:0,description:(0,e.jsx)(w.Link,{to:"/image/list/recycle",children:"\u67E5\u770B"})},chartPlacement:"left"})]}),(0,e.jsxs)(S.Z,{ghost:!0,children:[(0,e.jsx)(R.Z,{statistic:{title:"\u7F51\u7EDC",value:r==null?void 0:r.total.network,description:(0,e.jsx)(w.Link,{to:"/docker/network",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(R.Z,{statistic:{title:"\u7AEF\u53E3\u6620\u5C04",value:r==null?void 0:r.total.port,description:(0,e.jsx)(Ie.a,{submitter:!1,title:"\u67E5\u770B\u6620\u5C04\u7AEF\u53E3",trigger:(0,e.jsx)(Oe.Z.Link,{children:"\u67E5\u770B"}),children:(0,e.jsx)(Te.Z,{pagination:!1,dataSource:r==null?void 0:r.port,rowKey:"name",columns:[{title:"\u4E3B\u673A\u7AEF\u53E3",dataIndex:["port","host"],sorter:function(o,l){return parseInt(o.port.host)-parseInt(l.port.host)},render:function(o,l,O){return"".concat(l.port.hostIp,":").concat(l.port.host)}},{title:"\u5BB9\u5668\u7AEF\u53E3",dataIndex:["port","dest"]},{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"name"}]})})},chartPlacement:"left"})]}),(0,e.jsxs)(S.Z,{ghost:!0,children:[(0,e.jsx)(R.Z,{statistic:{title:"\u5B58\u50A8\u5377",value:(ye=(r==null?void 0:r.diskUsage.usage.Volumes)&&(r==null?void 0:r.diskUsage.usage.Volumes.length))!==null&&ye!==void 0?ye:0,description:(0,e.jsx)(w.Link,{to:"/docker/volume",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(R.Z,{statistic:{title:"\u5907\u4EFD",value:r==null?void 0:r.total.backup,description:(0,e.jsx)(w.Link,{to:"/app/backup",children:"\u67E5\u770B"})},chartPlacement:"left"})]})]})]})]})}},2831:function(q,C,n){n.d(C,{Ll:function(){return i},aF:function(){return b},d6:function(){return c},u5:function(){return M}});var F=n(15009),s=n.n(F),A=n(99289),_=n.n(A),g=n(82346);function b(){return x.apply(this,arguments)}function x(){return x=_()(s()().mark(function u(){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.request)("/api/common/home/info",{method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},u)})),x.apply(this,arguments)}function M(){return I.apply(this,arguments)}function I(){return I=_()(s()().mark(function u(){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.request)("/api/common/home/check-new-version",{method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},u)})),I.apply(this,arguments)}function i(){return f.apply(this,arguments)}function f(){return f=_()(s()().mark(function u(){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.request)("/api/common/home/usage",{method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},u)})),f.apply(this,arguments)}function c(){return j.apply(this,arguments)}function j(){return j=_()(s()().mark(function u(){return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},u)})),j.apply(this,arguments)}},18148:function(q,C,n){n.d(C,{$q:function(){return u},Fj:function(){return N},KG:function(){return b},KX:function(){return ae},T8:function(){return c},Xn:function(){return i},ao:function(){return e},c5:function(){return z},c7:function(){return H}});var F=n(15009),s=n.n(F),A=n(99289),_=n.n(A),g=n(82346);function b(m){return x.apply(this,arguments)}function x(){return x=_()(s()().mark(function m(E){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,g.request)("/api/app/image/get-list",{method:"POST",data:E}));case 1:case"end":return a.stop()}},m)})),x.apply(this,arguments)}function M(m){return I.apply(this,arguments)}function I(){return I=_asyncToGenerator(_regeneratorRuntime().mark(function m(E){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,request("/api/app/log/image-build",{method:"POST",data:E});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},m)})),I.apply(this,arguments)}function i(m){return f.apply(this,arguments)}function f(){return f=_()(s()().mark(function m(E){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,g.request)("/api/app/image/get-list-build",{method:"POST",data:E}));case 1:case"end":return a.stop()}},m)})),f.apply(this,arguments)}function c(m){return j.apply(this,arguments)}function j(){return j=_()(s()().mark(function m(E){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,g.request)("/api/app/image/get-build-task",{method:"POST",data:E});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},m)})),j.apply(this,arguments)}function u(m){return d.apply(this,arguments)}function d(){return d=_()(s()().mark(function m(E){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,g.request)("/api/app/image/delete-build-task",{method:"POST",data:E});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},m)})),d.apply(this,arguments)}function e(m){return G.apply(this,arguments)}function G(){return G=_()(s()().mark(function m(E){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,g.request)("/api/app/image/image-delete",{method:"POST",data:E});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},m)})),G.apply(this,arguments)}function H(){return L.apply(this,arguments)}function L(){return L=_()(s()().mark(function m(){return s()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,g.request)("/api/app/image/image-prune",{method:"POST"});case 2:return P.abrupt("return",P.sent);case 3:case"end":return P.stop()}},m)})),L.apply(this,arguments)}function z(){return V.apply(this,arguments)}function V(){return V=_()(s()().mark(function m(){return s()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,g.request)("/api/app/image/build-prune",{method:"POST"});case 2:return P.abrupt("return",P.sent);case 3:case"end":return P.stop()}},m)})),V.apply(this,arguments)}function N(m){return K.apply(this,arguments)}function K(){return K=_()(s()().mark(function m(E){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,g.request)("/api/app/image/update-title",{method:"POST",data:E});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},m)})),K.apply(this,arguments)}function ae(m){return Y.apply(this,arguments)}function Y(){return Y=_()(s()().mark(function m(E){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,g.request)("/api/app/image/tag-sync",{method:"POST",data:E}));case 1:case"end":return a.stop()}},m)})),Y.apply(this,arguments)}},89075:function(q,C,n){n.d(C,{$w:function(){return b},YQ:function(){return M},ax:function(){return i}});var F=n(15009),s=n.n(F),A=n(99289),_=n.n(A),g=n(82346);function b(){return x.apply(this,arguments)}function x(){return x=_()(s()().mark(function c(){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.request)("/api/pro/home/get-machine-id",{method:"POST"}));case 1:case"end":return u.stop()}},c)})),x.apply(this,arguments)}function M(){return I.apply(this,arguments)}function I(){return I=_()(s()().mark(function c(){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.request)("/api/pro/home/get-license-info",{method:"POST"}));case 1:case"end":return u.stop()}},c)})),I.apply(this,arguments)}function i(){return f.apply(this,arguments)}function f(){return f=_()(s()().mark(function c(){return s()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.request)("/api/pro/home/login-info",{method:"POST"}));case 1:case"end":return u.stop()}},c)})),f.apply(this,arguments)}}}]);
