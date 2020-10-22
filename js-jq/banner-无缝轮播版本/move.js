function move3(dom,attr,val){
    // dom.timer = null;
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        var current = getComputedStyle(dom,null)[attr];
         current = parseInt(current);
         var speed = (val - current) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//三元运算
        if(current == val){
            clearInterval(dom.timer);
            return false;
        }
        dom.style[attr] = current + speed +"px";
    },30)
}
// // 1.0 定义动画函数
// function move3(dom,attr,val){
//     // 3.0 属性绑定
//     dom.timer = null;
//     // 3.0.1 清除定时器函数
//     clearInterval(dom.timer);
//     // 4.0 执行定时器函数
//     dom.timer = setInterval(function(){
//         // 6.0 获取dom当前属性值 attr
//         var current = getComputedStyle(dom,null)[attr];
//          //7.0 取整
//          current = parseInt(current);
//          // 5.0 定义步长
//          var speed = (val - current) / 10;// 此处的5 就是用于控制速度快慢
//         //  此处的数值，如果越小，速度越快
//         //  此处的数值，如果越大，速度越慢
//          // speed 计算的结果带小数的
//         //  Math.floor() 向下取整  0.1  ===> 0 ,-0.2 ===> -1
//         // Math.ceil() 向上取整  0.1 ===>1 , -0.2 ===>0 , 0.3 ===> 1
//         speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//三元运算
//         // 8.0 判断dom是否达到目标属性
//         if(current == val){
//             // 9.0 清除定时器
//             clearInterval(dom.timer);
//             // 10. 终止代码
//             return false;
//         }
//         // 10. 设置dom的属性值
//         dom.style[attr] = current + speed +"px";
//     },30)
// }


