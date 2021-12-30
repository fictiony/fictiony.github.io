(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"9b3d":function(e){e.exports=JSON.parse('{"type":"plugin","meta":{"docsUrl":"https://v1.quasar.dev/options/platform-detection"},"injection":"$q.platform","props":{"userAgent":{"type":"String","desc":"客户端浏览器用户代理","examples":["mozilla/5.0 (macintosh; intel mac os x 10_14_5) applewebkit/537.36 (khtml, like gecko) chrome/75.0.3770.100 safari/537.36"]},"is":{"type":"Object","desc":"客户端浏览器详细信息（属性名称取决于浏览器）","examples":["{ chrome: true, version: \'71.0.3578.98\', versionNumber: 71, mac: true, desktop: true, webkit: true, name: \'chrome\', platform: \'mac\' }"]},"has":{"type":"Object","desc":"客户端浏览器可检测属性","definition":{"touch":{"type":"Boolean","desc":"客户端浏览器在支持触摸的设备上运行"},"webStorage":{"type":"Boolean","desc":"客户端浏览器支持Web存储"}},"examples":["{ touch: false, webStorage: true }"]},"within":{"type":"Object","desc":"客户端浏览器环境","definition":{"iframe":{"type":"Boolean","desc":"应用程序是否在iframe下运行？"}},"examples":["{ iframe: false }"]}},"methods":{"parseSSR":{"desc":"仅用于SSR，并且仅用在全局导入上（不用在$q.platform上）","params":{"ssrContext":{"type":"Object","desc":"SSR上下文对象","required":true}},"returns":{"type":"Object","tsType":"Platform","desc":"用于SSR用途的平台对象（如$q.Platform）"}}}}')}}]);