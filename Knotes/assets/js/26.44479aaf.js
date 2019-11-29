(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{193:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"📖-摘-记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#📖-摘-记","aria-hidden":"true"}},[a._v("#")]),a._v(" 📖 摘 记")]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("ul",[e("li",[a._v("记录开发过程中 知识点")])])]),a._v(" "),e("h2",{attrs:{id:"🎯-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎯-vue","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎯 Vue")]),a._v(" "),e("h3",{attrs:{id:"🎲-vue阻止右键默认行为"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-vue阻止右键默认行为","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 Vue阻止右键默认行为")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('\x3c!--不阻止右键菜单(浏览器行为)，右键执行函数show--\x3e\n<input type="button" value="按 钮" @contextmenu="show()"> \n\n\x3c!--阻止右键菜单--\x3e\n<input type="button" value="按 钮" @contextmenu.prevent>\n\n\x3c!--阻止右键菜单(浏览器行为)，右键执行函数show--\x3e\n<input type="button" value="按 钮" @contextmenu.prevent="show()">\n')])])]),e("h3",{attrs:{id:"🎲-vue组件销毁时去除定时器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-vue组件销毁时去除定时器","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 vue组件销毁时去除定时器")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mounted(){\n  const timer = setInterval(() =>{\n    console.log(\"lalala\")\n  }, 500)\n\n  this.$once('hook:beforeDestroy', () => clearInterval(timer))\n}\n")])])]),e("h2",{attrs:{id:"🎯-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎯-js","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎯 JS")]),a._v(" "),e("h3",{attrs:{id:"🎲-数组相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-数组相关","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 数组相关")]),a._v(" "),e("h4",{attrs:{id:"_1-判断元素是否在数组中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-判断元素是否在数组中","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 判断元素是否在数组中")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[0, 1, 2].includes(0)   // true\n")])])]),e("h4",{attrs:{id:"_2-过滤数组中元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-过滤数组中元素","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 过滤数组中元素")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 过滤掉数组中对象 dictValue 为 00 的\nlet a = list.filter(o => o.dictValue != '00')\n")])])]),e("h4",{attrs:{id:"_3-寻找数组中对象某个属性中最大值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-寻找数组中对象某个属性中最大值","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 寻找数组中对象某个属性中最大值")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// List 数组 num 对象\nvar max = List.sort(function(a, b){return a.num < b.num})[0].num\nvar max = Math.max.apply(Math, List.map(function(o) {return o.num}))\n")])])]),e("h4",{attrs:{id:"_4-寻找数组中最大值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-寻找数组中最大值","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 寻找数组中最大值")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let max = Math.max(...arr)\n")])])]),e("h3",{attrs:{id:"🎲-in-用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-in-用法","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 "),e("code",[a._v("in")]),a._v(" 用法")]),a._v(" "),e("blockquote",[e("p",[a._v("集合遍历的效率为：hash > for(;😉 > for(in)")])]),a._v(" "),e("h4",{attrs:{id:"_1-判断属性属于对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-判断属性属于对象","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 判断属性属于对象")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var map = {\n  a: 1,\n  b: 2,\n}\n\nif('a' in map){\n  return true\n} else {\n  return false\n}\n")])])]),e("h4",{attrs:{id:"_2-for-in-遍历对象属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-for-in-遍历对象属性","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. for in 遍历对象属性")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("for(var p in map){\n  console.log(p + ':' + map[p])\n}\n")])])]),e("h4",{attrs:{id:"_3-in-可以用来判断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-in-可以用来判断","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. in 可以用来判断")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if(k == 'a' || k == 'b' || k == 'c') {}\n// 可以写成\n\nif( k in {'a':'', 'b':'', 'c':''})\n\n")])])]),e("h3",{attrs:{id:"🎲-length-判断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-length-判断","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 "),e("code",[a._v("length")]),a._v(" 判断")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// old\nif(a.length > 0){\n  do()\n}\n\n// new\n!!a.length && do()\n")])])]),e("blockquote",[e("p",[a._v("不仅是 0 ，也适用于 其他 ''、null、undefined")])]),a._v(" "),e("h3",{attrs:{id:"🎲-json-转化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-json-转化","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 JSON 转化")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("JSON.stringify()  // 转字符串\nJSON.parse()      // 转JSON\n")])])]),e("h3",{attrs:{id:"🎲-获取当前url-ip-host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-获取当前url-ip-host","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 获取当前URL Ip/Host")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\x3c!-- 获取当前URL ip --\x3e\nconsole.log(window.location.host)\n")])])]),e("h3",{attrs:{id:"🎲-关闭当前页签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-关闭当前页签","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 关闭当前页签")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") != -1) {  \n  window.location.href="about:blank";  \n  window.close();  \n} else {\n  window.opener = null;  \n  window.open("", "_self");  \n  window.close();  \n}  \n')])])]),e("h3",{attrs:{id:"🎲-取余"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-取余","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 取余")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 丢弃小数部分,保留整数部分\nparseInt(7/2)　　// 3\n\n// 向上取整,有小数就整数部分加1\nMath.ceil(7/2)　　// 4\n\n// 向下取整,丢弃小数部分\nMath.floor(7/2)　　// 3\n\n// 四舍五入\nMath.round(7/2)　　// 3\n\n// 1. 取余\n7%2　　// 1\n")])])]),e("h2",{attrs:{id:"🎯-html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎯-html","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎯 HTML")]),a._v(" "),e("h3",{attrs:{id:"🎲-空-格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-空-格","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 空 格")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("&nbsp;\n")])])]),e("h2",{attrs:{id:"🎯-tool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎯-tool","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎯 Tool")]),a._v(" "),e("h3",{attrs:{id:"🎲-vscode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-vscode","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 VSCode")]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("ul",[e("li",[a._v("吹爆 "),e("code",[a._v("VSCode")]),a._v(" + "),e("code",[a._v("cascadia-code")]),a._v(" + "),e("code",[a._v("Atom One Dark")])])])]),a._v(" "),e("h3",{attrs:{id:"🎲-vuepress-自定义容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-vuepress-自定义容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 Vuepress 自定义容器")]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("This is a tip")])]),a._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("Warning")]),a._v(" "),e("p",[a._v("This is a warning")])]),a._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("Danger")]),a._v(" "),e("p",[a._v("This is a dangerous warning")])]),a._v(" "),e("h2",{attrs:{id:"🎯-element-ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎯-element-ui","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎯 Element-UI")]),a._v(" "),e("h3",{attrs:{id:"🎲-删除上传文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🎲-删除上传文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 🎲 删除上传文件")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('let fs = document.getElementsByName("file")\nif(fs.length > 0){\n  fs[0].value = null\n}\n')])])])])},[],!1,null,null,null);t.default=r.exports}}]);