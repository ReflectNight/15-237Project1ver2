/* player.js
 *		Handles all player actions, stats, items, and interactions. All
 *		player data is stored in the player Object.
*/

// getPlayerPos(): Gets the 50x50 square the player is inhabiting.
function getPlayerPos(){
	var pos = new Object();
	pos.x = Math.floor((player.x + 10) / 50);
	pos.y = Math.floor((player.y - 80)/ 50);
	
	//console.log("Player position: (" + pos.x + ", " + pos.y + ")");
	return pos;
}

// drawPlayer(): Draws the player.
function drawPlayer(){
	if (moveUp)
	{
		player.dir = 2;
		if (90 <= player.y)	
			player.y -= 10;
	}
	else if (moveDown)
	{
		player.dir = 0;
		if (player.y <= (gameHeight - 64))	
			player.y += 10;
	}
	else if (moveLeft)
	{
		player.dir = 1;
		if (0 <= player.x)	
			player.x -= 10;
	}
	else if (moveRight)
	{
		player.dir = 3;
		if (player.x <= (gameWidth - 42))	
			player.x += 10;
	}
	
	switch (player.dir){
		case 0:
			if (player.isMoving){
				ctx.drawImage(player.sprite[0][player.step], player.x, player.y);
				player.step = (player.step + 1) % 4;
			}
			else ctx.drawImage(player.sprite[0][0], player.x, player.y);
			break;
		case 1:
			if (player.isMoving){
				ctx.drawImage(player.sprite[2][player.step], player.x, player.y);
				player.step = (player.step + 1) % 4;
			}
			else ctx.drawImage(player.sprite[2][0], player.x, player.y);
			break;
		case 2:
			if (player.isMoving){
				ctx.drawImage(player.sprite[1][player.step], player.x, player.y);
				player.step = (player.step + 1) % 4;
			}
			else ctx.drawImage(player.sprite[1][0], player.x, player.y);
			break;
		case 3:
			if (player.isMoving){
				ctx.drawImage(player.sprite[3][player.step], player.x, player.y);
				player.step = (player.step + 1) % 4;
			}
			else ctx.drawImage(player.sprite[3][0], player.x, player.y);
			break;
		default:
			break;
	}
}

// doAction(): Tries to complete an action with the object in the same
// grid square.
function doAction(){
	var pos = getPlayerPos();
	var obj = worldMap[currentWorld].grid[pos.x][pos.y];
	var obj2 = worldMap[currentWorld].grid[pos.x][pos.y + 1];
	
	if (obj !== undefined){
		console.log("obj: " + obj);
		console.log("obj name: " + obj.name);
	
		// item action
		if (obj.type === "item"){
			console.log("item action.");
			itemAction(obj);
		}
		// NPC action
		else if (obj.type === "NPC"){
			console.log("NPC action.");
			npcAction(obj, player.item);
		}
	}
	else if (obj2 !== undefined){
		console.log("obj2: " + obj2);
		console.log("obj2 name: " + obj2.name);
	
		// item action
		if (obj2.type === "item"){
			console.log("item action.");
			itemAction(obj2);
		}
		// NPC action
		else if (obj2.type === "NPC"){
			console.log("NPC action.");
			npcAction(obj2, player.item);
		}
	}
}