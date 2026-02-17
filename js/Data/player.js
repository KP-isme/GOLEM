/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/Golem_stand_still (Editing) (3).png`
	},
	
	states:{
		//The idle animation 
    	idle:
		{
			fps:2,
			cycle:true,
			frames:
			[
				{width:384, height:378, startX:0, startY:0},
				{width:384, height:378, startX:384, startY:0},
				{width:384, height:378, startX:768, startY:0},
				{width:384, height:378, startX:1152, startY:0},
				{width:384, height:378, startX:1536, startY:0},
				{width:384, height:378, startX:1920, startY:0},
				{width:384, height:378, startX:2304, startY:0},
				{width:384, height:378, startX:2688, startY:0},
				{width:384, height:378, startX:3072, startY:0},
				{width:384, height:378, startX:3456, startY:0},
				{width:384, height:378, startX:3840, startY:0},
				{width:384, height:378, startX:4224, startY:0},
				{width:384, height:378, startX:4608, startY:0},
				{width:384, height:378, startX:4992, startY:0},
				{width:384, height:378, startX:5376, startY:0},
				{width:384, height:378, startX:5760, startY:0},
				{width:384, height:378, startX:6144, startY:0},
				{width:384, height:378, startX:6528, startY:0},
				{width:384, height:378, startX:6912, startY:0},
				{width:384, height:378, startX:7296, startY:0},
				{width:384, height:378, startX:7680, startY:0},
				
				
				//second layer from piture
				{width:384, height:378, startX:0, startY:384},
				{width:384, height:378, startX:384, startY:384},
				{width:384, height:378, startX:768, startY:384},
				{width:384, height:378, startX:1152, startY:384},
				{width:384, height:378, startX:1536, startY:384},
				{width:384, height:378, startX:1920, startY:384},
				{width:384, height:378, startX:2304, startY:384},
				{width:384, height:378, startX:2688, startY:384},
				{width:384, height:378, startX:3072, startY:384},
				{width:384, height:378, startX:3456, startY:384},
				{width:384, height:378, startX:3840, startY:384},
				{width:384, height:378, startX:4224, startY:384},
				{width:384, height:378, startX:4608, startY:384},
				{width:384, height:378, startX:4992, startY:384},
				{width:384, height:378, startX:5376, startY:384},
				{width:384, height:378, startX:5760, startY:384},
				{width:384, height:378, startX:6144, startY:384},
				{width:384, height:378, startX:6528, startY:384},
				{width:384, height:378, startX:6912, startY:384},
				{width:384, height:378, startX:7296, startY:384},
				{width:384, height:378, startX:7680, startY:384},
				
				
				//third layer
				{width:384, height:378, startX:0, startY:768},
				{width:384, height:378, startX:384, startY:768},
				{width:384, height:378, startX:768, startY:768},
				{width:384, height:378, startX:1152, startY:768},
				{width:384, height:378, startX:1536, startY:768},
				{width:384, height:378, startX:1920, startY:768},
				{width:384, height:378, startX:2304, startY:768},
				{width:384, height:378, startX:2688, startY:768},
				{width:384, height:378, startX:3072, startY:768},
				{width:384, height:378, startX:3456, startY:768},
				{width:384, height:378, startX:3840, startY:768},
				{width:384, height:378, startX:4224, startY:768},
				{width:384, height:378, startX:4608, startY:768},
				{width:384, height:378, startX:4992, startY:768},
				{width:384, height:378, startX:5376, startY:768},
				{width:384, height:378, startX:5760, startY:768},
				{width:384, height:378, startX:6144, startY:768},
				{width:384, height:378, startX:6528, startY:768},
				{width:384, height:378, startX:6912, startY:768},
				{width:384, height:378, startX:7296, startY:768},
				{width:384, height:378, startX:7680, startY:768},
				

				//level 4 
				{width:384, height:378, startX:0, startY: 1152},
				{width:384, height:378, startX:384, startY: 1152},
				{width:384, height:378, startX:768, startY: 1152},
				{width:384, height:378, startX:1152, startY: 1152},
				{width:384, height:378, startX:1536, startY: 1152},
				{width:384, height:378, startX:1920, startY: 1152},
				{width:384, height:378, startX:2304, startY: 1152},
				{width:384, height:378, startX:2688, startY: 1152},
				{width:384, height:378, startX:3072, startY: 1152},
				{width:384, height:378, startX:3456, startY: 1152},
				{width:384, height:378, startX:3840, startY: 1152},
				{width:384, height:378, startX:4224, startY: 1152},
				{width:384, height:378, startX:4608, startY: 1152},
				{width:384, height:378, startX:4992, startY: 1152},
				{width:384, height:378, startX:5376, startY: 1152},
				{width:384, height:378, startX:5760, startY: 1152},
				

				
			]
		},
		//The walwidth:384, height:378,
		walk:
		{
			fps:2,
			cycle:true,
			frames:
			[
				{width:384, height:378, startX:6528, startY: 1152},
				{width:384, height:378, startX:6912, startY: 1152},
				{width:384, height:378, startX:7296, startY: 1152},
				{width:384, height:378, startX:7680, startY: 1152},

				//layer two
				{width:384, height:378, startX:0, startY:1536},
				{width:384, height:378, startX:384, startY:1536},
				{width:384, height:378, startX:768, startY:1536},
				{width:384, height:378, startX:1152, startY:1536},
				{width:384, height:378, startX:1536, startY:1536},
				{width:384, height:378, startX:1920, startY:1536},
				{width:384, height:378, startX:2304, startY:1536},
				{width:384, height:378, startX:2688, startY:1536},
				{width:384, height:378, startX:3072, startY:1536},
				{width:384, height:378, startX:3456, startY:1536},
				{width:384, height:378, startX:3840, startY:1536},
				{width:384, height:378, startX:4224, startY:1536},
				{width:384, height:378, startX:4608, startY:1536},
				{width:384, height:378, startX:4992, startY:1536},
				{width:384, height:378, startX:5376, startY:1536},
				{width:384, height:378, startX:5760, startY:1536},
				{width:384, height:378, startX:6144, startY:1536},
				{width:384, height:378, startX:6528, startY:1536},
				{width:384, height:378, startX:6912, startY:1536},
				{width:384, height:378, startX:7296, startY:1536},
				{width:384, height:378, startX:7680, startY:1536},
				
				
				//three 
				{width:384, height:378, startX:0, startY: 1920},
				{width:384, height:378, startX:384, startY: 1920},
				{width:384, height:378, startX:768, startY: 1920},
				{width:384, height:378, startX:1152, startY: 1920},
				{width:384, height:378, startX:1536, startY: 1920},
				{width:384, height:378, startX:1920, startY: 1920},
				{width:384, height:378, startX:2304, startY: 1920},
				{width:384, height:378, startX:2688, startY: 1920},
				{width:384, height:378, startX:3072, startY: 1920},
				{width:384, height:378, startX:3456, startY: 1920},
				{width:384, height:378, startX:3840, startY: 1920},
				{width:384, height:378, startX:4224, startY: 1920},
				{width:384, height:378, startX:4608, startY: 1920},
				{width:384, height:378, startX:4992, startY: 1920},
				{width:384, height:378, startX:5376, startY: 1920},
				{width:384, height:378, startX:5760, startY: 1920},
				{width:384, height:378, startX:6144, startY: 1920},
				{width:384, height:378, startX:6528, startY: 1920},
				

			]
		},
		//The jump animation 
		jump:
		{
			fps:1,
			cycle:false,
			frames:
			[
				{width:384, height:378, startX:7296, startY:1920},
				{width:384, height:378, startX:7680, startY:1920},

				//layer 2
				{width:384, height:378, startX:0, startY:2304},
				{width:384, height:378, startX:384, startY:2304},
				{width:384, height:378, startX:768, startY:2304},
				{width:384, height:378, startX:1152, startY:2304},
				{width:384, height:378, startX:1536, startY:2304},
				{width:384, height:378, startX:1920, startY:2304},
				{width:384, height:378, startX:2304, startY:2304},
				{width:384, height:378, startX:2688, startY:2304},
				
				
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:1,
			cycle:true,
			frames:
			[
				{width:384, height:378, startX:7296, startY: 1920},
			]
		},
		//The attack animation 
		attack:
		{
			fps:1,
			cycle:false,
			//width:300,
			frames:
			[
				{width:384, height:378, startX:1024, startY:0},
				{width:384, height:378, startX:1024, startY:0},
				{width:384, height:378, startX:1024, startY:0},
				{width:384, height:378, startX:1152, startY:0},
				{width:384, height:378, startX:1152, startY:0},
				{width:384, height:378, startX:1152, startY:0},
				{width:384, height:378, startX:1152, startY:0}
				
			]
		}
	}
		
}