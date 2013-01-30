/* dialogue.js
Draws dialogue,
prints anything that appears in the dialogue box.
*/

//draws the dialogue box
function drawDialogue(){
	var image = new Image();
	image.src = "Images/Worlds/dialogue.png";
	
	return image;
}

//prints whatever it tells you to, can make it multiline with ';'
function printDialogue(txt){

	var image = drawDialogue();
	image.onload = function(){
		ctx.drawImage(image, 0, 450);
		ctx.textAlign = 'left';
		ctx.font="15pt Helvetica";
		ctx.fillStyle = "black";
		
		var multiline= txt.split(';');//tokenizer
		var line = 500;
		for (var i=0; i<multiline.length; i++){
		ctx.fillText(multiline[i],30,line+(i*30));
	}
	}
	
}
