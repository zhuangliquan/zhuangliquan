// 2.0 编写缓动函数
// var  index = 0; //这个方式可以记录某个值
// div.timer = 0;//这个方式也可以记录某个值
function move(dom , option){// 把目标值存在对象 option
    // 2.0.1 先清除定时器
    clearInterval(dom.timer);
    // 2.0.2 定时器 
    dom.timer = setInterval(function(){
        // 2.0.3 定义一个字段 用于判断所有的属性是否达到目标值
        var isChange = true;//如果是true表示所有的属性都已经达到目标值
        // 2.0.4 遍历对象 option
        for(var k  in option){
            // 2.0.5 计算步长
            // 当前值getComputedStyle(dom,null)[k]
            var currentVal = parseInt(getComputedStyle(dom,null)[k]);
            // 目标值option[k]   不确定是否带px 
            var targetVal =  parseInt(option[k]);
            // 2.0.6 步长 ： (目标值 - 当前)/数字
            var speed = (targetVal - currentVal) / 10 ;
            // 2.0.7 步长带小数点  0.2 ===>  1 向上取整 :  -0.2 ===> -1 向下取整
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 2.0.8 判断所有的属性是否到达目标值了 ，如果其中一个属性没达到
            if(currentVal != targetVal){
                isChange = false;
            }
            // 2.0.9设置dom的样式
            dom.style[k] = currentVal + speed + "px";
        }
        
        if(isChange){//2.0.10 所有的属性都已经到达目标值
            // 2.0.11 停止定时器
            clearInterval(dom.timer);
            console.log('test')//判断定时器是否停止了
            // callback
            // 2.0.12 终止代码
            return;
        }
    }, 30);
}



// ======================================================================
// 2.0 编写缓动函数
// var  index = 0; //这个方式可以记录某个值
// div.timer = 0;//这个方式也可以记录某个值
function changeStyle(dom , option , callback){// 把目标值存在对象 option
    dom.timer = null;
    // 2.0.1 先清除定时器
    clearInterval(dom.timer);
    // 2.0.2 定时器 
    dom.timer = setInterval(function(){
        // 2.0.3 定义一个字段 用于判断所有的属性是否达到目标值
        var isChange = true;//如果是true表示所有的属性都已经达到目标值
        // 2.0.4 遍历对象 option
        for(var k  in option){
            // 2.0.5 计算步长
            // 当前值getComputedStyle(dom,null)[k]
            var currentVal = parseInt(getComputedStyle(dom,null)[k]);
            // 目标值option[k]   不确定是否带px 
            var targetVal =  parseInt(option[k]);
            // 2.0.6 步长 ： (目标值 - 当前)/数字
            var speed = (targetVal - currentVal) / 10 ;
            // 2.0.7 步长带小数点  0.2 ===>  1 向上取整 :  -0.2 ===> -1 向下取整
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 2.0.8 判断所有的属性是否到达目标值了 ，如果其中一个属性没达到
            if(currentVal != targetVal){
                // 只要有其中的一个属性 没达到目标值 
                isChange = false;
            }
            // 2.0.9设置dom的样式
            // dom.style.width = dom.style['width']
            dom.style[k] = currentVal + speed + "px";
        }
        
        if(isChange){//2.0.10 所有的属性都已经到达目标值
            // 2.0.11 停止定时器
            clearInterval(dom.timer);
            console.log('test')//判断定时器是否停止了
            // callback 判断是否存在回调函数  存在 就调用
            if(callback){callback()}
            // 2.0.12 终止代码
            return;
        }
    }, 30);
}