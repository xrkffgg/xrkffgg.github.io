(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{297:function(t,a,s){"use strict";s.r(a);var e=s(21),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_10-vue项目引入createjs的方法（亲测）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-vue项目引入createjs的方法（亲测）","aria-hidden":"true"}},[t._v("#")]),t._v(" 10. Vue项目引入CreateJS的方法（亲测）")]),t._v(" "),s("h2",{attrs:{id:"_1-前-言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-前-言","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 前 言")]),t._v(" "),s("h3",{attrs:{id:"_1-1-createjs介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-createjs介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 CreateJS介绍")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/10-1.png?raw=true7",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("CreateJS是基于HTML5开发的一套模块化的库和工具。\n基于这些库，可以非常快捷地开发出基于HTML5的游戏、动画和交互应用。")]),t._v(" "),s("p",[t._v("A suite of modular libraries and tools which work together or independently to enable rich interactive content on open web technologies via HTML5.")])]),t._v(" "),s("p",[t._v("包含4类工具库")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("EaselJS")]),t._v(" 提供了一套完整的，层次化的显示列表的互动方式 来更简单的处理HTML5画布。")]),t._v(" "),s("li",[s("code",[t._v("TweenJS")]),t._v(" 类库主要用来调整和动画HTML5和Javascript属性。提供了简单并且强大的tweening接口。")]),t._v(" "),s("li",[s("code",[t._v("SoundJS")]),t._v(" 提供了简单而强大的API来处理音频。通过插件来执行实际的音频实现，无需学习平台相关的知识，简单直接的处理声音。")]),t._v(" "),s("li",[s("code",[t._v("PreloadJS")]),t._v(" 是一个用来管理和协调相关资源加载的类库，它可以方便的帮助你预先加载相关资源，例如：图片、文件、音频、数据等等。")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-createjs版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-createjs版本","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 CreateJS版本")]),t._v(" "),s("h4",{attrs:{id:"_1-2-1-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-github","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2.1 GitHub")]),t._v(" "),s("p",[t._v("地址：https://github.com/CreateJS")]),t._v(" "),s("p",[t._v("以 "),s("code",[t._v("EaselJS")]),t._v(" 为例，"),s("code",[t._v("js")]),t._v(" 文件存放在 "),s("code",[t._v("lib")]),t._v(" 文件中")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("easeljs.js")]),t._v(" v0.8.2 带注释版本")]),t._v(" "),s("li",[s("code",[t._v("easeljs.min.js")]),t._v(" v0.8.2 不带注释压缩版本，功能不受影响")]),t._v(" "),s("li",[s("code",[t._v("easeljs-NEXT.js")]),t._v(" v1.0.0")]),t._v(" "),s("li",[s("code",[t._v("easeljs-NEXT.min.js")]),t._v(" v1.0.0")])]),t._v(" "),s("h4",{attrs:{id:"_1-2-2-英文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-英文","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2.2 英文")]),t._v(" "),s("ul",[s("li",[t._v("网址：https://www.createjs.com/")]),t._v(" "),s("li",[t._v("API 文档版本为 v1.0.0")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-3-中文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-中文","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2.3 中文")]),t._v(" "),s("ul",[s("li",[t._v("网址：http://www.createjs.cc/")]),t._v(" "),s("li",[t._v("API 文档版本为 v0.8.2（以 "),s("code",[t._v("EaselJS")]),t._v(" 为例）")])]),t._v(" "),s("h2",{attrs:{id:"_2-正-文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-正-文","aria-hidden":"true"}},[t._v("#")]),t._v(" 2 正 文")]),t._v(" "),s("p",[t._v("由于 "),s("code",[t._v("createjs")]),t._v(" 各个库中代码都使用了：")]),t._v(" "),s("p",[s("code",[t._v("this.createjs = this.createjs || {}")])]),t._v(" "),s("p",[t._v("因为这里的 "),s("code",[t._v("this")]),t._v(" 并不是挂载在 "),s("code",[t._v("window")]),t._v(" 对象上，所以无法直接从 "),s("code",[t._v("import")]),t._v(" 中引用。")]),t._v(" "),s("h3",{attrs:{id:"_2-1-方法一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-方法一","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 方法一")]),t._v(" "),s("h4",{attrs:{id:"_2-1-1-安装yuki-createjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-安装yuki-createjs","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1.1 安装"),s("code",[t._v("yuki-createjs")])]),t._v(" "),s("p",[t._v("GitHub : https://github.com/yuki-torii/yuki-createjs")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -S yuki-createjs\n")])])]),s("blockquote",[s("p",[t._v("注意这里下载的版本不是官网最新版本。")])]),t._v(" "),s("h4",{attrs:{id:"_2-1-2-使用yuki-createjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-使用yuki-createjs","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1.2 使用"),s("code",[t._v("yuki-createjs")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// include all")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yuki-createjs'")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yuki-createjs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// include one")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yuki-createjs/lib/preloadjs-0.6.2.combined'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yuki-createjs/lib/preloadjs-0.6.2.combined'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-1-3-例-子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-例-子","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1.3 例 子")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("// helloworld.vue\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("canvas")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("idd11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("500"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("400"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yuki-createjs/lib/easeljs-0.8.2.combined'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  这里主要不能放在 created() 里")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" canvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'idd11'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("createjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("createjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"36px Arial"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#777"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textAlign "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"center"')]),t._v("\n                text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n                text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n                stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("我是直接在 "),s("code",[t._v("Vue")]),t._v(" 新建的项目里，"),s("code",[t._v("HelloWorld.vue")]),t._v(" 来进行修改， 效果图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/10-2.png?raw=true",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2-2-方法二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-方法二","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 方法二")]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-createjs-cmd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-createjs-cmd","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2.1 "),s("code",[t._v("createjs-cmd")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -S createjs-cmd\n")])])]),s("p",[t._v("GitHub：https://github.com/yedaodao/createjs-cmd")]),t._v(" "),s("blockquote",[s("p",[t._v("同方法一，下载的不是最新版本。")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-2-使-用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-使-用","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2.2 使 用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" createjs "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'createjs-cmd'")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-3-方法三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-方法三","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3 方法三")]),t._v(" "),s("h4",{attrs:{id:"_2-3-1-script-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-script-loader","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3.1 "),s("code",[t._v("script-loader")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -S script-loader\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -S createjs\n")])])]),s("blockquote",[s("p",[t._v("下载的各个版本都有，可以来引用 "),s("code",[t._v("1.0.0")]),t._v(" 版本，但是包含4个库")])]),t._v(" "),s("blockquote",[s("p",[t._v("npm i easeljs 下载的只包含旧版")])]),t._v(" "),s("h4",{attrs:{id:"_2-3-2-使-用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-使-用","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3.2 使 用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script-loader!createjs/builds/1.0.0/createjs.min.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-4-方法四"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-方法四","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.4 方法四")]),t._v(" "),s("h4",{attrs:{id:"_2-4-1-createjs-easeljs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-createjs-easeljs","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.4.1 "),s("code",[t._v("@createjs/easeljs")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @createjs/easeljs\n")])])]),s("h4",{attrs:{id:"_2-4-2-使-用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-使-用","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.4.2 使 用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" createjs "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@createjs/easeljs'")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("2.0 BETA版（当前是这样的，由于文章时效性，以后不清楚 😂😂😂）")])]),t._v(" "),s("h3",{attrs:{id:"_2-5-方法五"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-方法五","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.5 方法五")]),t._v(" "),s("h4",{attrs:{id:"_2-5-1-vue-easeljs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-vue-easeljs","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.5.1 "),s("code",[t._v("vue-easeljs")])]),t._v(" "),s("p",[t._v("GitHub：https://github.com/dankuck/vue-easeljs")]),t._v(" "),s("blockquote",[s("p",[t._v("具体可参考GitHub，没有其他参考API，封装成了标签，感兴趣的可以尝试下")])]),t._v(" "),s("h2",{attrs:{id:"_3-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 3 总结")]),t._v(" "),s("p",[t._v("列了一个表格将5种方法比较一下")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("方法")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("版本")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("推荐")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("一")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("yuki-createjs")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("旧版")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✰✰★★★")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("二")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("createjs-cmd")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("旧版")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✰✰★★★")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("三")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("script-loader")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("新旧")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("★★★★★")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("四")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("@createjs/easeljs")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Beta")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✰✰★★★")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("五")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("vue-easeljs")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("旧版")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("✰✰✰★★")])])])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("类似于 "),s("code",[t._v("script-loader")]),t._v(" 还可以使用 "),s("code",[t._v("imports-loader")]),t._v(" ，但试了几次没成功😂😂，原谅我太菜了")])])]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("2.0 Beta")]),t._v(" 版已支持 "),s("code",[t._v("ES6")]),t._v("，相信等正式版出的时候，这个问题就完全不用担心了。")])])]),t._v(" "),s("h2",{attrs:{id:"_4-后-记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-后-记","aria-hidden":"true"}},[t._v("#")]),t._v(" 4 后 记")]),t._v(" "),s("p",[s("strong",[t._v("感谢支持。若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),s("p",[s("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家")]),t._v(" 😂")])])},[],!1,null,null,null);a.default=r.exports}}]);