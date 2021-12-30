(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[87],{"4c71":function(e){e.exports=JSON.parse('{"type":"component","meta":{"docsUrl":"https://v1.quasar.dev/vue-components/menu"},"behavior":{"$listeners":{"desc":"正在传播的所有原生事件（不需要“.native”修饰符）"}},"props":{"target":{"type":["Boolean","String","Element"],"desc":"配置目标元素以触发组件切换；\'“true”表示启用父DOM元素，“false”表示禁用将事件附加到任何DOM元素；通过使用字符串（CSS选择器）或DOM元素，它将事件附加到指定的DOM元素（如果存在）","default":true,"values":["(Boolean) true","(Boolean) false","(CSS selector)","(DOM Element)"],"examples":[":target=\\"false\\"",":target=\\"$refs.target\\"","target=\\".my-parent\\"","target=\\"#target-id\\""],"category":"behavior"},"no-parent-event":{"type":"Boolean","desc":"跳过将事件附加到目标DOM元素（触发元素显示）","category":"behavior"},"context-menu":{"type":"Boolean","desc":"允许组件的行为类似于上下文菜单，通过鼠标右键单击（或在移动设备上长按）打开","category":"behavior"},"content-class":{"type":["Array","String","Object"],"desc":"作为内容属性的类的定义","examples":["my-special-class",":content-class=\\"{ \'my-special-class\': <condition> }\\""],"category":"style"},"content-style":{"type":["Array","String","Object"],"desc":"作为内容属性的样式定义","examples":["background-color: #ff0000",":content-style=\\"{ color: \'#ff0000\' }\\""],"category":"style"},"value":{"type":"Boolean","desc":"定义显示/隐藏状态的组件模型；使用此属性（以及“input”事件的侦听器）或使用v-model指令","category":"model"},"dark":{"type":"Boolean","desc":"通知组件背景为深色","category":"style","addedIn":"v1.3.0"},"fit":{"type":"Boolean","desc":"允许菜单至少匹配其目标的全部宽度","category":"position"},"cover":{"type":"Boolean","desc":"允许菜单覆盖其目标。使用时，“self”和“fit”属性不再有效","category":"position"},"anchor":{"type":"String","desc":"设置菜单相对于其目标的起始位置或定位点的两个值","values":["top left","top middle","top right","top start","top end","center left","center middle","center right","center start","center end","bottom left","bottom middle","bottom right","bottom start","bottom end"],"examples":["top left","bottom right"],"category":"position"},"self":{"type":"String","desc":"两个值设置菜单自身相对于目标的位置","values":["top left","top middle","top right","top start","top end","center left","center middle","center right","center start","center end","bottom left","bottom middle","bottom right","bottom start","bottom end"],"examples":["top left","bottom right"],"category":"position"},"offset":{"type":"Array","desc":"以像素为单位水平和垂直偏移菜单的两个数字的数组","examples":["[8, 8]","[5, 10]"],"category":"position"},"scroll-target":{"type":["Element","String"],"desc":"CSS选择器或DOM元素用作自定义滚动容器，而不是自动检测到的滚动容器","examples":[":scroll-target=\\"$refs.scrollTarget\\"","scroll-target=\\".scroll-target-class\\"","scroll-target=\\"#scroll-target-id\\"","scroll-target=\\"body\\""],"category":"behavior","addedIn":"v1.8.0"},"touch-position":{"type":"Boolean","desc":"当单击或触摸菜单的目标时，允许通过鼠标位置设置目标位置","category":"behavior"},"persistent":{"type":"Boolean","desc":"允许在菜单外单击/轻触或按ESC键时不关闭菜单","category":"behavior"},"no-route-dismiss":{"type":"Boolean","desc":"更改路由应用程序不会关闭弹出窗口；如果还设置了“persistent”属性，则无需设置它","category":"behavior","addedIn":"v1.13.0"},"auto-close":{"type":"Boolean","desc":"允许在菜单中单击/轻触以关闭它；有用，而不是将事件附加到应在单击/点击时关闭菜单的每个菜单项","category":"behavior"},"separate-close-popup":{"type":"Boolean","desc":"与父菜单分离，将其标记为v-close-popup的单独关闭点（没有此项，链接菜单将全部关闭）","category":"behavior","addedIn":"v1.1.0"},"square":{"type":"Boolean","desc":"强制内容具有方形边框","category":"style"},"no-refocus":{"type":"Boolean","desc":"（可访问性）当菜单被隐藏时，不要重新关注以前有焦点的DOM元素","category":"behavior"},"no-focus":{"type":"Boolean","desc":"（辅助功能）显示菜单时，不要将焦点切换到菜单上","category":"behavior"},"max-height":{"type":"String","desc":"菜单的最大高度；以CSS单位表示的大小，包括单位名称","examples":["16px","2rem"],"category":"style"},"max-width":{"type":"String","desc":"菜单的最大宽度；以CSS单位表示的大小，包括单位名称","examples":["16px","2rem"],"category":"style"},"transition-show":{"type":"String","desc":"Quasar的嵌入式过渡动画之一","examples":["fade","slide-down"],"category":"behavior","default":"fade"},"transition-hide":{"type":"String","desc":"Quasar的嵌入式过渡动画之一","examples":["fade","slide-down"],"category":"behavior","default":"fade"}},"slots":{"default":{"desc":"组件的devland unslotted内容中的默认插槽"}},"events":{"input":{"desc":"显示/隐藏状态更改时发出；也用于v-model","params":{"value":{"type":"Boolean","desc":"新状态（显示/隐藏）"}}},"show":{"desc":"在组件触发show()后发出","params":{"evt":{"type":"Object","desc":"JS事件对象","required":true}}},"before-show":{"desc":"在组件触发show()但在完成之前发出","params":{"evt":{"type":"Object","desc":"JS事件对象","required":true}}},"hide":{"desc":"在组件触发hide()后发出","params":{"evt":{"type":"Object","desc":"JS事件对象","required":true}}},"before-hide":{"desc":"在组件触发hide()但在完成之前发出","params":{"evt":{"type":"Object","desc":"JS事件对象","required":true}}},"escape-key":{"desc":"按ESC键时发出；如果菜单是“持久(persistent)的”，则不会发出"}},"methods":{"show":{"desc":"触发要显示的组件","params":{"evt":{"type":"Object","required":false,"desc":"JS事件对象"}}},"hide":{"desc":"触发要隐藏的组件","params":{"evt":{"type":"Object","required":false,"desc":"JS事件对象"}}},"toggle":{"params":{"evt":{"type":"Object","required":false,"desc":"JS事件对象"}},"desc":"触发组件在显示/隐藏之间切换"},"updatePosition":{"desc":"有一些自定义的场景，Quasar无法没有明显的性能缺陷地自动重新定位菜单，因此最佳解决方案是在需要时调用此方法"},"focus":{"desc":"聚焦菜单；如果内容具有自动聚焦属性，它将直接对其进行聚焦"}}}')}}]);