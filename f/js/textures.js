'use strict'
function assignStyles(){
	////////////////////sprites measures
	var	columns=6,
		rows=6,
		max=288, ///////////total textures
		x=300/2,
		y=2*x,
		url,
		px="px",
		divSize=document.createElement('style');

	divSize.innerHTML=
		'.floor{	padding:0px;	margin:0px;	position:absolute;	}'+
		'.floor div{		position: absolute;	display: none;	width: '+x+'px;	height: '+y+'px;		margin: 0px;	padding: 0px;	}';

	document.head.appendChild(divSize);
	for(var g=1;g<=max;g++){
		var	a,b,
			yolo=g%columns-1,
			yalo=Math.ceil(g/rows)-1;
			
		yolo<0 ? a=5*x*-1 : a=yolo*x*-1;
		b=(yalo)*y*-1;
		a+=px;
		b+=px;
		url="url(img/texture"+(Math.ceil(g/24))+".png)";
		var sheet=document.createElement('style');
		sheet.innerHTML='.texture'+g+'{background: '+url+" "+a+" "+b+';}';
		document.head.appendChild(sheet);
	};
};
assignStyles();