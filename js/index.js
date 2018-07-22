window.onload=function(){
	let big=document.getElementsByClassName("big")[0];
	let nav2=big.getElementsByClassName("nav2")[0];
	let son3=nav2.getElementsByClassName("son");
	let span2=nav2.getElementsByClassName("shouji");
	console.log(big,nav2,son3,span2);
	for(let i=0;i<son3.length;i++){
		span2[i].onmouseenter=function(){	
		    son3[i].style.height="229px";	
		}
		span2[i].onmouseleave=function(){
			son3[i].style.height=0;
		}
		
	}
	let logo=document.getElementsByClassName("logo")[0];
	let nav3=logo.getElementsByClassName("nav3")[0];
	let son=nav3.getElementsByClassName("son")[0];
	let a=nav3.getElementsByTagName("a")[0];
	console.log(son);
	nav3.onmouseenter=function(){
		son.style.height="85px";
		son.style.boxShadow="0 2px 2px 2px black";
		nav3.style.backgroundColor="#fff";
		a.style.color="#ff6700";
	}
	nav3.onmouseleave=function(){
		son.style.height="0px";
		son.style.boxShadow="none";
		nav3.style.background="#424242";
		a.style.color="#b0b0b0";
	}
	let aside=document.getElementsByClassName("aside")[0];
	let son1=aside.getElementsByClassName("son");
	let ha=aside.getElementsByClassName("ha");
	console.log(aside,son1,ha);
	for(let i=0;i<ha.length;i++){
		ha[i].onmouseenter=function(){
			ha[i].style.background="#ff6700";
			son1[i].style.display="block";
		}
		ha[i].onmouseleave=function(){
			ha[i].style.background="none";
			son1[i].style.display="none";
		}
	}
	// let hea=document.getElementsByClassName("hea")[1];
	// let more=hea.getElementsByClassName("more")[0];
	// let span=more.getElementsByTagName("span");
	// let son2=more.getElementsByClassName("son");
	// console.log(hea,more,son2,span);
	// for(let i=0;i<son2.length;i++){
	// 	span[i].onmouseenter=function(){
	// 		for(j=0;j<son2.length;j++){
	// 		son2[j].style.display="none";
	// 		}
	// 		son2[i].style.display="block";
	// 	}

	// }
	let hea=document.getElementsByClassName("hea");
	function xxk(hea,i){
		let more=hea[i].getElementsByClassName("more")[0];
		let span=more.getElementsByTagName("span");
		let son2=more.getElementsByClassName("so");
		console.log(hea,more,son2,span);
		for(let i=0;i<son2.length;i++){
			span[i].onmouseenter=function(){
				for(j=0;j<son2.length;j++){
				son2[j].style.display="none";
				span[j].style.color="#424242";
				span[j].style.borderBottom=0;
				}
				son2[i].style.display="block";
				span[i].style.borderBottom="2px solid #ff6700";
				span[i].style.color="#ff6700";
			}

		}
	}
	xxk(hea,1);
	xxk(hea,2);
	xxk(hea,3);
	xxk(hea,4);
	xxk(hea,5);
	
}

