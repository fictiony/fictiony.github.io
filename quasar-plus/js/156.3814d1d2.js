(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[156],{fec9:function(e){e.exports=JSON.parse('{"type":"component","meta":{"docsUrl":"https://v1.quasar.dev/vue-components/tree"},"props":{"nodes":{"type":"Array","desc":"指定树结构的节点数组","required":true,"examples":["[ {...}, {...} ]"],"category":"content"},"node-key":{"type":"String","desc":"包含唯一节点id的每个节点对象的属性名","required":true,"examples":["key","id"],"category":"content"},"label-key":{"type":"String","desc":"包含节点标签的每个节点对象的属性名","default":"label","examples":["name","description"],"category":"content"},"children-key":{"type":"String","desc":"包含节点子对象列表的每个节点对象的属性名","default":"children","examples":["roles","relatives"],"category":"content","addedIn":"v1.11.3"},"no-connectors":{"type":"Boolean","desc":"不显示节点之间的连接线","category":"style","addedIn":"v1.5.10"},"color":{"type":"String","desc":"组件的来自Quasar调色板的颜色名称","examples":["primary","teal-10"],"category":"style"},"control-color":{"type":"String","desc":"控件（如复选框）的来自Quasar调色板的颜色名称","examples":["primary","teal-10"],"category":"style"},"text-color":{"type":"String","desc":"覆盖文本颜色（如果需要）；来自Quasar调色板的颜色名称","examples":["primary","teal-10"],"category":"style"},"selected-color":{"type":"String","desc":"选定节点的颜色名称（来自Quasar调色板）","examples":["primary","teal-10"],"category":"style"},"dark":{"type":"Boolean","desc":"通知组件背景为深色","category":"style"},"icon":{"type":"String","desc":"遵循Quasar惯例的图标名称；请确保已安装图标库，除非使用“img:”前缀","examples":["map","ion-add","img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg","img:statics/path/to/some_image.png"],"category":"content"},"tick-strategy":{"type":"String","desc":"用于选择节点的策略类型","default":"none","values":["none","strict","leaf","leaf-filtered"],"category":"behavior"},"ticked":{"type":"Array","desc":"勾选的节点的键","sync":true,"examples":[":ticked.sync=\\"tickedKeys\\""],"category":"state"},"expanded":{"type":"Array","desc":"展开节点的键","sync":true,"examples":[":expanded.sync=\\"expandedKeys\\""],"category":"state"},"selected":{"type":"Any","desc":"当前所选节点的键","sync":true,"examples":[":selected.sync=\\"selectedKey\\""],"category":"state"},"default-expand-all":{"type":"Boolean","desc":"允许树在第一次渲染时展开其所有分支","category":"behavior"},"accordion":{"type":"Boolean","desc":"允许将树设置为手风琴模式","category":"behavior"},"filter":{"type":"String","desc":"用于筛选节点的文本值","examples":[":filter=\\"searchText\\""],"category":"filter"},"filter-method":{"type":"Function","desc":"用于过滤树节点的函数；为了获得最佳性能，请从您的范围中引用它，而不要内联定义它","default":"(see source code)","params":{"node":{"type":"Object","desc":"当前正在筛选的节点"},"filter":{"type":"String","desc":"筛选要匹配的文本"}},"returns":{"type":"Boolean","desc":"是否匹配"},"category":"filter"},"duration":{"type":"Number","desc":"切换动画持续时间（毫秒）","default":300,"examples":[":duration=\\"500\\""],"category":"style"},"no-nodes-label":{"type":"String","desc":"在没有可用节点时覆盖默认的此类标签","examples":["No nodes to show!"],"category":"content"},"no-results-label":{"type":"String","desc":"当由于筛选而没有可用节点时，重写默认的此类标签","examples":["No results"],"category":"content"}},"scopedSlots":{"default-header":{"desc":"用于定义节点头的插槽","scope":{"expanded":{"type":"Boolean","desc":"节点是否展开？可以直接分配新的布尔值，从而改变展开状态","reactive":true},"ticked":{"type":"Boolean","desc":"是否勾选了节点？可以直接分配新的布尔值，改变勾选状态","reactive":true},"tree":{"type":"Object","desc":"QTree实例"},"node":{"type":"Object","desc":"节点对象"},"key":{"type":"Any","desc":"节点的键"},"color":{"type":"String","desc":"QTree实例“color”提供的属性值","examples":["primary"]},"dark":{"type":"Boolean","desc":"QTree实例“dark”提供的属性值"}}},"header-[name]":{"desc":"用于描述节点头的头部模板插槽；由“header”属性设置为“[name]”的节点使用，其中“[name]”可以是任何字符串","scope":{"expanded":{"type":"Boolean","desc":"节点是否展开？可以直接分配新的布尔值，从而改变展开状态","reactive":true},"ticked":{"type":"Boolean","desc":"是否勾选了节点？可以直接分配新的布尔值，改变勾选状态","reactive":true},"tree":{"type":"Object","desc":"QTree实例"},"node":{"type":"Object","desc":"节点对象"},"key":{"type":"Any","desc":"节点的键"},"color":{"type":"String","desc":"QTree实例“color”提供的属性值","examples":["primary"]},"dark":{"type":"Boolean","desc":"QTree实例“dark”提供的属性值"}}},"default-body":{"desc":"用于定义节点主体的插槽","scope":{"expanded":{"type":"Boolean","desc":"节点是否展开？可以直接分配新的布尔值，从而改变展开状态","reactive":true},"ticked":{"type":"Boolean","desc":"是否勾选了节点？可以直接分配新的布尔值，改变勾选状态","reactive":true},"tree":{"type":"Object","desc":"QTree实例"},"node":{"type":"Object","desc":"节点对象"},"key":{"type":"Any","desc":"节点的密钥"},"color":{"type":"String","desc":"QTree实例“color”提供的属性值","examples":["primary"]},"dark":{"type":"Boolean","desc":"QTree实例“color”提供的属性值"}}},"body-[name]":{"desc":"用于描述节点体的主体模板插槽；由“body”属性设置为“[name]”的节点使用，其中“[name]”可以是任何字符串","scope":{"expanded":{"type":"Boolean","desc":"节点是否展开？可以直接分配新的布尔值，从而改变展开状态","reactive":true},"ticked":{"type":"Boolean","desc":"是否勾选了节点？可以直接分配新的布尔值，改变勾选状态","reactive":true},"tree":{"type":"Object","desc":"QTree实例"},"node":{"type":"Object","desc":"节点对象"},"key":{"type":"Any","desc":"节点的密钥"},"color":{"type":"String","desc":"QTree实例“color”提供的属性值","examples":["primary"]},"dark":{"type":"Boolean","desc":"QTree实例\'dark\'提供的属性值"}}}},"events":{"update:expanded":{"desc":"节点展开或折叠时触发；Vue在“update”同步属性上使用","params":{"expanded":{"type":"Array","desc":"展开的节点键","examples":["[ \'Node 1\', \'Node 2\' ]"]}}},"lazy-load":{"desc":"节点的延迟加载完成时发出","params":{"details":{"type":"Object","desc":"延迟加载详细信息","definition":{"node":{"type":"Object","desc":"新节点（子节点）将附加到的节点"},"key":{"type":"String","desc":"获取新加载子节点的节点键","examples":["New Node"]},"done":{"type":"Function","desc":"加载成功时要执行的回调","params":{"children":{"type":"Array","desc":"节点数组"}},"returns":null},"fail":{"type":"Function","desc":"加载失败时要执行的回调","params":null,"returns":null}}}}},"update:ticked":{"desc":"通过复选框勾选/取消勾选节点时发出；由Vue在“ticked”同步属性上使用","params":{"target":{"type":"Array","desc":"勾选的节点键","examples":["[ \'Node 1\', \'Node 2\' ]"]}}},"update:selected":{"desc":"当所选节点更改时发出；由Vue在“ticked”同步属性上使用","params":{"target":{"type":"Any","desc":"选定的节点键","examples":["Node 1"]}}},"after-show":{"desc":"组件显示动画完成时发出","addedIn":"v1.9.0"},"after-hide":{"desc":"组件隐藏动画完成时发出","addedIn":"v1.9.0"}},"methods":{"getNodeByKey":{"desc":"获取具有给定键的节点","params":{"key":{"type":"Any","desc":"节点的键","required":true,"examples":["Node 1"]}},"returns":{"type":"Object","desc":"请求的节点"}},"getTickedNodes":{"desc":"获取勾选的节点数组","returns":{"type":"Array","desc":"勾选的节点对象"}},"getExpandedNodes":{"desc":"获取展开的节点数组","returns":{"type":"Array","desc":"展开的节点对象"}},"isExpanded":{"desc":"确定节点是否展开","params":{"key":{"type":"Any","desc":"节点的键","required":true,"examples":["Node 1"]}},"returns":{"type":"Boolean","desc":"指定的节点是否展开？"}},"expandAll":{"desc":"用于展开树的所有分支"},"collapseAll":{"desc":"用于折叠树的所有分支"},"setExpanded":{"desc":"使用给定的键展开节点处的树","params":{"key":{"type":"Any","desc":"节点的键","required":true,"examples":["Node 1"]},"state":{"type":"Boolean","desc":"设置为“true”以展开树的分支，否则“false”将折叠它","required":true}}},"isTicked":{"desc":"方法来检查是否选中了节点的复选框","params":{"key":{"type":"Any","desc":"节点的键","required":true,"examples":["Node 1"]}},"returns":{"type":"Boolean","desc":"是否勾选了指定节点？"}},"setTicked":{"desc":"方法以编程方式设置节点的复选框","params":{"keys":{"type":"Array","desc":"要勾选/取消勾选的节点键","required":true,"examples":["[ \'Node 1\', \'Node 2\' ]"]},"state":{"type":"Boolean","desc":"设置为“true”以勾选节点的复选框，否则“false”将取消勾选","required":true}}}}}')}}]);