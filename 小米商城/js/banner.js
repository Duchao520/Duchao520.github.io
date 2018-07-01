

$(function(){
// let car = document.getElementsByClassName('shop-car')
/*let gouwucar = document.getElementsByClassName('gouwucar')*/
/*let xuanxiangs = document.getElementsByClassName('xuanxiang-1')
let banner=$('.banner')[0]
let bannerPic=$('.banner-1-pic')
let yuans = $('.yuan-1')
let left=$('.left')[0];
let right=$('.right')[0];
let flag=true;
let now=next=0;
let t;
let widths=banner.offsetWidth;*/
// console.log(widths)
/*购物车*/
/*gouwucar[0].onmouseover = function(){
		car[0].style.display = 'block';
		// car[0].style.height = '98px';
		// car[0].innerText = '购物车中还没有商品赶紧选购吧'
	}
gouwucar[0].onmouseout = function(){
		car[0].style.display= 'none';
		// car[0].style.height = 0;
		
		// car[0].innerText = ''
		

	}
*/
/*导航选项卡*/
/*let navlis = document.querySelectorAll('.navi-mid>li');
let navlis2 = document.querySelectorAll('.navi-mid>li>ul>li');
for(let i=0;i<navlis.length;i++){
	for(let j=0;j<navlis2.length;j++){
		
		navlis2[j].classList.add('none')
	}
	
	navlis[i].onmouseenter = function(){
		let navAbout = this.querySelectorAll('.navi-mid>li>ul')[0];
		navAbout.style.height = '230px';
		for(let k=0;k<navlis2.length;k++){
			navlis2[k].classList.remove('none')
			navlis2[k].classList.add('block')
		}
		
	}
	navlis[i].onmouseleave = function(){
		let navAbout = this.querySelectorAll('.navi-mid>li>ul')[0];
		navAbout.style.height = 0;
		for(let k=0;k<navlis2.length;k++){
			navlis2[k].classList.remove('block')
			navlis2[k].classList.add('none')
		}
	}
}*/

/*搜索框*/
/*let search = document.querySelector('.sousuokuang')

search.onfocus = function(){
	let searchList = document.querySelector('.searchList');
	searchList.classList.remove('none');
	searchList.classList.add('block');
}
search.onblur = function(){
	let searchList = document.querySelector('.searchList');
	searchList.classList.remove('block');
	searchList.classList.add('none');
}*/
/*侧导航选项卡*/	
/*	for(let i=0;i<xuanxiangs.length;i++){
		xuanxiangs[i].onmouseenter = function(){
			let item = this.getElementsByClassName('item')[0];
			item.classList.remove('none')
			item.classList.add('block')
			// item.className = 'item block'
		}
		xuanxiangs[i].onmouseleave = function(){
			let item = this.getElementsByClassName('item')[0];
			item.classList.remove('block')
			item.classList.add('none')
			// item.className = 'item none'
		}
	}
t=setInterval(fn,3000)
banner.onmouseenter = function(){
		clearInterval(t)
	}
banner.onmouseleave = function(){
		t=setInterval(fn,3000);
	}
left.onclick=function(){
	if(!flag){
		return
	}
	fn()
	flag=false
}
right.onclick=function(){
	if(!flag){
		return
	}
	fn1()
	flag=false
}
for(let i=0;i<yuans.length;i++){
	yuans[i].onclick = function(){
		if(i==now){
			return
		}
		if(now<i){
			bannerPic[i].style.left=`${widths}px`;
			animate(bannerPic[now],{left:-widths});
			animate(bannerPic[i],{left:0});	
			yuans[now].classList.remove('bw');
			yuans[i].classList.add('bw');
		}else if(now>i){
			bannerPic[i].style.left=`${-widths}px`;
			animate(bannerPic[now],{left:widths});
			animate(bannerPic[i],{left:0});	
			yuans[now].classList.remove('bw');
			yuans[i].classList.add('bw');
		}
		now=next=i;
	}
}
function fn(){
	next++;
	if(next==bannerPic.length){
		next=0;
	}
	bannerPic[next].style.left=`${widths}px`;
	animate(bannerPic[now],{left:-widths});
	animate(bannerPic[next],{left:0},function(){
		flag=true;
	})
	now=i=next;
	for(let i=0;i<yuans.length;i++){
			
		yuans[i].classList.remove('bw')
		}
		yuans[now].classList.add('bw');
	
}
function fn1(){
	next--;
	if(next==-1){
		next=bannerPic.length-1;
	}
	bannerPic[next].style.left=`${-widths}px`;
	animate(bannerPic[now],{left:widths});
	animate(bannerPic[next],{left:0},function(){
		flag=true;
	});

	now=i=next;
	for(let i=0;i<yuans.length;i++){
			
		yuans[i].classList.remove('bw')
		}
		yuans[now].classList.add('bw');
}
*/
/*明星单品*/
/*let starforward = $('.anqiu-forward')[0];
let starback = $('.anqiu-back')[0];
let danpinPic = $('.danpin-pic')[0];
let flag1 = true;
starforward.onclick = function(){
	danpinPic.style.left = '0px';
	starforward.style.cssText = `color:#afb7c1;`
	starback.style.cssText = `color:#e0e0e2;`;

}
starback.onclick = function(){
	danpinPic.style.left = '-1240px';
	starback.style.cssText = `color:#afb7c1;`
	starforward.style.cssText = `color:#e0e0e2;`;
}
danpinPic.onmouseenter = function(){
	clearInterval(t1);
}
danpinPic.onmouseleave = function(){
	t1 = setInterval(function(){
	// let lefts = danpinPic.style.left;
	if(flag1){
		danpinPic.style.left = '-1240px';
		starback.style.cssText = `color:#afb7c1;`
		starforward.style.cssText = `color:#e0e0e2;`;
	}
	if(!flag1){
		danpinPic.style.left = '0px';
		starforward.style.cssText = `color:#afb7c1;`
		starback.style.cssText = `color:#e0e0e2;`;
	}
	flag1 = !flag1
},5000)
}
let t1 = setInterval(function(){
	// let lefts = danpinPic.style.left;
	if(flag1){
		danpinPic.style.left = '-1240px';
		starback.style.cssText = `color:#afb7c1;`
		starforward.style.cssText = `color:#e0e0e2;`;
	}
	if(!flag1){
		danpinPic.style.left = '0px';
		starforward.style.cssText = `color:#afb7c1;`
		starback.style.cssText = `color:#e0e0e2;`;
	}
	flag1 = !flag1
},5000)*/

/*智能硬件选项卡*/
/*let menu = document.querySelectorAll('.menu')
let xia = document.querySelectorAll('.xia')
for(let k=0;k<menu.length;k++){
let menus = menu[k].getElementsByTagName('li')
let shangpin = xia[0].querySelectorAll('.shangpin');

for(let i=0;i<menus.length;i++){
	menus[i].onmouseenter = function(){
		console.log(k)
		for(let j=0;j<menus.length;j++){

			menus[j].classList.remove('underline');
			shangpin[j].classList.remove('block');
			shangpin[j].classList.add('none');
			// console.log(j);
		}
			// console.log(i)
		menus[i].classList.add('underline');
		shangpin[i].classList.remove('none');
		shangpin[i].classList.add('block');
		
		
		
	}
		
}
}*/

})



