(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{198:function(t,a,e){"use strict";e.r(a);var r=e(0),_=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_11-element-ui-简单实现表格滚动（附演示及源码）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-element-ui-简单实现表格滚动（附演示及源码）","aria-hidden":"true"}},[t._v("#")]),t._v(" 11. Element-ui 简单实现表格滚动（附演示及源码）")]),t._v(" "),e("h2",{attrs:{id:"_1-前-言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前-言","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 前 言")]),t._v(" "),e("h3",{attrs:{id:"_1-1-预览图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-预览图","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 预览图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/11-1.gif?raw=true",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_1-2-介-绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-介-绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 介 绍")]),t._v(" "),e("div",{staticClass:"language-! extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("功能很简单，不确定方法有没有问题，所以写出来让大家来检查检查\n")])])]),e("h3",{attrs:{id:"_1-3-使用技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-使用技术","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3 使用技术")]),t._v(" "),e("ul",[e("li",[t._v("Vue")]),t._v(" "),e("li",[t._v("Element-ui")])]),t._v(" "),e("h2",{attrs:{id:"_2-实-现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-实-现","aria-hidden":"true"}},[t._v("#")]),t._v(" 2 实 现")]),t._v(" "),e("h3",{attrs:{id:"_2-1-查看ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-查看ui","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 查看UI")]),t._v(" "),e("p",[t._v("这里是直接使用 UI 里的表格组件，F12 查看")]),t._v(" "),e("p",[t._v("可以明显看出：")]),t._v(" "),e("ul",[e("li",[t._v("表格头 "),e("code",[t._v('class="el-table__header-wrapper"')])]),t._v(" "),e("li",[t._v("表格体 "),e("code",[t._v('class="el-table__body-wrapper"')])]),t._v(" "),e("li",[t._v("表格高度默认 "),e("code",[t._v("48px")])])]),t._v(" "),e("h3",{attrs:{id:"_2-2-滚-动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-滚-动","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 滚 动")]),t._v(" "),e("p",[t._v("我们想要的效果是向下滚动，即向下移动 "),e("code",[t._v("48px")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//  获取表格体\nlet t = document.getElementsByClassName('el-table__body-wrapper')\nsetTimeout(() =>{\n    t[0].style.transition = 'all .5s'\n    t[0].style.marginTop = '48px'\n},500)\nsetTimeout(() =>{\n    //  加入数据\n    t[0].style.transition = 'all 0s ease 0s'\n    t[0].style.marginTop = '0'\n},1000)\n")])])]),e("ul",[e("li",[t._v("设定动作执行时间为 "),e("code",[t._v("500ms")])]),t._v(" "),e("li",[t._v("完成动作后，恢复表格样式")])]),t._v(" "),e("h3",{attrs:{id:"_2-3-操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3 操作")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("操作")]),t._v(" "),e("th",[t._v("功能")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("开始")]),t._v(" "),e("td",[t._v("每隔一秒触发向下滚动的动作")])]),t._v(" "),e("tr",[e("td",[t._v("暂停")]),t._v(" "),e("td",[t._v("清除计时器")])]),t._v(" "),e("tr",[e("td",[t._v("重置")]),t._v(" "),e("td",[t._v("清理计时器，清理数据")])])])]),t._v(" "),e("h2",{attrs:{id:"_3-后-记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-后-记","aria-hidden":"true"}},[t._v("#")]),t._v(" 3 后 记")]),t._v(" "),e("p",[e("strong",[t._v("感谢支持。若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),e("p",[e("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家")]),t._v(" 😂")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("欢迎关注 我的：")]),t._v(" "),e("a",{attrs:{href:"https://github.com/xrkffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘 金"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[t._v("简 书"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"_3-1-演示地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-演示地址","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1 演示地址")]),t._v(" "),e("p",[t._v("https://xrkffgg.github.io/Kvue/#/UI/001")]),t._v(" "),e("h3",{attrs:{id:"_3-2-源-码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-源-码","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2 源 码")]),t._v(" "),e("p",[t._v("https://github.com/xrkffgg/Kvue/blob/master/src/components/uiCom/001.vue")])])},[],!1,null,null,null);a.default=_.exports}}]);