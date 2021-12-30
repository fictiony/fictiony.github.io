(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[143],{"6eef":function(e){e.exports=JSON.parse('{"type":"component","meta":{"docsUrl":"https://v1.quasar.dev/vue-components/tab-panels"},"behavior":{"$listeners":{"desc":"正在传播的所有原生事件（不需要“.native”修饰符）"}},"props":{"value":{"type":"Any","desc":"定义当前面板名称的组件模型；如果使用数字，则它不定义面板的索引，而是定义面板的名称，也可以是整数；使用此属性（以及“input”事件的侦听器）或使用v-model指令。","examples":["v-model=\\"panelName\\""],"category":"model"},"keep-alive":{"type":"Boolean","desc":"相当于在内容上使用Vue的原生<keep alive>组件","category":"behavior"},"keep-alive-include":{"type":["String","Array","RegExp"],"desc":"相当于为<keep alive>使用Vue的原生include属性；值必须是有效的Vue组件名称","examples":["a,b","/a|b/","[\'a\', \'b\']"],"category":"behavior","addedIn":"v1.15.0"},"keep-alive-exclude":{"type":["String","Array","RegExp"],"desc":"相当于对<keep alive>使用Vue的原生exclude属性；值必须是有效的Vue组件名称","examples":["a,b","/a|b/","[\'a\', \'b\']"],"category":"behavior","addedIn":"v1.15.0"},"keep-alive-max":{"type":"Number","desc":"相当于对<keep alive>使用Vue的原生max属性","examples":["2"],"category":"behavior","addedIn":"v1.15.0"},"animated":{"type":"Boolean","desc":"启用面板之间的转换（另请参阅“transition-prev”和“transition-next”属性）","category":"behavior"},"infinite":{"type":"Boolean","desc":"使组件显示为无限大（当到达最后一个面板时，下一个将成为第一个）","category":"behavior"},"swipeable":{"type":"Boolean","desc":"启用swipe事件（可能会干扰内容的触摸/鼠标事件）","category":"behavior"},"vertical":{"type":"Boolean","desc":"默认的转换和滑动动作将在垂直轴上","category":"behavior"},"transition-prev":{"type":"String","desc":"Quasar的一个嵌入式过渡动画（只有设置了“animated”属性才有效）","examples":["fade","slide-down"],"category":"behavior","default":"slide-right/slide-down"},"transition-next":{"type":"String","desc":"Quasar的一个嵌入式过渡动画（只有设置了“animated”属性才有效）","examples":["fade","slide-down"],"category":"behavior","default":"slide-left/slide-up"}},"slots":{"default":{"desc":"组件的devland unslotted内容中的默认插槽"}},"events":{"input":{"desc":"组件更改模型时发出；如果模型在外部更改，则不会触发此事件；也用于v-model","params":{"value":{"type":["String","Number"],"desc":"新建当前面板名称","examples":["dashboard"]}}},"before-transition":{"desc":"在转换到新面板之前发出","params":{"newVal":{"type":["String","Number"],"desc":"转换到的面板名称","examples":["dashboard"]},"oldVal":{"type":["String","Number"],"desc":"发生转换的面板名称","examples":["dashboard"]}}},"transition":{"desc":"在组件转换到新面板后发出","params":{"newVal":{"type":["String","Number"],"desc":"转换到的面板名称","examples":["dashboard"]},"oldVal":{"type":["String","Number"],"desc":"发生转换的面板名称","examples":["dashboard"]}}}},"methods":{"next":{"desc":"转到下一个面板"},"previous":{"desc":"转到上一个面板"},"goTo":{"desc":"转到特定面板","params":{"panelName":{"type":["String","Number"],"desc":"面板名称，可以是字符串或数字；数字不是指面板索引，而是指其名称，名称可以是整数","required":true,"examples":["dashboard"]}}}}}')}}]);