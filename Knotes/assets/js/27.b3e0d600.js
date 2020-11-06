(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{403:function(t,s,a){"use strict";a.r(s);var e=a(23),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_7-vue项目打包后动态获取自定义变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-vue项目打包后动态获取自定义变量"}},[t._v("#")]),t._v(" 7. Vue项目打包后动态获取自定义变量")]),t._v(" "),a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1 前言")]),t._v(" "),a("h3",{attrs:{id:"_1-1-业务场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-业务场景"}},[t._v("#")]),t._v(" 1.1 业务场景")]),t._v(" "),a("p",[t._v("一般使用 "),a("code",[t._v("Vue")]),t._v(" 项目连接后端请求，使用的 "),a("code",[t._v("axios")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CMSAPI")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baseURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("axios")]),t._v(" 中的 "),a("code",[t._v("baseURL")]),t._v(" 一般是访问地址")]),t._v(" "),a("p",[a("code",[t._v("Vue")]),t._v(" 项目打包后，如果我们需要修改这个 "),a("code",[t._v("baseURL")]),t._v(" 就需要修改代码重新 "),a("code",[t._v("build")])]),t._v(" "),a("p",[t._v("这样就比较麻烦了")]),t._v(" "),a("p",[t._v("有没有什么办法可以在"),a("code",[t._v("Vue")]),t._v("项目打包后再自定义变量呢？")]),t._v(" "),a("h2",{attrs:{id:"_2-实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现原理"}},[t._v("#")]),t._v(" 2 实现原理")]),t._v(" "),a("h3",{attrs:{id:"_2-1-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-文件"}},[t._v("#")]),t._v(" 2.1 文件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/07-1.png?raw=true",alt:""}})]),t._v(" "),a("p",[t._v("目前使用新版 "),a("code",[t._v("@vue/cli")]),t._v(" 创建的项目目录如上")]),t._v(" "),a("p",[t._v("我们发现这个图标文件 "),a("code",[t._v("favicon.ico")]),t._v(" 在打包文件中会单独存在")]),t._v(" "),a("p",[t._v("类似，我们在这个文件夹中新建一个 "),a("code",[t._v("index.js")]),t._v(" 文件")]),t._v(" "),a("h3",{attrs:{id:"_2-2-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-代码"}},[t._v("#")]),t._v(" 2.2 代码")]),t._v(" "),a("p",[a("code",[t._v("index.js")]),t._v(" 文件中，我们直接定义一个变量")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  index.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" apiURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080'")]),t._v("\n")])])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("//  index.html\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= BASE_URL %>index.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n//  然后使用window对象\nwindow.apiURL = apiURL\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// axios中引用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CMSAPI")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baseURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apiURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-3-打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-打包"}},[t._v("#")]),t._v(" 2.3 打包")]),t._v(" "),a("p",[a("code",[t._v("npm run build")]),t._v(" 后，会发现根目录中有我们定义的 "),a("code",[t._v("index.js")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/07-2.png?raw=true",alt:""}})]),t._v(" "),a("p",[t._v("这样我们就可以直接修改 "),a("code",[t._v("index.js")]),t._v(" 中变量的值就可以啦")]),t._v(" "),a("h2",{attrs:{id:"_3-后记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-后记"}},[t._v("#")]),t._v(" 3 后记")]),t._v(" "),a("p",[a("strong",[t._v("感谢支持。若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),a("p",[a("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家")]),t._v(" 😂")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("欢迎关注 我的：")]),t._v(" "),a("a",{attrs:{href:"https://github.com/xrkffgg/Tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Github】"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2/posts",target:"_blank",rel:"noopener noreferrer"}},[t._v("【掘金】"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[t._v("【简书】"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);