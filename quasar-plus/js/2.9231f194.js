(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"5fac":function(e){e.exports=JSON.parse('{"QLayout":{"name":"布局框架","doc":"https://quasar.dev/layout/layout#qlayout-api","category":"container","frame":150,"demoData":{"drawerLeft":true,"drawerRight":true},"demoProps":{"view":"hHh Lpr lFf","container":true,"style":"height: 150px"},"demoSlots":["<q-header class=\'row items-center justify-between\'><q-btn flat dense icon=\'menu\' @click=\'$self.drawerLeft = !$self.drawerLeft\'></q-btn>页眉<q-btn flat dense icon=\'menu\' @click=\'$self.drawerRight = !$self.drawerRight\'></q-btn></q-header>","<q-drawer elevated :breakpoint=\'400\' :width=\'150\' content-class=\'q-pa-sm\' v-model=\'$self.drawerLeft\'>左侧滑栏</q-drawer>","<q-drawer side=\'right\' bordered :breakpoint=\'400\' :width=\'150\' content-class=\'q-pa-sm\' v-model=\'$self.drawerRight\'>右侧滑栏</q-drawer>","<q-page-container><q-page padding class=\'bg-grey-2\'><p>内页</p><div v-for=\'i in 9\'>第{{i}}行</div></q-page></q-page-container>","<q-footer class=\'bg-grey text-center\'>页脚</q-footer>"]},"QHeader":{"name":"布局页眉","doc":"https://quasar.dev/layout/header-and-footer#qheader-api","category":"container","isPart":"QLayout","frame":50,"parent":"QLayout","demoProps":{"class":"text-center q-pa-xs"},"demoFrameProps":{"style":"height: 60px"}},"QFooter":{"name":"布局页脚","doc":"https://quasar.dev/layout/header-and-footer#qfooter-api","category":"container","isPart":"QLayout","frame":50,"parent":"QLayout","demoProps":{"class":"bg-grey text-center"},"demoFrameProps":{"style":"height: 50px"}},"QDrawer":{"name":"布局侧滑栏","doc":"https://quasar.dev/layout/drawer#qdrawer-api","category":"container","isPart":"QLayout","frame":100,"parent":"QLayout","demoProps":{"elevated":true,"showIfAbove":true,"width":200,"breakpoint":400,"contentClass":"bg-grey-2 q-pa-sm"},"demoBinds":{"value":"$frame.drawer"},"demoFrameData":{"drawer":true},"demoFrameProps":{"style":"height: 100px"},"demoFrameSlots":[0,"<q-page-container><q-page padding><q-toggle v-model=\'$frame.drawer\' label=\'侧滑栏显示\'/></q-page></q-page-container>"]},"QPageContainer":{"name":"布局内页容器","doc":"https://quasar.dev/layout/page#qpagecontainer-api","category":"container","isPart":"QLayout","frame":100,"parent":"QLayout","demoSlots":" <template v-for=\'i in 3\'><q-page padding><p>第{{i}}页</p>内容</q-page><q-separator/></template>","demoFrameProps":{"style":"height: 100px"}},"QPage":{"name":"布局内页","doc":"https://quasar.dev/layout/page#qpage-api","category":"container","isPart":"QPageContainer","frame":100,"parent":"QLayout","demoProps":{"padding":true},"demoSlots":" <div v-for=\'i in 9\'>第{{i}}行</div>","demoFrameProps":{"style":"height: 100px"}},"QPageSticky":{"name":"页面边缘吸附","doc":"https://quasar.dev/layout/page-sticky#qpagesticky-api","category":"container","isPart":"QLayout","frame":100,"parent":"QLayout","demoProps":{"class":"bg-accent text-white q-pa-sm"},"demoFrameProps":{"style":"height: 100px"},"demoFrameSlots":["<q-page-container><q-page padding><div v-for=\'i in 9\'>第{{i}}行</div></q-page></q-page-container>",0]},"QPageScroller":{"name":"页面自动滚屏","doc":"https://quasar.dev/layout/page-scroller#qpagescroller-api","category":"container","isPart":"QLayout","frame":100,"parent":"QLayout","demoProps":{"scrollOffset":10},"demoSlots":"<q-btn rounded glossy color=\'primary\' label=\'回到开头\' />","demoFrameProps":{"style":"height: 100px"},"demoFrameSlots":["<q-page-container><q-page padding><div v-for=\'i in 9\'>请向下滚动</div></q-page></q-page-container>",0]},"QBanner":{"name":"横幅","doc":"https://quasar.dev/vue-components/banner#qbanner-api","category":"container","demoProps":{"class":"fit bg-accent text-white","inline-actions":true},"demoSlots":{"default":"<q-toolbar-title>您的工资到账了！</q-toolbar-title>","avatar":"<q-icon name=\'attach_money\'/>","action":"<q-btn flat label=\'知道了\'/>"}},"QBar":{"name":"横栏","doc":"https://quasar.dev/vue-components/bar#qbar-api","category":"container","demoProps":{"class":"fit bg-secondary text-white"},"demoSlots":["12:30","<q-icon name=\'alarm\'/>","<q-space/>","150K/s","<q-icon name=\'signal_cellular_alt\'/>","4G","<q-icon name=\'wifi\'/>","100%","<q-icon name=\'battery_full\'/>"]},"QBtn":{"name":"按钮","doc":"https://quasar.dev/vue-components/button#qbtn-api","category":"basic","demoSlots":{},"demos":[{"demoName":"普通","color":"primary","label":"按钮"},{"demoName":"小胶囊形带图标","rounded":true,"push":true,"glossy":true,"color":"secondary","size":"sm","icon":"bookmark","label":"Push"},{"demoName":"大圆形纯图标","round":true,"glossy":true,"color":"accent","size":"lg","icon":"local_activity"}],"demoTips":true},"QBtnGroup":{"name":"按钮组","doc":"https://quasar.dev/vue-components/button-group#qbtngroup-api","category":"basic","demoProps":{"rounded":true,"glossy":true},"demoSlots":["<q-btn icon=\'add\' label=\'添加\' color=\'primary\'/>","<q-btn icon=\'edit\' label=\'修改\' color=\'primary\'/>","<q-btn icon-right=\'delete\' label=\'删除\' color=\'negative\'/>"]},"QBtnDropdown":{"name":"下拉按钮","doc":"https://quasar.dev/vue-components/button-dropdown#qbtndropdown-api","category":"basic","demoData":{"options":["北京","上海","广州","深圳"],"selected":"请选择"},"demoProps":{"glossy":true,"autoClose":true,"color":"secondary"},"demoBinds":{"label":"selected"},"demoSlots":"<q-list dense><q-item v-for=\'option in $self.options\' clickable @click=\'$self.selected = option\' :key=\'option\'><q-item-section>{{ option }}</q-item-section></q-item></q-list>"},"QTooltip":{"name":"工具提示","doc":"https://quasar.dev/vue-components/tooltip#qtooltip-api","category":"basic","parent":"QBtn","demoFrameProps":{"outline":true,"color":"primary","label":"鼠标悬停查看"},"demos":[{"demoName":"基本"},{"demoName":"指定样式","demoProps":{"contentClass":"bg-red shadow-4"},"demoSlots":" 带样式的工具提示","demoFrameProps":{"color":"red","label":"指定样式"}}]},"QIcon":{"name":"图标","doc":"https://quasar.dev/vue-components/icon#qicon-api","category":"basic","demoProps":{"size":"md"},"demoSlots":{},"demos":[{"demoName":"基本","name":"alarm"},{"demoName":"指定大小颜色","name":"api","size":"sm","color":"red"},{"demoName":"PNG图片","name":"img:icons/favicon-32x32.png"},{"demoName":"内嵌SVG","name":"img:data:image/svg+xml;charset=utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' stroke=\'none\' fill=\'%23B33636\'><path fill=\'none\' d=\'M0 0h24v24H0V0z\'/><path stroke=\'%23FFD700\' fill=\'%23FFD700\' stroke-linecap=\'round\' opacity=\'.5\' d=\'M17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8zM8.08 5.03C6.37 6 5.05 7.58 4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44z\'/><path stroke=\'none\' fill=\'%23B33636\' stroke-linecap=\'round\'  d=\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12zM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47 5.05 7.58 6.37 6 8.08 5.03zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55 1.83 2.26 4.62 3.7 7.75 3.7.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z\'/><circle cx=\'9\' cy=\'13\' r=\'1.25\'/><circle cx=\'15\' cy=\'13\' r=\'1.25\'/></svg>","size":"50px"}],"demoTips":true},"QImg":{"name":"图像","doc":"https://quasar.dev/vue-components/img#qimg-api","category":"basic","demoData":{"baseUrl":"https://placeimg.com/500/300/nature?t=0"},"demoProps":{"class":"rounded-borders","width":"300px","spinnerColor":"white"},"demoBinds":{"src":"baseUrl"},"demoSlots":"<div class=\'absolute-bottom text-center\' @click=\'$self.baseUrl = $self.baseUrl.split(\\"=\\")[0] + \\"=\\" + Math.random()\'>点击换图</div>"},"QAvatar":{"name":"头像","doc":"https://quasar.dev/vue-components/avatar#qavatar-api","category":"basic","demoProps":{"color":"secondary","textColor":"white"},"demoSlots":{},"demos":[{"demoName":"基本","icon":"directions"},{"demoName":"文字内容","demoProps":{"color":"orange","size":"24px"},"demoSlots":"$"},{"demoName":"图片内容","demoProps":{"size":"60px","rounded":true},"demoSlots":"<img src=\'https://cdn.quasar.dev/img/avatar.png\'>"}],"demoTips":true},"QRating":{"name":"评分","doc":"https://quasar.dev/vue-components/rating#qrating-api","demoData":{"rating":4.5},"demoBinds":{"value":"rating"},"demos":[{"demoName":"基本","icon":"favorite_border","color":"red-7","size":"md"},{"demoName":"满10分含半分","max":10,"icon":"star_border","iconSelected":"star","iconHalf":"star_half","color":"purple","no-dimming":true,"size":"sm"}],"demoTips":true},"QChatMessage":{"name":"聊天消息","doc":"https://quasar.dev/vue-components/chat#qchatmessage-api","frame":1,"frameStyles":{"width":"400px","padding":"5px 10px 5px 10px"},"parent":"div","demoSlots":"<q-spinner-dots/>","demoFrameSlots":[0,1],"demos":[{"name":"我","avatar":"https://cdn.quasar.dev/img/avatar1.jpg","text":["在吗？"],"sent":true,"stamp":"<br>42 分钟之前","demoSlots":"想你了😘"},{"name":"女神","avatar":"https://cdn.quasar.dev/img/avatar2.jpg","text":["刚刚去洗澡了"],"stamp":"<br>刚刚"}]},"QChip":{"name":"碎片","doc":"https://quasar.dev/vue-components/chip#qchip-api","category":"basic","demoProps":{"clickable":true},"demos":[{"demoName":"基本","icon":"event"},{"demoName":"定制样式","color":"red","textColor":"white","dense":true,"outline":true,"square":true,"iconRight":"star"},{"demoName":"嵌入头像","color":"secondary","textColor":"white","demoSlots":["<q-avatar><img src=\'https://cdn.quasar.dev/img/boy-avatar.png\'></q-avatar>","嵌入头像"]},{"demoName":"可选中可删除","parent":"div","demoProps":{"icon":"flag","color":"orange","textColor":"white","removable":true},"demoData":{"exist":true,"done":false},"demoBinds":{"value":"exist","selected":"done"},"demoFrameData":{"noUse":0},"demoFrameSlots":[0,0,"<q-btn class=\'q-ml-md\' label=\'重置\' color=\'orange-8\' @click=\'$frame.$children.forEach(c => { const demo = c.$refs.demo; if (!demo) return; demo.exist = true; demo.done = false })\'/>"]}]},"QBadge":{"name":"标记","doc":"https://quasar.dev/vue-components/badge#qbadge-api","category":"basic","demos":[{"demoName":"基本"},{"demoName":"指定样式","outline":true,"rounded":true,"color":"secondary","label":"v1.0.0"},{"demoName":"带图标","color":"orange","demoSlots":["<q-icon name=\'error_outline\' color=\'white\' class=\'q-mr-xs\'/>","5"]},{"demoName":"浮动标注","parent":"QBtn","demoProps":{"floating":true,"rounded":true,"color":"red","label":"99+"},"demoFrameProps":{"round":true,"color":"accent","icon":"email"}},{"demoName":"指示器","parent":"div","demoProps":{"rounded":true,"color":"green"},"demoSlots":{},"demoFrameProps":{"class":"row items-center q-gutter-xs text-green"},"demoFrameSlots":[0,"状态正常"]}],"demoTips":true},"QSeparator":{"name":"分隔线","doc":"https://quasar.dev/vue-components/separator#qseparator-api","category":"basic","frame":1,"parent":"QToolbar","demoFrameProps":{"class":"bg-grey-2"},"demoFrameSlots":["<q-btn stretch flat label=\'A\'/>",0,"<q-btn stretch flat label=\'B\'/>",1,"<q-btn stretch flat label=\'C\'/>"],"demos":[{"demoName":"不贴边","vertical":true,"inset":true},{"demoName":"指定颜色宽度间隔","vertical":true,"color":"orange","size":"5px","spaced":"md"}]},"QSpace":{"name":"填充间距","category":"basic","frame":1,"parent":"QToolbar","demoFrameProps":{"class":"bg-primary text-white","style":"min-height: 40px"},"demoFrameSlots":["<q-btn dense flat label=\'左一\'/>","<q-btn dense flat label=\'左二\'/>",0,"<q-btn dense flat label=\'中\'/>",0,"<q-btn dense flat label=\'右一\'/>","<q-btn dense flat label=\'右二\'/>"]},"QSpinner":{"name":"转圈动画","doc":"https://quasar.dev/vue-components/spinners#qspinner-api","category":"basic","demoProps":{"color":"primary","size":"2em"},"demos":[{},{"size":"3em","thickness":10},{"demoClass":"QSpinnerAudio"},{"demoClass":"QSpinnerBall"},{"demoClass":"QSpinnerBars"},{"demoClass":"QSpinnerBox"},{"demoClass":"QSpinnerClock"},{"demoClass":"QSpinnerComment"},{"demoClass":"QSpinnerCube"},{"demoClass":"QSpinnerDots"},{"demoClass":"QSpinnerFacebook"},{"demoClass":"QSpinnerGears"},{"demoClass":"QSpinnerGrid"},{"demoClass":"QSpinnerHearts"},{"demoClass":"QSpinnerHourglass"},{"demoClass":"QSpinnerInfinity"},{"demoClass":"QSpinnerIos"},{"demoClass":"QSpinnerOrbit"},{"demoClass":"QSpinnerOval"},{"demoClass":"QSpinnerPie"},{"demoClass":"QSpinnerPuff"},{"demoClass":"QSpinnerRadio"},{"demoClass":"QSpinnerRings"},{"demoClass":"QSpinnerTail"}],"demoTips":true},"QLinearProgress":{"name":"条形进度","doc":"https://quasar.dev/vue-components/linear-progress#qlinearprogress-api","category":"basic","demoData":{"progress":0.45},"demoBinds":{"value":"progress"},"demoSlots":{},"demos":[{"demoName":"基本"},{"demoName":"指定样式","stripe":true,"rounded":true,"size":"20px","color":"red","trackColor":"red-4"},{"demoName":"不确定","rounded":true,"color":"warning","indeterminate":true},{"demoName":"带文字标签","stripe":true,"size":"20px","demoSlots":"<div class=\'absolute-center text-caption text-blue\' style=\'mix-blend-mode: difference\'>当前进度 {{ ($self.value * 100).toFixed(1) }}%</div>"}],"demoTips":true},"QCircularProgress":{"name":"圆形进度","doc":"https://quasar.dev/vue-components/circular-progress#qcircularprogress-api","category":"basic","demoData":{"progress":70},"demoBinds":{"value":"progress"},"demoProps":{"size":"40px","color":"primary","trackColor":"grey-3"},"demos":[{"demoName":"基本"},{"demoName":"指定样式","size":"50px","thickness":0.5,"color":"purple-3","trackColor":"purple-1","centerColor":"purple","angle":180,"max":200},{"demoName":"不确定","thickness":1,"color":"warning","indeterminate":true},{"demoName":"显示内容","size":"60px","showValue":true,"fontSize":"12px","class":"text-primary","demoSlots":["<q-icon name=\'volume_up\' size=\'16px\'/>","{{ $self.value }}"]}],"demoTips":true},"QKnob":{"name":"旋钮","doc":"https://quasar.dev/vue-components/knob#qknob-api","category":"basic","demoData":{"curVal":70},"demoBinds":{"value":"curVal"},"demoProps":{"size":"40px","color":"primary","trackColor":"grey-3"},"demos":[{"demoName":"基本"},{"demoName":"指定样式","size":"50px","thickness":0.5,"color":"purple-3","trackColor":"purple-1","centerColor":"purple","angle":180,"max":200},{"demoName":"固定步进量","thickness":1,"color":"warning","instantFeedback":true,"step":10,"showValue":true,"demoSlots":"{{ $self.value }}"},{"demoName":"显示内容","size":"60px","showValue":true,"fontSize":"12px","class":"text-primary","demoSlots":["<q-icon name=\'volume_up\' size=\'16px\'/>","{{ $self.value }}"]}],"demoTips":true},"QFab":{"name":"浮动按钮","doc":"https://quasar.dev/vue-components/floating-action-button#qfab-api","category":"basic","demoData":{"noLabel":true},"demoProps":{"color":"primary","glossy":true,"label":"操作","labelPosition":"left","icon":"keyboard_arrow_right"},"demoBinds":{"hideLabel":"noLabel"},"demoSlots":["<q-fab-action color=\'secondary\' icon=\'phone\' label=\'打电话\' :hide-label=\'$self.noLabel\'/>","<q-fab-action color=\'secondary\' icon=\'email\' label=\'发邮件\' :hide-label=\'$self.noLabel\'/>","<q-fab-action color=\'secondary\' icon=\'chat\' label=\'短消息\' :hide-label=\'$self.noLabel\'/>","<q-toggle v-model=\'$self.noLabel\' label=\'隐藏标签\'/>"]},"QFabAction":{"name":"浮动操作按钮","doc":"https://quasar.dev/vue-components/floating-action-button#qfabaction-api","category":"basic","demoSlots":{},"demos":[{"demoName":"仅图标","color":"primary","icon":"mail"},{"demoName":"带标签","color":"secondary","glossy":true,"icon":"alarm","label":"Alarm"},{"demoName":"方形外部标签","color":"accent","icon":"room","label":"Map","labelPosition":"top","labelClass":"bg-purple-2 text-purple","labelStyle":"top: 10px","padding":"md","square":true,"externalLabel":true}],"demoTips":true},"QBreadcrumbs":{"name":"面包屑","doc":"https://quasar.dev/vue-components/breadcrumbs#qbreadcrumbs-api","category":"basic","demoProps":{"separator":"┊","separatorColor":"grey-5"},"demoSlots":[{"tag":"-QBreadcrumbsEl","template":"<q-breadcrumbs-el icon=\'home\' to=\'/\'/>"},{"tag":"-QBreadcrumbsEl","template":"<q-breadcrumbs-el icon=\'widgets\' label=\'Quasar 组件清单\' to=\'/QuasarComponents\'/>"},{"tag":"-QBreadcrumbsEl","template":"<q-breadcrumbs-el label=\'所有组件\'/>"}]},"QBreadcrumbsEl":{"name":"面包屑小节","doc":"https://quasar.dev/vue-components/breadcrumbs#qbreadcrumbsel-api","category":"basic","demoSlots":{},"demos":[{"demoName":"仅图标","icon":"home","to":"/"},{"demoName":"图标+文字","icon":"widgets","label":"Quasar 组件清单","to":"/QuasarComponents"},{"demoName":"仅文字","label":"基本组件","to":"/QuasarComponents/basic"}],"demoTips":true},"QForm":{"name":"表单","doc":"https://quasar.dev/vue-components/form#qform-api","category":"form","demoData":{"form":{"username":"jackychen","realName":"Jacky Chen","age":30,"sex":1},"sexOptions":[{"label":"男","value":1},{"label":"女","value":2},{"label":"保密","value":0}]},"demoProps":{"class":"q-gutter-sm","style":"width: 300px"},"demoSlots":["<div class=\'row items-center\'><div class=\'col-3 text-right q-pr-sm\'>用户名：</div><q-field dense outlined class=\'col-9\'><template #control>{{ $self.form.username }}</template></q-field></div>","<div class=\'row items-center\'><div class=\'col-3 text-right q-pr-sm\'>姓名：</div><q-input dense clearable class=\'col-9\' v-model=\'$self.form.realName\'/></div>","<div class=\'row items-center\'><div class=\'col-3 text-right q-pr-sm\'>年龄：</div><q-input dense filled class=\'col-9\' type=\'number\' v-model=\'$self.form.age\'/></div>","<div class=\'row items-center\'><div class=\'col-3 text-right q-pr-sm\'>性别：</div><q-btn-toggle :options=\'$self.sexOptions\' v-model=\'$self.form.sex\'/></div>","<div class=\'flex flex-center q-pt-md q-pb-sm q-gutter-md\'><q-btn type=\'submit\' color=\'primary\' label=\'提交\'/><q-btn outline type=\'reset\' color=\'primary\' label=\'重置\'/></div>"],"incomplete":true},"QField":{"name":"字段包装器","doc":"https://quasar.dev/vue-components/field#qfield-api","category":"form","incomplete":true},"QInput":{"name":"输入框","doc":"https://quasar.dev/vue-components/input#qinput-api","category":"form","demoData":{"curVal":""},"demoProps":{"placeholder":"请输入"},"demoBinds":{"value":"curVal"},"incomplete":true},"QSelect":{"name":"选择框","doc":"https://quasar.dev/vue-components/select#qselect-api","category":"form","demoData":{"curVal":"北京"},"demoProps":{"options":["北京","上海","广州","深圳"]},"demoBinds":{"value":"curVal"},"incomplete":true},"QRadio":{"name":"单选框","doc":"https://quasar.dev/vue-components/radio#qradio-api","category":"form","demoData":{"curVal":true},"demoBinds":{"value":"curVal"},"incomplete":true},"QCheckbox":{"name":"复选框","doc":"https://quasar.dev/vue-components/checkbox#qcheckbox-api","category":"form","demoData":{"curVal":true},"demoBinds":{"value":"curVal"},"demoSlots":{},"demos":[{"label":"Primary","color":"primary"},{"label":"Secondary","color":"secondary"},{"label":"Accent","color":"accent"}]},"QToggle":{"name":"开关","doc":"https://quasar.dev/vue-components/toggle#qtoggle-api","category":"form","demoData":{"curVal":true},"demoBinds":{"value":"curVal"}},"QOptionGroup":{"name":"选项组","doc":"https://quasar.dev/vue-components/option-group#qoptiongroup-api","category":"form","demoData":{"curVal":1},"demoProps":{"options":[{"label":"北京","value":1},{"label":"上海","value":2},{"label":"广州","value":3},{"label":"深圳","value":4}],"inline":true},"demoBinds":{"value":"curVal"}},"QBtnToggle":{"name":"切换按钮组","doc":"https://quasar.dev/vue-components/button-toggle#qbtntoggle-api","category":"form","demoData":{"curVal":1},"demoProps":{"options":[{"label":"北京","value":1},{"label":"上海","value":2},{"label":"广州","value":3},{"label":"深圳","value":4}]},"demoBinds":{"value":"curVal"},"demoSlots":{}},"QSlider":{"name":"滑杆","doc":"https://quasar.dev/vue-components/slider#qslider-api","category":"form","demoData":{"curVal":50},"demoProps":{"value":50},"demoBinds":{"value":"curVal"}},"QRange":{"name":"范围滑杆","doc":"https://quasar.dev/vue-components/range#qrange-api","category":"form","demoData":{"curVal":{"min":20,"max":60}},"demoBinds":{"value":"curVal"}},"QFile":{"name":"文件选择框","doc":"https://quasar.dev/vue-components/file-picker#qfile-api","category":"form","demoData":{"curVal":null},"demoBinds":{"value":"curVal"},"incomplete":true},"QColor":{"name":"颜色选择器","doc":"https://quasar.dev/vue-components/color-picker#qcolor-api","category":"tool"},"QDate":{"name":"日期选择器","doc":"https://quasar.dev/vue-components/date#qdate-api","category":"tool","demoData":{"curVal":"2021/05/01"},"demoBinds":{"value":"curVal"},"demoSlots":{}},"QTime":{"name":"时间选择器","doc":"https://quasar.dev/vue-components/time#qtime-api","category":"tool","demoData":{"curVal":"10:12"},"demoBinds":{"value":"curVal"},"demoSlots":{}},"QUploader":{"name":"文件上传器","doc":"https://quasar.dev/vue-components/uploader#quploader-api","category":"tool"},"QCarousel":{"name":"轮播","doc":"https://quasar.dev/vue-components/carousel#qcarousel-api","category":"tool","demoProps":{"height":"150px"},"incomplete":true},"QCarouselControl":{"name":"轮播控制器","doc":"https://quasar.dev/vue-components/carousel#qcarouselcontrol-api","category":"tool","parent":"QCarousel","incomplete":true},"QCarouselSlide":{"name":"轮播滑片","doc":"https://quasar.dev/vue-components/carousel#qcarouselslide-api","category":"tool","parent":"QCarousel","incomplete":true},"QAjaxBar":{"name":"Ajax进度条","doc":"https://quasar.dev/vue-components/ajax-bar#qajaxbar-api","incomplete":true},"QInnerLoading":{"name":"内部加载层","doc":"https://quasar.dev/vue-components/inner-loading#qinnerloading-api","incomplete":true},"QToolbar":{"name":"工具栏","doc":"https://quasar.dev/vue-components/toolbar#qtoolbar-api","category":"container","incomplete":true},"QToolbarTitle":{"name":"工具栏标题","doc":"https://quasar.dev/vue-components/toolbar#qtoolbartitle-api","category":"container","incomplete":true},"QList":{"name":"列表","doc":"https://quasar.dev/vue-components/list-and-list-items#qlist-api","category":"container","incomplete":true},"QItem":{"name":"列表项","doc":"https://quasar.dev/vue-components/list-and-list-items#qitem-api","category":"container","incomplete":true},"QItemSection":{"name":"列表项分段","doc":"https://quasar.dev/vue-components/list-and-list-items#qitemsection-api","category":"container","parent":"QItem","incomplete":true},"QItemLabel":{"name":"列表项标签","doc":"https://quasar.dev/vue-components/list-and-list-items#qitemlabel-api","category":"container","parent":"QItem","incomplete":true},"QSlideItem":{"name":"滑动项","doc":"https://quasar.dev/vue-components/slide-item#qslideitem-api","category":"container","incomplete":true},"QExpansionItem":{"name":"展开项","doc":"https://quasar.dev/vue-components/expansion-item#qexpansionitem-api","category":"container","incomplete":true},"QVirtualScroll":{"name":"虚拟滚动列表","doc":"https://quasar.dev/vue-components/virtual-scroll#qvirtualscroll-api","category":"container","incomplete":true},"QScrollArea":{"name":"滚动区域","doc":"https://quasar.dev/vue-components/scroll-area#qscrollarea-api","category":"container","incomplete":true},"QInfiniteScroll":{"name":"无限滚动","doc":"https://quasar.dev/vue-components/infinite-scroll#qinfinitescroll-api","category":"container","incomplete":true},"QCard":{"name":"卡片","doc":"https://quasar.dev/vue-components/card#qcard-api","category":"container","incomplete":true},"QCardSection":{"name":"卡片分栏","doc":"https://quasar.dev/vue-components/card#qcardsection-api","category":"container","parent":"QCard","incomplete":true},"QCardActions":{"name":"卡片操作","doc":"https://quasar.dev/vue-components/card#qcardactions-api","category":"container","parent":"QCard","incomplete":true},"QDialog":{"name":"对话框","doc":"https://quasar.dev/vue-components/dialog#qdialog-api","category":"container","incomplete":true},"QMenu":{"name":"菜单","doc":"https://quasar.dev/vue-components/menu#qmenu-api","category":"container","incomplete":true},"QPagination":{"name":"页码导航","doc":"https://quasar.dev/vue-components/pagination#qpagination-api","category":"basic","parent":"QBar","demoData":{"currentPage":1},"demoProps":{"maxPages":7},"demoBinds":{"value":"currentPage"},"demoFrameProps":{"class":"bg-grey-2 q-py-lg q-space flex-center","style":"max-width: 500px"},"demos":[{"demoName":"基本"},{"demoName":"定制导航按钮","color":"green","unelevated":true,"boundaryNumbers":false,"boundaryLinks":true,"directionLinks":true},{"demoName":"定制样式","padding":"1px 10px","round":true,"outline":true,"color":"accent","activeColor":"orange","boundaryNumbers":false,"boundaryLinks":true,"directionLinks":true,"iconFirst":"skip_previous","iconLast":"skip_next","iconPrev":"fast_rewind","iconNext":"fast_forward"},{"demoName":"可输入页码","input":true,"inputClass":"text-primary text-weight-bold"}],"demoTips":true},"QVideo":{"name":"嵌入视频","doc":"https://quasar.dev/vue-components/video#qvideo-api","demoProps":{"src":"https://cdn.quasar.dev/img/polina.mp4"}},"QPopupEdit":{"name":"弹框编辑","doc":"https://quasar.dev/vue-components/popup-edit#qpopupedit-api","category":"container","incomplete":true},"QPopupProxy":{"name":"弹出代理","doc":"https://quasar.dev/vue-components/popup-proxy#qpopupproxy-api","incomplete":true},"QResponsive":{"name":"宽高比限制","doc":"https://quasar.dev/vue-components/responsive#qresponsive-api","incomplete":true},"QSkeleton":{"name":"骨架占位","doc":"https://quasar.dev/vue-components/skeleton#qskeleton-api","category":"basic","incomplete":true},"QSlideTransition":{"name":"滑动渐变","doc":"https://quasar.dev/vue-components/slide-transition#qslidetransition-api","incomplete":true},"QIntersection":{"name":"视区交叉","doc":"https://quasar.dev/vue-components/intersection#qintersection-api","incomplete":true},"QPullToRefresh":{"name":"拉动刷新","doc":"https://quasar.dev/vue-components/pull-to-refresh#qpulltorefresh-api","incomplete":true},"QSplitter":{"name":"分隔条","doc":"https://quasar.dev/vue-components/splitter#qsplitter-api","category":"container","frame":50,"demoData":{"position":50},"demoProps":{"style":"height: 50px"},"demoBinds":{"value":"position"},"demoSlots":{"before":"<div class=\'text-center\'>左区</div>","after":"<div class=\'text-center\'>右区</div>"}},"QMarkupTable":{"name":"简单表格","doc":"https://quasar.dev/vue-components/markup-table#qmarkuptable-api","category":"basic","incomplete":true},"QTable":{"name":"表格","doc":"https://quasar.dev/vue-components/table#qtable-api","category":"basic","incomplete":true},"QTr":{"name":"表格行","doc":"https://quasar.dev/vue-components/table#qtr-api","category":"basic","isPart":"QTable / QMarkupTable","parent":"QTable","incomplete":true},"QTh":{"name":"表格标题格","doc":"https://quasar.dev/vue-components/table#qth-api","category":"basic","isPart":"QTr","parent":"QTable","incomplete":true},"QTd":{"name":"表格内容格","doc":"https://quasar.dev/vue-components/table#qtd-api","category":"basic","isPart":"QTr","parent":"QTable","incomplete":true},"QTabs":{"name":"切换标签组","doc":"https://quasar.dev/vue-components/tabs#qtabs-api","category":"container","incomplete":true},"QTab":{"name":"切换标签","doc":"https://quasar.dev/vue-components/tabs#qtab-api","category":"container","isPart":"QTabs","parent":"QTabs","incomplete":true},"QRouteTab":{"name":"路由标签","doc":"https://quasar.dev/vue-components/tabs#qroutetab-api","category":"container","isPart":"QTabs","parent":"QTabs","incomplete":true},"QTabPanels":{"name":"切换面板组","doc":"https://quasar.dev/vue-components/tab-panels#qtabpanels-api","category":"container","incomplete":true},"QTabPanel":{"name":"切换面板","doc":"https://quasar.dev/vue-components/tab-panels#qtabpanel-api","category":"container","parent":"QTabPanels","incomplete":true},"QStepper":{"name":"分步容器","doc":"https://quasar.dev/vue-components/stepper#qstepper-api","category":"container","incomplete":true},"QStep":{"name":"步骤项","doc":"https://quasar.dev/vue-components/stepper#qstep-api","category":"container","isPart":"QStepper","parent":"QStepper","incomplete":true},"QStepperNavigation":{"name":"步骤导航","doc":"https://quasar.dev/vue-components/stepper#qsteppernavigation-api","category":"container","parent":"QStepper","incomplete":true},"QParallax":{"name":"视差容器","doc":"https://quasar.dev/vue-components/parallax#qparallax-api","category":"container","demoProps":{"src":"https://cdn.quasar.dev/img/parallax2.jpg","style":"height: 150px"},"demoSlots":"<h3 class=\'text-white\'>视差容器</h3>"},"QTimeline":{"name":"时间线","doc":"https://quasar.dev/vue-components/timeline#qtimeline-api","category":"tool","incomplete":true},"QTimelineEntry":{"name":"时间线节点","doc":"https://quasar.dev/vue-components/timeline#qtimelineentry-api","category":"tool","isPart":"QTimeline","parent":"QTimeline","incomplete":true},"QEditor":{"name":"富文本编辑器","doc":"https://quasar.dev/vue-components/editor#qeditor-api","category":"tool"},"QTree":{"name":"分层树","doc":"https://quasar.dev/vue-components/tree#qtree-api","category":"basic","demoProps":{"nodes":[{"label":"Relax Hotel","children":[{"label":"Food","icon":"restaurant_menu"},{"label":"Room service","icon":"room_service"},{"label":"Room view","icon":"photo"}]}],"nodeKey":"label"},"incomplete":true},"QResizeObserver":{"name":"缩放侦听器","doc":"https://quasar.dev/vue-components/resize-observer#qresizeobserver-api","incomplete":true},"QScrollObserver":{"name":"滚动侦听器","doc":"https://quasar.dev/vue-components/scroll-observer#qscrollobserver-api","incomplete":true},"QNoSsr":{"name":"非SSR内容","doc":"https://quasar.dev/vue-components/no-ssr#qnossr-api","incomplete":true},"QRibbon":{"name":"丝带装饰","doc":"https://quasarframework.github.io/quasar-ui-qribbon/docs#QRibbon-API","incomplete":true},"QMarkdown":{"name":"Markdown文档","doc":"https://quasarframework.github.io/quasar-ui-qmarkdown/docs#QMarkdown-API","category":"tool","demoProps":{"noHeadingAnchorLinks":true,"src":"# 标题\\n正文\\n- 列表项1\\n- 列表项2\\n  - 子列表项\\n::: info\\n提示文字\\n> 引用内容\\n:::\\n```js\\nconst some = { js: \'code\' }\\n```"},"demoSlots":{}}}')}}]);