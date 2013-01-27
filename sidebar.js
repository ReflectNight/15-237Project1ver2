/* Sidebar.js
 * For all sidebar items
 */

function drawSidebar(){
var statsBar = new Image();
	statsBar.src = "Images/Worlds/stats.png";
	ctx.drawImage(statsBar, gameWidth, 0);
	
	var itemBar = new Image();
	itemBar.src = "Images/Worlds/item.png";
	ctx.drawImage(itemBar, gameWidth, 150);

	var turnBar = new Image();
	turnBar.src = "Images/Worlds/turns.png";
	ctx.drawImage(turnBar, gameWidth, 300);
}

function updateStats(){
  //to be completed
  //this is you
  //happyface
}

function updateItem(){
  
}

function updateMoves(){
  ctx.fillStyle="rgb(200,40,50)";
  ctx.fillRect(gameWidth,300,size,size);
  ctx.font="30pt Monospace";
  ctx.fillStyle="#000";
  ctx.fillText(numTurns,500,350);
}
