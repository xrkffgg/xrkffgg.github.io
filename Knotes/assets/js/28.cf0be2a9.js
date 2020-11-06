(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{408:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_8-前端引用字体-font-face的若干优化方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-前端引用字体-font-face的若干优化方法"}},[t._v("#")]),t._v(" 8. 前端引用字体@font-face的若干优化方法")]),t._v(" "),a("h2",{attrs:{id:"_1-前-言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前-言"}},[t._v("#")]),t._v(" 1 前 言")]),t._v(" "),a("h3",{attrs:{id:"_1-1-场-景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-场-景"}},[t._v("#")]),t._v(" 1.1 场 景")]),t._v(" "),a("p",[t._v("我们在页面展示时，为了更好的效果，一般使用了自定义的字体 "),a("code",[t._v("@fant-face")]),t._v(" 。")]),t._v(" "),a("p",[t._v("之前在开发的时候使用了一些自定义字体，这里总结下自己寻找的的一些处理办法。")]),t._v(" "),a("p",[t._v("本文只列出了引入本地字体，网络的字体由于实践不多，这里介绍就少一些。")]),t._v(" "),a("p",[t._v("😂 献丑了 😂")]),t._v(" "),a("h2",{attrs:{id:"_2-正-文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-正-文"}},[t._v("#")]),t._v(" 2 正 文")]),t._v(" "),a("h3",{attrs:{id:"_2-1-本地字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-本地字体"}},[t._v("#")]),t._v(" 2.1 本地字体")]),t._v(" "),a("h4",{attrs:{id:"_2-1-1-版-权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-版-权"}},[t._v("#")]),t._v(" 2.1.1 版 权")]),t._v(" "),a("div",{staticClass:"language-! extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("首先一定要注意这个问题\n")])])]),a("h4",{attrs:{id:"_2-1-2-字体定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-字体定义"}},[t._v("#")]),t._v(" 2.1.2 字体定义")]),t._v(" "),a("p",[t._v("一般情况定义如下：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Regular"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'../font/Regular.otf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在某个我们要使用的该字体的"),a("code",[t._v("classA")]),t._v("上定义：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".classA")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Regular"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-1-3-字体压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-字体压缩"}},[t._v("#")]),t._v(" 2.1.3 字体压缩")]),t._v(" "),a("p",[t._v("一般的中文字体都要"),a("code",[t._v("8-10M")]),t._v("，相对于整个工程来说太巨大，这里提供自己实践过的2种压缩方法。")]),t._v(" "),a("p",[t._v("两种都需要列举出你使用过的字。")]),t._v(" "),a("h5",{attrs:{id:"_1-font-spider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-font-spider"}},[t._v("#")]),t._v(" 1 font-spider")]),t._v(" "),a("blockquote",[a("p",[t._v("官网：http://font-spider.org/")])]),t._v(" "),a("blockquote",[a("p",[t._v("支持 "),a("code",[t._v("gulp")]),t._v(" 构建插件")])]),t._v(" "),a("p",[t._v("我在使用时，刚开始一直没压缩成功")]),t._v(" "),a("p",[t._v("之后发现是由于自己下载的字体版本有点低")]),t._v(" "),a("p",[t._v("这里列出一个找到的字体下载网址，觉得不错：https://www.fontke.com/font/")]),t._v(" "),a("h5",{attrs:{id:"_2-fontmin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-fontmin"}},[t._v("#")]),t._v(" 2 Fontmin")]),t._v(" "),a("blockquote",[a("p",[t._v("官网：http://ecomfe.github.io/fontmin/")])]),t._v(" "),a("p",[t._v("这个比较方便的是有一个客户端可以操作")]),t._v(" "),a("h4",{attrs:{id:"_2-1-4-字体加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-字体加载"}},[t._v("#")]),t._v(" 2.1.4 字体加载")]),t._v(" "),a("p",[t._v("虽然有压缩的功能，但必须提供出所有使用过的字体，而且我想的是我的项目中就默认一个好看的字体。")]),t._v(" "),a("p",[t._v("这样就遇到一个问题，在第一次加载的时候，浏览器就会用一些时间来加载这个字体文件。")]),t._v(" "),a("p",[t._v("而在加载完成之前，页面就会空白，也就是FOIT（Flash of Invisible Text）")]),t._v(" "),a("h5",{attrs:{id:"_1-fout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-fout"}},[t._v("#")]),t._v(" 1 FOUT")]),t._v(" "),a("p",[t._v("FOUT（Flash of Unstyled Text）大意就是在字体加载完成前，浏览器会显示"),a("code",[t._v("font-family")]),t._v("的顺序字体")]),t._v(" "),a("p",[t._v("当加载完成后，才会替换成定义的字体，设置如下：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" swap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("这样的效果，就是会在页面中看到的一个字体替换的效果😂")])]),t._v(" "),a("h5",{attrs:{id:"_2-fontfaceobserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-fontfaceobserver"}},[t._v("#")]),t._v(" 2 FontFaceObserver")]),t._v(" "),a("p",[t._v("然后我想的是，有没有什么办法可以判断字体加载完成了呢？")]),t._v(" "),a("p",[t._v("安装：")]),t._v(" "),a("p",[a("code",[t._v("npm i fontfaceobserver")])]),t._v(" "),a("p",[t._v("页面中：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// css 中 @font-face 已定义好")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FontFaceObserver "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fontfaceobserver'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadfont")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"字体加载用时"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ooo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FontFaceObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Regular'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ooo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontFamily "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Regular'")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"字体加载用时"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("同时可以加上一个"),a("code",[t._v("loading")]),t._v("的动画，这样效果就比较好了😎")]),t._v(" "),a("h3",{attrs:{id:"_2-2-网络字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-网络字体"}},[t._v("#")]),t._v(" 2.2 网络字体")]),t._v(" "),a("h4",{attrs:{id:"_2-2-1-引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-引入"}},[t._v("#")]),t._v(" 2.2.1 引入")]),t._v(" "),a("p",[t._v("webfont：https://www.webfont.com/")]),t._v(" "),a("p",[t._v("找到的一个方式，没有实际用过，不知道效果咋样，有兴趣的可以试试。")]),t._v(" "),a("h2",{attrs:{id:"_3-后-记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-后-记"}},[t._v("#")]),t._v(" 3 后 记")]),t._v(" "),a("p",[a("strong",[t._v("感谢支持。若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),a("p",[a("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家")]),t._v(" 😂")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("欢迎关注 我的：")]),t._v(" "),a("a",{attrs:{href:"https://github.com/xrkffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Github】"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2",target:"_blank",rel:"noopener noreferrer"}},[t._v("【掘 金】"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[t._v("【简 书】"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);