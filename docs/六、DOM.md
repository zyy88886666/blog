```
obj.setAttribute('属性', '属性的值');  //更改某个元素的属性值
obj.getAttribute('属性');     //获得某个元素的属性值
创建元素节点  ele.createElement(" ")
创建文本节点 ele.createTextNode(" ")
添加孩子  element.appendChild(newChild)
插入节点 targetNode.parentNode.insertBefore(newNode,targetNode)
删除节点  targetNode.parentNode.removeChild(targetNode)
替换节点  reference = ele.replaceChild(newChild,oldChild)  //ele节点里要有oldChild节点
复制节点，创建副本，返回指向该副本的新指针 reference = node.cloneNode(bealoon) //若为true，则连同node里面的子节点一同复制，若为false，则只复制元素节点（包括属性节点，不包括文本节点）
检查是否有子元素 bealoonValue = ele.hasChildNodes//检查一个元素是否含有子元素，若有子元素则返回true，文本节点和属性节点永远返回false

node.nodeName  只读属性，返回元素的值，若为元素节点，返回节点元素相当于tagName，若为属性节点，则返回属性名字，若为文本节点，则返回文本值 
nodeType
1  元素节点
2  属性值
3  文本值

nodeValue  读写属性，文本值（属性和文本节点，元素节点返回null）
parentNode 父节点
childNodes 返回一个数组，给定元素孩子节点组成
firstChild
lastChild
nextSibling  下一个元素
previousSibling  上一个元素

```
