function parseWithoutTxt(strA,strB){//////////////REMOVE SUFFIX OF STRING
	var	kek=strA.search(strB),
		kok=strA.substring(0,kek);
	return parseInt(kok);
};


function createSelectors(floor){
	var selection=$('#selection');
	//selection.css('top',($('floor0'+floor).css('top')));
	for(var j=0;j<=9;j++){
		for(var k=0;k<=9;k++){
			var	sap=$('#bloque'+floor+'_'+j+"_"+k),
				name='selector'+floor+'_'+j+"_"+k,
				kak=sap.attr('level');
			if(
				///////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>walkable
				kak==7 || kak>=25 && kak<=72
				///////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>walkable
				){
				selection.append('<div class="selectionDiv" id="'+name+'"/>');
				var	huh=parseWithoutTxt(sap.css('top'),px),
					hah=parseWithoutTxt(sap.css('left'),px);

				var	w=moduleWidth,
					h=moduleHeight,
					t=huh+235,
					l=hah+45;

				$('#'+name).css({
					"width":w+px,
					"height":h+px,
					"top": t+px,
					'left': l+px
				});
			};
		};
	};
};
function deleteSelectors(){
	$('#selection *').remove();
}
function hideSelectors(){
	$('.selectionDiv').css('display','none');
}
function showSelectors(){
	$('.selectionDiv').css('display','block');
	$('#selector'+currentFloor+'_'+posB.x+'_'+posB.y).css('display','none');
}
function clickTile(){
	$('.selectionDiv').click(function(){
		var	bat="selectorX",
			bet=$(this).attr('id'),
			bit=bet.substring(bat.length,bat.length+4),
			bot=bit.substring(1,2),
			but=bit.substring(3,4);
		//var finalPos=new positionPlayer(bot,but);
		posB.x=bot;
		posB.y=but;
		movePlayer(posA,posB);
	});
};

var 	posA={x:1,y:4},
	posB={x:"",y:""},
	process=0,playerMovements=0,
	processT;

function getPosition(a,b,f){
	var	nak=$('#bloque'+f+"_"+a+"_"+b),
		nek=parseWithoutTxt(nak.css('top'),px),
		nik=parseWithoutTxt(nak.css('left'),px);
	return {x:parseInt(nek)+7 , y:parseInt(nik)+6};
};

var animatePlayer, animPlayTime=200;

function movePlayer(start,end){
	hideSelectors();
	resetBubble();

	var	g=Math.abs(start.x-end.x),
		h=Math.abs(start.y-end.y);
	//g>h ? processT=g : processT=g;
	if (g==0 && h==0){
		console.log('no');
	}else{
		if (g>h) processT=g;
		if (g<h) processT=h;
		if (g==h) processT=g;
		//console.log("g: "+g);
		//console.log("h: "+h);
		animatePlayer=setInterval(function(){processToMove()},animPlayTime);
	}
	
};

function processToMove(){
	process++;
	playerMovements++;

	if(posA.x<posB.x) posA.x++;
	if(posA.x>posB.x) posA.x--;
	if(posA.y<posB.y) posA.y++;
	if(posA.y>posB.y) posA.y--;
	
	positionPlayer(posA.x,posA.y,'stand');
	
	//console.log(posA.x);
	if(process>=processT){
		clearInterval(animatePlayer);
		//console.log('stahp');
		positionPlayer(posA.x,posA.y,'stand');
		//console.log(posB.x);
		showSelectors();
		process=0;
		processT='';
		playerMovements=0;

		//////////updae new position///////////////
		posA.x=posB.x;
		posA.y=posB.y;
		posB.x="";
		posB.y="";
		var actionsA=scanDestinationTile(posA,currentFloor);
		var actionsB=analizeNeighbourTiles(actionsA);
		console.log(actionsA);
		displayBubble(exp_act);
		//console.log();
		//console.log(scanDestinationTile(posA.x,posA.y,currentFloor));

	};
};
var jugW=150,jugH=300;

function neighNodes(ind){
	var x,y;
	switch(ind){
		case 0: 	x=-1;		y=-1;		break;//NW
		case 1: 	x=0;		y=-1;		break;//N
		case 2: 	x=1;		y=-1;		break;//NE
		case 3: 	x=1;		y=0;		break;//E
		case 4: 	x=1;		y=1;		break;//SE
		case 5: 	x=0;		y=1;		break;//S
		case 6: 	x=-1;		y=1;		break;//SW
		case 7: 	x=-1;		y=0;		break;//W
		default:	break;
	}
	return{x,y};
}

