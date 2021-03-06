/* listener.js
 * 		Handles all key listener events.
*/

function updateDown(keyCode, x){
	// Teleporting through worlds 0 - 3
	if ((48 <= keyCode) && (keyCode < (48 + numWorlds))){
		if (state === 0){
				goToWorld(keyCode - 48);
				state = 1;
			}
	}
	
	switch (keyCode){
	//performing an action
		case 32: // spacebar
			if (screen === 4){
				startPage=true;
				creditPage=false;
				instPage=false;
				drawStartPage();
			}
			else if (screen === 3){
				drawEndPage();
			}
			else if (state === 1){
				doAction();
			}
			break;
	
	//WASD movement
		case 38:
		case 87: //w
			player.isMoving = true;
			moveUp = x;
			break;
		case 37:
		case 65: //a
			player.isMoving = true;
			moveLeft = x;
			break;
		case 40:
		case 83: //s
			player.isMoving = true;
			moveDown = x;
			break;
		case 39:
		case 68: //d
			player.isMoving = true;
			moveRight = x;
			break;
			
		//Teleporting
		case 84: // t
			if (state !== 0){
				//enter teleport menu
				state = 0;
			}
			else{ //exit teleport menu
				state = 1;
			}
			break;
		default:
			break;
	}
}

function updateUp(keyCode, x){
	switch (keyCode){
	//WASD movement
		case 38:
		case 87: //w
			player.isMoving = false;
			moveUp = x;
			break;
		case 37:
		case 65: //a
			player.isMoving = false;
			moveLeft = x;
			break;
		case 40:
		case 83: //s
			player.isMoving = false;
			moveDown = x;
			break;
		case 39:
		case 68: //d
			player.isMoving = false;
			moveRight = x;
			break;
		default:
			break;
	}
}

function onKeyDown(evt){
	updateDown(evt.keyCode, true);
}

function onKeyUp(evt){
	updateUp(evt.keyCode, false);
}

window.addEventListener('keydown',onKeyDown,true);
window.addEventListener('keyup',onKeyUp,false);