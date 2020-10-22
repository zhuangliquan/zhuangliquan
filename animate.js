// 封装1.
// function animate(dom,option){
// 	clearInterval(dom.timer)
// 	dom.timer = setInterval(function(){
// 		var isChange = true;
// 		for(var k in option){// 循环对象  option ==  {width:200,height:300,.....}
// 			var speed = (parseInt(option[k]) - parseInt(getComputedStyle(dom,null)[k])) / 10;
// 			speed = speed > 0 ? Math.ceil(speed) :Math.floor(speed);
// 			// width:100px height:100px
// 			// {width:200,height:300,marginLeft:"100px",marginTop:"150px"}
// 			if(parseInt(getComputedStyle(dom,null)[k]) != parseInt(option[k]) ){
// 				isChange = false;
// 			}
// 			dom.style[k] = parseInt(getComputedStyle(dom,null)[k]) + speed + "px";
// 		}

// 		if(isChange){

// 			clearInterval(dom.timer);
// 			return ;
// 		}
// 	},30)
// }

// 封装2 
function animate(dom,option,callback){
	clearInterval(dom.timer)
	dom.timer = setInterval(function(){
		var isChange = true;
		for(var k in option){// 循环对象  option ==  {width:200,height:300,.....}
			var speed = (parseInt(option[k]) - parseInt(getComputedStyle(dom,null)[k])) / 10;
			speed = speed > 0 ? Math.ceil(speed) :Math.floor(speed);
			// width:100px height:100px
			// {width:200,height:300,marginLeft:"100px",marginTop:"150px"}
			if(parseInt(getComputedStyle(dom,null)[k]) != parseInt(option[k]) ){
				isChange = false;
			}
			dom.style[k] = parseInt(getComputedStyle(dom,null)[k]) + speed + "px";
		}

		if(isChange){
			clearInterval(dom.timer);
			callback && callback();
			return ;
		}
	},30)
}
