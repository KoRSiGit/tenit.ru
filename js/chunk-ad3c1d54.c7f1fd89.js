(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad3c1d54"],{1079:function(t,e,n){"use strict";var a=n("541c");e["a"]=a["a"]},4711:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n("2b0e"),r=n("b42e"),i=n("c637"),o=n("a723"),c=n("d82f"),s=n("cf75"),l=n("aa59");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(s["d"])(Object(c["m"])(u(u({},Object(c["j"])(l["b"],["event","routerTag"])),{},{linkAttrs:Object(s["c"])(o["q"],{}),linkClasses:Object(s["c"])(o["e"])})),i["Db"]),p=a["default"].extend({name:i["Db"],functional:!0,props:v,render:function(t,e){var n=e.props,a=e.data,i=e.listeners,o=e.children;return t("li",Object(r["a"])(Object(c["j"])(a,["on"]),{staticClass:"nav-item"}),[t(l["a"],{staticClass:"nav-link",class:n.linkClasses,attrs:n.linkAttrs,props:n,on:i},o)])}})},"59e4f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{md:"6"}},[n("nav-basic")],1),n("b-col",{attrs:{md:"6"}},[n("nav-border")],1),n("b-col",{attrs:{md:"6"}},[n("nav-fill")],1),n("b-col",{attrs:{md:"6"}},[n("nav-justified")],1),n("b-col",{attrs:{md:"6"}},[n("nav-alignment")],1),n("b-col",{attrs:{md:"6"}},[n("nav-dropdown")],1),n("b-col",{attrs:{md:"6"}},[n("nav-vertical")],1),n("b-col",{attrs:{md:"6"}},[n("nav-vertical-border")],1),n("b-col",{attrs:{md:"6"}},[n("nav-square-border")],1),n("b-col",{attrs:{md:"6"}},[n("nav-divider")],1)],1)},r=[],i=n("a15b"),o=n("b28b"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Base Nav"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBasic)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Navigation available in Bootstrap share general markup and styles, from the base ")]),n("code",[t._v("<b-nav>")]),n("span",[t._v(" class to the ")]),n("code",[t._v("active")]),n("span",[t._v(" and ")]),n("code",[t._v("disabled")]),n("span",[t._v(" states.")])]),n("b-nav",[n("b-nav-item",{attrs:{active:""}},[t._v(" Active ")]),n("b-nav-item",[t._v("Link")]),n("b-nav-item",[t._v("Another Link")]),n("b-nav-item",{attrs:{disabled:""}},[t._v(" Disabled ")])],1)],1)},s=[],l=n("1079"),d=n("59fb"),u=n("4711"),b=n("d6e4"),v="\n<template>\n  <b-nav>\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Another Link</b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n",p="\n<template>\n  <b-nav class=\"wrap-border\">\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Another Link</b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n",m='\n<template>\n  <div>\n    <div class="d-flex mb-2">\n      <b-form-radio\n        v-model="selected"\n        name="some-radios"\n        value="left"\n        plain\n        class="vs-radio-con"\n      >\n        <span class="vs-radio">\n          <span class="vs-radio--border" />\n          <span class="vs-radio--circle" />\n        </span>\n        <span class="ml-50 mr-1">Left</span>\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="some-radios"\n        value="center"\n        plain\n        class="vs-radio-con"\n      >\n        <span class="vs-radio">\n          <span class="vs-radio--border" />\n          <span class="vs-radio--circle" />\n        </span>\n        <span class="ml-50 mr-1">Center</span>\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="some-radios"\n        value="right"\n        plain\n        class="vs-radio-con"\n      >\n        <span class="vs-radio">\n          <span class="vs-radio--border" />\n          <span class="vs-radio--circle" />\n        </span>\n        <span class="ml-50 mr-1">Right</span>\n      </b-form-radio>\n    </div>\n    <b-nav :align="selected">\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Link with a long name </b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport {BNav, BNavItem, BFormRadio} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n    BFormRadio,\n  },\n  data: () => ({\n    selected: \'center\',\n  }),\n}\n<\/script>\n',f="\n<template>\n  <div>\n    <b-nav\n      vertical\n      class=\"wrap-border\"\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-dropdown-divider />\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem, BDropdownDivider } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n    BDropdownDivider,\n  },\n}\n<\/script>\n",h='\n<template>\n  <div>\n    <b-nav>\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item-dropdown\n        id="my-nav-dropdown"\n        text="Dropdown"\n        toggle-class="nav-link-custom"\n        right\n      >\n        <b-dropdown-item>One</b-dropdown-item>\n        <b-dropdown-item>Two</b-dropdown-item>\n        <b-dropdown-divider />\n        <b-dropdown-item>Three</b-dropdown-item>\n      </b-nav-item-dropdown>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport {\n  BNav, BNavItem, BNavItemDropdown, BDropdownDivider, BDropdownItem,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n    BNavItemDropdown,\n    BDropdownDivider,\n    BDropdownItem,\n  },\n}\n<\/script>\n',O="\n<template>\n  <b-nav fill>\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Link with a long name </b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n",j="\n<template>\n  <b-nav justified>\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Link name </b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n",g="\n<template>\n  <div>\n    <b-nav\n      vertical\n      class=\"wrap-border square-border\"\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n",w="\n<template>\n  <div>\n    <b-nav\n      vertical\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n",y="\n<template>\n  <div>\n    <b-nav\n      vertical\n      class=\"wrap-border\"\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n",_={components:{BCardCode:l["a"],BNav:d["a"],BNavItem:u["a"],BCardText:b["a"]},data:function(){return{codeBasic:v}}},B=_,k=n("2877"),C=Object(k["a"])(B,c,s,!1,null,null,null),N=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"With Border"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBorder)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Use Class ")]),n("code",[t._v(".wrap-border")]),n("span",[t._v(" with your ")]),n("code",[t._v("<b-nav>")]),n("span",[t._v(" tag to wrap your nav with a border.")])]),n("b-nav",{staticClass:"wrap-border"},[n("b-nav-item",{attrs:{active:""}},[t._v(" Active ")]),n("b-nav-item",[t._v("Link")]),n("b-nav-item",[t._v("Another Link")]),n("b-nav-item",{attrs:{disabled:""}},[t._v(" Disabled ")])],1)],1)},D=[],P={components:{BCardCode:l["a"],BNav:d["a"],BNavItem:u["a"],BCardText:b["a"]},data:function(){return{codeBorder:p}}},A=P,L=Object(k["a"])(A,x,D,!1,null,null,null),S=L.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Fill Nav"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeFill)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("To proportionately fill all available space with your ")]),n("code",[t._v("<b-nav-item>")]),n("span",[t._v(" components, set the ")]),n("code",[t._v("fill")]),n("span",[t._v(" prop.")]),n("span",[t._v("Notice that all horizontal space is occupied, but not every nav item has the same width.")])]),n("b-nav",{attrs:{fill:""}},[n("b-nav-item",{attrs:{active:""}},[t._v(" Active ")]),n("b-nav-item",[t._v("Link")]),n("b-nav-item",[t._v("Link with a long name ")]),n("b-nav-item",{attrs:{disabled:""}},[t._v(" Disabled ")])],1)],1)},G=[],E={components:{BCardCode:l["a"],BNav:d["a"],BCardText:b["a"],BNavItem:u["a"]},data:function(){return{codeFill:O}}},T=E,$=Object(k["a"])(T,I,G,!1,null,null,null),z=$.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Justified Nav"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeJustified)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("For equal-width elements, set the ")]),n("code",[t._v("justified")]),n("span",[t._v(" prop instead. All horizontal space will be occupied by nav links, but unlike ")]),n("code",[t._v("fill")]),n("span",[t._v(" above, every ")]),n("code",[t._v("<b-nav-item>")]),n("span",[t._v(" will be the same width.")])]),n("b-nav",{attrs:{justified:""}},[n("b-nav-item",{attrs:{active:""}},[t._v(" Active ")]),n("b-nav-item",[t._v("Link")]),n("b-nav-item",[t._v("Link name ")]),n("b-nav-item",{attrs:{disabled:""}},[t._v(" Disabled ")])],1)],1)},F=[],V={components:{BCardCode:l["a"],BNav:d["a"],BNavItem:u["a"],BCardText:b["a"]},data:function(){return{codeJustified:j}}},R=V,M=Object(k["a"])(R,q,F,!1,null,null,null),J=M.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Alignment Nav"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeAlignment)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("To align your ")]),n("code",[t._v("<b-nav-item>")]),n("span",[t._v(" components, use the ")]),n("code",[t._v("align")]),n("span",[t._v(" prop. Available values are ")]),n("code",[t._v("left, center")]),n("span",[t._v(" and ")]),n("code",[t._v("right")])]),n("div",{staticClass:"mb-2"},[n("b-form-radio",{attrs:{name:"some-radios",value:"left",inline:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v(" Left ")]),n("b-form-radio",{attrs:{name:"some-radios",value:"center",inline:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v(" Center ")]),n("b-form-radio",{attrs:{name:"some-radios",value:"right",inline:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v(" Right ")])],1),n("b-nav",{attrs:{align:t.selected}},[n("b-nav-item",{attrs:{active:""}},[t._v(" Active ")]),n("b-nav-item",[t._v("Link")]),n("b-nav-item",[t._v("Link with a long name ")]),n("b-nav-item",{attrs:{disabled:""}},[t._v(" Disabled ")])],1)],1)},H=[],U=n("9e14"),K={components:{BCardCode:l["a"],BNav:d["a"],BNavItem:u["a"],BCardText:b["a"],BFormRadio:U["a"]},data:function(){return{selected:"center",codeAlignment:m}}},Q=K,X=Object(k["a"])(Q,W,H,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Dropdown Nav"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeDropdown)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Use ")]),n("code",[t._v("<b-nav-item-dropdown>")]),n("span",[t._v(" to place dropdown items within your nav.")])]),n("div",[n("b-nav",[n("b-nav-item",{attrs:{active:""}},[t._v(" Active ")]),n("b-nav-item",[t._v("Link")]),n("b-nav-item-dropdown",{attrs:{id:"my-nav-dropdown",text:"Dropdown","toggle-class":"nav-link-custom",right:""}},[n("b-dropdown-item",[t._v("One")]),n("b-dropdown-item",[t._v("Two")]),n("b-dropdown-divider"),n("b-dropdown-item",[t._v("Three")])],1)],1)],1)],1)},tt=[],et=n("ede5"),nt=n("f47c"),at=n("9eaa"),rt={components:{BCardCode:l["a"],BNav:d["a"],BNavItem:u["a"],BNavItemDropdown:et["a"],BDropdownDivider:nt["a"],BDropdownItem:at["a"],BCardText:b["a"]},data:function(){return{codeDropdown:h}}},it=rt,ot=Object(k["a"])(it,Z,tt,!1,null,null,null),ct=ot.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Vertical nav"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeVertical)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("By default ")]),n("code",[t._v("<b-nav>")]),n("span",[t._v(" appear on a horizontal line. Stack your navigation by setting the ")]),n("code",[t._v("vertical")]),n("span",[t._v(" prop.")])]),n("b-nav",{attrs:{vertical:""}},[n("b-nav-item",{attrs:{active:""}},[t._v(" Active ")]),n("b-nav-item",[t._v("Link")]),n("b-nav-item",[t._v("Another Link")]),n("b-nav-item",{attrs:{disabled:""}},[t._v(" Disabled ")])],1)],1)},lt=[],dt={components:{BCardCode:l["a"],BNav:d["a"],BNavItem:u["a"],BCardText:b["a"]},data:function(){return{codeVertical:w}}},ut=dt,bt=Object(k["a"])(ut,st,lt,!1,null,null,null),vt=bt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Nav with Border"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeVerticalBorder)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("To wrap with border, use ")]),n("code",[t._v(".wrap-border")]),n("span",[t._v(" class.")])]),n("b-nav",{staticClass:"wrap-border",attrs:{vertical:""}},[n("b-nav-item",{attrs:{active:""}},[t._v(" Active ")]),n("b-nav-item",[t._v("Link")]),n("b-nav-item",[t._v("Another Link")]),n("b-nav-item",{attrs:{disabled:""}},[t._v(" Disabled ")])],1)],1)},mt=[],ft={components:{BCardCode:l["a"],BNav:d["a"],BNavItem:u["a"],BCardText:b["a"]},data:function(){return{codeVerticalBorder:y}}},ht=ft,Ot=Object(k["a"])(ht,pt,mt,!1,null,null,null),jt=Ot.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Nav with Square Border"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeSquareBorder)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("To wrap with square border, use ")]),n("code",[t._v(".square-border")]),n("span",[t._v(" class with ")]),n("code",[t._v(".wrap-border")]),n("span",[t._v(" class.")])]),n("b-nav",{staticClass:"wrap-border square-border",attrs:{vertical:""}},[n("b-nav-item",{attrs:{active:""}},[t._v(" Active ")]),n("b-nav-item",[t._v("Link")]),n("b-nav-item",[t._v("Another Link")]),n("b-nav-item",{attrs:{disabled:""}},[t._v(" Disabled ")])],1)],1)},wt=[],yt={components:{BCardCode:l["a"],BNav:d["a"],BNavItem:u["a"],BCardText:b["a"]},data:function(){return{codeSquareBorder:g}}},_t=yt,Bt=Object(k["a"])(_t,gt,wt,!1,null,null,null),kt=Bt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Nav with Divider  "},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeDivider)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("To add divider, use ")]),n("code",[t._v("<b-dropdown-divider>")]),n("span",[t._v(" components.")])]),n("div",[n("b-nav",{staticClass:"wrap-border",attrs:{vertical:""}},[n("b-nav-item",{attrs:{active:""}},[t._v(" Active ")]),n("b-nav-item",[t._v("Link")]),n("b-nav-item",[t._v("Another Link")]),n("b-dropdown-divider"),n("b-nav-item",{attrs:{disabled:""}},[t._v(" Disabled ")])],1)],1)],1)},Nt=[],xt={components:{BCardCode:l["a"],BNav:d["a"],BNavItem:u["a"],BDropdownDivider:nt["a"],BCardText:b["a"]},data:function(){return{codeDivider:f}}},Dt=xt,Pt=Object(k["a"])(Dt,Ct,Nt,!1,null,null,null),At=Pt.exports,Lt={components:{BRow:i["a"],BCol:o["a"],NavBasic:N,NavBorder:S,NavFill:z,NavJustified:J,NavAlignment:Y,NavDropdown:ct,NavVertical:vt,NavVerticalBorder:jt,NavSquareBorder:kt,NavDivider:At}},St=Lt,It=Object(k["a"])(St,a,r,!1,null,null,null);e["default"]=It.exports},"59fb":function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return u}));var a=n("2b0e"),r=n("b42e"),i=n("c637"),o=n("a723"),c=n("cf75");function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(t){return t="left"===t?"start":"right"===t?"end":t,"justify-content-".concat(t)},d=Object(c["d"])({align:Object(c["c"])(o["u"]),cardHeader:Object(c["c"])(o["g"],!1),fill:Object(c["c"])(o["g"],!1),justified:Object(c["c"])(o["g"],!1),pills:Object(c["c"])(o["g"],!1),small:Object(c["c"])(o["g"],!1),tabs:Object(c["c"])(o["g"],!1),tag:Object(c["c"])(o["u"],"ul"),vertical:Object(c["c"])(o["g"],!1)},i["zb"]),u=a["default"].extend({name:i["zb"],functional:!0,props:d,render:function(t,e){var n,a=e.props,i=e.data,o=e.children,c=a.tabs,d=a.pills,u=a.vertical,b=a.align,v=a.cardHeader;return t(a.tag,Object(r["a"])(i,{staticClass:"nav",class:(n={"nav-tabs":c,"nav-pills":d&&!c,"card-header-tabs":!u&&v&&c,"card-header-pills":!u&&v&&d&&!c,"flex-column":u,"nav-fill":!u&&a.fill,"nav-justified":!u&&a.justified},s(n,l(b),!u&&b),s(n,"small",a.small),n)}),o)}})},"9e14":function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var a=n("2b0e"),r=n("c637"),i=n("3c21"),o=n("d82f"),c=n("cf75"),s=n("dde7"),l=n("d3cb"),d=n("ad47"),u=n("d520"),b=n("90ef");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=Object(c["d"])(Object(o["m"])(p(p(p(p(p({},b["b"]),s["b"]),l["c"]),d["b"]),u["b"])),r["T"]),h=a["default"].extend({name:r["T"],mixins:[b["a"],l["b"],s["a"],d["a"],u["a"]],inject:{bvGroup:{from:"bvRadioGroup",default:!1}},props:f,watch:{computedLocalChecked:function(t,e){Object(i["a"])(t,e)||this.$emit(l["a"],t)}}})},a15b:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var a=n("b42e"),r=n("c637"),i=n("a723"),o=n("2326"),c=n("228e"),s=n("6c06"),l=n("b508"),d=n("d82f"),u=n("cf75"),b=n("fa73");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=["start","end","center"],h=Object(l["a"])((function(t,e){return e=Object(b["h"])(Object(b["g"])(e)),e?Object(b["c"])(["row-cols",t,e].filter(s["a"]).join("-")):null})),O=Object(l["a"])((function(t){return Object(b["c"])(t.replace("cols",""))})),j=[],g=function(){var t=Object(c["b"])().reduce((function(t,e){return t[Object(u["g"])(e,"cols")]=Object(u["c"])(i["p"]),t}),Object(d["c"])(null));return j=Object(d["h"])(t),Object(u["d"])(Object(d["m"])(p(p({},t),{},{alignContent:Object(u["c"])(i["u"],null,(function(t){return Object(o["a"])(Object(o["b"])(f,"between","around","stretch"),t)})),alignH:Object(u["c"])(i["u"],null,(function(t){return Object(o["a"])(Object(o["b"])(f,"between","around"),t)})),alignV:Object(u["c"])(i["u"],null,(function(t){return Object(o["a"])(Object(o["b"])(f,"baseline","stretch"),t)})),noGutters:Object(u["c"])(i["g"],!1),tag:Object(u["c"])(i["u"],"div")})),r["Ob"])},w={name:r["Ob"],functional:!0,get props(){return delete this.props,this.props=g(),this.props},render:function(t,e){var n,r=e.props,i=e.data,o=e.children,c=r.alignV,s=r.alignH,l=r.alignContent,d=[];return j.forEach((function(t){var e=h(O(t),r[t]);e&&d.push(e)})),d.push((n={"no-gutters":r.noGutters},m(n,"align-items-".concat(c),c),m(n,"justify-content-".concat(s),s),m(n,"align-content-".concat(l),l),n)),t(r.tag,Object(a["a"])(i,{staticClass:"row",class:d}),o)}}},a953:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var a=n("2b0e"),r=n("a723"),i=n("cf75"),o=Object(i["d"])({plain:Object(i["c"])(r["g"],!1)},"formControls"),c=a["default"].extend({props:o,computed:{custom:function(){return!this.plain}}})},ad47:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var a=n("2b0e"),r=n("a723"),i=n("cf75"),o=Object(i["d"])({size:Object(i["c"])(r["u"])},"formControls"),c=a["default"].extend({props:o,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},b28b:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var a=n("b42e"),r=n("c637"),i=n("a723"),o=n("992e"),c=n("2326"),s=n("228e"),l=n("6c06"),d=n("7b1e"),u=n("b508"),b=n("d82f"),v=n("cf75"),p=n("fa73");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=["auto","start","end","center","baseline","stretch"],j=function(t,e,n){var a=t;if(!Object(d["p"])(n)&&!1!==n)return e&&(a+="-".concat(e)),"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),Object(p["c"])(a)):Object(p["c"])(a)},g=Object(u["a"])(j),w=Object(b["c"])(null),y=function(){var t=Object(s["b"])().filter(l["a"]),e=t.reduce((function(t,e){return t[e]=Object(v["c"])(i["i"]),t}),Object(b["c"])(null)),n=t.reduce((function(t,e){return t[Object(v["g"])(e,"offset")]=Object(v["c"])(i["p"]),t}),Object(b["c"])(null)),a=t.reduce((function(t,e){return t[Object(v["g"])(e,"order")]=Object(v["c"])(i["p"]),t}),Object(b["c"])(null));return w=Object(b["a"])(Object(b["c"])(null),{col:Object(b["h"])(e),offset:Object(b["h"])(n),order:Object(b["h"])(a)}),Object(v["d"])(Object(b["m"])(f(f(f(f({},e),n),a),{},{alignSelf:Object(v["c"])(i["u"],null,(function(t){return Object(c["a"])(O,t)})),col:Object(v["c"])(i["g"],!1),cols:Object(v["c"])(i["p"]),offset:Object(v["c"])(i["p"]),order:Object(v["c"])(i["p"]),tag:Object(v["c"])(i["u"],"div")})),r["y"])},_={name:r["y"],functional:!0,get props(){return delete this.props,this.props=y()},render:function(t,e){var n,r=e.props,i=e.data,c=e.children,s=r.cols,l=r.offset,d=r.order,u=r.alignSelf,b=[];for(var v in w)for(var p=w[v],m=0;m<p.length;m++){var f=g(v,p[m].replace(v,""),r[p[m]]);f&&b.push(f)}var O=b.some((function(t){return o["e"].test(t)}));return b.push((n={col:r.col||!O&&!s},h(n,"col-".concat(s),s),h(n,"offset-".concat(l),l),h(n,"order-".concat(d),d),h(n,"align-self-".concat(u),u),n)),t(r.tag,Object(a["a"])(i,{class:b}),c)}}},d3cb:function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"c",(function(){return D})),n.d(e,"b",(function(){return P}));var a,r,i=n("2b0e"),o=n("a723"),c=n("0056"),s=n("906c"),l=n("7b1e"),d=n("3c21"),u=n("58f2"),b=n("d82f"),v=n("cf75"),p=n("493b"),m=n("dde7"),f=n("a953"),h=n("ad47"),O=n("d520"),j=n("90ef"),g=n("8c18");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B=Object(u["a"])("checked",{defaultValue:null}),k=B.mixin,C=B.props,N=B.prop,x=B.event,D=Object(v["d"])(Object(b["m"])(y(y(y(y(y(y(y({},j["b"]),C),m["b"]),h["b"]),O["b"]),f["b"]),{},{ariaLabel:Object(v["c"])(o["u"]),ariaLabelledby:Object(v["c"])(o["u"]),button:Object(v["c"])(o["g"],!1),buttonVariant:Object(v["c"])(o["u"]),inline:Object(v["c"])(o["g"],!1),value:Object(v["c"])(o["a"])})),"formRadioCheckControls"),P=i["default"].extend({mixins:[p["a"],j["a"],k,g["a"],m["a"],h["a"],O["a"],f["a"]],inheritAttrs:!1,props:D,data:function(){return{localChecked:this.isGroup?this.bvGroup[N]:this[N],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(t){this.isGroup?this.bvGroup.localChecked=t:this.localChecked=t}},isChecked:function(){return Object(d["a"])(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return!this.isBtnMode&&(this.isGroup?this.bvGroup.plain:this.plain)},isCustom:function(){return!this.isBtnMode&&!this.isPlain},isSwitch:function(){return!(this.isBtnMode||this.isRadio||this.isPlain)&&(this.isGroup?this.bvGroup.switches:this.switch)},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup&&this.bvGroup.disabled||this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Object(l["b"])(this.state)?this.state:null},computedButtonVariant:function(){var t=this.buttonVariant;return t||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var t,e=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(t={},_(t,"btn-".concat(e),e),_(t,"disabled",this.isDisabled),_(t,"active",this.isChecked),_(t,"focus",this.hasFocus),t)]},computedAttrs:function(){var t=this.isDisabled,e=this.isRequired;return y(y({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:t,required:e,"aria-required":e||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(a={},_(a,N,(function(){this["".concat(N,"Watcher")].apply(this,arguments)})),_(a,"computedLocalChecked",(function(){this.computedLocalCheckedWatcher.apply(this,arguments)})),a),methods:(r={},_(r,"".concat(N,"Watcher"),(function(t){Object(d["a"])(t,this.computedLocalChecked)||(this.computedLocalChecked=t)})),_(r,"computedLocalCheckedWatcher",(function(t,e){Object(d["a"])(t,e)||this.$emit(x,t)})),_(r,"handleChange",(function(t){var e=this,n=t.target.checked,a=this.value,r=n?a:null;this.computedLocalChecked=a,this.$nextTick((function(){e.$emit(c["d"],r),e.isGroup&&e.bvGroup.$emit(c["d"],r)}))})),_(r,"handleFocus",(function(t){t.target&&("focus"===t.type?this.hasFocus=!0:"blur"===t.type&&(this.hasFocus=!1))})),_(r,"focus",(function(){this.isDisabled||Object(s["d"])(this.$refs.input)})),_(r,"blur",(function(){this.isDisabled||Object(s["c"])(this.$refs.input)})),r),render:function(t){var e=this.isRadio,n=this.isBtnMode,a=this.isPlain,r=this.isCustom,i=this.isInline,o=this.isSwitch,c=this.computedSize,s=this.bvAttrs,l=this.normalizeSlot(),d=t("input",{class:[{"form-check-input":a,"custom-control-input":r,"position-static":a&&!l},n?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:y({change:this.handleChange},n?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(n){var u=t("label",{class:this.buttonClasses},[d,l]);return this.isGroup||(u=t("div",{class:["btn-group-toggle","d-inline-block"]},[u])),u}var b=t();return a&&!l||(b=t("label",{class:{"form-check-label":a,"custom-control-label":r},attrs:{for:this.safeId()}},l)),t("div",{class:[_({"form-check":a,"form-check-inline":a&&i,"custom-control":r,"custom-control-inline":r&&i,"custom-checkbox":r&&!e&&!o,"custom-switch":o,"custom-radio":r&&e},"b-custom-control-".concat(c),c&&!n),s.class],style:s.style},[d,b])}})},d520:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s}));var a=n("2b0e"),r=n("a723"),i=n("7b1e"),o=n("cf75"),c=Object(o["d"])({state:Object(o["c"])(r["g"],null)},"formState"),s=a["default"].extend({props:c,computed:{computedState:function(){return Object(i["b"])(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=this.ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}})},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("2b0e"),r=n("b42e"),i=n("c637"),o=n("a723"),c=n("cf75"),s=Object(c["d"])({textTag:Object(c["c"])(o["u"],"p")},i["u"]),l=a["default"].extend({name:i["u"],functional:!0,props:s,render:function(t,e){var n=e.props,a=e.data,i=e.children;return t(n.textTag,Object(r["a"])(a,{staticClass:"card-text"}),i)}})},dde7:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var a=n("2b0e"),r=n("a723"),i=n("906c"),o=n("cf75"),c="input, textarea, select",s=Object(o["d"])({autofocus:Object(o["c"])(r["g"],!1),disabled:Object(o["c"])(r["g"],!1),form:Object(o["c"])(r["u"]),id:Object(o["c"])(r["u"]),name:Object(o["c"])(r["u"]),required:Object(o["c"])(r["g"],!1)},"formControls"),l=a["default"].extend({props:s,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(i["B"])((function(){var e=t.$el;t.autofocus&&Object(i["u"])(e)&&(Object(i["v"])(e,c)||(e=Object(i["C"])(c,e)),Object(i["d"])(e))}))}))}}})},ede5:function(t,e,n){"use strict";n.d(e,"a",(function(){return B}));var a=n("2b0e"),r=n("c637"),i=n("9b76"),o=n("8690"),c=n("d82f"),s=n("cf75"),l=n("95ae"),d=n("90ef"),u=n("8c18"),b=n("dd9a"),v=n("aa59");function p(t){return O(t)||h(t)||f(t)||m()}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,e){if(t){if("string"===typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(t,e):void 0}}function h(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function O(t){if(Array.isArray(t))return j(t)}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=Object(s["d"])(Object(c["m"])(w(w({},d["b"]),Object(c["k"])(b["b"],[].concat(p(Object(c["h"])(l["b"])),["html","lazy","menuClass","noCaret","role","text","toggleClass"])))),r["Eb"]),B=a["default"].extend({name:r["Eb"],mixins:[d["a"],l["a"],u["a"]],props:_,computed:{toggleId:function(){return this.safeId("_BV_toggle_")},dropdownClasses:function(){return[this.directionClass,this.boundaryClass,{show:this.visible}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){return[this.toggleClass,{"dropdown-toggle-no-caret":this.noCaret}]}},render:function(t){var e=this.toggleId,n=this.visible,a=this.hide,r=t(v["a"],{staticClass:"nav-link dropdown-toggle",class:this.toggleClasses,props:{href:"#".concat(this.id||""),disabled:this.disabled},attrs:{id:e,role:"button","aria-haspopup":"true","aria-expanded":n?"true":"false"},on:{mousedown:this.onMousedown,click:this.toggle,keydown:this.toggle},ref:"toggle"},[this.normalizeSlot([i["f"],i["eb"]])||t("span",{domProps:Object(o["a"])(this.html,this.text)})]),c=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{tabindex:"-1","aria-labelledby":e},on:{keydown:this.onKeydown},ref:"menu"},!this.lazy||n?this.normalizeSlot(i["i"],{hide:a}):[t()]);return t("li",{staticClass:"nav-item b-nav-dropdown dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[r,c])}})},f47c:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var a=n("2b0e"),r=n("b42e"),i=n("c637"),o=n("a723"),c=n("cf75"),s=n("d82f");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=Object(c["d"])({tag:Object(c["c"])(o["u"],"hr")},i["D"]),v=a["default"].extend({name:i["D"],functional:!0,props:b,render:function(t,e){var n=e.props,a=e.data;return t("li",Object(r["a"])(Object(s["j"])(a,["attrs"]),{attrs:{role:"presentation"}}),[t(n.tag,{staticClass:"dropdown-divider",attrs:d(d({},a.attrs||{}),{},{role:"separator","aria-orientation":"horizontal"}),ref:"divider"})])}})}}]);
//# sourceMappingURL=chunk-ad3c1d54.c7f1fd89.js.map