'use strict'

function rotateArr(arr){
	var	tall=arr.length*2-1,
		iso=[],a,b,c=0;
	for(var k=0, m=tall; k<tall, m>0; k++,m--){
		var	y=k, x=0, u=k;
		if(k>arr.length-1){
			y=arr.length-1;
			x=k-arr.length+1;
			u=m-1;
		}
		iso.push([[y,x]]);
		a=iso[k][0][0];
		b=iso[k][0][1];
		for(var g=0;g<u;g++){
			a--;
			b++;
			iso[k].push([a,b]);
			c++;
		}
	}
	return iso;
}

function c_x(long,wid){
	var arr=[], p=0;
	for(var i=1;i<long*2;i++){
		var qui=0;
		var mex,max=long;
		i>long ? mex=max-i%long : mex=i;
		for(var h=1;h<mex;h++){
			mex/2!=Math.round(mex/2) ? qui++ : qui=h%mex;
			arr.push([qui+h-mex]*wid);
			p++;
		};
	};
	return arr;
}
function addEmptyArr(tot){
	var e=[];
	for(var h=0; h<tot; h++){
		e.push("u");
	}
	return e;
}

function rotateLevel(arr, dir){
	var a=[];
	for(var h=0, j=arr.length-1; h<arr.length, j>=0; h++, j--){
		a[h]=addEmptyArr(arr.length);
		for(var n=0, m=arr.length-1; n<arr.length, m>=0; n++, m--){
			switch(dir){
				case 'ori':
					a[h][n]=arr[h][n];
					break;
				case "rot":
					a[h][n]=arr[m][h];
					break;
				case "rev":
					a[h][n]=arr[n][j];
					break;
				case "inv":
					a[h][n]=arr[j][m];
					break;
				default: break;
			}
		}
	}
	return a;
}

function rotatePlayerPos(pos,dir,len){
	var a=[], y, x;
	for(var h=0; h<len; h++){
		a[h]=addEmptyArr(len);
	}
	a[pos.y][pos.x]=1;
	var lel=rotateLevel(a,dir);
	for(var h=0; h<len; h++){
		for(var n=0; n<len; n++){
			if(lel[h][n]==1){
				y=h,x=n;
				break;
			}
		}
	}
	posA={y,x};
}

function createLevel(arr,tar,clase,height,width,tileName,f,typ){
	var	kak=rotateArr(arr),
		kek=rotateLevel(arr,typ),
		kok=c_x(arr.length+1,width), xpos=0;
	for(var h=0;h<kak.length;h++){
		for(var p=0;p<kak[h].length;p++){
			var	y=kak[h][p][0],
				x=kak[h][p][1],
				tile=kek[y][x];

			$('#'+tar).append('<tile id="'+tileName+f+"_"+y+"_"+x+'" class="'+clase+tile+'" level="'+tile+'" fpos="'+1+'" ypos="'+y+'" xpos="'+x+'"/>');			
			$('#'+tileName+f+"_"+y+"_"+x).css({
				top: h*height+"px",	
				left: kok[xpos]+"px",
				'z-index': xpos-1000
			});
			xpos++;
		}
	}
	pisos[f]="open";
}
function instanceColor(val,color){
	switch(color){
		case 'yellow': 
			if(val==2 || val>4 && val<61){
				return true;
			}break; 

		case 'red': 	
			if(val==146 || val>147 && val<241){
				return true;
			}break;
		case 'green':
			if(val==445 || val==446){
				return true;
			}break;
		case 'blue':
			if(val==290 || val>299 && val<361){
				return true;
			}break;
		case 'street':
			if(val>466 && val<480){
				return true;
			}break;
		default: break;
	}
}
function getColor(val){
	if(val==2 || val>4 && val<61) return 'yellow';
	if(val==146 || val>147 && val<241) return 'red';
	if(val==445 || val==446) return 'green';
	if(val==290 || val>199 && val<361) return 'blue';
	if(val>466 && val<480) return 'street';
}
function createSelectors(f,leng,color){
	$('#selection *').remove();
	var selection=$('#selection');
	for(var j=0;j<leng;j++){
		for(var k=0;k<leng;k++){
			var	sap=$('#tile'+f+'_'+j+"_"+k),
				name='selec'+f+'_'+j+"_"+k,
				kak=sap.attr('level');
				if(instanceColor(kak,color)){
					selection.append('<div class="tileSelec" id="'+name+'" ypos="'+j+'" xpos="'+k+'"/>');
					$('#selec'+f+"_"+posA.y+"_"+posA.x).hide();
					$('#'+name).css({
						top: sap.offset().top+226+"px",
						left: sap.offset().left+35+"px"
					});
				};				
		};
	};
};


