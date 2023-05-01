"use strict";(self.webpackChunkpity=self.webpackChunkpity||[]).push([[331],{73440:function(E,d,t){var i=t(42281),s=t(5474),N=t(48658),P=t(22522),m=t(93251),B=["fieldProps","proFieldProps"],F=["fieldProps","proFieldProps"],x="text",M=function(c){var o=c.fieldProps,h=c.proFieldProps,y=(0,s.Z)(c,B);return(0,m.jsx)(P.Z,(0,i.Z)({valueType:x,fieldProps:o,filedConfig:{valueType:x},proFieldProps:h},y))},O=function(c){var o=c.fieldProps,h=c.proFieldProps,y=(0,s.Z)(c,F);return(0,m.jsx)(P.Z,(0,i.Z)({valueType:"password",fieldProps:o,proFieldProps:h,filedConfig:{valueType:x}},y))},p=M;p.Password=O,p.displayName="ProFormComponent",d.Z=p},44329:function(E,d,t){var i=t(97647);d.ZP=i.A},40239:function(E,d,t){t.d(d,{f:function(){return C}});var i=t(44479),s=t(7065),N=t(7421),P=t.n(N),m=t(48658),B=t(73330),F=t(42281),x=t(36545),M=function(o){return(0,i.Z)({},o.componentCls,{width:"100%","&-wide":{maxWidth:1152,margin:"0 auto"}})};function O(c){return(0,x.Xj)("ProLayoutGridContent",function(o){var h=(0,F.Z)((0,F.Z)({},o),{},{componentCls:".".concat(c)});return[M(h)]})}var p=t(93251),C=function(o){var h=(0,m.useContext)(B.X),y=o.children,R=o.contentWidth,I=o.className,V=o.style,j=(0,m.useContext)(s.ZP.ConfigContext),w=j.getPrefixCls,e=o.prefixCls||w("pro"),K=R||h.contentWidth,L="".concat(e,"-grid-content"),T=O(L),z=T.wrapSSR,b=T.hashId,_=K==="Fixed";return z((0,p.jsx)("div",{className:P()(L,b,I,(0,i.Z)({},"".concat(L,"-wide"),_)),style:V,children:(0,p.jsx)("div",{className:"".concat(e,"-grid-content-children ").concat(b),children:y})}))}},73330:function(E,d,t){t.d(d,{X:function(){return s}});var i=t(48658),s=(0,i.createContext)({})},50588:function(E,d,t){t.r(d),t.d(d,{default:function(){return ee}});var i=t(1619),s=t.n(i),N=t(92105),P=t.n(N),m=t(48658),B=t(40239),F=t(34245),x=t(42281),M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},O=M,p=t(59740),C=function(a,l){return m.createElement(p.Z,(0,x.Z)((0,x.Z)({},a),{},{ref:l,icon:O}))};C.displayName="UploadOutlined";var c=m.forwardRef(C),o=t(39795),h=t(70940),y=t(64216),R=t(44329),I=t(73440),V=t(9350),j={baseView:"baseView___CxZTz",left:"left___XO1C6",right:"right___Sf2Ie",avatar_title:"avatar_title___jh8rZ",avatar:"avatar___BfnYL",button_view:"button_view___YUvAZ",area_code:"area_code___ii6L7",phone_number:"phone_number___J1m_l"},w=t(12087),e=t(93251),K=function(a,l,r){r()},L=function(a){var l=a.avatar,r=a.dispatch;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:j.avatar_title,children:"\u5934\u50CF"}),(0,e.jsx)("div",{className:j.avatar,children:(0,e.jsx)("img",{src:l,alt:"avatar"})}),(0,e.jsx)(o.Z,{showUploadList:!1,customRequest:function(v){r({type:"user/avatar",payload:{file:v.file}})},fileList:[],children:(0,e.jsx)("div",{className:j.button_view,children:(0,e.jsxs)(h.ZP,{children:[(0,e.jsx)(c,{}),"\u66F4\u6362\u5934\u50CF"]})})})]})},T=function(a){var l=a.user,r=a.loading,n=a.dispatch,v=l.currentUser,g=y.Z.useForm(),S=P()(g,1),W=S[0],G=function(){return v?v.avatar?v.avatar:w.Z.AVATAR_URL:""},D=function(){var Z=W.getFieldsValue();n({type:"user/updateUser",payload:s()(s()({},Z),{},{id:v.id})}),n({type:"user/fetchCurrent"})};return(0,e.jsx)("div",{className:j.baseView,children:r?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:j.left,children:(0,e.jsxs)(R.ZP,{form:W,layout:"vertical",onFinish:D,submitter:{resetButtonProps:{style:{display:"none"}},submitButtonProps:{children:"\u66F4\u65B0\u57FA\u672C\u4FE1\u606F"}},initialValues:s()(s()({},v),{},{phone:v==null?void 0:v.phone}),hideRequiredMark:!0,children:[(0,e.jsx)(I.Z,{width:"md",name:"name",label:"\u59D3\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D!"}]}),(0,e.jsx)(I.Z,{width:"md",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1!"}]}),(0,e.jsx)(I.Z,{width:"md",name:"phone",label:"\u8054\u7CFB\u7535\u8BDD",placeholder:"\u8F93\u5165\u7535\u8BDD\u540E\u53EF\u63A5\u6536\u9489\u9489/\u4F01\u4E1A\u5FAE\u4FE1\u901A\u77E5\u54E6",rules:[{required:!1,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u8054\u7CFB\u7535\u8BDD!"},{validator:K}]})]})}),(0,e.jsx)("div",{className:j.right,children:(0,e.jsx)(L,{avatar:G(),dispatch:n})})]})})},z=(0,V.connect)(function(f){var a=f.user;return{user:a}})(T),b=function(){var a=function(){return[{title:"\u7ED1\u5B9A\u6DD8\u5B9D",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u6DD8\u5B9D\u8D26\u53F7",actions:[_jsx("a",{children:"\u7ED1\u5B9A"},"Bind")],avatar:_jsx(TaobaoOutlined,{className:"taobao"})},{title:"\u7ED1\u5B9A\u652F\u4ED8\u5B9D",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u652F\u4ED8\u5B9D\u8D26\u53F7",actions:[_jsx("a",{children:"\u7ED1\u5B9A"},"Bind")],avatar:_jsx(AlipayOutlined,{className:"alipay"})},{title:"\u7ED1\u5B9A\u9489\u9489",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u9489\u9489\u8D26\u53F7",actions:[_jsx("a",{children:"\u7ED1\u5B9A"},"Bind")],avatar:_jsx(DingdingOutlined,{className:"dingding"})}]};return _jsx(Fragment,{children:_jsx(List,{itemLayout:"horizontal",dataSource:a(),renderItem:function(r){return _jsx(List.Item,{actions:r.actions,children:_jsx(List.Item.Meta,{avatar:r.avatar,title:r.title,description:r.description})})}})})},_=null,X=t(82511),A=t(32762),H=function(){var a=function(){var n=(0,e.jsx)(X.Z,{checkedChildren:"\u5F00",unCheckedChildren:"\u5173",defaultChecked:!0});return[{title:"\u8D26\u6237\u5BC6\u7801",description:"\u5176\u4ED6\u7528\u6237\u7684\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[n]},{title:"\u7CFB\u7EDF\u6D88\u606F",description:"\u7CFB\u7EDF\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[n]},{title:"\u5F85\u529E\u4EFB\u52A1",description:"\u5F85\u529E\u4EFB\u52A1\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[n]}]},l=a();return(0,e.jsx)(m.Fragment,{children:(0,e.jsx)(A.ZP,{itemLayout:"horizontal",dataSource:l,renderItem:function(n){return(0,e.jsx)(A.ZP.Item,{actions:n.actions,children:(0,e.jsx)(A.ZP.Item.Meta,{title:n.title,description:n.description})})}})})},Y=H,$={strong:(0,e.jsx)("span",{className:"strong",children:"\u5F3A"}),medium:(0,e.jsx)("span",{className:"medium",children:"\u4E2D"}),weak:(0,e.jsx)("span",{className:"weak",children:"\u5F31 Weak"})},J=function(){var a=function(){return[{title:"\u8D26\u6237\u5BC6\u7801",description:(0,e.jsxs)(e.Fragment,{children:["\u5F53\u524D\u5BC6\u7801\u5F3A\u5EA6\uFF1A",$.strong]}),actions:[(0,e.jsx)("a",{children:"\u4FEE\u6539"},"Modify")]},{title:"\u5BC6\u4FDD\u624B\u673A",description:"\u5DF2\u7ED1\u5B9A\u624B\u673A\uFF1A138****8293",actions:[(0,e.jsx)("a",{children:"\u4FEE\u6539"},"Modify")]},{title:"\u5BC6\u4FDD\u95EE\u9898",description:"\u672A\u8BBE\u7F6E\u5BC6\u4FDD\u95EE\u9898\uFF0C\u5BC6\u4FDD\u95EE\u9898\u53EF\u6709\u6548\u4FDD\u62A4\u8D26\u6237\u5B89\u5168",actions:[(0,e.jsx)("a",{children:"\u8BBE\u7F6E"},"Set")]},{title:"\u5907\u7528\u90AE\u7BB1",description:"\u5DF2\u7ED1\u5B9A\u90AE\u7BB1\uFF1Aant***sign.com",actions:[(0,e.jsx)("a",{children:"\u4FEE\u6539"},"Modify")]},{title:"MFA \u8BBE\u5907",description:"\u672A\u7ED1\u5B9A MFA \u8BBE\u5907\uFF0C\u7ED1\u5B9A\u540E\uFF0C\u53EF\u4EE5\u8FDB\u884C\u4E8C\u6B21\u786E\u8BA4",actions:[(0,e.jsx)("a",{children:"\u7ED1\u5B9A"},"bind")]}]},l=a();return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(A.ZP,{itemLayout:"horizontal",dataSource:l,renderItem:function(n){return(0,e.jsx)(A.ZP.Item,{actions:n.actions,children:(0,e.jsx)(A.ZP.Item.Meta,{title:n.title,description:n.description})})}})})},Q=J,U={main:"main___mGCWD",leftMenu:"leftMenu___OBKuo",right:"right___j0rZL",title:"title___NjH5F"},k=F.Z.Item,q=function(){var a={base:"\u57FA\u672C\u8BBE\u7F6E",security:"\u5B89\u5168\u8BBE\u7F6E",notification:"\u65B0\u6D88\u606F\u901A\u77E5"},l=(0,m.useState)({mode:"inline",selectKey:"base"}),r=P()(l,2),n=r[0],v=r[1],g=(0,m.useRef)(),S=function(){requestAnimationFrame(function(){if(!!g.current){var u="inline",Z=g.current.offsetWidth;g.current.offsetWidth<641&&Z>400&&(u="horizontal"),window.innerWidth<768&&Z>400&&(u="horizontal"),v(s()(s()({},n),{},{mode:u}))}})};(0,m.useLayoutEffect)(function(){return g.current&&(window.addEventListener("resize",S),S()),function(){window.removeEventListener("resize",S)}},[g.current]);var W=function(){return Object.keys(a).map(function(u){return(0,e.jsx)(k,{children:a[u]},u)})},G=function(){var u=n.selectKey;switch(u){case"base":return(0,e.jsx)(z,{});case"security":return(0,e.jsx)(Q,{});case"notification":return(0,e.jsx)(Y,{});default:return null}};return(0,e.jsx)(B.f,{children:(0,e.jsxs)("div",{className:U.main,ref:function(u){u&&(g.current=u)},children:[(0,e.jsx)("div",{className:U.leftMenu,children:(0,e.jsx)(F.Z,{mode:n.mode,selectedKeys:[n.selectKey],onClick:function(u){var Z=u.key;v(s()(s()({},n),{},{selectKey:Z}))},children:W()})}),(0,e.jsxs)("div",{className:U.right,children:[(0,e.jsx)("div",{className:U.title,children:a[n.selectKey]}),G()]})]})})},ee=q},70214:function(E,d,t){var i=t(82794);d.Z=i.Z},81386:function(E,d,t){var i=t(5381);d.Z=i.Z}}]);
