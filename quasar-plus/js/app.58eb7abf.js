(function(e){function t(t){for(var i,o,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},o={3:0},s={3:0},a=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{1:"7871509f",2:"a9727f36",4:"d241861c",5:"9ea371f3",6:"6e579019",7:"1fd9ba88",8:"93c8d821",9:"c97310ff",10:"44535b37",11:"8e7e390a",12:"ea944951",13:"dc568dee",14:"df3cc0d7",15:"155b9ac0",16:"e49728d6",17:"9c34e531",18:"540b503a",19:"1162eaa0",20:"71fa4106",21:"7169c523"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={4:1,5:1,6:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{1:"31d6cfe0",2:"31d6cfe0",4:"a1eb423c",5:"32abe72b",6:"59cdc3ca",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0",17:"31d6cfe0",18:"31d6cfe0",19:"31d6cfe0",20:"31d6cfe0",21:"31d6cfe0"}[e]+".css",s=l.p+i,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var c=a[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===i||u===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var i=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[e]=0})));var i=s[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=s[e]=[t,n]}));t.push(i[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=s[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,n[1](d)}s[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"1b03":function(e,t,n){},"1cf7":function(e,t,n){var i={"./MyDrawerBasic.vue":["51dc",8],"./MyDrawerCustom.vue":["1bbd",5],"./MyDrawerSync.vue":["641f",9],"./MySplitterBasic.vue":["0e4f",10],"./MySplitterSides.vue":["31c5",11]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(i)},o.id="1cf7",e.exports=o},"2f39":function(e,t,n){"use strict";n.r(t);n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("a1e8"),n("46f6");var i=n("a026"),o=n("1f91"),s=n("42d2"),a=n("b05d"),r=n("2a19"),l=n("436b");i["a"].use(a["a"],{config:{},lang:o["a"],iconSet:s["a"],plugins:{Notify:r["a"],Dialog:l["a"]}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},u=[],d=n("2877"),p={},m=Object(d["a"])(p,c,u,!1,null,null,null),h=m.exports,f=n("8c4f"),v=(n("ddb0"),n("8d86")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"doc"},[e._l(e.docParts,(function(t,i){return[t.trim()?n("q-markdown",{key:"md-"+i,attrs:{"no-heading-anchor-links":"",src:t}}):e._e(),e.components[i]?n(e.components[i].tag,e._b({key:"eg-"+i,tag:"component"},"component",e.components[i].attrs,!1)):e._e()]})),n("div",{staticClass:"q-pa-md"},[n("q-btn",{attrs:{color:"primary",to:e.prevPage}},[e._v(e._s("/"==e.prevPage?"回主页":"上一篇"))]),n("q-btn",{staticClass:"q-ml-md",attrs:{color:"primary",to:e.nextPage}},[e._v(e._s("/"==e.nextPage?"回主页":"下一篇"))])],1),n("q-page-scroller",{attrs:{"scroll-offset":400,offset:[10,10],duration:100}},[n("q-btn",{attrs:{round:"",glossy:"",color:"primary",icon:"arrow_upward"}}),n("q-tooltip",{attrs:{anchor:"center left",self:"center right"}},[e._v("返回顶部")])],1)],2)},y=[],b=n("dc5c"),_=n.n(b);n("a1f0");const w=/<DemoExample(?:\s+\w+="[^"]+")+\s*\/?>/g,C=/^<(\w+)/,S=_()(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+([0-9A-Z_a-z]+)="((?:(?!")[\s\S])+)"/g,{name:1,value:2});var x={props:{doc:{type:String,require:!0},prevPage:{type:String,default:"/"},nextPage:{type:String,default:"/"}},computed:{docParts(){return this.doc.split(w)},components(){return(this.doc.match(w)||[]).map((e=>{const t=e.match(C)[1],n={};return Array(...e.matchAll(S)).forEach((e=>{n[e.groups.name]=e.groups.value})),{tag:t,attrs:n}}))}}},k=x,$=n("9989"),q=n("9c40"),T=n("5096"),j=n("05c0"),E=n("eebe"),O=n.n(E),P=Object(d["a"])(k,g,y,!1,null,null,null),Q=P.exports;O()(P,"components",{QPage:$["a"],QBtn:q["a"],QPageScroller:T["a"],QTooltip:j["a"]});const M=[{path:"/",component:()=>Promise.all([n.e(2),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"/",component:()=>n.e(7).then(n.bind(null,"8b24"))},{path:"/QuasarComponents/:category?",component:()=>Promise.all([n.e(2),n.e(6)]).then(n.bind(null,"83b3"))},...v["c"].map(((e,t)=>({path:e.to,component:()=>n("4651")("./"+e.caption+".md").then((e=>({extends:Q,props:{doc:{type:String,default:()=>e.default},prevPage:{type:String,default:(v["c"][t-1]||{}).to||"/"},nextPage:{type:String,default:(v["c"][t+1]||{}).to||"/"}}})))})))]},{path:"*",component:()=>n.e(12).then(n.bind(null,"e51e"))}];var D=M;i["a"].use(f["a"]);var N=function(){const e=new f["a"]({scrollBehavior:()=>({x:0,y:0}),routes:D,mode:"hash",base:""});return e},B=async function(){const e="function"===typeof N?await N({Vue:i["a"]}):N,t={router:e,render:e=>e(h),el:"#q-app"};return{app:t,router:e}};n("5db7"),n("73d9"),n("13d5"),n("0481");const F=["props","computed","inject"],A=i["a"].config.optionMergeStrategies,I=Object.assign({},A);F.forEach((e=>{A[e]=function(t,n,i,o){const s=I[e](t,n,i,o);for(const a in n){const t=n[a];switch(e){case"props":null===t.type&&delete s[a];break;case"computed":null===t&&delete s[a];break;case"inject":null===t.from&&delete s[a];break}}return s}}));const V=/[^./\\]+(?=\.vue$)/;Object.assign(i["a"].prototype,{$log(...e){console.log(...e)},$getName(e){e||(e=this.$options);const t=e.name||e._componentTag;if(t)return t;if(e.__file){const t=e.__file.match(V)[0];return t?`<${t}.vue>`:"<Unknown Component>"}return"<Anonymous Component>"},$toCamelCase(e){return e.replace(/-\w/g,(e=>e[1].toUpperCase()))},$isEmpty(e){if("object"!==typeof e)return!0;for(const t in e)if(void 0!==t)return!1;return!0},$forceSet(e,t){this[e]=t,e===((this.$options.model||{}).prop||"value")?this.$emit((this.$options.model||{}).event||"input",t):this.$emit("update:"+e,t)},$getSlot(e,t,n){const i=this.$scopedSlots[e],o=null==i?t||[]:i();return null==n?o:n.concat(o)},$injectSlot(e,t,n,i=!1){const o={id:t,nodes:n},s=this.$scopedSlots[e];if(s&&s.__origSlot){let e;n instanceof Function?(e=s.__injectSwap,i=!1):e=i?s.__injectBefore:s.__injectAfter;const a=e.findIndex((e=>e.id===t));if(a<0){if(null==n)return;i?e.unshift(o):e.push(o)}else null==n?e.splice(a,1):e[a]=o}else{if(null==n)return;const t=e=>{const n=[t.__injectBefore.flatMap((e=>e.nodes||[])),t.__origSlot&&t.__origSlot(e)||[],t.__injectAfter.flatMap((e=>e.nodes||[]))];return t.__injectSwap.reduce(((e,t)=>t.nodes(e)||[]),n.flat())};t.__origSlot=s,t.__injectBefore=[],t.__injectAfter=[],t.__injectSwap=[],n instanceof Function?t.__injectSwap.push(o):i?t.__injectBefore.push(o):t.__injectAfter.push(o),this.$scopedSlots[e]=t}}});var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-td",{nativeOn:{click:function(t){return e.onTdClick(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.onCancel(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.inline||!1===e.editing,expression:"!inline || editing === false"}]},[e._t("default")],2),e.inline?[n("div",{directives:[{name:"show",rawName:"v-show",value:!1!==e.editing,expression:"editing !== false"}],staticClass:"inline-edit-container"},[e._t("model-view",null,null,{input:e.onInput,save:e.onSave,cancel:e.onCancel})],2)]:n("q-popup-edit",e._b({attrs:{value:e.value,"auto-save":e.autoSave},on:{input:e.onInput,save:e.onSave,cancel:e.onCancel},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.emitValue,i=t.set,o=t.cancel;return[e._t("model-view",null,null,{input:n,save:i,cancel:o})]}}],null,!0)},"q-popup-edit",e.$attrs,!1))],2)},U=[],L=n("db86"),R=n("42a1"),W={props:{value:{required:!0},inline:Boolean,autoSave:Boolean},methods:{onInput(e){this.$emit("input",e)}}},H={name:"QModelTd",components:{QTd:L["a"],QPopupEdit:R["a"]},mixins:[W],data(){return{editing:!1,initialValue:void 0}},methods:{onTdClick(){!1===this.editing&&(this.initialValue=this.value,this.editing=!0,this.$emit("edit-start"))},onSave(){!0===this.editing&&(this.editing=null,this.$emit("edit-finish"),setTimeout((()=>{this.editing=!1}),200))},onCancel(){!0===this.editing&&(this.value!==this.initialValue&&this.onInput(this.initialValue),this.$emit("edit-cancel"),this.editing=!1)}}},J=H,K=(n("9c00"),n("8572")),X=Object(d["a"])(J,z,U,!1,null,"36db3295",null),Y=X.exports;O()(X,"components",{QTd:L["a"],QPopupEdit:R["a"],QField:K["a"]});var Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-model-td",e._g(e._b({attrs:{inline:e.inline,"auto-save":e.autoSave},on:{"edit-start":e.onEditStart,"edit-finish":e.onEditFinish,"edit-cancel":e.onEditCancel},scopedSlots:e._u([{key:"default",fn:function(){return[e._t("default")]},proxy:!0},{key:"model-view",fn:function(t){var i=t.input,o=t.save,s=t.cancel;return[n("q-input",e._b({ref:"input",attrs:{autofocus:"",dense:"",value:e.editValue},on:{input:i,blur:function(t){e.inline&&(e.autoSave?o():s())},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:o(t)}}},"q-input",e.$attrs,!1))]}}],null,!0),model:{value:e.editValue,callback:function(t){e.editValue=t},expression:"editValue"}},"q-model-td",e.$attrs,!1),Object.assign({},e.$listeners,{input:void 0})))},G=[],ee=n("27f9"),te={data(){return{editValue:this.value}},props:{immediate:Boolean},watch:{value(e){this.editValue=e},editValue(e){this.immediate&&this.onInput(e)}},methods:{onEditFinish(){this.immediate||this.editValue===this.value||this.onInput(this.editValue)},onEditCancel(){this.immediate||(this.editValue=this.value)}}},ne={name:"QEditableTd",components:{QInput:ee["a"],QModelTd:Y},mixins:[W,te],methods:{onEditStart(){this.inline&&this.$nextTick(this.$refs.input.focus)}}},ie=ne,oe=Object(d["a"])(ie,Z,G,!1,null,null,null),se=oe.exports;O()(oe,"components",{QInput:ee["a"]});var ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-model-td",e._g(e._b({attrs:{inline:e.inline,"auto-save":e.autoSave},on:{"edit-start":e.onEditStart,"edit-finish":e.onEditFinish,"edit-cancel":e.onEditCancel},scopedSlots:e._u([{key:"default",fn:function(){return[e._t("default")]},proxy:!0},{key:"model-view",fn:function(t){var i=t.input,o=t.save,s=t.cancel;return[n("q-select",e._b({ref:"select",attrs:{autofocus:"",dense:"","options-dense":"",value:e.editValue},on:{input:function(t){i(t)||e.inline&&o()},blur:function(t){e.inline&&(e.autoSave?o():s())},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:o(t)}},nativeOn:{click:function(e){e.stopPropagation()}}},"q-select",e.$attrs,!1))]}}],null,!0),model:{value:e.editValue,callback:function(t){e.editValue=t},expression:"editValue"}},"q-model-td",e.$attrs,!1),Object.assign({},e.$listeners,{input:void 0})))},re=[],le=n("ddd8"),ce={name:"QSelectableTd",components:{QSelect:le["a"],QModelTd:Y},mixins:[W,te],methods:{onEditStart(){setTimeout((()=>this.$nextTick(this.$refs.select.showPopup)))}}},ue=ce,de=Object(d["a"])(ue,ae,re,!1,null,null,null),pe=de.exports;O()(de,"components",{QSelect:le["a"]});var me=n("f325"),he=n("4983"),fe={extends:he["a"],props:{barStyle:{type:Object,default:()=>({right:"1px",borderRadius:"6px",backgroundColor:"#027be3",width:"6px",opacity:.2})},thumbStyle:{type:Object,default:()=>({right:"1px",borderRadius:"6px",backgroundColor:"#027be3",width:"6px",opacity:.7})}}},ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",e._b({attrs:{clickable:""}},"q-item",e.link,!1),[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1):e._e(),n("q-item-section",[n("q-item-label",{attrs:{lines:"1"}},[e._v(e._s(e.title))]),e.caption?n("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v("\n      "+e._s(e.caption)+"\n    ")]):e._e()],1)],1)},ge=[],ye={props:{title:{type:String,required:!0},caption:{type:String,default:""},icon:{type:String,default:""},url:{type:String,default:""},to:{type:String,default:""}},computed:{link(){return this.to?{to:this.to}:{tag:"a",target:"_blank",href:this.url}}}},be=ye,_e=n("66e5"),we=n("4074"),Ce=n("0016"),Se=n("0170"),xe=Object(d["a"])(be,ve,ge,!1,null,null,null),ke=xe.exports;O()(xe,"components",{QItem:_e["a"],QItemSection:we["a"],QIcon:Ce["a"],QItemLabel:Se["a"]});var $e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.parent&&!e.noParent?n(e.getComponent(!0),e._b({tag:"component",nativeOn:{click:function(t){return e.$emit("inspect",e.index)}},scopedSlots:e._u([e._l(e.makeSlots(!0),(function(t){return{key:t.name,fn:function(){return[e._l(t.contents,(function(t,i){return["number"===typeof t?n("DemoComponent",{key:i,attrs:{"no-parent":"",info:e.info,index:void 0===e.index?t:e.index},on:{inspect:function(t){return e.$emit("inspect",t)}}}):n(t,{key:i,tag:"component"})]}))]},proxy:!0}}))],null,!0)},"component",e.makeParams(!0),!1)):n(e.getComponent(),e._b({ref:"demo",tag:"component",attrs:{id:e.info.className+"-"+e.index},nativeOn:{click:function(t){return e.$emit("inspect",e.demoIndex)}},scopedSlots:e._u([e._l(e.makeSlots(),(function(t){return{key:t.name,fn:function(){return e._l(t.contents,(function(e,t){return n(e,{key:t,tag:"component"})}))},proxy:!0}}))],null,!0)},"component",e.makeParams(),!1))},qe=[],Te=n("fe09"),je=n("4ae8"),Ee=n("ad53");const Oe={QRibbon:je["a"],QMarkdown:Ee["a"]},Pe=/<q(-[\w-]+)[^>]*>/g;var Qe={props:{info:Object,index:Number,noParent:Boolean},inject:["infoMap","demoMap","cachedComponents","cachedData","cachedParams","cachedSlots"],computed:{demo(){return this.info.demos&&this.info.demos[this.index]||{}},parent(){return this.demo.parent||this.info.parent},demoIndex(){return this.index+"-"+this.$vnode.key}},methods:{getCacheName(e){return this.info.className+(e?"-frame":"")+(void 0===this.index?"":"-"+this.index)+"-"+this.$vnode.key},getQuasarComponent(e){return Oe[e]||Te[e]},getComponent(e){const t=this.getCacheName(e);if(this.cachedComponents[t])return this.cachedComponents[t];let n,i,o,s,a,r=this.info;e?(n=r.demoFrameData,i=r.demoFrameBinds,r=this.infoMap[this.parent]||{className:this.parent},s=this.demo.demoFrameData,a=this.demo.demoFrameBinds):(o=this.demo.demoClass,s=this.demo.demoData,a=this.demo.demoBinds);let l=this.getQuasarComponent(o||r.className)||{template:`<${this.parent}><slot/></${this.parent}>`};if(!this.$isEmpty(r.demoData)||!this.$isEmpty(n)||!this.$isEmpty(s)||r.demoBinds||i||a){l={extends:l,data:()=>{if(this.cachedData[t])return this.cachedData[t];const e=Te["extend"](!0,{},r.demoData,n,s);return this.cachedData[t]=e,e},provide(){return{[e?"$frame":"$self"]:this}},inject:{$frame:{default:null}}};const o=Object.assign({},r.demoBinds,i,a),c=Object.keys(o);if(c.length>0){l.watch={};const e=this.cachedParams;c.forEach((n=>{l.watch[o[n]]={handler:i=>{e[t][n]=i},immediate:!0},l.watch[n]=function(e){const t=o[n].split(".");let i=this;while(t.length>1)i=i[t.shift()];i[t[0]]=e}})),l.created=function(){const n=(this.$options.model||{}).prop||"value";c.forEach((i=>{let o;o=i===n?(this.$options.model||{}).event||"input":"update:"+i,this.$on(o,(n=>{e[t][i]=n}))}))}}}return this.cachedComponents[t]=l,l},makeParams(e){const t=this.getCacheName(e);if(this.cachedParams[t])return this.cachedParams[t];let n,o,s,a,r=this.info;e?(n=r.demoFrameProps,o=r.demoFrameBinds,r=this.infoMap[this.parent]||{className:this.parent},s=this.demo.demoFrameProps,a=this.demo.demoFrameBinds):(s=this.demo.demoProps||this.demo,a=this.demo.demoBinds);const l=Te["extend"](!0,{},r.demoProps,n,s),c=Object.assign({},r.demoBinds,o,a),u=this.getQuasarComponent(r.className),d=(u instanceof Function?u.options.props:u&&u.props)||{};Object.keys(d).forEach((e=>{if(e in l)return;e in c&&(l[e]=void 0);const t=d[e];if(!t.required||null!=t.default)return;const n=t.type instanceof Array?t.type:[t.type||String];n.includes(Boolean)?l[e]=!0:n.includes(Number)?l[e]=50:n.includes(String)&&(l[e]=r.name)}));const p=i["a"].observable(l);return this.cachedParams[t]=p,p},makeSlots(e){const t=this.getCacheName(e);if(this.cachedSlots[t])return this.cachedSlots[t];let n,i,o=this.info;e?(n=this.normalizeDemoSlots(o.demoFrameSlots||0),o=this.infoMap[this.parent]||{className:this.parent},i=this.normalizeDemoSlots(this.demo.demoFrameSlots)):i=this.normalizeDemoSlots(this.demo.demoSlots);const s=this.normalizeDemoSlots(o.demoSlots),a=[];if(s||n||i){const t=Object.assign({},s,n,i);Object.keys(t).forEach((n=>{let i=t[n];null!==i&&(i instanceof Array||(i=[i]),a.push({name:n,contents:i.map(((t,i)=>{let s="";return e&&"number"===typeof t?t:("object"===typeof t&&(s=t.tag,t=t.template),{name:`${o.className}-${n}-${i}`+s,template:"<"===t.charAt(0)?t:`<div>${t}</div>`,components:this.searchUsedComponents(t),inject:{$frame:{default:null},$self:{default:null}}})}))}))}))}else a.push({name:"default",contents:[{name:`${o.className}-default`,template:`<div>${this.demo.demoName||o.name}</div>`}]});return this.cachedSlots[t]=a,a},normalizeDemoSlots(e){if(null!=e)return"object"!==typeof e||e instanceof Array?{default:e}:e},searchUsedComponents(e){const t={};return Array(...e.matchAll(Pe)).forEach((e=>{const n="Q"+this.$toCamelCase(e[1]);t[n]=this.getQuasarComponent(n)})),t}},mounted(){if(this.$refs.demo){let e=this.demoMap[this.info.className];e||(this.demoMap[this.info.className]=e={}),e[this.index]=this.$refs.demo,e[this.demoIndex]=this.$refs.demo}}},Me=Qe,De=Object(d["a"])(Me,$e,qe,!1,null,null,null),Ne=De.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-card",{staticClass:"q-mb-md",attrs:{flat:"",bordered:""}},[n("q-card-section",{staticClass:"row justify-between",staticStyle:{padding:"8px 8px 0px 0px"}},[n("q-ribbon",{staticClass:"q-py-none q-mb-sm",attrs:{color:"grey-7","background-color":"grey-4","leaf-color":"grey-5",decoration:"rounded-out"}},[n("div",{staticClass:"q-mx-md",staticStyle:{"font-size":"17px"}},[e._v(e._s(e.caption))])]),n("div",{staticClass:"row"},[e.showCode?n("q-tabs",{staticClass:"text-grey self-end",attrs:{dense:"","active-color":"primary","indicator-color":"primary"},model:{value:e.curTab,callback:function(t){e.curTab=t},expression:"curTab"}},e._l(e.codeTabs,(function(e){return n("q-tab",{key:e,attrs:{name:e,label:e}})})),1):e._e(),e.showCode?n("q-btn",{staticClass:"self-end",attrs:{flat:"",round:"",icon:"content_copy",color:"primary"},on:{click:e.copyCode}},[n("q-tooltip",[e._v("复制代码")])],1):e._e(),n("q-btn",{staticClass:"self-end",attrs:{flat:"",round:"",icon:e.showCode?"browser_not_supported":"code",color:"primary"},on:{click:function(t){e.showCode=!e.showCode}}},[n("q-tooltip",[e._v(e._s(e.showCode?"隐藏代码":"查看代码"))])],1),n("q-btn",{staticClass:"self-end",attrs:{flat:"",round:"",icon:"open_in_new",color:"primary",type:"a",target:"_blank",href:e.giteeUrl}},[n("q-tooltip",[e._v("访问gitee上的源码")])],1)],1)],1),n("q-separator"),n("q-slide-transition",[e.showCode?n("div",[n("q-tab-panels",{attrs:{animated:""},model:{value:e.curTab,callback:function(t){e.curTab=t},expression:"curTab"}},e._l(e.codeTabs,(function(t){return n("q-tab-panel",{key:t,staticClass:"q-pa-none overflow-hidden",attrs:{name:t}},[n("q-markdown",{staticClass:"fit",attrs:{src:"```html\n"+e.code[t]+"\n```"}})],1)})),1),n("q-separator")],1):e._e()]),e.loading?n("q-linear-progress",{attrs:{indeterminate:""}}):n(e.demo,{tag:"component"})],1)},Fe=[],Ae=n("cdde");const Ie=/<(\w+)[^>/]*>[\w\W]*<\/\1>/g;var Ve={props:{caption:{type:String,default:""},file:{type:String,required:!0},import:{type:String,default:""}},data:()=>({loading:!0,demo:null,code:{},codeTabs:[],curTab:"",showCode:!1}),computed:{giteeUrl(){return`https://gitee.com/fictiony/quasar-plus/blob/master/src/examples/${this.file}.vue`}},methods:{parseCode(e){const t={};return Array(...e.matchAll(Ie)).forEach((e=>{t[e[1]]=e[0]})),t},copyCode(){Object(Ae["a"])(this.code[this.curTab]).then((()=>{this.$q.notify({message:"代码已复制到剪贴板",timeout:1500})}))}},mounted(){const e={};Promise.all([...this.import.split(",").map((t=>n("f70b")("./"+t).then((t=>{e[t.default.name]=t.default})))),n("1cf7")("./"+this.file+".vue").then((e=>{this.demo=e.default})),n("c50f")("./"+this.file+".vue").then((e=>{this.code=this.parseCode(e.default),this.codeTabs=Object.keys(this.code),this.curTab=this.codeTabs[0]}))]).then((()=>{this.demo={extends:this.demo,components:e},this.loading=!1}))}},ze=Ve,Ue=n("f09f"),Le=n("a370"),Re=n("429b"),We=n("7460"),He=n("eb85"),Je=n("e9c1"),Ke=n("adad"),Xe=n("823b"),Ye=n("6b1d"),Ze=Object(d["a"])(ze,Be,Fe,!1,null,null,null),Ge=Ze.exports;O()(Ze,"components",{QCard:Ue["a"],QCardSection:Le["a"],QTabs:Re["a"],QTab:We["a"],QBtn:q["a"],QTooltip:j["a"],QSeparator:He["a"],QSlideTransition:Je["a"],QTabPanels:Ke["a"],QTabPanel:Xe["a"],QLinearProgress:Ye["a"]});var et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",{staticClass:"_prop ellipsis",class:e.nameColor,on:{dblclick:e.clickPropName}},[e._v("\n    "+e._s(e.name)+"\n    "),e.api.required||e.api.sync?n("q-icon",{staticClass:"float-right",attrs:{name:"info_outline"}}):e._e(),n("q-tooltip",{ref:"tooltip",attrs:{"max-width":"400px",anchor:"top left",self:"top right","hide-delay":e.pinTooltip?99999999:0}},[n("div",[n("span",{staticClass:"text-h6"},[e._v(e._s(e.name))]),e.pinTooltip?n("q-btn",{staticClass:"float-right all-pointer-events",staticStyle:{"margin-top":"-8px","margin-right":"-12px"},attrs:{flat:"",round:"",dense:"",icon:"close",size:"xs"},on:{click:e.closeTooltip}}):e._e(),e.isNew?n("q-badge",{staticClass:"q-ml-md float-right",attrs:{rounded:"",color:"green",label:"新增"}}):e._e(),e.isUpdate?n("q-badge",{staticClass:"q-ml-md float-right",attrs:{rounded:"",color:"red",label:"更新"}}):e._e()],1),n("q-separator",{attrs:{spaced:"5px",color:"grey"}}),n("div",[n("q-badge",{staticClass:"q-mr-sm",attrs:{color:"accent",label:"类型"}}),e._v("\n        "+e._s(e.type)+"\n      ")],1),n("q-separator",{attrs:{spaced:"3px",color:"transparent"}}),n("q-markdown",{staticClass:"q-ma-none all-pointer-events",attrs:{src:e.description}}),e.hasDefault?n("div",[n("q-badge",{staticClass:"q-mr-sm",attrs:{color:"secondary",label:"默认值"}}),e._v("\n        "+e._s(void 0===e.defaultDesc?e.defaultStr:e.defaultDesc)+"\n      ")],1):e._e()],1)],1),n(e.editorTd,e._b({ref:"editor",tag:"component",staticClass:"_value",class:e.editable?"":e.$q.dark.isActive?"bg-brown-10":"bg-orange-1",attrs:{disable:e.fobidEdit,"popup-content-style":"font-size: 13px","auto-save":""},model:{value:e.editValue,callback:function(t){e.editValue=t},expression:"editValue"}},"component",e.editorParams,!1),[void 0!==e.value?n("div",{staticClass:"ellipsis"},[e._v(e._s(e.valueStr))]):n("div",{staticClass:"ellipsis",class:e.$q.dark.isActive?"text-grey-7":"text-grey-5"},[e._v(e._s(e.defaultStr))])])],1)},tt=[],nt={data:()=>({pinTooltip:!1,fobidEdit:!0}),props:{instance:{},name:{type:String,required:!0},api:{required:!0},value:{required:!0},type:{type:String,default:"any"},editType:{type:String,default:"String"},validator:{type:Function,default:()=>!0},default:{},defaultDesc:{type:String},description:{type:String,default:"暂无说明"},isNew:{type:Boolean,default:!1},isUpdate:{type:Boolean,default:!1}},computed:{nameColor(){return["text-"+(this.isNew?"green":this.isUpdate?"red":"primary"),this.$q.dark.isActive?"bg-blue-grey-10":"bg-blue-1"]},valueStr(){return this.stringify(this.value)},hasDefault(){return void 0!==this.defaultDesc||void 0!==this.default},defaultStr(){return this.stringify(this.default)},editable(){switch(this.editType){case"String":case"Number":case"Boolean":return!0}return!1},editorTd(){switch(this.editType){case"String":case"Number":return this.api.values?pe:se;case"Boolean":return pe}return L["a"]},editorParams(){switch(this.editType){case"String":case"Number":return this.api.values?{options:this.api.values,inline:!0}:{placeholder:this.defaultStr,inline:!0};case"Boolean":return{options:["true","false"],inline:!0}}return{}},editValue:{get(){return this.valueStr},set(e){this.instance.$forceSet(this.name,this.parse(e))}}},methods:{stringify(e){if(void 0===e)return"";switch(this.editType){case"String":case"Number":return String(e);case"Boolean":return null===e?"null":String(!!e)}return e instanceof Function?"<Function>":"object"===typeof e?JSON.stringify(e,null,1):String(e)},parse(e){try{switch(this.editType){case"String":return e;case"Number":return Number(e)||0;case"Boolean":return"true"===e}return JSON.parse(e)}catch(t){return null}},clickPropName(){this.pinTooltip=!this.pinTooltip,this.$refs.tooltip.show()},closeTooltip(){this.pinTooltip=!1,this.$refs.tooltip.hide()}},mounted(){this.fobidEdit=!1}},it=nt,ot=(n("a389"),n("58a8")),st=Object(d["a"])(it,et,tt,!1,null,"5ee87b70",null),at=st.exports;O()(st,"components",{QIcon:Ce["a"],QTooltip:j["a"],QBtn:q["a"],QBadge:ot["a"],QSeparator:He["a"],QField:K["a"]});var rt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.state.selectingComponents?n("div",{staticClass:"_bounds",style:e.boundingRect}):e._e(),n("q-menu",{ref:"menu",attrs:{"content-style":"z-index: 100000000","auto-close":"","touch-position":""},on:{hide:function(t){e.listComponents=[]}}},[n("q-list",{attrs:{dense:""}},[e.listComponents.length?n("q-item",{key:"_",attrs:{clickable:""},on:{mouseover:function(t){return e.menuHover(e.listComponents.length-1)},click:function(t){return e.menuSelected(e.listComponents.length-1)}}},[n("q-item-section",[e._v(e._s(e.$getName(e.listComponents[e.listComponents.length-1].component.$options)))])],1):e._e(),n("q-separator"),e._l(e.listComponents,(function(t,i){return n("q-item",{key:i,attrs:{clickable:""},on:{mouseover:function(t){return e.menuHover(i)},click:function(t){return e.menuSelected(i)}}},[n("q-item-section",{style:{paddingLeft:12*t.level+"px"}},[e._v("\n          "+e._s(e.$getName(t.component.$options))+"\n        ")])],1)}))],2)],1)],1)},lt=[];n("26e9");const ct={x:0,y:0,width:0,height:0};var ut={data:()=>({mousePos:{},boundingRect:{},listComponents:[]}),inject:["state"],watch:{"state.selecting"(e){e||(this.state.selectingComponents=null);const t=(e?"add":"remove")+"EventListener",n=["mouseenter","mouseleave","mouseover","mouseout","mousedown","mouseup"];window[t]("mouseover",this.elementMouseOver,!0),window[t]("click",this.elementClicked,!0),n.forEach((e=>{window[t](e,this.cancelEvent,!0)}))},"state.selectingComponents"(e){e?this.refreshTimer||(this.refreshTimer=setInterval(this.refreshBoundingRect,20)):this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=void 0)}},methods:{cancelEvent(e){this.listComponents.length>0||(e.stopImmediatePropagation(),e.preventDefault())},elementMouseOver(e){if(this.listComponents.length>0)return;this.cancelEvent(e),this.mousePos={x:e.clientX,y:e.clientY};let t=this.findComponent(e.target);if(t)if(this.$parent.$el.contains(t.$el)){const e=this.findOuterComponents(t),n=e[0]||{component:t},i=this.findInnerComponents(n.component,n.level),o=[...i.reverse(),...e];t=o.length>0?this.normalizeLevels(o):null}else t=null;this.state.selectingComponents=t},elementClicked(e){if(!(this.listComponents.length>0)){if(this.cancelEvent(e),this.state.selectingComponents){if(this.state.selectingComponents.length>1)return this.listComponents=this.state.selectingComponents.slice().reverse(),void this.$refs.menu.show(e);this.state.editingComponent=this.state.selectingComponents[0].component}else this.state.editingComponent=null;this.state.selecting=!1}},menuHover(e){this.state.selectingComponents=[this.listComponents[e]]},menuSelected(e){this.state.editingComponent=this.listComponents[e].component,this.listComponents=[],this.state.selecting=!1},findComponent(e){while(e&&!e.__vue__)e=e.parentElement;return e&&e.__vue__},findOuterComponents(e,t=0){const n=[];while(e){if(this.hitTest(e.$el,this.mousePos)&&n.push({component:e,level:t}),e=e.$parent,e===this.$parent||!this.$parent.$el.contains(e.$el))break;t--}return n},findInnerComponents(e,t=0){const n=[],i=[...e.$children],o=e.$children.map((()=>t+1));while(i.length>0)e=i.pop(),t=o.pop(),this.hitTest(e.$el,this.mousePos)&&n.push({component:e,level:t}),i.push(...e.$children),o.push(...e.$children.map((()=>t+1)));return n},normalizeLevels(e){const t=e[e.length-1].level;return e.map((e=>({component:e.component,level:e.level-t})))},getBoundingRect(e){if(!e.getBoundingClientRect)return null;const t=e.getBoundingClientRect();if(t.width>0&&t.height>0)return t;let{left:n,top:i,right:o,bottom:s}=t;return Array(...e.children).forEach((e=>{const t=this.getBoundingRect(e);t&&(n=Math.min(n,t.left),i=Math.min(i,t.top),o=Math.max(o,t.right),s=Math.max(s,t.bottom))})),{x:n,y:i,width:o-n,height:s-i}},hitTest(e,t){const{x:n,y:i,width:o,height:s}=this.getBoundingRect(e)||ct;return t.x>=n&&t.x<n+o&&t.y>=i&&t.y<i+s},refreshBoundingRect(){const e=this.getBoundingRect(this.state.selectingComponents[0].component.$el)||ct;this.boundingRect={left:e.x+"px",top:e.y+"px",width:e.width+"px",height:e.height+"px"}}},beforeDestroy(){this.refreshTimer&&clearInterval(this.refreshTimer)}},dt=ut,pt=(n("6a06"),n("4e73")),mt=n("1c1c"),ht=Object(d["a"])(dt,rt,lt,!1,null,"5abcdc60",null),ft=ht.exports;O()(ht,"components",{QMenu:pt["a"],QList:mt["a"],QItem:_e["a"],QItemSection:we["a"],QSeparator:He["a"]});const vt={QEditableTd:se,QSelectableTd:pe,MyDrawer:me["default"],CustomScroller:fe,EssentialLink:ke,DemoComponent:Ne,DemoExample:Ge,DemoPage:Q,PropItem:at,ComponentSelector:ft};Object.keys(vt).forEach((e=>{i["a"].component(vt[e].name||e,vt[e])}));var gt=n("4b46"),yt=n("a670");const bt="";async function _t(){const{app:e,router:t}=await B();let n=!1;const o=e=>{n=!0;const i=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=i},s=window.location.href.replace(window.location.origin,""),a=[void 0,void 0,gt["default"],yt["default"]];for(let l=0;!1===n&&l<a.length;l++)if("function"===typeof a[l])try{await a[l]({app:e,router:t,Vue:i["a"],ssrContext:null,redirect:o,urlPath:s,publicPath:bt})}catch(r){return r&&r.url?void(window.location.href=r.url):void console.error("[Quasar] boot error:",r)}!0!==n&&new i["a"](e)}_t()},"31cd":function(e,t,n){},4651:function(e,t,n){var i={"./MyDrawer.md":["79b3",18],"./MySplitter.md":["46aa",19]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(i)},o.id="4651",e.exports=o},5951:function(e,t,n){},"6a06":function(e,t,n){"use strict";n("1b03")},"8d86":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));const i=[{title:"Quasar Plus 代码仓库",caption:"https://gitee.com/fictiony/quasar-plus",icon:"code",url:"https://gitee.com/fictiony/quasar-plus"},{title:"Quasar Framework 官网",caption:"https://quasar.dev",icon:"camera",url:"https://quasar.dev"},{title:"Quasar Framework 中文网",caption:"http://www.quasarchs.com",icon:"school",url:"http://www.quasarchs.com"},{title:"Quasar Framework 中文社区",caption:"http://forum.quasarchs.com",icon:"record_voice_over",url:"http://forum.quasarchs.com"}],o=[{title:"返回主页",icon:"home",to:"/"},{title:"Quasar 组件清单",icon:"widgets",to:"/QuasarComponents"}],s=[{title:"扩展分隔条",caption:"MySplitter",icon:"vertical_align_center",to:"/MySplitter"},{title:"扩展侧滑栏",caption:"MyDrawer",icon:"input",to:"/MyDrawer"}]},"9c00":function(e,t,n){"use strict";n("5951")},a389:function(e,t,n){"use strict";n("ea30")},c50f:function(e,t,n){var i={"./MyDrawerBasic.vue":["2d8e",13],"./MyDrawerCustom.vue":["bac4",14],"./MyDrawerSync.vue":["9615",15],"./MySplitterBasic.vue":["cf2c",16],"./MySplitterSides.vue":["26c3",17]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(i)},o.id="c50f",e.exports=o},ea30:function(e,t,n){},f325:function(e,t,n){"use strict";n.r(t);var i=n("9404"),o=n("8562"),s=n("f9f9");t["default"]={name:"MyDrawer",extends:i["a"],mixins:[Object(s["swapProp"])("width","realWidth")],components:{"my-drawer-resizer":o["a"].extend({methods:{__pan(e){o["a"].options.methods.__pan.call(this,e),this.__maxValue=1/0}}})},props:{limits:o["a"].options.props.limits,resizerClass:[Array,String,Object],resizerStyle:{type:[Array,String,Object],default:"width: 0px"}},computed:{size(){return this.isMini?this.miniWidth:this.realWidth}},render(e){return this.$injectSlot("default","splitter",(t=>[e("div",{staticClass:"fit no-scroll"},[e("my-drawer-resizer",{staticClass:"q-drawer__resizer fit",props:{value:this.realWidth,limits:this.limits,unit:"px",reverse:"right"===this.side,emitImmediately:!0,separatorClass:this.resizerClass,separatorStyle:this.resizerStyle},on:{input:e=>{this.realWidth=e}},scopedSlots:{["right"===this.side?"after":"before"]:()=>t,separator:()=>this.$getSlot("resizer")}})])])),i["a"].options.render.call(this,e)}}},f70b:function(e,t,n){var i={"./MyDrawer":["f325"],"./MyDrawer.js":["f325"],"./MySplitter":["befa",1],"./MySplitter.js":["befa",1],"./mixins":["f9f9"],"./mixins.js":["f9f9"]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(i)},o.id="f70b",e.exports=o},f9f9:function(e,t,n){"use strict";function i(e,t,n){return t=t||"_"+e,n=n||"update:"+e,{data:n=>({[t]:n[e]}),watch:{[e]:function(e){this[t]=e},[t]:function(e){this.$emit(n,e)}}}}n.r(t),n.d(t,"swapProp",(function(){return i}))}});