(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5771f7e"],{1079:function(e,t,n){"use strict";var r=n("541c");t["a"]=r["a"]},a15b:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("b42e"),i=n("c637"),o=n("a723"),l=n("2326"),a=n("228e"),c=n("6c06"),s=n("b508"),f=n("d82f"),u=n("cf75"),d=n("fa73");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=["start","end","center"],v=Object(s["a"])((function(e,t){return t=Object(d["h"])(Object(d["g"])(t)),t?Object(d["c"])(["row-cols",e,t].filter(c["a"]).join("-")):null})),g=Object(s["a"])((function(e){return Object(d["c"])(e.replace("cols",""))})),O=[],j=function(){var e=Object(a["b"])().reduce((function(e,t){return e[Object(u["g"])(t,"cols")]=Object(u["c"])(o["p"]),e}),Object(f["c"])(null));return O=Object(f["h"])(e),Object(u["d"])(Object(f["m"])(m(m({},e),{},{alignContent:Object(u["c"])(o["u"],null,(function(e){return Object(l["a"])(Object(l["b"])(h,"between","around","stretch"),e)})),alignH:Object(u["c"])(o["u"],null,(function(e){return Object(l["a"])(Object(l["b"])(h,"between","around"),e)})),alignV:Object(u["c"])(o["u"],null,(function(e){return Object(l["a"])(Object(l["b"])(h,"baseline","stretch"),e)})),noGutters:Object(u["c"])(o["g"],!1),tag:Object(u["c"])(o["u"],"div")})),i["Ob"])},y={name:i["Ob"],functional:!0,get props(){return delete this.props,this.props=j(),this.props},render:function(e,t){var n,i=t.props,o=t.data,l=t.children,a=i.alignV,c=i.alignH,s=i.alignContent,f=[];return O.forEach((function(e){var t=v(g(e),i[e]);t&&f.push(t)})),f.push((n={"no-gutters":i.noGutters},b(n,"align-items-".concat(a),a),b(n,"justify-content-".concat(c),c),b(n,"align-content-".concat(s),s),n)),e(i.tag,Object(r["a"])(o,{staticClass:"row",class:f}),l)}}},a953:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return a}));var r=n("2b0e"),i=n("a723"),o=n("cf75"),l=Object(o["d"])({plain:Object(o["c"])(i["g"],!1)},"formControls"),a=r["default"].extend({props:l,computed:{custom:function(){return!this.plain}}})},ad47:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return a}));var r=n("2b0e"),i=n("a723"),o=n("cf75"),l=Object(o["d"])({size:Object(o["c"])(i["u"])},"formControls"),a=r["default"].extend({props:l,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},c43f:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y}));var r,i=n("2b0e"),o=n("c637"),l=n("e863"),a=n("0056"),c=n("a723"),s=n("9b76"),f=n("992e"),u=n("ca88"),d=n("2326"),p=n("c9a9"),m=n("906c"),b=n("6b77"),h=n("6c06"),v=n("7b1e"),g=n("3c21"),O=n("58f2"),j=n("d82f"),y=n("cf75"),_=n("fa73"),F=n("686b"),x=n("493b"),C=n("dde7"),B=n("a953"),w=n("d520"),D=n("90ef"),A=n("8c18"),S=n("ad47");function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=Object(O["a"])("value",{type:[c["b"],u["b"]],defaultValue:null,validator:function(e){return""===e?(Object(F["a"])(R,o["P"]),!0):Object(v["p"])(e)||V(e)}}),T=E.mixin,z=E.props,I=E.prop,N=E.event,R='Setting "value"/"v-model" to an empty string for reset is deprecated. Set to "null" instead.',V=function e(t){return Object(v["e"])(t)||Object(v["a"])(t)&&t.every((function(t){return e(t)}))},G=function(e){return Object(v["f"])(e.getAsEntry)?e.getAsEntry():Object(v["f"])(e.webkitGetAsEntry)?e.webkitGetAsEntry():null},M=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.all(Object(d["f"])(e).filter((function(e){return"file"===e.kind})).map((function(e){var n=G(e);if(n){if(n.isDirectory&&t)return L(n.createReader(),"".concat(n.name,"/"));if(n.isFile)return new Promise((function(e){n.file((function(t){t.$path="",e(t)}))}))}return null})).filter(h["a"]))},L=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(r){var i=[],o=function o(){t.readEntries((function(t){0===t.length?r(Promise.all(i).then((function(e){return Object(d["d"])(e)}))):(i.push(Promise.all(t.map((function(t){if(t){if(t.isDirectory)return e(t.createReader(),"".concat(n).concat(t.name,"/"));if(t.isFile)return new Promise((function(e){t.file((function(t){t.$path="".concat(n).concat(t.name),e(t)}))}))}return null})).filter(h["a"]))),o())}))};o()}))},H=Object(y["d"])(Object(j["m"])(k(k(k(k(k(k(k({},D["b"]),z),C["b"]),B["b"]),w["b"]),S["b"]),{},{accept:Object(y["c"])(c["u"],""),browseText:Object(y["c"])(c["u"],"Browse"),capture:Object(y["c"])(c["g"],!1),directory:Object(y["c"])(c["g"],!1),dropPlaceholder:Object(y["c"])(c["u"],"Drop files here"),fileNameFormatter:Object(y["c"])(c["l"]),multiple:Object(y["c"])(c["g"],!1),noDrop:Object(y["c"])(c["g"],!1),noDropPlaceholder:Object(y["c"])(c["u"],"Not allowed"),noTraverse:Object(y["c"])(c["g"],!1),placeholder:Object(y["c"])(c["u"],"No file chosen")})),o["P"]),Y=i["default"].extend({name:o["P"],mixins:[x["a"],D["a"],T,A["a"],C["a"],w["a"],B["a"],A["a"]],inheritAttrs:!1,props:H,data:function(){return{files:[],dragging:!1,dropAllowed:!this.noDrop,hasFocus:!1}},computed:{computedAccept:function(){var e=this.accept;return e=(e||"").trim().split(/[,\s]+/).filter(h["a"]),0===e.length?null:e.map((function(e){var t="name",n="^",r="$";f["k"].test(e)?n="":(t="type",f["x"].test(e)&&(r=".+$",e=e.slice(0,-1))),e=Object(_["a"])(e);var i=new RegExp("".concat(n).concat(e).concat(r));return{rx:i,prop:t}}))},computedCapture:function(){var e=this.capture;return!0===e||""===e||(e||null)},computedAttrs:function(){var e=this.name,t=this.disabled,n=this.required,r=this.form,i=this.computedCapture,o=this.accept,l=this.multiple,a=this.directory;return k(k({},this.bvAttrs),{},{type:"file",id:this.safeId(),name:e,disabled:t,required:n,form:r||null,capture:i,accept:o||null,multiple:l,directory:a,webkitdirectory:a,"aria-required":n?"true":null})},computedFileNameFormatter:function(){var e=this.fileNameFormatter;return Object(y["b"])(e)?e:this.defaultFileNameFormatter},clonedFiles:function(){return Object(p["a"])(this.files)},flattenedFiles:function(){return Object(d["e"])(this.files)},fileNames:function(){return this.flattenedFiles.map((function(e){return e.name}))},labelContent:function(){if(this.dragging&&!this.noDrop)return this.normalizeSlot(s["l"],{allowed:this.dropAllowed})||(this.dropAllowed?this.dropPlaceholder:this.$createElement("span",{staticClass:"text-danger"},this.noDropPlaceholder));if(0===this.files.length)return this.normalizeSlot(s["V"])||this.placeholder;var e=this.flattenedFiles,t=this.clonedFiles,n=this.fileNames,r=this.computedFileNameFormatter;return this.hasNormalizedSlot(s["p"])?this.normalizeSlot(s["p"],{files:e,filesTraversed:t,names:n}):r(e,t,n)}},watch:(r={},$(r,I,(function(e){(!e||Object(v["a"])(e)&&0===e.length)&&this.reset()})),$(r,"files",(function(e,t){if(!Object(g["a"])(e,t)){var n=this.multiple,r=this.noTraverse,i=!n||r?Object(d["e"])(e):e;this.$emit(N,n?i:i[0]||null)}})),r),created:function(){this.$_form=null},mounted:function(){var e=Object(m["e"])("form",this.$el);e&&(Object(b["b"])(e,"reset",this.reset,a["db"]),this.$_form=e)},beforeDestroy:function(){var e=this.$_form;e&&Object(b["a"])(e,"reset",this.reset,a["db"])},methods:{isFileValid:function(e){if(!e)return!1;var t=this.computedAccept;return!t||t.some((function(t){return t.rx.test(e[t.prop])}))},isFilesArrayValid:function(e){var t=this;return Object(v["a"])(e)?e.every((function(e){return t.isFileValid(e)})):this.isFileValid(e)},defaultFileNameFormatter:function(e,t,n){return n.join(", ")},setFiles:function(e){this.dropAllowed=!this.noDrop,this.dragging=!1,this.files=this.multiple?this.directory?e:Object(d["e"])(e):Object(d["e"])(e).slice(0,1)},setInputFiles:function(e){try{var t=new ClipboardEvent("").clipboardData||new DataTransfer;Object(d["e"])(Object(p["a"])(e)).forEach((function(e){delete e.$path,t.items.add(e)})),this.$refs.input.files=t.files}catch(n){}},reset:function(){try{var e=this.$refs.input;e.value="",e.type="",e.type="file"}catch(t){}this.files=[]},handleFiles:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){var n=e.filter(this.isFilesArrayValid);n.length>0&&(this.setFiles(n),this.setInputFiles(n))}else this.setFiles(e)},focusHandler:function(e){this.plain||"focusout"===e.type?this.hasFocus=!1:this.hasFocus=!0},onChange:function(e){var t=this,n=e.type,r=e.target,i=e.dataTransfer,o=void 0===i?{}:i,c="drop"===n;this.$emit(a["d"],e);var s=Object(d["f"])(o.items||[]);if(l["f"]&&s.length>0&&!Object(v["g"])(G(s[0])))M(s,this.directory).then((function(e){return t.handleFiles(e,c)}));else{var f=Object(d["f"])(r.files||o.files||[]).map((function(e){return e.$path=e.webkitRelativePath||"",e}));this.handleFiles(f,c)}},onDragenter:function(e){Object(b["f"])(e),this.dragging=!0;var t=e.dataTransfer,n=void 0===t?{}:t;if(this.noDrop||this.disabled||!this.dropAllowed)return n.dropEffect="none",void(this.dropAllowed=!1);n.dropEffect="copy"},onDragover:function(e){Object(b["f"])(e),this.dragging=!0;var t=e.dataTransfer,n=void 0===t?{}:t;if(this.noDrop||this.disabled||!this.dropAllowed)return n.dropEffect="none",void(this.dropAllowed=!1);n.dropEffect="copy"},onDragleave:function(e){var t=this;Object(b["f"])(e),this.$nextTick((function(){t.dragging=!1,t.dropAllowed=!t.noDrop}))},onDrop:function(e){var t=this;Object(b["f"])(e),this.dragging=!1,this.noDrop||this.disabled||!this.dropAllowed?this.$nextTick((function(){t.dropAllowed=!t.noDrop})):this.onChange(e)}},render:function(e){var t=this.custom,n=this.plain,r=this.size,i=this.dragging,o=this.stateClass,l=this.bvAttrs,a=e("input",{class:[{"form-control-file":n,"custom-file-input":t,focus:t&&this.hasFocus},o],style:t?{zIndex:-5}:{},attrs:this.computedAttrs,on:{change:this.onChange,focusin:this.focusHandler,focusout:this.focusHandler,reset:this.reset},ref:"input"});if(n)return a;var c=e("label",{staticClass:"custom-file-label",class:{dragging:i},attrs:{for:this.safeId(),"data-browse":this.browseText||null}},[e("span",{staticClass:"d-block form-file-text",style:{pointerEvents:"none"}},[this.labelContent])]);return e("div",{staticClass:"custom-file b-form-file",class:[$({},"b-custom-control-".concat(r),r),o,l.class],style:l.style,attrs:{id:this.safeId("_BV_file_outer_")},on:{dragenter:this.onDragenter,dragover:this.onDragover,dragleave:this.onDragleave,drop:this.onDrop}},[a,c])}})},d6e4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("2b0e"),i=n("b42e"),o=n("c637"),l=n("a723"),a=n("cf75"),c=Object(a["d"])({textTag:Object(a["c"])(l["u"],"p")},o["u"]),s=r["default"].extend({name:o["u"],functional:!0,props:c,render:function(e,t){var n=t.props,r=t.data,o=t.children;return e(n.textTag,Object(i["a"])(r,{staticClass:"card-text"}),o)}})},dde7:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n("2b0e"),i=n("a723"),o=n("906c"),l=n("cf75"),a="input, textarea, select",c=Object(l["d"])({autofocus:Object(l["c"])(i["g"],!1),disabled:Object(l["c"])(i["g"],!1),form:Object(l["c"])(i["u"]),id:Object(l["c"])(i["u"]),name:Object(l["c"])(i["u"]),required:Object(l["c"])(i["g"],!1)},"formControls"),s=r["default"].extend({props:c,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var e=this;this.$nextTick((function(){Object(o["B"])((function(){var t=e.$el;e.autofocus&&Object(o["u"])(t)&&(Object(o["v"])(t,a)||(t=Object(o["C"])(a,t)),Object(o["d"])(t))}))}))}}})},e98b:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("2b0e"),i=n("b42e"),o=n("c637"),l=n("a723"),a=n("d82f"),c=n("cf75"),s=n("4a38"),f=n("aa59");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=Object(a["j"])(f["b"],["event","routerTag"]);delete m.href.default,delete m.to.default;var b=Object(c["d"])(Object(a["m"])(d(d({},m),{},{pill:Object(c["c"])(l["g"],!1),tag:Object(c["c"])(l["u"],"span"),variant:Object(c["c"])(l["u"],"secondary")})),o["e"]),h=r["default"].extend({name:o["e"],functional:!0,props:b,render:function(e,t){var n=t.props,r=t.data,o=t.children,l=n.active,a=n.disabled,u=Object(s["d"])(n),d=u?f["a"]:n.tag,p=n.variant||"secondary";return e(d,Object(i["a"])(r,{staticClass:"badge",class:["badge-".concat(p),{"badge-pill":n.pill,active:l,disabled:a}],props:u?Object(c["e"])(m,n):{}}),o)}})},f1d5:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{lg:"6"}},[n("file-input-basic")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-limiting")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-multiple")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-drag-drop")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-formatter")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-contextual-state")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-directory")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-slot")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-size")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-clearing")],1)],1)},i=[],o=n("a15b"),l=n("b28b"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"File Input Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[n("b-card-text",[e._v(" Customized, cross-browser consistent, file input control that supports single file, multiple files, and directory upload (for browsers that support directory mode) ")]),n("div",[n("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),n("b-card-text",{staticClass:"my-1"},[e._v(" Selected file: "),n("strong",[e._v(e._s(e.file?e.file.name:""))])]),n("b-card-text",[n("span",[e._v("You can have ")]),n("code",[e._v("<b-form-file>")]),n("span",[e._v(" render a browser native file input by setting the ")]),n("code",[e._v("plain")]),n("span",[e._v(" prop.")])]),n("b-form-file",{staticClass:"mt-1",attrs:{plain:""},model:{value:e.file2,callback:function(t){e.file2=t},expression:"file2"}}),n("div",{staticClass:"mt-1"},[e._v(" Selected file: "),n("strong",[e._v(e._s(e.file2?e.file2.name:""))])])],1)],1)},c=[],s=n("1079"),f=n("d6e4"),u=n("c43f"),d='\n<template>\n  <div>\n\n    \x3c!-- Styled --\x3e\n    <b-form-file\n      v-model="file"\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n    />\n\n    <b-card-text class="my-1">\n      Selected file: <strong>{{ file ? file.name : \'\' }}</strong>\n    </b-card-text>\n\n    <b-card-text>\n      <span>You can have </span>\n      <code>&lt;b-form-file&gt;</code>\n      <span> render a browser native file input by setting the </span>\n      <code>plain</code>\n      <span> prop.</span>\n    </b-card-text>\n\n    \x3c!-- Plain mode --\x3e\n    <b-form-file\n      v-model="file2"\n      class="mt-1"\n      plain\n    />\n    <div class="mt-1">\n      Selected file: <strong>{{ file2 ? file2.name : \'\' }}</strong>\n    </div>\n  </div>\n</template>\n\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n data() {\n    return {\n      file: null,\n      file2: null,\n    }\n  },\n}\n<\/script>\n',p='\n<template>\n  <div>\n    \x3c!-- Styled --\x3e\n    <b-form-file\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n      no-drop\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n}\n<\/script>\n',m="\n<template>\n  <div>\n    <div>\n      <b-form-file\n        multiple\n        :file-name-formatter=\"formatNames\"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n  methods: {\n    formatNames(files) {\n      if (files.length === 1) {\n        return files[0].name\n      }\n      return `${ files.length } files selected`\n    },\n  },\n}\n<\/script>\n",b='\n<template>\n  <div>\n    <div>\n      \x3c!-- Accept all image formats by IANA media type wildcard--\x3e\n      <label for="wildcard">Accept all image</label>\n      <b-form-file\n        id="wildcard"\n        accept="image/*"\n      />\n\n      \x3c!-- Accept specific image formats by IANA type --\x3e\n      <label\n        for="IANA"\n        class="mt-1"\n      >Accept specific image formats by IANA type</label>\n      <b-form-file\n        id="IANA"\n        accept="image/jpeg, image/png, image/gif"\n      />\n\n      \x3c!-- Accept specific image formats by extension --\x3e\n      <label\n        for="extension"\n        class="mt-1"\n      >Accept specific image formats by extension</label>\n      <b-form-file\n        id="extension"\n        accept=".jpg, .png, .gif"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormFile,\n  },\n}\n<\/script>\n',h='\n<template>\n  <div>\n    <b-form-file\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n      multiple\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n}\n<\/script>\n',v='\n<template>\n  <div>\n    <b-form-group\n      label="Small:"\n      label-for="file-small"\n      label-cols-sm="2"\n      label-size="sm"\n    >\n      <b-form-file\n        id="file-small"\n        size="sm"\n      />\n    </b-form-group>\n\n    <b-form-group\n      label="Default:"\n      label-for="file-default"\n      label-cols-sm="2"\n    >\n      <b-form-file id="file-default" />\n    </b-form-group>\n\n    <b-form-group\n      label="Large:"\n      label-for="file-large"\n      label-cols-sm="2"\n      label-size="lg"\n    >\n      <b-form-file\n        id="file-large"\n        size="lg"\n      />\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport { BFormFile, BFormGroup } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    BFormGroup,\n  },\n}\n<\/script>\n',g='\n<template>\n  <div>\n    \x3c!-- Styled --\x3e\n    <b-form-file\n      v-model="file"\n      :state="Boolean(file)"\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n  data: () => ({\n    file: null,\n  }),\n}\n<\/script>\n',O='\n<template>\n  <div>\n    <b-form-file\n      ref="file-input"\n      v-model="file"\n      class="mb-2"\n    />\n\n    <b-button\n      class="mr-2"\n      variant="primary"\n      @click="clearFiles"\n    >\n      Reset via method\n    </b-button>\n    <b-button\n      variant="primary"\n      @click="file = null"\n    >\n      Reset via v-model\n    </b-button>\n\n    <p class="mt-2">\n      Selected file: <strong>{{ file ? file.name : \'\' }}</strong>\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormFile, BButton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    BButton,\n  },\n  data: () => ({\n    file: null,\n  }),\n  methods: {\n    clearFiles() {\n      this.$refs[\'file-input\'].reset()\n    },\n  },\n}\n<\/script>\n',j='\n<template>\n  <div>\n    <b-form-file\n        v-model="file"\n        directory\n        placeholder="Choose a file or drop it here..."\n        drop-placeholder="Drop file here..."\n      />\n    </b-card-code>\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    file:null\n  },\n}\n<\/script>\n',y='\n<template>\n  <b-form-file multiple>\n    <template\n      slot="file-name"\n      slot-scope="{ names }"\n    >\n      <b-badge variant="primary">\n        {{ names[0] }}\n      </b-badge>\n      <b-badge\n        v-if="names.length > 1"\n        variant="dark"\n        class="ml-1"\n      >\n        + {{ names.length - 1 }} More files\n      </b-badge>\n    </template>\n  </b-form-file>\n</template>\n\n\n<script>\nimport { BFormFile, BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    BBadge,\n  },\n}\n<\/script>\n',_={components:{BCardCode:s["a"],BCardText:f["a"],BFormFile:u["a"]},data:function(){return{file:null,file2:null,codeBasic:d}}},F=_,x=n("2877"),C=Object(x["a"])(F,a,c,!1,null,null,null),B=C.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Multiple files"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeMultiple)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Multiple file uploading is supported by adding ")]),n("code",[e._v("multiple")]),n("span",[e._v(" prop to component.")])]),n("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...",multiple:""}})],1)},D=[],A={components:{BCardCode:s["a"],BFormFile:u["a"],BCardText:f["a"]},data:function(){return{codeMultiple:h}}},S=A,P=Object(x["a"])(S,w,D,!1,null,null,null),k=P.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Drag and Drop support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDragDrop)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Drop mode is enabled by default. It can disabled by setting the ")]),n("code",[e._v("no-drop")]),n("span",[e._v("prop. ")])]),n("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...","no-drop":""}})],1)},E=[],T={components:{BCardCode:s["a"],BFormFile:u["a"],BCardText:f["a"]},data:function(){return{codeDragDrop:p}}},z=T,I=Object(x["a"])(z,$,E,!1,null,null,null),N=I.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Limiting to certain file types"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeLimiting)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("You can limit the file types by setting the ")]),n("code",[e._v("accept")]),n("span",[e._v(" prop to a string containing the allowed file type(s). To specify more than one type, separate the values with a comma. ")])]),n("label",{attrs:{for:"wildcard"}},[e._v("Accept all image")]),n("b-form-file",{attrs:{id:"wildcard",accept:"image/*"}}),n("label",{staticClass:"mt-1",attrs:{for:"IANA"}},[e._v("Accept specific image formats by IANA type")]),n("b-form-file",{attrs:{id:"IANA",accept:"image/jpeg, image/png, image/gif"}}),n("label",{staticClass:"mt-1",attrs:{for:"extension"}},[e._v("Accept specific image formats by extension")]),n("b-form-file",{attrs:{id:"extension",accept:".jpg, .png, .gif"}})],1)},V=[],G={components:{BCardCode:s["a"],BFormFile:u["a"],BCardText:f["a"]},data:function(){return{codeLimiting:b}}},M=G,L=Object(x["a"])(M,R,V,!1,null,null,null),H=L.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Control sizing"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSize)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Use the ")]),n("code",[e._v("size")]),n("span",[e._v(" prop to control the visual size of the input. The default size is considered md (medium). Optional sizes are ")]),n("code",[e._v("lg")]),n("span",[e._v(" (large) and ")]),n("code",[e._v("sm")]),n("span",[e._v(" (small).")])]),n("b-form-group",{attrs:{label:"Small:","label-for":"file-small","label-cols-sm":"2","label-size":"sm"}},[n("b-form-file",{attrs:{id:"file-small",size:"sm"}})],1),n("b-form-group",{attrs:{label:"Default:","label-for":"file-default","label-cols-sm":"2"}},[n("b-form-file",{attrs:{id:"file-default"}})],1),n("b-form-group",{staticClass:"mb-0",attrs:{label:"Large:","label-for":"file-large","label-cols-sm":"2","label-size":"lg"}},[n("b-form-file",{attrs:{id:"file-large",size:"lg"}})],1)],1)},q=[],J=n("8226"),U={components:{BCardCode:s["a"],BFormFile:u["a"],BFormGroup:J["a"],BCardText:f["a"]},data:function(){return{codeSize:v}}},K=U,Q=Object(x["a"])(K,Y,q,!1,null,null,null),W=Q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"File name formatter function"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeFormatter)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Set the prop ")]),n("code",[e._v("file-name-formatter")]),n("span",[e._v(" to a function that accepts a single argument which is an array of File objects.")])]),n("b-form-file",{attrs:{multiple:"","file-name-formatter":e.formatNames}})],1)},Z=[],ee=(n("b0c0"),{components:{BCardCode:s["a"],BFormFile:u["a"],BCardText:f["a"]},data:function(){return{codeFormatter:m}},methods:{formatNames:function(e){return 1===e.length?e[0].name:"".concat(e.length," files selected")}}}),te=ee,ne=Object(x["a"])(te,X,Z,!1,null,null,null),re=ne.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Contextual state feedback"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeContextualState)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("To apply one of the contextual state icons on ")]),n("code",[e._v("<b-form-file>")]),n("span",[e._v(", set the ")]),n("code",[e._v("state")]),n("span",[e._v(" prop to ")]),n("code",[e._v("false")]),n("span",[e._v(" (for invalid), ")]),n("code",[e._v("true")]),n("span",[e._v(" (for valid), or ")]),n("code",[e._v("null")]),n("span",[e._v(" (no validation state).")])]),n("b-form-file",{attrs:{state:Boolean(e.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)},oe=[],le={components:{BCardCode:s["a"],BFormFile:u["a"],BCardText:f["a"]},data:function(){return{file:null,codeContextualState:g}}},ae=le,ce=Object(x["a"])(ae,ie,oe,!1,null,null,null),se=ce.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Clearing the file selection"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeClearing)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v(" You can clear the file input's selected files by setting the ")]),n("code",[e._v("v-model")]),n("span",[e._v(" to either ")]),n("code",[e._v("null")]),n("span",[e._v(" (for single mode) or an empty array ")]),n("code",[e._v("[]")]),n("span",[e._v(" (for multiple/directory mode).")])]),n("div",[n("b-form-file",{ref:"file-input",model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-2 mb-25",attrs:{variant:"outline-primary"},on:{click:e.clearFiles}},[e._v(" Reset via method ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(t){e.file=null}}},[e._v(" Reset via v-model ")])],1),n("b-card-text",{staticClass:"mt-1 mb-0"},[e._v(" Selected file: "),n("strong",[e._v(e._s(e.file?e.file.name:""))])])],1)],1)},ue=[],de=n("1947"),pe=n("e009"),me={components:{BCardCode:s["a"],BFormFile:u["a"],BButton:de["a"],BCardText:f["a"]},directives:{Ripple:pe["a"]},data:function(){return{file:null,codeClearing:O}},methods:{clearFiles:function(){this.$refs["file-input"].reset()}}},be=me,he=Object(x["a"])(be,fe,ue,!1,null,null,null),ve=he.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Directory mode"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDirectory)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("By adding ")]),n("code",[e._v("directory")]),n("span",[e._v(" prop, the user can select directories instead of files.")])]),n("b-form-file",{attrs:{directory:"",placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)},Oe=[],je={components:{BCardCode:s["a"],BFormFile:u["a"],BCardText:f["a"]},data:function(){return{file:null,codeDirectory:j}}},ye=je,_e=Object(x["a"])(ye,ge,Oe,!1,null,null,null),Fe=_e.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"File name formatting via scoped slot"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSlot)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("You can use the scoped slot ")]),n("code",[e._v("file-name")]),n("span",[e._v(" to render the file names. The scoped slot will receive the following properties: ")]),n("code",[e._v("files,names")])]),n("b-form-file",{attrs:{multiple:""},scopedSlots:e._u([{key:"file-name",fn:function(t){var r=t.names;return[n("b-badge",{attrs:{variant:"primary"}},[e._v(" "+e._s(r[0])+" ")]),r.length>1?n("b-badge",{staticClass:"ml-1",attrs:{variant:"dark"}},[e._v(" + "+e._s(r.length-1)+" More files ")]):e._e()]}}])})],1)},Ce=[],Be=n("e98b"),we={components:{BCardCode:s["a"],BFormFile:u["a"],BCardText:f["a"],BBadge:Be["a"]},data:function(){return{codeSlot:y}}},De=we,Ae=Object(x["a"])(De,xe,Ce,!1,null,null,null),Se=Ae.exports,Pe={components:{BRow:o["a"],BCol:l["a"],FileInputBasic:B,FileInputMultiple:k,FileInputDragDrop:N,FileInputLimiting:H,FileInputSize:W,FileInputFormatter:re,FileInputContextualState:se,FileInputClearing:ve,FileInputDirectory:Fe,FileInputSlot:Se}},ke=Pe,$e=Object(x["a"])(ke,r,i,!1,null,null,null);t["default"]=$e.exports}}]);
//# sourceMappingURL=chunk-c5771f7e.6839a76f.js.map