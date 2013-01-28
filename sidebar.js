/* Sidebar.js
 * For all sidebar items
 */

function drawStatsBar(){
	ctx.drawImage(statsBar, gameWidth, 0);
}
 
function drawItemBar(){
	ctx.drawImage(itemBar, gameWidth, 150);
}

function drawTurnBar(){
	ctx.drawImage(turnBar, gameWidth, 300);
}

function updateStats(){
	drawStatsBar();
  //to be completed
  //this is you
  //happyface
}

function updateItem(){
  drawItemBar();
	
	ctx.fillStyle = "white";
	ctx.fillRect(gameWidth + 50, 200, 50, 50);
	if (player.item !== null)
		ctx.drawImage(player.item.img, gameWidth+50, 200);
}

function updateMoves(){
	drawTurnBar();

	ctx.textAlign = 'left';
  ctx.fillStyle="white";
  //ctx.fillRect(gameWidth + 50 ,350,50,50);
  ctx.font="30pt Monospace";
  ctx.fillStyle="#000";
  ctx.fillText(numTurns,500,388);
}

function drawSidebar(){
	updateStats();
	updateItem();
	updateMoves();
}