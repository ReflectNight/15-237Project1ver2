// init(): Initializes all variables of the game.
function init(){
	complete = false;

	for(var i = 2; i < NPC.length; i++)
		NPC[i].done=false;
		
	player.x = gameWidth/2 - 25;
	player.y = gameHeight/2 - 25;
	player.dir = 0;
	
	player.item = null;
	player.str = 0;
	player.int = 0;
	
	moveUp = false;
	moveDown = false;
	moveLeft = false;
	moveRight = false;
	numTurns=20;
	
	for (var i = 0; i < item.length; i++){
		item[i].onScreen = true;
		worldMap[item[i].world].grid[item[i].x][item[i].y] = item[i];
	}

	for (var i = 0; i < NPC.length; i++){
		worldMap[NPC[i].world].grid[NPC[i].x][NPC[i].y] = NPC[i];
	}
	
	state = 1;
	currentWorld = 0;
	screen = 1;
}