

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