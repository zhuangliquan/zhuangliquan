// 封装深拷贝
function deepCopy(data){
    // 判断data是应用数据
    // 创建空对象或者空数组
    var  newObj = Array.isArray(data) ? [] : {};
    //  循环数据 data
    for(var key in data){
         //判断当前的属性是否为引用数据类型
        if(typeof data[key] == 'object'){ 
            // 执行递归（函数自身调用）
            // return deepCopy(data[key]);
            newObj[key] = deepCopy(data[key]);
        }else { // 基本数据类型
            newObj[key] = data[key];
        }
    }
    // 返回新数组
    return newObj;
}