(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{186:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_7-vue项目打包后动态获取自定义变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-vue项目打包后动态获取自定义变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 7. Vue项目打包后动态获取自定义变量")]),t._v(" "),e("h2",{attrs:{id:"_1-前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 前言")]),t._v(" "),e("h3",{attrs:{id:"_1-1-业务场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-业务场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 业务场景")]),t._v(" "),e("p",[t._v("一般使用 "),e("code",[t._v("Vue")]),t._v(" 项目连接后端请求，使用的 "),e("code",[t._v("axios")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import axios from 'axios'\n\nexport const CMSAPI = axios.create({\n  baseURL: \"http://localhost:8080\",\n  timeout: 30000,\n});\n")])])]),e("p",[e("code",[t._v("axios")]),t._v(" 中的 "),e("code",[t._v("baseURL")]),t._v(" 一般是访问地址")]),t._v(" "),e("p",[e("code",[t._v("Vue")]),t._v(" 项目打包后，如果我们需要修改这个 "),e("code",[t._v("baseURL")]),t._v(" 就需要修改代码重新 "),e("code",[t._v("build")])]),t._v(" "),e("p",[t._v("这样就比较麻烦了")]),t._v(" "),e("p",[t._v("有没有什么办法可以在"),e("code",[t._v("Vue")]),t._v("项目打包后再自定义变量呢？")]),t._v(" "),e("h2",{attrs:{id:"_2-实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 2 实现原理")]),t._v(" "),e("h3",{attrs:{id:"_2-1-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 文件")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/07-1.png?raw=true",alt:""}})]),t._v(" "),e("p",[t._v("目前使用新版 "),e("code",[t._v("@vue/cli")]),t._v(" 创建的项目目录如上")]),t._v(" "),e("p",[t._v("我们发现这个图标文件 "),e("code",[t._v("favicon.ico")]),t._v(" 在打包文件中会单独存在")]),t._v(" "),e("p",[t._v("类似，我们在这个文件夹中新建一个 "),e("code",[t._v("index.js")]),t._v(" 文件")]),t._v(" "),e("h3",{attrs:{id:"_2-2-代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 代码")]),t._v(" "),e("p",[e("code",[t._v("index.js")]),t._v(" 文件中，我们直接定义一个变量")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//  index.js\nconst apiURL = 'http://localhost:8080'\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//  index.html\n<script type="text/javascript" src="<%= BASE_URL %>index.js"><\/script>\n//  然后使用window对象\nwindow.apiURL = apiURL\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// axios中引用\nimport axios from 'axios'\n\nexport const CMSAPI = axios.create({\n  baseURL: window.apiURL,\n  timeout: 30000,\n});\n")])])]),e("h3",{attrs:{id:"_2-3-打包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-打包","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3 打包")]),t._v(" "),e("p",[e("code",[t._v("npm run build")]),t._v(" 后，会发现根目录中有我们定义的 "),e("code",[t._v("index.js")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/07-2.png?raw=true",alt:""}})]),t._v(" "),e("p",[t._v("这样我们就可以直接修改 "),e("code",[t._v("index.js")]),t._v(" 中变量的值就可以啦")]),t._v(" "),e("h2",{attrs:{id:"_3-后记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-后记","aria-hidden":"true"}},[t._v("#")]),t._v(" 3 后记")]),t._v(" "),e("p",[e("strong",[t._v("感谢支持。若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),e("p",[e("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家")]),t._v(" 😂")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("欢迎关注 我的：")]),t._v(" "),e("a",{attrs:{href:"https://github.com/xrkffgg/Tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Github】"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2/posts",target:"_blank",rel:"noopener noreferrer"}},[t._v("【掘金】"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[t._v("【简书】"),e("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=s.exports}}]);