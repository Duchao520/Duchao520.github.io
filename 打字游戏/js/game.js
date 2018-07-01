/*
	属性
		个数
		速度
		哪些字符
		得分
		关卡
		生命
		减分

	方法
		开始
		消除
		产生字符
			个数
			哪些
		下一关
		重新开始


 */
function Game(){
	this.charSheet = [
	['Q','img/Q.png'],
	['W','img/W.png'],
	['E','img/E.png'],
	['R','img/R.png'],
	['T','img/T.png'],
	['Y','img/Y.png'],
	['U','img/U.png'],
	['I','img/I.png'],
	['O','img/O.png'],
	['P','img/P.png'],
	['A','img/A.png'],
	['S','img/S.png'],
	['D','img/D.png'],
	['F','img/F.png'],
	['G','img/G.png'],
	['H','img/H.png'],
	['J','img/J.png'],
	['K','img/K.png'],
	['L','img/L.png'],
	['Z','img/Z.png'],
	['X','img/X.png'],
	['C','img/C.png'],
	['V','img/V.png'],
	['B','img/B.png'],
	['N','img/N.png'],
	['M','img/M.png']
	];
	this.length = 5;
	this.speed = 5;
	this.elements = [];
	this.position = [];
	this.score = 0;
	this.scoreobj = document.querySelector('.score>span');
	this.life = 10;
	this.lifeobj = document.querySelector('.life>span');
	this.gk = 1;
	this.gkobj = document.querySelector('.checkpoint>span');
}
Game.prototype={
	start:function(){
		this.getchars(this.length);
		this.drop();
		this.key();
	},
	/*获取字符*/
	getchars:function(length){
		for(let i=0;i<length;i++){
			this.getchar();
		}
	},
	checkchar:function(num){
		/*return this.elements.some(function(value){
			return value.innerText == this.charSheet[num];
		})*/
		return this.elements.some(value=>value.innerText==this.charSheet[num][0])
	},
	checkposition:function(lefts){
		return this.position.some(function(value){
			return Math.abs(value-lefts)<50;
		})
	},
	getchar:function(){
		// let num = Math.floor(Math.random()*this.charSheet.length);
		let num;
		let lefts;
		let tops = Math.random()*200;
		let divs = document.createElement('div');
		do{
			num = Math.floor(Math.random()*this.charSheet.length);
		}while(this.checkchar(num))
		do{
			lefts = Math.random()*(window.innerWidth-400)+200;
		}while(this.checkposition(lefts))
		
		/*let r = Math.floor(Math.random()*256);
		let g = Math.floor(Math.random()*256);
		let b = Math.floor(Math.random()*256);*/
		divs.classList.add('char');
		divs.innerText = this.charSheet[num][0];

		divs.style.cssText = `
			top:${tops}px;
			left:${lefts}px;
			background-image:url(${this.charSheet[num][1]});
		`
		document.body.appendChild(divs);
		this.elements.push(divs);
		this.position.push(lefts);
	},
	/*字符下落*/
	drop:function(){
		let that = this;
		this.t = setInterval(function(){
			
			for(let i=0;i<that.elements.length;i++){
				let tops = that.elements[i].offsetTop;
				let maxH = window.innerHeight;
				that.elements[i].style.top = `${tops+that.speed}px`
				if(tops >= maxH){
					that.life--;
					that.lifeobj.innerText = that.life;
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);
					that.position.splice(i,1);
					if(that.life==0){
						that.restart();
						
					}
				}
				
			}
			if(that.elements.length<that.length){
				that.getchar();
			}
		},50)
	},
	/*重新开始*/
	restart:function(){
		if(confirm('是否重新开始游戏')){
			console.log(this.elements)
			clearInterval(this.t);
			for(let j=0;j<this.elements.length;j++){
				
				document.body.removeChild(this.elements[j])
				this.elements.splice(j,1);
				// this.position.splice(j,1);
			}
			
			this.elements = [];
			this.score = 0;
			this.life = 10;
			this.start();
		}else{
			clearInterval(this.t);
			/*for(let k=0;i<this.elements.length;k++){
				
				document.body.removeChild(this.elements[k])
				this.elements.splice(k,1);
				this.position.splice(k,1);
			}*/
		}
	},
	/*
	
	 判断按下键位是否为页面中的字符
	 是：删除该字符，添加一个新字符


	*/
	key:function(){
		let that = this;
		document.onkeydown = function(e){

			let char = String.fromCharCode(e.keyCode);
			for(let i=0;i<that.elements.length;i++){
				if(char == that.elements[i].innerText){
					that.score++;
					that.scoreobj.innerText=that.score;
					// console.log(score)

					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);
					that.position.splice(i,1);
					if(that.score>=10){
						that.next()
						that.gk++;
						that.gkobj.innerText = that.gk;
					}
				}
			}
		}
	},
	next:function(){
		clearInterval(this.t);
		for(let i=0;i<this.elements.length;i++){
			document.body.removeChild(this.elements[i])
			this.elements.splice(i,1);
			this.position.splice(i,1);
		}
		this.elements = [];
		this.length++;
		this.score = 0;
		this.start();
	}
}