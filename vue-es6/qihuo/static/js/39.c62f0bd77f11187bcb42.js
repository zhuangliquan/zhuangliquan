webpackJsonp([39],{Yble:function(e,t){},oLnJ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("eqfM");var s=i("/QYm"),a=i("mvHQ"),n=i.n(a),o={name:"quickBackhand",data:function(){return{discUrl:"",showSellOut:!0,FixedPriceOff:!0,name:"11",stepperOne:0,stepperTwo:1,add:0,balance:0,digits:0,stopProfit:"11",stopLoss:"1000",styleClass:"start",show:!1,instrumentid:"",uid:"",newClose:0,averageClose:0,bondClose:0,directionClose:0,serviceChargeClose:0,changeContentOff:!0,detailedData:[],orderList:[],tsNum:0,tickCopyData:""}},props:{appTick:{type:Array},tradeTab:{type:Number}},watch:{appTick:function(e){if(""!==JSON.parse(localStorage.tickCopy)&&(this.tickCopyData=JSON.parse(localStorage.tickCopy)),void 0!==this.tickCopyData[this.instrumentid]){var t=this.tickCopyData[this.instrumentid];this.newClose=t.price.toFixed(this.digits),this.add=(t.price-t.preclose).toFixed(this.digits)}}},created:function(){var e=this.$route.params;this.instrumentid=e.instrumentid,this.digits=e.digits,this.positionid=this.$route.params.positionid,this.uid=this.$route.params.userid,this.name=e.name,this.nameEN=e.nameEN,this.averageClose=this.$route.params.average;var t=this.$route.params.directionClose;"买"===t?this.directionClose="卖":"卖"===t&&(this.directionClose="买");var i=JSON.parse(localStorage.getItem("tickCopy")),s=i[this.instrumentid];this.newClose=s.price.toFixed(this.digits),this.add=(s.price-s.preclose).toFixed(this.digits),this.stepperOne=this.$route.params.MaxVolume,this.stepper=this.stepperOne,this.bondClose=this.$route.params.margin,this.serviceChargeClose=this.$route.params.commission,this.handdleMsg(),this.closePosi()},methods:{CancelClosing:function(){var e=this;e.global.ws&&1==e.global.ws.readyState&&(this.global.ws.onopen=this.setPlaceOrder2()),e.global.ws.onmessage=function(t){e.getPlaceOrder2(t)}},setPlaceOrder2:function(){var e,t=void 0;"买"===this.directionClose?t=0:"卖"===this.directionClose&&(t=1),e={action:"placeorder",reqID:104,data:{id:null,userid:null,settlementid:null,source:null,type:0,positionid:null,instrumentid:this.instrumentid,orderRef:"b321ecab-d67d-450c-b2bb-b8caa233877d",ordersysid:null,direction:t,volume:this.stepperOne,volumeTraded:null,priceType:1,limitPrice:this.stepperTwo,distanceStopPrice:null,distanceProfitPrice:null,status:null,closed:null,frozenMargin:null,frozenMarginMember:null,tradingDay:null,createtime:null,updatetime:null,canceltime:null,hedge:null,hedgeChannel:null,distanceStop:0,distanceProfit:0}},this.global.ws.send(n()(e))},getPlaceOrder2:function(e){var t=this;this.redata=JSON.parse(e.data),"placeorder"===this.redata.action&&(0===this.redata.data.code?Object(s.a)({message:t.$t("BHTMessage"),duration:1e3,position:"bottom",onClose:function(){t.$router.push({name:"blank"})}}):s.a.fail({message:this.redata.data.msg,duration:1e3,position:"bottom",onClose:function(){t.$router.push({name:"blank"})}}))},noShowSheet:function(){this.$router.push({name:"trade"}),this.$emit("contentStyle",this.styleClass,this.show),localStorage.removeItem("positionid"),localStorage.removeItem("upTitle")},handdleMsg:function(e){var t=this;t.global.ws&&1==t.global.ws.readyState&&t.balanceTimeData(),t.global.ws.onmessage=function(e){t.websocketonmessage(e)}},balanceTimeData:function(){this.global.ws.onopen=this.onopen()},onopen:function(){var e;e={action:"loadusermoney",reqID:17},this.global.ws.send(n()(e))},websocketonmessage:function(e){this.redata=JSON.parse(e.data),0===this.redata.data.code&&"loadusermoney"===this.redata.action&&(this.balance=this.redata.data.object.balance)},ConfirmClosing:function(){var e=this;this.global.ws.onopen=this.onopen3(),this.global.ws.onmessage=function(t){e.websocketonmessage3(t)}},closePosi:function(e){var t=this;t.global.ws&&1==t.global.ws.readyState&&(t.global.ws.onopen=t.setClosePosi()),t.global.ws.onmessage=function(e){t.getClosePosi(e)}},onopen3:function(){this.setOrderList(this.stepper);var e=void 0,t=void 0,i=this,a=i.stepper;if("买"===this.directionClose?t=0:"卖"===this.directionClose&&(t=1),this.orderList.length<=1)e={action:"placeorder",reqID:34,data:{id:null,userid:i.uid,settlementid:null,source:null,type:1,positionid:i.positionid[0],instrumentid:i.instrumentid,orderRef:"9f538075-fff6-4e84-9fee-505ce91fecf6",ordersysid:null,direction:t,volume:i.stepper,volumeTraded:null,priceType:1,limitPrice:0,distanceStopPrice:null,distanceProfitPrice:null,status:null,closed:null,frozenMargin:null,frozenMarginMember:null,tradingDay:null,createtime:null,updatetime:null,canceltime:null,hedge:null,hedgeChannel:null,distanceStop:0,distanceProfit:0}},i.global.ws.send(n()(e));else for(var o=0,l=0,r=this.orderList.length;l<r;l++)e={action:"placeorder",reqID:34,data:{id:null,userid:i.uid,settlementid:null,source:null,type:1,positionid:i.orderList[l].id,instrumentid:i.instrumentid,orderRef:"9f538075-fff6-4e84-9fee-505ce91fecf6",ordersysid:null,direction:t,volume:i.orderList[l].volume,volumeTraded:null,priceType:1,limitPrice:0,distanceStopPrice:null,distanceProfitPrice:null,status:null,closed:null,frozenMargin:null,frozenMarginMember:null,tradingDay:null,createtime:null,updatetime:null,canceltime:null,hedge:null,hedgeChannel:null,distanceStop:0,distanceProfit:0}},l<this.orderList.length-1&&(o+=this.orderList[l].volume),l===this.orderList.length-1&&(e={action:"placeorder",reqID:34,data:{id:null,userid:this.uid,settlementid:null,source:null,type:1,positionid:i.orderList[l].id,instrumentid:this.instrumentid,orderRef:"9f538075-fff6-4e84-9fee-505ce91fecf6",ordersysid:null,direction:t,volume:a-o,volumeTraded:null,priceType:1,limitPrice:0,distanceStopPrice:null,distanceProfitPrice:null,status:null,closed:null,frozenMargin:null,frozenMarginMember:null,tradingDay:null,createtime:null,updatetime:null,canceltime:null,hedge:null,hedgeChannel:null,distanceStop:0,distanceProfit:0}}),i.global.ws.send(n()(e));s.a.loading({message:i.$t("BHTMessage1"),duration:0,mask:!0,forbidClick:!0,onClose:function(){i.$router.push({name:"blank"})}})},websocketonmessage3:function(e){var t=this;this.redata=JSON.parse(e.data),"placeorder"===this.redata.action&&(0===this.redata.data.code?t.CancelClosing():s.a.fail({message:t.redata.data.msg,duration:1e3,onClose:function(){t.$router.push({name:"blank"})}})),"notifitrade"!==this.redata.action&&"notifiorder"!==this.redata.action||(this.tsNum++,t.tsNum>=t.orderList.length&&s.a.clear())},setClosePosi:function(){var e;e={action:"loadposition",reqID:45,data:{userId:this.uid}},this.global.ws.send(n()(e))},getClosePosi:function(e){if(this.redata=JSON.parse(e.data),"notifitrade"===this.redata.action&&null!=this.redata.data&&this.$router.push({name:"blank"}),0===this.redata.data.code&&"loadusermoney"===this.redata.action&&(this.balance=this.redata.data.object.balance),"loadposition"===this.redata.action&&0===this.redata.data.code&&null!=this.redata.data.object)for(var t=0,i=this.redata.data.object.length;t<i;t++)this.instrumentid===this.redata.data.object[t].instrumentid&&(this.redata.data.object[t].volume=this.redata.data.object[t].volume-this.redata.data.object[t].volumeClosed-this.redata.data.object[t].volumeFrozen,this.detailedData.push(this.redata.data.object[t]))},setOrderList:function(e){var t=e,i=this.detailedData;this.factorial(i,t,0)},factorial:function(e,t,i){return this.orderList.push(e[i]),e[i].volume>=t?e[i].volume:this.factorial(e,t-e[i].volume,i+1)}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dialog"},[i("div",{staticClass:"sellOut"},[i("van-dialog",{attrs:{closeOnPopstate:"","show-cancel-button":"","cancel-button-text":e.$t("cancel"),"show-confirm-button":"","confirm-button-text":e.$t("ConfirmB"),cancelButtonColor:"#8C8B8B",confirmButtonColor:"#1988FF"},on:{cancel:e.noShowSheet,confirm:e.ConfirmClosing},model:{value:e.showSellOut,callback:function(t){e.showSellOut=t},expression:"showSellOut"}},[i("div",{staticClass:"dia-title",attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("OrderInform")))]),e._v(" "),i("div",{staticClass:"dia-content",attrs:{slot:"default"},slot:"default"},[i("div",[i("div",[e._v(e._s(e.$t("Name"))+"：")]),e._v(" "),i("div",{staticClass:"dia-content-title"},[e._v(e._s("zh"!==e.$i18n.locale?e.nameEN:e.name))])]),e._v(" "),i("div",[i("div",[e._v(e._s(e.$t("code"))+"：")]),e._v(" "),i("div",{staticClass:"dia-content-title1"},[e._v(e._s(e.instrumentid))])]),e._v(" "),e.FixedPriceOff?i("div",[i("div",[e._v(e._s(e.$t("marketPrice"))+"：")]),e._v(" "),i("div",{style:{color:e.add<0?"#25B100":"#FE0000"}},[e._v(e._s(e.newClose))])]):i("div",[i("div",[e._v(e._s(e.$t("FixedPrice"))+"：")]),e._v(" "),i("div",[e._v(e._s(e.stepperTwo))])]),e._v(" "),i("div",[i("div",[e._v(e._s(e.$t("Number"))+"：")]),e._v(" "),i("div",[e._v(e._s(e.stepperOne))])]),e._v(" "),i("div",[i("div",[e._v(e._s(e.$t("direction"))+"：")]),e._v(" "),i("div",[i("span",{style:{color:"买"===e.directionClose?"#FD4F50":"#0CAD6B"}},[e._v(e._s("买"===e.directionClose?e.$t("buy"):e.$t("sell")))])])]),e._v(" "),i("div",[i("div",[e._v(e._s(e.$t("margin")))]),e._v(" "),i("div",[e._v(e._s(e.bondClose))])]),e._v(" "),i("div",[i("div",[e._v(e._s(e.$t("ServiceCharge"))+"：")]),e._v(" "),i("div",[e._v(e._s(e.serviceChargeClose))])]),e._v(" "),i("div",[i("div",[e._v(e._s(e.$t("balance"))+"：")]),e._v(" "),i("div",[e._v(e._s(e.balance))])])])])],1)])},staticRenderFns:[]};var r=i("VU/8")(o,l,!1,function(e){i("Yble")},"data-v-758d7c97",null);t.default=r.exports}});
//# sourceMappingURL=39.c62f0bd77f11187bcb42.js.map