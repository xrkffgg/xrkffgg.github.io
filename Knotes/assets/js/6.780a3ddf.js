(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8],{317:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},318:function(t,e,r){var n=r(24),o="["+r(317)+"]",i=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},319:function(t,e,r){var n=r(0),o=r(320);n({global:!0,forced:parseInt!=o},{parseInt:o})},320:function(t,e,r){var n=r(3),o=r(318).trim,i=r(317),s=n.parseInt,c=/^[+-]?0[Xx]/,a=8!==s(i+"08")||22!==s(i+"0x16");t.exports=a?function(t,e){var r=o(String(t));return s(r,e>>>0||(c.test(r)?16:10))}:s},321:function(t,e,r){var n=r(4),o=r(96);t.exports=function(t,e,r){var i,s;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(s=i.prototype)&&s!==r.prototype&&o(t,s),t}},322:function(t,e,r){var n=r(0),o=r(3),i=r(97),s=[].slice,c=function(t){return function(e,r){var n=arguments.length>2,o=n?s.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,r)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:c(o.setTimeout),setInterval:c(o.setInterval)})},323:function(t,e,r){"use strict";var n=r(5),o=r(3),i=r(95),s=r(10),c=r(6),a=r(17),u=r(321),l=r(44),p=r(1),f=r(29),g=r(68).f,d=r(25).f,h=r(8).f,v=r(318).trim,y=o.Number,x=y.prototype,m="Number"==a(f(x)),b=function(t){var e,r,n,o,i,s,c,a,u=l(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=v(u)).charCodeAt(0))||45===e){if(88===(r=u.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+u}for(s=(i=u.slice(2)).length,c=0;c<s;c++)if((a=i.charCodeAt(c))<48||a>o)return NaN;return parseInt(i,n)}return+u};if(i("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var I,N=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof N&&(m?p((function(){x.valueOf.call(r)})):"Number"!=a(r))?u(new y(b(e)),r,N):b(e)},k=n?g(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;k.length>C;C++)c(y,I=k[C])&&!c(N,I)&&h(N,I,d(y,I));N.prototype=x,x.constructor=N,s(o,"Number",N)}},324:function(t,e,r){"use strict";r.r(e);r(174),r(173),r(93),r(66),r(98),r(323),r(9),r(319),r(43),r(94),r(67),r(30),r(322);var n=r(31),o={name:"KProgress",props:{percent:{type:Number,default:0,required:!0,validator:function(t){return t>=0&&t<=100}},showText:{type:Boolean,default:!0},active:{type:Boolean,default:!1},bgColor:{type:String,default:"#ebeef5"},cutColor:{type:String,default:"#ebeef5"},cutWidth:{type:Number,default:1},type:{type:String,default:"line",validator:function(t){return["line","lump"].indexOf(t)>-1}},border:{type:Boolean,default:!0},status:{type:String,validator:function(t){return["success","warning","error"].indexOf(t)>-1}},lineHeight:{type:Number,default:6},color:{type:[String,Array,Function],default:""},colorFlow:{type:Boolean,default:!1},activeColor:{type:[String,Array],default:""},format:Function},data:function(){return{items:[],idNow:""}},computed:{content:function(){return"function"==typeof this.format?this.format(this.percent)||"":"".concat(this.percent,"%")}},mounted:function(){"lump"===this.type&&this.countCut(),this.idNow=this.getUUID()},methods:{getOuterStyle:function(){var t="";return t+="background: ".concat(this.bgColor,";"),t+="height: ".concat(this.lineHeight,"px;")},getLineStyle:function(){var t="";if(t+="width: ".concat(this.percent,"%;"),t+="height: ".concat(this.lineHeight,"px;margin-top: -").concat(this.lineHeight,"px;"),this.color)if("string"==typeof this.color)t+="background: ".concat(this.color,";");else if(Array.isArray(this.color)&&this.color.length<7){var e="",r=this.color.length;this.color.map((function(t,n){e+=n===r-1?t:t+", "})),t+="background: linear-gradient(to right, ".concat(e,");")}else"function"==typeof this.color&&(t+="background: ".concat(this.color(this.percent),";"));return this.border||(t+="border-radius: 0px"),this.colorFlow&&(t+="animation: kp-flow 5s linear infinite"),t},getActiveStyle:function(){var t="";return this.activeColor&&"string"==typeof this.activeColor&&(t="background: ".concat(this.activeColor,";")),t},countCut:function(){var t=this,e=this,r=document.getElementById("k-progress-line-".concat(this.idNow)),o=setInterval((function(){if(r=document.getElementById("k-progress-line-".concat(t.idNow))){clearInterval(o);var i=parseInt(r.offsetWidth/(e.lineHeight+e.cutWidth));e.items=Object(n.a)(Array(i).keys())}}),1)},getCutStyle:function(){var t="";return t+="height: ".concat(this.lineHeight,"px; margin-top: -").concat(this.lineHeight,"px;")},getCutBarStyle:function(){var t="";return t+="width: ".concat(this.lineHeight,"px;"),t+="border-right: ".concat(this.cutWidth,"px solid ").concat(this.cutColor,";")},getUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){return("x"===t?16*Math.random()|0:8).toString(16)}))}}},i=r(23),s=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"k-progress"},[r("div",{staticClass:"k-progress-outer"},[r("div",{staticClass:"k-progress-outer-bg",class:t.border?"k-progress-outer-bg-border":"",style:t.getOuterStyle()}),t._v(" "),r("div",{staticClass:"k-progress-outer-line",class:t.status?"k-progress-outer-line-"+t.status:"",style:t.getLineStyle(),attrs:{id:"k-progress-line-"+t.idNow}},[t.active?r("div",{staticClass:"k-progress-outer-line-active",style:t.getActiveStyle()}):t._e()]),t._v(" "),"lump"===t.type?r("div",{staticClass:"k-progress-outer-cut",style:t.getCutStyle()},t._l(t.items,(function(e){return r("div",{key:e,style:t.getCutBarStyle()})})),0):t._e()]),t._v(" "),t.showText?r("div",{staticClass:"k-progress-text"},[t._v("\n    "+t._s(t.content)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=s.exports},343:function(t,e,r){},375:function(t,e,r){"use strict";var n=r(343);r.n(n).a},383:function(t,e,r){"use strict";r.r(e);var n={components:{kProgress:r(324).default}},o=(r(375),r(23)),i=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[e("div",[e("k-progress",{attrs:{percent:20}}),this._v(" "),e("k-progress",{attrs:{percent:40,status:"success",type:"lump"}}),this._v(" "),e("k-progress",{attrs:{percent:60,status:"warning",type:"lump",active:"",border:!1}}),this._v(" "),e("k-progress",{attrs:{percent:80,color:["#40a9ff","#5cdbd3"],type:"lump","cut-width":2,"cut-color":"#389e0d"}})],1)])}),[],!1,null,null,null);e.default=i.exports}}]);