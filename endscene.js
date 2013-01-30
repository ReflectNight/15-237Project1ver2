/* endscene.js
	Handles the endscreen where everything is printed out
*/
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
	if (player.int === 0){
		achievements.push("0 int? I guess we can't measure your intelligence, scale won't "); 
		achievements.push("go that low.");
	}
	else if (player.int === 3)
		achievements.push("You have 3 int! Aren't you the most special snowflake.");
	
	//str
	if (player.str === 0)
		achievements.push("0 str... do you even lift bro?");
	else if (player.str === 3)
		achievements.push("3 str! You work out!");
	
	//kosbie
	if (NPC[4].done){
		achievements.push("You're friends with Professor Kosbie!");
		achievements.push("Maybe you'll get a few extra points on the next quiz.");
	}
	
	//angela
	if (NPC[0].gotRing){
		achievements.push("YOU GAVE THE ONE RING TO ANGELA MYERRRR HERR HERR");
	}
	
	//sarah
	if (NPC[1].gotElephant){
		achievements.push("You gave Sarah an elephant. Sarah is confused! ")
		achievements.push("She hurt herself in her confusion.");
	}
	
	return achievements;
}

// drawGameEnd(): Draws end game screen. 
function drawGameEnd(){
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
	var endImage = new Image();
	endImage.src = "Images/Other/results.png";
	endImage.onload = function(){ctx.drawImage(endImage, 0, 0)
	
	var achievements = getEndStats();
	
	ctx.fillStyle = "black";
	ctx.font = 'bold 11pt Arial';
	ctx.textAlign = "left";
	for(var i = 0; i < achievements.length; i++){
		ctx.fillText("HI", 0, 0);
		ctx.fillText(achievements[i], 70, i*25 + 100);
	}

	};
	screen = 4;
}
