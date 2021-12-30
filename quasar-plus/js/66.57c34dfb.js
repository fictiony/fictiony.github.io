(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{4034:function(e){e.exports=JSON.parse('{"type":"component","meta":{"docsUrl":"https://v1.quasar.dev/vue-components/floating-action-button"},"behavior":{"$listeners":{"desc":"正在传播的所有原生事件（不需要“.native”修饰符）"}},"props":{"type":{"type":"String","desc":"定义按钮HTML DOM类型","default":"a","values":["a","submit","button","reset"],"category":"general"},"outline":{"type":"Boolean","desc":"为浮动操作按钮使用“轮廓线”设计","category":"style"},"push":{"type":"Boolean","desc":"为浮动操作按钮使用“推”设计","category":"style"},"flat":{"type":"Boolean","desc":"为浮动操作按钮使用“扁平”设计","category":"style"},"unelevated":{"type":"Boolean","desc":"移除阴影","category":"style","addedIn":"v1.9.0"},"padding":{"type":"String","desc":"应用自定义填充（垂直[水平]）；以CSS单位表示的尺寸，包括单位名称或标准尺寸名称（无| xs | sm | md | lg | xl）；设置时也会删除最小宽度和高度","examples":["16px","10px 5px","2rem","xs","md lg"],"category":"style","addedIn":"v1.11.0"},"color":{"type":"String","desc":"组件的来自Quasar调色板的颜色名称","examples":["primary","teal-10"],"category":"style"},"text-color":{"type":"String","desc":"覆盖文本颜色（如果需要）；来自Quasar调色板的颜色名称","examples":["primary","teal-10"],"category":"style"},"glossy":{"type":"Boolean","desc":"在按钮上应用光泽效果","category":"style"},"external-label":{"type":"Boolean","desc":"将标签作为外部内容显示在浮动操作按钮之外","category":"style|content","addedIn":"v1.9.0"},"label":{"type":["String","Number"],"desc":"展开浮动操作按钮时将显示的标签","default":"","examples":["Button Label"],"category":"content","addedIn":"v1.9.0"},"label-position":{"type":"String","desc":"图标周围标签的位置","values":["top","right","bottom","left"],"category":"style|content","addedIn":"v1.9.0"},"hide-label":{"type":"Boolean","desc":"隐藏标签；用于切换标签可见性的动画","category":"style|content","addedIn":"v1.9.0"},"label-class":{"type":["Array","String","Object"],"desc":"作为标签容器属性的类定义","examples":["my-special-class",":input-class=\\"{ \'my-special-class\': <condition> }\\""],"category":"style","addedIn":"v1.9.0"},"label-style":{"type":["Array","String","Object"],"desc":"作为标签容器属性的样式定义","examples":["background-color: #ff0000",":input-style=\\"{ backgroundColor: \'#ff0000\' }\\""],"category":"style","addedIn":"v1.9.0"},"square":{"type":"Boolean","desc":"将矩形外观应用于浮动操作按钮","category":"style","addedIn":"v1.9.0"},"disable":{"type":"Boolean","desc":"将组件置于禁用模式","category":"state"},"tabindex":{"type":["Number","String"],"desc":"Tabindex HTML属性值","examples":["0","100"],"category":"general","addedIn":"v1.13.0"},"value":{"type":"Boolean","desc":"控制浮动操作按钮操作的状态（显示/隐藏）；与v-model指令配合使用效果最好，否则将用于监听“input”事件","category":"model"},"icon":{"type":"String","desc":"遵循Quasar惯例的图标名称；请确保已安装图标库，除非使用“img:”前缀","examples":["map","ion-add","img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg","img:statics/path/to/some_image.png"],"category":"content"},"active-icon":{"type":"String","desc":"遵循Quasar惯例的图标名称；请确保已安装图标库，除非使用“img:”前缀","examples":["map","ion-add","img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg","img:statics/path/to/some_image.png"],"category":"content"},"hide-icon":{"type":"Boolean","desc":"隐藏图标（不使用任何图标）","category":"style|content","addedIn":"v1.9.14"},"direction":{"type":"String","desc":"展开浮动操作按钮操作的方向","default":"right","values":["up","right","down","left"],"examples":["down"],"category":"behavior"},"vertical-actions-align":{"type":"String","desc":"浮动操作按钮的一侧，浮动操作按钮的操作将展开的位置（仅当方向为“向上”或“向下”时）","default":"center","values":["left","center","right"],"category":"style|content","addedIn":"v1.9.0"},"persistent":{"type":"Boolean","desc":"默认情况下，当用户导航到另一个路由并且此属性禁用此行为时，浮动操作按钮的操作是隐藏的","category":"behavior"}},"slots":{"default":{"desc":"这就是QFabActions可能进入的位置"},"tooltip":{"desc":"为QTooltip专门设计的插槽"}},"events":{"input":{"desc":"显示/隐藏浮动操作按钮的操作时发出；由v-model指令捕获","params":{"value":{"type":"Boolean","desc":"新状态（显示/隐藏）"}}},"show":{"desc":"在组件触发show()后发出","params":{"evt":{"type":"Object","desc":"JS事件对象","required":true}}},"before-show":{"desc":"在组件触发show()但在完成之前发出","params":{"evt":{"type":"Object","desc":"JS事件对象","required":true}}},"hide":{"desc":"在组件触发hide()后发出","params":{"evt":{"type":"Object","desc":"JS事件对象","required":true}}},"before-hide":{"desc":"在组件触发hide()但在完成之前发出","params":{"evt":{"type":"Object","desc":"JS事件对象","required":true}}}},"methods":{"show":{"desc":"展开浮动操作按钮的操作列表","params":{"evt":{"type":"Object","required":false,"desc":"JS事件对象"}}},"hide":{"desc":"折叠浮动操作按钮的操作列表","params":{"evt":{"type":"Object","required":false,"desc":"JS事件对象"}}},"toggle":{"params":{"evt":{"type":"Object","required":false,"desc":"JS事件对象"}},"desc":"触发组件在显示/隐藏之间切换"}}}')}}]);