/* world.js
 * 		Handles teleporting and drawing the world's NPCs and items.
*/

// Brings up the menu to teleport to a different world.
function drawTeleportMenu(){
	if (state === 0)
	{
		ctx.font = '25pt Helvetica';
		ctx.textAlign = "center";
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.fillText("Teleporting... (0-3)", 225, 225);
	}
}

function goToWorld(label){
	currentWorld = label;
	console.log("Went to world " + currentWorld);
	if(currentWorld ===0)
		printDialogue("You arrived at home");
	if(currentWorld ===1)
		printDialogue("You arrived at the forest clearing");
	if(currentWorld ===2)
		printDialogue("You arrived at the beach");
	if(currentWorld ===3)
		printDialogue("You arrived on the streetz...;It's suspicous");
}