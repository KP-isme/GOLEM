var x=false;
var caveData ={
	info:{
		layout:[
			[x,x,x,x,x,x,x,x,x,67,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16],
			
			[x,x,x,x,x,x,x,x,67,77,78,0,4,x,1,x,x,x,1,0,x,1,x,1,x,0,x,x,x,1,x,1,x,x,x,1,x,x,x,x,x,x,0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[x,x,x,x,x,67,16,16,77,78,x,x,5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,x,67,16,77,78,x,x,x,x,x,6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,x,25,68,78,x,x,x,x,x,x,5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,x,25,27,x,x,x,x,x,x,x,5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,67,77,37,x,x,x,x,x,x,x,7,2,x,x,3,x,x,2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[11,11,11,11,11,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]


			
			
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






			


		]
	}
	
	var caveBackData ={ //cave background
		info:{
			layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,63,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,39,45,39,45,45,45,45,45,45,45,45],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,63,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,44,44,79,44,79,44,44,45,45,45,45,45,45,45],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,63,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,44,44,44,45,44,44,44,79,44,79,44,44,44,45,44,44,44,45,45],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,63,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,44,44,44,44,44,44,44,47,79,48,79,47,44,44,44,44,44,44,44,45],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,63,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,44,44,47,44,44,44,44,57,89,58,89,57,44,44,44,44,47,44,44,45],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,63,66,66,66,66,66,66,66,66,45,45,45,45,45,45,45,45,45,44,44,57,44,44,45,97,98,98,98,98,98,99,45,44,44,57,44,44,45],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,53,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,54,54,54,55,55,55,55,55,55,55,55,55,55,55,54,54,54,55,64],
			],
			src:`images/parts.png`,
		},
		states:caveData.states
		}

		var caveHitData={  //this stuff is hitbox x means no hitbox while numbers mean yes hit box
			info:{
				layout:[
					[x,x,x,x,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[2,2,2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
					
					
				],
				src:`images/parts.png`,
			},
			states:caveData.states
			
			}