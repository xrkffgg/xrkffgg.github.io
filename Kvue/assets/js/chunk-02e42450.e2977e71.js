(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02e42450"],{"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"85f2":function(t,e,n){t.exports=n("454f")},9700:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"easeljs003"}},[n("easeljs003T")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"easeljs003"}},[n("div",{staticClass:"main-title"},[t._v("Mark Test")]),n("div",{staticClass:"main-title-time num"},[t._v("2019-08-30")]),t._m(0),n("br"),n("div",{staticClass:"main-content-box c003"},[n("canvas",{attrs:{id:"c003",width:"1250",height:"600"},on:{contextmenu:function(t){t.preventDefault()}}})])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-title-tip"},[t._v("\n    Use EaselJS"),n("br")])}];n("ac6a");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=n("85f2"),u=n.n(c);function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),u()(t,i.key,i)}}function d(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}n("f5df");var h,f,p,v,w,k,M,m,L=createjs,y=function(t){var e=t.w,n=t.h,i=t.x,r=void 0===i?0:i,a=t.y,s=void 0===a?0:a,o=t.color,c=void 0===o?"#ff0000":o,u=t.dash,l=new L.Shape;return u&&(h=l.graphics.setStrokeDash([7,3]).command),l.graphics.setStrokeStyle(2).beginStroke(c).drawRect(r,s,e,n),l},S=function(t){var e=t.x,n=t.y,i=t.t,r=t.color,a=void 0===r?"#ff0000":r,s=new L.Text(i,"bold 20px Arial",a);return s.x=e,s.y=n-5,s.textBaseline="Bottom",s.shadow=new L.Shadow("#ffffff",0,0,10),s},b=function(){function t(e,n,i,r){o(this,t),this.pos={x1:e,y1:n,x2:i,y2:r}}return d(t,[{key:"setPos",value:function(t,e){return this.pos.x2=t,this.pos.y2=e,this}},{key:"setLable",value:function(t,e,n){return this.lable=t?{id:t,text:e,color:n}:null,this}},{key:"renderTo",value:function(t,e){t.removeAllChildren();var n=this.pos||{},i=n.x1,r=n.y1,a=n.x2,s=n.y2,o=a-i,c=s-r;if(NaN!==o&&t.addChild(y({x:i,y:r,w:o,h:c,dash:!0})),this.lable){this.pos.x1=parseInt(Math.min(i,a)),this.pos.y1=parseInt(Math.min(r,s)),this.pos.x2=parseInt(Math.max(i,a)),this.pos.y2=parseInt(Math.max(r,s));var u={x:this.pos.x1,y:this.pos.y1,t:this.lable.text};this.lable.color&&(u.color=this.lable.color),t.addChild(S(u))}e.update()}}]),t}(),x={name:"easeljs003",mixins:[],components:{},props:[],created:function(){},watch:{},mounted:function(){this.init(),window.addEventListener("keyup",this.handleKeyup)},destroyed:function(){window.removeEventListener("keyup",this.handleKeyup)},data:function(){return{drawStep:0,releaseMouseMode:!0,currentMark:null,MarkList:[]}},methods:{init:function(){f=document.getElementById("c003"),p=new L.Stage(f),v=new L.Container,w=new L.Container,k=new L.Container,this.stage=p,this.newCont=v,this.rectCont=w,this.focusCont=k,p.addChild(v),p.addChild(w),M=this.Rect({w:f.width,h:2}),m=this.Rect({w:2,h:f.height}),k.addChild(M),k.addChild(m),p.addChild(k),p.enableMouseOver(20),L.Ticker.timingMode=L.Ticker.RAF,L.Ticker.on("tick",function(t){h&&h.offset--,p.update(t)}),this.focusHide(),f.onmouseover=this.focusShow,f.onmouseout=this.focusHide,this.bindEvent()},bindEvent:function(){var t=this;p.addEventListener("stagemousemove",function(e){1===t.drawStep&&t.currentMark.setPos(e.stageX,e.stageY).renderTo(v,p),M.y=e.stageY-1,m.x=e.stageX-1,p.update()}),p.addEventListener("stagemousedown",function(e){if(2===e.nativeEvent.button)return t.undoes(e.stageX,e.stageY);if(2===t.drawStep&&t.currentMark&&t.currentMark.lable&&t.currentMarkDone(),0===t.drawStep){t.drawStep=1;var n=e.stageX,i=e.stageY;t.currentMark=new b(n,i,n,i)}else t.releaseMouseMode&&1===t.drawStep&&(t.drawStep=2)},!0),p.addEventListener("stagemouseup",function(e){if(!t.releaseMouseMode){var n=t.currentMark||{},i=n.pos,r=void 0===i?{}:i;if(e.stageX==r.x1)return t.drawStep=0;1==t.drawStep&&(t.drawStep=2)}})},handleKeyup:function(){var t=event||window.event||arguments.callee.caller.arguments[0];if(t){var e=t.key;t.keyCode;this.setLable("123",e,"#ff0000")}},focusShow:function(){k.set({alpha:1}),p.update()},focusHide:function(){k.set({alpha:0}),p.update()},currentMarkDone:function(){this.currentMark&&this.currentMark.lable&&(this.drawStep=0,this.MarkList.push(this.currentMark),this.currentMark=null,this.renderMarkList(),v.removeAllChildren(),p.update())},renderMarkList:function(){w.removeAllChildren(),this.MarkList.forEach(function(t,e){var n=t.pos,i=n.x1,r=n.y1,a=n.x2,s=n.y2,o=a-i,c=s-r,u=t.lable,l=u.text,d=u.color;u.id;w.addChild(y({x:i,y:r,w:o,h:c,c:d})),w.addChild(S({x:i,y:r,t:l,c:d}))}),p.update()},Rect:function(t){var e=t.w,n=t.h,i=t.x,r=void 0===i?0:i,a=t.y,s=void 0===a?0:a,o=t.color,c=void 0===o?"#ff0000":o,u=new L.Shape;return u.graphics.beginFill(c).drawRect(r,s,e,n),u},setLable:function(t,e,n){this.currentMark&&this.currentMark.setLable(t,e,n).renderTo(this.newCont,this.stage)},undoes:function(t,e){var n=this,i=!1;if(this.MarkList.forEach(function(r,a){var s=r.pos,o=s.x1,c=s.y1,u=s.x2,l=s.y2;t>=o&&e>=c&&t<=u&&e<=l&&(i=!0,n.MarkList.splice(a,1),n.renderMarkList(),n.checkDiffer(!0))}),!i){if(!this.currentMark){if(!this.MarkList.length)return;this.currentMark=this.MarkList.pop(),this.renderMarkList()}this.currentMark.lable?(delete this.currentMark.lable,this.currentMark.renderTo(this.newCont,this.stage),this.drawStep=2):(this.currentMark=null,this.newCont.removeAllChildren(),this.stage.update(),this.drawStep=0)}}}},g=x,C=(n("b8b7"),n("2877")),T=Object(C["a"])(g,a,s,!1,null,"04c80100",null),E=T.exports,j={name:"easeljs003",mixins:[],components:{easeljs003T:E},props:[],created:function(){},watch:{},mounted:function(){},data:function(){return{}},methods:{}},A=j,D=Object(C["a"])(A,i,r,!1,null,"14b850c4",null);e["default"]=D.exports},ac6a:function(t,e,n){for(var i=n("cadf"),r=n("0d58"),a=n("2aba"),s=n("7726"),o=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),d=u("toStringTag"),h=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=r(f),v=0;v<p.length;v++){var w,k=p[v],M=f[k],m=s[k],L=m&&m.prototype;if(L&&(L[l]||o(L,l,h),L[d]||o(L,d,k),c[k]=h,M))for(w in i)L[w]||a(L,w,i[w],!0)}},b735:function(t,e,n){},b8b7:function(t,e,n){"use strict";var i=n("b735"),r=n.n(i);r.a}}]);