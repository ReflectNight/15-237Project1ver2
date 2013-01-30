// init(): Initializes all variables of the game.
function init(){
	complete = false;

	NPC[0].gotRing = false;
	NPC[1].gotElephant = false;
	
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
	
	item[0].world = 0;
	item[0].x = 0;
	item[0].y = 0;
	item[1].world = 0;
	item[1].x = 1;
	item[1].y = 0;
	item[2].world = 1;
	item[2].x = 2;
	item[2].y = 2;
	item[3].world = 3;
	item[3].x = 7;
	item[3].y = 6;
	item[4].world = 1;
	item[4].x = 3;
	item[4].y = 1;
	item[5].world = 1;
	item[5].x = 6;
	item[5].y = 4;
	item[6].world = 0;
	item[6].x = 3;
	item[6].y = 3;
	item[7].world = 3;
	item[7].x = 1;
	item[7].y = 2;
	item[8].world = 2;
	item[8].x = 5;
	item[8].y = 1;
	item[9].world = 2;
	item[9].x = 8;
	item[9].y = 3;
	item[10].world = 2;
	item[10].x = 4;
	item[10].y = 6;
	
	for (var i = 0; i < worldMap.length; i++){
		for (var j = 0; j < worldMap[0].grid.length; j++){
			for (var k = 0; k < worldMap[0].grid[0].length; k++){
				worldMap[i].grid[j][k] = undefined;
			}
		}
	}
	
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