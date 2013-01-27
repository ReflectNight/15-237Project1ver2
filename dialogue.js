/*
This is to be the dialogue files

*/

function drawDialogue(){
	//ctx.fillStyle = "white";
  //ctx.fillRect(0,450,600,150);
	var image = new Image();
	image.src = "Images/Worlds/dialogue.png";
	ctx.drawImage(image, 0, 450);
}

function printDialogue(txt){
  drawDialogue();
	
	ctx.textAlign = 'left';
  ctx.font="20pt Helvetica";
  ctx.fillStyle = "black";
  ctx.fillText(txt,10,500);
  //press space to continue
}
