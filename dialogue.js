/*
This is to be the dialogue files

*/

//draws the dialogue box
function drawDialogue(){
	//ctx.fillStyle = "white";
	//ctx.fillRect(0,450,600,150);
	var image = new Image();
	image.src = "Images/Worlds/dialogue.png";
	
	return image;
}

//prints whatever it tells you to, can make it multiline
function printDialogue(txt){
	//var multiline= txt.split(';');
	var image = drawDialogue();
	image.onload = function(){ctx.drawImage(image, 0, 450);
	ctx.textAlign = 'left';
	ctx.font="15pt Helvetica";
	ctx.fillStyle = "black";
	ctx.fillText(txt,30,500);
	}
	/*
	var line = 500;
	for( var i=0; i<multiline.length; i++{
		ctx.fillText(txt,30,line+(i*30)); */
		
}
