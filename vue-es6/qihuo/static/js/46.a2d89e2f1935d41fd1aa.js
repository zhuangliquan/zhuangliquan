webpackJsonp([46],{"0vj3":function(s,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={name:"setFundPassword",data:function(){return{Password:"",showKeyboard:!0,keying:"",code:"",passTitle:this.$t("ChangeFundPassword")}},created:function(){"my"!==this.$route.params.modify&&"forget"!==this.$route.params.modify||(this.passTitle=this.$t("setFundPassword")),this.keying=this.$route.params.keying,this.code=this.$route.params.code},methods:{onInput:function(s){this.Password=(this.Password+s).slice(0,6),6===this.Password.length&&("modify"===this.$route.params.modify?this.$router.push({name:"reconfirmFundPassword",params:{Password:this.Password,modify:"modify",oldPass:this.$route.params.oldPass}}):"my"===this.$route.params.modify?this.$router.push({name:"reconfirmFundPassword",params:{modify:"my",Password:this.Password}}):this.$router.push({name:"reconfirmFundPassword",params:{Password:this.Password,keying:this.keying,code:this.code,modify:"forget"}}))},onDelete:function(){this.Password=this.Password.slice(0,this.Password.length-1)},linkHome:function(){this.$router.go(-1)}}},a={render:function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("div",{staticClass:"authentication"},[o("div",{staticClass:"record-bar"},[o("van-nav-bar",{attrs:{title:s.passTitle,"left-arrow":""},on:{"click-left":s.linkHome}})],1),s._v(" "),o("div",{staticClass:"title"},[s._v(s._s(s.$t("inputF6P")))]),s._v(" "),o("div",{staticClass:"input"},[o("van-password-input",{attrs:{value:s.Password,focused:s.showKeyboard},on:{focus:function(t){s.showKeyboard=!0}}}),s._v(" "),o("van-number-keyboard",{attrs:{show:s.showKeyboard},on:{input:s.onInput,delete:s.onDelete,blur:function(t){s.showKeyboard=!1}}})],1)])},staticRenderFns:[]};var r=o("VU/8")(e,a,!1,function(s){o("RtSd")},"data-v-5c8880ec",null);t.default=r.exports},RtSd:function(s,t){}});
//# sourceMappingURL=46.a2d89e2f1935d41fd1aa.js.map