// 需求：
    // 1.0 实现自动轮播图
    // 2.0 导航点跟随轮播，小圆点背景色切换高亮
    // 3.0 点击导航点，切换图片
    // 4.0 点击左右按钮切换图片
    // 5.0  ... 无缝轮播图


// 步骤：
    // 1.0 获取相关元素
    var wrapper = document.getElementsByClassName("wrapper")[0];
    var banner = document.getElementsByClassName("banner")[0];
    var propagation = document.getElementsByClassName("propagation")[0];
    var left = document.getElementsByClassName("left")[0];
    var right = document.getElementsByClassName("right")[0];

    var ul = banner.getElementsByTagName("ul")[0];
    var items = banner.getElementsByTagName("li");
    var points = propagation.getElementsByTagName("li");

    // 2.0 定义索引值
    var index = 0; // 轮播图的索引值
    var count = 0;// 导航点的索引值

    // 3.0 定义定时器 
    var timer = null;

    // 4.0 定义宽度
    var width = items[0].offsetWidth;

    // 5.0 定义自动切换图片的函数
    var  autoPlay = function(){
        // 5.0.1 改变索引值
        index ++;
        // 5.0.2 判断 是否大于图片的最大索引值
        if(index > (items.length -1)){
            // 5.0.3 设置index 为 0
            // ---- 改变图片索引值
            index = 1;
            // ---- 设置ul的marginLeft属性位置
            ul.style.marginLeft = 0 +"px";
        }
        // 5.0.4 设置ul的marginLeft
        move3(ul , 'marginLeft',-(index * width));
        console.log(index);

        // ---- 改变导航点索引值 
        count ++;
        // ---- 三元运算
        count = count > (points.length-1) ? 0 : count;
        // 5.0.5 导航点跟随轮播
        for(var i = 0 ; i < points.length ; i ++){
            // 5.0.6 移除所有点的背景色
            points[i].className="";
        }
        // 5.0.7 给索引值对应的导航点添加背景色
        // 修改导航点索引值
        // ---- 改变为导航点索引值
        points[count].className ="active";
    }

    // autoPlay();
    // 6.0 自动轮播
    timer = setInterval(autoPlay,1500);//1.5 执行一次定时器函数
    // 7.0 鼠标移入 停止轮播
    wrapper.onmouseenter = function(){
        // 清除定时器
        clearInterval(timer);
    }
    // 8.0 鼠标移开 继续轮播
    wrapper.onmouseleave = function(){
          // 清除定时器
          clearInterval(timer);
          //继续轮播
          timer = setInterval(autoPlay,1500);
    }
    // 9.0 点击导航点切换图片
    for(var j = 0 ; j < points.length ; j ++){
        // 10.0 属性绑定
        points[j].currentIndex = j;
        // 11.0 事件的绑定
        points[j].onclick = function(){
            // 12.获取当前点击的导航点的currentIndex属性值
            index = this.currentIndex;
            // ---- 给导航点的索引值赋值
            count = this.currentIndex;
            // 13. 排他思想
             // 13.0.1导航点跟随轮播
            for(var i = 0 ; i < points.length ; i ++){
                // 13.0.2移除所有点的背景色
                points[i].className="";
            }
            //  13.0.3 给索引值对应的导航点添加背景色
            // ----- 使用count导航点索引值
            points[count].className ="active";
            // 14.改变ul的水平位置
            move3(ul , "marginLeft",-(index * width));
        }
    }

    // console.log('------------------------------------------------')
    // 15. 点击 左边按钮 切换图片
    left.onclick = function(){
        // index
        // 15.0.1 改变索引值的大小
        index -- ;
        // 15.0.2 判断 
        if(index < 0 ){
            // 15.0.3 给索引值重新赋值
            // console.log(items); items.length-1 是不是最大的索引值
            // ---- 改变图片索引值 为最后第二张图片
            index = items.length-2;
            // ---- 设置ul的marginLeft属性
            ul.style.marginLeft = -(items.length-1)*width+"px";
        }
        // 15.0.4 改变ul水平位置
        move3(ul , 'marginLeft' ,-(index * width));

        // ---- 改变导航点的索引值
        count --;
        // ---- 判断
        count = count < 0 ? points.length-1 : count;
        // 15.0.5 改变导航点背景色
        for(var  i = 0 ; i < points.length ; i ++){
            // 15.0.6 移除所有li标签的背景色
            points[i].className ="";
        }
        // 15.0.7 给当前的li标签设置背景色
        // ---- 改变为导航点索引值 count
        points[count].className = "active";
    }
    // 16. 点击 右边按钮 切换图片
    right.onclick = function(){
        // 16.0.1 改变索引值
        index ++;
        // 16.0.2 判断 
        if(index > (items.length - 1)){
            // 16.0.3 给index 重新赋值
            // ---- 改变图片索引值
            index = 1;
            // ---- 改变ul标签的marginLeft属性值（不是move3函数）
            ul.style.marginLeft = 0;
        }
        //16.0.4 改变ul水平位置
        move3(ul , 'marginLeft' ,-(index * width));
        // ---- 改变导航点索引值 count 自增
        count ++;
        // ---- 判断
        count = count > points.length-1 ? 0 : count;
        // 16.0.5 改变导航点背景色
        for(var  i = 0 ; i < points.length ; i ++){
            // 16.0.6 移除所有li标签的背景色
            points[i].className ="";
        }
        // 16.0.7 给当前的li标签设置背景色
        // ---- 改变为导航点的索引值
        points[count].className = "active";
    }


    // 备注： 由基本轮播图过渡到无缝轮播图。修改逻辑的代码前面 加 "----"