function focusWalls(f,t){
	var arr=eval('floor_'+f);
	for(var a=0; a<arr.length; a++){
		for( var b=0; b<arr[a].length; b++){
			switch(t){
				case "cover":
					if(arr[a][b]>51 && arr[a][b]<61 || arr[a][b]>66 && arr[a][b]<73 || arr[a][b]>195 && arr[a][b]<205 || arr[a][b]>210 && arr[a][b]<217){
						$('#tile'+f+"_"+a+"_"+b).attr({class: 'txt'+parseInt($('#tile'+f+"_"+a+"_"+b).attr('level')-24)});
					}
					break;
				case 'show':
					if(arr[a][b]>24 && arr[a][b]<73 || arr[a][b]>168 && arr[a][b]<217){
						$('#tile'+f+"_"+a+"_"+b).attr({class: 'txt'+$('#tile'+f+"_"+a+"_"+b).attr('level')});
					}
					break;
				default: break;
			}
		}
	}
}
function hideCurrentWall(floor,coord,mode){
	switch(mode){
		case 'all':
			for(var h=0;h<8;h++){
				var	y=neighNodes(h).y+coord.y,
					x=neighNodes(h).y+coord.x,
					f=eval('floor_'+floor);
				if(y>=0 && y<f.length && x>=0 && x<f.length){
					var	lol=f[y][x],
						tile=$('#tile'+floor+"_"+y+"_"+x);
					if(	////walls
						lol>27 && lol<37 || lol>42 && lol<49 ||////////yellow
						lol>171 && lol<181 || lol>186 && lol<193///////red
						){
						console.log(tile);
						tile.attr({class:(parseInt(tile.attr('level'))+24)})
					}
					if(
						///doors
						lol>18 && lol<25 || ///yellow
						lol>162 && lol<169 ////red
						){
						tile.attr({class: 'txt'+(parseInt(tile.attr('level'))+72)});
					}
				}
			}
			break;
		case 'one':
			var	lol=eval('floor_'+floor)[coord.y][coord.x],
				tile=$('#tile'+floor+"_"+coord.y+"_"+coord.x);
			if(
				////walls
				lol>27 && lol<37 || lol>54 && lol<61 ||////////yellow
				lol>171 && lol<181 || lol>198 && lol<204///////red
				){
				tile.attr({class: 'txt'+(parseInt(tile.attr('level'))+12)});
				//tile.css({opacity:.75});
			}if(
				///doors
				lol>16 && lol<25 || ///yellow
				lol>160 && lol<169 ////red
				){
				tile.attr({class: 'txt'+(parseInt(tile.attr('level'))+72)});
			}
			break;
		default: break;
	}
}
function restoreWall(floor,coord){
	$('#tile'+floor+"_"+coord.y+"_"+coord.x).attr('class','txt'+$('#tile'+floor+"_"+coord.y+"_"+coord.x).attr('level'));
	//$('#tile'+floor+"_"+coord.y+"_"+coord.x).css({opacity:1});
}
function hideFloor(f){
	$('#piso'+f).hide();
}
var pisos=[];
pisos[0]="";
for(var ch=0;ch<=9;ch++){
	pisos[ch]="closed";
}
var	t_w=34,
	t_h=74;

