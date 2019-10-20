(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["graceUIForUniApp/components/graceHeader"],{"3c6f":function(t,e,n){"use strict";n.r(e);var a=n("81a9"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},"5adf":function(t,e,n){"use strict";n.r(e);var a=n("92dc"),u=n("3c6f");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("5c80");var i=n("2877"),o=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"5c80":function(t,e,n){"use strict";var a=n("f975"),u=n.n(a);u.a},"81a9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{background:{type:String,default:"#F8F8F8"},height:{type:Number,default:90},haveStatusBar:{type:Boolean,default:!0},isSeize:{type:Boolean,default:!0}},data:function(){return{top:0,paddingTop:0,BoundingWidth:"0px"}},created:function(){if(this.haveStatusBar){var e=t.getSystemInfoSync();this.top=e.statusBarHeight,this.paddingTop=this.top+t.upx2px(this.height)}}};e.default=n}).call(this,n("6e42")["default"])},"92dc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},f975:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'graceUIForUniApp/components/graceHeader-create-component',
    {
        'graceUIForUniApp/components/graceHeader-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("5adf"))
        })
    },
    [['graceUIForUniApp/components/graceHeader-create-component']]
]);                
