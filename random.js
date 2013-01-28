//random.js

/***************************ITEMS***************************/

	item[0].name = "Book";
	item[0].description1 = "You have made a startling discovery! \n" + 
		"Your int increased by 1 pt.";
	item[0].description2 = "Your int is at the max!";
	item[0].img.src = "Images/Items/book.png";
	item[0].world = 0;
	item[0].x = 0;
	item[0].y = 0;
	item[0].str = 0;
	
	item[1].name = "Weight";
	item[1].description1 = "Phew, good workout, your str \ninceased by 1 pt!";
	item[1].description2 = "Your str is at the max!";
	item[1].img.src = "Images/Items/weight.png";
	item[1].world = 0;
	item[1].x = 1;
	item[1].y = 0;
	item[1].str = 0;
	
	item[2].name = "Mystery Pie";
	item[2].description1 = "I'm hungry for some dessert.";
	item[2].description2 = "And now for a haiku: \n Crust Crust Crust" +
		"Crust Crust \n Filling Filling So Filling \n Crust Crust Crust " +
		"Crust Crust";
	item[2].img.src = "Images/Items/mysterypie.png";
	item[2].world = 1;
	item[2].x = 2;
	item[2].y = 2;
	item[2].str = 0;
	
	item[3].name = "Chicken";
	item[3].description1 = "I believe I can fly~";
	item[3].description2 = "I want a feathery friend";
	item[3].img.src = "Images/Items/chicken.png";
	item[3].world = 1;
	item[3].x = 4;
	item[3].y = 4;
	item[3].str = 1;
	
	item[4].name = "The One Ring";
	item[4].description1 = "I want to rule them all.";
	item[4].description2 = "MY PRECIOUSSSSSSS";
	item[4].img.src = "Images/Items/oneRing.png";
	item[4].world = 1;
	item[4].x = 3;
	item[4].y = 1;
	item[4].str = 0;
	
	item[5].name = "Pickaxe";
	item[5].description1 = "I need something to help me dig for diamond ore!";
	item[5].description2 = "I would like to dig a tunnel to the center of " + 
		"the earth.";
	item[5].img.src = "Images/Items/pickaxe.png";
	item[5].world = 1;
	item[5].x = 2;
	item[5].y = 4;
	item[5].str = 2;
	
	item[6].name = "Elephant";
	item[6].description1 = "I want someone to share my peanuts with.";
	item[6].description2 = "Elephants are awesome! Can you bring one to my" + 
		"umbrella party?";
	item[6].img.src = "Images/Items/elephant.png";
	item[6].world = 0;
	item[6].x = 3;
	item[6].y = 3;
	item[6].str = 3;
	
	item[7].name = "Calcifer";
	item[7].description1 = "I'm cold :(";
	item[7].description2 = "I want to make some bacon and I need a fire.";
	item[7].img.src = "Images/Items/calcifer.png";
	item[7].world = 2;
	item[7].x = 1;
	item[7].y = 2;
	item[7].str = 1;
	
	item[8].name = "PMGhost";
	item[8].description1 = "I'm nostalgic about Pacman. Blinky is awesome.";
	item[8].description2 = "Red is my favorite colour!";
	item[8].img.src = "Images/Items/PMGhost.png";
	item[8].world = 2;
	item[8].x = 4;
	item[8].y = 1;
	item[8].str = 0;
	
	item[9].name = "Green Mushroom";
	item[9].description1 = "I want a life :(";
	item[9].description2 = "Edible fungi are awesome!";
	item[9].img.src = "Images/Items/greenmushroom.png";
	item[9].world = 2;
	item[9].x = 4;
	item[9].y = 3;
	item[9].str = 0;

/***************************NPCS****************************/

	NPC[0].name = "Angela";
	NPC[0].img.src = "Images/NPCs/angela.png";
	NPC[0].freeDialogue = ["I am a sample NPC.", "This is sample dialogue."];
	NPC[0].freeIndex = 0;
	NPC[0].rejectDialogue = "Not my item.";
	NPC[0].acceptDialogue = "Thank you for the item!";
	NPC[0].hintDialogue = ["WASD or arrow keys to move."];
	NPC[0].hintIndex = 0;
	NPC[0].itemID = -1;
	NPC[0].world = 0;
	NPC[0].x = 7;
	NPC[0].y = 0;
	NPC[0].done=false;
	
	NPC[1].name = "Sarah";
	NPC[1].img.src = "Images/NPCs/sarah.png";
	NPC[1].freeDialogue = ["I am a sample NPC.", "This is sample dialogue."];
	NPC[1].freeIndex = 0;
	NPC[1].rejectDialogue = "Not my item.";
	NPC[1].acceptDialogue = "Thank you for the item!";
	NPC[1].hintDialogue = ["Press T to teleport!"];
	NPC[1].hintIndex = 0;
	NPC[1].itemID = -1;
	NPC[1].world = 0;
	NPC[1].x = 8;
	NPC[1].y = 0;
	NPC[1].done=false;
	
	NPC[2].name = "SampleNPC";
	NPC[2].img.src = "Images/NPCs/sampleNPC.png";
	NPC[2].freeDialogue = ["I am a sample NPC.", "This is sample dialogue."];
	NPC[2].freeIndex = 0;
	NPC[2].rejectDialogue = "Not my item.";
	NPC[2].acceptDialogue = "Thank you for the item!";
	NPC[2].hintDialogue = ["This is a hint.", "This is also a hint."];
	NPC[2].hintIndex = 0;
	NPC[2].itemID = 3; //chicken
	NPC[2].world = 0;
	NPC[2].x = 0;
	NPC[2].y = 5;
	NPC[2].done=false; // initialized as false if they want an item.

/***************************OTHER****************************/	
	/** PUT ITEMS AND NPCS INTO GRID **/
	for (var i = 0; i < item.length; i++)
	{
		worldMap[item[i].world].grid[item[i].x][item[i].y] = item[i];
	}

	for (var i = 0; i < NPC.length; i++)
	{
		worldMap[NPC[i].world].grid[NPC[i].x][NPC[i].y] = NPC[i];
	}