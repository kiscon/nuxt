webpackJsonp([4],{"63nc":function(t,n,e){var a=e("TwMv");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e("rjj0").default)("557caade",a,!1,{sourceMap:!1})},"63sM":function(t,n,e){"use strict";var a=e("Xxa5"),r=e.n(a),s=e("exGp"),o=e.n(s),i=e("mtWM"),c=e.n(i);n.a={data:function(){return{name:"hello World"}},asyncData:function(){var t=o()(r.a.mark(function t(){var n,e;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("https://api.myjson.com/bins/wuuef");case 2:return n=t.sent,e=n.data,t.abrupt("return",{info:e});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),created:function(){console.log(this.$route.params)}}},G9nT:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("63sM"),r=e("rL97"),s=!1;var o=function(t){s||e("63nc")},i=e("VU/8")(a.a,r.a,!1,o,"data-v-3e7bfa10",null);i.options.__file="pages\\asyncData.vue",n.default=i.exports},TwMv:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},rL97:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("姓名："+t._s(t.info.name))]),e("h2",[t._v("年龄："+t._s(t.info.age))]),e("h2",[t._v("兴趣："+t._s(t.info.interest))])])};a._withStripped=!0;var r={render:a,staticRenderFns:[]};n.a=r}});