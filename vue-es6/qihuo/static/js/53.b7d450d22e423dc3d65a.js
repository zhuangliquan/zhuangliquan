webpackJsonp([53],{"X+iW":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("eqfM");var a=i("/QYm"),o={name:"follow",data:function(){return{checked:!1,account:"******",RateShow:"0%",followValue:"",direction:0}},created:function(){var t=this;this.uid=localStorage.getItem("uid"),this.discUrl=localStorage.getItem("discUrl");var e=this.$route.params.data;this.account=e.account,e.winRate?this.RateShow=e.winRateShow:this.RateShow=e.lostRateShow,this.$nextTick(function(){t.$refs.followValue.focus()})},methods:{linkHome:function(){this.$router.push({name:"ranking"})},clickSwitch:function(){this.checked=!1,this.direction=0},clickSwitch1:function(){this.checked=!0,this.direction=1},changeSwitch:function(){},setFollow:function(){var t=this;if(""!==this.followValue){var e={},i={};i.userId=this.uid,i.isFollowedId=this.$route.params.data.userId,i.multiple=this.followValue,i.direction=this.direction,e.documentary=i,e.type=1,this.$axios.post("http://"+this.discUrl+":7777/api/documentary/insertDocumentary",e).then(function(e){0===e.data.code?Object(a.a)({duration:2e3,position:"bottom",message:t.$t("documentaryS"),onOpened:function(){t.$router.push({name:"ranking"})}}):Object(a.a)({duration:2e3,position:"bottom",message:e.data.msg})})}else Object(a.a)({duration:2e3,message:t.$t("NBS"),position:"bottom"})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"follow-box"},[i("div",{staticClass:"follow-bar"},[i("van-nav-bar",{attrs:{title:t.$t("datSource5"),"left-arrow":""},on:{"click-left":t.linkHome}})],1),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"top"},[i("div",[t._v(t._s(t.$t("FollowT")))]),t._v(" "),i("div",[i("div",[t._v(t._s(t.$t("account"))+"："+t._s("***"+t.account.substring(t.account.length-3)))]),t._v(" "),i("div",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.$t("win"))+"："),i("span",{style:{color:this.$route.params.data.winRate?"#FD4F50":"#07B76F"}},[t._v(t._s(t.RateShow))])])])]),t._v(" "),i("div",{staticClass:"upBankCard-input"},[i("van-cell-group",[i("van-cell",{staticClass:"direction",attrs:{title:t.$t("FollowD")}},[i("div",{attrs:{slot:"default"},slot:"default"},[i("van-switch",{staticClass:"switch",attrs:{"inactive-color":"#fff","active-color":"#fff"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),t._v(" "),i("div",{staticClass:"text",style:{color:!0===t.checked?"#fff":"#666666"},on:{click:t.clickSwitch1}},[t._v(" "+t._s(t.$t("back"))+" ")]),t._v(" "),i("div",{staticClass:"text text1",style:{color:!1===t.checked?"#fff":"#666666"},on:{click:t.clickSwitch}},[t._v(t._s(t.$t("positive")))])],1)]),t._v(" "),i("van-field",{ref:"followValue",attrs:{type:"number",label:t.$t("PAOP"),placeholder:t.$t("PIBS"),"input-align":"right"},model:{value:t.followValue,callback:function(e){t.followValue=e},expression:"followValue"}},[i("div",{staticClass:"nameClass",attrs:{slot:"right-icon"},slot:"right-icon"},[t._v(t._s(t.$t("PIB")))])])],1)],1),t._v(" "),i("div",{staticClass:"bottom"},[i("span",{staticStyle:{color:"#EF3F38"}},[t._v(t._s(t.$t("example"))+"：")]),t._v(t._s(t.$t("example1")))])]),t._v(" "),i("div",{staticClass:"but",on:{click:t.setFollow}},[t._v(t._s(t.$t("ConfirmOrder")))])])},staticRenderFns:[]};var c=i("VU/8")(o,s,!1,function(t){i("wYY2")},"data-v-3db76030",null);e.default=c.exports},wYY2:function(t,e){}});
//# sourceMappingURL=53.b7d450d22e423dc3d65a.js.map