/*顶部*/
window.onload = function(){
let wode=$('.wode');
fn(wode.eq(0),$('.wode>.taobao'))
fn(wode.eq(1),$('.wode>.shoucang'))
fn($('.phone'),$('.erweima'))
fn(wode.eq(2),$('.shangjia'))
fn(wode.eq(3),$('.wangzhan'))
function fn(e,element){
	e.mouseenter(function() {
		element.removeClass('none').addClass('block')
	})
	.mouseleave(function() {
		element.removeClass('block').addClass('none')
	});
}
/*侧导航*/
$('.aside>li').each(function() {
	fn($('.aside>li'),$(this).children('.aside>li>.aside-menu'))
});
/*BANNER*/
let bannerPic=$('.banner-pic')
let banner = $('.banner>main')
let now=next=0;
let t;
let lunbos = $('.lunbo>a>li')
t = setInterval(fn1,3000);
banner.mouseenter(function() {
	clearInterval(t)
	/* Act on the event */
}).
mouseleave(function() {
	t = setInterval(fn1,3000);
	/* Act on the event */
});
lunbos.mouseenter(function() {
	let num=$(this).index('.lunbo>a>li')
	next = num-1;
	fn1()
	/* Act on the event */
});
function fn1(){
  
  next++
  if(next==bannerPic.length){
    next=0;
  }
 
  bannerPic.eq(now).fadeOut(800);
  bannerPic.eq(next).fadeIn(800);
  lunbos.eq(now).removeClass('first');
  lunbos.eq(next).addClass('first');
  now=next
}
}