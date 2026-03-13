var x=false;
var caveData ={
	info:{
		layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,8,67,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,35,16,16,16,16,16,16,16,16,16,16,16,16,18,x,x,x,15,16,16,16,16,16,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,16,26,87,87,87,87,87,87,87,87,87,87,87,87,87,87,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,67,77,78,0,4,x,1,x,x,0,x,x,x,x,x,x,x,x,x,x,0,x,x,x,x,x,x,x,1,x,x,x,x,x,x,1,x,0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,10,11,12,x,x,x,x,x,x,x,x,x,x,x,10,11,12,x,x,x,x,x,5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,82,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,67,16,16,77,78,x,x,5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,20,21,22,x,x,x,10,11,12,x,x,x,x,x,20,21,22,10,11,12,x,x,5,x,10,11,12,x,x,x,x,x,x,x,x,x,x,x,x,x,x,80,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,67,16,77,78,x,x,x,x,x,6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,20,36,22,x,x,x,20,36,22,x,x,x,x,x,30,31,32,30,31,32,x,x,6,x,30,31,32,x,x,x,10,11,12,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,25,68,78,x,x,x,x,x,x,5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,20,21,22,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,5,x,x,x,x,x,x,x,x,x,x,x,x,x,10,12,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,25,27,x,x,x,x,x,x,x,5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,73,46,46,46,56,x,x,x,x,x,x,x,x,x,x,20,21,22,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,5,x,x,x,x,x,x,x,x,x,x,x,x,x,20,22,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,67,77,37,x,x,x,x,x,x,x,7,x,x,2,x,x,x,x,x,x,x,2,x,x,x,x,x,x,x,x,x,x,2,x,x,x,x,x,x,x,x,x,x,x,2,x,2,x,x,x,x,x,x,x,3,x,x,3,x,x,x,x,x,x,x,x,x,x,x,2,x,x,x,x,x,x,3,x,x,x,x,x,x,x,x,x,x,73,24,13,14,17,17,56,x,x,x,x,x,x,x,x,x,20,36,22,x,x,x,x,x,x,x,x,x,x,x,x,x,2,x,x,x,x,3,7,x,x,x,x,x,2,3,x,x,x,x,x,85,42,41,85,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,46,46,41,40,x,x,x,x,x,x,x,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,26,26,60,33,52,34,34,34,34,34,51,33,23,26,26,87,87,87,87,50,88,88,88,40,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,53,54,54,54,55,55,55,54,54,54,55,55,54,54,54,55,55,55,55,54,54,54,55,55,55,55,55,55,55,55,55,55,55,54,54,54,55,55,55,55,55,55,55,55,55,55,55,55,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			


			
			
		],
		

		src:`images/parts.png`,
	},

	states:  //this will change the pixles for each tile
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY:0}]
			},

			// -- second row --

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY:64}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:64}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:64}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:64}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:64}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:64}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:64}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:64}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:64}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY:64}]
			},
			// {
			// 	fps:1,
			// 	cycle:false,   // this part of the code is just trying to flip the image within the code
			// 	frames:[{width:64, height:64, startX:576, startY:64}]
			// },

			// -- Third row!!! --
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY:128}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:128}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:128}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:128}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:128}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:128}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:128}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:128}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:128}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY:128}]
			},

			// -- 4th row --
			
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 192}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 192}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 192}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 192}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 192}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 192}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 192}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 192}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 192}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 192}]
			},

			// -- 5th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 256}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 256}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 256}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 256}]
			},

																				//this one is the animation 54
			{
				fps:10,
				cycle:true,
				frames:
			[
				{width:64, height:64, startX:256, startY: 256},
				// {width:64, height:64, startX:320, startY: 256},
				// {width:64, height:64, startX:384, startY: 256},
				// {width:64, height:64, startX:448, startY: 256},
			]			
				
			},


			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 256}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 256}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 256}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 256}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 256}]
			},

			// -- 6th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 320}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 320}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 320}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 320}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 320}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 320}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 320}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 320}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 320}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 320}]
			},

			// -- 7th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 384}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 384}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 384}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 384}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 384}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 384}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 384}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 384}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 384}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 384}]
			},

			// -- 8th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 448}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 448}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 448}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 448}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 448}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 448}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 448}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 448}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 448}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 448}]
			},

			// -- 9th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 512}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 512}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 512}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 512}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 512}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 512}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 512}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 512}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 512}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 512}]
			},

			// -- 10th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 576}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 576}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 576}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 576}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 576}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 576}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 576}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 576}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 576}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 576}]
			},

			// -- 11th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 640}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 640}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 640}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 640}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 640}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 640}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 640}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 640}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 640}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 640}]
			},

			// -- 12th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 704}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 704}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 704}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 704}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 704}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 704}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 704}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 704}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 704}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 704}]
			},

			// -- 13th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 768}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 768}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 768}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 768}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 768}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 768}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 768}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 768}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 768}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 768}]
			},

			// -- 14th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 832}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 832}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 832}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 832}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 832}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 832}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 832}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 832}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 832}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 832}]
			},

			// -- 15th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 896}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 896}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 896}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 896}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 896}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 896}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 896}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 896}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 896}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 896}]
			},

			// -- 16th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 960}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 960}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 960}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 960}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 960}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 960}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 960}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 960}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 960}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 960}]
			},

			// -- 17th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 1024}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 1024}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 1024}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 1024}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 1024}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 1024}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 1024}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 1024}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 1024}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 1024}]
			},

			// -- 18th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 1088}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 1088}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 1088}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 1088}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 1088}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 1088}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 1088}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 1088}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 1088}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 1088}]
			},

			// -- 19th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 1152}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 1152}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 1152}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 1152}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 1152}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 1152}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 1152}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 1152}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 1152}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 1152}]
			},

			// -- 20th row --  

			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:0, startY: 1216}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY: 1216}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY: 1216}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY: 1216}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY: 1216}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY: 1216}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY: 1216}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY: 1216}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY: 1216}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY: 1216}]
			},





			


		]
	}
	
	var caveBackData ={ //cave background
		info:{
			layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,29,29,100,101,102,103,104,105,106,107,29,100,101,102,103,104,105,106,107,29,29,29,29,29,29,29,29,29,29,29,29,29,16,16,16,16,16,16,16,16,16,16,16,16,18,190,190,190,15,16,16,16,16,16,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,100,101,102,103,104,105,106,107,29,29,29,29,29,29,29,29,29,29,29,29,29,29,16,26,87,87,87,87,87,87,87,87,87,87,87,87,87,87,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,110,111,112,113,114,115,116,117,29,110,111,112,113,114,115,116,117,29,92,29,140,141,142,143,144,145,146,147,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,61,61,61,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,110,111,112,113,114,115,116,117,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,82,45,45,45,45,45,83,45,45,45,45,39,45,39,45,45,45,45,45,45,45,45,45,45,82,108,45,83,45,45,45,45,45,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,92,29,29,29,29,29,29,29,29,29,29,120,121,122,123,124,125,126,127,29,120,121,122,123,124,125,126,127,29,29,29,150,151,152,153,154,155,156,157,29,29,29,29,29,29,29,92,29,29,29,29,29,29,61,61,61,61,61,29,29,29,29,92,29,29,29,92,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,92,29,29,29,120,121,122,123,124,125,126,127,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,80,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,45,45,45,45,45,45,45,45,44,44,79,44,79,44,44,45,45,45,45,45,45,83,45,82,118,45,45,45,45,45,45,45,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,92,29,29,130,131,132,133,134,135,136,137,92,130,131,132,133,134,135,136,137,29,29,29,160,161,162,163,164,165,166,167,29,29,29,29,29,29,29,29,29,29,29,29,29,61,61,61,61,61,61,61,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,130,131,132,133,134,135,136,137,29,29,29,29,29,29,29,29,29,29,29,29,29,92,29,62,44,44,69,45,45,45,44,44,69,45,45,44,44,69,45,45,83,45,44,44,44,83,44,44,70,79,44,79,70,44,44,45,44,44,44,45,45,45,82,128,45,45,45,108,45,83,108,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,92,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,92,29,29,29,29,29,29,29,29,29,170,171,172,173,174,175,176,177,29,29,29,29,29,29,29,29,29,29,29,29,61,61,61,61,28,61,61,61,61,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,92,29,29,29,29,29,29,29,29,29,43,44,44,79,44,45,44,44,44,79,44,44,44,44,79,44,45,45,44,44,70,44,44,44,44,47,79,48,79,47,44,44,44,44,70,44,44,45,45,45,128,108,45,45,118,45,108,118,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,92,29,29,29,29,29,29,29,29,29,29,29,29,92,29,29,29,92,29,29,29,29,29,29,29,29,29,29,29,92,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,92,29,29,29,29,29,61,61,61,61,29,29,29,61,61,61,61,29,29,29,29,29,29,29,29,29,29,92,29,29,29,29,92,29,29,29,29,29,29,29,29,29,92,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,43,44,47,79,44,45,44,44,71,79,44,44,44,47,79,44,45,45,44,44,47,44,44,44,44,57,89,58,89,57,44,44,44,44,47,44,44,45,45,45,128,118,108,45,128,108,118,128,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,92,29,29,29,29,92,29,29,29,29,29,29,29,29,29,29,29,29,61,61,61,61,29,29,29,29,29,61,61,61,61,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,63,65,72,89,65,66,65,65,72,89,65,65,65,72,89,65,66,66,65,65,72,65,65,66,97,98,98,98,98,98,99,66,65,65,72,65,65,66,66,66,128,128,128,66,128,118,128,128,128,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,26,26,60,33,52,34,34,34,34,34,51,33,23,26,26,87,87,87,87,50,88,88,88,40,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,53,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,54,54,54,55,55,55,55,55,55,55,55,55,55,55,54,54,54,55,55,55,55,55,55,55,55,55,55,55,55,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			],
			src:`images/parts.png`,
		},
		states:caveData.states
		}

		var caveHitData={  //this stuff is hitbox x means no hitbox while numbers mean yes hit box
			info:{
				layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,22,22,22,22,22,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,35,16,16,16,16,16,16,16,16,16,16,16,16,18,x,x,x,15,16,16,16,16,16,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,16,26,87,87,87,87,87,87,87,87,87,87,87,87,87,87,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,22,22,22,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,10,11,12,x,x,x,x,x,x,x,x,x,x,x,10,11,12,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,82,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,22,22,22,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,20,21,22,x,x,x,10,11,12,x,x,x,x,x,20,21,22,10,11,12,x,x,x,x,10,11,12,x,x,x,x,x,x,x,x,x,x,x,x,x,x,80,82,82,82,82,82,82,82,82,82,82,82,82,82,82,82,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,20,36,22,x,x,x,20,36,22,x,x,x,x,x,30,31,32,30,31,32,x,x,x,x,30,31,32,x,x,x,10,11,12,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,20,21,22,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,10,12,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,73,46,46,46,56,x,x,x,x,x,x,x,x,x,x,20,21,22,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,20,22,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,73,24,13,14,17,17,56,x,x,x,x,x,x,x,x,x,20,36,22,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,85,42,41,85,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,26,26,60,33,52,34,34,34,34,34,51,33,23,26,26,87,87,87,87,50,88,88,88,40,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,53,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,54,54,54,55,55,55,55,55,55,55,55,55,55,55,54,54,54,55,55,55,55,55,55,55,55,55,55,55,55,82,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87],
			
					
				],
				src:`images/parts.png`,
			},
			states:caveData.states
			
			}