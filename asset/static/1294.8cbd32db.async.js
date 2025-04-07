"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1294],{58638:function(W,C,i){i.d(C,{Z:function(){return L}});var r=i(87462),v=i(67294),b={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},h=b,E=i(84089),j=function(R,O){return v.createElement(E.Z,(0,r.Z)({},R,{ref:O,icon:h}))},w=v.forwardRef(j),L=w},87784:function(W,C,i){i.d(C,{Z:function(){return L}});var r=i(87462),v=i(67294),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"},h=b,E=i(84089),j=function(R,O){return v.createElement(E.Z,(0,r.Z)({},R,{ref:O,icon:h}))},w=v.forwardRef(j),L=w},26412:function(W,C,i){i.d(C,{Z:function(){return ie}});var r=i(67294),v=i(93967),b=i.n(v),h=i(74443),E=i(53124),j=i(98675),w=i(25378),A={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},O=r.createContext({}),F=i(50344),J=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const K=e=>(0,F.Z)(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function Q(e,t,o){const n=r.useMemo(()=>t||K(o),[t,o]);return r.useMemo(()=>n.map(a=>{var{span:s}=a,c=J(a,["span"]);return s==="filled"?Object.assign(Object.assign({},c),{filled:!0}):Object.assign(Object.assign({},c),{span:typeof s=="number"?s:(0,h.m9)(e,s)})}),[n,e])}var Y=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};function q(e,t){let o=[],n=[],l=!1,a=0;return e.filter(s=>s).forEach(s=>{const{filled:c}=s,d=Y(s,["filled"]);if(c){n.push(d),o.push(n),n=[],a=0;return}const m=t-a;a+=s.span||1,a>=t?(a>t?(l=!0,n.push(Object.assign(Object.assign({},d),{span:m}))):n.push(d),o.push(n),n=[],a=0):n.push(d)}),n.length>0&&o.push(n),o=o.map(s=>{const c=s.reduce((d,m)=>d+(m.span||1),0);if(c<t){const d=s[s.length-1];return d.span=t-c+1,s}return s}),[o,l]}var k=(e,t)=>{const[o,n]=(0,r.useMemo)(()=>q(t,e),[t,e]);return o},_=e=>{let{children:t}=e;return t};function X(e){return e!=null}var D=e=>{const{itemPrefixCls:t,component:o,span:n,className:l,style:a,labelStyle:s,contentStyle:c,bordered:d,label:m,content:u,colon:$,type:x}=e,g=o;return d?r.createElement(g,{className:b()({[`${t}-item-label`]:x==="label",[`${t}-item-content`]:x==="content"},l),style:a,colSpan:n},X(m)&&r.createElement("span",{style:s},m),X(u)&&r.createElement("span",{style:c},u)):r.createElement(g,{className:b()(`${t}-item`,l),style:a,colSpan:n},r.createElement("div",{className:`${t}-item-container`},(m||m===0)&&r.createElement("span",{className:b()(`${t}-item-label`,{[`${t}-item-no-colon`]:!$}),style:s},m),(u||u===0)&&r.createElement("span",{className:b()(`${t}-item-content`),style:c},u)))};function Z(e,t,o){let{colon:n,prefixCls:l,bordered:a}=t,{component:s,type:c,showLabel:d,showContent:m,labelStyle:u,contentStyle:$}=o;return e.map((x,g)=>{let{label:I,children:T,prefixCls:N=l,className:P,style:M,labelStyle:y,contentStyle:p,span:S=1,key:z}=x;return typeof s=="string"?r.createElement(D,{key:`${c}-${z||g}`,className:P,style:M,labelStyle:Object.assign(Object.assign({},u),y),contentStyle:Object.assign(Object.assign({},$),p),span:S,colon:n,component:s,itemPrefixCls:N,bordered:a,label:d?I:null,content:m?T:null,type:c}):[r.createElement(D,{key:`label-${z||g}`,className:P,style:Object.assign(Object.assign(Object.assign({},u),M),y),span:1,colon:n,component:s[0],itemPrefixCls:N,bordered:a,label:I,type:"label"}),r.createElement(D,{key:`content-${z||g}`,className:P,style:Object.assign(Object.assign(Object.assign({},$),M),p),span:S*2-1,component:s[1],itemPrefixCls:N,bordered:a,content:T,type:"content"})]})}var ee=e=>{const t=r.useContext(O),{prefixCls:o,vertical:n,row:l,index:a,bordered:s}=e;return n?r.createElement(r.Fragment,null,r.createElement("tr",{key:`label-${a}`,className:`${o}-row`},Z(l,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),r.createElement("tr",{key:`content-${a}`,className:`${o}-row`},Z(l,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):r.createElement("tr",{key:a,className:`${o}-row`},Z(l,e,Object.assign({component:s?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},f=i(11568),G=i(14747),te=i(83559),ne=i(83262);const le=e=>{const{componentCls:t,labelBg:o}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${(0,f.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${(0,f.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,f.bf)(e.padding)} ${(0,f.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,f.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:o,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,f.bf)(e.paddingSM)} ${(0,f.bf)(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,f.bf)(e.paddingXS)} ${(0,f.bf)(e.padding)}`}}}}}},oe=e=>{const{componentCls:t,extraColor:o,itemPaddingBottom:n,itemPaddingEnd:l,colonMarginRight:a,colonMarginLeft:s,titleMarginBottom:c}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,G.Wf)(e)),le(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:c},[`${t}-title`]:Object.assign(Object.assign({},G.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:o,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n,paddingInlineEnd:l},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,f.bf)(s)} ${(0,f.bf)(a)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},re=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var se=(0,te.I$)("Descriptions",e=>{const t=(0,ne.IX)(e,{});return oe(t)},re),ae=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const U=e=>{const{prefixCls:t,title:o,extra:n,column:l,colon:a=!0,bordered:s,layout:c,children:d,className:m,rootClassName:u,style:$,size:x,labelStyle:g,contentStyle:I,items:T}=e,N=ae(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:P,direction:M,descriptions:y}=r.useContext(E.E_),p=P("descriptions",t),S=(0,w.Z)(),z=r.useMemo(()=>{var B;return typeof l=="number"?l:(B=(0,h.m9)(S,Object.assign(Object.assign({},A),l)))!==null&&B!==void 0?B:3},[S,l]),ce=Q(S,T,d),H=(0,j.Z)(x),de=k(z,ce),[me,pe,fe]=se(p),ue=r.useMemo(()=>({labelStyle:g,contentStyle:I}),[g,I]);return me(r.createElement(O.Provider,{value:ue},r.createElement("div",Object.assign({className:b()(p,y==null?void 0:y.className,{[`${p}-${H}`]:H&&H!=="default",[`${p}-bordered`]:!!s,[`${p}-rtl`]:M==="rtl"},m,u,pe,fe),style:Object.assign(Object.assign({},y==null?void 0:y.style),$)},N),(o||n)&&r.createElement("div",{className:`${p}-header`},o&&r.createElement("div",{className:`${p}-title`},o),n&&r.createElement("div",{className:`${p}-extra`},n)),r.createElement("div",{className:`${p}-view`},r.createElement("table",null,r.createElement("tbody",null,de.map((B,V)=>r.createElement(ee,{key:V,index:V,colon:a,prefixCls:p,vertical:c==="vertical",bordered:s,row:B}))))))))};U.Item=_;var ie=U}}]);
