'use strict'


var	zone1=[],zone2=[],zone3=[],zone4=[],zone5=[],zone6=[],zone7=[],zone8=[],zone9=[],
	zone1Iso=[],zone2Iso=[],zone3Iso=[],zone4Iso=[],zone5Iso=[],zone6Iso=[],zone7Iso=[],zone8Iso=[],zone9Iso=[];

	zone1[0]=[18,18,296,292,294,293,300,246,41,29];
	zone1[1]=[101,107,7,7,7,7,7,7,7,47];
	zone1[2]=[100,106,7,7,7,7,7,7,7,47];
	zone1[3]=[99,105,7,7,7,305,304,7,7,47];
	zone1[4]=[98,104,7,7,7,302,303,7,7,47];
	zone1[5]=[97,103,7,7,7,7,7,7,7,47];
	zone1[6]=[37,7,7,7,7,305,304,7,7,47];
	zone1[7]=[37,7,7,7,7,302,303,7,7,47];
	zone1[8]=[37,7,7,7,7,7,7,7,7,47];
	zone1[9]=[59,68,68,68,68,68,68,68,68,32];
	zone2[0]=[25,40,40,40,300,229,223,224,226,229];
	zone2[1]=[102,0,86,7,7,7,7,7,7,71];
	zone2[2]=[102,0,86,7,7,7,7,7,7,71];
	zone2[3]=[102,0,86,7,7,7,7,301,7,71];
	zone2[4]=[102,0,86,7,7,7,7,7,7,71];
	zone2[5]=[102,0,86,7,7,67,67,67,67,55];
	zone2[6]=[114,88,10,7,70,5,5,5,5,5];
	zone2[7]=[37,308,7,308,70,5,5,5,5,5];
	zone2[8]=[37,309,7,309,70,5,5,5,5,5];
	zone2[9]=[58,67,67,67,55,5,5,5,5,5];
	zone3[0]=[25,40,40,40,40,229,223,224,226,229];
	zone3[1]=[39,7,7,7,7,7,7,7,7,71];
	zone3[2]=[39,7,7,7,7,7,7,7,7,71];
	zone3[3]=[39,7,7,7,7,7,7,7,7,71];
	zone3[4]=[39,7,7,7,7,7,7,7,7,71];
	zone3[5]=[39,7,7,15,67,67,67,67,67,55];
	zone3[6]=[39,7,7,70,5,5,5,5,5,5];
	zone3[7]=[39,7,7,70,5,5,5,5,5,5];
	zone3[8]=[39,7,7,70,5,5,5,5,5,5];
	zone3[9]=[60,67,67,57,5,5,5,5,5,5];
	zone4[0]=[337,353,353,353,340,229,223,224,226,229];
	zone4[1]=[350,325,325,325,360,7,7,7,7,72];
	zone4[2]=[350,325,325,325,360,7,7,7,7,72];
	zone4[3]=[350,325,325,325,360,7,7,7,7,72];
	zone4[4]=[350,325,325,325,275,7,7,7,7,72];
	zone4[5]=[350,325,325,325,274,7,7,7,7,72];
	zone4[6]=[350,325,325,325,360,7,7,7,7,72];
	zone4[7]=[346,355,355,355,343,7,7,7,7,72];
	zone4[8]=[18,18,139,140,141,142,143,7,7,72];
	zone4[9]=[18,18,127,128,129,130,131,69,69,57];
	zone5[0]=[18,18,18,18,18,229,229,229,229,229];
	zone5[1]=[18,18,4,4,4,0,0,0,0,151];
	zone5[2]=[16,16,4,4,4,0,0,0,0,151];
	zone5[3]=[113,119,4,4,4,0,0,0,0,151];
	zone5[4]=[112,118,4,4,4,0,0,0,0,151];
	zone5[5]=[111,117,4,4,4,0,0,0,0,151];
	zone5[6]=[110,116,4,4,4,0,0,0,0,151];
	zone5[7]=[109,115,4,4,4,0,0,0,0,151];
	zone5[8]=[39,7,0,0,0,0,0,0,0,151];
	zone5[9]=[60,45,152,152,152,152,152,152,152,147];
	zone6[0]=[26,41,41,41,41,223,224,225,222,229];
	zone6[1]=[38,7,7,7,7,7,7,7,7,72];
	zone6[2]=[38,7,68,68,68,68,68,68,68,55];
	zone6[3]=[102,0,0,0,0,0,0,0,0,151];
	zone6[4]=[102,0,0,0,0,0,0,0,0,151];
	zone6[5]=[102,0,0,0,0,0,0,0,0,151];
	zone6[6]=[102,0,0,0,0,0,0,0,0,151];
	zone6[7]=[102,0,0,0,0,0,0,0,0,151];
	zone6[8]=[102,0,0,0,0,0,0,0,0,151];
	zone6[9]=[148,152,152,152,152,152,152,152,152,15];
	zone7[0]=[26,41,41,41,41,223,224,225,222,229];
	zone7[1]=[16,7,7,7,7,7,7,7,7,71];
	zone7[2]=[101,7,7,7,7,7,7,7,7,71];
	zone7[3]=[100,7,7,7,7,7,7,7,7,71];
	zone7[4]=[99,7,7,7,7,7,7,7,7,71];
	zone7[5]=[98,7,7,7,7,7,7,7,7,71];
	zone7[6]=[97,7,7,7,7,7,7,7,7,71];
	zone7[7]=[37,7,7,7,7,7,7,7,7,71];
	zone7[8]=[59,68,68,68,68,68,68,68,68,56];
	zone7[9]=[5,5,5,5,5,5,5,5,5,5];
	zone8[0]=[27,42,42,42,42,42,42,244,245,54];
	zone8[1]=[39,7,7,7,7,7,7,7,7,72];
	zone8[2]=[102,86,7,7,7,7,7,7,7,72];
	zone8[3]=[151,152,69,69,69,69,69,69,69,57];
	zone8[4]=[151,5,5,5,5,5,5,5,5,5];
	zone8[5]=[147,5,5,5,5,5,5,5,5,5];
	zone8[6]=[5,5,5,5,5,5,5,5,5,5];
	zone8[7]=[5,5,5,5,5,5,5,5,5,5];
	zone8[8]=[5,5,5,5,5,5,5,5,5,5];
	zone8[9]=[5,5,5,5,5,5,5,5,5,5];
	zone9[0]=[5,5,5,5,233,233,233,5,5,5];
	zone9[1]=[5,5,5,5,231,230,232,5,5,5];
	zone9[2]=[5,5,5,5,5,5,5,5,5,5];
	zone9[3]=[5,5,5,5,5,5,5,5,5,5];
	zone9[4]=[5,5,0,0,0,0,0,0,0,0];
	zone9[5]=[5,5,0,0,0,0,0,0,0,0];
	zone9[6]=[0,0,0,0,0,0,0,0,0,0];
	zone9[7]=[0,0,0,0,0,0,0,0,0,0];
	zone9[8]=[0,0,0,0,0,0,0,0,0,0];
	zone9[9]=[0,0,0,0,0,0,0,0,0,0];





