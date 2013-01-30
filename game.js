/* game.js
 * 		Runs the game. Redraws the entire canvas repeatedly.
*/

// drawBG(): Draws the background.
function drawBG(){
	ctx.drawImage(worldMap[currentWorld].img, 0, 0, 450, 450);
}

// drawObjAbove(playerLoc): Draws all objects above the player.
function drawObjAbove(playerLoc){
	for (var i = 0; i < worldMap[currentWorld].grid.length; i++)
		for (var j = 0; j <= playerLoc; j++)
		{
			if (worldMap[currentWorld].grid[i][j] !== undefined)
			{
				if (worldMap[currentWorld].grid[i][j].type === "item")
				{
					if(worldMap[currentWorld].grid[i][j].onScreen){
						ctx.drawImage(worldMap[currentWorld].grid[i][j].img, 
							i*50, j*50 + 90);
					}
				}
				else 
					ctx.drawImage(worldMap[currentWorld].grid[i][j].img, 
						i*50, j*50 + 80);
			}
		}
}

// drawObjBelow(playerLoc): Draws all objects below the player.
function drawObjBelow(playerLoc){
	for (var i = 0; i < worldMap[currentWorld].grid.length; i++)
		for (var j = playerLoc + 1; j < worldMap[currentWorld].grid[0].length; j++)
		{
			if (worldMap[currentWorld].grid[i][j] !== undefined)
			{
				if (worldMap[currentWorld].grid[i][j].type === "item")
				{
					if(worldMap[currentWorld].grid[i][j].onScreen){
						ctx.drawImage(worldMap[currentWorld].grid[i][j].img, 
							i*50, j*50 + 90);
					}
				}
				else 
					ctx.drawImage(worldMap[currentWorld].grid[i][j].img, 
						i*50, j*50 + 80);
			}
		}
}

// onTimer(): Handles the event when page is refreshed. 
function onTimer(){
	if(screen === 1){
		var pos = getPlayerPos();
		
		drawBG();
		drawObjAbove(pos.y);
		drawPlayer();
		drawObjBelow(pos.y);
		drawTeleportMenu();
		
		if (numTurns <= 0 || complete){
			screen = 2;
			clearInterval(intervalID);
			drawGameEnd();
		}
	}
}

// run(): Executes the game.
function run(){
	init();
	
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	
	drawDialogue();
	printDialogue("Welcome to the Scavenger Hunt!! ;If you have any questions, talk to the NPCs on the top right!");
	drawSidebar();
	intervalID = setInterval(onTimer, timerDelay);
}