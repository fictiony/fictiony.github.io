(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"1e64":function(e,n,t){"use strict";t("5b60")},"5b60":function(e,n,t){},"713b":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-layout",{ref:"layout",attrs:{view:"lHh LpR lfr"}},[t("q-header",{attrs:{elevated:""}},[t("q-toolbar",{staticClass:"q-pr-xs"},[t("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(n){e.leftOpen=!e.leftOpen}}}),t("q-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:e.subTitleShow||!e.pageTitle,expression:"subTitleShow || !pageTitle"}]},[e._v("\n        "+e._s(e.title)+"\n        "),t("span",{staticClass:"text-subtitle1"},[e._v("v"+e._s(e.version))])]),t("q-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:e.pageTitle,expression:"pageTitle"}]},[e._v("\n        "+e._s(e.pageTitle)+"\n      ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.subTitleShow,expression:"subTitleShow"}],staticClass:"row items-center"},[t("q-btn",{attrs:{flat:"",dense:"",size:"sm",label:"联系站长",icon:"email",type:"a",href:"mailto:ficitony@qq.com"}},[t("q-tooltip",[e._v("ficitony@qq.com")])],1),t("div",{staticClass:"q-ml-md"},[e._v("Quasar v"+e._s(e.$q.version))])],1),t("q-btn",{staticClass:"q-ml-xs",attrs:{flat:"",round:"",icon:"more_vert"}},[t("q-menu",{attrs:{"auto-close":""}},[t("q-list",{staticStyle:{width:"160px"}},[t("q-item",{attrs:{clickable:""},on:{click:function(n){e.rightOpen=!e.rightOpen}}},[t("q-item-section",{staticClass:"_icon",attrs:{avatar:""}},[t("q-icon",{attrs:{name:e.rightOpen?"check_box":"check_box_outline_blank"}})],1),t("q-item-section",[e._v("属性栏")])],1),t("q-separator"),e._l(Object.keys(e.API_LANG),(function(n){return t("q-item",{key:n,attrs:{clickable:""},on:{click:function(t){return e.setApiLang(n)}}},[t("q-item-section",{staticClass:"_icon",attrs:{avatar:""}},[t("q-icon",{attrs:{name:e.apiLang===n?"done":""}})],1),t("q-item-section",[e._v(e._s(n)+" API")])],1)})),t("q-separator"),t("q-item",{attrs:{clickable:""},on:{click:e.toggleDark}},[t("q-item-section",{staticClass:"_icon",attrs:{avatar:""}},[t("q-icon",{attrs:{name:e.$q.dark.isActive?"brightness_5":"brightness_2"}})],1),t("q-item-section",[e._v(e._s(e.$q.dark.isActive?"亮色模式":"暗色模式"))])],1),t("q-item",{attrs:{clickable:"",tag:"a",href:"mailto:ficitony@qq.com"}},[t("q-item-section",{staticClass:"_icon",attrs:{avatar:""}},[t("q-icon",{attrs:{name:"email"}})],1),t("q-item-section",[e._v("联系站长")])],1),t("q-separator"),t("q-item",{attrs:{dense:"",disable:""}},[t("q-item-section",[e._v("Quasar v"+e._s(e.$q.version))])],1)],2)],1)],1)],1)],1),t("q-footer",{staticClass:"q-pa-sm bg-transparent text-primary row justify-center",attrs:{bordered:""}},[e._v("\n    "+e._s(e.name)+"\n    "),t("div",{staticClass:"q-px-sm"},[e._v("|")]),t("q-btn",{attrs:{flat:"",dense:"",size:"sm",label:"MIT LICENSE",type:"a",href:"https://gitee.com/fictiony/quasar-plus/blob/master/LICENSE",target:"_blank"}}),t("div",{staticClass:"q-px-sm"},[e._v("|")]),t("q-btn",{attrs:{flat:"",dense:"",size:"sm",label:"浙ICP备2021015824号-1",type:"a",href:"https://beian.miit.gov.cn/",target:"_blank"}}),t("div",{staticClass:"q-px-sm"},[e._v("|")]),t("q-btn",{attrs:{flat:"",dense:"",size:"sm",label:"联系站长",type:"a",href:"mailto:ficitony@qq.com"}})],1),t("my-drawer",{attrs:{"show-if-above":"",bordered:"",elevated:"","content-class":e.drawerBgColor,width:200,limits:[150,300]},model:{value:e.leftOpen,callback:function(n){e.leftOpen=n},expression:"leftOpen"}},[t("MenuPanel")],1),t("my-drawer",{ref:"rightDrawer",attrs:{side:"right","show-if-above":"",breakpoint:720,bordered:"",width:300,limits:[200,500]},model:{value:e.rightOpen,callback:function(n){e.rightOpen=n},expression:"rightOpen"}},[e.rightOpen?t("PropPanel",{on:{close:e.propPanelClose}}):e._e()],1),t("q-page-container",[t("router-view")],1)],1)},o=[],a=t("ded3"),i=t.n(a),r=(t("ddb0"),t("e01a"),t("5319"),t("c1f9"),t("da4e")),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-list",{staticClass:"fit no-scroll column"},[e._l(e.PAGE_LIST,(function(n,s){return t("EssentialLink",e._b({key:s},"EssentialLink",n,!1))})),t("q-separator"),t("q-item",{attrs:{dense:""}},[t("q-item-section",[t("q-item-label",{staticClass:"text-grey-5",attrs:{lines:"1"}},[e._v(" 扩展组件列表 ")])],1)],1),t("CustomScroller",{staticClass:"q-space"},e._l(e.PLUS_LIST,(function(n,s){return t("EssentialLink",e._b({key:s},"EssentialLink",n,!1))})),1)],2)},c=[],p={data:()=>({PAGE_LIST:r["c"],PLUS_LIST:r["d"]})},j=p,d=t("2877"),Q=t("1c1c"),b=t("eb85"),f=t("66e5"),u=t("4074"),m=t("0170"),h=t("2c91"),g=t("eebe"),v=t.n(g),S=Object(d["a"])(j,l,c,!1,null,null,null),q=S.exports;v()(S,"components",{QList:Q["a"],QSeparator:b["a"],QItem:f["a"],QItemSection:u["a"],QItemLabel:m["a"],QSpace:h["a"]});var T=t("74ab"),_=t("5fac"),k=t("9362"),C=t("9224");const w={QRibbon:t.e(0).then(t.t.bind(null,"e9cc",3)),QMarkdown:t.e(0).then(t.t.bind(null,"161b",3))};var y={components:{MenuPanel:q,PropPanel:T["b"]},data:()=>({API_LANG:r["a"],inspect:T["c"],name:C.productName,title:C.description,version:C.version,leftOpen:!1,rightOpen:!1,pageTitle:"",apiLang:""}),computed:{subTitleShow(){return this.$refs.layout&&this.$refs.layout.totalWidth>720},drawerBgColor(){return this.$q.dark.isActive?"bg-grey-9":"bg-grey-1"}},watch:{$route:{handler:"updateTitle",immediate:!0},"inspect.selecting"(e){this.$refs.rightDrawer.belowBreakpoint&&(this.rightOpen=!e)}},methods:{setApiLang(e){this.apiLang=e,this.$saveConfig("apiLang",e),Object.keys(_).filter((e=>!w[e])).forEach((n=>{T["c"].extraApi[n]="中文"===e?t("7fc7")("./"+n+".json"):t("56a7")("./"+n+".json"),delete T["c"].apiCache[n]})),T["c"].target=null},toggleDark(){this.$q.dark.toggle(),this.$saveConfig("dark",this.$q.dark.isActive)},updateTitle(e){if("/"!==e.path){const n=r["c"].find((n=>n.to==="/"+e.path.split("/")[1]));if(n)return this.pageTitle=n.title,void(document.title=`${n.title} | ${this.title}`);const t=r["d"].find((n=>n.to===e.path));if(t)return this.pageTitle=`${t.title}（${t.caption}）`,void(document.title=`${t.caption} | ${this.title}`)}this.pageTitle="",document.title=`在线演示 | ${this.title}`},propPanelClose(){this.rightOpen=!1,T["c"].target=null}},mounted(){this._computedWatchers.subTitleShow.update(),this.apiLang=this.$loadConfig("apiLang")||"中文",this.$q.dark.isActive!==!!this.$loadConfig("dark")&&this.$q.dark.toggle(),T["c"].getDocUrl=e=>{const n=_[e];if(n&&n.doc)return n.doc.replace("https://quasar.dev",r["a"][this.apiLang])},Object.assign(T["c"].extraApi,i()(i()({},Object.fromEntries([...Object.keys(_).filter((e=>!w[e])).map((e=>[e,"中文"===this.apiLang?t("7fc7")("./"+e+".json"):t("56a7")("./"+e+".json")])),...Object.keys(k).map((e=>[e,t("7fc7")("./"+e+".json")]))])),w)),T["c"].hideClose=!1}},L=y,P=(t("1e64"),t("4d5a")),O=t("e359"),I=t("65c6"),x=t("9c40"),A=t("6ac5"),$=t("05c0"),B=t("4e73"),E=t("0016"),D=t("7ff0"),M=t("09e3"),N=Object(d["a"])(L,s,o,!1,null,"02c57024",null);n["default"]=N.exports;v()(N,"components",{QLayout:P["a"],QHeader:O["a"],QToolbar:I["a"],QBtn:x["a"],QToolbarTitle:A["a"],QTooltip:$["a"],QMenu:B["a"],QList:Q["a"],QItem:f["a"],QItemSection:u["a"],QIcon:E["a"],QSeparator:b["a"],QFooter:D["a"],QPageContainer:M["a"]})},"7fc7":function(e,n,t){var s={"./AddressbarColor.json":["faf1",20],"./AppFullscreen.json":["8f4e",21],"./AppVisibility.json":["57a6",22],"./BottomSheet.json":["e697",23],"./ClosePopup.json":["dcf6",24],"./Cookies.json":["858a",25],"./Dark.json":["4b68",26],"./Dialog.json":["a146",27],"./GoBack.json":["25ec",28],"./Intersection.json":["381b",29],"./Loading.json":["1839",30],"./LoadingBar.json":["035c",31],"./LocalStorage.json":["41f1",32],"./Morph.json":["abb9",33],"./Mutation.json":["b317",34],"./MyDrawer.json":["2dcc",35],"./MySplitter.json":["d62d",36],"./Notify.json":["d5e4",37],"./Platform.json":["9b3d",38],"./QAjaxBar.json":["8e8e",39],"./QAvatar.json":["c971",40],"./QBadge.json":["7239",41],"./QBanner.json":["542e",42],"./QBar.json":["b114",43],"./QBreadcrumbs.json":["7e90",44],"./QBreadcrumbsEl.json":["fec8",45],"./QBtn.json":["114f",46],"./QBtnDropdown.json":["8c24",47],"./QBtnGroup.json":["59d9",48],"./QBtnToggle.json":["104a",49],"./QCard.json":["e0e8",50],"./QCardActions.json":["de2c",51],"./QCardSection.json":["0163",52],"./QCarousel.json":["1e33",53],"./QCarouselControl.json":["167e",54],"./QCarouselSlide.json":["64ad",55],"./QChatMessage.json":["68f8",56],"./QCheckbox.json":["5e4d",57],"./QChip.json":["9e32",58],"./QCircularProgress.json":["0014",59],"./QColor.json":["ae38",60],"./QDate.json":["7228",61],"./QDialog.json":["616a",62],"./QDrawer.json":["4fe8",63],"./QEditor.json":["6d86",64],"./QExpansionItem.json":["e474",65],"./QFab.json":["4034",66],"./QFabAction.json":["a9b9",67],"./QField.json":["9182",68],"./QFile.json":["6265",69],"./QFooter.json":["6943",70],"./QForm.json":["c478",71],"./QHeader.json":["eca6",72],"./QIcon.json":["47a4",73],"./QImg.json":["9703",74],"./QInfiniteScroll.json":["83d4",75],"./QInnerLoading.json":["b263",76],"./QInput.json":["9abf",77],"./QIntersection.json":["1015",78],"./QItem.json":["685f",79],"./QItemLabel.json":["336c",80],"./QItemSection.json":["2edc",81],"./QKnob.json":["f6c5",82],"./QLayout.json":["3fff",83],"./QLinearProgress.json":["8412",84],"./QList.json":["f803",85],"./QMarkupTable.json":["86b5",86],"./QMenu.json":["4c71",87],"./QNoSsr.json":["cf57",88],"./QOptionGroup.json":["fdfc",89],"./QPage.json":["f45a",90],"./QPageContainer.json":["3dc6",91],"./QPageScroller.json":["e4c4",92],"./QPageSticky.json":["ae40",93],"./QPagination.json":["f413",94],"./QParallax.json":["aa5d",95],"./QPopupEdit.json":["ca74",96],"./QPopupProxy.json":["4f63",97],"./QPullToRefresh.json":["f1da",98],"./QRadio.json":["ced6",99],"./QRange.json":["6646",100],"./QRating.json":["7e8a",101],"./QResizeObserver.json":["7bd6",102],"./QResponsive.json":["eb3b",103],"./QRouteTab.json":["cd89",104],"./QScrollArea.json":["f9e3",105],"./QScrollObserver.json":["c54e",106],"./QSelect.json":["c987",107],"./QSeparator.json":["9a85",108],"./QSkeleton.json":["976e",109],"./QSlideItem.json":["ddb8",110],"./QSlideTransition.json":["5e39",111],"./QSlider.json":["e693",112],"./QSpace.json":["f8eb",113],"./QSpinner.json":["5ccd",114],"./QSpinnerAudio.json":["bd76",115],"./QSpinnerBall.json":["7803",116],"./QSpinnerBars.json":["233e",117],"./QSpinnerBox.json":["eccf",118],"./QSpinnerClock.json":["d6a8",119],"./QSpinnerComment.json":["1cca",120],"./QSpinnerCube.json":["a155",121],"./QSpinnerDots.json":["a14d",122],"./QSpinnerFacebook.json":["d3f7",123],"./QSpinnerGears.json":["fe7c",124],"./QSpinnerGrid.json":["76f8",125],"./QSpinnerHearts.json":["1e09",126],"./QSpinnerHourglass.json":["ec14",127],"./QSpinnerInfinity.json":["96c5",128],"./QSpinnerIos.json":["ddef",129],"./QSpinnerOrbit.json":["2489",130],"./QSpinnerOval.json":["8c4f5",131],"./QSpinnerPie.json":["83f2",132],"./QSpinnerPuff.json":["eb4a",133],"./QSpinnerRadio.json":["88d5",134],"./QSpinnerRings.json":["a22a",135],"./QSpinnerTail.json":["4bfb",136],"./QSplitter.json":["a0bc",137],"./QStep.json":["0609",138],"./QStepper.json":["b8db",139],"./QStepperNavigation.json":["e29d",140],"./QTab.json":["8981",141],"./QTabPanel.json":["98be",142],"./QTabPanels.json":["6eef",143],"./QTable.json":["59a3",144],"./QTabs.json":["c4b2",145],"./QTd.json":["f681",146],"./QTh.json":["dfb1",147],"./QTime.json":["ef7f",148],"./QTimeline.json":["3418",149],"./QTimelineEntry.json":["d5e8",150],"./QToggle.json":["5874",151],"./QToolbar.json":["8741",152],"./QToolbarTitle.json":["c178",153],"./QTooltip.json":["5f58",154],"./QTr.json":["8aca",155],"./QTree.json":["fec9",156],"./QUploader.json":["824a",157],"./QUploaderAddTrigger.json":["0154",158],"./QUploaderBase.json":["f276",159],"./QVideo.json":["b0d0",160],"./QVirtualScroll.json":["88f1",161],"./Quasar.json":["5fac"],"./Ripple.json":["78fb",162],"./Screen.json":["b52a",163],"./Scroll.json":["ebe7",164],"./ScrollFire.json":["559a",165],"./SessionStorage.json":["d21f",166],"./TouchHold.json":["68f5",167],"./TouchPan.json":["6ffb",168],"./TouchRepeat.json":["b9db",169],"./TouchSwipe.json":["b27f",170]};function o(e){if(!t.o(s,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=s[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t.t(o,3)}))}o.keys=function(){return Object.keys(s)},o.id="7fc7",e.exports=o}}]);