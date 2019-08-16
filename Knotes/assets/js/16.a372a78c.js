(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{194:function(t,a,e){"use strict";e.r(a);var r=e(0),n=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_9-vue全家桶-echarts-百度地图，搭建数据可视化系统（【续】接口篇）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-vue全家桶-echarts-百度地图，搭建数据可视化系统（【续】接口篇）","aria-hidden":"true"}},[t._v("#")]),t._v(" 9. vue全家桶+Echarts+百度地图，搭建数据可视化系统（【续】接口篇）")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("接上篇")])])]),t._v(" "),e("blockquote",[e("p",[t._v("vue全家桶+Echarts+百度地图，搭建数据可视化系统")])]),t._v(" "),e("h2",{attrs:{id:"_1-前-言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前-言","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 前 言")]),t._v(" "),e("h3",{attrs:{id:"_1-1-业务场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-业务场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 业务场景")]),t._v(" "),e("p",[t._v("实现数据监控的系统。有线图、柱状图、地图，并具有定时刷新的功能。")]),t._v(" "),e("h3",{attrs:{id:"_1-2-业务分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-业务分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 业务分析")]),t._v(" "),e("p",[t._v("上一篇分析的步骤大致有：")]),t._v(" "),e("blockquote",[e("ol",[e("li",[t._v("系统搭建"),e("code",[t._v("vue-cli")])]),t._v(" "),e("li",[e("code",[t._v("vuex")]),t._v("记录登录信息")]),t._v(" "),e("li",[e("code",[t._v("vue-router")]),t._v("路由跳转")]),t._v(" "),e("li",[t._v("3个维度的页面，提取出共用的组件")]),t._v(" "),e("li",[t._v("各个组件开发")]),t._v(" "),e("li",[t._v("调节样式，增加UI")]),t._v(" "),e("li",[t._v("加入后台接口数据")]),t._v(" "),e("li",[t._v("优化显示")]),t._v(" "),e("li",[t._v("测试")]),t._v(" "),e("li",[t._v("上线")])])]),t._v(" "),e("p",[t._v("上一篇介绍了 1-6 部分。本篇将介绍一下剩下的 7-10 部分。")]),t._v(" "),e("p",[t._v("😂😂")]),t._v(" "),e("p",[t._v("主要内容是 "),e("font",{attrs:{color:"red"}},[e("strong",[t._v("对数据的处理方式")])]),t._v(" 和 "),e("font",{attrs:{color:"red"}},[e("strong",[t._v("整体的数据逻辑")])]),t._v(" 。")],1),t._v(" "),e("p",[t._v("望各位看官多提 建议和不足 哈，也希望能本篇能给需要人带来 启发。")]),t._v(" "),e("p",[t._v("成品效果图不方便发，还是用上一篇，纯前端的效果图吧。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/09-1.png?raw=true",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"_2-正-文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-正-文","aria-hidden":"true"}},[t._v("#")]),t._v(" 2 正 文")]),t._v(" "),e("h3",{attrs:{id:"_2-1-请求处理数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-请求处理数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 请求处理数据")]),t._v(" "),e("p",[e("code",[t._v("Vue")]),t._v(" 中 与后台交互通常使用的是 "),e("code",[t._v("axios")])]),t._v(" "),e("h4",{attrs:{id:"_2-1-1-安-装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-安-装","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1.1 安 装")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm i axios\n")])])]),e("p",[t._v("也可通过cdn引用")]),t._v(" "),e("h4",{attrs:{id:"_2-1-2-定-义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-定-义","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1.2 定 义")]),t._v(" "),e("p",[t._v("新建一个"),e("code",[t._v("api.js")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//  api.js\nimport axios from 'axios'\nconst http = axios.create ({\n    baseURL : apiurl,       // 连接后端地址\n    timeout : 1000 * 30,    // 超时时间，单位为毫秒\n    headers ： {},          // 请求头，可添加'Authorization'、'X-Requested-With'、'Accept-Language'、'token'等\n})\n\n// 请求拦截\nhttp.interceptors.request.use(config =>{\n    // 可添加自己的设置，如修改参数、增加参数、修改headers\n    return config\n},error =>{\n    // 可添加报错处理\n    return Promise.reject(error)\n})\n\n// 响应拦截\nhttp.interceptors.response.use(response =>{\n    // 可添加处理逻辑\n    return response\n},error =>{\n    return Promise.reject(error)\n})\n\nexport default http\n")])])]),e("p",[t._v("同时可在main.js中添加一个自定义全局对象，或者可在单独页面中引用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// main.js\nimport http from './api.js'\n\nVue.prototype.$http = http\n")])])]),e("h4",{attrs:{id:"_2-1-3-使-用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-使-用","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1.3 使 用")]),t._v(" "),e("h5",{attrs:{id:"a-get请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-get请求","aria-hidden":"true"}},[t._v("#")]),t._v(" a. get请求")]),t._v(" "),e("p",[t._v("在页面中处理时")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("query(){\n    this.$http.get('/xxx/xxx?id='+id).then(res =>{\n        // 返回的处理\n        console.log(res)\n        // res 一般包含code data\n    },rej =>{\n        // 报错的处理\n        console.log(rej)\n    })\n}\n")])])]),e("h5",{attrs:{id:"b-post请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-post请求","aria-hidden":"true"}},[t._v("#")]),t._v(" b. post请求")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("new(){\n    this.$http.post('/xxx/xxx',{\n        id : '123',\n    }).then(res =>{\n        // 返回的处理\n        console.log(res)\n        // res 一般包含code data\n    },rej =>{\n        // 报错的处理\n        console.log(rej)\n    })\n}\n")])])]),e("h5",{attrs:{id:"c-其他请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-其他请求","aria-hidden":"true"}},[t._v("#")]),t._v(" c. 其他请求")]),t._v(" "),e("p",[t._v("经常使用到的还有")]),t._v(" "),e("p",[e("code",[t._v("put")]),t._v(" 多用于更新操作")]),t._v(" "),e("p",[e("code",[t._v("delete")]),t._v(" 多用于删除操作")]),t._v(" "),e("p",[t._v("具体要看后台提供的功能接口方式")]),t._v(" "),e("h5",{attrs:{id:"d-多个请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#d-多个请求","aria-hidden":"true"}},[t._v("#")]),t._v(" d. 多个请求")]),t._v(" "),e("p",[t._v("比如，我在进来页面后，要同时获取要2个线形图、数字、地图、柱状图、表格的数据")]),t._v(" "),e("p",[t._v("一般情况下，各个数据都是单独的接口来提供的。这样我们就需要至少6个接口。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("async query(){\n    let that = this\n    await axios.all([that.get1(), that.get2(), that.get3()]).then(axios.spread((res1, res2, res3) =>{\n        // res1 为 get1 的返回\n        // res2 为 get2 的返回\n        // res3 为 get3 的返回\n    }))\n}\n\nget1(){\n    return this.$http.get('/xxx/xxx')\n}\n\nget2(){\n    return this.$http.get('/xxx/xxx')\n}\n\nget3(){\n    return this.$http.get('/xxx/xxx')\n}\n")])])]),e("h3",{attrs:{id:"_2-2-登-录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-登-录","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 登 录")]),t._v(" "),e("p",[t._v("功能很简单，用户输入用户名、密码、验证码，点击登录。")]),t._v(" "),e("h4",{attrs:{id:"_2-2-1-获取uuid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-获取uuid","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2.1 获取uuid")]),t._v(" "),e("p",[t._v("出于对登录时效以及安全性的考虑。在登录验证时，后台根据 "),e("code",[t._v("uuid")]),t._v(" 和通过 "),e("code",[t._v("uuid")]),t._v(" 获取到的验证码进行校验。")]),t._v(" "),e("p",[t._v("这里列出一些获取 "),e("code",[t._v("uuid")]),t._v(" 的方法。来源于：网络。")]),t._v(" "),e("p",[t._v("方法一:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("getUUID () {\n    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {\n        return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)\n    })\n},\n")])])]),e("p",[t._v("方法二：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("generateUUID() { \n    var d = new Date().getTime()\n    if (window.performance && typeof window.performance.now === \"function\") { \n        d += performance.now()\n    }\n    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { \n        var r = (d + Math.random() * 16) % 16 | 0; d = Math.floor(d / 16) \n        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)\n    })\n    return uuid\n}\n")])])]),e("p",[t._v("方法三：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('guid() { \n    function S4() { \n        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);\n    } \n    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())\n}\n')])])]),e("p",[t._v("方法四：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/*\n    指定长度和基数\n*/\nfunction uuid2(len, radix) {\n    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');\n    var uuid = [],\n        i;\n    radix = radix || chars.length;\n\n    if (len) {\n        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];\n    } else {\n        var r;\n        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';\n        uuid[14] = '4';\n        for (i = 0; i < 36; i++) {\n            if (!uuid[i]) {\n                r = 0 | Math.random() * 16;\n                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];\n            }\n        }\n    }\n    return uuid.join('');\n}\n")])])]),e("h4",{attrs:{id:"_2-2-2-密码加密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-密码加密","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2.2 密码加密")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('--input \ntype="password" 可使输入框中内容隐藏\n')])])]),e("p",[t._v("传输时，我使用了md5加密")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm i -S js-md5\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import md5 from 'js-md5'\n\nlet enCode = md(code)\n")])])]),e("p",[t._v("然后就是调用后台接口将你的用户名、密码、验证码发送进行验证登录。")]),t._v(" "),e("h4",{attrs:{id:"_2-2-3-存储登录信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-存储登录信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2.3 存储登录信息")]),t._v(" "),e("p",[t._v("使用过 "),e("code",[t._v("Vue")]),t._v(" 的童鞋都清楚，使用"),e("code",[t._v("vuex")]),t._v("的时候，进行刷新页面，"),e("code",[t._v("store")]),t._v("中的数据就会重置。")]),t._v(" "),e("p",[t._v("会防止用户在刷新页面后数据无法获取的情况，一般会将数据同时储存到 "),e("code",[t._v("sessionStorage")]),t._v(" 或 "),e("code",[t._v("localStorage")])]),t._v(" "),e("p",[t._v("两者区别这里就不介绍了。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 储存session，具体放在哪个位置根据实际业务\n// 我这里放在了登录验证通过之后，当然有很多参数，可使用对象类型转成json ----JSON.stringify(info)\nsessionStorage.setItem('info', '123')\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// store.js\n\nstore = {\n    state : JSON.parse(sessionStorage.getItem('info')) || {}\n}\n")])])]),e("p",[t._v("这样页面刷新后，"),e("code",[t._v("store")]),t._v(" 会从 "),e("code",[t._v("sessionStorage")]),t._v(" 拿到我们的数据")]),t._v(" "),e("h3",{attrs:{id:"_2-3-业务页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-业务页面","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3 业务页面")]),t._v(" "),e("p",[t._v("业务页面分了3个维度。")]),t._v(" "),e("p",[t._v("这里介绍2个维度的实现。")]),t._v(" "),e("h4",{attrs:{id:"_2-3-1-整体逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-整体逻辑","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3.1 整体逻辑")]),t._v(" "),e("blockquote",[e("p",[t._v("单独的组件只处理数据的展示")]),t._v(" "),e("p",[t._v("如线形图单独写在一个组件中")]),t._v(" "),e("p",[t._v("我在需要的页面中进行引用，传入数据进行显示。")])]),t._v(" "),e("ol",[e("li",[t._v("用户登录验证后，储存业务 "),e("code",[t._v("ID")]),t._v(" 到 "),e("code",[t._v("session")]),t._v(" 中，从登录页面跳转到 层级1 页面。")]),t._v(" "),e("li",[t._v("进入 层级1 后，"),e("code",[t._v("created")]),t._v(" 中增加初始化方法。就是使用了上面介绍的 "),e("code",[t._v("axios.all")])]),t._v(" "),e("li",[t._v("拿到各数据后，分别渲染到各个组件中。")]),t._v(" "),e("li",[t._v("初始化完成后，触发定时刷新开发。")]),t._v(" "),e("li",[t._v("根据定时器的时间，触发需要刷新的功能，同上 "),e("code",[t._v("axios.all")]),t._v(" 和处理结果。")]),t._v(" "),e("li",[t._v("点击层级1中某个数据，记录层级2需要的 "),e("code",[t._v("ID2")]),t._v(" 到 "),e("code",[t._v("session")]),t._v("中，关闭定时刷新，跳转到 层级2 页面。")]),t._v(" "),e("li",[t._v("进入 层级2 后，同层级1，先进行初始化，再进行定时刷新。")]),t._v(" "),e("li",[t._v("层级3 以及 返回 的逻辑都基本和上面一样。")])]),t._v(" "),e("p",[t._v("下面介绍一些可能会有 疑问 的地方")]),t._v(" "),e("h4",{attrs:{id:"_2-3-2-层级页面举例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-层级页面举例","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3.2 层级页面举例")]),t._v(" "),e("p",[t._v("相当于介绍了一些父子组件的一些处理。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 层级1.vue\n<template>\n    <div id=\"xxx\">\n        <a-com ref=\"aRef\" :args=\"argA\"/>\n        <b-com ref=\"bRef\" :args=\"argB\"/>\n    </div>\n</template>\n\n<script>\n    import Acom from './a.vue'\n    import Bcom from './b.vue'\n    import store from './store.js'\n    \n    export default {\n        components : {\n            'a-com':Acom,\n            'b-com':Bcom,\n        },\n        \n        created(){\n            //  初始化方法\n            this.init()\n        },\n        \n        mounted(){\n            //  定时查询方法\n            this.timeq()\n        },\n        \n        data() {\n            return {\n                //  传入子组件的数据，可可以使用store\n                argA : {},\n                argB : {},\n                \n                // 定时开关\n                timimg : false,\n            }\n        },\n        \n        methods: {\n            async init(){\n                let id1 = store.state.info.id1\n                await this.query(id1)\n                this.timimg = true\n            },\n            \n            timeq(){\n                //  这里定义了 5S 刷新一次\n                let that = this\n                this.timequery = setInterval(() =>{\n                    if(timimg){\n                        that.querytime(store.state.info.id1)\n                    }\n                },5000)\n            },\n            \n            async query(id){\n                let that = this\n                await axios.all([that.get1(id), that.get2(id)]).then(axios.spread((res1, res2) =>{\n                    // 数据传入组件a，触发组件a的初始化方法\n                    that.argA = res1.data\n                    that.$refs.aRef.init();\n                    \n                    // 数据传入组件b，触发组件b的初始化方法\n                    that.argB = res2.data\n                    that.$refs.bRef.init();\n                }))\n            },\n            \n            querytime(id){\n                //  同 query()  \n            },\n            \n            get1(id){\n                return this.$http.get('xxx')    \n            },\n            \n            get2(id){\n                return this.$http.get('xxx')\n            },\n            \n            //  跳转第二层级\n            goto2(){\n                this.timing = false\n                if(this.timequery){\n                    clearInterval(this.timequery)\n                }\n                // replace、push, 也可以使用name \n                this.$router.replace('./path2')\n            },\n        }\n    }\n<\/script>\n")])])]),e("h4",{attrs:{id:"_2-3-3-组件页面举例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-组件页面举例","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3.3 组件页面举例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 如果使用了父组件向子组件传值的方式，需在子组件的 data 中 定义 props 用于接收\n\n// echarts 初始化\ninit(){\n    // 和上篇介绍 echarts 中定义差不多\n    var myChart = this.$echarts.init(document.getElementById(\"id\"),'temp')\n    let option = {}\n    option = {\n        // 吧啦吧啦 一顿操作和配置\n        // 可参考上一篇文章，更多参考 官网配置页面\n        myChart.setOption(option, true)\n    }\n}\n")])])]),e("blockquote",[e("p",[t._v("这里有一个需要注意的地方就是")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/xrkffgg/Kimg/blob/master/blog/09-2.png?raw=true",alt:""}})]),t._v(" "),e("p",[t._v("横向柱状图，最下方 是第一条，我们自定义标题的时候，就要颠倒过来使用。")]),t._v(" "),e("p",[t._v("同时会根据条数自动切换位置，我们的表头也需要根据数量进行位置调整。")]),t._v(" "),e("h3",{attrs:{id:"_2-4-测-试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-测-试","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.4 测 试")]),t._v(" "),e("p",[t._v("说实话，这方面一直都没认真写过。。。")]),t._v(" "),e("p",[t._v("一般业务变动的情况下，逻辑也会变动频繁。")]),t._v(" "),e("p",[t._v("但编写测试代码还是很重要的。")]),t._v(" "),e("p",[e("code",[t._v("Vue")]),t._v(" 官方推荐的是使用 "),e("code",[t._v("karma")]),t._v("， "),e("code",[t._v("mocha")]),t._v(" 和 "),e("code",[t._v("chai")]),t._v(" 等。")]),t._v(" "),e("p",[t._v("感兴趣的 可以 专门去了解学习下")]),t._v(" "),e("p",[t._v("这一大块不亚于 编写 业务代码 😅😅😅")]),t._v(" "),e("p",[t._v("这里不多介绍了哈。")]),t._v(" "),e("h3",{attrs:{id:"_2-5-打-包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-打-包","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.5 打 包")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm run build\n")])])]),e("p",[t._v("可在根目录中 新建 "),e("code",[t._v("vue.config.js")])]),t._v(" "),e("p",[t._v("官方文档： https://cli.vuejs.org/zh/config/")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//  官方文档： https://cli.vuejs.org/zh/config/\nmodule.exports = {\n    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',\n}\n")])])]),e("h2",{attrs:{id:"_3-后-记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-后-记","aria-hidden":"true"}},[t._v("#")]),t._v(" 3 后 记")]),t._v(" "),e("p",[e("strong",[t._v("感谢支持。若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),e("p",[e("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家")]),t._v(" 😂")])])},[],!1,null,null,null);a.default=n.exports}}]);