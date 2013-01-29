//random.js

/***************************ITEMS***************************/

	item[0].name = "Book";
	item[0].description1 = "You have made a startling discovery! ;" + 
		"Your int increased by 1 pt.";
	item[0].description2 = "Your int is at the max!";
	item[0].img.src = "Images/Items/book.png";
	item[0].world = 0;
	item[0].x = 0;
	item[0].y = 0;
	item[0].str = 0;
	
	item[1].name = "Weight";
	item[1].description1 = "Phew, good workout, your str increased by 1 pt!";
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
	item[3].x = 7;
	item[3].y = 6;
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
	item[5].x = 6;
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
	item[8].description2 = "Red is my favorite colour and I quite like ghosts.";
	item[8].img.src = "Images/Items/PMGhost.png";
	item[8].world = 2;
	item[8].x = 5;
	item[8].y = 1;
	item[8].str = 0;
	
	item[9].name = "Green Mushroom";
	item[9].description1 = "I want a life :(";
	item[9].description2 = "Edible fungi are awesome!";
	item[9].img.src = "Images/Items/greenmushroom.png";
	item[9].world = 2;
	item[9].x = 8;
	item[9].y = 3;
	item[9].str = 0;
	
	item[10].name = "Gold Star";
	item[10].description1 = "yOu tRieD";
	item[10].description2 = "you Tried";
	item[10].img.src = "Images/Items/youtried.png";
	item[10].world = 2;
	item[10].x = 4;
	item[10].y = 6;
	item[10].str = 0;

/***************************NPCS****************************/

	NPC[0].name = "Angela";
	NPC[0].img.src = "Images/NPCs/angela.png";
	NPC[0].freeDialogue = ["WASD or arrow keys to move and SPACE to ;interact with item and people!", 
		"Try to help everyone you meet along the way!",
		"Can't pick up an item? Try working out.",
		"Kosbie deserves a prize for being a great professor :)", 
		"MY PRECIOUSSSSSSSS"];
	NPC[0].freeIndex = 0;
	NPC[0].rejectDialogue = "I don't want that :(";
	NPC[0].acceptDialogue = "NOW I CAN RULE THE WORLD. (huehuehue);I mean... Thanks";
	NPC[0].hintDialogue = ["WASD or arrow keys to move and SPACE ;to interact with item and people!;" +
		"Try to help everyone you meet along the way!", "I want something else."];
	NPC[0].itemID = 4;
	NPC[0].world = 0;
	NPC[0].x = 7;
	NPC[0].y = 0;
	NPC[0].int = 0;
	NPC[0].done=true;
	NPC[0].gotRing = false;
	
	NPC[1].name = "Sarah";
	NPC[1].img.src = "Images/NPCs/sarah.png";
	NPC[1].freeDialogue = ["Press T to teleport to different worlds!;Press 0, 1, 2, or 3 to pick a destination.",
		"If someone doesn't want to talk to you,; try getting a little smarter.", 
		"Sometimes people will tell you things about other people.", 
		"Angela's shirt has a cat on it.", "I AM [S][H][E][R]LOCKED."];
	NPC[1].freeIndex = 0;
	NPC[1].rejectDialogue = "Uh, thanks but no thanks.";
	NPC[1].acceptDialogue = ".......Did Angela tell you to get me this?? ;I don't really want it, but fine...";
	NPC[1].hintDialogue = ["Press T to teleport to different worlds!;Press 0, 1, 2, or 3 to pick a destination."];
	NPC[1].itemID = 6;
	NPC[1].world = 0;
	NPC[1].x = 8;
	NPC[1].y = 0;
	NPC[1].int = 0;
	NPC[1].done=true;
	NPC[0].gotElephant = false;
	
	NPC[2].name = "Peasant Lady";
	NPC[2].img.src = "Images/NPCs/sampleNPC.png";
	NPC[2].freeDialogue = ["This game was originally supposed to ;be a dating sim. ",
		"The weather is getting warmer! :)", 
		"I think the green-haired lady wants something ;Pacman related."];
	NPC[2].freeIndex = 0;
	NPC[2].rejectDialogue = "That's not what I wanted...";
	NPC[2].acceptDialogue = "Thank you for the chicken!!";
	NPC[2].hintDialogue = ["I could really use some eggs...", "I love birds!"];
	NPC[2].itemID = 3; //chicken
	NPC[2].world = 0;
	NPC[2].x = 0;
	NPC[2].y = 5;
	NPC[2].int = 0;
	NPC[2].done=false;
	
	NPC[3].name = "Green-Haired Lady";
	NPC[3].img.src = "Images/NPCs/ladyNPC.png";
	NPC[3].freeDialogue = ["Aren't you sweet?"];
	NPC[3].freeIndex = 0;
	NPC[3].rejectDialogue = "That is not what I was looking for.";
	NPC[3].acceptDialogue = "Oh! Thank you for finding him!";
	NPC[3].intDialogue = "I don't talk to mere commonfolk.";
	NPC[3].hintDialogue = ["Have you seen my little pet?", "I miss my old red friend."];
	NPC[3].itemID = 8;
	NPC[3].world = 1;
	NPC[3].x = 6;
	NPC[3].y = 3;
	NPC[3].int = 1;
	NPC[3].done=false;
	
	NPC[4].name = "Kosbie";
	NPC[4].img.src = "Images/NPCs/kosbie.png";
	NPC[4].freeDialogue = ["This game is great, A+.", "I am the best professor.",
		"Javascript is such a great language."];
	NPC[4].freeIndex = 0;
	NPC[4].rejectDialogue = "Thanks! I don't want it.";
	NPC[4].acceptDialogue = "This is the happiest day of my life.";
	NPC[4].intDialogue = "We move fast in this class, so you should study more!!!";
	NPC[4].hintDialogue = ["So if you call this function... oh wait, that's wrong.", 
		"I only slept for an hour last night."];
	NPC[4].itemID = 10;
	NPC[4].world = 2;
	NPC[4].x = 7;
	NPC[4].y = 1;
	NPC[4].int = 3;
	NPC[4].done=false;

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