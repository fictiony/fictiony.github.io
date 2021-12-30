(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"858a":function(e){e.exports=JSON.parse('{"type":"plugin","meta":{"docsUrl":"https://v1.quasar.dev/quasar-plugins/cookies"},"injection":"$q.cookies","methods":{"get":{"tsType":"CookiesGetMethodType","desc":"获取cookie","params":{"name":{"type":"String","desc":"Cookie名称","required":true,"examples":["userId"]}},"returns":{"type":["String","null"],"desc":"Cookie值；如果找不到cookie，则返回null","examples":["john12"]}},"getAll":{"desc":"获取所有Cookie","returns":{"type":"Object","desc":"具有cookie名称（作为键）及其值的对象","examples":["{ userId: \'john12\', XFrame: \'x534\' }"]}},"set":{"desc":"设置cookie","params":{"name":{"type":"String","desc":"Cookie名称","required":true,"examples":["userId"]},"value":{"type":"String","desc":"Cookie值","required":true,"examples":["john12"]},"options":{"type":"Object","desc":"Cookie选项","definition":{"expires":{"type":["Number","String","Date"],"desc":"Cookie过期详细信息；如果指定为数字，则单位为天；如果指定为字符串，则可以是原始字符串化日期或Xd Xh Xm Xs格式（参见示例）","examples":[30,"Wed, 13 Jan 2021 22:23:01 GMT","1d","15m","13d","1d 15m","1d 3h 5m 3s"]},"path":{"type":"String","desc":"Cookie路径","examples":["/accounts"]},"domain":{"type":"String","desc":"Cookie域","examples":[".foo.com"]},"sameSite":{"type":"String","desc":"SameSite cookie选项（IE11不支持）","examples":["Strict","Lax"],"addedIn":"v1.1.1"},"httpOnly":{"type":"Boolean","desc":"cookie仅限于Http吗？"},"secure":{"type":"Boolean","desc":"饼干安全吗(（仅限https）"},"other":{"type":"String","desc":"其他cookie选项的原始字符串；作为一个可能的新道具，目前还没有在类星体实施的最后手段","examples":["SomeNewCookieProp"],"addedIn":"v1.1.1"}}}}},"has":{"desc":"检查cookie是否存在","params":{"name":{"type":"String","desc":"Cookie名称","required":true,"examples":["userId"]}},"returns":{"type":"Boolean","desc":"cookie是否存在？"}},"remove":{"desc":"删除cookie","params":{"name":{"type":"String","desc":"Cookie名称","required":true,"examples":["userId"]},"options":{"type":"Object","desc":"Cookie选项","definition":{"path":{"type":"String","desc":"Cookie路径","examples":["/accounts"]},"domain":{"type":"String","desc":"Cookie域","examples":[".foo.com"]}}}}},"parseSSR":{"desc":"仅用于SSR，并且仅用于全局导入（不用于$q.cookies）","params":{"ssrContext":{"type":"Object","desc":"SSR上下文对象","required":true}},"returns":{"type":"Object","tsType":"Cookies","desc":"用于SSR用途的Cookie对象（如$q.cookies）"}}}}')}}]);