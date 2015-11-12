"use strict"
var	framerate=1000/12;

////////animateSprite global vars
var	i=0,k=0,kak=[],kek=[];
for(var g=0;g<10;g++){
	kek[g]=0;
}

function animateSprite(target,distance,frames,orientation,type){
	var	moveOnX,moveOnY,
		lal,lel,op;	
	switch (type){
		case "loop": lal=0,lel=1;break;
		case "comeback": lal=frames,lel=2;break;frames-=1;
		default: break;
	};
	op=Math.abs(i%(frames*lel)-lal)*distance*-1+"px";
	switch (orientation){
		case "onX":	moveOnX=op;
				moveOnY="0px";
				break;
		case "onY":	moveOnX="0px";
				moveOnY=op;
				break;
		default : 	break;
	}
	$(target).css({"background-position":moveOnX+" "+moveOnY});
	i++;
};

function resetBGPos(target){
	$(target).css({"background-position":"0px 0px"});
};

$(document).ready(function(){
	var	/*animE="#imgRun",
		animF="#imgWalk",
		animS="#imgSanic",*/
		animG1="#gears1",
		animG2="#gears2",
		animG3="#gears3";
	//kak[0]=setInterval(function(){animateSprite(animG1,100,9,"onX","loop")},framerate);
	//kak[1]=setInterval(function(){animateSprite(animG3,100,18,"onX","loop")},framerate);
	//kak[2]=setInterval(function(){animateSprite("#box",100,18,"onX","loop")},framerate);
	kak[3]=setInterval(function(){animateSprite("#vaso",100,14,"onX","comeback")},framerate);

	/*$(animF).ready(function(){
		$(animF)
		.mouseenter(function(){
			kak=setInterval(function(){animateSprite(animF,100,10,"onX","loop")},framerate);
		})
		.mouseleave(function(){
			clearInterval(kak);
			resetBGPos(animF);
		})
	});
	$(animS).ready(function(){
		$(animS)
		.mouseenter(function(){
			kak=setInterval(function(){animateSprite(animS,200,12,"onX","loop")},framerate);
		})
		.mouseleave(function(){
			clearInterval(kak);
			resetBGPos(animS);
		})
	});

	var numeroRev="#numRev";
	$(numeroRev).ready(function(){
		$(numeroRev)
		.mouseenter(function(){
			clearInterval(kik);
			k=0;
			kik=setInterval(function(){
				$(numeroRev).css({"background-position":(k*100)*-1+"px 0px"});
				k++;
				if(k>5){
					clearInterval(kik);
					k=5;
				}
			},framerate/2)
		})
		.mouseleave(function(){
			clearInterval(kik);
			k=5;
			kik=setInterval(function(){
				$(numeroRev).css({"background-position":(k*100)*-1+"px 0px"});
				k--;
				//console.log($(numeroRev).css("background-position"));
				if(k<0){
					clearInterval(kik);
					k=0;
				}
			},framerate/2)
		})
	});*/
});