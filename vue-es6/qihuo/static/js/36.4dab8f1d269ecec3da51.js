webpackJsonp([36],{jpLK:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("eqfM");var s=i("/QYm"),a=i("mvHQ"),o=i.n(a),r=i("cWLO"),n={name:"closeSheet",data:function(){return{discUrl:"",sheetTradeShow:"",showSellOut:!1,upTitle:"11",stepperMax:null,stepper:1,stopProfit:"11",stopLoss:"1000",styleClass:"start",show:!1,instrumentid:"",newClose:0,bidPrice:0,askPrice:0,uid:"",showClosePosition:!1,average:0,bondClose:0,directionClose:0,serviceChargeClose:0,changeContentOff:!0,detailedData:[],orderList:[],tsNum:0,name:"",nameEN:"",add:0,diffPriceRate:0,NEWCPL:0,Max:0,tick:0,digits:0,tickCopyData:""}},props:{appTick:{type:Array},tradeTab:{type:Number},changeShow:{type:Object}},watch:{appTick:function(t){if(""!==JSON.parse(localStorage.tickCopy)&&(this.tickCopyData=JSON.parse(localStorage.tickCopy)),void 0!==this.tickCopyData[this.instrumentid]){var e=this.tickCopyData[this.instrumentid];this.newClose=e.price.toFixed(this.digits),this.bidPrice=e.bidprice.toFixed(this.digits),this.askPrice=e.askprice.toFixed(this.digits),this.add=(e.price-e.preclose).toFixed(this.digits),0===e.preclose?this.diffPriceRate="--":this.diffPriceRate=((Number(e.price)-Number(e.preclose))/e.preclose*100).toFixed(this.digits)+"%","卖"===this.directionClose?this.NEWCPL=-1*Number((Number(e.price-this.average)*this.stepperMax*this.priceperpoint*this.rate).toFixed(2)):this.NEWCPL=Number((Number(e.price-this.average)*this.stepperMax*this.priceperpoint*this.rate).toFixed(2))}}},created:function(){var t=this.$route.params;this.instrumentid=t.instrumentid,this.name=t.name,this.nameEN=t.nameEN,this.digits=t.digits,this.priceperpoint=t.priceperpoint,this.rate=t.rate,this.directionClose=t.directionClose,this.positionid=t.positionid,this.margin=t.margin,this.commission=t.commission,this.tick=t.tick,this.digits=t.digits,this.uid=this.$route.params.userid,this.average=this.$route.params.average,this.groupid=this.$route.params.groupid,this.stepperMax=t.MaxVolume,this.Max=t.MaxVolume;var e=JSON.parse(localStorage.getItem("tickCopy")),i=e[this.instrumentid];this.newClose=i.price.toFixed(this.digits),this.bidPrice=i.bidprice.toFixed(this.digits),this.askPrice=i.askprice.toFixed(this.digits),this.add=(i.price-i.preclose).toFixed(this.digits),0===i.preclose?this.diffPriceRate="--":this.diffPriceRate=((Number(i.price)-Number(i.preclose))/i.preclose*100).toFixed(this.digits)+"%","卖"===this.directionClose?this.NEWCPL=-1*((i.price-Number(this.average))*this.stepperMax*this.priceperpoint*this.rate).toFixed(2):this.NEWCPL=((i.price-Number(this.average))*this.stepperMax*this.priceperpoint*this.rate).toFixed(2),this.handdleMsg()},methods:{closePosition:function(){this.showClosePosition=!0,this.bondClose=this.margin/this.stepperMax*this.stepper;var t=r.a.decrypt(localStorage.getItem("discount"),""),e=JSON.parse(t);if("{}"!==o()(e.data))for(var i in e.data)i===this.groupid&&(this.serviceChargeClose=this.$route.params.commissionClose*e.data[i]/100*this.stepper);else this.serviceChargeClose=this.$route.params.commissionClose*this.stepper},quickOrder:function(t){this.stepper=t,this.showClosePosition=!0,this.bondClose=this.margin/this.stepperMax*this.stepper;var e=r.a.decrypt(localStorage.getItem("discount"),""),i=JSON.parse(e);if("{}"!==o()(i.data))for(var s in i.data)s===this.groupid&&(this.serviceChargeClose=this.$route.params.commissionClose*i.data[s]/100*this.stepper);else this.serviceChargeClose=this.$route.params.commissionClose*this.stepper},noShowSheet:function(){this.$emit("contentStyle",this.styleClass,this.show),localStorage.removeItem("positionid"),localStorage.removeItem("upTitle"),this.$router.push({name:"trade"})},handdleMsg:function(t){var e=this;e.global.ws&&1===e.global.ws.readyState&&(e.global.ws.onopen=e.onopen()),e.global.ws.onmessage=function(t){e.websocketonmessage(t)}},ConfirmClosing:function(){var t=this;this.global.ws.onopen=this.onopen3(),this.global.ws.onmessage=function(e){t.websocketonmessage3(e)}},onopen3:function(){this.setOrderList(this.stepper);var t=void 0,e=void 0,i=this,a=i.stepper;this.$route.params;if("买"===this.directionClose?e=0:"卖"===this.directionClose&&(e=1),this.orderList.length<=1)t={action:"placeorder",reqID:34,data:{id:null,userid:i.uid,settlementid:null,source:null,type:1,positionid:i.positionid[0],instrumentid:i.instrumentid,orderRef:"9f538075-fff6-4e84-9fee-505ce91fecf6",ordersysid:null,direction:e,volume:i.stepper,volumeTraded:null,priceType:1,limitPrice:0,distanceStopPrice:null,distanceProfitPrice:null,status:null,closed:null,frozenMargin:null,frozenMarginMember:null,tradingDay:null,createtime:null,updatetime:null,canceltime:null,hedge:null,hedgeChannel:null,distanceStop:0,distanceProfit:0}},i.global.ws.send(o()(t));else for(var r=0,n=0,l=this.orderList.length;n<l;n++)t={action:"placeorder",reqID:34,data:{id:null,userid:i.uid,settlementid:null,source:null,type:1,positionid:i.orderList[n].id,instrumentid:i.instrumentid,orderRef:"9f538075-fff6-4e84-9fee-505ce91fecf6",ordersysid:null,direction:e,volume:i.orderList[n].volume,volumeTraded:null,priceType:1,limitPrice:0,distanceStopPrice:null,distanceProfitPrice:null,status:null,closed:null,frozenMargin:null,frozenMarginMember:null,tradingDay:null,createtime:null,updatetime:null,canceltime:null,hedge:null,hedgeChannel:null,distanceStop:0,distanceProfit:0}},n<this.orderList.length-1&&(r+=this.orderList[n].volume),n===this.orderList.length-1&&(t={action:"placeorder",reqID:34,data:{id:null,userid:this.uid,settlementid:null,source:null,type:1,positionid:i.orderList[n].id,instrumentid:this.instrumentid,orderRef:"9f538075-fff6-4e84-9fee-505ce91fecf6",ordersysid:null,direction:e,volume:a-r,volumeTraded:null,priceType:1,limitPrice:0,distanceStopPrice:null,distanceProfitPrice:null,status:null,closed:null,frozenMargin:null,frozenMarginMember:null,tradingDay:null,createtime:null,updatetime:null,canceltime:null,hedge:null,hedgeChannel:null,distanceStop:0,distanceProfit:0}}),i.global.ws.send(o()(t));s.a.loading({message:i.$t("quickC"),duration:0,mask:!0,forbidClick:!0,onClose:function(){i.$router.push({name:"blank"}),Object(s.a)({message:i.$t("quickCS"),position:"bottom",duration:2e3})}})},websocketonmessage3:function(t){var e=this;this.redata=JSON.parse(t.data),"placeorder"===this.redata.action&&(0===this.redata.data.code||s.a.fail({message:e.redata.data.msg,duration:1e3,onClose:function(){e.$router.push({name:"blank"})}})),"notifitrade"!==this.redata.action&&"notifiorder"!==this.redata.action||(this.tsNum++,e.tsNum>=e.orderList.length&&s.a.clear())},onopen:function(){var t;t={action:"loadposition",reqID:45,data:{userId:this.uid}},this.global.ws.send(o()(t))},websocketonmessage:function(t){if(this.redata=JSON.parse(t.data),"notifitrade"===this.redata.action&&null!=this.redata.data&&this.$router.push({name:"blank"}),"loadposition"===this.redata.action&&0===this.redata.data.code&&null!=this.redata.data.object)for(var e=0,i=this.redata.data.object.length;e<i;e++)this.instrumentid===this.redata.data.object[e].instrumentid&&(this.redata.data.object[e].volume=this.redata.data.object[e].volume-this.redata.data.object[e].volumeClosed-this.redata.data.object[e].volumeFrozen,this.detailedData.push(this.redata.data.object[e]))},setOrderList:function(t){var e=t,i=this.detailedData;this.factorial(i,e,0)},factorial:function(t,e,i){return this.orderList.push(t[i]),t[i].volume>=e?t[i].volume:this.factorial(t,e-t[i].volume,i+1)}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"actionSheet"},[i("van-action-sheet",{staticClass:"sheet-box",attrs:{round:"",overlay:""},on:{cancel:t.noShowSheet,"click-overlay":t.noShowSheet},model:{value:t.sheetTradeShow,callback:function(e){t.sheetTradeShow=e},expression:"sheetTradeShow"}},[i("div",{staticClass:"sheet-content"},[i("div",{staticClass:"title"},[i("div",{staticClass:"name"},[i("div",{class:"en"===t.$i18n.locale?"name-en":""},[t._v(t._s("en"===t.$i18n.locale?t.nameEN:t.name))]),t._v(" "),i("div",{staticStyle:{color:"#808080"}},[t._v(t._s(t.instrumentid))])]),t._v(" "),i("div",{staticClass:"close"},[i("div",{style:{color:t.add<0?t.$t("fall"):t.$t("rise")}},[t._v(t._s(t.newClose))]),t._v(" "),i("div",{style:{color:t.add<0?t.$t("fall"):t.$t("rise")}},[t.add>0?i("span",[t._v("+")]):t._e(),t._v(t._s(t.add)+" "+t._s(t.diffPriceRate))])]),t._v(" "),i("div",{staticClass:"BAPrice"},[i("div",[t._v(t._s(t.$t("Buy"))+"："),i("span",{staticStyle:{color:"#FD4F50"}},[t._v(t._s(t.bidPrice))])]),t._v(" "),i("div",[t._v(t._s(t.$t("Sell"))+"："),i("span",{staticStyle:{color:"#0CAD6B"}},[t._v(t._s(t.askPrice))])])])]),t._v(" "),i("div",{staticClass:"title"},[i("div",{staticClass:"name1"},[i("div",[t._v(t._s(t.$t("AveragePrice")))]),t._v(" "),i("div",[t._v(t._s(t.average))])]),t._v(" "),i("div",{staticClass:"name1"},[i("div",[t._v(t._s(t.$t("Number")))]),t._v(" "),i("div",[t._v(t._s(t.stepperMax))])]),t._v(" "),i("div",{staticClass:"name1"},[i("div",[t._v(t._s(t.$t("PL")))]),t._v(" "),i("div",{style:{color:t.NEWCPL<0?t.$t("fall"):t.$t("rise")}},[t._v("$"+t._s(t.NEWCPL))])])]),t._v(" "),i("div",{staticClass:"number number-but",staticStyle:{color:"#222"}},[i("div",{staticClass:"number-title"},[t._v(t._s(t.$t("quickClosing")))]),t._v(" "),i("van-button",{attrs:{disabled:!(t.stepperMax>=1)},on:{click:function(e){return t.quickOrder(1)}}},[t._v("1")]),t._v(" "),i("van-button",{attrs:{disabled:!(t.stepperMax>=2)},on:{click:function(e){return t.quickOrder(2)}}},[t._v("2")]),t._v(" "),i("van-button",{attrs:{disabled:!(t.stepperMax>=3)},on:{click:function(e){return t.quickOrder(3)}}},[t._v("3")]),t._v(" "),i("van-button",{attrs:{disabled:!(t.stepperMax>=4)},on:{click:function(e){return t.quickOrder(4)}}},[t._v("4")]),t._v(" "),i("van-button",{attrs:{disabled:!(t.stepperMax>=5)},on:{click:function(e){return t.quickOrder(5)}}},[t._v("5")]),t._v(" "),i("van-button",{staticClass:"all-but",on:{click:function(e){return t.quickOrder(t.Max)}}},[t._v(t._s(t.$t("whole")))])],1),t._v(" "),i("div",{staticClass:"number"},[i("div",{staticClass:"number-title1",staticStyle:{color:"#222"},style:{"margin-right":"en"===t.$i18n.locale?"0":""}},[t._v(t._s(t.$t("Number")))]),t._v(" "),i("van-stepper",{attrs:{max:t.stepperMax},model:{value:t.stepper,callback:function(e){t.stepper=e},expression:"stepper"}})],1),t._v(" "),i("div",{staticClass:"sheet-but"},[i("div",{on:{click:t.closePosition}},[t._v(t._s(t.$t("CloseP")))])])])])],1),t._v(" "),i("div",{staticClass:"dialog"},[i("div",{staticClass:"sellOut"},[i("van-dialog",{attrs:{closeOnPopstate:"","show-cancel-button":"","cancel-button-text":t.$t("cancel"),cancelButtonColor:"#8C8B8B",confirmButtonColor:"#1988FF","show-confirm-button":"","confirm-button-text":t.$t("ConfirmC")},on:{confirm:t.ConfirmClosing},model:{value:t.showClosePosition,callback:function(e){t.showClosePosition=e},expression:"showClosePosition"}},[i("div",{staticClass:"dia-title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("OrderInform")))]),t._v(" "),i("div",{staticClass:"dia-content",attrs:{slot:"default"},slot:"default"},[i("div",[i("div",[t._v(t._s(t.$t("Name"))+"：")]),t._v(" "),i("div",{staticClass:"dia-content-title"},[t._v(t._s("en"===t.$i18n.locale?t.nameEN:t.name))])]),t._v(" "),i("div",[i("div",[t._v(t._s(t.$t("code"))+"：")]),t._v(" "),i("div",{staticClass:"dia-content-title1"},[t._v(t._s(t.instrumentid))])]),t._v(" "),i("div",[i("div",[t._v(t._s(t.$t("direction"))+"：")]),t._v(" "),i("div",[i("span",{style:{color:"买"===t.directionClose?"#FD4F50":"#0CAD6B"}},[t._v(t._s("买"===t.directionClose?t.$t("buy"):t.$t("sell")))])])]),t._v(" "),i("div",[i("div",[t._v(t._s(t.$t("PL"))+"($)：")]),t._v(" "),i("div",{style:{color:t.NEWCPL<0?"#0CAD6B":"#FD4F50"}},[t._v(" "+t._s(t.NEWCPL))])]),t._v(" "),i("div",[i("div",[t._v(t._s(t.$t("LatestPrice"))+"：")]),t._v(" "),i("div",{style:{color:t.add<0?"#0CAD6B":"#FD4F50"}},[t._v(t._s(t.newClose))])]),t._v(" "),i("div",[i("div",[t._v(t._s(t.$t("AveragePrice"))+"：")]),t._v(" "),i("div",[t._v(t._s(t.average))])]),t._v(" "),i("div",[i("div",[t._v(t._s(t.$t("Qty"))+"：")]),t._v(" "),i("div",[t._v(t._s(t.stepper))])]),t._v(" "),i("div",[i("div",[t._v(t._s(t.$t("margin"))+"：")]),t._v(" "),i("div",[t._v(t._s(t.bondClose))])]),t._v(" "),i("div",[i("div",[t._v(t._s(t.$t("ServiceCharge"))+"：")]),t._v(" "),i("div",[t._v(t._s(t.serviceChargeClose))])])])])],1)])])},staticRenderFns:[]};var d=i("VU/8")(n,l,!1,function(t){i("nY9w")},"data-v-7c67697e",null);e.default=d.exports},nY9w:function(t,e){}});
//# sourceMappingURL=36.4dab8f1d269ecec3da51.js.map