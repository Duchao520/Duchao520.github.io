let music = document.querySelector('.music');
let name = document.querySelector('.name');
let lyrics = document.querySelector('.lyric');
let audio = document.querySelector('audio');
let pause = document.querySelector('.pause');
let pic = document.querySelector('.music-pic>img');
let now = document.querySelector('.now');
let alltime = document.querySelector('.musictime')
let num = 0;
let scrollbar=document.querySelector('.scrollbar');
render(database[num]);
let i=0;
pause.onclick = function(){
	if(audio.paused){
		audio.play();
		pause.classList.remove('icon-pause');
		pause.classList.add('icon-play');
	}else{
		audio.pause();
		pause.classList.remove('icon-play');
		pause.classList.add('icon-pause');
	}
	
}
function render(data){
	music.innerText=data.songs;
	name.innerText=data.name;
	pic.src = data.photo;
	audio.src = data.src;
	alltime.innerText=data.alltime;
	lyrics.innerText = '';
	for(let i=0;i<data.lyrics.length;i++){
		lyrics.innerHTML+=`<li>${data.lyrics[i].lyric}</li>`
	}
	
}
audio.ontimeupdate = function(){
	let ct = audio.currentTime;
	let dt = audio.duration;
    //时间更新
    let min=Math.floor(audio.currentTime/60)>9?Math.floor(audio.currentTime/60):`0${Math.floor(audio.currentTime/60)}`;
    let sec=Math.floor(audio.currentTime%60)>9?Math.floor(audio.currentTime%60):`0${Math.floor(audio.currentTime%60)}`;
    let times = `${min}:${sec}`;
    now.innerText= times;
if(times==1){
	num++;
}

    //进度条更新
    let bili=ct/dt;
    scrollbar.style.width=`${bili*100}%`;
    database[i].lyrics.forEach((ele,index)=>{
        if(ele.time==times){
        let j=index;
        if(index<6){
            index = 0;
        }else{
            index-=6;
        }
        lyrics.innerHTML='';
        for(let j=index;j<database[i].lyrics.length;j++){
            lyrics.innerHTML+=`
						<li class="list${j}">${database[i].lyrics[j].lyric}</li>
					`;
        }
        document.querySelector(`.list${j}`).style.color = '#C62F2F';
    }
})

    //歌曲切换
    let before=document.querySelector('.icon-shangyishou');
    let next=document.querySelector('.icon-xiayishou');
    before.onclick = function(){
        if(num==0){
            if(i==0){
                i=database.length;
            }
            i--;
        }else if(num==1){
            i = Math.floor(Math.random()*database.length);
        }
        render(database[i]);
        audio.play();
    }
    next.onclick = function(){
        if(num==0){
            i++;
            if(i==database.length){
                i=0;
            }
        }else if(num==1){
            i = Math.floor(Math.random()*database.length);
        }
        render(database[i]);
        audio.play();
    }
}
//console.dir(audio)
