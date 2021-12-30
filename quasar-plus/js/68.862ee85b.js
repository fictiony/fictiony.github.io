(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{9182:function(e){e.exports=JSON.parse('{"type":"component","meta":{"docsUrl":"https://v1.quasar.dev/vue-components/field"},"props":{"error":{"type":"Boolean","desc":"字段是否有验证错误？","category":"behavior"},"error-message":{"type":"String","desc":"验证错误消息（仅当“error”设置为“true”时显示）","examples":["Username must have at least 5 characters"],"category":"content"},"no-error-icon":{"type":"Boolean","desc":"出现错误时隐藏错误图标","category":"content"},"rules":{"type":"Array","desc":"函数/字符串数组；如果是字符串，则它必须是嵌入式验证规则的其中一个名称","examples":[":rules=\\"[ val => val.length <= 3 || \'Please use maximum 3 characters\' ]\\"",":rules=\\"[ \'fulltime\' ]\\""],"category":"behavior"},"reactive-rules":{"type":"Boolean","desc":"默认情况下，在模型更改之前，规则的更改不会触发新的验证；如果设置为true，则规则中的更改将触发验证；有一个性能损失，所以只有当你真的需要它时使用它","category":"behavior","addedIn":"v1.11.0"},"lazy-rules":{"type":["Boolean","String"],"desc":"如果设置为布尔真，则只有在字段第一次失去焦点后，它才会根据“rules”检查验证状态；如果设置为“ondemand”，则仅当手动调用组件的validate()方法或当包装器QForm提交自身时才会触发","values":["(Boolean) true","(Boolean) false","ondemand"],"category":"behavior"},"label":{"type":"String","desc":"一种文本标签，一旦字段获得焦点，它将“浮动”到输入字段上方","examples":["Username"],"category":"content"},"stack-label":{"type":"Boolean","desc":"标签将始终显示在字段上方，而不考虑字段内容（如果有）","category":"content"},"hint":{"type":"String","desc":"辅助（提示）文本，放在包装的表单组件下面","examples":["Fill in between 3 and 12 characters"],"category":"content"},"hide-hint":{"type":"Boolean","desc":"当字段没有焦点时隐藏辅助（提示）文本","category":"content"},"prefix":{"type":"String","desc":"前缀","examples":["$"],"category":"content"},"suffix":{"type":"String","desc":"后缀","examples":["@gmail.com"],"category":"content"},"label-color":{"type":"String","desc":"来自Quasar调色板的标签的颜色名称；覆盖“color”属性；与“color”属性的区别在于，标签将始终具有此颜色，即使字段未聚焦","examples":["primary","teal-10"],"category":"style","addedIn":"v1.7.0"},"color":{"type":"String","desc":"组件的来自Quasar调色板的颜色名称","examples":["primary","teal-10"],"category":"style"},"bg-color":{"type":"String","desc":"组件的来自Quasar调色板的颜色名称","examples":["primary","teal-10"],"category":"style"},"dark":{"type":"Boolean","desc":"通知组件背景为深色","category":"style"},"loading":{"type":"Boolean","desc":"通过显示旋转器向用户发出进程正在进行的信号；可以使用“loading”槽自定义旋转器。","category":"behavior|content"},"clearable":{"type":"Boolean","desc":"设置值（非undefined或null）时附加可清除图标；单击时，模型将变为空","category":"behavior|content"},"clear-icon":{"type":"String","desc":"与“clearable”属性一起使用时用于清除按钮的自定义图标","examples":["close"],"category":"content"},"filled":{"type":"Boolean","desc":"对字段使用“填充”设计","category":"style"},"outlined":{"type":"Boolean","desc":"对字段使用“轮廓线”设计","category":"style"},"borderless":{"type":"Boolean","desc":"对字段采用“无边界”设计","category":"style"},"standout":{"type":["Boolean","String"],"desc":"对字段采用“突出”设计；指定聚焦时要应用的类（覆盖默认类）","examples":["standout","standout=\\"bg-primary text-white\\""],"category":"style"},"label-slot":{"type":"Boolean","desc":"启用标签槽；如果未设置“label”属性，则需要将其设置为强制使用“label”插槽","category":"content","addedIn":"v1.12.9"},"bottom-slots":{"type":"Boolean","desc":"启用底部插槽（\'error\', \'hint\', \'counter\'）","category":"content"},"hide-bottom-space":{"type":"Boolean","desc":"不使用hint/error/counter时，不要再为其保留空间；因此，它也会禁用这些对象的动画；它还允许hint/error区域根据其内容进行垂直拉伸","category":"style"},"counter":{"type":"Boolean","desc":"在右下角显示自动计数器","category":"content"},"rounded":{"type":"Boolean","desc":"为组件的方形应用较小的标准border-radius","category":"style"},"square":{"type":"Boolean","desc":"去除border-radius，使边界为正方形；覆盖“rounded”属性","category":"style"},"dense":{"type":"Boolean","desc":"密集模式；占用更少的空间","category":"style"},"item-aligned":{"type":"Boolean","desc":"将内部内容对齐方式与QItem匹配","category":"style"},"disable":{"type":"Boolean","desc":"将组件置于禁用模式","category":"state"},"readonly":{"type":"Boolean","desc":"将组件置于只读模式","category":"state"},"autofocus":{"type":"Boolean","desc":"初始组件渲染时聚焦字段","category":"behavior"},"for":{"type":"String","desc":"用于指定控件的“id”以及包装它的标签的“for”属性；如果没有指定\'name\'属性，那么它也将用于此属性","examples":["myFieldsId"],"category":"behavior","addedIn":"v1.4.2"},"name":{"type":"String","desc":"用于指定控件的名称；处理表单时有用；如果未指定，则采用“for”属性的值（如果存在）","examples":["car_id"],"category":"behavior","addedIn":"v1.9.0"},"maxlength":{"type":["String","Number"],"desc":"指定模型的最大长度","examples":["12"],"category":"model"}},"slots":{"default":{"desc":"字段主要内容"},"prepend":{"desc":"前置内部字段；建议：QIcon、QBtn"},"append":{"desc":"后置内部字段；建议：QIcon、QBtn"},"before":{"desc":"前置外部字段；建议：QIcon、QBtn"},"after":{"desc":"后置外部字段；建议：QIcon、QBtn"},"label":{"desc":"标签槽；仅当设置了“label-slot”属性或设置了“label”属性时使用；使用时，“label”属性中的文本将被忽略","addedIn":"v1.12.9"},"error":{"desc":"错误插槽；仅在使用“bottom-slots”属性时启用；建议：<div>"},"hint":{"desc":"提示文本槽；仅在使用“bottom-slots”属性时启用；建议：<div>"},"counter":{"desc":"计数器文本槽；仅在使用“bottom-slots”属性时启用；建议：<div>"},"loading":{"desc":"当组件处于加载模式时重写默认旋转器；与“loading”属性一起使用"}},"scopedSlots":{"control":{"desc":"控制槽；建议QSlider，QRange，QKnob...","scope":{"id":{"type":"String","desc":"字段标签的“for”属性中使用的元素id。可用于将控件链接到标签","examples":["qf_363270c0-7a83-62b1-8dcf-6dfd64ee38fa"]},"field":{"type":"Object","desc":"字段的DOM元素"},"editable":{"type":"Boolean","desc":"字段可编辑"},"focused":{"type":"Boolean","desc":"字段有焦点"},"floatingLabel":{"type":"Boolean","desc":"字段的标签是浮动的"},"value":{"type":"Any","desc":"字段的值","examples":[0.241,"Text"]},"emitValue":{"type":"Function","desc":"在字段上下文中发出@input事件的函数","params":{"value":{"type":"Any","desc":"要发出的值","examples":[0,"Changed text"]}},"returns":null}}}},"events":{"clear":{"desc":"使用“clearable”属性时，单击清除图标时会发出此事件","addedIn":"v1.1.5","params":{"value":{"type":["Any"],"desc":"清除之前的值"}}},"input":{"desc":"当模型更改时发出，仅当与“clearable”或“control”作用域插槽一起使用时。","params":{"value":{"type":"Any","desc":"新模型值","required":true}}},"focus":{"desc":"组件被聚焦时发出","params":{"evt":{"type":"Object","desc":"JS事件对象"}}},"blur":{"desc":"当组件失去焦点时发射","params":{"evt":{"type":"Object","desc":"JS事件对象"}}}},"methods":{"resetValidation":{"desc":"重置验证状态"},"validate":{"desc":"触发验证","params":{"value":{"type":"Any","desc":"要验证的可选值"}},"returns":{"type":["Boolean","Promise<boolean>"],"desc":"如果没有异步规则，则为True/false，否则为带有结果的Promise（True->验证成功，false->检测到无效模型）","examples":["true","validate().then(outcome => { ... })"]}},"focus":{"desc":"聚焦字段"},"blur":{"desc":"模糊字段（失去焦点）"}}}')}}]);