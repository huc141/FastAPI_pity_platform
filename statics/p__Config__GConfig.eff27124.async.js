(self.webpackChunkpity=self.webpackChunkpity||[]).push([[3131],{51270:function(M,x,e){"use strict";var i=e(42281),v=e(48658),P=e(209),f=e(59740),E=function(c,a){return v.createElement(f.Z,(0,i.Z)((0,i.Z)({},c),{},{ref:a,icon:P.Z}))};E.displayName="PlusOutlined",x.Z=v.forwardRef(E)},20970:function(M,x,e){"use strict";var i=e(1619),v=e.n(i),P=e(92105),f=e.n(P),E=e(48658),d=e(64216),c=e(63368),a=e(70214),l=e(21577),t=e(93251),_=d.Z.Item,r=function(s){var p=s.title,D=s.width,L=s.left,y=s.right,U=s.formName,T=s.record,k=s.onFinish,W=s.loading,G=s.fields,V=s.open,Z=s.onCancel,K=s.offset,S=K===void 0?0:K,z=s.children,$=s.Footer,H=s.onTest,n=d.Z.useForm(),R=f()(n,1),B=R[0],j=function(){B.validateFields().then(function(C){k(C)})};(0,E.useEffect)(function(){B.resetFields(),B.setFieldsValue(T)},[T]);var I={labelCol:{span:L},wrapperCol:{span:y}};return(0,t.jsxs)(c.Z,{style:{marginTop:S},confirmLoading:W,footer:$!==void 0?(0,t.jsx)($,{onOk:j,onCancel:Z,onTest:function(){B.validateFields().then(function(C){H(C)})}}):void 0,title:p,width:D,open:V,onOk:j,onCancel:Z,children:[z||null,(0,t.jsx)(d.Z,v()(v()({form:B},I),{},{name:U,initialValues:T,onFinish:k,children:G.map(function(g,C){return(0,t.jsx)(a.Z,{span:g.span||24,children:(0,t.jsx)(_,{label:g.label,colon:g.colon||!0,initialValue:g.initialValue,rules:[{required:g.required,message:g.message}],name:g.name,valuePropName:g.valuePropName||"value",children:(0,l.Z)(g.type,g.placeholder,g.component)})},C)})}))]})};x.Z=r},21577:function(M,x,e){"use strict";var i=e(32224),v=e(82511),P=e(48658),f=e(93251),E=i.Z.TextArea,d=function(a,l){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;return t||(a==="input"?(0,f.jsx)(i.Z,{placeholder:l}):a==="textarea"?(0,f.jsx)(E,{placeholder:l}):a==="switch"?(0,f.jsx)(v.Z,{}):null)};x.Z=d},39591:function(M,x,e){"use strict";e.r(x);var i=e(1619),v=e.n(i),P=e(14660),f=e.n(P),E=e(21464),d=e.n(E),c=e(92105),a=e.n(c),l=e(42096),t=e(22666),_=e(33228),r=e(63368),h=e(49776),s=e(60020),p=e(82511),D=e(78890),L=e(81386),y=e(70214),U=e(70940),T=e(32224),k=e(86061),W=e(48658),G=e(9350),V=e(51270),Z=e(20970),K=e(95615),S=e(20077),z=e(45231),$=e(94519),H=e(12087),n=e(93251),R=t.Z.Option,B=function(I){var g=I.gconfig,C=I.user,oe=I.loading,A=I.dispatch,ie=g.data,X=g.envList,w=g.key_type,le=g.envMap,_e=g.modal,b=g.currentEnv,Y=g.name,N=g.pagination,se=C.userMap,ue=(0,W.useState)({id:0,key_type:0}),q=a()(ue,2),J=q[0],ee=q[1],de=(0,W.useState)(0),te=a()(de,2),ne=te[0],ae=te[1],ce=(0,W.useState)(null),re=a()(ce,2),Oe=re[0],ge=re[1],fe=function(){return ne===1||ne===2?"yaml":"text"},he=[{title:"\u73AF\u5883",key:"env",dataIndex:"env",render:function(o){return(0,n.jsx)(_.Z,{children:le[o]})}},{title:"\u7C7B\u578B",dataIndex:"key_type",key:"key_type",render:function(o){return(0,n.jsx)(_.Z,{color:H.Z.CONFIG_TYPE_TAG[w[o]],children:w[o]})}},{title:"key",dataIndex:"key",key:"keyword"},{title:"value",dataIndex:"value",key:"value",render:function(o,m){if(m.key_type===0)return o;if(m.key_type===1)return(0,n.jsx)("a",{onClick:function(){r.Z.info({title:"".concat(m.key),width:500,bodyStyle:{padding:-12},content:(0,n.jsx)(S.Z,{language:"json",style:K.BV,children:m.value})})},children:"\u67E5\u770B"});if(m.key_type===2)return(0,n.jsx)("a",{onClick:function(){r.Z.info({title:"".concat(m.key),width:500,bodyStyle:{padding:-12},content:(0,n.jsx)(S.Z,{language:"yaml",style:K.BV,children:m.value})})},children:"\u67E5\u770B"})}},{title:"\u662F\u5426\u53EF\u7528",dataIndex:"enable",key:"enable",render:function(o){return(0,n.jsx)(h.Z,{status:o?"processing":"default",text:o?"\u4F7F\u7528\u4E2D":"\u5DF2\u7981\u6B62"})}},{title:"\u521B\u5EFA\u4EBA",key:"create_user",render:function(o,m){return(0,n.jsx)(z.Z,{user:se[m.create_user.toString()]})}},{title:"\u64CD\u4F5C",key:"operation",render:function(o,m){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{onClick:function(){F({modal:!0}),ee(m),ae(m.key_type)},children:"\u7F16\u8F91"}),(0,n.jsx)(s.Z,{type:"vertical"}),(0,n.jsx)("a",{onClick:function(){A({type:"gconfig/deleteGConfig",payload:{id:m.id}})},children:"\u5220\u9664"})]})}}],me=[{name:"env",label:"\u73AF\u5883",required:!0,component:(0,n.jsx)(t.Z,{defaultValue:b,placeholder:"\u9009\u62E9\u5BF9\u5E94\u73AF\u5883",children:X.map(function(u){return(0,n.jsx)(R,{value:u.id,children:u.name})})}),type:"select"},{name:"key_type",label:"\u7C7B\u578B",required:!0,component:(0,n.jsxs)(t.Z,{onSelect:function(o){ae(o)},children:[(0,n.jsx)(R,{value:0,children:"String"}),(0,n.jsx)(R,{value:1,children:"JSON"}),(0,n.jsx)(R,{value:2,children:"YAML"})]}),type:"select"},{name:"key",label:"key",required:!0,type:"input",placeholder:"\u8BF7\u8F93\u5165key"},{name:"value",label:"value",required:!0,component:(0,n.jsx)($.Z,{language:fe(),setEditor:ge,height:250})},{name:"enable",label:"\u662F\u5426\u53EF\u7528",required:!0,component:(0,n.jsx)(p.Z,{}),valuePropName:"checked",initialValue:!0}],ve=function(){var u=d()(f()().mark(function o(){return f()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,A({type:"gconfig/fetchEnvList",payload:{page:1,size:1e4}});case 2:case"end":return O.stop()}},o)}));return function(){return u.apply(this,arguments)}}(),Ee=function(){A({type:"user/fetchUserList"})},pe=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:N.current,m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N.pageSize;A({type:"gconfig/fetchGConfig",payload:{page:o,size:m,env:b||"",key:Y}})};(0,W.useEffect)(function(){ve()},[]),(0,W.useEffect)(function(){Ee(),pe()},[b,Y,N.current]);var Me=function(){var u=d()(f()().mark(function o(m){var O;return f()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:O=v()(v()({},J),m),J.id===0?A({type:"gconfig/insertConfig",payload:O}):A({type:"gconfig/updateGConfig",payload:O});case 2:case"end":return Q.stop()}},o)}));return function(m){return u.apply(this,arguments)}}(),F=function(o){A({type:"gconfig/save",payload:o})};return(0,n.jsx)(l._z,{title:"\u5168\u5C40\u53D8\u91CF",breadcrumb:null,children:(0,n.jsxs)(D.Z,{children:[(0,n.jsx)(Z.Z,{fields:me,open:_e,left:4,right:20,onFinish:Me,onCancel:function(){F({modal:!1})},title:"\u7F16\u8F91\u53D8\u91CF",record:J,width:600,offset:-60}),(0,n.jsxs)(L.Z,{gutter:[8,8],children:[(0,n.jsx)(y.Z,{span:12,children:(0,n.jsxs)(U.ZP,{type:"primary",onClick:function(){F({modal:!0}),ee({id:0,key_type:0,env:b!==null?b.toString():b})},children:[(0,n.jsx)(V.Z,{}),"\u6DFB\u52A0\u53D8\u91CF"]})}),(0,n.jsx)(y.Z,{span:4}),(0,n.jsx)(y.Z,{span:8,children:(0,n.jsx)(T.Z,{addonBefore:(0,n.jsx)(t.Z,{allowClear:!0,placeholder:"\u9009\u62E9\u5BF9\u5E94\u73AF\u5883",value:b,style:{width:120},onChange:function(o){F({currentEnv:o})},children:X.map(function(u){return(0,n.jsx)(R,{value:u.id.toString(),children:u.name})})}),placeholder:"\u8BF7\u8F93\u5165key",value:Y,onChange:function(o){F({name:o.target.value})}})})]}),(0,n.jsx)(L.Z,{style:{marginTop:12},children:(0,n.jsx)(y.Z,{span:24,children:(0,n.jsx)(k.Z,{dataSource:ie,columns:he,pagination:N,rowKey:function(o){return o.id},loading:oe.effects["gconfig/fetchGConfig"],onChange:function(o){F({pagination:o})}})})})]})})};x.default=(0,G.connect)(function(j){var I=j.gconfig,g=j.user,C=j.loading;return{gconfig:I,user:g,loading:C}})(B)},52950:function(M,x,e){M=e.nmd(M),function(){ace.require(["ace/mode/text"],function(i){M&&(M.exports=i)})}()},7736:function(M,x,e){M=e.nmd(M),ace.define("ace/mode/yaml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(i,v,P){"use strict";var f=i("../lib/oop"),E=i("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"list.markup",regex:/^(?:-{3}|\.{3})\s*(?=#|$)/},{token:"list.markup",regex:/^\s*[\-?](?:$|\s)/},{token:"constant",regex:"!![\\w//]+"},{token:"constant.language",regex:"[&\\*][a-zA-Z0-9-_]+"},{token:["meta.tag","keyword"],regex:/^(\s*\w[^\s:]*?)(:(?=\s|$))/},{token:["meta.tag","keyword"],regex:/(\w[^\s:]*?)(\s*:(?=\s|$))/},{token:"keyword.operator",regex:"<<\\w*:\\w*"},{token:"keyword.operator",regex:"-\\s*(?=[{])"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:/[|>][-+\d]*(?:$|\s+(?:$|#))/,onMatch:function(c,a,l,t){t=t.replace(/ #.*/,"");var _=/^ *((:\s*)?-(\s*[^|>])?)?/.exec(t)[0].replace(/\S\s*$/,"").length,r=parseInt(/\d+[\s+-]*$/.exec(t));return r?(_+=r-1,this.next="mlString"):this.next="mlStringPre",l.length?(l[0]=this.next,l[1]=_):(l.push(this.next),l.push(_)),this.token},next:"mlString"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:/(\b|[+\-\.])[\d_]+(?:(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)(?=[^\d-\w]|$)$/},{token:"constant.numeric",regex:/[+\-]?\.inf\b|NaN\b|0x[\dA-Fa-f_]+|0b[10_]+/},{token:"constant.language.boolean",regex:"\\b(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:/[^\s,:\[\]\{\}]+/}],mlStringPre:[{token:"indent",regex:/^ *$/},{token:"indent",regex:/^ */,onMatch:function(c,a,l){var t=l[1];return t>=c.length?(this.next="start",l.shift(),l.shift()):(l[1]=c.length-1,this.next=l[0]="mlString"),this.token},next:"mlString"},{defaultToken:"string"}],mlString:[{token:"indent",regex:/^ *$/},{token:"indent",regex:/^ */,onMatch:function(c,a,l){var t=l[1];return t>=c.length?(this.next="start",l.splice(0)):this.next="mlString",this.token},next:"mlString"},{token:"string",regex:".+"}]},this.normalizeRules()};f.inherits(d,E),v.YamlHighlightRules=d}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(i,v,P){"use strict";var f=i("../range").Range,E=function(){};(function(){this.checkOutdent=function(d,c){return/^\s+$/.test(d)?/^\s*\}/.test(c):!1},this.autoOutdent=function(d,c){var a=d.getLine(c),l=a.match(/^(\s*\})/);if(!l)return 0;var t=l[1].length,_=d.findMatchingBracket({row:c,column:t});if(!_||_.row==c)return 0;var r=this.$getIndent(d.getLine(_.row));d.replace(new f(c,0,c,t-1),r)},this.$getIndent=function(d){return d.match(/^\s*/)[0]}}).call(E.prototype),v.MatchingBraceOutdent=E}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(i,v,P){"use strict";var f=i("../../lib/oop"),E=i("./fold_mode").FoldMode,d=i("../../range").Range,c=v.FoldMode=function(){};f.inherits(c,E),function(){this.getFoldWidgetRange=function(a,l,t){var _=this.indentationBlock(a,t);if(_)return _;var r=/\S/,h=a.getLine(t),s=h.search(r);if(!(s==-1||h[s]!="#")){for(var p=h.length,D=a.getLength(),L=t,y=t;++t<D;){h=a.getLine(t);var U=h.search(r);if(U!=-1){if(h[U]!="#")break;y=t}}if(y>L){var T=a.getLine(y).length;return new d(L,p,y,T)}}},this.getFoldWidget=function(a,l,t){var _=a.getLine(t),r=_.search(/\S/),h=a.getLine(t+1),s=a.getLine(t-1),p=s.search(/\S/),D=h.search(/\S/);if(r==-1)return a.foldWidgets[t-1]=p!=-1&&p<D?"start":"","";if(p==-1){if(r==D&&_[r]=="#"&&h[r]=="#")return a.foldWidgets[t-1]="",a.foldWidgets[t+1]="","start"}else if(p==r&&_[r]=="#"&&s[r]=="#"&&a.getLine(t-2).search(/\S/)==-1)return a.foldWidgets[t-1]="start",a.foldWidgets[t+1]="","";return p!=-1&&p<r?a.foldWidgets[t-1]="start":a.foldWidgets[t-1]="",r<D?"start":""}}.call(c.prototype)}),ace.define("ace/mode/yaml",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/yaml_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/coffee","ace/worker/worker_client"],function(i,v,P){"use strict";var f=i("../lib/oop"),E=i("./text").Mode,d=i("./yaml_highlight_rules").YamlHighlightRules,c=i("./matching_brace_outdent").MatchingBraceOutdent,a=i("./folding/coffee").FoldMode,l=i("../worker/worker_client").WorkerClient,t=function(){this.HighlightRules=d,this.$outdent=new c,this.foldingRules=new a,this.$behaviour=this.$defaultBehaviour};f.inherits(t,E),function(){this.lineCommentStart=["#"],this.getNextLineIndent=function(_,r,h){var s=this.$getIndent(r);if(_=="start"){var p=r.match(/^.*[\{\(\[]\s*$/);p&&(s+=h)}return s},this.checkOutdent=function(_,r,h){return this.$outdent.checkOutdent(r,h)},this.autoOutdent=function(_,r,h){this.$outdent.autoOutdent(r,h)},this.createWorker=function(_){var r=new l(["ace"],"ace/mode/yaml_worker","YamlWorker");return r.attachToDocument(_.getDocument()),r.on("annotate",function(h){_.setAnnotations(h.data)}),r.on("terminate",function(){_.clearAnnotations()}),r},this.$id="ace/mode/yaml"}.call(t.prototype),v.Mode=t}),function(){ace.require(["ace/mode/yaml"],function(i){M&&(M.exports=i)})}()}}]);
