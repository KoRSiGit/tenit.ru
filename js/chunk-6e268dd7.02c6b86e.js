(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e268dd7"],{1079:function(e,t,r){"use strict";var n=r("541c");t["a"]=n["a"]},"3a94":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("breadcrumb-default"),r("breadcrumb-separator"),r("breadcrumb-slot"),r("breadcrumb-alignment")],1)],1)},c=[],a=r("a15b"),b=r("b28b"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDefault)+" ")]},proxy:!0}])},[r("b-breadcrumb",{attrs:{items:e.items}})],1)},s=[],u=r("e235"),i=r("1079"),d="\n<template>\n <b-breadcrumb\n    :items=\"items\"\n  />\n</template>\n\n<script>\nimport { BBreadcrumb } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BBreadcrumb,\n  },\n data() {\n    return {\n      codeDefault,\n      items: [\n        {\n          text: 'Dashboard',\n        },\n        {\n          text: 'Library',\n        },\n        {\n          text: 'Data',\n          active: true,\n        },\n      ],\n    }\n  },\n}\n<\/script>\n",l='\n<template>\n   <div id="component-breadcrumbs">\n    <b-breadcrumb\n      class="breadcrumb-slash"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-dots"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-dashes"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-pipes"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-chevron mb-0"\n      :items="items"\n    />\n  </div>\n</template>\n\n<script>\nimport { BBreadcrumb } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBreadcrumb,\n  },\n  data() {\n    return {\n      items: [\n        {\n          text: \'Home\',\n        },\n        {\n          text: \'Library\',\n        },\n        {\n          text: \'Data\',\n          active: true,\n        },\n      ],\n    }\n  },\n}\n<\/script>\n',m='\n<template>\n  <b-breadcrumb class="breadcrumb-slash">\n    <b-breadcrumb-item href="#home">\n      Home\n    </b-breadcrumb-item>\n    <b-breadcrumb-item href="#foo">\n      Chat\n    </b-breadcrumb-item>\n    <b-breadcrumb-item active>\n      Infos\n    </b-breadcrumb-item>\n  </b-breadcrumb>\n</template>\n\n<script>\nimport { BBreadcrumb, BBreadcrumbItem } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBreadcrumb,\n    BBreadcrumbItem,\n  },\n}\n<\/script>\n',p='\n<template>\n  <div id="breadcrumb-alignment">\n    <div class="d-flex justify-content-start breadcrumb-wrapper">\n      <b-breadcrumb :items="items" />\n    </div>\n    <div class="d-flex justify-content-center breadcrumb-wrapper my-1">\n      <b-breadcrumb :items="items" />\n    </div>\n    <div class="d-flex justify-content-end breadcrumb-wrapper pr-1">\n      <b-breadcrumb :items="items" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BBreadcrumb} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBreadcrumb,\n  },\n  data() {\n    return {\n      items: [\n        {\n          text: \'Dashboard\',\n        },\n        {\n          text: \'Library\',\n        },\n        {\n          text: \'Data\',\n          active: true,\n        },\n      ],\n    }\n  },\n}\n<\/script>\n',f={components:{BCardCode:i["a"],BBreadcrumb:u["a"]},data:function(){return{codeDefault:d,items:[{text:"Dashboard"},{text:"Library"},{text:"Data",active:!0}]}}},O=f,j=r("2877"),v=Object(j["a"])(O,o,s,!1,null,null,null),h=v.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Separator"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSeparator)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing ")]),r("code",[e._v("$breadcrumb-divider")]),r("span",[e._v(" variable value in scss")])]),r("div",{attrs:{id:"component-breadcrumbs"}},[r("b-breadcrumb",{staticClass:"breadcrumb-slash",attrs:{items:e.items}}),r("b-breadcrumb",{staticClass:"breadcrumb-dots",attrs:{items:e.items}}),r("b-breadcrumb",{staticClass:"breadcrumb-dashes",attrs:{items:e.items}}),r("b-breadcrumb",{staticClass:"breadcrumb-pipes",attrs:{items:e.items}}),r("b-breadcrumb",{staticClass:"breadcrumb-chevron mb-0",attrs:{items:e.items}})],1)],1)},g=[],x=r("d6e4"),w={components:{BCardCode:i["a"],BBreadcrumb:u["a"],BCardText:x["a"]},data:function(){return{codeSeparator:l,items:[{text:"Home"},{text:"Library"},{text:"Data",active:!0}]}}},B=w,_=Object(j["a"])(B,y,g,!1,null,null,null),P=_.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card-code",{attrs:{title:"Slot"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSlot)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("You may also manually place individual ")]),r("code",[e._v("<b-breadcrumb-item>")]),r("span",[e._v(" child components in the default slot of the ")]),r("code",[e._v("<b-breadcrumb>")]),r("span",[e._v(" component, as an alternative to using the ")]),r("code",[e._v("items")]),r("span",[e._v(" prop, for greater control over the content of each item:")])]),r("b-breadcrumb",{staticClass:"breadcrumb-slash"},[r("b-breadcrumb-item",{attrs:{href:"#home"}},[e._v(" Home ")]),r("b-breadcrumb-item",{attrs:{href:"#foo"}},[e._v(" Chat ")]),r("b-breadcrumb-item",{attrs:{active:""}},[e._v(" Infos ")])],1)],1)],1)},D=[],S=r("a148"),E={components:{BCardCode:i["a"],BBreadcrumb:u["a"],BBreadcrumbItem:S["a"],BCardText:x["a"]},data:function(){return{codeSlot:m}}},k=E,T=Object(j["a"])(k,C,D,!1,null,null,null),H=T.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card-code",{attrs:{title:"Alignment"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAlignment)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Use class ")]),r("code",[e._v(".justify-content-{direction}")]),r("span",[e._v(" to align breadcrumb to center.")])]),r("div",{attrs:{id:"breadcrumb-alignment"}},[r("div",{staticClass:"d-flex justify-content-start breadcrumb-wrapper"},[r("b-breadcrumb",{attrs:{items:e.items}})],1),r("div",{staticClass:"d-flex justify-content-center breadcrumb-wrapper my-1"},[r("b-breadcrumb",{attrs:{items:e.items}})],1),r("div",{staticClass:"d-flex justify-content-end breadcrumb-wrapper pr-1"},[r("b-breadcrumb",{attrs:{items:e.items}})],1)])],1)],1)},$=[],I={components:{BCardCode:i["a"],BBreadcrumb:u["a"],BCardText:x["a"]},data:function(){return{codeAlignment:p,items:[{text:"Dashboard"},{text:"Library"},{text:"Data",active:!0}]}}},A=I,G=Object(j["a"])(A,L,$,!1,null,null,null),J=G.exports,V={components:{BRow:a["a"],BCol:b["a"],BreadcrumbDefault:h,BreadcrumbSeparator:P,BreadcrumbSlot:H,BreadcrumbAlignment:J}},Y=V,R=Object(j["a"])(Y,n,c,!1,null,null,null);t["default"]=R.exports},a148:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var n=r("2b0e"),c=r("b42e"),a=r("c637"),b=r("cf75"),o=r("a723"),s=r("8690"),u=r("d82f"),i=r("aa59");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=Object(b["d"])(Object(u["m"])(l(l({},Object(u["j"])(i["b"],["event","routerTag"])),{},{ariaCurrent:Object(b["c"])(o["u"],"location"),html:Object(b["c"])(o["u"]),text:Object(b["c"])(o["u"])})),a["h"]),f=n["default"].extend({name:a["h"],functional:!0,props:p,render:function(e,t){var r=t.props,n=t.data,a=t.children,o=r.active,u=o?"span":i["a"],d={attrs:{"aria-current":o?r.ariaCurrent:null},props:Object(b["e"])(p,r)};return a||(d.domProps=Object(s["a"])(r.html,r.text)),e(u,Object(c["a"])(n,d),a)}}),O=Object(b["d"])(p,a["g"]),j=n["default"].extend({name:a["g"],functional:!0,props:O,render:function(e,t){var r=t.props,n=t.data,a=t.children;return e("li",Object(c["a"])(n,{staticClass:"breadcrumb-item",class:{active:r.active}}),[e(f,{props:r},a)])}})},a15b:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r("b42e"),c=r("c637"),a=r("a723"),b=r("2326"),o=r("228e"),s=r("6c06"),u=r("b508"),i=r("d82f"),d=r("cf75"),l=r("fa73");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=["start","end","center"],j=Object(u["a"])((function(e,t){return t=Object(l["h"])(Object(l["g"])(t)),t?Object(l["c"])(["row-cols",e,t].filter(s["a"]).join("-")):null})),v=Object(u["a"])((function(e){return Object(l["c"])(e.replace("cols",""))})),h=[],y=function(){var e=Object(o["b"])().reduce((function(e,t){return e[Object(d["g"])(t,"cols")]=Object(d["c"])(a["p"]),e}),Object(i["c"])(null));return h=Object(i["h"])(e),Object(d["d"])(Object(i["m"])(p(p({},e),{},{alignContent:Object(d["c"])(a["u"],null,(function(e){return Object(b["a"])(Object(b["b"])(O,"between","around","stretch"),e)})),alignH:Object(d["c"])(a["u"],null,(function(e){return Object(b["a"])(Object(b["b"])(O,"between","around"),e)})),alignV:Object(d["c"])(a["u"],null,(function(e){return Object(b["a"])(Object(b["b"])(O,"baseline","stretch"),e)})),noGutters:Object(d["c"])(a["g"],!1),tag:Object(d["c"])(a["u"],"div")})),c["Ob"])},g={name:c["Ob"],functional:!0,get props(){return delete this.props,this.props=y(),this.props},render:function(e,t){var r,c=t.props,a=t.data,b=t.children,o=c.alignV,s=c.alignH,u=c.alignContent,i=[];return h.forEach((function(e){var t=j(v(e),c[e]);t&&i.push(t)})),i.push((r={"no-gutters":c.noGutters},f(r,"align-items-".concat(o),o),f(r,"justify-content-".concat(s),s),f(r,"align-content-".concat(u),u),r)),e(c.tag,Object(n["a"])(a,{staticClass:"row",class:i}),b)}}},b28b:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r("b42e"),c=r("c637"),a=r("a723"),b=r("992e"),o=r("2326"),s=r("228e"),u=r("6c06"),i=r("7b1e"),d=r("b508"),l=r("d82f"),m=r("cf75"),p=r("fa73");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=["auto","start","end","center","baseline","stretch"],h=function(e,t,r){var n=e;if(!Object(i["p"])(r)&&!1!==r)return t&&(n+="-".concat(t)),"col"!==e||""!==r&&!0!==r?(n+="-".concat(r),Object(p["c"])(n)):Object(p["c"])(n)},y=Object(d["a"])(h),g=Object(l["c"])(null),x=function(){var e=Object(s["b"])().filter(u["a"]),t=e.reduce((function(e,t){return e[t]=Object(m["c"])(a["i"]),e}),Object(l["c"])(null)),r=e.reduce((function(e,t){return e[Object(m["g"])(t,"offset")]=Object(m["c"])(a["p"]),e}),Object(l["c"])(null)),n=e.reduce((function(e,t){return e[Object(m["g"])(t,"order")]=Object(m["c"])(a["p"]),e}),Object(l["c"])(null));return g=Object(l["a"])(Object(l["c"])(null),{col:Object(l["h"])(t),offset:Object(l["h"])(r),order:Object(l["h"])(n)}),Object(m["d"])(Object(l["m"])(O(O(O(O({},t),r),n),{},{alignSelf:Object(m["c"])(a["u"],null,(function(e){return Object(o["a"])(v,e)})),col:Object(m["c"])(a["g"],!1),cols:Object(m["c"])(a["p"]),offset:Object(m["c"])(a["p"]),order:Object(m["c"])(a["p"]),tag:Object(m["c"])(a["u"],"div")})),c["y"])},w={name:c["y"],functional:!0,get props(){return delete this.props,this.props=x()},render:function(e,t){var r,c=t.props,a=t.data,o=t.children,s=c.cols,u=c.offset,i=c.order,d=c.alignSelf,l=[];for(var m in g)for(var p=g[m],f=0;f<p.length;f++){var O=y(m,p[f].replace(m,""),c[p[f]]);O&&l.push(O)}var v=l.some((function(e){return b["e"].test(e)}));return l.push((r={col:c.col||!v&&!s},j(r,"col-".concat(s),s),j(r,"offset-".concat(u),u),j(r,"order-".concat(i),i),j(r,"align-self-".concat(d),d),r)),e(c.tag,Object(n["a"])(a,{class:l}),o)}}},d6e4:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("2b0e"),c=r("b42e"),a=r("c637"),b=r("a723"),o=r("cf75"),s=Object(o["d"])({textTag:Object(o["c"])(b["u"],"p")},a["u"]),u=n["default"].extend({name:a["u"],functional:!0,props:s,render:function(e,t){var r=t.props,n=t.data,a=t.children;return e(r.textTag,Object(c["a"])(n,{staticClass:"card-text"}),a)}})},e235:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r("2b0e"),c=r("b42e"),a=r("c637"),b=r("a723"),o=r("7b1e"),s=r("cf75"),u=r("fa73"),i=r("a148");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=Object(s["d"])({items:Object(s["c"])(b["b"])},a["f"]),f=n["default"].extend({name:a["f"],functional:!0,props:p,render:function(e,t){var r=t.props,n=t.data,a=t.children,b=r.items,s=a;if(Object(o["a"])(b)){var d=!1;s=b.map((function(t,r){Object(o["j"])(t)||(t={text:Object(u["g"])(t)});var n=t,c=n.active;return c&&(d=!0),c||d||(c=r+1===b.length),e(i["a"],{props:l(l({},t),{},{active:c})})}))}return e("ol",Object(c["a"])(n,{staticClass:"breadcrumb"}),s)}})}}]);
//# sourceMappingURL=chunk-6e268dd7.02c6b86e.js.map