var 	building_A_objects=[
	{"id": "obj001",	"floor": 1,	"value":19,	"loc": {"x": 5,	"y": 4},	"type": "key",	"link": "img/key001.png",	"desc":"A shiny yellow key."},
	{"id": "obj002",	"floor": 1,	"value":5,	"loc": {"x": 9,	"y": 0},	"type": "note",	"link": "img/note001.png",	"desc":"A note with and odd message."},
	{"id": "obj003",	"floor": 1,	"value":13,	"loc": {"x": 2,	"y": 9},	"type": "key",	"link": "img/note001.png",	"desc":"A note with and odd message."}
	];






	var	orderShow=[];
		
		orderShow[1]=0;
		orderShow[2]=10;
		orderShow[3]=1;
		orderShow[4]=20;
		orderShow[5]=11;
		orderShow[6]=2;
		orderShow[7]=30;
		orderShow[8]=21;
		orderShow[9]=12;
		orderShow[10]=3;
		orderShow[11]=40;
		orderShow[12]=31;
		orderShow[13]=22;
		orderShow[14]=13;
		orderShow[15]=4;
		orderShow[16]=50;
		orderShow[17]=41;
		orderShow[18]=32;
		orderShow[19]=23;
		orderShow[20]=14;
		orderShow[21]=5;
		orderShow[22]=60;
		orderShow[23]=51;
		orderShow[24]=42;
		orderShow[25]=33;
		orderShow[26]=24;
		orderShow[27]=15;
		orderShow[28]=6;
		orderShow[29]=70;
		orderShow[30]=61;
		orderShow[31]=52;
		orderShow[32]=43;
		orderShow[33]=34;
		orderShow[34]=25;
		orderShow[35]=16;
		orderShow[36]=7;
		orderShow[37]=80;
		orderShow[38]=71;
		orderShow[39]=62;
		orderShow[40]=53;
		orderShow[41]=44;
		orderShow[42]=35;
		orderShow[43]=26;
		orderShow[44]=17;
		orderShow[45]=8;
		orderShow[46]=90;
		orderShow[47]=81;
		orderShow[48]=72;
		orderShow[49]=63;
		orderShow[50]=54;
		orderShow[51]=45;
		orderShow[52]=36;
		orderShow[53]=27;
		orderShow[54]=18;
		orderShow[55]=9;
		orderShow[56]=91;
		orderShow[57]=82;
		orderShow[58]=73;
		orderShow[59]=64;
		orderShow[60]=55;
		orderShow[61]=46;
		orderShow[62]=37;
		orderShow[63]=28;
		orderShow[64]=19;
		orderShow[65]=92;
		orderShow[66]=83;
		orderShow[67]=74;
		orderShow[68]=65;
		orderShow[69]=56;
		orderShow[70]=47;
		orderShow[71]=38;
		orderShow[72]=29;
		orderShow[73]=93;
		orderShow[74]=84;
		orderShow[75]=75;
		orderShow[76]=66;
		orderShow[77]=57;
		orderShow[78]=48;
		orderShow[79]=39;
		orderShow[80]=94;
		orderShow[81]=85;
		orderShow[82]=76;
		orderShow[83]=67;
		orderShow[84]=58;
		orderShow[85]=49;
		orderShow[86]=95;
		orderShow[87]=86;
		orderShow[88]=77;
		orderShow[89]=68;
		orderShow[90]=59;
		orderShow[91]=96;
		orderShow[92]=87;
		orderShow[93]=78;
		orderShow[94]=69;
		orderShow[95]=97;
		orderShow[96]=88;
		orderShow[97]=79;
		orderShow[98]=98;
		orderShow[99]=89;
		orderShow[100]=99;