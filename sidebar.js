/* Sidebar.js
 * For all sidebar items - includes StatBar, ItemBar, TurnBar and their updates
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
	ctx.textAlign = 'left';
	ctx.font="15pt Monospace";
	ctx.fillStyle = 'white';
	ctx.fillText("Str: " + player.str,485,70);
	ctx.fillText("Int: " + player.int,485,90);
}

function updateItem(){

	drawItemBar();
	if (player.item !== null)
		ctx.drawImage(player.item.img, gameWidth+50, 200);
}

function updateMoves(){

	drawTurnBar();
	ctx.textAlign = 'left';
	ctx.font="30pt Monospace";
	ctx.fillStyle = 'white';
	ctx.fillText(numTurns,500,388);
}

function drawSidebar(){
	updateStats();
	updateItem();
	updateMoves();
}