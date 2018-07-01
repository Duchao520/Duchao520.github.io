
	/*顶部*/
	/*let wode = document.querySelectorAll('.wode');
	let taobao = document.querySelector('.wode>.taobao');
	let shoucang = document.querySelector('.wode>.shoucang');
	let phone = document.querySelector('.phone');
	let erweima = document.querySelector('.erweima');
	let shangjia = document.querySelector('.shangjia');
	let wangzhan = document.querySelector('.wangzhan');
	fn(wode[0],taobao);
	fn(wode[1],shoucang);
	fn(phone,erweima);
	fn(wode[2],shangjia);
	fn(wode[3],wangzhan);
	function fn(e,element){
		e.onmouseenter = function(){
			element.classList.remove('none');
			element.classList.add('block');
		}
		e.onmouseleave = function(){
			element.classList.remove('block');
			element.classList.add('none');
		}
	}*/
	/*侧导航*/
	/*let asidelis = document.querySelectorAll('.aside>li');
	let asidelis2 = document.querySelectorAll('.aside>li>.aside-menu');
	for(let i=0;i<asidelis.length;i++){
		fn(asidelis[i],asidelis2[i]);
	}*/
	/*banner*/
	/*let bannerPic = document.querySelectorAll('.banner-pic')
	let banner = document.querySelector('.banner>main')
	let now=next=0;
	let widths = bannerPic[0].offsetWidth;
	let t;
	let flag = true;
	let lunbos = document.querySelectorAll('.lunbo>a>li');
	console.log(lunbos)
	t = setInterval(fn1,3000);
	banner.onmouseenter = function(){
		clearInterval(t)
	}
	banner.onmouseleave = function(){
		t = setInterval(fn1,3000);
	}
	for(let i=0;i<lunbos.length;i++){
	lunbos[i].onmouseenter = function(){
		
		
		if(next==bannerPic.length){
			next=0;
		}
		if(i==now){
			return
		}
		if(!flag){
			return
		}
		flag=false;
		if(now<i){
			bannerPic[i].style.left=`${widths}px`;
			animate(bannerPic[now],{left:-widths});
			animate(bannerPic[i],{left:0},function(){
		flag=true;
	});	
			lunbos[now].classList.remove('first');
			lunbos[i].classList.add('first');
		}else if(now>i){
			bannerPic[i].style.left=`${-widths}px`;
			animate(bannerPic[now],{left:widths});
			animate(bannerPic[i],{left:0},function(){
		flag=true;
	});	
			lunbos[now].classList.remove('first');
			lunbos[i].classList.add('first');
		}
		now=next=i;
	}
}
	function fn1(){
		next++;
		if(next==bannerPic.length){
		next=0;
	}
		bannerPic[next].style.left=`${widths}px`;
		animate(bannerPic[now],{left:-widths});
		animate(bannerPic[next],{left:0});
		now=i=next;
		for(let i=0;i<lunbos.length;i++){
			
			lunbos[i].classList.remove('first')
		}
			lunbos[now].classList.add('first');

	}

}*/