function positionPlayer(top,lef,a){
	var	player=$('#jugador01'),
		mik=getPosition(top,lef,currentFloor),
		onX=posA.x-posB.x,
		onY=posA.y-posB.y,
		fof,faf;
	
	//console.log("x: "+onX+", y: "+onY);

	///////////facing player
	if(a=="stand"){
		if (onX==0 && onY<0) 	{fof=jugW*5;	faf=jugH*3};
		if (onX==0 && onY>0)	{fof=0;			faf=0};
		if(onX<0 && onY==0)	{fof=0;		faf=jugH*3};
		if(onX>0 && onY==0)	{fof=jugW*5;		faf=0};

		if(onX<0 && onY<0)	{fof=jugW*5;	faf=jugH};
		if(onX>0 && onY>0)	{fof=0;		faf=jugH};

		if(onX>0 && onY<0)	{fof=jugW*5;	faf=jugH*2};
		if(onX<0 && onY>0)	{fof=0;		faf=jugH*2};
	}
	if(a=="walkA"){
		if (onX==0 && onY<0) 	{fof=jugW*3;	faf=jugH*3};
		if (onX==0 && onY>0)	{fof=jugW;		faf=0};
		if(onX<0 && onY==0)	{fof=jugW;	faf=jugH*3};
		if(onX>0 && onY==0)	{fof=jugW*3;		faf=0};

		if(onX<0 && onY<0)	{fof=jugW*3;	faf=jugH};
		if(onX>0 && onY>0)	{fof=jugW;	faf=jugH};

		if(onX>0 && onY<0)	{fof=jugW*3;	faf=jugH*2};
		if(onX<0 && onY>0)	{fof=jugW;	faf=jugH*2};
	}
	if(a=="walkB"){
		if (onX==0 && onY<0) 	{fof=jugW*4;	faf=jugH*3};
		if (onX==0 && onY>0)	{fof=jugW*2;		faf=0};
		if(onX<0 && onY==0)	{fof=jugW*2;	faf=jugH*3};
		if(onX>0 && onY==0)	{fof=jugW*4;		faf=0};

		if(onX<0 && onY<0)	{fof=jugW*4;	faf=jugH};
		if(onX>0 && onY>0)	{fof=jugW*2;	faf=jugH};

		if(onX>0 && onY<0)	{fof=jugW*4;	faf=jugH*2};
		if(onX<0 && onY>0)	{fof=jugW*2;	faf=jugH*2};
	}
	
	///////////facing player
	if(a=='stand'){
		player.animate({'top': mik.x+px,'left': mik.y+px},animPlayTime,'linear');
	};
	player.css('background-position',fof*-1+px+" "+faf*-1+px);
};

function showPlayer(){
	var	lal=getPosition(posA.x,posA.y,currentFloor);
	$('#playerArea').append('<div id="jugador01" class="player"/>');
	$('#jugador01').css({
		'display':'none',
		'height':300+px,
		'width':150+px,
		'top':lal.x+px,
		'left':lal.y+px
	});
	$('#jugador01').fadeIn('fast');
	$('#selector'+currentFloor+'_'+posA.x+'_'+posA.y).css('display','none');
};
var	p_actions=[];
	/////////////////////////////	t_action 		tile 	texture
	p_actions[0]=	['i_op',		00,	0,0];
	p_actions[1]=	["o_pick",		00,	0,1];
	p_actions[2]=	["o_give",		00,	0,2];
	p_actions[3]=	["o_drop",		00,	0,3];
	p_actions[4]=	["m_push",		00,	0,4];
	p_actions[5]=	["b_look",		00,	1,0];
	p_actions[6]=	["b_read",		00,	1,1];	
	p_actions[7]=	["b_lock",		00,	2,0];
	p_actions[8]=	["b_unlo",		00,	2,1];
	p_actions[9]=	["m_sup",		125,	3,0];
	p_actions[10]=	["m_sdo",		126,	3,1];
	p_actions[11]=	["m_cup",		00,	3,2];
	p_actions[12]=	["m_sdo",		00,	3,3];
	p_actions[13]=	["m_ent",		00,	4,0];
	p_actions[14]=	["m_exi",		00,	4,1];

