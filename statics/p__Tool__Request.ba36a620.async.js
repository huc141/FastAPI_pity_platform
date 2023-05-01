(self.webpackChunkpity=self.webpackChunkpity||[]).push([[3807],{14832:function(T,I,e){T=e.nmd(T);var r=e(27287).default;ace.define("ace/theme/material-one-dark",["require","exports","module","ace/lib/dom"],function(v,E,C){E.isDark=!1,E.cssClass="ace-material-one-dark",E.cssText=`
.ace-material-one-dark .ace_gutter {
  background: #272B33;
  color: rgb(103,111,122)
}

.ace-material-one-dark .ace_print-margin {
  // width: 1px;
  background: #e8e8e8
}

.ace-material-one-dark {
  background-color: #272B33;
  color: #A6B2C0
}

.ace-material-one-dark .ace_cursor {
  color: #528BFF
}

.ace-material-one-dark .ace_marker-layer .ace_selection {
  background: #3D4350
}

.ace-material-one-dark.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #272B33;
  border-radius: 2px
}

.ace-material-one-dark .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174)
}

.ace-material-one-dark .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #747369
}

.ace-material-one-dark .ace_marker-layer .ace_active-line {
  background: #2B313A
}

.ace-material-one-dark .ace_gutter-active-line {
  background-color: #2B313A
}

.ace-material-one-dark .ace_marker-layer .ace_selected-word {
  border: 1px solid #3D4350
}

.ace-material-one-dark .ace_fold {
  background-color: #61AEEF;
  border-color: #A6B2C0
}

.ace-material-one-dark .ace_keyword {
  color: #C679DD
}

.ace-material-one-dark .ace_keyword.ace_operator {
  color: #A6B2C0
}

.ace-material-one-dark .ace_keyword.ace_other.ace_unit {
  color: #D2945D
}

.ace-material-one-dark .ace_constant {
  color: #D2945D
}

.ace-material-one-dark .ace_constant.ace_numeric {
  color: #D2945D
}

.ace-material-one-dark .ace_constant.ace_character.ace_escape {
  color: #57B6C2
}

.ace-material-one-dark .ace_support.ace_function {
  color: #57B6C2
}

.ace-material-one-dark .ace_support.ace_class {
  color: #E5C17C
}

.ace-material-one-dark .ace_storage {
  color: #C679DD
}

.ace-material-one-dark .ace_invalid.ace_illegal {
  color: #272B33;
  background-color: #f2777a
}

.ace-material-one-dark .ace_invalid.ace_deprecated {
  color: #272B33;
  background-color: #d27b53
}

.ace-material-one-dark .ace_string {
  color: #90C378
}

.ace-material-one-dark .ace_string.ace_regexp {
  color: #57B6C2
}

.ace-material-one-dark .ace_comment {
  font-style: italic;
  color: #59626F
}

.ace-material-one-dark .ace_variable {
  color: #DF6A73
}

.ace-material-one-dark .ace_meta.ace_selector {
  color: #C679DD
}

.ace-material-one-dark .ace_entity.ace_other.ace_attribute-name {
  color: #D2945D
}

.ace-material-one-dark .ace_entity.ace_name.ace_function {
  color: #61AEEF
}

.ace-material-one-dark .ace_entity.ace_name.ace_tag {
  color: #DF6A73
}

.ace-material-one-dark .ace_markup.ace_list {
  color: #DF6A73
}
`;var Z=v("ace/lib/dom");Z.importCssString(E.cssText,E.cssClass)}),function(){ace.require(["ace/theme/ace-material-one-dark"],function(v){r(T)=="object"&&r(I)=="object"&&T&&(T.exports=v)})}()},88315:function(T,I,e){"use strict";e.d(I,{Z:function(){return le}});var r=e(51175),v=e.n(r),E=e(13167),C=e.n(E),Z=e(61261),b=e.n(Z),h=e(84701),D=e.n(h),s=e(48658),L=e(1194),P=e.n(L),k=e(44761),c=e(1668),O=e.n(c),o=e(86026),B=e.n(o),se=e(14832),w=e.n(se),M=e(47732),xe=e.n(M),Y=e(93251),le=function(ie){b()(F,ie);var ce=D()(F);function F(){return v()(this,F),ce.apply(this,arguments)}return C()(F,[{key:"componentDidMount",value:function(){var t=this;this.props.setEditor(this.refs),(0,c.addCompleter)({getCompletions:function(z,ee,V,ne,n){n(null,(t.props.tables||[]).map(function(H){return{name:H,value:H}}))}})}},{key:"render",value:function(){var t=this.props,q=t.value,z=t.onChange,ee=t.height,V=t.readOnly,ne=t.theme;return(0,Y.jsx)(k.ZP,{ref:"aceEditor",mode:"json",theme:ne||"material-one-dark",fontSize:14,showGutter:!0,showPrintMargin:!1,onChange:z,value:q,wrapEnabled:!0,highlightActiveLine:!0,enableSnippets:!0,style:{width:"100%",height:ee||300},setOptions:{readOnly:V||!1,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:4,useWorker:!0}})}}]),F}(s.Component)},18853:function(T,I,e){"use strict";e.d(I,{B:function(){return E}});var r=e(9791),v="//at.alicdn.com/t/font_915840_2b8lahxt5xv.js",E=(0,r.Z)({scriptUrl:v})},78030:function(T,I,e){"use strict";e.d(I,{Z:function(){return H}});var r=e(48658),v=e(22666),E=e(32224),C=e(81386),Z=e(70214),b=e(14660),h=e.n(b),D=e(53272),s=e.n(D),L=e(21464),P=e.n(L),k=e(92105),c=e.n(k),O=e(1619),o=e.n(O),B=e(57445),se=e.n(B),w=e(64216),M=e(35019),xe=e(13864),Y=e(18415),le=e(60020),ie=e(70940),ce=e(86061),F=e(51270),de=e(12087),t=e(93251),q=["editing","dataIndex","title","type","setType","record","index","key","children"],z=v.Z.Option,ee=function(d){var K=d.editing,U=d.dataIndex,$=d.title,te=d.type,_=d.setType,m=d.record,ue=d.index,ve=d.key,N=d.children,X=se()(d,q);return(0,t.jsx)("td",o()(o()({},X),{},{children:K?(0,t.jsx)(w.Z.Item,{name:U,style:{margin:0},initialValue:m.dataIndex,rules:[{required:!0,message:"Please Input ".concat($,"!")}],children:(0,t.jsx)(E.Z,{placeholder:"please input ".concat($)})}):N}))},V=function(d){var K=d.data,U=d.setData,$=d.ossFileList,te=w.Z.useForm(),_=c()(te,1),m=_[0],ue=(0,r.useState)(""),ve=c()(ue,2),N=ve[0],X=ve[1],pe=(0,r.useState)("FILE"),J=c()(pe,2),G=J[0],he=J[1],Ee=(0,r.useState)(null),Ce=c()(Ee,2),Q=Ce[0],je=Ce[1],me=function(f){return f.key===N},De=function(f){m.setFieldsValue(o()({},f)),X(f.key)},Se=function(){X("")},be=function(){var j=P()(h()().mark(function f(l){var x,g,re,oe,Pe;return h()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,p.next=3,m.validateFields();case 3:if(x=p.sent,!(G==="FILE"&&!Q)){p.next=7;break}return M.ZP.info("\u8BF7\u9009\u62E9\u6587\u4EF6"),p.abrupt("return");case 7:if(g=s()(K),re=g.findIndex(function(ge){return l===ge.key}),!(re>-1)){p.next=20;break}if(oe=g[re],Pe=g.findIndex(function(ge){return x.key===ge.key}),!(Pe>-1)){p.next=15;break}return M.ZP.info("\u8BE5key\u5DF2\u5B58\u5728"),p.abrupt("return");case 15:g.splice(re,1,o()(o()(o()({},oe),x),{},{type:G,value:Q})),U(g),X(""),p.next=23;break;case 20:g.push(o()(o()({},x),{},{type:G,value:Q})),U(g),X("");case 23:p.next=28;break;case 25:p.prev=25,p.t0=p.catch(0),console.log("Validate Failed:",p.t0);case 28:case"end":return p.stop()}},f,null,[[0,25]])}));return function(l){return j.apply(this,arguments)}}(),Te=function(f){var l=s()(K);l.splice(l.findIndex(function(x){return f===x.key}),1),U(l)},fe=[{title:"KEY",dataIndex:"key",width:"30%",editable:!0},{title:"TYPE",dataIndex:"type",type:"select",width:"10%",render:function(f,l){return l.key===N?(0,t.jsxs)(v.Z,{style:{width:"100%"},value:G,onChange:function(g){he(g)},children:[(0,t.jsx)(z,{value:"FILE",children:"FILE"}),(0,t.jsx)(z,{value:"TEXT",children:"TEXT"})]}):l.type}},{title:"VALUE",dataIndex:"value",width:"40%",render:function(f,l){return l.key===N?G==="FILE"?(0,t.jsx)(v.Z,{style:{width:"100%"},placeholder:"please select oss file",showSearch:!0,value:Q,onChange:function(g){return je(g)},children:$.map(function(x){return(0,t.jsx)(z,{value:x.file_path,children:x.file_path},x.file_path)})}):(0,t.jsx)(E.Z,{placeholder:"please input VALUE",value:Q,onChange:function(g){je(g.target.value)}}):G==="FILE"?(0,t.jsx)("a",{href:"".concat(de.Z.URL,"/oss/download?filepath=").concat(l.value),children:l.value}):l.value}},{title:"OPERATION",dataIndex:"operation",render:function(f,l){var x=me(l);return x?(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{onClick:function(){return be(l.key)},style:{marginRight:8},children:"Save"}),(0,t.jsx)(xe.Z,{title:"Sure to cancel?",onConfirm:Se,children:(0,t.jsx)("a",{children:"Cancel"})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y.Z.Link,{disabled:N!=="",onClick:function(){return De(l)},children:"Edit"}),(0,t.jsx)(le.Z,{type:"vertical"}),(0,t.jsx)(Y.Z.Link,{disabled:N!=="",onClick:function(){return Te(l.key)},children:"Remove"})]})}}],ae=function(){var f=[].concat(s()(K),[{key:"",type:"TEXT",value:null}]);U(f),he("FILE")},Ie=fe.map(function(j){return j.editable?o()(o()({},j),{},{onCell:function(l,x){return{record:l,index:x,type:G,setType:he,dataIndex:j.dataIndex,title:j.title,editing:me(l)}}}):j});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C.Z,{style:{marginBottom:12},children:(0,t.jsx)(Z.Z,{span:6,children:(0,t.jsx)(ie.ZP,{type:"primary",onClick:ae,icon:(0,t.jsx)(F.Z,{}),children:"Add"})})}),(0,t.jsx)(w.Z,{form:m,component:!1,children:(0,t.jsx)(ce.Z,{components:{body:{cell:ee}},dataSource:K,columns:Ie,rowClassName:"editable-row",pagination:{onChange:Se}})})]})},ne=V,n=v.Z.Option,H=function(A){var d=A.ossFileList,K=A.dataSource,U=A.setDataSource,$=[{title:"KEY",dataIndex:"key",render:function(){return(0,t.jsx)(E.Z,{})}},{title:"VALUE",dataIndex:"value",render:function(){return(0,t.jsx)(v.Z,{children:d.map(function(_){return(0,t.jsx)(n,{value:_.key,children:_.key},_.key)})})}}];return(0,t.jsx)(C.Z,{gutter:8,style:{marginTop:16},children:(0,t.jsx)(Z.Z,{span:24,children:(0,t.jsx)(ne,{bordered:!0,columns:$,data:K,setData:U,ossFileList:d})})})}},48982:function(T,I,e){"use strict";var r=e(48658),v=e(59848),E=e(93251);I.Z=function(C){var Z=C.columns,b=C.dataSource,h=C.title,D=C.setDataSource,s=C.editableKeys,L=C.setEditableRowKeys,P=C.extra;return(0,r.useEffect)(function(){L(b.map(function(k){return k.id}))},[b]),(0,E.jsx)(v.Z,{headerTitle:h,columns:Z,rowKey:"id",value:b,onChange:D,recordCreatorProps:{newRecordType:"dataSource",record:function(){return{id:Date.now()}}},editable:{type:"multiple",editableKeys:s,actionRender:function(c,O,o){return[o.delete]},onValuesChange:function(c,O){P&&P(O),D(O)},onChange:L}})}},58025:function(T,I,e){"use strict";e.r(I),e.d(I,{default:function(){return te}});var r=e(48658),v=e(27287),E=e.n(v),C=e(14660),Z=e.n(C),b=e(21464),h=e.n(b),D=e(92105),s=e.n(D),L=e(22666),P=e(65777),k=e(58385),c=e(34245),O=e(81386),o=e(70214),B=e(78890),se=e(32224),w=e(70940),M=e(473),xe=e(28067),Y=e(86061),le=e(91801),ie=e(36334),ce=e(86782),F=e(48982),de=e(10918),t=e(9350),q=e(89148),z=e(78030),ee=e(18853),V=e(88315),ne=e(42096),n=e(93251),H=L.Z.Option,A=P.Z.TabPane,d={200:{color:"#67C23A",text:"OK"},401:{color:"#F56C6C",text:"unauthorized"},400:{color:"#F56C6C",text:"Bad Request"}},K=function(m){return m&&m.response?(0,n.jsx)("div",{style:{marginRight:16},children:(0,n.jsxs)("span",{children:["Status:",(0,n.jsxs)("span",{style:{color:d[m.status_code]?d[m.status_code].color:"#F56C6C",marginLeft:8,marginRight:8},children:[m.status_code," ",d[m.status_code]?d[m.status_code].text:""]}),(0,n.jsxs)("span",{style:{marginLeft:8,marginRight:8},children:["Time: ",(0,n.jsx)("span",{style:{color:"#67C23A"},children:m.cost})]})]})}):null},U=function(m){var ue=m.loading,ve=m.gconfig,N=m.dispatch,X=(0,r.useState)(0),pe=s()(X,2),J=pe[0],G=pe[1],he=(0,r.useState)("JSON"),Ee=s()(he,2),Ce=Ee[0],Q=Ee[1],je=(0,r.useState)("GET"),me=s()(je,2),De=me[0],Se=me[1],be=(0,r.useState)([]),Te=s()(be,2),fe=Te[0],ae=Te[1],Ie=(0,r.useState)([]),j=s()(Ie,2),f=j[0],l=j[1],x=(0,r.useState)(function(){return fe.map(function(u){return u.id})}),g=s()(x,2),re=g[0],oe=g[1],Pe=(0,r.useState)(function(){return f.map(function(u){return u.id})}),Ze=s()(Pe,2),p=Ze[0],ge=Ze[1],Ye=(0,r.useState)(null),ke=s()(Ye,2),Le=ke[0],Ve=ke[1],Qe=(0,r.useState)(!1),Me=s()(Qe,2),we=Me[0],Ae=Me[1],qe=(0,r.useState)({}),Re=s()(qe,2),R=Re[0],en=Re[1],nn=(0,r.useState)([]),Be=s()(nn,2),_e=Be[0],tn=Be[1],an=(0,r.useState)(null),Fe=s()(an,2),xn=Fe[0],Ke=Fe[1],rn=ve.ossFileList,on=(0,r.useState)(""),Ue=s()(on,2),Oe=Ue[0],We=Ue[1],sn=(0,n.jsxs)(L.Z,{value:De,onChange:function(a){return Se(a)},style:{width:120,fontSize:16,textAlign:"left"},children:[(0,n.jsx)(H,{value:"GET",children:"GET"},"GET"),(0,n.jsx)(H,{value:"POST",children:"POST"},"POST"),(0,n.jsx)(H,{value:"PUT",children:"PUT"},"PUT"),(0,n.jsx)(H,{value:"DELETE",children:"DELETE"},"DELETE")]}),He=[{title:"KEY",dataIndex:"key",key:"key"},{title:"VALUE",dataIndex:"value",key:"value"}],Ne=function(a){if(R[a]===null||R[a]===void 0||R[a]==="{}")return[];var i=JSON.parse(R[a]);return Object.keys(i).map(function(y){return{key:y,value:i[y]}})},Je=function(a){var i=Oe.split("?")[0];a.forEach(function(y,W){y.key&&(W===0?i="".concat(i,"?").concat(y.key,"=").concat(y.value||""):i="".concat(i,"&").concat(y.key,"=").concat(y.value||""))}),We(i)},ln=function(a){var i=a.split("?");if(i.length<2)ae([]);else{var y=i[1].split("&"),W=[],S=[];y.forEach(function(mn,ze){var fn=mn.split("="),$e=s()(fn,2),gn=$e[0],yn=$e[1],Xe=Date.now();S.push(Xe+ze+10),W.push({key:gn,value:yn,id:Xe+ze+10,description:""})}),ae(W),oe(S)}},ye=function(a){Q(a)},cn=function(){var a={};return f.forEach(function(i){i.key!==""&&(a[i.key]=i.value)}),a},dn=function(){var u=h()(Z()().mark(function a(){var i,y;return Z()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(Oe!==""){S.next=3;break}return k.Z.error({message:"\u8BF7\u6C42Url\u4E0D\u80FD\u4E3A\u7A7A"}),S.abrupt("return");case 3:return Ae(!0),i={method:De,url:Oe,body:J===2?JSON.stringify(_e):Le,body_type:J,headers:cn()},J===0&&(i.body=null),S.next=8,(0,de.c3)(i);case 8:y=S.sent,Ae(!1),q.Z.response(y,!0)&&en(y.data);case 11:case"end":return S.stop()}},a)}));return function(){return u.apply(this,arguments)}}(),un=function(a,i){if(a==="params"){var y=fe.filter(function(S){return S.id!==i});ae(y),Je(y)}else{var W=f.filter(function(S){return S.id!==i});l(W)}},vn=(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(c.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){ye("Text")},children:"Text"})},"Text"),(0,n.jsx)(c.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){ye("JavaScript")},children:"JavaScript"})},"JavaScript"),(0,n.jsx)(c.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){ye("JSON")},children:"JSON"})},"JSON"),(0,n.jsx)(c.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){ye("HTML")},children:"HTML"})},"HTML"),(0,n.jsx)(c.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){ye("XML")},children:"XML"})},"XML")]}),Ge=function(a){return[{title:"KEY",key:"key",dataIndex:"key"},{title:"VALUE",key:"value",dataIndex:"value"},{title:"DESCRIPTION",key:"description",dataIndex:"description"},{title:"\u64CD\u4F5C",valueType:"option",render:function(y,W){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(le.Z,{style:{cursor:"pointer"},onClick:function(){oe([W.id])}}),(0,n.jsx)(ie.Z,{style:{cursor:"pointer",marginLeft:8},onClick:function(){un(a,W.id)},twoToneColor:"#eb2f96"})]})}}]},hn=function(a){return a===0?(0,n.jsx)("div",{style:{height:"20vh",lineHeight:"20vh",textAlign:"center"},children:"This request does not have a body"}):a===2?(0,n.jsx)(z.Z,{ossFileList:rn,dataSource:_e,setDataSource:tn}):(0,n.jsx)(O.Z,{style:{marginTop:12},children:(0,n.jsx)(o.Z,{span:24,children:(0,n.jsx)(B.Z,{bodyStyle:{padding:0},children:(0,n.jsx)(V.Z,{value:Le,onChange:function(y){return Ve(y)},height:"20vh",setEditor:Ke})})})})};return(0,n.jsx)(ne._z,{title:"\u5728\u7EBFHTTP\u6D4B\u8BD5\u5DE5\u5177",breadcrumb:null,children:(0,n.jsxs)(B.Z,{children:[(0,n.jsxs)(O.Z,{gutter:[8,8],children:[(0,n.jsx)(o.Z,{span:18,children:(0,n.jsx)(se.Z,{size:"large",value:Oe,addonBefore:sn,placeholder:"\u8BF7\u8F93\u5165\u8981\u8BF7\u6C42\u7684url",onChange:function(a){We(a.target.value),ln(a.target.value)}})}),(0,n.jsx)(o.Z,{span:6,children:(0,n.jsxs)(w.ZP,{onClick:dn,loading:we,type:"primary",size:"large",style:{marginRight:16,float:"right"},children:[(0,n.jsx)(ee.B,{type:"icon-fasong1"}),"Send"," "]})})]}),(0,n.jsx)(O.Z,{style:{marginTop:8},children:(0,n.jsxs)(P.Z,{defaultActiveKey:"1",style:{width:"100%"},children:[(0,n.jsx)(A,{tab:"Params",children:(0,n.jsx)(F.Z,{columns:Ge("params"),title:"Query Params",dataSource:fe,setDataSource:ae,extra:Je,editableKeys:re,setEditableRowKeys:oe})},"1"),(0,n.jsx)(A,{tab:"Headers",children:(0,n.jsx)(F.Z,{columns:Ge("headers"),title:"Headers",dataSource:f,setDataSource:l,editableKeys:p,setEditableRowKeys:ge})},"2"),(0,n.jsxs)(A,{tab:"Body",children:[(0,n.jsxs)(O.Z,{children:[(0,n.jsxs)(M.ZP.Group,{defaultValue:0,value:J,onChange:function(a){G(a.target.value),a.target.value===2&&N({type:"gconfig/listOssFile"})},children:[(0,n.jsx)(M.ZP,{value:0,children:"none"}),(0,n.jsx)(M.ZP,{value:2,children:"form-data"}),(0,n.jsx)(M.ZP,{value:3,children:"x-www-form-urlencoded"}),(0,n.jsx)(M.ZP,{value:1,children:"raw"}),(0,n.jsx)(M.ZP,{value:4,children:"binary"}),(0,n.jsx)(M.ZP,{value:5,children:"GraphQL"})]}),J===1?(0,n.jsx)(xe.Z,{style:{marginLeft:8},overlay:vn,trigger:["click"],children:(0,n.jsxs)("a",{onClick:function(a){return a.preventDefault()},children:[Ce," ",(0,n.jsx)(ce.Z,{})]})}):null]}),hn(J)]},"3")]})}),(0,n.jsx)(O.Z,{gutter:[8,8],children:Object.keys(R).length===0?null:(0,n.jsxs)(P.Z,{style:{width:"100%"},tabBarExtraContent:K(R),children:[(0,n.jsx)(A,{tab:"Body",children:(0,n.jsx)(V.Z,{readOnly:!0,setEditor:Ke,language:R.response&&R.response_headers.indexOf("json")>-1?"json":"text",value:R.response&&E()(R.response)==="object"?JSON.stringify(R.response,null,2):R.response||"",height:"30vh"})},"1"),(0,n.jsx)(A,{tab:"Cookie",children:(0,n.jsx)(Y.Z,{columns:He,dataSource:Ne("cookies"),size:"small",pagination:!1})},"2"),(0,n.jsx)(A,{tab:"Headers",children:(0,n.jsx)(Y.Z,{columns:He,dataSource:Ne("response_headers"),size:"small",pagination:!1})},"3")]})})]})})},$=(0,t.connect)(function(_){var m=_.loading,ue=_.gconfig;return{loading:m,gconfig:ue}})(U),te=function(){return(0,n.jsx)($,{})}},86026:function(T,I,e){T=e.nmd(T),ace.define("ace/ext/spellcheck",["require","exports","module","ace/lib/event","ace/editor","ace/config"],function(r,v,E){"use strict";var C=r("../lib/event");v.contextMenuHandler=function(b){var h=b.target,D=h.textInput.getElement();if(!!h.selection.isEmpty()){var s=h.getCursorPosition(),L=h.session.getWordRange(s.row,s.column),P=h.session.getTextRange(L);if(h.session.tokenRe.lastIndex=0,!!h.session.tokenRe.test(P)){var k="",c=P+" "+k;D.value=c,D.setSelectionRange(P.length,P.length+1),D.setSelectionRange(0,0),D.setSelectionRange(0,P.length);var O=!1;C.addListener(D,"keydown",function o(){C.removeListener(D,"keydown",o),O=!0}),h.textInput.setInputHandler(function(o){if(o==c)return"";if(o.lastIndexOf(c,0)===0)return o.slice(c.length);if(o.substr(D.selectionEnd)==c)return o.slice(0,-c.length);if(o.slice(-2)==k){var B=o.slice(0,-2);if(B.slice(-1)==" ")return O?B.substring(0,D.selectionEnd):(B=B.slice(0,-1),h.session.replace(L,B),"")}return o})}}};var Z=r("../editor").Editor;r("../config").defineOptions(Z.prototype,"editor",{spellcheck:{set:function(b){var h=this.textInput.getElement();h.spellcheck=!!b,b?this.on("nativecontextmenu",v.contextMenuHandler):this.removeListener("nativecontextmenu",v.contextMenuHandler)},value:!0}})}),function(){ace.require(["ace/ext/spellcheck"],function(r){T&&(T.exports=r)})}()}}]);
