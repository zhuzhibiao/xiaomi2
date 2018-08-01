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
		son.style.height="98px";
		son.style.boxShadow="0 2px 10px rgba(0,0,0,0.15)";
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
	let box=document.getElementsByClassName("box")[0];
	let wraper=box.getElementsByClassName("wraper")[0];
	let con=wraper.getElementsByClassName("con");
	let left2=box.getElementsByClassName("prev")[0];
	let right=box.getElementsByClassName("next")[0];
	let btn=wraper.getElementsByClassName("btns")[0];
	let btns=btn.getElementsByClassName("son");
	console.log(box,wraper,con,left2,right,btn,btns);
	let num=0;
	let tt=setInterval(move,2000);
	function move(){
		num++;
		if (num==con.length) {
			num=0;
		}
		for(let i=0;i<con.length;i++){
			con[i].style.zIndex=15;
			btns[i].style.background="#92897C";
		}
		con[num].style.zIndex=20;
		btns[num].style.background="white";

	}
	wraper.onmouseenter=function(){
		clearInterval(tt);
	}
	wraper.onmouseleave=function(){
		tt=setInterval(move,2000);
	}
	left2.onclick=function(){
		move1();
	}
	function move1(){
		num--;
		if (num<0) {
			num=con.length-1;
		}
		for(let j=0;j<con.length;j++){
			con[j].style.zIndex=15;
			btns[j].style.background="#92897C";
		}
		con[num].style.zIndex=20;
		btns[num].style.background="white";
	}
	right.onclick=function(){
		move();
	}
	for(let k=0;k<btns.length;k++){
		btns[k].onclick=function(){
			for(let m=0;m<btns.length;m++){
				con[m].style.zIndex=15;
				btns[m].style.background="#92897c";
			}
			con[k].style.zIndex=20;
			btns[k].style.background="white";
			num=k;
		}
	}
	function fn(a){
	let box1=document.querySelectorAll(".hea3 .son")[a];
	let son4=box1.querySelectorAll(".son1");
	let zuo=box1.querySelector(".left");
	let you=box1.querySelector(".right");
	let btn2=box1.querySelectorAll(".bot .btn")
	let width=parseInt(getComputedStyle(box1,null).width) ;
	let now=0;
	let next=0;
	console.log(box1,son4,zuo,you,width,btn2);
	zuo.onclick=function(){
		if (now==0) {
			return;
		}
		move3();
	}
	you.onclick=function(){
		if (now==son4.length-1) {
			return;
		}
		move2();
	}
	function move2(){
		next++;
		if (next==son4.length) {
			next=0;
		}
		son4[next].style.left=width+"px";
		son4[now].style.left=0;
		for(let i=0;i<btn2.length;i++){
			btn2[i].style.background="#b0b0b0";
			btn2[i].style.border="2px solid white";
		}
		btn2[next].style.border=" 2px solid #ff6700"
		btn2[next].style.background="white";
		animate(son4[now],{left:-width});
		animate(son4[next],{left:0});
		now=next;
	}
	function move3(){
		next--;
		if (next<0) {
			next=son4.length-1;
		}
		son4[now].style.left=0;
		son4[next].style.left=-width+"px";
		animate(son4[now],{left:width});
		animate(son4[next],{left:0});
		for(let i=0;i<btn2.length;i++){
			btn2[i].style.background="#b0b0b0";
			btn2[i].style.border=" 2px solid white";
		}
		btn2[next].style.border=" 2px solid #ff6700";
		btn2[next].style.background="white";
		now=next;
	}
	for(let i=0;i<btn2.length;i++){
		btn2[i].onclick=function(){
			if (i==now) {
				return;
			}
			if (i<now) {
				animate(son4[now],{left:width});
				animate(son4[i],{left:0});
			}
			if (i>now) {
				animate(son4[now],{left:-width});
				animate(son4[i],{left:0});
			}
			for(let j=0;j<btn2.length;j++){
				btn2[j].style.background="#e0e0e0";
				btn2[j].style.border=" 2px solid white";
			}
			btn2[i].style.background="white";
			btn2[i].style.border=" 2px solid #ff6700";
			now=next=i;
		}
	}
  }
  fn(0);
  fn(1);
  fn(2);
  fn(3);
   let btn4=document.querySelectorAll(".big .title .right .btn");
   let chuang=document.querySelector(".big .box2 .boxright");
   let box2=document.querySelector(".big .box2 .box3");
   let widths=parseInt( getComputedStyle(box2,null).width);
   console.log(btn4,chuang,box2,widths);
   let time=0;
   
   btn4[1].onclick=function(){
   		if (time==2) {
   			return;
		   }
		   if(time!=0){
			btn4[0].style.opacity=1;
		   }
		if(time==1){
			btn4[1].style.opacity=0.2;
			
		}
	    
    	time++;
		 chuang.style.transform=`translateX(-${widths*time}px)`;
		 
 	
   }
   btn4[0].onclick=function(){
	   if(time==1){
		   btn4[0].style.opacity=0.2;
	   }
	    if(time!=1){
			btn4[1].style.opacity=1;
		}
   		if (time<0) {
   			time=0;
   		}
    	time--;
 		chuang.style.transform=`translateX(-${widths*time}px)`;
 	
   }
   let times=document.querySelectorAll(".big .box2 .con1 .coundown .time");

   function timee(){
   	let times=document.querySelectorAll(".big .box2 .con1 .coundown .time");
		let now=new Date();
		let fur=new Date(2018,9,1);
		let arr=[];
		let time=Math.floor((fur.getTime()-now.getTime())/1000);
		let month=Math.floor(time/(30*24*60*60));
		
		time=time%(30*24*60*60);
		let day=Math.floor(time/(24*60*60));
	
		time=time%(24*60*60);
		let hour=Math.floor(time/(60*60));
		if (hour<10) {
			hour=`0${hour}`
		}
		arr.push(hour);
		time=time%(60*60);
		let minute=Math.floor(time/60);
		if (minute<10) {
			minute=`0${minute}`
		}
		arr.push(minute);
		let s=time%60;
		if (s<10) {
			s=`0${s}`
		}
		arr.push(s);
		
		times.forEach(function(e,i){
			e.innerText=arr[i];
		})
	}
	timee();
	ttt=setInterval(timee,1000);
	 console.log(times);
	let yc=document.querySelector(".fiex .son1");
	onscroll=function(){
		let h=document.documentElement.scrollTop||document.body.scrollTop;
		if(h>=500){
			yc.style.display="block";
		}
		else{
			yc.style.display="none"
		}
	}

	let box7=document.querySelector(".hea1 .box");
	let btn5=document.querySelectorAll(".hea1 .title .right .btn");
	let time1=0;
	btn5[0].onclick=function(){
		if(time1==1){
			btn5[0].style.opacity=0.2;
		}
		 if(time1!=2){
			 btn5[1].style.opacity=1;
		 }
			if (time1<0) {
				time1=0;
			}
		 time1--;
		 box7.style.transform=`translateX(-${widths*time1}px)`;
	  
	}
	btn5[1].onclick=function(){
		if (time1==3) {
			return;
		}
		if(time1!=1){
		 btn5[0].style.opacity=1;
		}
	 if(time1==2){
		 btn5[1].style.opacity=0.2;
		 
	 }
	 
	 time1++;
	  box7.style.transform=`translateX(-${widths*time1}px)`;
	}
}


