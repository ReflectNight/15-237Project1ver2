// endscene.js

//Achievements

// getEndStats(): Returns a string of achievements.
function getEndStats(){
}

// drawEndPage(): Draws the end scene with all of your achievements.
function drawEndPage(){
	ctx.fillStyle = "rgba(230, 170, 200, 0.25)";
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	
	ctx.fillStyle = "black";
	ctx.font = 'bold 40pt Arial';
	ctx.textAlign = "center";
	ctx.strokeText("Game Over", canvasCenter, 140);
	
	ctx.font = 'bold 20pt Arial';
	ctx.strokeText("Press space to continue", canvasCenter, 300);
	
}