function startFloor(f,color,typ){
	var arr=eval('floor_'+f);
	$('#piso'+f+' *').remove();
	createLevel(arr,'piso'+f,"txt",t_w,t_h,'tile',f,typ);
	createSelectors(f,eval('floor_'+f).length,color);
	rotatePlayerPos(posA,typ,arr.length);
	showPlayer(posA,f);
	/*$('html, body').animate({
		scrollTop: $('#jugador01').offset().top-200,
		scrollLeft: $('#jugador01').offset().left-300
	},animPlayTime);*/
	clickTile(f);
};
function createFloor(f,typ){
	var arr=eval('floor_'+f);
	createLevel(arr,'piso'+f,"txt",t_w,t_h,'tile',f,typ);
}

var	current_floor=2,
	current_dir="ori";

$(document).ready(function(){
	assignStyles();
	for(var r=0, u=pisos.length;r<=pisos.length, u>=0;r++, u--){
		$('body').append('<div class="floor" id="piso'+r+'"/>');
		$('#piso'+r).css({
			top: u*225+"px"
		});
		
	}
	$('body').append('<div id="selection"/>');
	//createLevel(eval('floor_'+3),'piso'+3,"txt",t_w,t_h,'tile',3,"ori");
	//createLevel(eval('floor_'+1),'piso'+1,"txt",t_w,t_h,'tile',1);
	/*createFloor(0,current_dir);
	createFloor(1,current_dir);
	createFloor(2,current_dir);*/
	startFloor(0,'yellow',current_dir);
	rotateFloorButton(0);
	//showNPC(npcA,3);
	//var w=-150, h=-300;
	//$('#jugador01').css({"background-position" : 5*w+"px"+" "+3*h+"px"});
});

function rotateFloorButton(f){
	$('#buttons').css('z-index', 1000);
	$('.button_dev').bind('click', function(){
		var to_cam;
		switch($(this).attr('id')){
			case "rotateCW":
				if(current_dir=="ori") to_cam="rot";
				if(current_dir=="rot") to_cam="inv";
				if(current_dir=="rev") to_cam="ori";
				if(current_dir=="inv") to_cam="rev";
				break;
			case "rotateCCW":
				if(current_dir=="ori") to_cam="rev";
				if(current_dir=="rot") to_cam="ori";
				if(current_dir=="rev") to_cam="inv";
				if(current_dir=="inv") to_cam="rot";
				break;
			default: break;
		}
		$('#piso'+f+' *').remove();
		rotatePlayerPos(posA, to_cam, eval('floor_'+f).length);
		startFloor(f,'yellow',to_cam);
		flipClass(rotateLevel(eval('floor_'+f),to_cam),f,to_cam);
		current_dir=to_cam;
	});
}
function flipClass(arr,f,typ){
	for(var g=0; g<arr.length; g++){
		for(var i=0;i<arr[0].length; i++){
			var t=arr[g][i];
			if(t>4 && t<165 || t>185 && t<321 || t>360 && t<425){////yellow
				var p;
				switch(typ){
					case "rot":
						if(arr[g][i]%4==0) p=-3;
						else p=1;
						break;
					case "rev":
						if(arr[g][i]%4==1) p=+3;
						else p=-1;
						break;
					case "inv":
						if(arr[g][i]%4==0) p=-2;
						if(arr[g][i]%4==3) p=-2;
						if(arr[g][i]%4==2) p=+2;
						if(arr[g][i]%4==1) p=+2;
						break;
					case "ori":
						p=0;
						break;
					default: break;
				}
				var tile=$('#tile'+f+"_"+g+"_"+i);
				tile.attr({class: "txt"+(parseInt(tile.attr('level'))+p)});
			}
		}
	}
}