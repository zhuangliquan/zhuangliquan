webpackJsonp([31],{"/6uz":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("mvHQ"),a=o.n(s),n=(o("eqfM"),o("/QYm")),c={name:"register",data:function(){return{account:"",code:"",codeShow:!0,loginMode:"验证码登录",loginModeOff:!1,statement:!0,attcode:!0,showbtn:!0,code_ts:"获取验证码",sec:60,websock:null,keying:"",signIn:!1,discUrl:"",environment:"",webscoketFlag:!0,inputPhoneError:"",inputCodeError:"",disCode:!0,placeCode:"请点击获取短信验证码"}},watch:{account:function(t){var e=/\b1[3456789]\d{9}\b/g.test(t);this.attcode=!e}},destroyed:function(){this.websock&&this.websock.close()},created:function(){localStorage.setItem("abnormal","true"),localStorage.getItem("LoginAccount")?this.account=localStorage.getItem("LoginAccount"):this.account=this.$route.params.phone,this.discUrl="47.74.187.199";var t=JSON.parse(localStorage.getItem("remember"));"fictitious"===t.environment?this.account=t.LoginAccount:this.account=this.$route.params.phone},methods:{clickCode:function(){this.showbtn&&""===this.code&&Object(n.a)({duration:1e3,position:"bottom",message:"请先获取手机验证码"})},inputPhone:function(){var t=this.account,e=/\b1[3456789]\d{9}\b/g.test(t);this.inputPhoneError=e?"":"手机号格式错误，请重新填写！"},inputCode:function(){var t=this.code,e=/^\d{5}$/g.test(t);this.inputCodeError=e?"":"验证码输入有误，请重新确认！"},getyzcode:function(){var t=this,e=this;this.disCode=!1,this.placeCode="请输入短信验证码",this.$axios.get("http://"+this.discUrl+":7777/api/user/smsregister/"+this.account).then(function(o){if(0===o.data.code&&null!=o.data.object){e.$refs.code.focus(),Object(n.a)({duration:1e3,position:"bottom",message:"验证码发送成功"}),t.keying=o.data.object.keying;var s=setInterval(function(){t.sec=t.sec-1,t.code_ts=t.sec+"S后重试",t.showbtn=!1,0===t.sec&&(clearInterval(s),t.sec=60,t.code_ts=t.sec+"S后重试",t.showbtn=!0)},1e3)}else"手机号已注册"===o.data.msg?(t.signIn=!0,t.$axios.get("http://"+t.discUrl+":7777/api/user/sms/"+t.account).then(function(o){if(0===o.data.code&&null!=o.data.object){e.$refs.code.focus(),Object(n.a)({duration:1e3,position:"bottom",message:"验证码发送成功"}),t.keying=o.data.object.keying;var s=setInterval(function(){t.sec=t.sec-1,t.code_ts=t.sec+"S后重试",t.showbtn=!1,0===t.sec&&(clearInterval(s),t.sec=60,t.code_ts=t.sec+"S后重试",t.showbtn=!0)},1e3)}})):Object(n.a)({duration:1e3,position:"bottom",message:"验证码发送失败"})})},getLogin:function(t){if(""!==this.code){var e=this;e.global.ws&&1==e.global.ws.readyState&&(e.global.ws.onopen=e.onopen()),e.global.ws.onmessage=function(t){e.websocketonmessage(t)}}else Object(n.a)({duration:1e3,position:"bottom",message:"验证码不能为空"})},onopen:function(){var t=void 0;t=this.signIn?{action:"login",reqID:4,data:{loginType:2,account:"",password:"",phone:this.account,loginMac:localStorage.uuid,client:"Mobile",version:localStorage.getInfo,keying:this.keying,code:this.code,reconnection:!1}}:{action:"register",reqID:1,data:{phone:this.account,keying:this.keying,password:"",code:this.code,is_sim:0}},this.global.ws.send(a()(t))},websocketonerror:function(){this.getLogin()},websocketonmessage:function(t){this.redata=JSON.parse(t.data);if("login"===this.redata.action||"register"===this.redata.action)if(0===this.redata.data.code){null!==this.redata.data.object&&(localStorage.setItem("uid",this.redata.data.object.id),localStorage.setItem("account",this.redata.data.object.account)),localStorage.setItem("Flag","isLogin"),localStorage.setItem("phone",this.account),localStorage.remember?this.$router.push({path:"home"}):this.$router.push({name:"home",params:{showRisk:"1"}}),localStorage.setItem("LoginAccount",this.account),localStorage.setItem("LoginCode",this.code),localStorage.setItem("LoginKeying",this.keying),localStorage.setItem("LoginMode","codeLogin");var e={};e.LoginAccount=this.account,e.environment=localStorage.getItem("environment"),localStorage.setItem("remember",a()(e))}else null!==this.redata.data.msg&&Object(n.a)({duration:1e3,position:"bottom",message:this.redata.data.msg})},websocketclose:function(t){}}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logon"},[o("div",{staticClass:"login-img"}),t._v(" "),o("div",{staticClass:"upData-input"},[o("van-cell-group",[o("van-field",{attrs:{placeholder:"手机号","error-message":t.inputPhoneError},on:{input:t.inputPhone},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),t._v(" "),o("van-field",{directives:[{name:"show",rawName:"v-show",value:t.codeShow,expression:"codeShow"}],ref:"code",staticClass:"forget-password1",attrs:{placeholder:t.placeCode,disabled:t.disCode,"error-message":t.inputCodeError},on:{input:t.inputCode,click:t.clickCode},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[t.showbtn?o("van-button",{staticClass:"code",attrs:{slot:"button",disabled:t.attcode},on:{click:function(e){return e.stopPropagation(),t.getyzcode(e)}},slot:"button"},[t._v("获取验证码")]):o("van-button",{staticClass:"code",attrs:{slot:"button"},slot:"button"},[t._v(t._s(t.code_ts))])],1)],1)],1),t._v(" "),o("van-button",{staticClass:"upBankCard-but",attrs:{disabled:!t.statement},on:{click:t.getLogin}},[t._v("登录")]),t._v(" "),o("div",{staticClass:"tips"},[t._v("未注册的手机号验证后自动创建账号")])],1)},staticRenderFns:[]};var r=o("VU/8")(c,i,!1,function(t){o("I79q")},"data-v-e594ee00",null);e.default=r.exports},I79q:function(t,e){}});
//# sourceMappingURL=31.19ef721047ca8846114f.js.map