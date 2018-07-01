window.onload = function(){
	let car = document.getElementsByClassName('shop-car')
	let gouwucar = document.getElementsByClassName('gouwucar')
	let xuanxiangs = document.getElementsByClassName('xuanxiang-1')
	let bannerPic = document.getElementsByClassName('banner-1-pic')
	let banner = document.getElementsByClassName('banner')
	let yuans = document.getElementsByClassName('yuan-1')
	let left = document.getElementsByClassName('left')[0]
	let right = document.getElementsByClassName('right')[0]
	let num = 0;
	
	gouwucar[0].onmouseover = function(){
		car[0].style.display = 'block';
		// car[0].style.height = '98px';
		// car[0].innerText = '购物车中还没有商品赶紧选购吧'
	}
	gouwucar[0].onmouseout = function(){
		car[0].style.display= 'none';
		// car[0].style.height = 0;
		
		// car[0].innerText = ''
		

	}

	
	for(let i=0;i<xuanxiangs.length;i++){
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
	for(let i=0;i<yuans.length;i++){
			bannerPic[i].classList.remove('block');
			bannerPic[i].classList.add('none');
			yuans[i].classList.remove('bw');	
		yuans[i].onclick = function(){
			bannerPic[i].classList.remove('none');
			bannerPic[i].classList.add('block');
			yuans[i].classList.add('bw');
			
		}

	}
	
	/*banner[0].onmouseleave = function(){
		
	}*/
	// console.log(banner)
	let t = setInterval(fn,3000);
	banner[0].onmouseenter = function(){
		clearInterval(t)
	}
	banner[0].onmouseleave = function(){
		t = setInterval(fn,3000);
	}
	left.onclick = fn1
	right.onclick = fn
	function fn(){
		num++;
		if(num == bannerPic.length){
			num = 0;
		}
		for(let i=0;i<bannerPic.length;i++){
			bannerPic[i].style.display = 'none';
			yuans[i].classList.remove('bw');
		}
			bannerPic[num].style.display = 'block';
			yuans[num].classList.add('bw');
	}
	function fn1(){
		num--;
		if(num == -1){
			num = bannerPic.length - 1;
		}
		for(let i=0;i<bannerPic.length;i++){
			bannerPic[i].style.display = 'none';
			yuans[i].classList.remove('bw');
		}
			bannerPic[num].style.display = 'block';
			yuans[num].classList.add('bw');
	}

	
}