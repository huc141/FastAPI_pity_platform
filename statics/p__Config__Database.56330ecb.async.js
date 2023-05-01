"use strict";(self.webpackChunkpity=self.webpackChunkpity||[]).push([[3929],{49541:function(T,m,n){var D=n(13864),u=n(93251);m.Z=function(p){var r=p.title,O=p.text,d=p.onConfirm;return(0,u.jsx)(D.Z,{title:r,onConfirm:d,children:(0,u.jsx)("a",{children:O})})}},18853:function(T,m,n){n.d(m,{B:function(){return p}});var D=n(9791),u="//at.alicdn.com/t/font_915840_2b8lahxt5xv.js",p=(0,D.Z)({scriptUrl:u})},20970:function(T,m,n){var D=n(1619),u=n.n(D),p=n(92105),r=n.n(p),O=n(48658),d=n(64216),F=n(63368),P=n(70214),g=n(21577),c=n(93251),C=d.Z.Item,j=function(o){var A=o.title,M=o.width,$=o.left,V=o.right,x=o.formName,f=o.record,W=o.onFinish,N=o.loading,Q=o.fields,z=o.open,L=o.onCancel,Z=o.offset,G=Z===void 0?0:Z,R=o.children,K=o.Footer,U=o.onTest,Y=d.Z.useForm(),H=r()(Y,1),e=H[0],y=function(){e.validateFields().then(function(h){W(h)})};(0,O.useEffect)(function(){e.resetFields(),e.setFieldsValue(f)},[f]);var J={labelCol:{span:$},wrapperCol:{span:V}};return(0,c.jsxs)(F.Z,{style:{marginTop:G},confirmLoading:N,footer:K!==void 0?(0,c.jsx)(K,{onOk:y,onCancel:L,onTest:function(){e.validateFields().then(function(h){U(h)})}}):void 0,title:A,width:M,open:z,onOk:y,onCancel:L,children:[R||null,(0,c.jsx)(d.Z,u()(u()({form:e},J),{},{name:x,initialValues:f,onFinish:W,children:Q.map(function(i,h){return(0,c.jsx)(P.Z,{span:i.span||24,children:(0,c.jsx)(C,{label:i.label,colon:i.colon||!0,initialValue:i.initialValue,rules:[{required:i.required,message:i.message}],name:i.name,valuePropName:i.valuePropName||"value",children:(0,g.Z)(i.type,i.placeholder,i.component)})},h)})}))]})};m.Z=j},21577:function(T,m,n){var D=n(32224),u=n(82511),p=n(48658),r=n(93251),O=D.Z.TextArea,d=function(P,g){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;return c||(P==="input"?(0,r.jsx)(D.Z,{placeholder:g}):P==="textarea"?(0,r.jsx)(O,{placeholder:g}):P==="switch"?(0,r.jsx)(u.Z,{}):null)};m.Z=d},66603:function(T,m,n){n.r(m);var D=n(1619),u=n.n(D),p=n(14660),r=n.n(p),O=n(21464),d=n.n(O),F=n(92105),P=n.n(F),g=n(42096),c=n(22666),C=n(64216),j=n(33228),S=n(60020),o=n(32224),A=n(49776),M=n(70940),$=n(78890),V=n(61534),x=n(81386),f=n(70214),W=n(86061),N=n(43579),Q=n(50093),z=n(59918),L=n(25802),Z=n(51270),G=n(9350),R=n(48658),K=n(20970),U=n(12087),Y=n(49541),H=n(18853),e=n(93251),y=c.Z.Option,J={labelCol:{span:8},wrapperCol:{span:16}},i=function(I){var v=I.dispatch,b=I.gconfig,se=I.loading,re=C.Z.useForm(),oe=P()(re,1),X=oe[0],le=(0,R.useState)(null),ee=P()(le,2),k=ee[0],ne=ee[1],ae=b.envList,_e=b.envMap,ue=b.databaseModal,ie=b.dbConfigData,w=b.databaseRecord,de=se.effects,q=function(s){v({type:"gconfig/save",payload:s})},te=function(){var t=d()(r()().mark(function s(a){var l;return r()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,v({type:"gconfig/onTestDbConfig",payload:{sql_type:a.sql_type,host:a.host,port:a.port,username:a.username,password:a.password,database:a.database}});case 2:l=_.sent,ne(l);case 4:case"end":return _.stop()}},s)}));return function(a){return t.apply(this,arguments)}}(),ce=function(){var t=d()(r()().mark(function s(){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return v({type:"gconfig/fetchEnvList",payload:{page:1,size:1e4}}),l.next=3,B();case 3:case"end":return l.stop()}},s)}));return function(){return t.apply(this,arguments)}}(),B=function(){var t=d()(r()().mark(function s(){var a,l;return r()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,X.getFieldsValue();case 2:a=_.sent,l={name:a.name||"",database:a.database||""},a.env&&(l.env=a.env),v({type:"gconfig/fetchDbConfig",payload:u()({},l)});case 6:case"end":return _.stop()}},s)}));return function(){return t.apply(this,arguments)}}();(0,R.useEffect)(function(){ce()},[]);var Ee=[{title:"\u73AF\u5883",key:"env",dataIndex:"env",render:function(s){return(0,e.jsx)(j.Z,{children:_e[s]})}},{title:"\u540D\u79F0",key:"name",dataIndex:"name"},{title:"\u5730\u5740",key:"host",dataIndex:"host"},{title:"\u5E93\u540D",key:"database",dataIndex:"database"},{title:"\u7AEF\u53E3\u53F7",key:"port",dataIndex:"port"},{title:"\u5E10\u53F7",key:"username",dataIndex:"username"},{title:"\u5BC6\u7801",key:"password",dataIndex:"password"},{title:"\u7C7B\u578B",key:"sql_type",dataIndex:"sql_type",render:function(s){return s===0?(0,e.jsx)(j.Z,{color:"blue",children:"MySQL"}):s===1?(0,e.jsx)(j.Z,{color:"success",children:"Postgresql"}):(0,e.jsx)(j.Z,{children:"\u672A\u77E5"})}},{title:"\u64CD\u4F5C",key:"ops",render:function(s,a){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("a",{onClick:function(){q({databaseRecord:a,databaseModal:!0})},children:"\u7F16\u8F91"}),(0,e.jsx)(S.Z,{type:"vertical"}),(0,e.jsx)("a",{onClick:function(){te(a)},children:"\u6D4B\u8BD5"}),(0,e.jsx)(S.Z,{type:"vertical"}),(0,e.jsx)(Y.Z,{text:"\u5220\u9664",title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u914D\u7F6E\u5417?",onConfirm:d()(r()().mark(function l(){return r()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,v({type:"gconfig/deleteDbConfig",payload:{id:a.id}});case 2:return _.next=4,B();case 4:case"end":return _.stop()}},l)}))})]})}}],me=function(){var t=d()(r()().mark(function s(a){return r()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if(w.id){E.next=5;break}return E.next=3,v({type:"gconfig/insertDbConfig",payload:u()({},a)});case 3:E.next=7;break;case 5:return E.next=7,v({type:"gconfig/updateDbConfig",payload:u()({id:w.id},a)});case 7:return E.next=9,B();case 9:case"end":return E.stop()}},s)}));return function(a){return t.apply(this,arguments)}}(),De=[{name:"sql_type",label:"\u6570\u636E\u5E93\u7C7B\u578B",required:!0,component:(0,e.jsx)(c.Z,{children:Object.keys(U.Z.SQL_TYPE).map(function(t){return(0,e.jsx)(y,{value:parseInt(t,10),children:U.Z.SQL_TYPE[t]},t)})}),type:"select"},{name:"env",label:"\u73AF\u5883",required:!0,message:"\u8BF7\u9009\u62E9\u5BF9\u5E94\u73AF\u5883",type:"select",component:(0,e.jsx)(c.Z,{children:ae.map(function(t){return(0,e.jsx)(y,{value:t.id,children:t.name},t.id)})}),placeholder:"\u8BF7\u9009\u62E9\u5BF9\u5E94\u73AF\u5883"},{name:"name",label:"\u914D\u7F6E\u540D\u79F0",required:!0,message:"\u8BF7\u8F93\u5165\u914D\u7F6E\u540D\u79F0",type:"input",placeholder:"\u8BF7\u8F93\u5165\u914D\u7F6E\u540D\u79F0"},{name:"host",label:"\u5730\u5740",required:!0,message:"\u8BF7\u8F93\u5165host",type:"input",placeholder:"\u8BF7\u8F93\u5165host"},{name:"port",label:"\u7AEF\u53E3",required:!0,message:"\u8BF7\u8F93\u5165port",type:"input",placeholder:"\u8BF7\u8F93\u5165port"},{name:"database",label:"\u5E93\u540D",required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E\u5E93\u540D",type:"input",placeholder:"\u8BF7\u8F93\u5165\u6570\u636E\u5E93\u540D"},{name:"username",label:"\u5E10\u53F7",required:!0,message:"\u8BF7\u8F93\u5165\u5E10\u53F7",type:"input",placeholder:"\u8BF7\u8F93\u5165\u5E10\u53F7"},{name:"password",label:"\u5BC6\u7801",required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",component:(0,e.jsx)(o.Z,{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})}],pe=function(s){var a=s.onOk,l=s.onCancel,E=s.onTest;return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{display:"inline-block",lineHeight:"32px",float:"left",marginLeft:4},children:k===null?(0,e.jsx)("span",{children:(0,e.jsx)(A.Z,{status:"default",text:"\u672A\u6D4B\u8BD5\u8FDE\u63A5"})}):(0,e.jsx)(A.Z,{status:k?"success":"error",text:k?"\u6D4B\u8BD5\u8FDE\u63A5\u6210\u529F":"\u6D4B\u8BD5\u8FDE\u63A5\u5931\u8D25"})}),(0,e.jsxs)(M.ZP,{onClick:E,type:"dashed",style:{marginLeft:8},children:[(0,e.jsx)(H.B,{type:"icon-fasong1"})," \u6D4B\u8BD5\u8FDE\u63A5"]}),(0,e.jsxs)(M.ZP,{onClick:l,style:{marginLeft:8},children:[(0,e.jsx)(N.Z,{})," \u53D6\u6D88"]}),(0,e.jsxs)(M.ZP,{onClick:a,type:"primary",children:[(0,e.jsx)(Q.Z,{})," \u786E\u5B9A"]})]})};return(0,e.jsx)(g._z,{title:"\u6570\u636E\u5E93\u914D\u7F6E\u5217\u8868",breadcrumb:null,children:(0,e.jsxs)($.Z,{children:[(0,e.jsx)(K.Z,{Footer:pe,onTest:te,record:w,fields:De,title:"\u6570\u636E\u5E93\u914D\u7F6E",onFinish:me,left:6,right:18,open:ue,offset:-50,onCancel:function(){q({databaseModal:!1})},children:(0,e.jsx)(V.Z,{type:"info",style:{marginBottom:12,marginTop:-12},closable:!0,message:"\u{1F942} \u5728\u6DFB\u52A0/\u7F16\u8F91\u6570\u636E\u5E93\u914D\u7F6E\u4E4B\u524D\uFF0C\u8BB0\u5F97\u5148\u6D4B\u8BD5\u8FDE\u63A5\u662F\u5426\u53EF\u7528\u54DF\uFF01"})}),(0,e.jsx)(C.Z,u()(u()({},J),{},{form:X,children:(0,e.jsxs)(x.Z,{gutter:8,children:[(0,e.jsx)(f.Z,{span:6,children:(0,e.jsx)(C.Z.Item,{label:"\u73AF\u5883",name:"env",children:(0,e.jsx)(c.Z,{placeholder:"\u9009\u62E9\u73AF\u5883",allowClear:!0,children:ae.map(function(t){return(0,e.jsx)(y,{value:t.id,children:t.name})})})})}),(0,e.jsx)(f.Z,{span:6,children:(0,e.jsx)(C.Z.Item,{label:"\u914D\u7F6E\u540D",name:"name",children:(0,e.jsx)(o.Z,{placeholder:"\u8F93\u5165\u6570\u636E\u5E93\u914D\u7F6E\u540D"})})}),(0,e.jsx)(f.Z,{span:6,children:(0,e.jsx)(C.Z.Item,{label:"\u6570\u636E\u5E93\u540D",name:"database",children:(0,e.jsx)(o.Z,{placeholder:"\u8F93\u5165\u6570\u636E\u5E93\u540D"})})}),(0,e.jsx)(f.Z,{span:6,children:(0,e.jsxs)("div",{style:{float:"right"},children:[(0,e.jsxs)(M.ZP,{type:"primary",onClick:B,children:[(0,e.jsx)(z.Z,{}),"\u67E5\u8BE2"]}),(0,e.jsxs)(M.ZP,{style:{marginLeft:8},onClick:d()(r()().mark(function t(){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return X.resetFields(),a.next=3,B();case 3:case"end":return a.stop()}},t)})),children:[(0,e.jsx)(L.Z,{}),"\u91CD\u7F6E"]})]})})]})})),(0,e.jsx)(x.Z,{style:{marginTop:12},children:(0,e.jsxs)(f.Z,{span:24,children:[(0,e.jsx)(x.Z,{style:{marginBottom:16},children:(0,e.jsxs)(M.ZP,{type:"primary",onClick:function(){q({databaseModal:!0,databaseRecord:{sql_type:0}}),ne(null)},children:[(0,e.jsx)(Z.Z,{})," \u6DFB\u52A0\u914D\u7F6E"]})}),(0,e.jsx)(W.Z,{columns:Ee,dataSource:ie,rowKey:function(s){return s.id},loading:de["gconfig/fetchDbConfig"]})]})})]})})};m.default=(0,G.connect)(function(h){var I=h.loading,v=h.gconfig;return{loading:I,gconfig:v}})(i)}}]);
