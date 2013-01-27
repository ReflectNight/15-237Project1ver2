// menu.js


/** Reformatted so we can call menu again later when game ends. **/
/** I made a data.js that'll initialize everything, so you can
		put whatever text you want for instructions/credits/whatever there
		I dunno go nuts with it gurl **/

function drawStartPage(){
	//background
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	
	//squares for 3 clickables rectangles
	ctx.fillStyle = "rgba(230, 170, 200, 0.25)";
	ctx.fillRect (sqx, 225, sqw, sqh);//x,y,width,height, this is for instructions
	ctx.fillStyle = "rgba(0, 210, 30, 0.25)";
	ctx.fillRect (sqx, 305, sqw, sqh);//for start
	ctx.fillStyle = "rgba(250, 210, 0, 0.25)";
	ctx.fillRect (sqx, 385, sqw, sqh);//for credit
	
	//text
	ctx.font = 'bold 40pt Arial';
	ctx.textAlign = "center";
	ctx.fillStyle = "rgb(50, 50, 50)";
	ctx.strokeText("Game Name Ahoy", canvasCenter, 140);
	ctx.font = '20pt Helvetica';
	ctx.fillText("Instructions", canvasCenter, 250);
	ctx.fillText("Start", canvasCenter, 330);
	ctx.fillText("Credit", canvasCenter, 410);
}; //end of drawStartPage
			
function drawInstructions(){
	//background
	ctx.fillStyle = "rgb(250,240,245)";
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	
	//back button square
	ctx.fillStyle = "rgba(200, 200, 240, 0.50)";
	ctx.fillRect(270, 450, 65, sqh);
	
	//text
	ctx.font = '30pt Helvetica';
	ctx.textAlign = "center";
	ctx.fillStyle = "rgb(50, 50, 50)";
	ctx.fillText("INSTRUCTIONS", canvasCenter, 150);
	ctx.font = '15pt Helvetica';
	ctx.fillText("Objective: Find what characters want and give it to them!", canvasCenter, 200);
	ctx.fillText("Use WASD to Move your character <insertcharacterhere>", canvasCenter, 240);
	ctx.fillText("Space bar is action key, use it to interact with items and people.", canvasCenter, 260);
	ctx.fillText("The number of turns you have left is displayed on the left.", canvasCenter, 280);
	ctx.fillText("The game ends when you run out of turns or finish your quest.", canvasCenter, 300);
	ctx.fillText("Good luck and have fun!", canvasCenter, 340);
	ctx.font = '12pt Helvetica';
	ctx.fillText("< Back",canvasCenter,470);
}
			
function drawCredit(){
	//background
	ctx.fillStyle = "rgb(255,255,224)";
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	
	//back button square
	ctx.fillStyle = "rgba(200, 200, 240, 0.50)";
	ctx.fillRect (270, 450, 65, sqh);
	
	//text
	ctx.font = '30pt Helvetica';
	ctx.textAlign = "center";
	ctx.fillStyle = "rgb(50, 50, 50)";
	ctx.fillText("~Credits~", canvasCenter, 150);
	ctx.font = '15pt Helvetica';
	ctx.fillText("This game was coded and designed by:", canvasCenter, 200);
	ctx.fillText("Angela Qiu & Sarah Chen \251 2013", canvasCenter, 220);
	ctx.fillText("~~~~~", canvasCenter, 240);
	ctx.font = '10pt Caslon';
	ctx.fillText("HINT: one ring to rule them all", canvasCenter, 280);
	ctx.fillText("(kthxbye)", canvasCenter, 290);
	ctx.font = '12pt Helvetica';
	ctx.fillText("< Back",canvasCenter,470);
}
						
canvas.addEventListener('mousedown', function(event) {
	
	var x = event.pageX-canvas.offsetLeft//because canvas is relative, have to subtract
	var y = event.pageY-canvas.offsetTop;
	
	if(startPage===true){
		if( x>=sqx && x <=(sqw+sqx) ){
			//console.log(x+","+y);
			if( y>=225 && y <=(225+sqh)){
				//console.log("Instructions");
				startPage=false;
				instPage=true;
				drawInstructions();
			}
			else if (y>=(305) && y <=(305+sqh)){
				//console.log("Start");
				startPage=false;
				gameMode=true;
				run();
			}
			else if( y>=(385) && y <=(385+sqh)){
				//console.log("Credit");
				startPage=false;
				creditPage=true;
				drawCredit();
			};
		};
	}//end startpage controls
	else if (instPage === true || creditPage===true){
		if( (x>=270 && x<=(270+65))&& (y>=(450) && y<=(450+sqh))){
			startPage=true;
			creditPage=false;
			instPage=false;
			drawStartPage();
		};
	}//end instPage,creditPage controls
	else{ // all other mouseclick controls: ie in game mode
		//console.log("no longer in startpage");
	};
});//end mousedown event listener
