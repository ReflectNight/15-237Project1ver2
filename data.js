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
// endscene.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	var complete = false;
	
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NPCs.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	var numNPCs = 3;
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

	player.sprite[0][0].src = "Images/Player/sampleplayer.png";
	player.sprite[1][0].src = "Images/Player/sampleplayerleft.png";
	player.sprite[2][0].src = "Images/Player/sampleplayerback.png";
	player.sprite[3][0].src = "Images/Player/sampleplayerright.png";
	player.item = null;

	player.str = 0;
	player.int = 0;

	var moveUp = false;
	var moveDown = false;
	var moveLeft = false;
	var moveRight = false;
	var numTurns=20;//number of turns left
		
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// worlds.js Variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	// Initialization of Worlds Data
	var numWorlds = 3;

	var worldMap = new Array(numWorlds);
	for (var i = 0; i < numWorlds; i++)
	{
		worldMap[i] = new Object();
		worldMap[i].ID = i;
		worldMap[i].img = new Image();
		
		// 7 x 9 grid of 50x50 pixel squares.
		// Indexed worldMap[i].grid[row][col].
		worldMap[i].grid = new Array(9);
		for (var j = 0; j < worldMap[i].grid.length; j++)
		{
			worldMap[i].grid[j] = new Array(7);
		}
	}

	worldMap[0].img.src = "Images/Worlds/rm1.png";
	worldMap[1].img.src = "Images/Worlds/beach.png";
	worldMap[2].img.src = "Images/Worlds/grass.png";

	// World
	// state: 0 denotes player is in menu screen, 1 denotes player is in a world.
	var state = 1;
	// currentWorld: denotes the world the player is in.
	var currentWorld = 0;

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// sidebar.js Variables
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	var statsBar = new Image();
	statsBar.src = "Images/Worlds/stats.png";

	var itemBar = new Image();
	itemBar.src = "Images/Worlds/item.png";

	var turnBar = new Image();
	turnBar.src = "Images/Worlds/turns.png";

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// game.js Variables
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	var intervalID;
	var timerDelay = 50;

	// 0: menu, 1: game, 2: endscene
	var screen = 0;
