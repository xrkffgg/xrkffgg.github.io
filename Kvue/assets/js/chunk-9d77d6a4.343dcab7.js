(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d77d6a4"],{"09d4":function(t,n,a){"use strict";var e=a("cf56"),r=a.n(e);r.a},"1af6":function(t,n,a){var e=a("63b6");e(e.S,"Array",{isArray:a("9003")})},"20fd":function(t,n,a){"use strict";var e=a("d9f6"),r=a("aebd");t.exports=function(t,n,a){n in t?e.f(t,n,r(0,a)):t[n]=a}},3702:function(t,n,a){var e=a("481b"),r=a("5168")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[r]===t)}},"40c3":function(t,n,a){var e=a("6b4c"),r=a("5168")("toStringTag"),i="Arguments"==e(function(){return arguments}()),o=function(t,n){try{return t[n]}catch(a){}};t.exports=function(t){var n,a,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(a=o(n=Object(t),r))?a:i?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},"4ee1":function(t,n,a){var e=a("5168")("iterator"),r=!1;try{var i=[7][e]();i["return"]=function(){r=!0},Array.from(i,function(){throw 2})}catch(o){}t.exports=function(t,n){if(!n&&!r)return!1;var a=!1;try{var i=[7],c=i[e]();c.next=function(){return{done:a=!0}},i[e]=function(){return c},t(i)}catch(o){}return a}},"549b":function(t,n,a){"use strict";var e=a("d864"),r=a("63b6"),i=a("241e"),o=a("b0dc"),c=a("3702"),u=a("b447"),s=a("20fd"),f=a("7cd6");r(r.S+r.F*!a("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var n,a,r,d,v=i(t),l="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,p=void 0!==g,m=0,y=f(v);if(p&&(g=e(g,h>2?arguments[2]:void 0,2)),void 0==y||l==Array&&c(y))for(n=u(v.length),a=new l(n);n>m;m++)s(a,m,p?g(v[m],m):v[m]);else for(d=y.call(v),a=new l;!(r=d.next()).done;m++)s(a,m,p?o(d,g,[r.value,m],!0):r.value);return a.length=m,a}})},"54a1":function(t,n,a){a("6c1c"),a("1654"),t.exports=a("95d5")},"774e":function(t,n,a){t.exports=a("d2d5")},"7cd6":function(t,n,a){var e=a("40c3"),r=a("5168")("iterator"),i=a("481b");t.exports=a("584a").getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||i[e(t)]}},8028:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"canvas001"}},[a("div",{staticClass:"main-title"},[t._v("canvas picture")]),a("div",{staticClass:"main-title-time num"},[t._v("2019-08-15")]),a("div",{staticClass:"box"},[a("canvas",{attrs:{id:"canvas01",width:"400",height:"400"}}),a("div",{staticClass:"btn"},[a("el-button",{staticStyle:{"margin-left":"50px"},attrs:{type:t.ifcolor?"primary":"info"},on:{click:t.changeGray}},[t._v("\n      "+t._s(t.ifcolor?"彩 色":"黑 白")+"\n    ")]),a("el-button",{attrs:{type:t.ifRev?"danger":""},on:{click:t.changeRev}},[t._v("\n      反 向\n    ")])],1)])])},r=[],i=a("a745"),o=a.n(i);function c(t){if(o()(t)){for(var n=0,a=new Array(t.length);n<t.length;n++)a[n]=t[n];return a}}var u=a("774e"),s=a.n(u),f=a("c8bb"),d=a.n(f);function v(t){if(d()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){return c(t)||v(t)||l()}var g={name:"canvas001",mixins:[],components:{},props:[],created:function(){},watch:{},mounted:function(){this.drawCanvas()},data:function(){return{ifcolor:!0,ifRev:!1,url:"https://avatars0.githubusercontent.com/u/29775873?s=460&v=4",imagePixels:[]}},methods:{drawCanvas:function(){var t=this,n=document.getElementById("canvas01"),a=n.getContext("2d"),e=new Image;e.crossOrigin="anonymous",e.src=this.url+"?time="+(new Date).getTime(),e.onload=function(){e.complete&&(a.drawImage(e,0,0,e.width,e.height),setTimeout(function(){t.imagePixels=h(a.getImageData(0,0,n.width,n.height).data)},1))}},changeGray:function(){var t=document.getElementById("canvas01"),n=t.getContext("2d"),a=n.getImageData(0,0,t.width,t.height),e=a.data;if(this.ifcolor){for(var r=0;r<e.length;r+=4){var i=e[r],o=e[r+1],c=e[r+2],u=parseInt((i+o+c)/3);a.data[r]=u,a.data[r+1]=u,a.data[r+2]=u}n.putImageData(a,0,0)}else{for(var s=h(this.imagePixels),f=0;f<e.length;f+=4){var d=s[f],v=s[f+1],l=s[f+2];this.ifRev&&(d=255-d,v=255-v,l=255-l),a.data[f]=d,a.data[f+1]=v,a.data[f+2]=l}n.putImageData(a,0,0)}this.ifcolor=!this.ifcolor},changeRev:function(){this.ifRev=!this.ifRev;for(var t=document.getElementById("canvas01"),n=t.getContext("2d"),a=n.getImageData(0,0,t.width,t.height),e=a.data,r=0;r<e.length;r+=4){var i=e[r],o=e[r+1],c=e[r+2];a.data[r]=255-i,a.data[r+1]=255-o,a.data[r+2]=255-c}n.putImageData(a,0,0)}}},p=g,m=(a("09d4"),a("2877")),y=Object(m["a"])(p,e,r,!1,null,"a4290c9a",null);n["default"]=y.exports},"95d5":function(t,n,a){var e=a("40c3"),r=a("5168")("iterator"),i=a("481b");t.exports=a("584a").isIterable=function(t){var n=Object(t);return void 0!==n[r]||"@@iterator"in n||i.hasOwnProperty(e(n))}},a745:function(t,n,a){t.exports=a("f410")},b0dc:function(t,n,a){var e=a("e4ae");t.exports=function(t,n,a,r){try{return r?n(e(a)[0],a[1]):n(a)}catch(o){var i=t["return"];throw void 0!==i&&e(i.call(t)),o}}},c8bb:function(t,n,a){t.exports=a("54a1")},cf56:function(t,n,a){},d2d5:function(t,n,a){a("1654"),a("549b"),t.exports=a("584a").Array.from},f410:function(t,n,a){a("1af6"),t.exports=a("584a").Array.isArray}}]);