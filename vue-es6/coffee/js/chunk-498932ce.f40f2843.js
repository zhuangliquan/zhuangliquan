(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-498932ce"],{1276:function(t,e,n){"use strict";var i=n("d784"),a=n("44e7"),r=n("825a"),s=n("1d80"),o=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("14c3"),f=n("9263"),d=n("d039"),p=[].push,g=Math.min,h=4294967295,v=!d((function(){return!RegExp(h,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),r=void 0===n?h:n>>>0;if(0===r)return[];if(void 0===t)return[i];if(!a(t))return e.call(i,t,r);var o,c,u,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,d+"g");while(o=f.call(v,i)){if(c=v.lastIndex,c>g&&(l.push(i.slice(g,o.index)),o.length>1&&o.index<i.length&&p.apply(l,o.slice(1)),u=o[0].length,g=c,l.length>=r))break;v.lastIndex===o.index&&v.lastIndex++}return g===i.length?!u&&v.test("")||l.push(""):l.push(i.slice(g)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,a,n):i.call(String(a),e,n)},function(t,a){var s=n(i,t,this,a,i!==e);if(s.done)return s.value;var f=r(t),d=String(this),p=o(f,RegExp),m=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),k=new p(v?f:"^(?:"+f.source+")",b),x=void 0===a?h:a>>>0;if(0===x)return[];if(0===d.length)return null===l(k,d)?[d]:[];var y=0,I=0,C=[];while(I<d.length){k.lastIndex=v?I:0;var S,w=l(k,v?d:d.slice(I));if(null===w||(S=g(u(k.lastIndex+(v?0:I)),d.length))===y)I=c(d,I,m);else{if(C.push(d.slice(y,I)),C.length===x)return C;for(var $=1;$<=w.length-1;$++)if(C.push(w[$]),C.length===x)return C;I=y=S}}return C.push(d.slice(y)),C}]}),!v)},"4b9f":function(t,e,n){},6281:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("99af"),n("fb6a");var i=n("d4ec"),a=n("bee2"),r=function(){function t(){Object(i["a"])(this,t)}return Object(a["a"])(t,[{key:"queryString",value:function(t){var e="";for(var n in t)e+="".concat(n,"=").concat(t[n],"&");return e.slice(0,-1)}}]),t}(),s=new r},"77be":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account"},[n("div",{staticClass:"top"}),n("van-nav-bar",{attrs:{title:"个人资料","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),n("div",{staticClass:"my-bg"},[n("div",{staticClass:"bg",style:{backgroundImage:"url("+t.bg+")"}})]),n("div",{staticClass:"list-box"},[n("van-cell",{attrs:{title:"头像"}},[n("div",{staticClass:"headPortrait fr"},[n("img",{staticClass:"auto-img",attrs:{src:t.userInfo.userImg,alt:""}}),n("van-uploader",{staticClass:"uploader-box",attrs:{"after-read":t.uploadUserImg}})],1)]),n("van-cell",{attrs:{title:"用户id"}},[n("div",{staticClass:"fr"},[t._v(t._s(t.userInfo.userId))])]),n("van-cell",{attrs:{title:"手机号"}},[n("div",{staticClass:"fr"},[t._v(t._s(t.userInfo.phone))])]),n("van-cell",{attrs:{title:"昵称","is-link":""}},[n("div",{staticClass:"fr nicknameinp",on:{click:t.clickPopup}},[t._v(" "+t._s(t.userInfo.nickName)+" ")]),n("van-popup",{style:{width:"80%"},attrs:{round:""},model:{value:t.ispopup,callback:function(e){t.ispopup=e},expression:"ispopup"}},[n("div",{staticClass:"popup-box"},[n("div",{staticClass:"popup-title"},[t._v("更改昵称")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.nickName,expression:"userInfo.nickName"}],ref:"inp",staticClass:"nickname",attrs:{type:"text"},domProps:{value:t.userInfo.nickName},on:{click:t.editTask,change:function(e){return t.modifyUserInfo("nickName","/updateNickName")},input:function(e){e.target.composing||t.$set(t.userInfo,"nickName",e.target.value)}}}),n("van-button",{attrs:{color:"#0c34ba",size:"small"},on:{click:t.clickPopup}},[t._v("完成")])],1)])],1),n("div",{staticClass:"desc-box"},[n("div",{staticClass:"desc-title"},[t._v("简介")]),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.desc,expression:"userInfo.desc"}],staticClass:"text-area",attrs:{placeholder:"这个家伙很懒，什么都没留下!"},domProps:{value:t.userInfo.desc},on:{change:function(e){return t.modifyUserInfo("desc","/updateDesc")},input:function(e){e.target.composing||t.$set(t.userInfo,"desc",e.target.value)}}})])])],1)],1)},a=[];n("c975"),n("a15b"),n("ac1f"),n("5319"),n("1276");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("4b9f");var s=n("6281"),o={data:function(){return{userInfo:{},maxSize:1048576,ispopup:!1,bg:""}},created:function(){this.getUserInfo(),this.getBg()},methods:{back:function(){this.$router.go(-1)},getUserInfo:function(){var t=this,e=localStorage.getItem("TK");if(!e)return this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findAccountInfo",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),"B001"==e.data.code&&(t.userInfo=e.data.result[0])})).catch((function(e){t.$toast.clear()}))},getBg:function(){var t=this,e=localStorage.getItem("TK");e&&this.axios({method:"GET",url:"/findMy",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),"A001"==e.data.code&&(t.bg=e.data.result[0].userBg)})).catch((function(e){t.$toast.clear()}))},uploadUserImg:function(t){var e=this,n=localStorage.getItem("TK");if(n){var i=t.file.type.split("/")[1],a=["png","gif","jpg","jpeg"];if(-1!==a.indexOf(i))if(this.maxSize<t.file.size)this.$notify({message:"上传文件大小不能超过"+this.maxSize/1024+"KB",color:"#fff",background:"#0c34ba"});else{var r=t.content.replace(/data:image\/[A-Za-z]+;base64,/,""),o=s["a"].queryString({appkey:this.appkey,tokenString:n,imgType:i,serverBase64Img:r});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:"/updateAvatar",data:o}).then((function(t){e.$toast.clear(),"H001"==t.data.code&&(e.userInfo.userImg=t.data.userImg)})).catch((function(t){e.$toast.clear()}))}else this.$notify({message:"图片类型只支持"+a.join(","),color:"#fff",background:"#0c34ba"})}},modifyUserInfo:function(t,e){var n=this,i=localStorage.getItem("TK");if(i){var a=s["a"].queryString(r({appkey:this.appkey,tokenString:i},t,this.userInfo[t]));setTimeout((function(){n.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),n.axios({method:"POST",url:e,data:a}).then((function(t){n.$toast.clear(),n.$toast(t.data.msg)})).catch((function(t){n.$toast.clear()}))}),800)}},clickPopup:function(){this.ispopup=!this.ispopup},editTask:function(){var t=this;this.$nextTick((function(){var e=t.userInfo.nickName.length;t.$refs.inp.focus(),t.$refs.inp.selectionStart=e,t.$refs.inp.selectionEnd=e}))}}},c=o,u=n("2877"),l=Object(u["a"])(c,i,a,!1,null,null,null);e["default"]=l.exports},"99af":function(t,e,n){"use strict";var i=n("23e7"),a=n("d039"),r=n("e8b5"),s=n("861d"),o=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),f=n("1dde"),d=n("b622"),p=n("2d00"),g=d("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",m=p>=51||!a((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=f("concat"),k=function(t){if(!s(t))return!1;var e=t[g];return void 0!==e?!!e:r(t)},x=!m||!b;i({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,i,a,r,s=o(this),f=l(s,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?s:arguments[e],k(r)){if(a=c(r.length),d+a>h)throw TypeError(v);for(n=0;n<a;n++,d++)n in r&&u(f,d,r[n])}else{if(d>=h)throw TypeError(v);u(f,d++,r)}return f.length=d,f}})},a15b:function(t,e,n){"use strict";var i=n("23e7"),a=n("44ad"),r=n("fc6a"),s=n("a640"),o=[].join,c=a!=Object,u=s("join",",");i({target:"Array",proto:!0,forced:c||!u},{join:function(t){return o.call(r(this),void 0===t?",":t)}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},bee2:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,"a",(function(){return a}))},c975:function(t,e,n){"use strict";var i=n("23e7"),a=n("4d64").indexOf,r=n("a640"),s=n("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,u=r("indexOf"),l=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t){return c?o.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},d4ec:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return i}))}}]);
//# sourceMappingURL=chunk-498932ce.f40f2843.js.map