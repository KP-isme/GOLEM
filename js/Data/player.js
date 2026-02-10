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
		src:`images/Golem_stand_still (Editing) (1).png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:5,
			cycle:true,
			frames:
			[
				{width:128, height:120, startX:0, startY:0},
				{width:128, height:120, startX:128, startY:0},
				{width:128, height:120, startX:256, startY:0},
				{width:128, height:120, startX:384, startY:0},
				{width:128, height:120, startX:512, startY:0},
				{width:128, height:120, startX:640, startY:0},
				{width:128, height:120, startX:768, startY:0},
				{width:128, height:120, startX:896, startY:0},
				{width:128, height:128, startX:1024, startY:0},
				{width:128, height:128, startX:1152, startY:0},
				{width:128, height:128, startX:1280, startY:0},
				{width:128, height:128, startX:1408, startY:0},
				{width:128, height:128, startX:1536, startY:0},
				{width:128, height:128, startX:1664, startY:0},
				{width:128, height:128, startX:1792, startY:0},
				{width:128, height:128, startX:1920, startY:0},
				{width:128, height:128, startX:2048, startY:0},
				{width:128, height:128, startX:2176, startY:0},
				{width:128, height:128, startX:2304, startY:0},
				{width:128, height:128, startX:2432, startY:0},
				{width:128, height:128, startX:2560, startY:0},
				{width:128, height:128, startX:2688, startY:0},
				{width:128, height:128, startX:2816, startY:0},
				{width:128, height:128, startX:2944, startY:0},
				{width:128, height:128, startX:3072, startY:0},
				{width:128, height:128, startX:3200, startY:0},
				{width:128, height:128, startX:3328, startY:0},
				{width:128, height:128, startX:3456, startY:0},
				{width:128, height:128, startX:3584, startY:0},
				{width:128, height:128, startX:3712, startY:0},
				{width:128, height:128, startX:3840, startY:0},
				{width:128, height:128, startX:3968, startY:0},
				{width:128, height:128, startX:4096, startY:0},
				{width:128, height:128, startX:4224, startY:0},
				{width:128, height:128, startX:4352, startY:0},
				{width:128, height:128, startX:4480, startY:0},
				{width:128, height:128, startX:4608, startY:0},
				{width:128, height:128, startX:4736, startY:0},
				{width:128, height:128, startX:4864, startY:0},
				{width:128, height:128, startX:4992, startY:0},
				{width:128, height:128, startX:5120, startY:0},
				{width:128, height:128, startX:5248, startY:0},
				{width:128, height:128, startX:5376, startY:0},
				{width:128, height:128, startX:5504, startY:0},
				{width:128, height:128, startX:5632, startY:0},
				{width:128, height:128, startX:5760, startY:0},
				{width:128, height:128, startX:5888, startY:0},
				{width:128, height:128, startX:6016, startY:0},
				{width:128, height:128, startX:6144, startY:0},
				{width:128, height:128, startX:6272, startY:0},
				{width:128, height:128, startX:6400, startY:0},
				{width:128, height:128, startX:6528, startY:0},
				{width:128, height:128, startX:6656, startY:0},
				{width:128, height:128, startX:6784, startY:0},
				{width:128, height:128, startX:6912, startY:0},
				{width:128, height:128, startX:7040, startY:0},
				{width:128, height:128, startX:7168, startY:0},
				{width:128, height:128, startX:7296, startY:0},
				{width:128, height:128, startX:7424, startY:0},
				{width:128, height:128, startX:7552, startY:0},
				{width:128, height:128, startX:7680, startY:0},
				{width:128, height:128, startX:7808, startY:0},
				{width:128, height:128, startX:7936, startY:0},
				{width:128, height:128, startX:8064, startY:0},
				{width:128, height:128, startX:0, startY:128},
				{width:128, height:128, startX:128, startY:128},
				{width:128, height:128, startX:256, startY:128},
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:1,
			cycle:true,
			frames:
			[
				{width:256, height:256, startX:0, startY:0},
				{width:256, height:256, startX:256, startY:0},
				{width:256, height:256, startX:512, startY:0},
				{width:256, height:256, startX:768, startY:0},
				{width:256, height:256, startX:512, startY:0},
				{width:256, height:256, startX:1024, startY:0},
				{width:256, height:256, startX:1280, startY:0},	

			]
		},
		//The jump animation 
		jump:
		{
			fps:1,
			cycle:false,
			frames:
			[
				{width:128, height:256, startX:0, startY:0},
				{width:128, height:128, startX:128, startY:0},
				{width:128, height:128, startX:256, startY:0},
				{width:128, height:128, startX:384, startY:0},
				{width:128, height:128, startX:512, startY:0},
				{width:128, height:128, startX:640, startY:0},
				{width:128, height:128, startX:768, startY:0},
				{width:128, height:128, startX:896, startY:0},
				{width:128, height:128, startX:1024, startY:0},
				{width:128, height:128, startX:1152, startY:0},
				{width:128, height:128, startX:1280, startY:0},
				{width:128, height:128, startX:1408, startY:0},
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:0, startY:0},
				{width:128, height:128, startX:128, startY:0},
				{width:128, height:128, startX:256, startY:0},
				{width:128, height:128, startX:384, startY:0},
				{width:128, height:128, startX:512, startY:0},
				{width:128, height:128, startX:640, startY:0},
				{width:128, height:128, startX:768, startY:0},
				{width:128, height:128, startX:896, startY:0},
				{width:128, height:128, startX:1024, startY:0},
				{width:128, height:128, startX:1152, startY:0},
				{width:128, height:128, startX:1280, startY:0},
				{width:128, height:128, startX:1408, startY:0},
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:128, height:128, startX:1024, startY:0},
				{width:128, height:128, startX:1024, startY:0},
				{width:128, height:128, startX:1024, startY:0},
				{width:128, height:128, startX:1152, startY:0},
				{width:128, height:128, startX:1152, startY:0},
				{width:128, height:128, startX:1152, startY:0},
				{width:128, height:128, startX:1152, startY:0}
				
			]
		}
	}
		
}