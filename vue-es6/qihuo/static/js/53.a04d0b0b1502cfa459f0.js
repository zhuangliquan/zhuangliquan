webpackJsonp([53],{"P/VD":function(s,t){},RJ0Y:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("mvHQ"),e=a.n(o),i=(a("eqfM"),a("/QYm")),r=a("cWLO"),n={name:"reconfirmFundPassword",data:function(){return{Password:"",showKeyboard:!0,styleOff:!1,styleClass:{color:"#fff","border-color":"#1988FF","background-color":"#1988FF"},keying:"",code:"",phone:"",idCard:""}},created:function(){this.uid=localStorage.getItem("uid"),this.keying=this.$route.params.keying,this.code=this.$route.params.code,this.phone=localStorage.getItem("phone");var s=r.a.decrypt(localStorage.getItem("idcard"),"");this.idCard=s},methods:{onInput:function(s){this.Password=(this.Password+s).slice(0,6),6===this.Password.length&&(this.showKeyboard=!1,this.styleOff=!0),this.Password.length<6&&(this.styleOff=!1)},onDelete:function(){this.Password=this.Password.slice(0,this.Password.length-1),this.Password.length<6&&(this.styleOff=!1)},linkHome:function(){"forget"===this.$route.params.modify?this.$router.push({name:"forgetPassword"}):this.$router.push({name:"myManage"})},linkAccountManage:function(){if(this.Password===this.$route.params.Password){var s=this;s.global.ws&&1==s.global.ws.readyState&&(s.global.ws.onopen=s.setFundPass()),s.global.ws.onmessage=function(t){s.getFundPass(t)}}else{var t=this;Object(i.a)({position:"bottom",message:t.$t("towPasswordNo"),duration:1500,onClose:function(){t.$router.push({name:"modifyFundPass"})}})}},setFundPass:function(){var s=void 0;s="modify"===this.$route.params.modify?{action:"resetDrawPass",reqID:62,data:{id:this.uid,oldPass:this.$route.params.oldPass,nowPass:this.Password}}:"forget"===this.$route.params.modify?{action:"forgetDrawPass",reqID:63,data:{keying:this.keying,code:this.code,phone:this.phone,idCard:this.idCard,drawPass:this.Password}}:{action:"setDrawPass",reqID:61,data:{id:this.uid,drawPass:this.Password}},this.global.ws.send(e()(s))},getFundPass:function(s){this.redata=JSON.parse(s.data);var t=this;"forgetDrawPass"===this.redata.action?0===this.redata.data.code&&(localStorage.setItem("isDrawPass","1"),Object(i.a)({position:"bottom",message:t.$t("RFPasswordS"),duration:1e3,onClose:function(){t.$router.push({name:"withdrawal"})}})):"setDrawPass"===this.redata.action?0===this.redata.data.code&&(localStorage.setItem("isDrawPass","1"),Object(i.a)({position:"bottom",message:t.$t("fpwts"),duration:2500,onClose:function(){t.Logout()}})):"resetDrawPass"===this.redata.action&&0===this.redata.data.code&&(localStorage.setItem("isDrawPass","1"),Object(i.a)({position:"bottom",message:t.$t("fpwts"),duration:2500,onClose:function(){t.Logout()}}))}}},d={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"authentication"},[a("div",{staticClass:"record-bar"},[a("van-nav-bar",{attrs:{title:s.$t("setFundPassword"),"left-arrow":""},on:{"click-left":s.linkHome}})],1),s._v(" "),a("div",{staticClass:"title"},[s._v(s._s(s.$t("RsetFundPassword")))]),s._v(" "),a("div",{staticClass:"input"},[a("van-password-input",{attrs:{value:s.Password,focused:s.showKeyboard},on:{focus:function(t){s.showKeyboard=!0}}}),s._v(" "),a("div",{staticClass:"input-button",style:s.styleOff?s.styleClass:"",on:{click:s.linkAccountManage}},[s._v(s._s(s.$t("Confirm")))]),s._v(" "),a("van-number-keyboard",{attrs:{show:s.showKeyboard},on:{input:s.onInput,delete:s.onDelete,blur:function(t){s.showKeyboard=!1}}})],1)])},staticRenderFns:[]};var c=a("VU/8")(n,d,!1,function(s){a("P/VD")},"data-v-3c307120",null);t.default=c.exports}});
//# sourceMappingURL=53.a04d0b0b1502cfa459f0.js.map