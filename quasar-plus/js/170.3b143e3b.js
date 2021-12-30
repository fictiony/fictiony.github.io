(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[170],{b27f:function(e){e.exports=JSON.parse('{"type":"directive","meta":{"docsUrl":"https://v1.quasar.dev/vue-directives/touch-swipe"},"value":{"type":"Function","desc":"触摸滑动处理程序（如果不是函数则表示禁用）","params":{"details":{"type":"Object","desc":"活动详细信息","definition":{"evt":{"type":"Object","desc":"原始JS事件对象"},"touch":{"type":"Boolean","desc":"由触摸事件触发"},"mouse":{"type":"Boolean","desc":"由鼠标事件触发"},"direction":{"type":"String","desc":"运动方向","values":["up","right","down","left"]},"duration":{"type":"Number","desc":"触发事件所用的时间（毫秒）","examples":[612]},"distance":{"type":"Object","desc":"从起始点开始移动后的绝对距离（像素）","definition":{"x":{"type":"Number","desc":"水平绝对距离","examples":[231]},"y":{"type":"Number","desc":"垂直绝对距离","examples":[231]}}}}}},"returns":null,"examples":["v-touch-swipe=\\"fnToCall\\"","v-touch-swipe=\\"void 0\\""]},"arg":{"type":"String","desc":"x:y:z，其中x是最小速度（距离/时间；请使用不带点的float，例如：6e-2相当于6*10^-2=0.06），y是移动设备上第一次移动时的最小距离，z是桌面上的最小距离，直到确定是否确实是触摸滑动为止","default":"6e-2:6:50","examples":["v-touch-swipe:7e-2:10:100=\\"fnToCall\\""]},"modifiers":{"capture":{"type":"Boolean","desc":"使用touchstart事件捕获"},"mouse":{"type":"Boolean","desc":"也要侦听鼠标事件"},"mouseCapture":{"type":"Boolean","desc":"对mousedown事件使用捕获"},"horizontal":{"type":"Boolean","desc":"抓住水平（左/右）移动"},"vertical":{"type":"Boolean","desc":"捕捉垂直（上/下）运动"},"up":{"type":"Boolean","desc":"捕获向上滑动"},"right":{"type":"Boolean","desc":"捕获向右滑动"},"down":{"type":"Boolean","desc":"捕获向下滑动"},"left":{"type":"Boolean","desc":"捕获向左滑动"}}}')}}]);