var	exp_act=[];
	exp_act[0]=p_actions[0];
	exp_act[1]=p_actions[9];
	exp_act[2]=p_actions[10];

function scanDestinationTile(pos,f){
	var	arr=[];
	for(var s=0;s<8;s++){
		var	uno=parseInt(pos.y)+parseInt(neighNodes(s).y),
			dos=parseInt(pos.x)+parseInt(neighNodes(s).x),
			zone=eval('zone'+f);
		try{
			if(zone[dos][uno]!=undefined){
				if(zone[dos][uno]>=0){
					arr.push(zone[dos][uno]);
				}
			}
		}catch(err){
			//console.log(err);
		};
	};
	return arr;	
};
function analizeNeighbourTiles(arr){
	var	a=[];
	for(var u=0;u<arr.length;u++){
		for(var v=0;v<p_actions.length;v++){
			if (arr[u]==p_actions[v][3]){
				a.push(p_actions[v]);
			}
		};
	};
	return a;
};
function displayBubble(bubbleArr){
	$('.actionButton').hide();
	var	pepe=$('#actionsBubble'),
		papa=getPosition(posA.x,posA.y,currentFloor);

	pepe.fadeIn('fast');
	//console.log(papa);
	pepe.css({
		'top':papa.x+25+px,
		'left':papa.y+45+px,
		'width':bubbleArr.length*60+60+5+px
	});
	for(var p=0;p<bubbleArr.length;p++){
		var	buttonName='bubbleButton'+p;

		var	a=bubbleArr[p][2]*60,	//////////////////////action button width and heigth
			b=bubbleArr[p][3]*60,
			c=bubbleArr[p][0];
		pepe.append('<div type="'+c+'" class="actionButton" id="'+buttonName+'"/>');
		a*=-1;
		b*=-1;

		var left=60+(p%4*60);
		var top=Math.floor(p/4)*60;

		$("#"+buttonName).css({
			'top':top+px,
			'left':left+px,
			'background-position':b+px+" "+a+px
		});
	};
	openActions();
	bubbleButtons();
};

function openActions(){
	$('.alert').click(function(){
		$('.actionButton').show();
	});
};


function resetBubble(){
	//console.log('clik');
	$('#actionsBubble').fadeOut('fast');
	$('.actionButton').remove();
}




function moveFloor(current,type,final){
	$('.player').fadeOut('fast');
	$('.player').remove();
	deleteSelectors();
	resetBubble();

	var how='show';
	var final=final || "";
	switch(type){
		case 'start':
			current=final;
			currentFloor=final;
			break;
		case 'stairs_up':
			focusWalls(current,'hide');
			focusWalls(current+1,'show');
			current++;
			currentFloor++;
			break;
		case 'stairs_down':
			focusWalls(current,'hide');
			focusWalls(current-1,'show');
			how='hide';
			currentFloor--;
			break;
		case 'elevator_up':
			how='show';
			currentFloor=final;
		case 'elevator_down':
			how='show';
			currentFloor=final;
		default: break;
	};
	focusWalls(current,how);
	startFadeMod(current,how); ///////////////////floor.js 
	//var	find_e=findExits(currentFloor);
};
var stairs_e=[97,103,109,115,125,131,137,143];

function stairsPlayer(me){
	var 	s_s=4, g;
	switch(dir){
		case 'up':
		for(var k=0;k<stairs_e.lenght;k++){
			if(me==stairs_e[k]){
				g=stairs_e[k];
			}
		}
		g<125 ? posA.y-=s_s : posA.x+=s_s;
		break;

		case 'down':
		var	g;
		for(var k=0;k<stairs_e.lenght;k++){
			if(k>3){
				if(me==stairs_e[k]-s_s){
					g=stairs_e[k]-s_s;
				}
			}else{
				if(me==stairs_e[k]+s_s){
					g=stairs_e[k]+s_s;
				}
			}
		}
		g<121 ? posA.y+=s_s : posA.x-=s_s;
		break;

		default: break;
	}
};

