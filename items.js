/* items.js
 * 		Contains item-related functions.
*/

function itemAction(obj){
	if (obj.name === "Book"){
		if (player.int < 3){
			printDialogue(obj.description1);
			numTurns--;
			player.int++;
			updateMoves();
			updateStats();
		}
		else{
			printDialogue(obj.description2);
		}
		
		return;
	}
	
	else if (obj.name === "Weight"){
		if (player.str < 3){
			printDialogue(obj.description1);
			numTurns--;
			player.str++;
			updateMoves();
			updateStats();
		}
		else{
			printDialogue(obj.description2);
		}
		
		return;
	}

	numTurns--;
	updateMoves();
	
	if (obj.str > player.str){
		printDialogue("You are too weak to pick this item up!");
		return;
	}
	
	if(player.item === null)
		pickUp(obj);
	else{
		switchItem(obj);
	};
}

function pickUp(item){
	player.item = item;
	item.onScreen = false;
	worldMap[currentWorld].grid[player.item.x][player.item.y] = undefined;
	
	drawDialogue();
	printDialogue("You have picked up "+item.name+"!");
	
	updateItem();
}

function switchItem(newItem){
	player.item.onScreen = true;
	newItem.onScreen = false;
	
	worldMap[currentWorld].grid[newItem.x][newItem.y] = player.item;
	
	player.item.x=newItem.x;
	player.item.y=newItem.y;
	
	printDialogue("You dropped "+player.item.name+" and picked up "+newItem.name+"!");
	
	player.item = newItem;
	updateItem();
}
