/*获取元素,返回
$(select)

参数:
select 选择器 #box .box div
/^[a-zA-z][a-zA-Z1-6]{0,8}$/
1.判断首字符*/
function $(select,ranger=document){
	if(typeof select == 'string'){
		let selector = select.trim();
		let firstChar = selector.charAt(0);
		if(firstChar == '#'){
			return document.getElementById(selector.substring(1))
		}else if(firstChar == '.'){
			return ranger.getElementsByClassName(selector.substring(1))
		}else if(/^[a-zA-z][a-zA-Z1-6]{0,8}$/.test(selector)){
			return ranger.getElementsByTagName(selector)
		}
	}else if(typeof select == 'function'){
		window.onload = function(){
			select();
		}
	}
}

function html(element,content){
	if(arguments.length==2){
		element.innerHTML=content
	}else if(arguments.length==1){
		return element.innerHTML
	}
}
function text(element,content){
	if(arguments.length==2){
		element.innerText=content
	}else if(arguments.length==1){
		return element.innerText
	}
}
function css(element,attrObj){
	console.log(attrObj)
	for(let i in attrObj){
		element.style[i]=attrObj[i]
	}
}
function on(collection,type,fn){
	for(let i=0;i<collection.length;i++){
		collection[i][type]=fn;
	}
}
function off(collection,type){
	for(let i=0;i<collection.length;i++){
		collection[i][type]=null;
	}
}
/*function animate(element,attrObj,speed,fn){
	let t=setInterval(function(){
		for(let i in attrObj){
			let start=parseInt(getComputedStyle(element,null)[i])
			if(start>=attrObj[i]){
				clearInterval(t);
				if(fn){
					fn.call(element)
				}
			}
			element.style[i]=`${start+speed}px`
		}
	},60)
}*/

/*
	insertAfter()
	某一个元素后面插入
		指定元素的下一个元素节点的前面
		nextElementSibling	insertBefore
*/
/*function insertAfter(insert,positon){
	let next = position.nextElementSibling;
	let parent = position.parentNode;
	if(next){
		parent.insertBefore(insert,next);
	}else{
		parent.appendChild(insert);
	}
}*/
HTMLElement.prototype.insertAfter=function(insert){
	let next = this.nextElementSibling;
	let parent = this.parentNode;
	if(next){
		parent.insertBefore(insert,next);
	}else{
		parent.appendChild(insert);
	}
}
HTMLElement.prototype.appendTo=function(insert){
	let first = this.firstElementChild;
	if(first){
		this.insertBefore(insert,first);
	}else{
		this.appendChild(insert);
	}
}