(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{397:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-vue监听键盘鼠标事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue监听键盘鼠标事件"}},[t._v("#")]),t._v(" 4. Vue监听键盘鼠标事件")]),t._v(" "),a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1 前言")]),t._v(" "),a("h3",{attrs:{id:"_1-1-业务场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-业务场景"}},[t._v("#")]),t._v(" 1.1 业务场景")]),t._v(" "),a("p",[t._v("vue页面监听键盘鼠标等事件。")]),t._v(" "),a("p",[t._v("官方给的例子是在"),a("code",[t._v("input")]),t._v("标签中的，我们想要的效果是不使用固定标签。")]),t._v(" "),a("h2",{attrs:{id:"_2-实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现原理"}},[t._v("#")]),t._v(" 2 实现原理")]),t._v(" "),a("h3",{attrs:{id:"_2-1-增加监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-增加监听"}},[t._v("#")]),t._v(" 2.1 增加监听")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keyup'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleKeyup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scroll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleScroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("这里定义了，键盘按出的时候的事件 和 鼠标滑轮滚动的事件。")]),t._v(" "),a("p",[t._v("这里可以自行查询下有哪些事件，")]),t._v(" "),a("p",[t._v("关键字：")]),t._v(" "),a("blockquote",[a("p",[t._v("HTML DOM Event")])]),t._v(" "),a("p",[t._v("可参考："),a("a",{attrs:{href:"http://www.w3school.com.cn/jsref/dom_obj_event.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3school"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://www.runoob.com/jsref/dom-obj-event.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜鸟教程"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这里根据"),a("code",[t._v("addEventListener(event,function)")]),t._v("的用法。")]),t._v(" "),a("p",[a("code",[t._v("event")]),t._v("，必参，字符串，注意要把DOM事件的名称去掉"),a("code",[t._v("on")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-方法调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-方法调用"}},[t._v("#")]),t._v(" 2.2 方法调用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 键盘事件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleKeyup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("caller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("keyCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  滑轮事件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleScroll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-3-移除监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-移除监控"}},[t._v("#")]),t._v(" 2.3 移除监控")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroyed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keyup'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleKeyup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scroll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleScroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-后记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-后记"}},[t._v("#")]),t._v(" 3 后记")]),t._v(" "),a("p",[a("strong",[t._v("感谢支持。若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),a("p",[a("strong",[t._v("如果觉得不错，记得 点赞 ，谢谢大家")]),t._v(" 😂")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("欢迎关注 我的：")]),t._v(" "),a("a",{attrs:{href:"https://github.com/xrkffgg/Tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Github】"),a("OutboundLink")],1),a("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2/posts",target:"_blank",rel:"noopener noreferrer"}},[t._v("【掘金】"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[t._v("【简书】"),a("OutboundLink")],1),a("a",{attrs:{href:"https://blog.csdn.net/xrk_ffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("【CSDN】"),a("OutboundLink")],1),a("a",{attrs:{href:"https://my.oschina.net/xrkffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("【OSCHINA】"),a("OutboundLink")],1),a("a",{attrs:{href:"https://segmentfault.com/u/xrkffgg/articles",target:"_blank",rel:"noopener noreferrer"}},[t._v("【SF】"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);