(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-964b0212"],{1079:function(t,e,r){"use strict";var n=r("541c");e["a"]=n["a"]},"12aa":function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r("2b0e"),o=r("b42e"),i=r("c637"),a=r("a723"),c=r("d82f"),p=r("cf75"),u=r("1947");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=Object(p["d"])(Object(c["m"])(s(s({},Object(c["k"])(u["b"],["size"])),{},{ariaRole:Object(p["c"])(a["u"],"group"),size:Object(p["c"])(a["u"]),tag:Object(p["c"])(a["u"],"div"),vertical:Object(p["c"])(a["g"],!1)})),i["k"]),v=n["default"].extend({name:i["k"],functional:!0,props:d,render:function(t,e){var r=e.props,n=e.data,i=e.children;return t(r.tag,Object(o["a"])(n,{class:l({"btn-group":!r.vertical,"btn-group-vertical":r.vertical},"btn-group-".concat(r.size),r.size),attrs:{role:r.ariaRole}}),i)}})},5431:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("button-group-basic"),r("button-group-size"),r("button-group-dropdown-support")],1)],1)},o=[],i=r("a15b"),a=r("b28b"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{title:"Basic"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBasic)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Group a series of buttons together on a single line with ")]),r("code",[t._v("<b-button-group>")]),r("span",[t._v(".")])]),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1)},p=[],u=r("12aa"),b=r("1947"),s=r("d6e4"),l=r("1079"),d=r("e009"),v='\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      First\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Second\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Third\n    </b-button>\n  </b-button-group>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',f='\n<template>\n  <div>\n    <div>\n      \x3c!-- large --\x3e\n      <b-button-group\n        size="lg"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n    <div>\n\n      \x3c!-- default --\x3e\n      <b-button-group\n        class="my-1"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n\n    <div>\n\n      \x3c!-- size --\x3e\n      <b-button-group\n        size="sm"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',m='\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Button\n    </b-button>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      right\n      variant="outline-primary"\n      text="Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      right\n      split\n      text="Split Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n  </b-button-group>\n</template>\n\n<script>\nimport {\n  BButtonGroup, BButton, BDropdown, BDropdownItem, BDropdownDivider, \n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BDropdown,\n    BDropdownItem,\n    BButton,\n    BDropdownDivider,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',O={components:{BButtonGroup:u["a"],BButton:b["a"],BCardText:s["a"],BCardCode:l["a"]},directives:{Ripple:d["a"]},data:function(){return{codeBasic:v}}},g=O,j=r("2877"),w=Object(j["a"])(g,c,p,!1,null,null,null),y=w.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{title:"Size"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeSize)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Set the size prop to ")]),r("code",[t._v("lg")]),r("span",[t._v(" or ")]),r("code",[t._v("sm")]),r("span",[t._v(" to render larger or smaller, respectively, buttons. There is no need to specify the size on the individual buttons.")])]),r("div",[r("b-button-group",{attrs:{size:"lg"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1),r("div",[r("b-button-group",{staticClass:"my-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1),r("div",[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1)],1)},B=[],_={components:{BButtonGroup:u["a"],BButton:b["a"],BCardText:s["a"],BCardCode:l["a"]},directives:{Ripple:d["a"]},data:function(){return{codeSize:f}}},x=_,P=Object(j["a"])(x,h,B,!1,null,null,null),D=P.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{staticClass:"mb-0",attrs:{title:"Dropdown menu support"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeDropdown)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Add ")]),r("code",[t._v("<b-dropdown>")]),r("span",[t._v(" menus directly inside your ")]),r("code",[t._v("<b-button-group>")]),r("span",[t._v(". Note that split dropdown menus are not supported when prop ")]),r("code",[t._v("vertical")]),r("span",[t._v(" is set.")])]),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Button ")]),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{right:"",variant:"outline-primary",text:"Menu"}},[r("b-dropdown-item",[t._v("Item 1")]),r("b-dropdown-item",[t._v("Item 2")]),r("b-dropdown-divider"),r("b-dropdown-item",[t._v("Item 3")])],1),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary",right:"",split:"",text:"Split Menu"}},[r("b-dropdown-item",[t._v("Item 1")]),r("b-dropdown-item",[t._v("Item 2")]),r("b-dropdown-divider"),r("b-dropdown-item",[t._v("Item 3")])],1)],1)],1)},z=[],C=r("dd9a"),N=r("9eaa"),G=r("f47c"),I={components:{BButtonGroup:u["a"],BDropdown:C["a"],BDropdownItem:N["a"],BButton:b["a"],BCardCode:l["a"],BDropdownDivider:G["a"],BCardText:s["a"]},directives:{Ripple:d["a"]},data:function(){return{codeDropdown:m}}},T=I,k=Object(j["a"])(T,S,z,!1,null,null,null),E=k.exports,R={components:{BRow:i["a"],BCol:a["a"],ButtonGroupBasic:y,ButtonGroupSize:D,ButtonGroupDropdownSupport:E}},F=R,M=Object(j["a"])(F,n,o,!1,null,null,null);e["default"]=M.exports},a15b:function(t,e,r){"use strict";r.d(e,"a",(function(){return y}));var n=r("b42e"),o=r("c637"),i=r("a723"),a=r("2326"),c=r("228e"),p=r("6c06"),u=r("b508"),b=r("d82f"),s=r("cf75"),l=r("fa73");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=["start","end","center"],O=Object(u["a"])((function(t,e){return e=Object(l["h"])(Object(l["g"])(e)),e?Object(l["c"])(["row-cols",t,e].filter(p["a"]).join("-")):null})),g=Object(u["a"])((function(t){return Object(l["c"])(t.replace("cols",""))})),j=[],w=function(){var t=Object(c["b"])().reduce((function(t,e){return t[Object(s["g"])(e,"cols")]=Object(s["c"])(i["p"]),t}),Object(b["c"])(null));return j=Object(b["h"])(t),Object(s["d"])(Object(b["m"])(v(v({},t),{},{alignContent:Object(s["c"])(i["u"],null,(function(t){return Object(a["a"])(Object(a["b"])(m,"between","around","stretch"),t)})),alignH:Object(s["c"])(i["u"],null,(function(t){return Object(a["a"])(Object(a["b"])(m,"between","around"),t)})),alignV:Object(s["c"])(i["u"],null,(function(t){return Object(a["a"])(Object(a["b"])(m,"baseline","stretch"),t)})),noGutters:Object(s["c"])(i["g"],!1),tag:Object(s["c"])(i["u"],"div")})),o["Ob"])},y={name:o["Ob"],functional:!0,get props(){return delete this.props,this.props=w(),this.props},render:function(t,e){var r,o=e.props,i=e.data,a=e.children,c=o.alignV,p=o.alignH,u=o.alignContent,b=[];return j.forEach((function(t){var e=O(g(t),o[t]);e&&b.push(e)})),b.push((r={"no-gutters":o.noGutters},f(r,"align-items-".concat(c),c),f(r,"justify-content-".concat(p),p),f(r,"align-content-".concat(u),u),r)),t(o.tag,Object(n["a"])(i,{staticClass:"row",class:b}),a)}}},b28b:function(t,e,r){"use strict";r.d(e,"a",(function(){return B}));var n=r("b42e"),o=r("c637"),i=r("a723"),a=r("992e"),c=r("2326"),p=r("228e"),u=r("6c06"),b=r("7b1e"),s=r("b508"),l=r("d82f"),d=r("cf75"),v=r("fa73");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=["auto","start","end","center","baseline","stretch"],j=function(t,e,r){var n=t;if(!Object(b["p"])(r)&&!1!==r)return e&&(n+="-".concat(e)),"col"!==t||""!==r&&!0!==r?(n+="-".concat(r),Object(v["c"])(n)):Object(v["c"])(n)},w=Object(s["a"])(j),y=Object(l["c"])(null),h=function(){var t=Object(p["b"])().filter(u["a"]),e=t.reduce((function(t,e){return t[e]=Object(d["c"])(i["i"]),t}),Object(l["c"])(null)),r=t.reduce((function(t,e){return t[Object(d["g"])(e,"offset")]=Object(d["c"])(i["p"]),t}),Object(l["c"])(null)),n=t.reduce((function(t,e){return t[Object(d["g"])(e,"order")]=Object(d["c"])(i["p"]),t}),Object(l["c"])(null));return y=Object(l["a"])(Object(l["c"])(null),{col:Object(l["h"])(e),offset:Object(l["h"])(r),order:Object(l["h"])(n)}),Object(d["d"])(Object(l["m"])(m(m(m(m({},e),r),n),{},{alignSelf:Object(d["c"])(i["u"],null,(function(t){return Object(c["a"])(g,t)})),col:Object(d["c"])(i["g"],!1),cols:Object(d["c"])(i["p"]),offset:Object(d["c"])(i["p"]),order:Object(d["c"])(i["p"]),tag:Object(d["c"])(i["u"],"div")})),o["y"])},B={name:o["y"],functional:!0,get props(){return delete this.props,this.props=h()},render:function(t,e){var r,o=e.props,i=e.data,c=e.children,p=o.cols,u=o.offset,b=o.order,s=o.alignSelf,l=[];for(var d in y)for(var v=y[d],f=0;f<v.length;f++){var m=w(d,v[f].replace(d,""),o[v[f]]);m&&l.push(m)}var g=l.some((function(t){return a["e"].test(t)}));return l.push((r={col:o.col||!g&&!p},O(r,"col-".concat(p),p),O(r,"offset-".concat(u),u),O(r,"order-".concat(b),b),O(r,"align-self-".concat(s),s),r)),t(o.tag,Object(n["a"])(i,{class:l}),c)}}},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("2b0e"),o=r("b42e"),i=r("c637"),a=r("a723"),c=r("cf75"),p=Object(c["d"])({textTag:Object(c["c"])(a["u"],"p")},i["u"]),u=n["default"].extend({name:i["u"],functional:!0,props:p,render:function(t,e){var r=e.props,n=e.data,i=e.children;return t(r.textTag,Object(o["a"])(n,{staticClass:"card-text"}),i)}})},f47c:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r("2b0e"),o=r("b42e"),i=r("c637"),a=r("a723"),c=r("cf75"),p=r("d82f");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=Object(c["d"])({tag:Object(c["c"])(a["u"],"hr")},i["D"]),d=n["default"].extend({name:i["D"],functional:!0,props:l,render:function(t,e){var r=e.props,n=e.data;return t("li",Object(o["a"])(Object(p["j"])(n,["attrs"]),{attrs:{role:"presentation"}}),[t(r.tag,{staticClass:"dropdown-divider",attrs:b(b({},n.attrs||{}),{},{role:"separator","aria-orientation":"horizontal"}),ref:"divider"})])}})}}]);
//# sourceMappingURL=chunk-964b0212.f3e9bdf0.js.map