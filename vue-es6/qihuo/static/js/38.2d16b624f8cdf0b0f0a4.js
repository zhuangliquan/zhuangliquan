webpackJsonp([38],{PpkX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("cWLO"),i={name:"certification",data:function(){return{Gender:"完善性别信息",name:"",id:"",bankName:"",idcardtype:""}},created:function(){this.name="*"+localStorage.getItem("name").substr(1),this.bankName=localStorage.getItem("bank");var t=n.a.decrypt(localStorage.getItem("bankAccount"),"");this.Gender=this.getSexByIdNO(t),this.id=t,this.idcardtype=localStorage.getItem("idcardtype")},methods:{linkHome:function(){this.$router.go(-1)},getSexByIdNO:function(t){return 18==t.length?t.charAt(16)%2==0?"女":"男":15==t.length?t.charAt(14)%2==0?"女":"男":""}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"certification"},[a("div",{staticClass:"record-bar"},[a("van-nav-bar",{attrs:{title:t.$t("RealName"),"left-arrow":""},on:{"click-left":t.linkHome}})],1),t._v(" "),a("div",{staticClass:"content-box"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("CertificateInformation")))]),t._v(" "),a("div",{staticClass:"content"},[a("van-cell",{attrs:{title:t.$t("Name"),center:""}},[a("div",{attrs:{slot:"default"},slot:"default"},[t._v(t._s(t.name))])]),t._v(" "),a("van-cell",{attrs:{title:t.$t("BankOfDeposit"),center:""}},[a("div",{attrs:{slot:"default"},slot:"default"},[t._v(t._s(t.bankName))])]),t._v(" "),a("van-cell",{attrs:{title:t.$t("Bankcard"),center:""}},[a("div",{attrs:{slot:"default"},slot:"default"},[t._v(t._s(t.id))])])],1)])])},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(t){a("qz1y")},"data-v-78e344b7",null);e.default=s.exports},qz1y:function(t,e){}});
//# sourceMappingURL=38.2d16b624f8cdf0b0f0a4.js.map