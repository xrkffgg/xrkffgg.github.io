(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{402:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2-js实现页面查看zip文件中的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-js实现页面查看zip文件中的内容"}},[t._v("#")]),t._v(" 2. JS实现页面查看zip文件中的内容")]),t._v(" "),a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1 前言")]),t._v(" "),a("h3",{attrs:{id:"_1-1-业务场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-业务场景"}},[t._v("#")]),t._v(" 1.1 业务场景")]),t._v(" "),a("p",[t._v("附件zip上传到服务器后，在页面中可直接查看zip中的文件内容，如：readme.txt。")]),t._v(" "),a("h2",{attrs:{id:"_2-实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现原理"}},[t._v("#")]),t._v(" 2 实现原理")]),t._v(" "),a("h3",{attrs:{id:"_2-1-引入工具库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-引入工具库"}},[t._v("#")]),t._v(" 2.1 引入工具库")]),t._v(" "),a("blockquote",[a("p",[t._v("jszip、jszip-utils")])]),t._v(" "),a("p",[a("code",[t._v("npm i jszip -S")])]),t._v(" "),a("p",[a("code",[t._v("npm i jszip-utils -S")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-查看txt中内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-查看txt中内容"}},[t._v("#")]),t._v(" 2.2 查看txt中内容")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" JSZip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jszip"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" JSZipUtils "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jszip-utils"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" that "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n\n    JSZipUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBinaryContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("downloadPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        JSZip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'readme.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("con")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" con\n            that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("在vue中引入，其中在"),a("code",[t._v("JSZipUtils")]),t._v("使用中"),a("code",[t._v("this")]),t._v("的指向进行了重定向。")]),t._v(" "),a("p",[a("code",[t._v("row.downloadPath")]),t._v("是附件的下载地址，"),a("code",[t._v("con")]),t._v("是txt中内容。")]),t._v(" "),a("p",[a("code",[t._v("readme.txt")]),t._v("是要查看的文件名+后缀。")]),t._v(" "),a("p",[t._v("这里使用了"),a("code",[t._v("input")]),t._v("定义的"),a("code",[t._v('v-model="content"')]),t._v("来展示。")]),t._v(" "),a("h2",{attrs:{id:"_3-后记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-后记"}},[t._v("#")]),t._v(" 3 后记")]),t._v(" "),a("p",[a("strong",[t._v("感谢支持。若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),a("p",[a("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家")]),t._v(" 😂")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("欢迎关注 我的：")]),t._v(" "),a("a",{attrs:{href:"https://github.com/xrkffgg/Tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Github】"),a("OutboundLink")],1),a("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2/posts",target:"_blank",rel:"noopener noreferrer"}},[t._v("【掘金】"),a("OutboundLink")],1),a("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[t._v("【简书】"),a("OutboundLink")],1),a("a",{attrs:{href:"https://blog.csdn.net/xrk_ffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("【CSDN】"),a("OutboundLink")],1),a("a",{attrs:{href:"https://my.oschina.net/xrkffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("【OSCHINA】"),a("OutboundLink")],1),a("a",{attrs:{href:"https://segmentfault.com/u/xrkffgg/articles",target:"_blank",rel:"noopener noreferrer"}},[t._v("【SF】"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("这两个库都是关于JS处理压缩文件的，功能很多，目前只学到了一小点，更多功能还需再研究。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-参考资料"}},[t._v("#")]),t._v(" 3.1 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/sujun10/article/details/76038886",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog.csdn.net/sujun10..."),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/lovefive5/article/details/80527320",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog.csdn.net/lovefive5..."),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://stuk.github.io/jszip/documentation/api_jszip.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSZip API"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);