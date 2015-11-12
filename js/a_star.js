'use strict'



var	divName="square";
var	mapa=[];
		////////0,1,2,3,4,5,6,7,8,9
	mapa[0]=[0,0,0,0,0,0,0,0,0,0];
	mapa[1]=[0,0,0,0,0,0,0,0,0,0];
	mapa[2]=[0,0,0,0,0,0,0,0,0,0];
	mapa[3]=[0,0,0,0,0,0,0,0,0,0];
	mapa[4]=[0,0,0,0,0,0,0,0,0,0];
	mapa[5]=[0,0,0,0,0,0,0,0,0,0];
	mapa[6]=[0,0,0,0,0,0,0,0,0,0];
	mapa[7]=[0,0,0,0,0,0,0,0,0,0];
	mapa[8]=[0,0,0,0,0,0,0,0,0,0];
	mapa[9]=[0,0,0,0,0,0,0,0,0,0];

var	nodes=[];
for(var r=0;r<10;r++){	nodes[r]=["o","o","o","o","o","o","o","o","o","o"]};
function resetNodes(){	for(var t=0;t<nodes.length;t++){	for(var h=0;h<nodes[t].length;h++){	nodes[t][h]="o"	}}};
function closeNode(x,y){	node[y][x]="c"};

function addDiv(arr){
	for(var g=0;g<arr.length;g++){
		for(var j=0;j<arr.length;j++){
			var nombre=divName+g+'_'+j;
			//console.log(j);
			createDiv(nombre,arr[g][j]);
			positionDiv(nombre,g*51,j*51);
			mapa[g][j]==0 ? nodes[g][j]='o' : nodes[g][j]='c';
		};
	};
};
function createDiv(name,clase){
	$('body').append('<div class="clase'+clase+'" id="'+name+'"></div>')
}
function positionDiv(name,y,x){
	$('#'+name).css({
		'top':y+"px",
		'left':x+"px"
	});
};
var findInterval;
var	ruta=[],
	process=0,
	open=[],
	close=[];
function buttonDiv(){
	$('#start').click(function(){
		/*var	kok='clase',
			kik=$(this).attr('id'),
			kak=kik.substring(6,7),
			kuk=kik.substring(8,9);
		$(this).text('click');
		console.log('click');
		eP.x=kak;
		eP.y=kuk;*/
		//$(this).css('background',"rgb(175,150,150)");
		findRoute(mapa,cP,eP);
		/*var ber=g_f_costs(cP,eP,mapa);
		var bar=findLowest(ber.gCost);
		var foo=findLowest(ber.fCost);

		console.log(ber.gCost);
		console.log("min: "+bar.min);
		console.log("pos: "+bar.pos);
		console.log("rep: "+bar.rep);
		console.log('.................');

		nodes[neighNodes(bar.pos).a][neighNodes(bar.pos).b]="c";
		if(bar.rep>1){
			nodes[neighNodes(bar.spos).a][neighNodes(bar.spos).b]="c";
		}
		for(var y=0;y<8;y++){
			var lal=neighNodes(y).a;
			var lel=neighNodes(y).b;

			$('#'+divName+lal+'_'+lel).append("<p>g: "+ber.gCost[y]+'<br/>f: '+ber.fCost[y]+'</p>');

			//console.log(lal);
			//console.log(nodes[y]);
		};

		cP.x=kak;
		cP.y=kuk;
		console.log('current, x: '+cP.x+", y: "+cP.y);*/
		//console.log(neighNodes(bar.pos).a);
		/*var chab=bar.gCost;
		var cheb=bar.fCost;

		var lap=Math.min.apply(null,chab);
		var lep=Math.min.apply(null,cheb);

		console.log('g_costs: '+chab);
		console.log('g cost lowest: '+lap+" at: "+chab.indexOf(lap));
		console.log('f_costs: '+cheb);
		console.log('f cost lowest: '+lep+" at: "+cheb.indexOf(lep));
		console.log("/////////////////////");*/
	});
};

function findRoute(mapArr,current,final,routeArr){
	var	progress=0,
		closed=[],
		open=[];
	while(progress<10){
		var	cost=g_f_costs(current,final,mapArr),
			to_open='';	
		if(progress=0){
			open.push();
		}
		else{
			open.push(open[progress-1]+to_open);
		}
		var	to_close=open[progress].shift(findLowest());
		closed.push(to_close);
		progress++;
	;}
	return closed;
};

function resetRoute(){
	process=0;
	cP.x=eP.x;
	cP.x=eP.y;
	eP.x="";
	eP.y="";
	for(var r=0;r<10;r++){	nodes[r]=["o","o","o","o","o","o","o","o","o","o"]};
}

function findLowest(arr){
	var	min=Math.min.apply(null,arr),
		pos=arr.indexOf(min),
		rep=0;
	for(var f=pos;f<8;f++){
		arr.indexOf(min,f)>pos ? rep++ : rep;
	}
	var	spos=arr.lastIndexOf(min);

	return {min,pos,rep,spos};
}

var cP={y:0,x:0};
var eP={y:9,x:9};

function g_f_costs(nodeA,nodeB,arrMap){
	var	h=[],g=[], f=[],
		lol=findN(arrMap,nodeA.x,nodeA.y);
	for(var t=0;t<8;t++){
		var	d=Math.abs((nodeA.x+neighNodes(t).a)-nodeB.x),
			e=Math.abs((nodeA.y+neighNodes(t).b)-nodeB.y);

		h.push(Math.abs(d+e));
		t%2 ? g.push(10) : g.push(14);
		f.push(Math.abs(h[t])+Math.abs(g[t]));
	};
	return {h,g,f};
};

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

function findN(mapArr,x,y){
	var 	x_coord=[],
		y_coord=[];

	for(var g=0;g<8;g++){
		var	one=neighNodes(g).y+y;
		var	two=neighNodes(g).x+x;
		try{
			if(mapArr[one][two]==undefined) throw "na";
			///////conditions to trace
			if(mapArr[one][two]==0){
				if(nodes[one][two]=='o'){
			///////////////////////////////////////////////////////////
					x_coord[g]=one;
					y_coord[g]=two;
				}
				else{
					x_coord[g]=33;
					y_coord[g]=33;
				}
			}else{
				x_coord[g]=33;
				y_coord[g]=33;
			}
		}catch(err){
			x_coord[g]=33;
			y_coord[g]=33;
		}
	};
	return {
		x:x_coord,
		y:y_coord
	};
} ;


$(document).ready(function(){
	addDiv(mapa);
	buttonDiv();
});