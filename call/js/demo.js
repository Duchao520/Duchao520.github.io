let lxr = [
	{"name":"李茹","phone":"15582408548","pinyin":"liru"},
	{"name":"爸","phone":"13887780039","pinyin":"ba"},
	{"name":"鲍启文","phone":"18388005730","pinyin":"baoqiwen"},
	{"name":"蔡鹤彬","phone":"18588435861","pinyin":"caihebin"},
	{"name":"范婷","phone":"15368133480","pinyin":"fanting"},
	{"name":"关丰宇","phone":"18387179296","pinyin":"guanfengyu"},
	{"name":"李臻","phone":"15520729542","pinyin":"lizhen"},
	{"name":"刘一帆","phone":"18787176932","pinyin":"liuyifan"},
	{"name":"龙伯斌","phone":"15935677485","pinyin":"longbobin"},
	{"name":"徐瑞瑞","phone":"15520720947","pinyin":"xuruirui"},
	{"name":"李茹","phone":"15582408548","pinyin":"liru"},
	{"name":"爸","phone":"13887780039","pinyin":"ba"},
	{"name":"鲍启文","phone":"18388005730","pinyin":"baoqiwen"},
	{"name":"蔡鹤彬","phone":"18588435861","pinyin":"caihebin"},
	{"name":"范婷","phone":"15368133480","pinyin":"fanting"},
	{"name":"关丰宇","phone":"18387179296","pinyin":"guanfengyu"},
	{"name":"李臻","phone":"15520729542","pinyin":"lizhen"},
	{"name":"刘一帆","phone":"18787176932","pinyin":"liuyifan"},
	{"name":"龙伯斌","phone":"15935677485","pinyin":"longbobin"},
	{"name":"徐瑞瑞","phone":"15520720947","pinyin":"xuruirui"},
	{"name":"李茹","phone":"15582408548","pinyin":"liru"},
	{"name":"爸","phone":"13887780039","pinyin":"ba"},
	{"name":"鲍启文","phone":"18388005730","pinyin":"baoqiwen"},
	{"name":"蔡鹤彬","phone":"18588435861","pinyin":"caihebin"},
	{"name":"范婷","phone":"15368133480","pinyin":"fanting"},
	{"name":"关丰宇","phone":"18387179296","pinyin":"guanfengyu"},
	{"name":"李臻","phone":"15520729542","pinyin":"lizhen"},
	{"name":"刘一帆","phone":"18787176932","pinyin":"liuyifan"},
	{"name":"龙伯斌","phone":"15935677485","pinyin":"longbobin"},
	{"name":"徐瑞瑞","phone":"15520720947","pinyin":"xuruirui"},
]
localStorage.lxr = JSON.stringify(lxr);
let data = JSON.parse(localStorage.lxr);
let dl = document.querySelector('dl');
let inputs = document.querySelector('input');
let menu = render(data);
inputs.onkeyup = function(){
	let val = this.value.trim();
	let filter = data.filter(element=>element.name.includes(val)||element.phone.includes(val)||element.pinyin.includes(val))
	render(filter)
}
function render(data){
	let firstObj={};
	data.forEach(value=>{
		let first = value.pinyin.charAt(0).toUpperCase();
		if(!firstObj[first]){
			firstObj[first] = [];	
		}
		firstObj[first].push(value);	
	})
	
	let keys = Object.keys(firstObj).sort();
	dl.innerHTML = '';
	keys.forEach(elements=>{
		dl.innerHTML += `
		<dt>${elements}</dt>
		`
		firstObj[elements].forEach(e=>{
			dl.innerHTML +=`
			<dd><a href='e.phone'>${e.name}</a></dd>
			`
		})
	})
	let tips = document.querySelector('.tip');
	let heights = tips.offsetHeight+tips.offsetTop;
	let dts = document.querySelectorAll('dt');
	
	window.onscroll = function(){
		let st = document.body.scrollTop;
		
		let arr = [];
		dts.forEach(function(value,index){
			
			let height = value.offsetTop;
			
			arr.push(height);
		})
		arr.forEach((value,index)=>{
			if(value<heights+st){
				tips.innerText = `${keys[index]}`
			}
		})
	}
}
