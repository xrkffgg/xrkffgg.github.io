(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{266:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"📝-知-识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📝-知-识"}},[t._v("#")]),t._v(" 📝 知 识")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("记录学习到的 知识、工具")])])]),t._v(" "),s("h2",{attrs:{id:"🔥-加-密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔥-加-密"}},[t._v("#")]),t._v(" 🔥 加 密")]),t._v(" "),s("p",[t._v("前端加密一般服务于两个目的, 一个是防止MITM等攻击(前端是https, 因此风险较小), 另一个是保证用户密码隐私(这一点投入产出实在是不成比例, 所以没有做)。")]),t._v(" "),s("p",[t._v("后端(即加密密码存储)用的是 PBKDF2 with SHA2 的 rfc2898 标准实现. 类似还可以考虑 bcrypt, Argon2。")]),t._v(" "),s("p",[t._v("后端加密的目的不仅是单向hash密码存储, 更重要的是需要保证被拖库后一定时间内密码无法被碰撞或破解(即使攻击者获得了你的加密方法的源代码), 从而有足够的时间去rehash。")]),t._v(" "),s("h2",{attrs:{id:"🔥-package-json-版本号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔥-package-json-版本号"}},[t._v("#")]),t._v(" 🔥 package.json 版本号")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("语义化版本 Semantic Versioning"),s("OutboundLink")],1)])]),t._v(" "),s("ol",[s("li",[t._v("主版本号（major version）：当你做了不兼容的 API 修改。")]),t._v(" "),s("li",[t._v("次版本号（minor version）：当你做了向下兼容的功能性新增。")]),t._v(" "),s("li",[t._v("修订号（patch version）：当你做了向下兼容的问题修正。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("~1.12.1")]),t._v(" : 会更新到最新的 minor 版本，即 1.12.x 最新。不会更新到 1.13.0 版本。")]),t._v(" "),s("li",[s("code",[t._v("^1.12.1")]),t._v(" : 会更新到最新的 major 版本，即 1.x 最新。不会更新到 2.x 版本。")])]),t._v(" "),s("h2",{attrs:{id:"🔥-git-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔥-git-命令"}},[t._v("#")]),t._v(" 🔥 Git 命令")]),t._v(" "),s("h3",{attrs:{id:"重置远端分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重置远端分支"}},[t._v("#")]),t._v(" 重置远端分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch --all\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard origin/master // 远程分支名称\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch\n")])])]),s("h3",{attrs:{id:"clone-指定分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-指定分支"}},[t._v("#")]),t._v(" clone 指定分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clone v1.0 分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b v1.0 http://xxx.git\n")])])]),s("h3",{attrs:{id:"更新fork工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新fork工程"}},[t._v("#")]),t._v(" 更新fork工程")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 添加源分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" xxx git@github.com:author/repos.git\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v 查看\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. fetch 源仓库代码的最新版本到本地")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch xxx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 合并两个版本的代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge xxx/master\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. 更新到GitHub的fork上")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),s("h3",{attrs:{id:"恢复远端-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#恢复远端-commit"}},[t._v("#")]),t._v(" 恢复远端 commit")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 查看 commit 历史")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 恢复到指定 commit")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft HEAD~1\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. commit 处理")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. push 远端")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master --force\n")])])]),s("h3",{attrs:{id:"撤销本地提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤销本地提交"}},[t._v("#")]),t._v(" 撤销本地提交")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销上一次提交")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft HEAD^\n")])])]),s("h3",{attrs:{id:"pr-更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pr-更新"}},[t._v("#")]),t._v(" PR 更新")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. master 更新到最新")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. rebase")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase master\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. push")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force\n")])])]),s("h3",{attrs:{id:"submodule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submodule"}},[t._v("#")]),t._v(" submodule")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule init\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检出")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update\n")])])]),s("h2",{attrs:{id:"🔥-yarn-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔥-yarn-命令"}},[t._v("#")]),t._v(" 🔥 Yarn 命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pavkage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不同类别")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --dev      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# devDependencies")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --peer     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# peerDependencies")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --optional "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# optionalDependencies")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局安装")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级依赖包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" upgrade "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" upgrade "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" upgrade "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除依赖包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" remove\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("peerDependencies")]),t._v(" "),s("p",[t._v("当一个依赖项 c 被列在某个包 b 的 peerDependency 中时，它就不会被自动安装。取而代之的是，包含了 b 包的代码库 a 则必须将对应的依赖项 c 包含为其依赖。目的是提示宿主环境去安装满足插件 peerDependencies 所指定依赖的包，然后在插件 "),s("code",[t._v("import")]),t._v(" 或者 "),s("code",[t._v("require")]),t._v(" 所依赖的包的时候，永远都是引用宿主环境统一安装的 npm 包，最终解决插件与所依赖包不一致的问题。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("optionalDependencies")]),t._v(" "),s("p",[t._v("可选依赖，如果有一些依赖包即使安装失败，项目仍然能够运行或者希望npm继续运行，就可以使用optionalDependencies。另外optionalDependencies会覆盖dependencies中的同名依赖包。")])]),t._v(" "),s("h2",{attrs:{id:"🔥-n-管理-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔥-n-管理-node"}},[t._v("#")]),t._v(" 🔥 n 管理 node")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1.下载 n")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2.下载 node")]),t._v("\nn 版本号\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3.下载最新 node")]),t._v("\nn latest\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#4.删除某个版本")]),t._v("\nn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" xxx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#5.查看当前版本")]),t._v("\nnode -v \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#6.切换版本")]),t._v("\nn\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#7.以指定版本运行脚本")]),t._v("\nn use xxx index.js\n")])])]),s("h2",{attrs:{id:"🔥-hosts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔥-hosts"}},[t._v("#")]),t._v(" 🔥 hosts")]),t._v(" "),s("h3",{attrs:{id:"windows-重置缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-重置缓存"}},[t._v("#")]),t._v(" Windows 重置缓存")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("ipconfig /flushdns\n")])])]),s("h3",{attrs:{id:"github-hosts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-hosts"}},[t._v("#")]),t._v(" GitHub hosts")]),t._v(" "),s("p",[t._v("https://www.ipaddress.com/")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("140.82.114.3 github.com\n199.232.5.194 github.global.ssl.fastly.net\n199.232.28.133 raw.githubusercontent.com\n199.232.28.133 camo.githubusercontent.com\n199.232.28.133 user-images.githubusercontent.com\n199.232.28.133 avatars0.githubusercontent.com\n199.232.28.133 avatars1.githubusercontent.com\n199.232.28.133 avatars2.githubusercontent.com\n199.232.28.133 avatars3.githubusercontent.com\n199.232.28.133 avatars4.githubusercontent.com\n199.232.28.133 avatars5.githubusercontent.com\n199.232.28.133 avatars6.githubusercontent.com\n199.232.28.133 avatars7.githubusercontent.com\n199.232.28.133 avatars8.githubusercontent.com\n199.232.28.133 avatars9.githubusercontent.com\n")])])]),s("h2",{attrs:{id:"🔥-webp格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔥-webp格式"}},[t._v("#")]),t._v(" 🔥 webp格式")]),t._v(" "),s("p",[t._v("WebP 的优势体现在它具有更优的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量；同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性，在 JPEG 和 PNG 上的转化效果都非常优秀、稳定和统一。")]),t._v(" "),s("p",[t._v("对于不同场景下 WebP 的使用，总结了一些解决方案，如下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("若使用场景是浏览器，可以：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("JavaScript 能力检测，对支持 WebP 的用户输出 WebP 图片")])]),t._v(" "),s("li",[s("p",[t._v("使用 WebP 支持插件：WebPJS：http://webpjs.appspot.com")])])])]),t._v(" "),s("li",[s("p",[t._v("若使用场景是 App，可以：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Android 4.0 以下 WebP 解析库（https://github.com）")])]),t._v(" "),s("li",[s("p",[t._v("iOS WebP 解析库（https://github.com）")])])])]),t._v(" "),s("li",[s("p",[t._v("转换工具：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("智图（http://zhitu.tencent.com）")])]),t._v(" "),s("li",[s("p",[t._v("iSparta（http://isparta.ghub）")])])])])]),t._v(" "),s("h2",{attrs:{id:"🔥-reasonml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔥-reasonml"}},[t._v("#")]),t._v(" 🔥 ReasonML")]),t._v(" "),s("p",[t._v("ReasonML 是从 OCaml 语言衍生出来的，可以支持 JavaScript 的新的强类型语言。")]),t._v(" "),s("ul",[s("li",[t._v("无争论的类型系统（Types without hassle），有效、安全的类型推论意味着你很少需要进行类型注释，但是它可以帮你检查所有内容的类型。")]),t._v(" "),s("li",[t._v("简单的 JavaScript 交互（Easy JavaScript interop），可以没有任何麻烦的使用 NPM/Yarn 中的包，或者在你学习的时候，你甚至可以使用一小段 JavaScript。")]),t._v(" "),s("li",[t._v("灵活有趣（Flexible & Fun），适用于网站、动画、游戏、服务、脚手架工具等。通过这些例子我们就可以得到灵感。")])]),t._v(" "),s("h2",{attrs:{id:"🔥-mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔥-mac"}},[t._v("#")]),t._v(" 🔥 Mac")]),t._v(" "),s("h3",{attrs:{id:"删除-ds-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除-ds-store"}},[t._v("#")]),t._v(" 删除 "),s("code",[t._v(".DS_Store")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -name .DS_Store -print0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" -0 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f --ignore-unmatch\n")])])]),s("h3",{attrs:{id:"更改文件用户权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改文件用户权限"}},[t._v("#")]),t._v(" 更改文件用户权限")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如：当前用户 xrk")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R xrk ~/.npm \n")])])]),s("h2",{attrs:{id:"🔥-前端三大框架对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔥-前端三大框架对比"}},[t._v("#")]),t._v(" 🔥 前端三大框架对比")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("语言")]),t._v(" "),s("th",[t._v("范式")]),t._v(" "),s("th",[t._v("背景")]),t._v(" "),s("th",[t._v("公司")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("Angular")])]),t._v(" "),s("td",[t._v("作用域")]),t._v(" "),s("td",[t._v("2.0 变更为 "),s("code",[t._v("TypeScript")])]),t._v(" "),s("td",[t._v("谷歌")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("React")])]),t._v(" "),s("td",[t._v("组件")]),t._v(" "),s("td",[s("code",[t._v("Class")]),t._v(" => "),s("code",[t._v("Function")])]),t._v(" "),s("td",[t._v("Facebook")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Vue")])]),t._v(" "),s("td",[t._v("Html、js、css")]),t._v(" "),s("td",[t._v("3.0 借鉴 "),s("code",[t._v("React")]),t._v(" "),s("code",[t._v("Class")]),t._v(" 形式")]),t._v(" "),s("td",[t._v("尤雨溪（阿里）")])])])]),t._v(" "),s("ul",[s("li",[t._v("模板")])]),t._v(" "),s("p",[s("code",[t._v("Angular")]),t._v(" 和 "),s("code",[t._v("Vue")]),t._v(" 是基于模板进行编程的。解析模板，会消耗一定时间。")]),t._v(" "),s("p",[s("code",[t._v("React")]),t._v(" 使用 JSX 的形式，会解析成 JS。")]),t._v(" "),s("ul",[s("li",[t._v("指令&组件")])]),t._v(" "),s("p",[s("code",[t._v("Angular")]),t._v(" 采用指令的方式。")]),t._v(" "),s("p",[s("code",[t._v("Vue")]),t._v(" 采用组件方式。类似于配置文件，通过属性来控制组件的效果。")]),t._v(" "),s("p",[s("code",[t._v("React")]),t._v(" 采用 "),s("code",[t._v("Class")]),t._v(" 类的方式来写组件，"),s("code",[t._v("React Hooks")]),t._v(" 采用 "),s("code",[t._v("Function")]),t._v(" 的方式。")]),t._v(" "),s("ul",[s("li",[t._v("全家桶&散件")])]),t._v(" "),s("p",[s("code",[t._v("Angular")]),t._v(" 官方功能完善。")]),t._v(" "),s("p",[s("code",[t._v("React")]),t._v(" 采用生态方式。千变万化。")]),t._v(" "),s("p",[s("code",[t._v("Vue")]),t._v(" 既有官方支持，也有生态的各种散件。")]),t._v(" "),s("ul",[s("li",[t._v("移动端支持")])]),t._v(" "),s("p",[s("code",[t._v("Vue")]),t._v(" 移动端框架 "),s("code",[t._v("Weex")]),t._v("，坑略多。")]),t._v(" "),s("p",[s("code",[t._v("Angular")]),t._v(" 无移动端支持。谷歌推出了 "),s("code",[t._v("Flutter")]),t._v(" ，使用 "),s("code",[t._v("Dart")]),t._v(" 语言。")]),t._v(" "),s("p",[s("code",[t._v("React Native")]),t._v(" 支持良好。")]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("三大框架不断趋于一致")]),t._v(" "),s("li",[s("code",[t._v("TypeScript")]),t._v(" 流行起来了")])])])}),[],!1,null,null,null);a.default=e.exports}}]);