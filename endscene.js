// endscene.js

//Achievements

// getEndStats(): Returns a string of achievements.
function getEndStats(){
	var achievements = [""];
	
	//number of friends
	var numFriends = 0;
	for(var i = 0; i < NPC.length; i++){
		if (NPC[i].done)
			numFriends++;
	}
	
	if (numFriends === 2)
		achievements.push("We're your only friends. That's sad.");
	else achievements.push("You have " + numFriends + " friends! Good for you.");
	
	//int
	//str
	//kosbie
	
	return achievements;
}

// drawGameEnd(): Draws end game screen. 
function drawGameEnd(){
	console.log("drawGameEnd");

	ctx.fillStyle = "rgba(100, 100, 100, 0.5)";
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	
	ctx.fillStyle = "white";
	ctx.font = 'bold 40pt Arial';
	ctx.textAlign = "center";
	ctx.fillText("Game Over", canvasCenter, 140);
	ctx.fillStyle = "black";
	ctx.strokeText("Game Over", canvasCenter, 140);
	
	ctx.fillStyle = "white";
	ctx.font = 'bold 20pt Arial';
	ctx.fillText("Press space to continue", canvasCenter, 300);
	ctx.fillStyle = "black";
	ctx.strokeText("Press space to continue", canvasCenter, 300);
	
	screen = 3;
}

// drawEndPage(): Draws the end scene with all of your achievements.
function drawEndPage(){
	console.log("drawEndPage");
	//drawEndPage
	
	var endImage = new Image();
	endImage.src = "Images/Other/results.png";
	endImage.onload = function(){ctx.drawImage(endImage, 0, 0)
	
	var achievements = getEndStats();
	
	ctx.fillStyle = "black";
	ctx.font = 'bold 20pt Arial';
	ctx.textAlign = "left";
	for(var i = 0; i < achievements.length; i++){
		ctx.fillText("HI", 0, 0);
		ctx.fillText(achievements[i], 50, i*25 + 100);
		console.log(achievements[i]);
	}

	};
	screen = 4;
}
