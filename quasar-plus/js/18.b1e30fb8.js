(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"46aa":function(r,n,t){"use strict";t.r(n),n["default"]='# MySplitter\r\n扩展分隔条（MySplitter）组件，主要是用于解决 **Quasar** 框架自带分隔条（QSplitter）组件无法同时对两侧区域的最小范围进行限制的问题，而进行的扩展。\r\n\r\n## 功能\r\n:::\r\n支持同时对 **两侧区域** 进行最小像素范围的限制，并仍保留原单侧区域范围最小范围限制的功能。\r\n:::\r\n:::\r\n组件整体大小改变后，能够实时响应并调整两侧区域的大小。\r\n:::\r\n:::\r\n通过新增模式属性 `position`，并重定义原模式属性 `value` 为状态属性，从而提高了组件的 **封装性**（即不再需要强制绑定 `v-model` 参数）。\r\n:::\r\n\r\n## 范例\r\n<DemoExample caption="基本用法" file="MySplitterBasic" import="MySplitter.js">\r\n<DemoExample caption="两侧固定" file="MySplitterSides" import="MySplitter.js">\r\n\r\n## 更多\r\n参考教程：[Vue组件继承实践：扩展分隔条（MySplitter）组件](https://www.yuque.com/fictiony/cs6lwq/nzrxtl)\r\n\r\n##\r\n'}}]);