webpackJsonp([27],{"4hBG":function(t,e,i){t.exports=i.p+"static/img/loginTop.86539c5.png"},MmzB:function(t,e){},"T+/8":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("mvHQ");var a={name:"index",data:function(){return{active:0,version:"2.1.4",imageUrl:i("4hBG")}},created:function(){var t=this;if(this.mui.plusReady(function(){plus.runtime.getProperty("H5727BBB2",function(e){var i=e.version;t.version=i})}),localStorage.getItem("i18n")){var e=localStorage.getItem("i18n");this.$i18n.locale=e}else localStorage.setItem("i18n","zh"),this.$i18n.locale="zh";localStorage.setItem("abnormal","true"),localStorage.setItem("environment","reality"),localStorage.setItem("discUrl","121.43.137.150"),this.active=0,this.$router.push("/signIn"),"jix"===localStorage.jix&&(location.reload(),localStorage.removeItem("jix")),void 0!==localStorage.version&&(this.version=localStorage.version)},methods:{initialization:function(){localStorage.removeItem("tickCopy"),localStorage.removeItem("mainList")},changeDisk:function(){0===this.active?(this.$store.state.diUrl="121.43.137.150",localStorage.setItem("discUrl","121.43.137.150"),localStorage.setItem("environment","reality")):1===this.active&&(localStorage.setItem("discUrl","121.43.137.150"),localStorage.setItem("environment","fictitious"),this.$store.state.diUrl="121.43.137.150")},reLogin:function(t){this.$emit("reLogin",t)}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login"},[i("div",{staticClass:"login-top",style:{backgroundImage:"url("+t.imageUrl+")"}},[i("div",[t._v(t._s(t.$t("huanYing"))),i("br"),t._v(t._s(t.$t("appName")))])]),t._v(" "),i("div",{staticClass:"login-tab"},[i("van-tabs",{attrs:{color:"#1988FF","title-active-color":"#1988FF","title-inactive-color":"#1988FF",swipeable:"",animated:""},on:{change:t.changeDisk},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:t.$t("LiveAccount"),to:"/signIn"}})],1),t._v(" "),i("router-view",{on:{reLogin:t.reLogin}})],1),t._v(" "),i("div",{staticClass:"version"},[t._v(t._s(t.$t("version"))+"："+t._s(t.version))])])},staticRenderFns:[]};var n=i("VU/8")(a,o,!1,function(t){i("MmzB")},"data-v-21cdf64c",null);e.default=n.exports}});
//# sourceMappingURL=27.8fefeece7f2983cb8c55.js.map