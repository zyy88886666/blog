

//脚本库

//window加载多个函数
function addLoad(func){
    var oldload = window.onload;
    if(typeof window.onload != "function" ){
        window.onload = func ;
    }else{
        window.onload = function() {
            oldload();
            func();
        }
    }
}

//在元素后面添加子元素
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if( parent.lastChild==targetElement ){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSilbing);
    }
}

//增加class
function addClass(ele,value){
    if(!ele.className){
        ele.className = value;
    }else{
        var newClass =  ele.className;
        newClass+= " ";
        newClass+=value;
        ele.className =newClass;
    }
}

//删除class
function removeClass(ele,value){
    if(!ele.className) {

    }else{
        var newClass = ele.className.split(" ");
        newClass.forEach(function(item,index,arr){
            if(item==value){
                 newClass.splice(index-1,1);
            }
            return newClass;
        })
        ele.className = newClass;
    }

}


/////////////////////////////////////////////////////

//判断是否存在某个class类
function hasClass( elements,cName ){ 
  return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
}; 
//增加class类
function addClass( elements,cName ){ 
    if( !hasClass( elements,cName ) ){ 
         elements.className += " " + cName; 
    }; 
}; 
//删除class类
function removeClass( elements,cName ){ 
    if( hasClass( elements,cName ) ){ 
         elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); // replace方法是替换 
    };  
}; 

/////////////////////////////////////////////////////




//模拟call方法
//
Function.prototype.call1 = function (context){
    var context = context || window ;  //判断是否传入参数

    context.fn = this;  //将值复制为函数的属性,新增属性
    
    var args = [];
    for(var i=1 ; i<arguments.length ; i++ ){
        args.push('arguments[' + i + ']');
    }

   var resule = eval('context.fn(' + args + ')');  // 执行方法

    delete context.fn;  //删除属性
    return resule;    
}


//模拟apply的方法
Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}


//模拟bind的返回函数的模拟实现
//
Function.prototype.bind1=function(context){
    var self = this ;
    return function(){
        return self.apply(context);
    }
}

//传参的模拟实现

Function.prototype.bind2=function(context){
    var self = this;

    var args = Array.prototype.slice.call(arguments,1); //获取bind2函数从第二个参数到最后一个参数
    return function(){
        var bindargs = Array.portotype.slice.call(arguments);//这个时候的arguments是指bind返回的函数传入的参数
        return self.apply(context,args.concat(bindargs));
    }
}