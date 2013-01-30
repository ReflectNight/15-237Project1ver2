/*menu.js
	draws the start menu, allows the game to be run
*/
function drawStartPage(){
	var startBackground = new Image();
	startBackground.src = "Images/Other/title.png";
	startBackground.onload = 
		function(){ctx.drawImage(startBackground, 0, 0);}
	
}; //end of drawStartPage
			
function drawInstructions(){
	var instrBackground = new Image();
	instrBackground.src = "Images/Other/instructions.png";
	instrBackground.onload = 
		function(){ctx.drawImage(instrBackground, 0, 0);}
}
			
function drawCredit(){
	var creditBackground = new Image();
	creditBackground.src = "Images/Other/credits.png";
	creditBackground.onload = 
		function(){ctx.drawImage(creditBackground, 0, 0);}
}

function mouseEvent(event) {
	
	var x = event.pageX-canvas.offsetLeft//because canvas is relative, have to subtract
	var y = event.pageY-canvas.offsetTop;
	
	if(startPage===true){
		if( x>=sqx && x <=(sqw+sqx) ){
			if( y>=225 && y <=(225+sqh)){
				startPage=false;
				instPage=true;
				drawInstructions();
			}
			else if (y>=(305) && y <=(305+sqh)){
				startPage=false;
				gameMode=true;
				screen = 1;
				run();
			}
			else if( y>=(385) && y <=(385+sqh)){
				startPage=false;
				creditPage=true;
				drawCredit();
			};
		};
	}//end startpage controls
	else if (instPage || creditPage || screen === 4){
		if( (x>=550 && x<=(600))&& ((y>=0) && (y<=50))){
			startPage=true;
			creditPage=false;
			instPage=false;
			drawStartPage();
		};
	}
}
canvas.addEventListener('mousedown', mouseEvent);//end mousedown event listener
