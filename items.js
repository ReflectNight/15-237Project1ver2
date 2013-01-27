/* items.js
 * 		Contains item-related functions.
*/

function itemAction(obj){
	
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
}

function switchItem(newItem){
	player.item.onScreen = true;
	newItem.onScreen = false;
	
	worldMap[currentWorld].grid[newItem.x][newItem.y] = player.item;
	
	player.item.x=newItem.x;
	player.item.y=newItem.y;
	
	printDialogue("You dropped "+player.item.name+" and picked up "+newItem.name+"!");
	
	player.item = newItem;
}
