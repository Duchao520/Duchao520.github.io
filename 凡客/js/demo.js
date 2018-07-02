window.onload = function(){
	/*BANNER*/
	let banner = $('.banner-img')
	let now=next=0;
	let t;
	let yuans=$('.yuan1')
	let left = $('.banner-left')
	let right = $('.banner-right')
	let lis=$('.nav-right>li')
	
	lis.mouseenter(function() {
		
		$(this).children('.menu').animate({
			height: '480'
            
		}).css({
			display:'block'
		});
		/* Act on the event */
	}).mouseleave(function() {
		$(this).children('.menu').animate({
			height: '0'
            
		}).css({
			display:'none'
		});
		/* Act on the event */
	});
	left.click(function() {
		fn1()
		/* Act on the event */
	});
	right.click(function() {
		fn()
		/* Act on the event */
	});
	t = setInterval(fn,4000);
	$('.banner-pic').mouseenter(function() {
		clearInterval(t)
		/* Act on the event */
	})
	.mouseleave(function() {
		t = setInterval(fn,4000);
		/* Act on the event */
	});
	yuans.mouseenter(function() {
		let num = $(this).index('.yuan1')
		next = num-1;
		fn();
		/* Act on the event */
	});
	function fn(){
		next++
  		if(next==banner.length){
  		  next=0;
  		}
 		
  		banner.eq(now).fadeOut(800);
  		banner.eq(next).fadeIn(800);
  		yuans.eq(now).removeClass('yuan3');
  		yuans.eq(next).addClass('yuan3');
  		now=next
	}
	function fn1(){
		next--
		if(next==-1){
			next=banner.length-1
		}
		banner.eq(now).fadeOut(800);
  		banner.eq(next).fadeIn(800);
  		yuans.eq(now).removeClass('yuan3');
  		yuans.eq(next).addClass('yuan3');
  		now=next
	}
}