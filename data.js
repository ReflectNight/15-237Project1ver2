/* data.js
 * 		Handles most, if not all, initializations. Contains data on every
 *		item, NPC, world, dialogue, achievement, etc.
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// menu.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	var canvas = document.getElementById("c");
	var ctx= canvas.getContext("2d");
	
	var canvasHeight = 600;
	var canvasWidth = 600;
	var canvasCenter=canvasWidth/2;
	var gameHeight=450;
	var gameWidth=450;
	
	// Will also need dimensions and coordinates for the sidebar boxes and 
	// dialogue box.


	var startPage = true; // wow i forgot how to code things. what even is
	var instPage = false;
	var creditPage = false;
	var gameMode = false;
	
	var sqx = 210;//this is shitty maybe I'll just hardcode it :|
	var sqw = 180;//unless i figure out an algorithm
	var sqh = 30;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// items.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	var numItems = 10;
	var item = new Array(numItems);
	for (var i = 0; i < numItems; i++)
	{
		item[i] = new Object();
		item[i].type = "item";
		item[i].ID = i;
		item[i].img = new Image();
		item[i].onScreen = true;
	}
	
	item[0].name = "Book";
	item[0].description1 = "You have made a startling discovery! " + 
		"Your int increased by 1 pt.";
	item[0].description2 = "Wow, books are awesome. Your int increased by 1 pt.";
	item[0].img.src = "Images/Items/book.png";
	item[0].world = 0;
	item[0].x = 0;
	item[0].y = 0;
	
	item[1].name = "Weight";
	item[1].description1 = "Phew, good workout, your str inceased by 1 pt!";
	item[1].description2 = "Burned some calories and gained some muscle. " + 
		"Your str increased by 1 pt.";
	item[1].img.src = "Images/Items/weight.png";
	item[1].world = 0;
	item[1].x = 1;
	item[1].y = 1;
	
	item[2].name = "Mystery Pie";
	item[2].description1 = "I'm hungry for some dessert.";
	item[2].description2 = "And now for a haiku: \n Crust Crust Crust" +
		"Crust Crust \n Filling Filling So Filling \n Crust Crust Crust " +
		"Crust Crust";
	item[2].img.src = "Images/Items/mysterypie.png";
	item[2].world = 1;
	item[2].x = 2;
	item[2].y = 2;
	
	item[3].name = "Chicken";
	item[3].description1 = "I believe I can fly~";
	item[3].description2 = "I want a feathery friend";
	item[3].img.src = "Images/Items/chicken.png";
	item[3].world = 1;
	item[3].x = 4;
	item[3].y = 4;
	
	item[4].name = "The One Ring";
	item[4].description1 = "I want to rule them all.";
	item[4].description2 = "MY PRECIOUSSSSSSS";
	item[4].img.src = "Images/Items/oneRing.png";
	item[4].world = 1;
	item[4].x = 3;
	item[4].y = 1;
	
	item[5].name = "Pickaxe";
	item[5].description1 = "I need something to help me dig for diamond ore!";
	item[5].description2 = "I would like to dig a tunnel to the center of " + 
		"the earth.";
	item[5].img.src = "Images/Items/pickaxe.png";
	item[5].world = 1;
	item[5].x = 2;
	item[5].y = 4;
	
	item[6].name = "Elephant";
	item[6].description1 = "I want someone to share my peanuts with.";
	item[6].description2 = "Elephants are awesome! Can you bring one to my" + 
		"umbrella party?";
	item[6].img.src = "Images/Items/elephant.png";
	item[6].world = 0;
	item[6].x = 3;
	item[6].y = 3;
	
	item[7].name = "Calcifer";
	item[7].description1 = "I'm cold :(";
	item[7].description2 = "I want to make some bacon and I need a fire.";
	item[7].img.src = "Images/Items/calcifer.png";
	item[7].world = 2;
	item[7].x = 1;
	item[7].y = 2;
	
	item[8].name = "PMGhost";
	item[8].description1 = "I'm nostalgic about Pacman. Blinky is awesome.";
	item[8].description2 = "Red is my favorite colour!";
	item[8].img.src = "Images/Items/PMGhost.png";
	item[8].world = 2;
	item[8].x = 4;
	item[8].y = 1;
	
	item[9].name = "Green Mushroom";
	item[9].description1 = "I want a life :(";
	item[9].description2 = "Edible fungi are awesome!";
	item[9].img.src = "Images/Items/greenmushroom.png";
	item[9].world = 2;
	item[9].x = 4;
	item[9].y = 3;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NPCs.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	var numNPCs = 1;
	var NPC = new Array(numNPCs);
	var numFree = 2;
	var numHint = 2;
	
	for (var i = 0; i < numNPCs; i++)
	{
		NPC[i] = new Object();
		NPC[i].type = "NPC";
		NPC[i].ID = i;
		NPC[i].img = new Image();
		NPC[i].freeDialogue = new Array(numFree);
		NPC[i].hintDialogue = new Array(numHint);
	}
	
	NPC[0].name = "SampleNPC";
	NPC[0].img.src = "Images/NPCs/sampleNPC.png";
	NPC[0].bookLevel = 0;
	NPC[0].strLevel = 0;
	NPC[0].freeDialogue = ["I am a sample NPC.", "This is sample dialogue."];
	NPC[0].freeIndex = 0;
	NPC[0].rejectDialogue = "Not my item.";
	NPC[0].acceptDialogue = "Thank you for the item!";
	NPC[0].hintDialogue = ["This is a hint.", "This is also a hint."];
	NPC[0].hintIndex = 0;
	NPC[0].itemID = 3; //chicken
	NPC[0].world = 0;
	NPC[0].x = 1;
	NPC[0].y = 1;
	NPC[0].done=false; // initialized as false if they want an item.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// player.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var player = new Object();
player.x = gameWidth/2 - 25;
player.y = gameHeight/2 - 25;
// 0 : forward, 1 : left, 2 : back, 3 : right
player.dir = 0;
player.sprite = new Array(4); // 0: down, 1: left, 2: up, 3: right
for(var i = 0; i < 4; i++)
{
	player.sprite[i] = new Array(3);
	for (var j = 0; j < 3; j++)
	{
		player.sprite[i][j] = new Image();
	}
}
//player.img.src = "Images/smiley.png"; //PICTURES HERE
player.sprite[0][0].src = "Images/Player/sampleplayer.png";
player.sprite[1][0].src = "Images/Player/sampleplayerleft.png";
player.sprite[2][0].src = "Images/Player/sampleplayerback.png";
player.sprite[3][0].src = "Images/Player/sampleplayerright.png";
player.item = null;

var moveUp = false;
var moveDown = false;
var moveLeft = false;
var moveRight = false;
var numTurns=20;//number of turns left
		
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// worlds.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Initialization of Worlds Data
var numWorlds = 4;

var worldMap = new Array(numWorlds);
for (var i = 0; i < numWorlds; i++)
{
	worldMap[i] = new Object();
	worldMap[i].ID = i;
	worldMap[i].img = new Image();
	
	// 7 x 9 grid of 50x50 pixel squares.
	// Indexed worldMap[i].grid[row][col].
	worldMap[i].grid = new Array(7);
	for (var j = 0; j < worldMap[i].grid.length; j++)
	{
		worldMap[i].grid[j] = new Array(9);
	}
}

worldMap[0].img.src = "Images/Worlds/sampleBG.png";
worldMap[1].img.src = "Images/Worlds/rm1.png";
worldMap[2].img.src = "Images/Worlds/grass.png";
worldMap[3].img.src = "Images/Worlds/sky.jpg";

/** PUT ITEMS AND NPCS INTO GRID **/
for (var i = 0; i < item.length; i++)
{
	worldMap[item[i].world].grid[item[i].x][item[i].y] = item[i];
}

for (var i = 0; i < NPC.length; i++)
{
	worldMap[NPC[i].world].grid[NPC[i].x][NPC[i].y] = NPC[i];
}

// World
// state: 0 denotes player is in menu screen, 1 denotes player is in a world.
var state = 1;
// currentWorld: denotes the world the player is in.
var currentWorld = 0;

var inventory = {x:500, y:200}//location of the inventory

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// game.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var intervalID;
var timerDelay = 50;
