(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d4463b9"],{"65b7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"auth-wrapper auth-v2"},[e("b-row",{staticClass:"auth-inner m-0"},[e("b-link",{staticClass:"brand-logo"},[e("vuexy-logo"),e("h2",{staticClass:"brand-text text-primary ml-1"},[t._v(" Vuexy ")])],1),e("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[e("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[e("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Forgot password V2"}})],1)]),e("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[e("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[e("b-card-title",{staticClass:"mb-1"},[t._v(" Forgot Password? 🔒 ")]),e("b-card-text",{staticClass:"mb-2"},[t._v(" Enter your email and we'll send you instructions to reset your password ")]),e("validation-observer",{ref:"simpleRules"},[e("b-form",{staticClass:"auth-forgot-password-form mt-2",on:{submit:function(a){return a.preventDefault(),t.validationForm.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"Email","label-for":"forgot-password-email"}},[e("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("b-form-input",{attrs:{id:"forgot-password-email",state:!(s.length>0)&&null,name:"forgot-password-email",placeholder:"john@example.com"},model:{value:t.userEmail,callback:function(a){t.userEmail=a},expression:"userEmail"}}),e("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1),e("b-button",{attrs:{type:"submit",variant:"primary",block:""}},[t._v(" Send reset link ")])],1)],1),e("p",{staticClass:"text-center mt-2"},[e("b-link",{attrs:{to:{name:"auth-login"}}},[e("feather-icon",{attrs:{icon:"ChevronLeftIcon"}}),t._v(" Back to login ")],1)],1)],1)],1)],1)],1)},r=[],i=e("7bb1"),o=e("088b"),l=e("a15b"),n=e("b28b"),u=e("aa59"),c=e("4918"),m=e("11de"),d=e("1947"),p=e("8226"),b=e("4797"),f=e("4968"),g=e("d6e4"),v=e("8f03"),h=e("4360"),x=e("223c"),w={components:{VuexyLogo:o["a"],BRow:l["a"],BCol:n["a"],BLink:u["a"],BImg:c["a"],BForm:m["a"],BButton:d["a"],BFormGroup:p["a"],BFormInput:b["a"],BCardTitle:f["a"],BCardText:g["a"],ValidationProvider:i["b"],ValidationObserver:i["a"]},data:function(){return{userEmail:"",sideImg:e("5b2a"),required:v["l"],email:v["g"]}},computed:{imgUrl:function(){return"dark"===h["a"].state.appConfig.layout.skin?(this.sideImg=e("6e2f"),this.sideImg):this.sideImg}},methods:{validationForm:function(){var t=this;this.$refs.simpleRules.validate().then((function(a){a&&t.$toast({component:x["a"],props:{title:"This is for UI purpose only.",icon:"EditIcon",variant:"success"}})}))}}},C=w,y=(e("be90"),e("2877")),k=Object(y["a"])(C,s,r,!1,null,null,null);a["default"]=k.exports},ab85:function(t,a,e){},be90:function(t,a,e){"use strict";e("ab85")}}]);
//# sourceMappingURL=chunk-4d4463b9.e47fcae7.js.map