/*find_stairEntrance(f){
	var	j=eval('zone'+f),exp;
	for(var h=0;h<stairs_e.length;h++){
		var	w=0,
			d=0;
		while(exp!=stairs_Exit[h]){
			exp=j[Math.floor(w/10)][d%10];
			w++; d++;
		 }	 
	};
};*/
function startFloor(){////////////////active in floor.js
	createSelectors(currentFloor);
	clickTile();
	showPlayer();
}
function playerAction(type){
	switch(type){
		case 'm_sup':
			moveFloor(currentFloor,'stairs_up',currentFloor+1);
			break;
		case 'm_sdo':
			moveFloor(currentFloor,'stairs_down',currentFloor-1);
			break;
		case 'i_op':
			inventoryDis('open');
			break;
		default:break;
	};
	console.log(type);
};
////////////////////////////////floor selectors>>>>>>>>>>>>>>>>>>>>>>
function buttonFunctions(){	
	$("#start_game").click(function(){
		$('.commands').fadeOut('fast');
		
		moveFloor(0,'start',1);
	});
};

function bubbleButtons(){
	$('.actionButton').click(function(){
		var	heh=$(this).attr('type');
		playerAction(heh);
	});
};
////////////////////////////////floor selectors>>>>>>>>>>>>>>>>>>>>>>

function rePositionPlayer(ded){
	var faf=getPosition(ded.x,ded.y,currentFloor);
	posA.x=faf.x;
	posA.y=faf.y;
	createPlayer();
};

var cam=200; //////////////camera speed
function scrollToFloor(f){
	f==0 ?
		$('body').animate({'scrollTop':"2500px"},cam) :
		$('body').animate({'scrollTop':getPosition(9,9,f).y+"px"},cam);
};
function scrollToPlayer(f){
	var mik=getPosition(posA.x,posA.y,f);
	$('body').animate({'scrollTop':mik.y+px+mik.x+px},cam);
}

function focusWalls(floor,bol){
	var	kok="texture";
	switch(bol){
		case 'hide':
			for (var nik=0;nik<=9;nik++){
				for (var nek=0;nek<=9;nek++){
					var	suk=$('#bloque'+floor+'_'+nik+'_'+nek),
						sik=suk.attr('class').substring(kok.length,kok.length+3),
						sok;
					if(sik>48 && sik<73){ 		///////////////////////////range of walls to change background to hidden
						sok=parseInt(sik)-24;
						suk.attr('class',kok+sok);
					};
					if(sik>13 && sik<16){
						sok=parseInt(sik)-2;
						suk.attr('class',kok+sok);
					};
					if(sik>144 && sik<153){
						sok=parseInt(sik)+8;
						suk.attr('class',kok+sok);
					};
					//suk.attr('class',kok+sik);
				}
			};
			break;
		case 'show':
			for (var nik=0;nik<=9;nik++){
				for (var nek=0;nek<=9;nek++){
					var	suk=$('#bloque'+floor+'_'+nik+'_'+nek),
						sik=suk.attr('class').substring(kok.length,kok.length+3),
						sok;
					if (sik>27 && sik<37 || sik>42 && sik<49){ 	///////////////////////////range of walls to change background to hidden
						sok=parseInt(sik)+24;
						suk.attr('class',kok+sok);
					};
					if(sik>11 && sik<14){
						sok=parseInt(sik)+2;
						suk.attr('class',kok+sok);
					};
					if(sik>152 && sik<161){
						sok=parseInt(sik)-8;
						suk.attr('class',kok+sok);
					}
					
				}
			};
		default: break;
	};
};









///////////////////////////Player inventory
var	inventory=[];
	//inventory.length=8;
	inventory[0]=new invObject('fork');
	inventory[1]=new invObject('knife');
	inventory[2]=new invObject('key');
	inventory[3]=new invObject('paper');
	inventory[4]=new invObject('lighter');
	inventory[5]=new invObject('photo');
	inventory[6]=new invObject('wallet');
	inventory[7]=new invObject('cellphone');

function invObject(name){
	this.name=name;
}
function createInventory(){
	for(var k=0;k<inventory.length;k++){
		$('#inventory').append('<div class="inv_box" id="inv_box'+k+'" box_content="'+inventory[k].name+'"/>');
		$('.inv_box').css({
			'top':(k%2)+35+px
		});
	};
	$('#inventory').css({
		'display':'none',
		'position':'fixed',
		'bottom':0+px,
		'right':0+px,
		'background':'rgb(30,30,30)'
	});
	$('.inv_box').css({
		'position':'absolute',
		'border':'1px solid white',
		'width':30+px,
		'height':30+px,
	});
};
function inventoryDis(what){
	switch(what){
		case "open":
			$('#inventory').slideDown('fast');
			break;
		case "close":
			$('#inventory').slideUp('up');
			break;
		default: break;
	}
}